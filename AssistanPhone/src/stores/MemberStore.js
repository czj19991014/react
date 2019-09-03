import { observable,action } from "mobx";
import MemberModel from "../models/MemberModel";
import {get} from "../utils/request";
import url from "../utils/url";

class MemberStore {
    api;
    @observable member=[];

    constructor(api){
        this.api = api;
    }



    //完善用户个人信息
    @action userCompleteInfo(User){
        return this.api.userCompleteInfo(User);
    }

    //通过用户Id查询用户NEW
    @action findUserById(userId){

        return this.api.findUserById(userId).then(
            action(data=>{
                if(!data.error) {
                    this.member.length=0;
                    this.member=data;
                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )
    }


    //
    // getMember(id){
    //     return this.plandetails.find(item => item.id == id);
    //     return this.api.getMember(id);
    // }

    // /**
    //  * 新建
    //  */
    // @action createMember(post){
    //     const content = {...post};
    //     return this.api.createMember(content).then(
    //         action(data=>{
    //             if(!data.error){
    //                 this.posts.unshift(Member_models.fromJS(this,data));
    //                 return Promise.resolve();
    //             }else {
    //                 return Promise.reject();
    //             }
    //         })
    //     )
    // }


    // getMembers(id){
    //     return this.members.find(item => item.id == id);
    //     return this.api.getMembers(id);
    // }
    /**
     * 从服务器获取校友列表
     */
   // @action getPlansDetails(){
   //     return this.plandetails=[
   //         {
   //             id:1,
   //             headPortrait:"头像1",
   //             briefIntroduction:"会员于2018年7月30日提交完整的材料。益仁互助平台\n" +
   //             "于 2018年7月31日正式受理该会员的申请，经调查与审核" + "后，于2018年11\n" +
   //             "月21日对互助时间进行（此处省略详细描述)\n",
   //             planName:"计划一",
   //             helpNumber:"278",
   //             helpMoney:"76000",
   //             material:"图片",
   //             examine:"该受助者的情况属实。",
   //             receipt:"收据",
   //
   //         },
   //         {
   //             id:2,
   //             headPortrait:"头像2",
   //             briefIntroduction:"会员于2018年7月13日提交完整的材料。益仁互助平台\n"
   //              +"于 2018年8月3日正式受理该会员的申请，经调查与审核\n" +
   //             "后，于2018年11月27日对互助时间进行（此处省略详细描述)\n",
   //             planName:"计划一",
   //             helpNumber:"768",
   //             helpMoney:"976990",
   //             material:"图片",
   //             examine:"该受助者的情况属实。",
   //             receipt:"收据",
   //         }
   //     ]
   //  }
   //  @action getPhoto(){
   //      return this.photos=[
   //          {
   //              photo1:"图片",
   //              photo2:"图片",
   //              photo3:"图片",
   //              photo4:"图片",
   //          },
   //          {
   //              plan1:"飞行员事故互助计划",
   //              plan2:"飞行员残疾互助计划",
   //          },
   //          {
   //              contend1:"针对许多飞行员由于\n" +
   //              "飞行事故早早地结束了\n" +
   //              "他们美好的生命，此计划是\n" +
   //              "为了筹钱来慰问他们的家人。",
   //              contend2:"许多飞行员在出了事故后，\n" +
   //              "身体出现了残缺，造成\n" +
   //              "生活不便，此计划是为了\n" +
   //              "筹钱帮他们渡过难关。",
   //          },
   //          {
   //              helpNumber1:"278",
   //              helpMoney1:"76000",
   //              helpNumber2:"768",
   //              helpMoney2:"976990",
   //          }
   //      ]
   //  }
   //
   //  @action getMoney() {
   //      return this.money = "555666777";
   //
   //
   //      return this.api.getMember().then(
   //          action(data=>{
   //              if(!data.error){
   //                  this.posts.clear();
   //                  data.forEach(post=>this.posts.push(Member_models.fromJS(this,post)));
   //                  return Promise.resolve();
   //              }else {
   //                  return Promise.reject();
   //              }
   //          })
   //      )
   //  }

    // @action fetchMemberList() {
    //     return this.members = [
    //         {
    //             id:1,
    //             userId:123,
    //             picture:null,
    //             userName:"张三",
    //             password:123,
    //             gender:"男",
    //             age:34,
    //             idCard:123,
    //             telphone:10086,
    //             linkMan:"李四",
    //             linkManTel:10086,
    //             company:"航空",
    //             duty:"空军",
    //             email:126,
    //             status:1,
    //             planName:"计划一",
    //         },{
    //             id:2,
    //             userId:456,
    //             picture:null,
    //             userName:"李四",
    //             password:123,
    //             gender:"男",
    //             age:43,
    //             idCard:456,
    //             telphone:10086,
    //             linkMan:"张三",
    //             linkManTel:10086,
    //             company:"航空",
    //             duty:"空军",
    //             email:123,
    //             status:2,
    //             planName:"",
    //         },{
    //             id:3,
    //             userId:789,
    //             picture:null,
    //             userName:"王五",
    //             password:123,
    //             gender:"男",
    //             age:56,
    //             idCard:789,
    //             telphone:10086,
    //             linkMan:"张三",
    //             linkManTel:10086,
    //             company:"航空",
    //             duty:"空军",
    //             email:106,
    //             status:0,
    //             planName:"计划三",
    //         }
    //     ];
    //     return this.api.fetchMemberList().then(
    //         action(data=>{
    //             if(!data.error) {
    //                 this.members.clear();
    //                 data.forEach(item=>this.members.push(MemberModel.fromJS(this,item)));
    //                 return Promise.resolve();
    //             }else {
    //                 return Promise.reject();
    //             }
    //         })
    //     )
    // }


}
export default MemberStore;