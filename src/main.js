import React from "react";
import {render} from "react-dom";
import "./css/main.css";
import Greent from "./greent";
import {Router, Route, Link, hashHistory} from "react-router"; //使用require导入css文件
import $ from "jquery"
class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
        this.handleChange = this.handleChange.bind(this);
    }

    //加载完毕时执行
    componentDidMount() {
        /*this.timerID = setInterval(
            () => this.handleChange(),
            1000
        );*/
        const that=this;
        $.get("/class",function (res) {
            if(res['reason']=="success"){
                that.setState({
                    data:res.result
                })
            }
        },'json')
    }
    //将要移除时执行

    handleChange() {
        // Note: with uncontrolled inputs, you don't
        // have to put the value in the state.
        this.setState({value: new Date()});
    }

    render() {

        return (
            <div ref="div1" className="wra" onClick={(e)=>this.handleChange(e)}>
                <ul>
                {
                    this.state.data.map((item, index)=> {
                       return (
                           <li key={index}>
                               <Link to={`/greent/${ item.id }`} activeClassName={"active"}> {item.catalog}</Link>
                           </li>
                       )
                    })
                }
                </ul>
                {this.props.children}
            </div>
        );
    }
}

render(
    (<Router history={hashHistory}>
        <Route path={ "/" } component={ HelloWorld}>
            <Route path={ "/greent/:name" } component={ Greent}/>
        </Route>
    </Router>),
    document.getElementById('root'));
// ById('root').appendChild(greeter());