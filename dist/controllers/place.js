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
const getPlaceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { placeId } = req.body;
    //   const validPlaceId: string[] = [
    //     "GXvPAor1ifNfpF0U5PTG0w",
    //     "ohGSnJtMIC5nPfYRi_HTAg",
    //   ];
    //   if (!validPlaceId.includes(placeId)) res.json({ data: "oops" });
    //   const foundPlace = await Place.getPlaceData(placeId);
    //   res.json({ data: foundPlace });
    res.json({ data: "Hi" });
});
exports.getPlaceId = getPlaceId;
//# sourceMappingURL=place.js.map