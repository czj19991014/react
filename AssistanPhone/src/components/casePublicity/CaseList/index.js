import React,{Component} from "react";
import { observer,inject } from 'mobx-react';
import "./style.css";
import { Link} from "react-router-dom";

@inject("caseStore","planStore")
@observer
class CaseList extends Component{
    componentDidMount(){
        this.props.caseStore.getCaseByName(this.props.match.params.id);
    }
    render(){
        const {caseStore} = this.props;
        const  cases = caseStore.cases;
        return (
            <header>
                <nav>
                    <div className="div1">
                        <span className="span1">受助会员公示</span>
                    </div>
                </nav>

                <div className="div2">

                    <div className="planDetails_div2_1"><span>已拨互助款（元）</span></div>

                    <div className="planDetails_div2_2">{cases.totalMoney}</div>
                    {cases.map(item=>(
                            <Link key={item.userId} to={`/caseDetail/${item.userId}`} className="planDetails_link">
                                <div className="planDetails_div2_3">
                                    <span className="planDetails_div2_3_span1">受助会员</span>
                                    <span className="planDetails_div2_3_span2">公示时间:{item.showTime}</span>
                                    <div className="planDetails_div2_3_1"><span>{item.userName}</span></div>
                                    <span className="planDetails_div2_3_2">情况简介:</span>
                                    <div className="planDetails_div2_3_3"><p className="div2_3_4">{item.caseDesc}</p></div>
                                </div>
                            </Link>
                    ))

                    }
                    <div><Link to="/casePublicity"><button className="caseList_button">返回</button></Link></div>

                </div>

            </header>
        )
    }
}
export default CaseList;
