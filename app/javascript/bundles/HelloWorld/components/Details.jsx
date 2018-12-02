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
    const leftColumn = {
      textAlign: 'center'
    };

    const tableStlye = {
      margin: '0 auto'
    };

    return (
      <table style={tableStlye}>
        <tbody>
          <tr>
            <td style={leftColumn}><b>Name:</b></td>
            <td>{this.props.name}</td>
          </tr>
          <tr>
            <td style={leftColumn}><b>Category:</b></td>
            <td>{this.props.category}</td>
          </tr>
          <tr>
            <td style={leftColumn}><b>Rank:</b></td>
            <td>{this.props.rank}</td>
          </tr>
          <tr>
            <td style={leftColumn}><b>Product Dimensions:</b></td>
            <td>{this.props.dimensions}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
