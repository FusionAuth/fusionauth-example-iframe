import React, { Component } from 'react';
import './Form.css';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: ''
    }
  }

  submitShop = event => {
    event.preventDefault();
    const newShop = {
      id: Date.now(),
      ...this.state
    }
    console.log(newShop)
    this.props.addStore(newShop);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ title: '', description: '', url: ''});
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  render() {
    return (
      <form>
      <input
        type='text'
        placeholder='Store Name'
        name='title'
        value={this.state.title}
        onChange={event => this.handleChange(event)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={this.state.description}
        onChange={event => this.handleChange(event)}
      />

      <input
        type='text'
        placeholder='URL'
        name='url'
        value={this.state.url}
        onChange={event => this.handleChange(event)}
      />

      <button onClick={event => this.submitShop(event)}>Add a Shop!</button>
      </form>
    )
  }
}

export default Form;
