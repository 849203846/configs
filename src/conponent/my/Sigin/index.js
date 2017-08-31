import React,{Component} from 'react';
import './index.less';
export default class Sigin extends Component{
    constructor(){
        super();
        this.state={username:'',password:''};
    }
    btns=()=>{
        localStorage.setItem('sigins',null);
        window.location.href='http://localhost:8080/#/my/register'
    }
    btn=()=>{
        let my={username:this.state.username,password:this.state.password}
        let usernames=localStorage.getItem('sigin')
         usernames=JSON.parse(usernames)
        if(my.username.length>=6){
            if(my.password.length>=6){
                if(usernames.find(item=>item.username==my.username)){
                    if(usernames.find(item=>item.password==my.password)) {
                        localStorage.setItem('sigins',my.username);
                        window.location.href='http://localhost:8080/#/my'
                    }else{
                        alert('密码错误 请重新输入')
                    }
                }else{
                    alert('没有此用户 请注册')
                }
            }else{
                alert('密码位数不正确')
            }

        }else{
            alert('帐号格式不正确')
        }

    }
    render(){
        return (
            <div className="sigins">
                <div className="sigin">
                    <li>
                        <i className="iconfont icon-unie610">
                        </i>
                    <input
                        placeholder="请输入你的用户名"
                        className="iphone"
                        type="text"
                        id="iphone"
                        value={this.state.username}
                        onChange={event=>this.setState({username:event.target.value})}/></li>
                    <li>
                        <i className="iconfont icon-password"></i>

                    <input
                        placeholder="请输入你的密码"
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={event=>this.setState({password:event.target.value})} />
                    </li>
                    <li><button onClick={this.btns}>前往注册</button></li>
                    <li><button onClick={this.btn}>登录</button></li>
                </div>

            </div>
        )
    }
}

