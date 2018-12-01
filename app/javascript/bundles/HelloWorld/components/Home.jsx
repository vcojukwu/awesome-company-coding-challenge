import React from 'react';
import Details from './Details';
import Search from './Search';

export default class Home extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = { 
      asin: "",
      name: "",
      category: "",
      rank: "",
      dimensions: "",
    };
  }

  getState = (data) => {
    this.setState({
      name: data.name,
      category: data.category,
      rank: data.rank,
      dimensions: data.dimensions,
    })
  }

  render() {
    return (
      <div>
        <Search setParentState={this.getState}></Search>
        <hr/>
        <Details 
          name={this.state.name}
          category={this.state.category} 
          rank={this.state.rank} 
          dimensions={this.state.dimensions}>
        </Details>
      </div>
    );
  }
}
