import React, { Component } from 'react';
import Shops from '../Shops/Shops'
import Form from '../Form/Form'
import NavBar from '../NavBar/NavBar'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      shops: [
        {id: 1, title: 'Biyaal Trading', description: 'Maize seeds, Navajo tea, and more', url: 'https://biyl-trading.square.site/'},
        {id: 2, title: 'Cheekbone Beauty', description: 'Sustainable, highly-pigmented, cosmetics', url: 'https://www.cheekbonebeauty.com/'}
      ]
    }
  }

  addShop = (newShop) => {
    this.setState({shops: [...this.state.shops, newShop]});
  }

  render() {
    return (

        <main className='app'>
          <h1>Native Brands</h1>
          <NavBar/>
          <Form addStore={this.addStore} />
          <Shops shops={this.state.shops} />
        </main>

    )
  }
}

export default App;
