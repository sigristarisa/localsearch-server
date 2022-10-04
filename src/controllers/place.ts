import { RequestHandler } from "express";
import { Place } from "../models/place";
import { PlaceData } from "../helpers/types";
import { sendDataResponse, sendMessageResponse } from "../helpers/responses";
import { validPlaceId } from "../helpers/validPlaceId";

export const getPlaceId: RequestHandler = async (req, res) => {
  const placeId: string = req.params.placeId;
  try {
    if (!validPlaceId.includes(placeId)) {
      return sendMessageResponse(res, 400, "invalid place id");
    }
    const foundPlace: PlaceData = await Place.getData(placeId);
    return sendDataResponse(res, 200, foundPlace);
  } catch (error: any) {
    return sendMessageResponse(
      res,
      500,
      "Something went wrong – please try again"
    );
  }
};
