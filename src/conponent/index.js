import React,{Component} from 'react';
import Nav from "./nav/Nav";
export default class Index extends Component{
    render(){
        return (
            <div>
                {this.props.children}
            <Nav/>
            </div>
        )
    }
}
