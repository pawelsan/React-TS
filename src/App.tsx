import React from 'react';
import Contacts from './Contacts';
import './App.css';

export type Contact = {
  name: string,
  telNumber: number,
  emailAdress: string,
  adress: string,
  favorite: boolean,
}

const App: React.FC = () => {


  const contacts: Contact[] = [
    {
      name: "Doe, Joe",
      telNumber: 1700707070,
      emailAdress: "joe@doe.com",
      adress: "Flower St 8, Norfolk, VA",
      favorite: false,
    },
    {
      name: "Sparrow, Jack",
      telNumber: 1900909090,
      emailAdress: "sparrow@yahoo.com",
      adress: "8th Av 6, Phoenix, AZ",
      favorite: false,
    },
    {
      name: "Skywalker, Luke",
      telNumber: 12030405450,
      emailAdress: "disturbance@force.gx",
      adress: "Mos Esley 4, Tatooine, Outer Rim",
      favorite: true,
    }
  ]

  return (
    <div className="App">
      <h1>All contacts:</h1>
      <Contacts
        contacts={contacts}
      />
      <h1>My favorite contact is:</h1>
      <Contacts
        contacts={contacts.filter(contact => contact.favorite === true)}
      />
    </div>
  );
}

export default App;
