import { get,post} from '../utils/request'
import url from '../utils/url';

export default {
    //用户注册
    userRegister:(telephone,validatecode,flag)=>post(url.userRegister(telephone,validatecode),flag),
    //模拟发送验证码
    getVild:(telephone,flag)=>get(url.getVild(telephone),flag),
    //NEW NEW 用户登录验证码
    userLoginCode:(telephone,code)=>get(url.userLoginCode(telephone,code)),
    //NEW NEW 用户登录密码
    userLogin:(telephone,password)=>get(url.userLogin(telephone,password)),
}