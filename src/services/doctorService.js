import Medical from "./../api/Medical";
class DoctorService {
  static async getFeaturedDoctors() {
    try {
      const doctorResponse = await Medical.get("/doctors");
      if (doctorResponse.data.isSuccess) {
        return doctorResponse.data.result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}
export default DoctorService;
