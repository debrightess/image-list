import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: '' };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className='ui segment'>
        <form action='' className='ui form' onSubmit={this.handleOnSubmit}>
          <div className='field'>
            <div className='ui massive icon input'>
              <input
                type='text'
                placeholder='search...'
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
              />
              <i className='search icon'></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
