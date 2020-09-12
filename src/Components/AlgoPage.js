import React, {Component} from 'react';
import SelectSearch from 'react-select-search';
import Papa from 'papaparse';

import * as $ from "jquery";

import './AlgoPage.css';

class AlgoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  //Event Change Handler Method for text inputs
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  //parse csv
  successFunction(data) {
    console.log(data)
    var lines = data.split("\n");
    console.log(lines)
    while( typeof lines[0] !== "undefined" ){
            var line = lines.shift();
            var options = [];
            options.push({name: line, value: lines[0]});
            this.setState({options});
        }
  }

  // readTextFile(file)
  // {
  //     var rawFile = new XMLHttpRequest();
  //     rawFile.open("GET", file, false);
  //     rawFile.onreadystatechange = function ()
  //     {
  //         if(rawFile.readyState === 4)
  //         {
  //             if(rawFile.status === 200 || rawFile.status == 0)
  //             {
  //                 var allText = rawFile.responseText;
  //                 alert(allText);
  //             }
  //         }
  //     }
  //     rawFile.send(null);
  // }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "stocks.csv",
      dataType: 'text',
    }).done(this.successFunction.bind(this));
  }

  render() {

    return(
      <div className = "algopage">
        <h1>Create an Algorithm</h1>
        <SelectSearch options={this.state.options} search='true' value="sv" name="language" placeholder="Choose your language" />
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
