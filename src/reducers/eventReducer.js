import { GET_RECENT_EVENTS } from './../actions/index';

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECENT_EVENTS:
      return {
        ...state,
        recentEvents: action.payload,
      };
    default:
      return state;
  }
}
