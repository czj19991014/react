import React from "react";
import './style.css'
import {Link} from "react-router-dom"


function PersonalCenter_information_item(props) {

    const {plan} = props;
    const planId = plan.planId;
    if(planId){
        return (
            <div className="plan">
                {/*/UserContoller/personalCenter/personalPlan/${member.id}*/}
                <Link key={planId} to= {`/PlanController/showPlandetail/${planId}`}>{plan.planName}</Link>
            </div>
        )
    }else {
        return (
            <div className="unplan">
                <Link to = "/PlanController/findAllPlanList">
                    {/*<div className="add">*/}
                        {/*<span className="hline"></span>*/}
                        {/*<span className="sline"></span>*/}
                    {/*</div>*/}
                    <div className="add1">添加计划</div>
                </Link>
            </div>
        )
    }
}
export default PersonalCenter_information_item;