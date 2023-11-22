import React from "react";
import './index.css';
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";

export default function Privacy(){
    const contentStyle={
        // height:'100vh',
        margin:'0 10%',
        padding:'0 60px 60px 60px',
        backgroundColor:'white',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        zIndex:'10',
        marginTop:'1px',
    
    }
    return (
        <>
            <MyHeader />
            <div className="privacyContent" style={contentStyle}>
                    <h1 style={{padding:'2rem 0'}}>隐私和法律</h1>
                    <hr/>
                    <p>
                        <h2>隐私政策</h2>
                        <br/>
                        我们非常重视对您的个人信息保护，也理解您可能关心您的个人信息处理过程，因此我们制订了本政策，阐述我们如何收集、使用、披露、共享以及储存您的个人信息。当您开始连接我们的网站或使用我们提供的任一产品或服务时，即表示您已同意我们按照本政策来合法处理您的个人信息。,请在使用我们的产品或服务前，仔细阅读并了解本《个人信息保护政策》。
                    </p>
                    <hr/>
                    <p>
                        <h3 style={{padding:'1rem 0'}}>个人信息的收集  </h3>

                        <ol>            
                                            
                            <li>您访问我们网站、参与我们网站的活动或通过我们网站获得线上或线下服务时（包括但不限于进行会员用户注册、通过电子邮件等联系我们提出问题、参与在线调查、申请试乘试驾或者参加品牌俱乐部活动等）自行填报登记的个人信息，如姓名、手机号、电子邮箱等。
                            </li>
                            
                            <li>您关注我们的社交媒体（如微博、微信、抖音等）时提供的个人社交媒体信息，或您通过公众可接触的方式（例如微博、微信、抖音等）发布您的人信息时公开的信息。
                            </li>
                            <li>
                            我们将通过如下方式自我们的合作方处获取您的个人信息：
                            a.
                            我们从金融公司获取的您申请购买现代汽车中国贷款时所填报的个人信息；
                            b.
                            我们从我们的其他商业合作伙伴和/或服务提供商（及其关联公司和非关联公司）处收集的您的个人信息，例如您参与车展时向车展主办方提供的个人信息
                            c.
                            我们还可能从其他公开途径收集关于您的个人信息并加入我们的客户信息库。

                            </li>
                            <li>
                            在您访问我们的网站时，我们会通过Cookies和其他追踪技术了解您使用现代汽车中国网站的情况，用以向不同群体客户提供更有针对性、更有价值的产品信息和服务。您理解并同意我们将通过Cookies收集您的信息（如登陆状态，登陆时间，登陆有效值）并可能会将收集的信息与您的其他信息结合使用。大部分浏览器会自动打开Cookies，但您可以随时调整您的浏览器设置,选择关闭Cookies。
                            </li>
                            <li>当您拨打我们的服务热线或呼叫中心电话时，为了提高服务质量及跟进您的请求，我们可能会在通话期间向您收集您的个人信息（如姓名，省份，电话，购车意向等），或者通过电子媒介手段进行电话录音。您理解并同意我们在语音通话的过程中收集您的个人信息并进行电话录音。</li>
                            <li>当您下载或使用我们或我们指定的第三方开发的应用（如车载系统）时，我们可能会通过该等应用收集您的地理位置、车辆状况、移动设备特定标识码（如包含识别用户移动设备的特定号码）等个人信息。这些数据将被用于确定您、您的设备或您的车辆的大致位置，以便我们能提供并完善我们的定位服务或其他个性化服务。您理解并同意我们收集上述地理位置、车辆状况、移动设备特定标识码等个人信息。</li>
                            <li>当您使用我们的网站或其他任何途径进行工作申请或查询时，我们可能会要求您提供您的简历等相关信息。为处理您的查询要求或出于招聘考虑,我们可能会在该过程中分析使用您的信息。</li>    
                        </ol>    
                    </p>
                    <p>
                        <h3 style={{padding:'1rem 0'}}>信息的使用 </h3>
                        <span>我们收集的信息将用于以下目的：</span>

                        <ol>            
                                            
                            <li> <strong>提供服务：</strong> 包括但不限于姓名、地址、联系方式、驾照信息</li>
                            <li> <strong>交易信息：</strong> 与您租赁汽车相关的支付和交易详情。</li>
                            <li><strong>改进用户体验：</strong>通过了解用户的使用习惯来改善我们的网站和服务。  </li>
                            <li><strong> 推送通知:</strong> 如果您同意，我们可能会向您发送与我们的服务相关的通知  </li>
                            <li><strong>位置信息： </strong> 我们可能会收集您的位置信息以提供更好的服务。  </li>
                            
                        </ol>    
                    </p>
                    <p>
                        <h3 style={{marginBottom:'-1rem'}}>Cookie 和类似技术 </h3>
                        <p>本网站可能使用cookie和类似技术来提高用户体验。您可以通过浏览器设置拒绝cookie，但这可能影响您对网站的访问和使用。</p>
                    </p>
                    <p>
                        <h3 style={{marginBottom:'-1rem'}}>信息的分享 </h3>
                        <p>我们承诺不会未经您的明示许可向任何第三方出售、出租、分享或交易您的个人信息。</p>
                    </p>

                    <h2 style={{margin:"4rem 0 1.5rem 0"}}>法律声明</h2>
                    <hr/>
                    <p style={{margin:"1rem 0"}}>
                        <h3 style={{marginBottom:'-1rem'}}> 责任声明</h3>
                        <p>我们努力确保提供的信息准确无误，但不对信息的准确性、完整性或适用性提供任何明示或暗示的保证。</p>
                    </p>
                    <p style={{margin:"1rem 0"}}>
                        <h3 style={{marginBottom:'-1rem'}}>租赁条款和条件</h3>
                        <p>在使用我们的汽车租赁服务之前，请仔细阅读并理解我们的租赁条款和条件。这些条款包括关于租车费用、保险责任等方面的重要信息。</p>
                    </p>
                    <p style={{margin:"1rem 0"}}>
                        <h3 style={{marginBottom:'-1rem'}}>法律适用和争议解决</h3>
                        <p>本服务的使用受到相关法律的管辖。任何因使用我们服务而产生的争议应通过友好协商解决，如协商不成，将提交到有管辖权的法院解决。</p>
                    </p>
                    <p style={{margin:"1rem 0"}}>
                        <h3 style={{marginBottom:'-1rem'}}>知识产权 </h3>
                        <p>本网站上的所有内容，包括但不限于文字、图像、标志等，均受到知识产权法的保护。未经许可，不得擅自复制、传播或使用。</p>
                    </p>


                    <p style={{margin:"1rem 0"}}>
                        <h3 style={{marginBottom:'-1rem'}}>免责声明 </h3>
                        <p>我们努力确保网站上提供的信息准确无误，但不对信息的准确性、完整性或适用性提供任何明示或暗示的保证。您在使用本网站上的信息时应谨慎判断。</p>
                    </p>
                    <p style={{margin:"1rem 0"}}>
                        <h3 style={{marginBottom:'-1rem'}}>法律适用和争议解决 </h3>
                        <p>本网站的使用受到相关法律的管辖。任何因使用本网站而产生的争议应该通过友好协商解决，如果协商不成，将提交到有管辖权的法院解决。</p>
                    </p>                   
                   






            </div>
            <MyFooter/>


        </>
    )
}