import React, {Component} from 'react';
import SelectSearch from 'react-select-search';
import stocks from './stocks.csv';

import * as $ from "jquery";

import './AlgoPage.css';

class AlgoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{name: 'dumb', value: 'bitch'}]
    };
  }

  //Event Change Handler Method for text inputs
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  //parse csv
  successFunction(data) {
    var lines = data.split("\n");
    while( typeof lines[0] !== "undefined" ){
            var line = lines.shift();
            var options = this.state.options;
            options.push({name: line, value: line});
            this.setState({options});
        }
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: stocks,
      dataType: 'text',
    }).done(this.successFunction.bind(this));
  }

  getOptions() {
    console.log(this.state.options)
    return (this.state.options)
  }

  render() {
    var options = this.getOptions()

    return(
      <div className = "algopage">

        <h1>Create an Algorithm</h1>
        <SelectSearch options={options} search='true' value="st" name="ticker" placeholder="Stock Ticker" />
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
