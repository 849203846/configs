import React,{Component} from 'react';
import './css/index.less';
import Home from "./conponent/Home";
import List from "./conponent/List";
import { HashRouter as Router, Route} from 'react-router-dom';
import News from "./conponent/News/index";
import My from "./conponent/my/index";
import Index from "./conponent/index";
import './index.less';
import Sign from './conponent/sign';
import Sigin from "./conponent/my/Sigin/index";
import Register from "./conponent/my/register/index";
export default class App extends Component{
    render(){
        return(
            <Router>
                <Index>

                    <Route
                        exact
                        path={"/"}
                        component={Home}
                    />

                <Route
                path={"/home"}
                component={Home}
                />

                <Route
                    path={'/list'}
                    component={List}
                />
                <Route
                    path={"/news"}
                    component={News}
                />
                <Route
                    path={"/my"}
                    component={My}
                />
                    <Route
                        path={"/sign"}
                        component={Sign}
                    />
                    <Route
                        path={"/my/sigins"}
                        component={Sigin}
                    />
                    <Route
                        path={"/my/register"}
                        component={Register}
                    />

                </Index>
            </Router>
        )
    }
}