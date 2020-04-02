import Medical from "./../api/Medical";
class EventService {
  static async getRecentEvents() {
    try {
      const eventResponse = await Medical.get("/events");
      if (eventResponse.data.isSuccess) {
        return eventResponse.data.result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}
export default EventService;
