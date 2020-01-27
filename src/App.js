import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      peopleInSpace: []
    };
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(astroObj => this.setState({
        peopleInSpace: astroObj.people
      }))
  }

  render(){
    return(
      <div>
        {
          this.state.peopleInSpace.map( ({name, craft}) => {
            return <div>{`${name} is aboard the ${craft}.`}</div>
          })
        }
      </div>
    );
  }
}

export default App