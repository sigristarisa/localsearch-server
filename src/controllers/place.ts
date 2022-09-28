import { RequestHandler } from "express";
import { Place } from "../models/place";
import { PlaceId } from "../helpers/types";

export const getPlaceId: RequestHandler<PlaceId> = async (req, res) => {
  //   const { placeId } = req.body;
  //   const validPlaceId: string[] = [
  //     "GXvPAor1ifNfpF0U5PTG0w",
  //     "ohGSnJtMIC5nPfYRi_HTAg",
  //   ];
  //   if (!validPlaceId.includes(placeId)) res.json({ data: "oops" });
  //   const foundPlace = await Place.getPlaceData(placeId);
  //   res.json({ data: foundPlace });

  res.json({ data: "Hi" });
};
