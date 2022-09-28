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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class Place {
    constructor(placeId, what, where, openingHours) {
        this.placeId = placeId;
        this.what = what;
        this.where = where;
        this.openingHours = openingHours;
        this.placeId = placeId;
        this.what = what;
        this.where = where;
        this.openingHours = openingHours;
    }
    static getPlaceData(placeId) {
        return __awaiter(this, void 0, void 0, function* () {
            let place;
            yield (0, node_fetch_1.default)(`${process.env.fetchURL}${placeId}`)
                .then((res) => res.json())
                .then((placeData) => (place = new Place(placeId, placeData.displayed_what, placeData.displayed_where, placeData.opening_hours)));
            return place;
        });
    }
}
exports.Place = Place;
//# sourceMappingURL=place.js.map