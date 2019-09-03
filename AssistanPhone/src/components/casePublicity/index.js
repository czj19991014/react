import React, {Component} from "react";
import {observer, inject} from 'mobx-react';
import "./style.css";
import {Link} from "react-router-dom";


@inject("caseStore")
@observer
class CasePublicity extends Component {

    componentDidMount() {
        this.props.caseStore.findAllPlanCase();
    }

    render() {
        const {caseStore} = this.props;
        const plans = caseStore.plans;
        const totalMoney = caseStore.totalMoney;
        return (
            <header>
                <nav>
                    <div className="div1">
                        <span className="span1">案例公示</span>
                    </div>
                </nav>

                <div className="div2">
                    <div className="case_div2_1"><span>已拨互助款（元）</span></div>
                    <div className="case_div2_2">{totalMoney}</div>
                    {plans.map(item => (
                        <Link key={item.planName} to={`/caseList/${item.planName}`} className="link">
                            <div className="case_div2_3">
                                <div className="case_div2_3_3"><p className="case_div2_3_p1">{item.name}</p></div>
                                <div className="case_div2_3_4"><p className="case_div2_3_p2">{item.planContent}</p>
                                </div>
                                <div className="case_div2_3_5"><span
                                    className="case_div2_3_p3">受助人数:{item.helpObject}人</span></div>
                                <div className="case_div2_3_6"><span
                                    className="case_div2_3_p3">受助金额:{item.helpMoney}元</span></div>
                            </div>
                        </Link>

                    ))
                    }


                </div>

            </header>



        )
    }

}

export default CasePublicity;