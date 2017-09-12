import React,{Component} from 'react';
import {HashRouter as Router,NavLink,Route,Switch} from 'react-router-dom';
import './index.less';
import Msg from "./Msg";
import Friend from "./Friend";
export default class News extends Component{
    active=()=>{
            let href=window.location.href
            console.log(href)
            let A=document.querySelector('.A')
            if(href=='http://localhost:8080/#/news'){
                A.className='active  A'
                window.location.href='http://localhost:8080/#/news/friend'
            }else {
                console.log(A);
                A.className = ''
            }
    };
    componentDidMount(){
        this.active()
    }

    render(){
        return (
            <div className="Massage">
            <header>

                <NavLink to="/news/msg">
                    <span>消息</span>
                </NavLink>
                <NavLink className="A"  to="/news/friend">
                    <span>饭友</span>
                </NavLink>
            </header>
                <div className="MsgList">
                    <Router>
                        <Switch>
                        <Route path="/news/msg" component={Msg}/>
                        <Route path="/news/friend" component={Friend}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}
