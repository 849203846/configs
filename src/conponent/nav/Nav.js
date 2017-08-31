import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';
export default class Nav extends Component{
    render(){
        return (
            <div className="nav-list">
               <NavLink to="/home"><i className="iconfont icon-iconfontpaihangbang"></i><span>排行榜</span></NavLink>
               <NavLink to="/list"><i className="iconfont icon-faxian"></i><span>发现</span></NavLink>
               <NavLink to="/news"><i className="iconfont icon-xiaoxi"></i><span>消息</span></NavLink>
               <NavLink to="/my"><i className="iconfont icon-home"></i><span>我的</span></NavLink>
            </div>
        )
    }
}
