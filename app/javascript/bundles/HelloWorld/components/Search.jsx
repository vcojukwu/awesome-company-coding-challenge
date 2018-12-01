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
    return (
      <div>
        <form >
          <label htmlFor="name">
            Enter ASIN: 
          </label>
          <input
            id="name"
            type="text"
            onChange={(e) => this.setState({asin: e.target.value})}
          />
          <button
            type="button"
            onClick={this.search}
          > Search </button>
        </form>
      </div>
    );
  }
}
