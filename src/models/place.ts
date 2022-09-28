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
            placeData.opening_hours
          ))
      );
    return fetchedPlace;
  }
}
