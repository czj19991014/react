import { get } from '../utils/request'
import url from '../utils/url';

export default {
    //查询计划名为planName的所有受助会员信息
    getPlanbyname:(planName)=>get(url.findAllUser(planName)),
    //根据userId查询受助会员的详细信息
    showHelpUserDetail:(userId)=>get(url.showHelpUserDetail(userId)),
    //查询案例公示中计划列表
    findAllPlanList: ()=>get(url.findAllPlanList()),
}
