import React, {Component} from 'react';
import SelectSearch from 'react-select-search';

import './AlgoPage.css';

class AlgoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //Event Change Handler Method for text inputs
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, error: ''});
    this.props.updateUsername(event.target.value)
  }

  render() {

    //parse csv

    return(
      <div className = "algopage">
        <h1>hi</h1>
      </div>
    )
  }
}

export default AlgoPage;
