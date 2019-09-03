import {observable,action} from "mobx";
import  PlanModel from "../models/PlanModel";

class PlanStore {
    api;
    @observable plans = [];
    @observable planText=null;

    constructor(api) {
        this.api = api;
    }
    @action getplanText(){
        return this.planText
    }
    @action setplanText(flag){
        this.planText = flag
    }

    //根据计划名称查询计划 NEW
    @action getPlanByName(planName){
        // return this.plan=
        //     {
        //         id:1,
        //         planId:1,
        //         planName:"计划一",
        //         createTime:2018-3-21,
        //         helpObject:"飞行事故导致飞行员身体残疾",
        //         planContent:"在我们国家有许许多多的优秀的飞行员，他们把人生当中最美好的时光奉献给了祖国长年都在蓝天中拼搏。飞行员也是一种非常的职业，在飞行中不能有半点失误，一不小心就有可能机毁人亡。中国女飞行员余旭，" +
        //         "在2016年的表演赛中因为一个小小的失误就结束了自己年轻的生命，" +
        //         "将自己的一生奉献给了蓝天。此计划就是为了他们。",
        //         helpMoney:222222,
        //         helpUser:30,
        //     };
        return this.api.getPlanByName(planName).then(
            action(data=>{
                if(!data.error) {
                    this.plans.length=0;
                    data.forEach(post=>this.plans.push(PlanModel.fromJS(this,post)));
                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )
    }
      //案例公示获取
     @action
    //展示某计划详情
    @action showPlanDetail(planId){
        //  this.plans=
        //     {
        //         id:1,
        //         planId:1,
        //         planName:"飞行员计划一",
        //         createTime:2018-3-21,
        //         helpObject:"飞行事故导致飞行员身体残疾",
        //         planContent:"在我们国家有许许多多的优秀的飞行员，他们把人生当中最美好的时光奉献给了祖国长年都在蓝天中拼搏。飞行员也是一种非常的职业，在飞行中不能有半点失误，一不小心就有可能机毁人亡。中国女飞行员余旭，" +
        //         "在2016年的表演赛中因为一个小小的失误就结束了自己年轻的生命，" +
        //         "将自己的一生奉献给了蓝天。此计划就是为了他们。",
        //         helpMoney:222222,
        //         helpUser:30,
        //     };
        // return true;
        // return this.getPlan(planId);
        return this.api.showPlanDetail(planId).then(
            action(data=>{
                if(!data.error) {
                    console.log(data);
                    this.plans.length=0;
                    this.plans=data;
                    //data.forEach(item =>this.plans.push(PlanModel.fromJS(this,item)));
                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )
    }

    @action showCasePlanDetail(planId){
        return this.api.showCasePlanDetail(planId).then(
            action(data=>{
                if(!data.error) {
                    console.log(data);
                    this.plans.clear();
                    this.setplanText(data);
                    //data.forEach(item =>this.plans.push(PlanModel.fromJS(this,item)));
                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )
    }




   //加入互助计划
   @action findAll(){
       // return this.plans=[
       //     {
       //         id:1,
       //         planId:1,
       //         planName:"计划一",
       //         createTime:2018-3-21,
       //         helpObject:"飞行事故导致飞行员身体残疾",
       //         planContent:"在我们国家有许许多多的优秀的飞行员。中国女飞行员余旭，" +
       //         "在2016年的表演赛中因为一个小小的失误就结束了自己年轻的生命，" +
       //         "将自己的一生奉献给了蓝天。此计划就是为了他们。",
       //         helpMoney:222222,
       //         helpUser:30,
       //     },{
       //         id:2,
       //         planId:2,
       //         planName:"飞行员残疾互助",
       //         createTime:2018321,
       //         helpObject:"飞行事故导致身体残疾的飞行员",
       //         planContent:"在我们国家有许许多多的优秀的飞行员，" +
       //         "他们把人生当中最美好的时光奉献给了祖国" +
       //         "中国女飞行员余旭，在2016年的表演赛中因为一个小小的失误就结束了自己年轻的生命，" ,
       //         helpMoney:222222,
       //         helpUser:30,
       //     }
       // ]
       return this.api.findAll().then(
           action(data=>{
               if(!data.error) {
                   this.plans.clear();
                       console.log(data.length);
                   data.forEach(post=>this.plans.push(PlanModel.fromJS(this,post)));
                   return Promise.resolve();
               }else {
                   return Promise.reject();
               }
           })
       )
   }


}
export default PlanStore;
