import React, {Component} from 'react';
import MNav from '../Nav/index';
import './index.less';

export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            movieInfo: []
        }
    }

    componentWillMount() {
        let resmovie2level = 'http://127.0.0.1:9090/commonapi/movie2level';
        fetch(resmovie2level, {
            headers: {
                'accept': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then(data => {
            this.setState({movieInfo: data});
        });
    }


    render() {

        let videos = this.state.movieInfo;
        return (
            <div className="icon">
                <MNav/>
                <div className="One-content">
                    <div className="Navigation_list">
                        {
                            videos.length ? videos.map((item, index) => {
                                return (
                                    <div className="nav-itemList" key={index}>
                                        <img src={item.imgv_url} alt=""/>
                                        <div className="nav-itemContent">
                                            <h4>{item.title}</h4>
                                            <p>{item.intro}</p>
                                        </div>

                                    </div>
                                )
                            }) : <div>正在加载</div>
                        }

                    </div>
                </div>

            </div>
        )
    }
}