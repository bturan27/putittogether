import React from 'react';
import './App.css';
import PersonComponent from './components/MyNewComponent';
var peopleArr = [
  {"firstName": "Begum", "lastName": "Turan", "age":"29", "hairColor": "black"}, 
  {"firstName": "Batus", "lastName": "Turan", "age":"23", "hairColor": "blond"}, 
  {"firstName": "funda", "lastName": "Turan", "age":"50", "hairColor": "pink"}, 
  {"firstName": "mesut", "lastName": "Turan", "age":"60", "hairColor": "black"}, 
]
function App() {
  const {firstName,lastName, ...others} = peopleArr;
  return (
    <div className="App">
      {/* <PersonComponent firstName= {"begum"} lastName={"turan"} age={29} hairColor={"black"}/> */}


      {peopleArr.map(person =>{
          return <PersonComponent firstName={person.firstName} lastName= {person.lastName} age= {person.age}
          hairColor={person.hairColor}/>
      })}
    </div>
  );
}

export default App;
