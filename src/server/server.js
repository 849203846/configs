
let axios = require('axios');
let http = require('http');
let url = require('url');
let flag=0
function proxy (callback){
    if(flag>60){
        flag=0
    }
    axios.get(`http://api.qingchifan.com/api/event/city.json?city=010&start=${flag}&size=20&apiVersion=4.0.1`).then(callback)
    flag+=20
}

function  pppt(callback){
    axios.get('http://api.qingchifan.com/api/article/getHotArticleList.json?start=1&size=20&access_token=6916a7ab1f71e43ac4eadf40a51b4ab14A22DA2A8DEF2475D4975D2F93888393').then(callback);
}
function HotArticleList(callback) {
    axios.get('http://api.qingchifan.com/api/article/getHotArticleList.json?start=1&size=20&access_token=6916a7ab1f71e43ac4eadf40a51b4ab14A22DA2A8DEF2475D4975D2F93888393').then(callback);
}
function navv(callback) {
    axios.get('http://v.baidu.com/commonapi/movie2level/?filter=false&type=%E5%96%9C%E5%89%A7&area=&actor=&start=&complete=&order=hot&pn=1&rating=&prop=&channel=movie').then(callback);
}
http.createServer((req, res)=> {
    let {pathname} = url.parse(req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(pathname === '/api/city'){
        proxy((result)=>{
            res.end(JSON.stringify(result.data));
        });
    }else if(pathname === '/api/getHotArticleList'){
        pppt((result)=>{
            res.end(JSON.stringify(result.data));
        })
    }else if(pathname==='/api/article'){
        HotArticleList((result)=>{
            res.end(JSON.stringify(result.data));
        })
    }else if(pathname === '/commonapi/movie2level'){
            navv((result)=>{
                res.end(JSON.stringify(result.data.videoshow.videos));
            });
        }
}).listen(9090, ()=> console.log('9090'));
