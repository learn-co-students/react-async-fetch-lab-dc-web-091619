// create your App component here
import React, {Component} from 'react'

export default class App extends Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }
    // mapPeople = () => {
    //
    // }

    render() {
        return(

            <ul>
               {this.state.peopleInSpace.map(p => {
                  return <li> {p.name} is in space!!</li>
                })}
            </ul>
        )
    }

}