import { observable,action } from "mobx";
import PlanModel from "../models/PlanModel";
import MemberModel from "../models/MemberModel"

class CaseStore {
    api;
    @observable cases=[];
    @observable plans=[];
    @observable totalMoney;
    @observable userNum;
    @observable payProve;
    @observable provePaths;
    @observable auditExplain;
    @observable caseDesc;

    constructor(api) {
        this.api = api;
    }

    getCase(id){
        for(var i=0;i<this.cases.length;i++){
            if(id == this.cases[i].userId){
                return this.cases[i];
            }
        }
        return false;
    }

    //查询案例公示中计划列表
    @action findAllPlanCase(){
        // return this.plans=[
        //     {
        //
        //         "planId": 1,
        //         "name": "飞行员癌症互助计划",
        //         "planContent": "这是详情1",
        //         "helpUser": 15,
        //         "helpMoney": 50000
        //     },
        //     {
        //
        //         "planId": 2,
        //         "name": "飞行员计划",
        //         "planContent": "这是详情2",
        //         "helpUser": 10,
        //         "helpMoney": 5000
        //     }
        //
        // ];
       return this.api.findAllPlanList().then(
            action(data=>{
                if(!data.error) {
                    this.plans.length = 0;
                    this.totalMoney=data.totalMoney;
                    (data.planList).forEach(item=>this.plans.push(PlanModel.fromJS(this,item)));
                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )
    }
    //查询计划名为planName的所有受助会员信息
    @action getCaseByName(planName){
        // return this.cases = [
        //     {
        //         "caseId":1,
        //         "plan": {
        //             "planId": 1,
        //             "name": "飞行员癌症互助计划",
        //             "planContent": "这是详情1",
        //             "helpUser":15,
        //             "helpMoney":50000
        //         },
        //         "applyForm": {
        //             "applyId": 1,
        //             "user": {
        //                 "userName":"李玉香",
        //             },
        //             "applyNumber": 3,
        //             "caseDesc":"糖尿病",
        //         },
        //         "money":5000,
        //         "prove":"经证实该会员患有糖尿病",
        //         "showTime":"2018年12月20日",
        //         "explain":"会员于2018年7月30日提交完整的材料。",
        //     },
        //     {
        //         "caseId":2,
        //         "plan": {
        //             "planId": 2,
        //             "name": "飞行员癌症互助计划",
        //             "planContent": "这是详情2",
        //             "helpUser":10,
        //             "helpMoney":100000
        //         },
        //         "applyForm": {
        //             "applyId": 3,
        //             "user": {
        //                 "userName":"张三",
        //             },
        //             "applyNumber": 1,
        //             "caseDesc":"截肢",
        //         },
        //         "money":5000,
        //         "prove":"情况属实",
        //         "showTime":"2018年9月18日",
        //         "explain":"经调查与审核后，于2018年11月21日对互助时间进行",
        //     }
        // ]
        return this.api.getPlanbyname(planName).then(
            action(data=>{
                if(!data.error) {
                    this.cases.length = 0;
                    (data.userList).forEach(item=>this.cases.push(MemberModel.fromJS(this,item)));
                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )
}

    //根据userId查询受助会员的详细信息
    @action showHelpUserDetail(userId){
        // return this.cases =
        //     {
        //         "caseId":1,
        //         "plan": {
        //             "planId": 1,
        //             "name": "飞行员癌症互助计划",
        //             "planContent": "这是详情1",
        //             "helpUser":15,
        //             "helpMoney":50000
        //         },
        //         "applyForm": {
        //             "applyId": 1,
        //             "user": {
        //                 "userName":"李玉香",
        //             },
        //             "applyNumber": 3,
        //             "caseDesc":"糖尿病",
        //         },
        //         "money":5000,
        //         "prove":"经证实该会员患有糖尿病",
        //         "showTime":"2018年12月20日",
        //         "explain":"会员于2018年7月30日提交完整的材料。",
        //     };
        // return this.getCase(userId);
        return this.api.showHelpUserDetail(userId).then(
            action(data=>{
                if(!data.error) {
                    this.cases.length = 0;
                     this.cases = data.user;
                     this.userNum = data.helpUserNums;
                     this.payProve = data.payProve;
                     this.provePaths = data.provePaths;
                     this.caseDesc = data.caseDesc;

                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )

    }


}
export default CaseStore;


