import Medical from './../api/Medical';

class PlaceService {
  static async getPlaces() {
    try {
      const placesResponse = await Medical.get('/places');
      if (placesResponse.data.isSuccess) {
        return placesResponse.data.result.docs;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default PlaceService;
