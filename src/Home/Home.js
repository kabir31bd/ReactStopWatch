import React , {Component} from 'react';
import Title from './Component/Title/Title'

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div classname="container">
            <div classname="display-4">
                <h1> Welcome to React App</h1>
                <Title></Title>
            </div>
        </div>
        )
    }
}

export default HomePage;