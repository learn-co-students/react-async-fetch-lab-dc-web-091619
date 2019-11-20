import React from 'react';

export default class App extends React.Component {

  state = {
    people: null
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(peopleInfo => this.setState({
      people: peopleInfo
    }))
  }

  render() {
    if (this.state.people !== null) {
    return <ul>{this.state.people.people.map(person => <li>{person.name}</li>)}</ul>
    } else {return null }
  }
}