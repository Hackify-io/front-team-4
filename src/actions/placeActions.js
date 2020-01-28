import { GET_PLACES } from './';
import PlaceService from './../services/placeService';

// Get Places
export const getPlaces = () => async dispatch => {
  const places = await PlaceService.getPlaces();
  const appPlaces = places
    ? places.map(p => {
        return {
          place: p,
          display: `${p.city} ${p.state} - ${p.country}`
        };
      })
    : null;
  dispatch({
    type: GET_PLACES,
    payload: appPlaces
  });
};
