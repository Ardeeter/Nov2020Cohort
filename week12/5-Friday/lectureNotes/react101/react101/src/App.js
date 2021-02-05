import React, { Component } from 'react'
import Contacts from './components/Contacts';
import data from './data/contacts'
import Days from './components/Days'
import DropDown from './components/DropDown';
import Button from './components/Button';

class App extends Component {
  render() {
    
    let contacts = [
      {firstName: "Adam",
      lastName: "MacKinnon",
      phoneNum: "333-333-3333",
      email: "adam@dc.com"},

      {firstName: "Ally",
      lastName: "Deeter",
      phoneNum: "222-222-2222",
      email: "ally@dc.com"},
      
      {firstName: "Andrea",
      lastName: "Myers",
      phoneNum: "444-444-4444",
      email: "andrea@dc.com"},
  ]

  // let name = <Contacts firstName="Veronica" lastName="Lino" phoneNum="555-555-5555" email="veronica@dc.com"/>

  let contactArr = contacts.map(contactObj => {
    return <Contacts firstName={contactObj.firstName}
    lastName={contactObj.lastName}
    phoneNum={contactObj.phoneNum}
    email={contactObj.email}
    />
  })

  let allContacts = data.map(contactObj => {
    return <Contacts firstName={contactObj.first_name}
    lastName={contactObj.last_name}
    phoneNum={contactObj.phone}
    email={contactObj.email}
    />
  })

    return (
      <>

      <Days />
      <DropDown />
      <Button color="info" text="Info" />
      <Button color="warning" text="Warning" />
      <Button color="danger" text="Danger" />
      <Button color="primary" text="Primary" />

      {/* {contactArr}

      {allContacts} */}

      {/* <Contacts firstName={contacts[0].firstName} lastName={contacts[0].lastName} phone={contacts[0].phoneNum} email={contacts[0].email}/>
      <Contacts firstName={contacts[1].firstName} lastName={contacts[1].lastName} phone={contacts[1].phoneNum} email={contacts[1].email}/>
      <Contacts firstName={contacts[2].firstName} lastName={contacts[2].lastName} phone={contacts[2].phoneNum} email={contacts[2].email}/> */}

      {/* FirstName: Adam <br />
      LastName: MacKinnon <br />

      FirstName: Ally <br />
      LastName: Deeter <br />

      FirstName: Andrea <br />
      LastName: Myers <br />

      <br /> */}

      </>
    )
  }
}

export default App

