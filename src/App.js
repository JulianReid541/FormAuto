import React from "react";
import SearchBar from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.handleRequestOptions = this.handleRequestOptions.bind(this);
 
    this.state = { options: [] };
  }
 
  // text in input is "I want @ap"
  handleRequestOptions(part) {
    const labels = getLabels(part);
    this.setState({ options: labels });
  }
  
  render() {
    return (
      <div className="text-center">
        <SearchBar 
          Component="Input"
          type="text" 
          onRequestOptions={this.handleRequestOptions} 
          options={this.state.options} 
        />
      </div>
    );
  }
}

function getLabels(keyword) {
	const allLabels = ['NextActions', 'Someday_Actions', 'Costco', 'Alexa'];
  const result = allLabels
    .filter(function(x) {
      return x.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
  return result;
}


