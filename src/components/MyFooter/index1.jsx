import React from "react";
import './index.css';
import '../../assets/common/all.css';
import logo from '../../assets/images/logo-black1.png';
import {WechatOutlined, WeiboCircleOutlined,  MessageOutlined,} from '@ant-design/icons';


function MyFooter() {


    return (
        <div className="foot">
               <div className="footerAbout">
                    <div className="footerInfos">
                        <span>车主公告</span>
                        <span>官方认证二手车</span>
                        <span>集团</span>
                        <span>公司信息</span>
                        

                    </div>
                    <div className="footerIcons">
                            <i><img height="57" src="https://www.bmw.com.cn/content/dam/bmw/marketCN/bmw_com_cn/footer/weibo.png.asset.1689932466578.png" /></i>
                            <i><img height='57' src="https://www.bmw.com.cn/content/dam/bmw/marketCN/bmw_com_cn/footer/wechat.png.asset.1689932466586.png"></img></i>
                            <i><img height='57' src="https://www.bmw.com.cn/content/dam/bmw/marketCN/bmw_com_cn/footer/wechatApp.png.asset.1689932466534.png"/></i>
                            <i><img  src={logo} title="公司的logo" style={{height:'130px', width:'290px'}} /></i>
                           
                    </div>
                </div> 
               <div className="certificates">

                    <div className="certificatesNames">
                        <span className="child1">隐私和法律</span>
                        <span className="child2">联系我们</span>
                        <span className="child3">环保信息</span>
                        <span >查询网</span>
                    </div>
                    <div className="certificatesLinks">
                       <span className="child1">© 中国 2023京</span> 
                       <span className="child2">ICP备08004883号</span>
                       <span >京公网安备11010502038527号</span>
                    </div>
               </div>
        </div>
    )
}

export default MyFooter;