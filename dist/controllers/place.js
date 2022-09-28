"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaceId = void 0;
const place_1 = require("../models/place");
const responses_1 = require("../helpers/responses");
const validPlaceId_1 = require("../helpers/validPlaceId");
const getPlaceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const placeId = req.params.placeId;
    try {
        if (!validPlaceId_1.validPlaceId.includes(placeId)) {
            return (0, responses_1.sendMessageResponse)(res, 400, "invalid place id");
        }
        const foundPlace = yield place_1.Place.getData(placeId);
        return (0, responses_1.sendDataResponse)(res, 200, foundPlace);
    }
    catch (error) {
        // console.error("What happened?: ", error.message);
        res.status(500).json({ error: "ERROR – Something went wrong" });
    }
});
exports.getPlaceId = getPlaceId;
//# sourceMappingURL=place.js.map