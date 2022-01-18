import React, { Component } from 'react';
import Shops from '../Shops/Shops'
import Form from '../Form/Form'
import NavBar from '../NavBar/NavBar'
import LogInOut from '../LogInOut/LogInOut'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      shops: [
        {id: 1, title: 'Biyaal Trading', description: 'Maize seeds, Navajo tea, and more', url: 'https://biyl-trading.square.site/'},
        {id: 2, title: 'Cheekbone Beauty', description: 'Sustainable, highly-pigmented cosmetics', url: 'https://www.cheekbonebeauty.com/'},
      ],
      isClicked: false
    }
  }

  addStore = (newShop) => {
    console.log("addStore")
    this.setState({shops: [...this.state.shops, newShop]});
  }

  handleClick = () => {
  //when login clicked, render the LogInOut component
  //change isClicked to true
  //kick off the auth flow here
  if(!this.state.isClicked){
    this.setState({isClicked: true})
  } else {
    console.log("is this an easter egg?")
    this.setState({isClicked:false})
}
}

  render() {
    return (
        <main className='app'>
          <h1>Native Brands</h1>
          <NavBar handleClick={this.handleClick}
                  isClicked={this.state.isClicked}
                  />
          {this.state.isClicked && !this.state.error &&
          <>
            <LogInOut/>
          </>
          }
          <Form addStore={this.addStore} />
          <Shops shops={this.state.shops} />
        </main>

    )
  }
}

export default App;
