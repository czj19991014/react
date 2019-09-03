import React,{Component} from "react";
import { observer,inject } from 'mobx-react';
import "./style.css";
import { Link} from "react-router-dom";

@inject("memberStore")
@observer
class Home extends Component{

    render(){
        return (
            <header>
                <nav>
                    <div className="div1">
                        <div className="home_div2">
                            <Link to="/UserContoller/personalCenter">
                            <p>个人中心</p>
                            </Link>
                            <Link to="/PlanController/findAllPlanList">
                            <p>计划列表</p>
                            </Link>
                            <Link to="/paymentApplication">
                                <p>给付申请</p>
                            </Link>
                            <Link to="/casePublicity">
                                <p>案列公示</p>
                            </Link>
                            <p>会员中心</p>

                        </div>
                    </div>

                </nav>
            </header>
        )
    }
}
export default Home;