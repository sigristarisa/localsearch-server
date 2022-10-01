import { PlaceData, OpeningHours } from "../helpers/types";
import fetch from "node-fetch";

export class Place {
  constructor(
    public placeId: string,
    public what: string,
    public where: string,
    public openingHours: OpeningHours
  ) {
    this.placeId = placeId;
    this.what = what;
    this.where = where;
    this.openingHours = openingHours;
  }

  static formatOpeningHours(openingHours: OpeningHours) {
    const formattedOpeningHours = { ...openingHours };
    const days: string[] = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    const openingDays: string[] = Object.keys(formattedOpeningHours.days);
    console.log("openingDays", openingDays);

    const closedDays = days.filter((day) => {
      console.log("day in filter", day);
      if (!openingDays.includes(day)) return day;
    });
    console.log("closedDays", closedDays);

    for (const closedDay of closedDays) {
      formattedOpeningHours["days"][
        closedDay as keyof typeof formattedOpeningHours.days
      ] = [];
    }

    return formattedOpeningHours;
  }

  static async getData(placeId: string): Promise<PlaceData> {
    let fetchedPlace!: PlaceData;
    await fetch(`${process.env.fetchURL}${placeId}`)
      .then((res) => res.json())
      .then(
        (placeData) =>
          (fetchedPlace = new Place(
            placeId,
            placeData.displayed_what,
            placeData.displayed_where,
            this.formatOpeningHours(placeData.opening_hours)
          ))
      );
    return fetchedPlace;
  }
}
