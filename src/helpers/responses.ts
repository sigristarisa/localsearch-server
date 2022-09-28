import { Response } from "express";
import { StatusMessage, PlaceData } from "./types";

const STATUS_MESSAGES: StatusMessage = {
  200: "success - OK",
  400: "client error – bad request",
  500: "server error – internal server error",
};

export const sendDataResponse = (
  res: Response,
  statusCode: number,
  payload: PlaceData
) => {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    data: payload,
  });
};

export const sendMessageResponse = (
  res: Response,
  statusCode: number,
  message: string
) => {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    message,
  });
};
