import { post } from '../utils/request'
import url from '../utils/url';

export default {
    //填写给付申请表
    addApplyForm:(data)=>post(url.addApplyForm(),data),
}
