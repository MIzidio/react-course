import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Joselito", age: 30 },
      { name: "Matheus", age: 21 },
      { name: "Raphael", age: 20 }
    ],
    otherState: "algum outro state do react"
  };

  buttonSwitch = newName => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Matheus", age: 21 },
        { name: "Raphael", age: 18 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Joselito", age: 30 },
        { name: event.target.value, age: 21 },
        { name: "Raphael", age: 20 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Salve quebrada, to aprendendo react</h1>
        <p>Ta funcionando memo em...</p>
        <button onClick={this.buttonSwitch.bind(this, "Joselito Menezes")}>
          Mudar nome
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.buttonSwitch("Joselito Mendes")}
          changed={this.nameChangedHandler}
        >
          Hobbies: Mandar Salve
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App!!!'))
}

export default App;
