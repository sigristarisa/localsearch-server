import { OpeningHours, PlaceId } from "../helpers/types";
import fetch from "node-fetch";

export class Place {
  placeId: string;
  what: string;
  where: string;
  openingHours: OpeningHours | null;

  constructor(
    placeId: string,
    what: string,
    where: string,
    openingHours: OpeningHours | null
  ) {
    this.placeId = placeId;
    this.what = what;
    this.where = where;
    this.openingHours = openingHours;
  }

  static async getPlaceData(placeId: string) {
    let place;
    await fetch(
      `https://storage.googleapis.com/coding-session-rest-api/${placeId}`
    )
      .then((res) => res.json())
      .then(
        (placeData) =>
          (place = new Place(
            placeId,
            placeData.displayed_what,
            placeData.displayed_where,
            placeData.opening_hours
          ))
      );
    return place;
  }
}
