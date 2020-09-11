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
    const options = [
    {name: 'Swedish', value: 'sv'},
    {name: 'English', value: 'en'},
    ];

    //parse csv

    return(
      <div className = "algopage">
        <h1>Create an Algorithm</h1>
        <SelectSearch options={options} search='true' value="sv" name="language" placeholder="Choose your language" />
        <select class="dropdown" multiple="">
            <option value="">State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
        </select>
      </div>
    )
  }
}

export default AlgoPage;
