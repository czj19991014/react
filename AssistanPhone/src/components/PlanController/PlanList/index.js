import React,{ Component } from "react";
import './style.css';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom"

@inject("planStore")
@observer
class PlanList extends Component {
    componentDidMount() {
        //将实例化的store和后台进行连接同时将后台放回的数据存到列表中
        this.props.planStore.findAll();
    }
    render() {
        const {planStore} = this.props;
        const plans = planStore.plans;
        return (
                <div className="planList">
                    <div className="totalname">益仁互助计划</div>
                    <div>
                        {plans.map(
                                item => (
                                    <Link key={item.planId} to={`/PlanController/showPlandetail/${item.planId}`}>
                                        <div className="planShow">
                                                <div className="name">
                                                    {item.planName}
                                                </div>
                                                <div className="indruction">
                                                    情况简介：<span>{item.planContent}</span>
                                                </div>
                                        </div>
                                    </Link>
                                )
                            )
                         }
                    </div>
                </div>
        )
    }
}
export default PlanList;