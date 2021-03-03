import './App.css';
import  Contacts  from './Contacts';
import React,{Component} from 'react'

export class App extends  Component{
  constructor(props){
    super(props);
    this.addContact=this.addContact.bind(this);
  }
  state = {
    contacts: [{
      name: "Hasan Erdal",
      phone: "1111111111"
    }, {
      name: "Mustafa Erdal",
      phone: "252152252152"
    }, {
      name: "Can Erdal",
      phone: "55456215616"
    }]
  }
  addContact(contact){
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({
      contacts
    });
  }
  render(){
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
