import PropTypes from 'prop-types';
import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      asin: ""
     };
  }

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
            onClick={() => console.log(this.state.asin)}
          > Search </button>
        </form>
      </div>
    );
  }
}
