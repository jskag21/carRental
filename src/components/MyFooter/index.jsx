import React from "react";
import './index.css';
import { QRCode } from 'antd';
import logo from '../../assets/images/logo-black1.png';
import logo1 from '../../assets/images/logo.png';


export default function MyFooter(){
    const gotoPrivacy=()=> window.location.replace('/privacy')  
    const gotoEnvironment=()=> window.location.replace('/environment')
    const goHome=()=>window.location.replace('/')  
    return(
        <div className="foot">
               <div className="footerAbout">
                    <div className="footerLogo">                   
                        <img src={logo} style={{width:'100%'}}/>
                    </div>
                    <div className="footerInfos">
                        <span className="child1" onClick={gotoPrivacy}>隐私和法律</span>
                        <span className="child2" >联系我们:<span > 18721239472 </span></span>
                        <span className="child3" onClick={gotoEnvironment}>环保信息</span>
                        <span className="child4" onClick={goHome}>Home</span>
                    </div>
                    
                    {/* <div className="qrCode">
                        服务号
                        <div style={{backgroundColor:'#f1f1f1', }} >
                            <QRCode
                                // errorLevel="H"                    
                                type="canvas"  
                                size='120'                      
                                value="https://www.shjkjt.com//"
                                iconSize='28'
                                icon={logo}
                            />  
                        </div>
                    </div> */}
                    
                </div> 
               <div className="certificates">       
                  Copyright ©2023 现代进口汽车 现代汽车（中国）投资有限公司版权所有京 沪ICP备2023013034号-1
               </div>
        </div>
    )
}