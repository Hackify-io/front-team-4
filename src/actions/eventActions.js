import { GET_RECENT_EVENTS } from "./index";
import EventService from "../services/eventService";

export const getRecentEvents = () => async (dispatch) => {
  const events = await EventService.getRecentEvents();
  const appEvents = events
    ? events.map((e) => {
        return {
          title: e.title,
          displayImage: e.displayImage,
          description: e.description,
          startDate: e.startDate,
          endDate: e.endDate,
        };
      })
    : null;
  dispatch({
    type: GET_RECENT_EVENTS,
    payload: appEvents,
  });
};
