import React,{Component} from 'react';
import MHeader from "./MHeader/index";
import './index.less';
import Swiper from "./Swiper/index";
import Nav from "./Nav/index";
import {Link} from 'react-router-dom'

export default class List extends Component{
    constructor(){
        super();
        this.state={
            articleInfo:{
                data:{
                    results:[]
                }
            }
        }
    }
    scroll=(e)=>{
        let scrollTop=e.target.scrollTop;
        let offsetHeight=e.target.offsetHeight;
        let scrollHeight=e.target.scrollHeight;
        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
            if(scrollTop+offsetHeight+50>scrollHeight){
                this.getinfo()
            }
        },50)
    };
    getinfo=()=>{
        let resgetHotArticleList='http://127.0.0.1:9090/api/getHotArticleList';
        fetch(resgetHotArticleList,{
            headers:{
                'accept':'application/json'
            }
        }).then((res)=>{
            return res.json();
        }).then(data => {
            let articleInfo=this.state.articleInfo;
            let articleInfos=articleInfo.data.results;
            if(articleInfos.length){
                articleInfos.push(...data.data.results);
                articleInfo.data.results=articleInfos;
                this.setState({articleInfo});

            }else{
                this.setState({articleInfo:data});
            }

        });
    };
    componentWillMount(){
      this.getinfo()
    }

    render(){

        let results=this.state.articleInfo.data.results;


        return (
            <div>
                  <MHeader/>
                <ul className="content" ref="scroll" onScroll={(e)=>this.scroll(e)}>
                    <Swiper/>
                    <Nav/>
                    {results.length? results.map((item,index)=>{
                            // let img =item.images||[];
                            return(
                                <Link to={{pathname:'/content',state:item}} key={index}>
                                <li className="articleList" key={index}>
                                    <div className="articleList-Header">
                                        <div className="header-Left">

                                            <img  alt=""/>
                                            <div className="left-Right">
                                                <span className="articleList-Name">{item.user.nick}</span>
                                                <div className="right-Bottom">

                                                    {item.user.gender===0?                                           <span className="age">{item.user.age}</span>: <span className="agb">{item.user.age}</span>}
                                                    <span className="rank">{item.user.grade.gradeName}</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="header-Right">
                                            <span></span>
                                        </div>
                                    </div>


                                    <div className="articleList-Context">
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                        <img  alt=""/>
                                    </div>
                                    <div className="articleList-Footer">
                                        <span className="footer-left">{item.count.pageview}</span>
                                        <div className="footer-right">
                                            <span className="footer-rl">{item.count.reviewNum}</span>
                                            <span className="footer-rr">{item.count.zanNum}</span>
                                        </div>
                                    </div>
                                </li>
                                </Link>  )

                        }):<div className="loading">正在加载</div>}
                </ul>
            </div>
        )
    }
}
