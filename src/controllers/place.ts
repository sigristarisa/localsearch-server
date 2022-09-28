import { RequestHandler } from "express";
import { Place } from "../models/place";
import { PlaceId } from "../helpers/types";

export const getPlaceId: RequestHandler = async (req, res) => {
  const placeId = req.params.placeId;

  const validPlaceId: string[] = [
    "GXvPAor1ifNfpF0U5PTG0w",
    "ohGSnJtMIC5nPfYRi_HTAg",
  ];

  try {
    if (!validPlaceId.includes(placeId)) console.log("oops");
    const foundPlace = await Place.getPlaceData(placeId);

    res.json({ data: foundPlace });
  } catch (error) {
    // console.error("What happened?: ", error.message);
    res.status(500).json({ error: "ERROR – Something went wrong" });
  }
};
