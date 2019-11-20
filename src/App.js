// create your App component here
import React, { Component } from 'react';
import Person from './Person.js';

class App extends Component {

    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(result => result.people.map(person => this.setState({ people: result.people })))
    }

    renderPeople = (people) => {
        console.log(people)
        return people.map(person => {
            return <Person key={person.name} person={person} />
        })
    }

    render() {
        return (
            <div>
                { this.state.people ? (
                    <div>
                        <h2>{`There are ${this.state.people.length} people in space!`}</h2>
                        {this.renderPeople(this.state.people)}
                    </div>
                ) : (
                    null
                ) }
                
            </div>
        )
    }
}

export default App