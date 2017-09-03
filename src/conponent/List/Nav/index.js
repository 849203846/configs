import React, {Component} from 'react';
import './index.less';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {
    fanhui = () => {
        window.location.href = 'http://localhost:8080/#/list'
    }

    render() {
        return (
            <ul className="nav-Content ">
                {
                    (window.location.href == 'http://localhost:8080/#/list') ? <span> </span> :
                        <span className="iconfont icon-fanhui" onClick={this.fanhui}> </span>
                }

                <NavLink to={{pathname: '/navigation1'}}>
                    <li className="nav-List nav-List1">
                        <span  className="nav-img  nav-Food"> </span>
                        <span>美食</span>
                    </li>
                </NavLink>

                <NavLink to={{pathname: '/navigation2'}}>
                    <li className="nav-List nav-List2">
                        <span className="nav-img nav-Movie"> </span>
                        <span>电影</span>
                    </li>
                </NavLink>

                <NavLink to={{pathname: '/navigation3'}}>
                    <li className="nav-List nav-List3">
                        <span className="nav-img nav-Party"> </span>
                        <span>休闲娱乐</span>
                    </li>
                </NavLink>

                <NavLink to={{pathname: '/navigation4'}}>
                    <li className="nav-List nav-List4">
                        <span className="nav-img nav-Music"> </span>
                        <span>音乐戏剧</span>
                    </li>
                </NavLink>

                <NavLink to={{pathname: '/navigation5'}}>
                    <li className="nav-List nav-List5">
                        <span className="nav-img nav-Play"> </span>
                        <span>户外</span>
                    </li>
                </NavLink>
                <span> </span>
            </ul>
        )
    }
}