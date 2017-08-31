import React,{Component} from 'react';
// import {ajax} from '../../util';
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom';
export default class Msg extends
    Component{
    constructor(){
        super();
    }

    componentWillMount() {
        let resCity = 'http://127.0.0.1:9090/api/article';
        fetch(resCity,{
            headers:{
                'accept':'application/json',
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then((res)=>{

            return res.json();
        }).then(data => {
            console.log(data);

        });
    }
    render(){
        return(
            <div className="msg">
                <div>
                    <ul>
                        <li>1</li>
                        {}
                    </ul>
                </div>
            </div>
        )
    }
}