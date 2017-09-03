import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';

export default class Swiper extends Component {
    constructor() {
        super();
        this.state = {index: 0,data:[
            'src/images/lunbo1.png',
            'src/images/lunbo2.png',
            'src/images/lunbo3.png',

        ]}
    }

    render() {
        let opts = {
            continuous: true,
            callback: (index) => {
                this.setState({
                    index
                })
            },
            auto: 2000,
        };
        return (
            <div className="swiper">

                    <ReactSwipe className="carousel" swipeOptions={opts}>

                        {
                            this.state.data.map((item,index)=>(
                                <div key={index}>
                                    <img src={item} alt="" className="img"/>
                                </div>
                            ))
                        }
                    </ReactSwipe>
                <div className="dots">
                    {this.state.data.map((item, index) => (
                        <span key={index} className={index === this.state.index ? 'active' : ''}>

                         </span>
                    ))}
                </div>
            </div>

        )
    }
}