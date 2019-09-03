import { observable,action } from "mobx";
import {get} from "../utils/request";
import url from "../utils/url";

class LoginStore {
    api;
    @observable status=false;

    constructor(api){
        this.api = api;
    }

    getStatus(){
        return this.status;
    }
    setStatus(flag){
        this.status = flag;
    }

    //用户注册成为会员
    @action userRegister(flag1, code) {
        return this.api.userRegister(flag1, code);
    }

    //NEW NEW 用户登录验证码
    @action userLoginCode(telephone,code){
        return this.api.userLoginCode(telephone,code).then(
            action(data=>{
                if(!data.error){
                    console.log(data);
                    this.setStatus(data);
                    if(!data) console.log("验证码错误");
                }
            })
        )
    }

    //NEW NEW 用户登录密码
    @action userLogin(telephone,password){
            // console.log(this.api.adminLogin(adminName,password));
            // return true;
            return this.api.userLogin(telephone,password).then(
                action(data=>{
                    if(!data.error){
                        this.setStatus(data);
                        if(!data) console.log("账号或密码错误");
                    }
                })
            )
        }

    //给用户发送验证码
    @action postVerifyCode(telephone) {
        return this.api.getVild(telephone);
    }

}
export  default LoginStore;