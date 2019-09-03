import React,{ Component } from "react"
import paycode from "../../../imgs/paycode.jpg"
import {inject,observer} from "mobx-react"
import './style.css'

@inject("memberStore","planStore","caseStore")//会用到两个Store
@observer
class PersonalCenter_plan extends Component{
    // componentDidMount() {
    //     //将实例化的store和后台进行连接同时将后台放回的数据存到列表中
    //     this.props.planStore.fetchPlanList();
    //     this.props.memberStore.fetchMemberList();
    // }
    render() {
        const {memberStore,match,planStore} = this.props;
        const memberId = match.params.id;
        const member = memberStore.findUserById(memberId);
        const planName = member.planName;
        const plan = planStore.getPlanByName(planName);//这个函数是错误的
        return(
            <div className="personalCenter_plan">
                <div className="name">{plan.planName}</div>
                <div className="time">发起时间：{plan.createTime}</div>
                <div className="object">计划扶持对象：{plan.helpObject}</div>
                <div className="details">计划详情：{plan.planContent}<br/></div>
                <div className="groupcode">群二维码一：<br/><img src = {paycode} alt="" width="120px"/></div>
                <div className="groupcode">群二维码二：<br/><img src = {paycode} alt="" width="120px"/></div>
            </div>
        )
    }
}
export default PersonalCenter_plan;
