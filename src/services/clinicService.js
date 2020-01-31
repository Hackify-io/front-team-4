import Medical from './../api/Medical';

class ClinicService {
  static async login(login) {
    try {
      const loginResponse = await Medical.post('/logins/clinics', login);
      if (loginResponse.data.isSuccess) {
        return loginResponse.data.result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  static async register(register) {
    try {
      const registerResponse = await Medical.post(
        '/logins/clinics/register',
        register
      );
      return registerResponse;
    } catch (err) {
      return null;
    }
  }

  static async create(clinic) {
    try {
      const createResponse = await Medical.post('/clinics', clinic);
      return createResponse;
    } catch (err) {
      return null;
    }
  }

  static async getAppointments(clinicId) {
    try {
      const getResponse = await Medical.get(
        `/clinics/${clinicId}/appointments`
      );
      const appointments = getResponse.data.result;
      return appointments;
    } catch (err) {
      return null;
    }
  }

  static async getClinic(id) {
    try {
      const getResponse = await Medical.get(`/clinics/${id}`);
      const clinic = getResponse.data.result;
      return clinic;
    } catch (err) {
      return null;
    }
  }

  createDummyClinic(id) {
    const procedures = [
      { name: 'Surgery', icon: 'star' },
      { name: 'Chemotaxis', icon: 'star' },
      { name: 'Thooth Surgery', icon: 'star' }
    ];
    const dummyClinic = {
      id: id,
      description:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas',
      name: 'Medical',
      feedback: [
        {
          username: 'Jhonn',
          rate: 4,
          message: 'This Clinic is clean'
        },
        {
          username: 'Jhonn',
          rate: 3,
          message: 'This Clinic is clean'
        }
      ],
      procedures: procedures
    };
    return dummyClinic;
  }

  static async getClinics(procedure, place) {
    const data = {
      procedure: procedure._id,
      location: place._id
    };
    try {
      const getResponse = await Medical.get(`/clinics`, {
        params: data
      });
      const clinic = getResponse.data.result;
      return clinic;
    } catch (err) {
      return null;
    }
  }
  static async submitAppointment(id, appointment) {
    try {
      const createResponse = await Medical.post(
        `clinics/${id}/appointments`,
        appointment
      );
      return createResponse;
    } catch (err) {
      return null;
    }
  }

  static async changeAppointmentStatus(id, status) {
    try {
      //Get CurrentClinic
      const getResponse = await Medical.get(`/appointments/${id}`);
      let appointment = getResponse.data.result;
      //Add Procedure to Clinic
      appointment.status = status;
      await Medical.put(`/appointments/${appointment._id}`, appointment);
      const updatedResponse = await Medical.get(`/appointments/${id}`);
      return updatedResponse.data.result;
    } catch (err) {
      return null;
    }
  }

  static async addProcedure(clinicId, procedureId) {
    try {
      //Get CurrentClinic
      const getResponse = await Medical.get(`/clinics/${clinicId}`);
      let clinic = getResponse.data.result;
      if (clinic.procedures.find(p => p === procedureId)) {
        return clinic;
      }
      //Add Procedure to Clinic
      clinic.procedures = [...clinic.procedures, procedureId];
      await Medical.put(`/clinics/${clinicId}`, clinic);
      const updatedResponse = await Medical.get(`/clinics/${clinicId}`);
      return updatedResponse.data.result;
    } catch (err) {
      return null;
    }
  }

  static async removeProcedure(clinicId, procedureId) {
    try {
      const getResponse = await Medical.get(`/clinics/${clinicId}`);
      let clinic = getResponse.data.result;
      clinic.procedures = clinic.procedures.filter(p => p._id !== procedureId);
      await Medical.put(`/clinics/${clinicId}`, clinic);
      const updatedResponse = await Medical.get(`/clinics/${clinicId}`);
      return updatedResponse.data.result;
    } catch (err) {
      return null;
    }
  }

  static async edit(editedClinic) {
    const clinicId = editedClinic._id;
    try {
      const getResponse = await Medical.get(`/clinics/${clinicId}`);
      let clinic = getResponse.data.result;
      clinic.description = editedClinic.description;
      clinic.address = editedClinic.address;
      clinic.telephone = editedClinic.telephone;
      clinic.location = editedClinic.location;
      await Medical.put(`/clinics/${clinicId}`, clinic);
      const updatedResponse = await Medical.get(`/clinics/${clinicId}`);
      return updatedResponse.data.result;
    } catch (err) {
      return null;
    }
  }
}

export default ClinicService;
