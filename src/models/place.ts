import { OpeningHours, PlaceId } from "../helpers/types";

export class Place {
  placeId: number;
  what: string;
  where: string;
  openingHours: OpeningHours | null;

  constructor(
    placeId: number,
    what: string,
    where: string,
    openingHours: OpeningHours | null
  ) {
    this.placeId = placeId;
    this.what = what;
    this.where = where;
    this.openingHours = openingHours;
  }

  static async getPlaceData(placeId: PlaceId) {
    fetch(`${process.env.fetchURL!}${placeId}`)
      .then((res) => res.json())
      .then((placeData) => console.log(placeData));
  }
}
