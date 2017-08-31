import React,{Component} from 'react';
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom';
export default class Friend extends
    Component{
    constructor() {
        super();
        this.state={
            results:'暂无数据'
        }
    }
    componentDidMount(){
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
            this.setState({results:data.data.results});
            console.log(this.state.results);
        });
    }
    render(){
        return(
            <div className="friend">
                <label htmlFor="FriendSer"><span className="serch"></span><input name="FriendSer" type="text" placeholder="搜索10位好友"/></label>
                <div>
                <ul className="UserCategory">
                    <li><Link to="/crowd"><i></i><span>群聊</span><strong></strong></Link></li>
                    <li><Link to="/history"><i></i><span>我约过的人</span><strong></strong></Link></li>
                    <li><Link to="/friends"><i></i><span>朋友的朋友</span><strong></strong></Link></li>
                    <li><Link to="/service"><i></i><span>客服<em>官方</em></span><strong></strong></Link></li>
                </ul>
                </div>
                <p className="FoodFriends">饭友</p>
                <div>
                    <ul>{
                        // this.state.results!=="暂无数据"?
                        //     this.state.results.map((item,index)=>(
                        //         <li key={index}>
                        //
                        //                 <span><img src={item.user.userImageUrl}/></span>
                        //
                        //             {console.log(item.user.userImageUrl)}
                        //         </li>
                        //     )):null
                    }</ul>
                </div>
            </div>
        )
    }
}