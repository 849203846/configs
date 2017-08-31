import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class RankTab extends Component{
    render(){
        return (
            <div className="rankTab">
                <Link to="/home">热门</Link>
                <Link to="/home/today">约今天</Link>
                <Link to="/home/food">吃好料</Link>
                <Link to="/home/movie">看电影</Link>
            </div>
        )
    }
}
