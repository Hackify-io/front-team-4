class ProcedureService {
  static getProcedures() {
    const procedures = [
      { name: "Surgery", icon: "star" },
      { name: "Chemotaxis", icon: "star" },
      { name: "Strees Terapia", icon: "star" },
      { name: "Thooth Surgery", icon: "star" }
    ];
    return procedures;
  }
}

export default ProcedureService;
