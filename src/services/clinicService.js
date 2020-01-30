import Medical from './../api/Medical';
//import { getClinic } from '../actions/clinicActions';

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

  static getAppointments(clinicId) {
    const appointments = [
      {
        id: 'Medical',
        date: new Date('January 20 2020 12:00'),
        status: 'Pending'
      },
      {
        id: 'Medical',
        date: new Date('January 20 2020 14:00'),
        status: 'Accepted'
      },
      {
        id: 'Other',
        date: new Date('January 20 1980 19:00'),
        status: 'Accepted'
      }
    ];
    return appointments.filter(a => a.id === clinicId);
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

  static getClinics(procedure, place) {
    //const clinic = getClinic('Medical');
    const clinics = [];
    return clinics;
  }
  static submitAppointment(userId, clinicId, appointment) {
    return null;
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
      await Medical.put(`/clinics/${clinicId}`, clinic);
      const updatedResponse = await Medical.get(`/clinics/${clinicId}`);
      return updatedResponse.data.result;
    } catch (err) {
      return null;
    }
  }
}

export default ClinicService;
