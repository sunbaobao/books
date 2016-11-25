/**
 * Created by Administrator on 2016/10/24.
 */
import React, {Component} from "react";
import $ from "jquery";
//noinspection JSUnresolvedVariable
class Greeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            id: ""
        };

    }

    componentDidMount() {
        /*this.timerID = setInterval(
         () => this.handleChange(),
         1000
         );*/
        const that = this;
        let id = this.props.params.name;
        if (this.state.id == id) {
            return;
        }
        this.state.id = id;
        $.get("/catalog?id=" + id,
            function (res) {
                if (res['reason'] == "Success") {
                    that.setState({
                        datas: res.result.data
                    });
                }
            }, 'json')
    }


    componentWillReceiveProps() {
        const that = this;

        let id = this.props.params.name;
        if (this.state.id == id) {
            return;
        }
        this.state.id = id;
        $.get("/catalog?id=" + id,
            function (res) {
                console.log(that.props.params.name);
                if (res['reason'] == "Success") {
                    if (that.state.datas == res.result.data)return;
                    that.setState({
                        datas: res.result.data
                    });
                }
            }, 'json')
    }

    render() {
        /*Object
         bytime
         :
         "2015年03月14日"
         catalog
         :
         "外国文学 小说 经典名著 "
         img
         :
         "http://apis.juhe.cn/goodbook/79cf86d4b95ff49df4a8be1410d44403,jpg"
         online
         :
         "京东:http://item.jd.com/10001613.html 当当:http://product.dangdang.com/22489516.html 亚马逊:http://www.amazon.cn/%E5%90%8D%E5%AE%B6%E5%90%8D%E8%AF%91%E2%80%A2%E6%82%B2%E6%83%A8%E4%B8%96%E7%95%8C-%E9%9B%A8%E6%9E%9C/dp/B005V6BWMI/ref=sr_1_1?ie=UTF8&amp;qid=1426339075&amp;sr=8-1&amp;keywords=%E6%82%B2%E6%83%A8%E4%B8%96%E7%95%8C"
         reading
         :
         "782人阅读"
         sub1
         :
         "关于苦难的世界名著《悲惨世界》"
         sub2
         :
         "《悲惨世界》是法国著名作家雨果的经典名著，作为人类思想产生的一部伟大作品、文学巨著的一个丰碑，在世界文学宝库"
         tags
         :
         ""
         title
         :
         "悲惨世界"*/

        return (
            <div className="content">
                {
                    this.state.datas.map((item, index)=> {
                        return (
                            <li key={`li-${index}`} className="cLi clear">
                                <div className="imgW">
                                    <img src={item.img} alt={
                                        item.title
                                    }
                                         title={
                                             item.title
                                         }/>
                                </div>
                                <div className="detail clear">
                                    <h3> { item.title }</h3>
                                    <span> 上架时间：{item.bytime}</span>
                                    <span> 标签：{item.catalog}</span>
                                    <span> {item.reading}</span>
                                    <h6>{item.sub1}</h6>
                                    <p>{item.sub2}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </div>
        );
    }

}
Greeter.propTypes = {
    name: React.PropTypes.string
};
export default Greeter