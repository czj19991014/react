import React,{Component} from "react"
import {Link} from "react-router-dom"
import "./style.css"
import {observable} from "mobx/lib/mobx";
import {observer,inject} from "mobx-react";
import {Redirect} from "react-router-dom";

@inject("loginStore")
@observer
class PasswordLogin extends Component{
    @observable telephone;
    @observable password;

          @observable flag=false;

    handleChange = e =>{
        const telephone = e.target.name;
        if(telephone ==="telephone")
            this.telephone = e.target.value;
        else if(telephone ==="password")
            this.password = e.target.value;
    }

    // handleSubmit=()=>{
    //     const flag=this.props.loginStore.userLogin(this.telephone,this.password);
    //     if(flag) console.log("登录成功!");
    //    else console.log("登录失败！");
    // }


    handleClick = e =>{
        //阻止数据的发送
        //对账号或者密码格式进行判断
        e.preventDefault();
        if(this.telephone == ""||this.password == "")
            alert("账户名或者密码不能为空，请重新输入");
        else
        {

            this.props.loginStore.userLogin(this.telephone,this.password);
            // const flag1 = this.props.loginStore.userLogin(user);
            // if(flag1)
            // {
            //     this.flag = true;
            //     this.props.loginStore.setStatus(true);
            // }
            // else alert("账号或密码错误！");
        }
    }
    render(){
        if (this.props.loginStore.status){
            return <Redirect to={"/home"}/>
        }
        return(
            <div>
                <div style={{fontSize:"larger"}}>手机号登陆</div>
                <span>手机号：</span>
                <input onChange={this.handleChange} name="telephone" type="text"/><br/>
                <span>密码：</span>
                <input onChange={this.handleChange} type="password" name="password"/><br/>
                <button onClick={this.handleClick}>登陆</button>
                <Link key={this.telephone} to="/home"> <button>注册</button> </Link>
            </div>
        )
    }
}
export default PasswordLogin;