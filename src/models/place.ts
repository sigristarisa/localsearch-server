import { OpeningHours, PlaceId } from "../helpers/types";
import fetch from "node-fetch";

export class Place {
  constructor(
    public placeId: string,
    public what: string,
    public where: string,
    public openingHours: OpeningHours | null
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
