import React, { Component } from "react";
import './style.css'
import headimg from '../../../imgs/headimg.jpg'
import activity from '../../../imgs/activity.png'
import {inject,observer} from "mobx-react"
import PersonalCenterInformationItem from "../Personal_information_item/index"
import {Link} from "react-router-dom"

@inject("memberStore","planStore")
@observer
class PersonalCenter_information extends Component{
    componentDidMount() {
        this.props.memberStore.findUserById(1);
    }
    render() {
        const member = this.props.memberStore.member;
        const planName = this.props.memberStore.planName;
        console.log(planName);
        this.props.planStore.getPlanByName(planName);
        const plan = this.props.planStore.plans;
        if(member){
            const url = "http://129.204.67.108:8080/image/";
            const paths = `${member.image}`;
            const path = paths.split(";");
        return (
            <div className = "personalCenter_information">
                <div className = "headimg">
                    <div>
                        {path.map(item => (
                            <img src={url + item} key={item} style={{height: "100px", width: "100px"}}/>))}
                    </div>
                </div>
                <div className="called">
                    <ul>
                        <li>昵称：{member.nickName}</li>
                        <li>用户编号：{member.userId}</li>
                    </ul>
                </div>
                {/*<div className="activity">*/}
                    <img src = {activity} alt = "" width="375px" height="100px"/>
                {/*</div>*/}
                    <p className="myplan">我加入的互助计划</p><br/>
                    <div>
                        <PersonalCenterInformationItem plan={plan}/>
                </div>
                    <Link key={member.userId} to={`/UserContoller/userCompleteInfo/${member.userId}`}>
                        <div className="perfect">
                        <br/>完善个人信息
                        </div>
                    </Link>
            </div>
        )}
        else{
            return(
                <div>text</div>
            )
        }
    }
}
export default PersonalCenter_information;