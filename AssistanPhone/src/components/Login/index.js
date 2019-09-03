import React,{Component} from "react"
import {Link} from "react-router-dom"
import "./style.css"
import { observer,inject } from 'mobx-react';
import {observable} from "mobx";
import {Redirect} from "react-router-dom";

@inject("loginStore")
@observer
class Login extends Component{
    @observable telephone;
    @observable vildCode;
    @observable flag=false;

    handleChange = e =>{
        const name = e.target.name;
        if(name==="telephone")
            this.telephone = e.target.value;
        else if(name==="vildCode")
            this.vildCode = e.target.value;
    }

    postVerifyCode=()=>{
        const flag=this.props.loginStore.postVerifyCode(this.telephone);
        if(flag) alert("已发送验证码至手机"+this.telephone+",请注意查收！");
        else alert("发送验证码失败，请重试！");
    }

    handleClick1=()=>{
       // const flag = this.props.loginStore.userLoginCode(this.telephone,this.vildCode);
       // console.log(flag);
       // if(flag) alert("验证成功！");
       // else alert("验证失败！");
        this.props.loginStore.userLoginCode(this.telephone,this.vildCode);
    }

    handleClick = e =>{
        //阻止数据的发送
        //对账号或者密码格式进行判断
        e.preventDefault();
        if(this.name == ""||this.password == "")
            alert("账户名或者密码不能为空，请重新输入");
        else
        {
            const admin={
                name:this.name,
                password:this.password
            }
            const flag = this.props.loginStore.userLogin(this.name,this.password);
            if(flag)
            {
                this.flag = true;
                this.props.loginStore.setStatus(true);
            }
            else alert("账号或密码错误！");
        }
    }
    render(){
        if (this.props.loginStore.status){
            return <Redirect to={"/home"}/>
        }
    return(
        <div>
            <div style={{fontSize:"larger"}}>验证码登陆</div>
            <span>手机号：</span>
            <input onChange={this.handleChange} name="telephone" type="text"/>
            <button onClick={this.postVerifyCode} style={{color:"#169BD5"}}>获取验证码</button> <br/>
            <span>输入验证码：</span>
            <input onChange={this.handleChange} name="vildCode" type="text"/><br/>
           <button onClick={this.handleClick1}>登陆</button>
            <Link to="/register"><button>注册</button> </Link> <br/>
            <Link to="/passwordLogin"> <button>手机号不可用？密码登陆</button> </Link>
        </div>
        )
    }
}
export default Login;