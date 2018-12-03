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
      textAlign: 'right'
    };

    const rightColumn = {
      paddingLeft: '10px'
    };

    const tableStlye = {
      margin: '0 auto'
    };

    // Don't show anything until there is a product to show
    if (this.props.name == "") {
      return (<div></div>);
    }

    return (
      <table style={tableStlye}>
        <tbody>
          <tr>
            <td style={leftColumn}><b>Name:</b></td>
            <td style={rightColumn}>{this.props.name}</td>
          </tr>
          <tr>
            <td style={leftColumn}><b>Category:</b></td>
            <td style={rightColumn}>{this.props.category}</td>
          </tr>
          <tr>
            <td style={leftColumn}><b>Rank:</b></td>
            <td style={rightColumn}>#{this.props.rank}</td>
          </tr>
          <tr>
            <td style={leftColumn}><b>Dimensions:</b></td>
            <td style={rightColumn}>{this.props.dimensions}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
