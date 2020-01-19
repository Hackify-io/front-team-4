import { GET_PLACES } from "./";
import PlaceService from "./../services/placeService";

// Get Places
export const getPlaces = () => {
  const places = PlaceService.getPlaces();
  return {
    type: GET_PLACES,
    payload: places
  };
};
