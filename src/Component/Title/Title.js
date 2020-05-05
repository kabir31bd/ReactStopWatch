import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
     constructor(props) {
        super(props);
        this.state = {
            title: "Welcome to React App",
            isInput: false
         }
    }
    inpurChange(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        })
        
    }

    editHandler() {
        this.setState({
            ...this.state,
            isInput: true
        })
    }
    keyPressHandler(event){
        if (event.key === 'Enter')
        {
            this.setState({
                ...this.state,
                isInput: false
            })
        }
    }

    blurHandler(event){
        this.setState({
            ...this.state,
            isInput: false
        })
    }
    render() {

        let output = null;
        if (this.state.isInput) {
            output = (
                <div className="Title">
                    <input type="text"
                    className="form-control"
                    onChange={ event => this.inpurChange(event)}
                    onKeyPress = { event => this.keyPressHandler(event)}
                    onBlur = { event => this.blurHandler(event) }
                        value={this.state.title}
                        />
                </div>
            );
        }
        else {
            output = (
                <div className="d-flex Title">
                    <h1 className="display-4" >
                        {this.state.title}</h1>
                    <span className="ml-auto edit-icon" 
                    onClick={ () => this.editHandler() }>
                    <i className="fas fa-pencil-alt"></i>
                    </span>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="display-4">
                    {/* <h1> Welcome to React App</h1> */}
                    {output}                    
                </div>
            </div>
        )
    }
}

export default Title;