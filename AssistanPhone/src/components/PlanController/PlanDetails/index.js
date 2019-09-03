import React,{ Component } from "react"
import './style.css'
import paycode from "../../imgs/paycode.jpg"
import {inject, observer} from "mobx-react";

@inject("planStore","openStore")
@observer
class PlanDetails extends Component{
    componentDidMount() {
        const planId = this.props.match.params.id;
        this.props.planStore.showPlanDetail(planId);
    }
        render(){
        const {planStore,openStore} = this.props;

        const openId = openStore.openId;

        const plan = planStore.plans;
            if(plan) {
                const url = "http://129.204.67.108:8080/payQR/";
                const paths = `${plan.payQR}`;
                const path = paths.split(";");
                return (
                    <div className="planDetails">
                        <div className="name">{plan.planName}</div>
                        <div className="time">发起时间：{plan.createTime}</div>
                        <div className="object">计划扶持对象：{plan.helpObject}</div>
                        <div className="details">计划详情：{plan.planContent}<br/></div>
                        <div className="pay">付款码：<br/>
                            {/*<img src = {paycode} alt="" width="250px"/>*/}
                            {/*<button ><Link  to='/PlanController/showPlandetail/EnterPlan'>加入这个计划</Link></button>*/}
                        </div>
                        <div>
                            {path.map(item => (
                                <img src={url + item} key={item} style={{height: "200px", width: "200px"}}/>))}
                        </div>
                        <div>
                            <div>
                                <form
                                    action={`http://localhost:8080/mab/User/updateUserByPayProve/${openId}/${plan.planName}`}
                                    method="post" encType="multipart/form-data">
                                    选择图片：<input type="file" name="pictureFiles"/>
                                    <input id="submit_once" type="submit" value="上传"/>
                                </form>


                                {/*<form action="http://192.168.43.205:8080/mab/Plan/addPlan" method="post" encType="multipart/form-data">*/}
                                {/*<span>计划名称：</span><input name="planName" type="text"/>  <br/>*/}
                                {/*<span>计划扶持对象：</span><input name="helpObject" type="text"/>  <br/>*/}
                                {/*<span>计划详情：</span><input name="planContent" type="text"/> <br/>*/}
                                {/*<span>群二维码：</span><input type="file" name="pictureFiles" multiple="multiple"/>*/}
                                {/*/!*<span>付款二维码：</span><input type="file" name="pictureFile2" multiple="multiple"/>*!/*/}
                                {/*<input id="submit_once" type="submit" value="发起计划"/>*/}
                                {/*</form>*/}

                            </div>
                        </div>
                    </div>

                )
            }
            else return(
                    <div>text</div>
                )
    }
}
export default PlanDetails;