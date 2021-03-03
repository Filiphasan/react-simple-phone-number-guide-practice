import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    state={
        name:'',
        phone:''
    };
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onSubmit(e){
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.name} onChange={this.onChange} name="name" id="name" placeholder="Enter a name"/>
                    <br/>
                    <input type="text" value={this.state.phone} onChange={this.onChange} name="phone" id="phone" placeholder="Enter a phone number"/>
                    <button onClick={this.addContact} type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default Form
