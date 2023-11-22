import React, { useRef,ref, useState } from "react";
import MyLayout from "../../MyLayout";
import {LeftOutlined,RightOutlined} from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import carIcon from '../../assets/images/car.png';
import locationIcon from '../../assets/images/location.png';
import serviceIcon from '../../assets/images/service.png';
import back01 from '../../assets/images/back01.jpg';
import back02 from '../../assets/images/back02.png';
import back03 from '../../assets/images/back03.png';
import './index.css';
import MyCar from "../../components/MyCar";
import {Banner} from '../../components/MyHeader';

function HomeLayout(){

    let [backgroundImage, setbackgroundImage]=useState('https://n.sinaimg.cn/translate/20170801/EXgN-fyiphwc4556477.jpg')
    const prevB=useRef(null)
    const nextB=useRef(null)
    const mydots=useRef(null)
    const carrousel=useRef(null)
    const carrousel1=useRef(null)
    // let [currentbackImg,setCurrentBackImg]=useState(0)
    let currentbackImg=useRef(0)
    const backgroundImages=[back02,back01,back03]
    const cars=[
        {
           name:'尼桑骐达',
            price:150,
            details:'1.4T自动 · 5座 · 紧凑型车',
            imgSrc:'https://cars.cdn.easyterra.com/dd7b67d5b79fa6399e8952dc797ff466/nissanversa_4.jpg',
        },
        {
           name:'尼桑骐达',
            price:300,
            details:'1.4T自动 · 5座 · 紧凑型车',
            imgSrc:'https://cars.cdn.easyterra.com/dd7b67d5b79fa6399e8952dc797ff466/nissanversa_4.jpg',
        },
        {
           name:'雪佛兰乐驰',
            price:250,
            details:'1.4T自动 · 5座 · 紧凑型车',
            imgSrc:'https://cars.cdn.easyterra.com/4d365fc8dc79fc085536cc68ea97d444/chevroletspark_4.jpg',
        },
        {
           name:'尼桑骐达',
            price:250,
            details:'1.4T自动 · 5座 · 紧凑型车',
            imgSrc:'https://cars.cdn.easyterra.com/dd7b67d5b79fa6399e8952dc797ff466/nissanversa_4.jpg',
        },
        {
           name:'尼桑骐达',
            price:350,
            details:'1.4T自动 · 5座 · 紧凑型车',
            imgSrc:' https://cars.cdn.easyterra.com/dd7b67d5b79fa6399e8952dc797ff466/nissanversa_4.jpg',
        },
        {
           name:'雪佛兰乐驰',
            price:150,
            details:'1.4T自动 · 5座 · 紧凑型车',
            imgSrc:'https://cars.cdn.easyterra.com/4d365fc8dc79fc085536cc68ea97d444/chevroletspark_4.jpg',
        },
       
    ]
    const clickOnNext=()=>{
      
       ++currentbackImg.current;
       currentbackImg.current=(currentbackImg.current==backgroundImages.length)? 0:currentbackImg.current ;
      
        
       for(let i=0; i<backgroundImages.length; i++){
        carrousel1.current.children[i].style.display='none';
         mydots.current.children[i].style.backgroundColor='#bbb';
       }
              
        carrousel1.current.children[currentbackImg.current].style.display='block';   
        mydots.current.children[currentbackImg.current].style.backgroundColor='hsl(0, 0%, 40%)';

    }
    const clickOnPrev=()=>{
  
       currentbackImg.current=(currentbackImg.current==0)? backgroundImages.length-1: --currentbackImg.current ;     

       for(let i=0; i<backgroundImages.length; i++){
         carrousel1.current.children[i].style.display='none';
         mydots.current.children[i].style.backgroundColor='#bbb';
       }      
       carrousel1.current.children[currentbackImg.current].style.display='block';
       mydots.current.children[currentbackImg.current].style.backgroundColor='hsl(0, 0%, 40%)';
    }

    const overCarrousel=()=>{
        prevB.current.style.opacity=1;
        nextB.current.style.opacity=1;   
        mydots.current.style.opacity=1;   
    }
    const mouseOutOfCarrousel=()=>{
        prevB.current.style.opacity=0;
        nextB.current.style.opacity=0;  
        mydots.current.style.opacity=0;       
    }
    
    
    // const changeingbackground=()=>{

     //}
    setInterval(()=>{
        clickOnNext()
        // ++currentbackImg.current;
        // currentbackImg.current=(currentbackImg.current==backgroundImages.length)? 0:currentbackImg.current ;
       
         
        // for(let i=0; i<backgroundImages.length; i++){
         
        //     if(mydots.current.children && carrousel1.current.children) {
        //         carrousel1.current.children[1].style.display='none';
        //         mydots.current.children[i].style.backgroundColor='#bbb';  }   
        // }
                      
        // if(mydots.current.children) {
        //     carrousel1.current.children[currentbackImg.current].style.display='block';
        //     mydots.current.children[currentbackImg.current].style.backgroundColor='hsl(0, 0%, 40%)';
        // }
        
    }, 8000)

    return (
        <div className="homeWrapper">
            {/* <section className="myVideo">
                <video className="thevideo" src="https://imgoss.wkzuche.com/web_imgs/pc/wkzuche/video/index.mp4" initial-time="0" autoplay="true" loop="true" muted="true" direction="0" data-v-190cf520=""></video>
            </section> */}
           <section className="carrousel" onMouseOver={overCarrousel} onMouseOut={mouseOutOfCarrousel} ref={carrousel} >

                <div className="buttons">
                    <button className="prev" ref={prevB} onClick={clickOnPrev}><LeftOutlined /></button>
                    <button className="next" ref={nextB} onClick={clickOnNext}> <RightOutlined /></button>
                </div>
                <div className="imgWrapper" ref={carrousel1}>
                    <img className="carrouselImage fade" style={{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.5)',  display:'block', }} src={backgroundImages[0]} />
                    <img className="carrouselImage fade" style={{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.5)', display:'none'}} src={backgroundImages[1]} />
                    <img className="carrouselImage fade" style={{ width:'100%', height:'100%',backgroundColor:'rgba(0,0,0,0.5)',display:'none'}} src={backgroundImages[2]} />
                </div>

                {/* <div className="carWrap">
                </div> */}
               
                <div className="dots" ref={mydots}>
                   
                    {
                        backgroundImages.map(()=>{
                            return (
                                <span className="dot"></span>
                            )
                        })
                    }
                </div>
           </section>
           <section className="youshi">
                <div className="youshiTitle">
                    <h1>我们的优势</h1>
                    <p>覆盖范围广 可选车辆多 品质服务好</p>
                </div>

                <div className="youshiCards">
                    <div className="youshi-card">
                        <img src={locationIcon} />
                        <p data-v-0f63a861="">460+城市<br data-v-0f63a861=""/>4万+服务网点</p>
                        <div class="superiority-button" data-v-0f63a861=""><span class="font-red" data-v-0f63a861="">查看城市</span><img src="https://imgoss.wkzuche.com/web_imgs/pc/wkzuche/index/arrow.png" data-v-0f63a861=""/></div>
                    </div>
                    <div className="youshi-card">
                        <img src={carIcon} />
                        <p data-v-0f63a861="">10万+好车<br data-v-0f63a861=""/>万种车型</p>
                        <div class="superiority-button" data-v-0f63a861=""><span class="font-red" data-v-0f63a861="">查看车型</span><img src="https://imgoss.wkzuche.com/web_imgs/pc/wkzuche/index/arrow.png" data-v-0f63a861=""/></div>
                    </div>
                    <div className="youshi-card">
                        <img src={serviceIcon} />
                        <p data-v-0f63a861="">7*24h<br data-v-0f63a861=""/>专属客服</p>
                        <div class="superiority-button" data-v-0f63a861=""><span class="font-red" data-v-0f63a861="">立刻预定</span><img src="https://imgoss.wkzuche.com/web_imgs/pc/wkzuche/index/arrow.png" data-v-0f63a861=""/></div>
                    </div>
                  
                </div>

          
           </section>
           <section className="pricing">
                <div className="pricingTitle">
                    <h1>热门城市</h1>
                    <p>460+城市 千百余款车任你挑选</p>
                </div>
                <div className="pricingCards">
                     { cars.map((aCar)=>{       return <MyCar car={aCar}/>    })   }
                </div>
               

            </section>
           
        </div>
    )
}
export default function Home(){

    return (
        <>
            <MyLayout
                container={<HomeLayout/>}
                
            />
        </>
    )
}