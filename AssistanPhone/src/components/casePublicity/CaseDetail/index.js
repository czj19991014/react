import React,{Component} from "react";
import { observer,inject } from 'mobx-react';
import "./style.css";
import paycode from "../../imgs/paycode.jpg";
import {Link} from "react-router-dom";

@inject("caseStore")
@observer
class CaseDetail extends Component{
    componentDidMount(){
        this.props.caseStore.showHelpUserDetail(this.props.match.params.id);
    }
    render(){
        const {cases} = this.props.caseStore;
        const nums = this.props.caseStore.userNum;
        if(cases){
            const url = "http://129.204.67.108:8080/isPay/";
            const paths = `${this.props.caseStore.payProve}`;
            const path = paths.split(";");
            const url2 = "http://129.204.67.108:8080/prove/";
            const paths2 = `${this.props.caseStore.provePaths}`;
            const path2 = paths2.split(";");
            const url3 = "http://129.204.67.108:8080/image/";
            const paths3 = `${cases.image}`;
            const path3 = paths3.split(";");
        return(

            <div>
            <header>
                <nav>
                    <div className="div1">
                        <span className="span1">公示详情</span>
                    </div>
                </nav>
                <div className="div2">
                    <div className="memberDetails_div2_1"><div className="div2_2">头像</div></div>
                    <div>
                        {path3.map(item => (
                            <img src={url3 + item} key={item} style={{height: "100px", width: "100px"}}/>))}
                    </div>
                    <div><span className="memberDetails_div2_span1">所属计划：{cases.planName}</span></div>
                    <div> <span className="memberDetails_div2_span1">情况简介：</span><div>{this.props.caseStore.caseDesc}</div></div>
                    <div className="memberDetails_div2_3"><span className="div2_3_span1">参与人数:{nums}</span></div>
                    <div className="memberDetails_div2_3"><span className="div2_3_span1">互助金额:{cases.helpMoney}</span></div><br/>
                    {/*<div> <span className="memberDetails_div2_span1">情况简介：</span><div>{cases._explain}</div></div>*/}
                    <div className="memberDetails_div2_4">
                        <p className="memberDetails_div2_span3">事件证明:</p>
                        <div>
                            {path2.map(item => (
                                <img src={url2 + item} key={item} style={{height: "100px", width: "100px"}}/>))}

                        </div>
                    </div>
                    <div className="memberDetails_div2_5">
                        <p className="memberDetails_div2_span4">事件核实:</p>
                        <div>{this.props.caseStore.auditExplain}</div>
                    </div>
                    <div className="memberDetails_div2_5">
                        <p className="memberDetails_div2_span4">划款这证明:（平台给的收据）</p>
                        <div>
                            {path.map(item => (
                                <img src={url + item} key={item} style={{height: "100px", width: "100px"}}/>))}

                        </div>
                    </div>


                    {/*<div><Link key={cases.userId} to={`/caseList/${cases.userId}`}><button className="memberDetails_button">返回</button></Link></div>*/}


                        </div>
            </header>
            </div>
        )}
        else{
            return(
                <div>text</div>
            )
        }

    }

}
export default CaseDetail;