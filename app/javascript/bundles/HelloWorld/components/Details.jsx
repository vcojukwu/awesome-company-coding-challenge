import PropTypes from 'prop-types';
import React from 'react';

export default class Details extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired, 
    dimensions: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>      
        <p>Category: {this.props.category}</p>      
        <p>Rank: {this.props.rank}</p>      
        <p>Product Dimensions: {this.props.dimensions}</p>      
      </div>
    );
  }
}
