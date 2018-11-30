import PropTypes from 'prop-types';
import React from 'react';
import Details from './Details';
import Search from './Search';

export default class Home extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search></Search>
        <hr/>
        <Details name={"Hello"} category={"TV"} rank={"2"} dimensions={"2x2"}></Details>
      </div>
    );
  }
}
