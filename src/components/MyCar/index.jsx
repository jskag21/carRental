import React from "react";
import { Button, Popconfirm, Popover } from 'antd';
import {InfoCircleOutlined, CheckOutlined} from '@ant-design/icons';
import './index.css';

export default function MyCar(props){
 

    const assuranceContent=(
        <div className="assuranceContent">
            <p>只有保险的车辆才有资格被纳入我们的无忧选择。</p>
            <p>此费率包括超额覆盖和无限公里数。我们将为您的车辆提供燃油，</p>
            <p>并且必须将油箱加满的燃油退还给您</p>
            <p>有了我们的无忧选择，您可以安心旅行，无需支付任何隐藏费用。</p>
        </div>
    )
    return(
        <>
                    <div className="pricing-card">
                       <div className="carWrapper">
                            <span className="carTitle">
                                保险公告
                                <Popover
                                    title="保险公告"                                   
                                    content={assuranceContent}                      
                                >
                                     <InfoCircleOutlined className="assuranceIcon" style={{fontWeight:'bolder'}}/>
                                </Popover>
                              
                            </span>
                            <img height="100" src={props.car.imgSrc} />
                       </div>
                        <div className="pricing-card-info">
                            <div className="carDetails">
                                <h3>{props.car.name}</h3>
                                <p>
                                    <span><CheckOutlined style={{color:'red'}}/> 行驶里程不限</span>
                                    <span><CheckOutlined style={{color:'red'}} /> 零超额</span>
                                    <span><CheckOutlined style={{color:'red'}}/> 扩展的盖子</span>
                                </p>
                            </div>
                            <div className="price">
                                <p><span >￥ <span className="thePrice">{props.car.price}</span> / 天</span> <span style={{display:'block', color:'black', fontSize:'13px', fontWeight:'300'}}>{props.car.details} </span>     </p>
                                <button>联系车主</button>
                            </div>
                        </div>
                    </div>
        </>
    )
}