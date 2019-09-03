import { post,get } from '../utils/request'
import url from '../utils/url';

export default {
    // userGetVaildate: code=>post(url.userGetVaildate(code)),

    userCompleteInfo:User=>post(url.userCompleteInfo(User)),
    //通过用户Id查询用户NEW
    findUserById:(userId)=>get(url.findUserById(userId)),
    // getMember:id=>get(url.findUserById(id)),

}