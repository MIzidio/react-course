import React from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  return (
    <div className="App">
      <h1>Salve quebrada, to aprendendo react</h1>
      <p>Ta funcionando memo em...</p>
      <Person name="Joselito" age="30"/>
      <Person name="Matheus" age="21">Hobbies: Mandar Salve</Person>
      <Person name="Ralphael" age="20"/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App!!!'))
}

export default App;
