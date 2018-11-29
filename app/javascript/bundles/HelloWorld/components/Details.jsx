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

    this.state = { 
      name: this.props.name,
      category: this.props.category,
      rank: this.props.rank,
      dimensions: this.props.dimensions,
     };
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>      
        <p>Category: {this.state.category}</p>      
        <p>Rank: {this.state.rank}</p>      
        <p>Product Dimensions: {this.state.dimensions}</p>      
      </div>
    );
  }
}
