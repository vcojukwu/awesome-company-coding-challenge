import PropTypes from 'prop-types';
import React from 'react';

export default class Search extends React.Component {
  static propTypes = {
    setParentState: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { 
      asin: ""
     };
  }

  search = (event) => {
    event.preventDefault();
    fetch("/api/v1/products/" + this.state.asin)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.setParentState(data);
      });
  };

  render() {

    const formStlye = {
      width: '300px',
      margin: '0 auto',
      outline: 'none'
    };

    return (
      <div>
        <form style={formStlye}>
          <label htmlFor="name">
            Enter ASIN: &nbsp; 
          </label>
          <input
            id="name"
            type="text"
            onChange={(e) => this.setState({asin: e.target.value})}
          />
          &nbsp;
          <button
            type="button"
            onClick={this.search}
          > Search </button>
        </form>
      </div>
    );
  }
}
