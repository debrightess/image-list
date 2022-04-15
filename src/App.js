import React, { Component } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import ImageList from './components/ImageList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  async handleSearchSubmit(entry) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=26778942-a02588f603e15ad37a0d330dd&q=${entry}&image_type=photo`
    );
    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '30px' }}>
        <SearchInput handleSearchSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
