import React,{ Component } from "react"
import './style.css'
import photo from '../../../imgs/photo.jpg'
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom"
import {observable,action} from "mobx"

@inject("memberStore")
@observer
class PersonalCenter_perfectInformation extends Component{
    constructor(props){
        super(props);
        this.state={
        id:0,
        photo:"",
        name:"",
        gender:"",
        idCard:"",
        email:"",
        telphone:"",
        linkMen:"",
        linkMenTel:"",
}
}



    componentDidMount() {
        // const planId = this.props.match.params.id;
        // this.setState({id:planId});
        const userId = this.props.match.params.id;
        this.props.memberStore.findUserById(userId);
    }

    handleSave = () => {
        const plan = {
            photo: this.state.photo,
            name:this.state.name,
            gender: this.state.gender,
            idCard: this.state.idCard,
            email:this.state.email,
            telphone: this.state.telphone,
            linkMen: this.state.linkMen,
            linkManTel: this.state.linkMenTel
        };
        const flag = this.props.memberStore.userCompleteInfo(plan);
       if(flag) console.log("保存成功！");
       else console.log("保存失败！");
    };

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
        }else if (name === "email") {
            this.setState({email:e.target.value});
        }else if (name === "telphone") {
            this.setState({telphone:e.target.value});
        }else if (name === "linkMen") {
            this.setState({linkMen:e.target.value});
        }else if (name === "linkMenTel") {
            this.setState({linkMenTel:e.target.value});
        }
    };
    render() {
         const {member} = this.props.memberStore;
        const url = "http://129.204.67.108:8080/pic/";
        const paths = `${member.picture}`;
        const path = paths.split(";");
        // const {match} = this.props;
        // const memberId = match.params.id;
        return(
                <div className="personalCenter_perfectInformation">
                    <div className="title">
                        完善个人信息
                    </div>
                    <div className="photo">
                        云执照： <div>
                        {path.map(item => (
                            <img src={url + item} key={item} style={{height: "100px", width: "100px"}}/>))}

                    </div>
                    </div>
                    <form>
                    <div className="updateName">
                        <span style={{fontSize:"large"}}>真实姓名：</span>
                        <input className="PersonalInput" type = "text" name="name" onChange={this.handleChange}/><br/>
                    </div>
                    <div className="updateName">
                        <span style={{fontSize:"large"}}>性别：</span>
                        <input className="PersonalInput" type = "text"  name="gender" onChange={this.handleChange}/><br/>
                    </div>
                    <div className="updateName">
                        <span style={{fontSize:"large"}}>身份证号：</span>
                        <input className="PersonalInput" type = "text" name = "idCard" onChange={this.handleChange}/><br/>
                    </div>
                    <div className="updateName">
                        <span style={{fontSize:"large"}}>邮箱：</span>
                        <input className="PersonalInput" type = "text" name = "email" onChange={this.handleChange}/><br/>
                    </div>
                    <div className="updateName">
                        <span style={{fontSize:"large"}}>联系电话：</span>
                        <input className="PersonalInput" type = "text" name = "telphone" onChange={this.handleChange}/><br/>
                    </div>
                    <div className="updateName">
                        <span style={{fontSize:"large"}}>紧急联系人：</span>
                        <input className="PersonalInput" type = "text" name = "linkMan" onChange={this.handleChange}/><br/>
                    </div>
                    <div className="updateName">
                       <span style={{fontSize:"large"}}>紧急联系人电话：</span>
                        <input className="PersonalInput" type = "text" name = "linkManTel"  onChange={this.handleChange}/><br/>
                    </div>
                    </form>
                    <Link to="/UserContoller/personalCenter">
                        <div className="yes" onClick={this.handleSave} >提交</div>
                    </Link>
                </div>
            )
    }
}
export default PersonalCenter_perfectInformation;