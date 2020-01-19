import Auth from "./../api/Medical";

class ClinicService {
  static async login(login) {
    try {
      const loginResponse = await Auth.post("/logins/clinic", login);
      if (loginResponse.data.isSuccess) {
        return loginResponse.data.result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  static getAppointments(clinicId) {
    const appointments = [
      {
        id: "Medical",
        date: new Date("January 20 2020 12:00"),
        status: "Pending"
      },
      {
        id: "Medical",
        date: new Date("January 20 2020 14:00"),
        status: "Accepted"
      },
      {
        id: "Other",
        date: new Date("January 20 1980 19:00"),
        status: "Accepted"
      }
    ];
    return appointments.filter(a => a.id === clinicId);
  }

  static getClinic(id) {
    const procedures = [
      { name: "Surgery", icon: "star" },
      { name: "Chemotaxis", icon: "star" },
      { name: "Thooth Surgery", icon: "star" }
    ];
    const dummyClinic = {
      id: id,
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas",
      name: "Medical",
      feedback: [
        {
          username: "Jhonn",
          rate: 4,
          message: "This Clinic is clean"
        },
        {
          username: "Jhonn",
          rate: 3,
          message: "This Clinic is clean"
        }
      ],
      procedures: procedures
    };
    return dummyClinic;
  }
}

export default ClinicService;
