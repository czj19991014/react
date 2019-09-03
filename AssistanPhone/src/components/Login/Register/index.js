import React,{Component} from "react"
import {Link} from "react-router-dom"
import "./style.css"
import {observable} from "mobx/lib/mobx";
import {observer,inject} from "mobx-react"
import {Redirect} from "react-router-dom";


@inject("loginStore")
@observer
class Register extends Component{
    @observable telephone;
    @observable vildcode;
    @observable status=false;

    handleChange = e =>{
        const name = e.target.name;
        if(name==="telephone")
            this.telephone=e.target.value;
        else if(name==="vildcode")
            this.vildcode=e.target.value;
    }

    postVerifyCode=()=>{
        const flag=this.props.loginStore.postVerifyCode(this.telephone);

        if(flag) alert("已发送验证码至手机"+this.telephone+",请注意查收！");
        else alert("发送验证码失败，请重试！")

    }


    handleSubmit=()=>{
            this.status=true;
    }

    render(){
        if (true){
            return <Redirect to={"/home"}/>
        }
            return (
                <div>
                    <div style={{fontSize: "larger"}}>注册</div>
                    {/*<span>手机号：</span>*/}
                    {/*<input onChange={this.handleChange} name="telephone" type="text"/><br/>*/}
                    {/*<span>输入验证码：</span>*/}
                    {/*<input onChange={this.handleChange} name="code" type="text"/><br/>*/}
                    {/*<span onClick={this.postVerifyCode.bind(this)} style={{color: "#169BD5"}}>发送验证码</span> <br/>*/}
                    <div>上传云执照</div>
                    <form
                        // action="http://192.168.43.205:8080/mab/Login/userRegister/111/111"*/}
                         action="http://129.204.67.108:8080/mab/Login/userRegister"
                        method="post" encType="multipart/form-data">
                        <span>手机号：</span>
                        <input  onChange={this.handleChange} name="telephone" type="text"/><br/>
                        <span onClick={this.postVerifyCode.bind(this)} style={{color: "#169BD5"}}>发送验证码</span> <br/>
                        <span>输入验证码：</span>
                        <input  onChange={this.handleChange} name="vildCode" type="text"/><br/>
                        选择图片：<input type="file" name="pictureFile"/>
                        <input id="submit_once" type="submit" onClick={this.handleSubmit} value="注册"/>
                    </form>
                </div>
            )

    }
}
export default Register;