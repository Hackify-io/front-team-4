import React, { Component } from "react";
import { Search } from "semantic-ui-react";

const initialState = {
  isLoading: false,
  data: null,
  results: [],
  value: "",
  field: ""
};

export default class AutoComplete extends Component {
  state = initialState;
  componentDidMount() {
    const { data, field } = this.props;
    this.setState({ results: data, field: field });
  }
  componentDidUpdate() {
    const { data } = this.props;
    if (this.state.data === null && this.props.data) {
      this.setState({ data: data });
    }
  }
  //Descripcion: Capturar el evento de seleccion
  //e:evento de react
  //result:objeto seleccionado
  handleResultSelect = (e, { result }) => {
    const { onAutoComplete } = this.props;
    onAutoComplete(result);

    this.setState({ value: result.title, results: initialState.results });
  };
  //Descripcion:Capturar los cambios en el input de busqueda
  //e:evento de react
  //value:valor actual del input de busqueda
  handleSearchChange = (e, { value }) => {
    const { data, field, model } = this.props;
    this.setState({ isLoading: true, value });
    //Si el campo de busqueda esta vacio, reinicia el componente
    if (value.length < 1) return this.setState(initialState);
    //Filtramos de la lista de opciones
    const filteredResults = data
      .filter(e => e[field].toUpperCase().search(value.toUpperCase()) >= 0)
      .map(r => {
        const result = {
          id: r[model]._id,
          title: r[field]
        };
        return result;
      });
    //Asignar los datos filtrados al state
    this.setState({
      isLoading: false,
      results: filteredResults
    });
  };

  mapDataToRender = dataElement => {
    const { resultRender } = this.props;

    return React.cloneElement(resultRender, { ...dataElement });
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        resultRenderer={data => this.mapDataToRender(data)}
        value={value}
      />
    );
  }
}
