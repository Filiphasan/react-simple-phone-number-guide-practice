import React, { Component } from 'react'

import './List.css';

export class List extends Component {
    constructor(props){
        super(props);
        this.onChangeFilter=this.onChangeFilter.bind(this);
    }
    state={
        filterText:''
    }
    onChangeFilter(e){
        this.setState({
            filterText: e.target.value
        });
    }
    render() {
        const filteredContacts=this.props.contacts.filter(contact=>{
            return contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !==-1;
        });
        return (
            <div className={"listArea"}>
                <input type="text" value={this.state.filterText} onChange={this.onChangeFilter} name="filter" id="filter" placeholder="Filter by name" />
                <ul className={"list"}>
                    {filteredContacts.map((contact) =>{
                        return(
                            <li key={contact.phone}>
                                <span>{contact.name}</span>
                                <span>{contact.phone}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default List;
