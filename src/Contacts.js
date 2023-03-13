import React, { useEffect, useState } from 'react';

function Contacts() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} ({contact.email})
        </li>
      ))}
    </ul>
  );
};

export default Contacts;