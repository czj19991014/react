import React,{Component} from "react";
import { observer,inject } from 'mobx-react';
import "./style.css";
import { Link} from "react-router-dom";
import {action, observable} from "mobx/lib/mobx";

@inject("memberStore","applyFormStore")
@observer
class paymentApplication extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            idCard:"",
            age:"",
            gender:"",
            telphone:"",
            duty:"",
            company:"",
            bankNumber:"",
            bankName:"",
            applyMoney:"",
            caseDesc:"",
            photo:"",
        }
    }


    // handleSave = () => {
    //     const apply = {
    //         name:this.state.name,
    //         idCard: this.state.idCard,
    //         age:this.state.age,
    //         gender:this.state.gender,
    //         telephone:this.state.telephone,
    //         duty:this.state.duty,
    //         company:this.state.company,
    //         bankNumber:this.state.bankNumber,
    //         bankName:this.state.bankName,
    //         applyMoney:this.state.applyMoney,
    //         caseDesc:this.state.caseDesc,
    //         photo:this.state.photo
    //     };
    //    // console.log(apply);
    //     const flag = this.props.applyFormStore.addApplyForm(apply);

    //     if(flag) alert("保存成功！");
    //     else alert("保存失败！");
    // };

    @action handleChange = e => {
        const name = e.target.name;
        if (name === "photo") {
            this.setState({photo:e.target.value});
        } else if (name === "name") {
            this.setState({name:e.target.value});
        } else if (name === "idCard") {
            this.setState({idCard:e.target.value});
        }else if (name === "gender") {
            this.setState({gender:e.target.value});
        }else if (name === "age") {
            this.setState({age:e.target.value});
        }else if (name === "telphone") {
            this.setState({telphone:e.target.value});
        }else if (name === "duty") {
            this.setState({duty:e.target.value});
        }else if (name === "company") {
            this.setState({company:e.target.value});
        }else if (name === "bankNumber") {
            this.setState({bankNumber:e.target.value});
        }else if (name === "bankName") {
            this.setState({bankName:e.target.value});
        }else if (name === "applyMoney") {
            this.setState({applyMoney:e.target.value});
        }else if (name === "caseDesc") {
            this.setState({caseDesc:e.target.value});
        }
    };
    render(){
        return (
            <header>
                <nav>
                    <div className="payment_div1">
                        <span className="span1">给付申请表填写</span>
                    </div>

                    <div className="payment_div2">
                        {/*<div className="payment_div3">真实姓名:<input onChange={this.handleChange} type="text" name="name" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">身份证号:<input onChange={this.handleChange} type="text" name="idCard" className="payment_input"/></div>*/}
                        {/*<div className="payment_div4">*/}
                            {/*<form action="">*/}
                                {/*性别：*/}
                                {/*<label htmlFor=""><input onChange={this.handleChange} type="radio" name="sex" id="male" className='payment_label'/>男</label>*/}
                                {/*<label htmlFor=""><input onChange={this.handleChange} type="radio" name="sex" id="female" className='payment_label'/>女</label>*/}
                            {/*</form>*/}
                        {/*</div>*/}

                        {/*<div className="payment_div3">年龄:&emsp;&emsp;<input onChange={this.handleChange} type="text" name="age" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">手机号码:<input onChange={this.handleChange} type="text" name="telphone" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">任职情况:<input onChange={this.handleChange} type="text" name="duty" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">工作单位:<input onChange={this.handleChange} type="text" name="company" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">银行卡号:<input onChange={this.handleChange} type="text" name="bankNumber" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">开户银行名称:<input onChange={this.handleChange} type="text" name="bankName" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">申请金额:<input onChange={this.handleChange} type="text" name="applyMoney" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">案件描述:<input onChange={this.handleChange} type="text" name="caseDesc" className="payment_input"/></div>*/}
                        {/*<div className="payment_div3">上传材料:</div>*/}
                        <div>
                            <form action="http://129.204.67.108:8080/mab/ApplyForm/addApplyForm" method="post" encType="multipart/form-data">
                                <span>真实姓名：</span><input name="user.userName" type="text"/>  <br/>
                                <span>身份证号：</span><input name="user.idCard" type="text"/>  <br/>
                                <span>性别：</span><input name="user.gender" type="text"/> <br/>
                                <span>年龄：</span><input name="user.age" type="text"/> <br/>
                                <span>手机号码：</span><input name="user.telephone" type="text"/> <br/>
                                <span>任职情况：</span><input name="user.duty" type="text"/> <br/>
                                <span>工作单位：</span><input name="user.company" type="text"/> <br/>
                                <span>银行卡号：</span><input name="applyForm.bankNumber" type="text"/> <br/>
                                <span>开户银行名称：</span><input name="applyForm.bankName" type="text"/> <br/>
                                <span>申请金额：</span><input name="applyForm.applyNumber" type="text"/> <br/>
                                <span>案件描述：</span><input name="applyForm.auditExplain" type="text"/> <br/>

                                <span>上传材料：</span><input type="file" name="pictureFiles" multiple="multiple"/>
                                <input id="submit_once" type="submit" value="提交"/>
                            </form>

                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default paymentApplication;