import React, { useEffect, useRef } from "react";
import './index.css';
import logo from '../../assets/images/logo-resized.png'
import{Rate} from 'antd';
import {CheckOutlined, StarOutlined } from '@ant-design/icons'

export function Banner(){

    return(
        <div className="banner">
            <div className="ratings">
                <span> <i > <CheckOutlined style={{ color: 'green',  fontWeight:'900', size:'18px' }} /></i> 客户评级 </span>
                <span><Rate disabled defaultValue={4.5} /></span>
                {/* <span> <StarOutlined style={{ color: 'gold',}}/> <StarOutlined style={{ color: 'gold',}} /> <StarOutlined style={{ color: 'gold',}} /> <StarOutlined style={{ color: 'gold',}} /> <StarOutlined style={{color:'gray'}} /> </span> */}
                <span style={{marginLeft:'15px'}}> <CheckOutlined style={{ color: 'green', fontWeight:'900', size:'18px' }} /> 我们是中国最好的服务</span>
            </div>
            <div className="phoneNumber">
                {/* <table>
                    <tr>
                        <td rowSpan={2}> <img title='phone-icon' src='http://www.oibsh.com/images/header_dianhua.png' /> </td>
                        <td>咨询热线</td>
                    </tr>
                    <tr>
                        <td>158-0101-5555</td>
                    </tr>
                </table> */}
                    咨询热线
                    <span>187-212-42641</span>
            </div>
        </div>
    )
}
function MyNav(props){

    const logStatus=props.logStatus; // 如果 log status 是 true 客户登录过了
    const gotoHome=()=>{
        window.location.replace('/home')
    }
    return(
        <div className="myNav">
            <div className="logo"><img src={logo} title='公司logo' /></div>
            <div className="nav-items">
                <span className="title" onClick={gotoHome}>                   
                    首页
                    <span className="titleUnderline"></span>
                </span>
                
                {/* <span>自驾租车</span>
                <span>车型</span>
                <span>二手车</span>
                <span>租车流程</span>
                <span>联系我们</span> */}
            </div>
            <div className="phoneNumber">
                
                    咨询热线
                    <span>187-212-42641</span>
               </div>
            {/* <div className="user-space">
                
                {(props.logSatus==true)?(<>
                
                </>):(
                <ul>
                    <li className="denglu"><a>登录</a></li>
                    <li><a>注册</a></li>
                </ul>)} 
            </div> */}
        </div>
    )
}



export default function MyHeader(){

    const logSatus=useRef(false)

    return(
        <>
            
           {/* <Banner/> */}
           <MyNav logSatus={logSatus}/>
        </>
    )
}
