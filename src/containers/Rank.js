import React,{Component} from 'react';
import '../css/rank.less';
import male from '../images/male@2x.png';
import female from '../images/female@2x.png';
import charm from '../images/charm_bg@2x.png';
import userIcon from '../images/usericon.jpg';

export default class Rank extends Component{
    constructor(){
        super();
        this.state={
            rankInfo:{
                data:{
                    results:[]
                }

            }
        }
    }

    getInfo=()=>{
        let resCity = 'http://127.0.0.1:9090/api/city';
        fetch(resCity,{
            headers:{
                'accept':'application/json'
            }
        }).then((res)=>{
            return res.json();
        }).then(data => {
            console.log(data);

            setTimeout(()=>{
                this.setState({rankInfo: data});
            },200)


        }).catch(err=>{
            debugger
        })
    };
    componentDidMount() {
        this.getInfo();
    }
    render(){
        let {results} = this.state.rankInfo.data;
        console.log(results);
        return (
            <ul className="rankLists">
                {
                    results.length?results.map((item,index)=>{
                        return(
                            <a href="#" key={index}>
                        <li className="listInfo">
                            <div className="userInfo">
                                <img src={userIcon} alt="icon" className="userIcon"/>
                                <span className="userName">{item.user.nick}</span>
                                <span>
                                    {

                                        item.user.gender===1? <img src={male} alt="" className="age"/>:<img src={female} alt="" className="age"/>
                    }
                                    {

                                        item.user.gender===1? <span id="ageM" className="num">{item.user.age}</span>:<span id="ageF" className="num">{item.user.age}</span>

                                    }

                    <img src={charm} className="gradeName"/>
<span id="gradeName">{item.user.grade.gradeName}</span>
                    </span>

                            </div>
                            <div className="contents">
                                <p>{item.eventDescription}</p>
                                {

                                }
                            </div>
                            <div className="message">

                            </div>
                        </li>
                        </a>

                        )
                    }

                    ):<div className="loadings"><p>加载中........</p></div>

                }

            </ul>

        )
    }
}
