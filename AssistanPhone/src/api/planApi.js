import { get } from '../utils/request'
import url from '../utils/url';

export default {
    //查找所有计划
    findAll:()=>get(url.findAll()),
    //展示某计划详情
    showPlanDetail: (planId)=>get(url.showPlanDetail(planId)),
    //根据计划名称查询计划NEW
    getPlanByName: (planName)=>get(url.getPlanByName(planName)),
}
