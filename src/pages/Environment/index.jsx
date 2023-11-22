import React from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import './index.css';

export default function Environment(){

    return (
       <>
        <MyHeader/>
        <div className="environment">
                <h1 style={{padding:'2rem 0 1.5rem 0'}}>环保信息</h1>
                 <hr/>
                <h2 style={{padding:'1.5rem 0 0 0'}}>我们的环保承诺</h2>
                <p>在汽车租赁服务中不仅致力于为客户提供便利，还积极采取环保措施，以降低我们的环境影响。以下是我们的环保承诺：</p>
                <hr/>
                

                <h3 style={{paddingTop:'1rem'}}>车辆燃油效率</h3>
                <p>我们努力提供燃油效率高的汽车，以减少二氧化碳排放和对非可再生能源的依赖。</p>

                <h3>车辆维护和更新</h3>
                <p>定期对我们的汽车进行维护，确保引擎和排放系统的高效运行。我们也致力于逐步更新我们的车队，引入更环保的汽车技术。</p>

                <h3>废物管理</h3>
                <p>我们将努力最小化废弃物的产生，并在可能的情况下进行循环利用和再利用。</p>

                <h3>废弃车辆处理</h3>
                <p>在淘汰旧车时，我们将采用环保的废弃车辆处理方法，包括合规的汽车回收和零部件回收</p>


                <h2>电子文档</h2>
                
                <hr/>
                <h2>节能办公</h2>
               <p> 我们努力在办公环境中推动节能和减少废弃物的措施，包括双面打印、电子邮件通信等。</p>
                <hr/>
                <h2>社区参与</h2>

                <h3>环保驾驶培训</h3>
                <p>我们支持并鼓励客户参与环保驾驶培训，以降低燃油消耗和排放。</p>

                <h3>社区清理活动</h3>
                <p>定期组织或参与社区清理活动，以提高环保意识并促进环保行动。</p>

                <h2>持续改进</h2>
                <p style={{marginTop:'-0.1rem'}}>我们将持续评估并改进我们的环保政策和实践，以确保我们的行动符合最新的环保标准和法规。</p>
            </div>
        <MyFooter/>
       </>
    )
    
}