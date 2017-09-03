import React,{Component} from 'react';
import MHeader from '../MHeader/index';
import MList from '../index';
import './index.less';

export default class Content extends Component{
    constructor(){
        super();
        this.state={data:{}}
    }
    back=()=>{
        this.props.history.goBack();
    };

    componentWillMount(){
        this.setState({data:this.props.location.state})
    }
    render(){
        return (
            <div className="icon">
                <MHeader title="饭文详情"/>
                <span className=" icon-Fanhui iconfont icon-fanhui" onClick={this.back}></span>
                <li className="content articleList" >

                    <div className="articleList-Header">
                        <div className="header-Left">

                            <img  alt=""/>
                            <div className="left-Right">
                                <span className="articleList-Name">{this.state.data.user.nick}</span>
                                <div className="right-Bottom">

                                    {this.state.data.user.gender===0?                                           <span className="age">{this.state.data.user.age}</span>: <span className="agb">{this.state.data.user.age}</span>}
                                    <span className="rank">{this.state.data.user.grade.gradeName}</span>
                                </div>
                            </div>

                        </div>
                        <div className="header-Right">
                            <span></span>
                        </div>
                    </div>


                    <div className="articleList-Context">
                        <h3>{this.state.data.title}</h3>
                        <p>{this.state.data.content}</p>
                        <img  alt=""/>
                    </div>
                    <div className="articleList-Footer">
                        <span className="footer-left"><i className="iconfont iconeye1"> </i>{this.state.data.count.pageview}</span>
                        <div className="footer-right">
                            <span className="footer-rl"><i className="iconfont iconzan2"> </i>{this.state.data.count.reviewNum}</span>
                        </div>
                    </div>
                </li>
            </div>

        )
    }
}