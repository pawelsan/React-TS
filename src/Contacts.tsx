import React from 'react';
import { Contact } from './App';

type Props = {
    contacts: Contact[]
}

const Contacts: React.FC<Props> = (props) => {
    const { contacts } = props
    return (
        <ul>
            {contacts.map(contact =>
                <li key={contact.name}>
                    <h2>{contact.name}</h2>
                    <p>{contact.telNumber}</p>
                    <p>{contact.emailAdress}</p>
                    <p>{contact.adress}</p>
                </li>)}
        </ul>
    )
}

export default Contacts;