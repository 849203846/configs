import React,{Component} from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import RankTab from '../../containers/RankTab';
import Rank from '../../containers/Rank';
import  Today from '../../containers/Today';
import  Food from '../../containers/Food';
import  Movie from '../../containers/Movie';
import './index.less';
export default class Home extends Component{
    render(){
        return (
            <Router>
                <div>
                    <RankTab></RankTab>
                <Route exact path={'/home'} component={Rank}/>
                <Route path={'/home/rank'} component={Rank}/>
                <Route path={'/home/today'} component={Today}/>
                <Route path={'/home/food'} component={Food}/>
                <Route path={'/home/movie'} component={Movie}/>
                </div>
            </Router>
        )
    }
}
