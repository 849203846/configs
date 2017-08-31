import React,{Component} from 'react';
import './index.less'
import profile from './profile.png';
import {NavLink} from 'react-router-dom';
export default class My extends Component{
    componentWillMount(){
        let sigins=localStorage.getItem('sigins')
        if(sigins=='null'){
            console.log(sigins);
            window.location.href='http://localhost:8080/#/my/sigins'
        }else{
            console.log(sigins);
        }
    }
    btn=()=>{
        localStorage.setItem('sigins',null)
             window.location.href='http://localhost:8080/#/my/sigins'
    }
    render(){
        let name=localStorage.getItem('sigins')
        return (
            <div className="my">
                <div>
                    <img src={profile} width={'100px'}/>
                    <span className="nc">{name}</span>
                </div>
                <ul className="user-menu">
                    <NavLink className="dj" to='/visit'>
                        <li className="lf">
                            <i className="iconfont icon-eye"></i>
                            <span>最近来访</span>
                        </li>
                    </NavLink>
                    <NavLink className="dj" to='/date'>
                        <li className="yh">
                            <i className="iconfont icon-yuehui"></i>
                            <span>我的约会</span>
                        </li>
                    </NavLink>
                    <NavLink className="dj" to='/paper'>
                        <li className="fw">
                            <i className="iconfont icon-liaotian"></i>
                            <span>我的范文</span>
                        </li>



                    </NavLink>
                        <button className="btn" onClick={this.btn}>退出登录</button>

                </ul>
            </div>
        )
    }
}
