import {get} from "./request";

export default {
    //NEW NEW 差获取登录用户信息的接口
    //planStore
    //查找所有计划
    findAll:()=>"/Plan/findAll",
    //查询案例公示中计划列表
    findAllPlanList:()=>"/Plan/findAllPlan",
    //根据互助计划id查找plan
    showPlanDetail: planId=>`/Plan/findPlanById/${planId}`,
    //查询计划名为planName的所有受助会员信息
    findAllUser:(planName)=>`/Plan/findAllUser/${planName}`,
    //根据userId查询受助会员的详细信息
    showHelpUserDetail:(userId)=>`/Plan/showHelpUserDetail/${userId}`,
    //根据计划名称查询计划NEW
   // getPlanByname: planName=>`/Plan/getPlanByName/${planName}`,
    //根据计划Id查询计划
    findPlanById:planId=>`/Plan/getPlanById/`,
    //Member
    //通过用户Id查询用户
    findUserById:(userId)=>`/User/findUserById/${userId}`,
    //完善用户信息 没有Id
    userCompleteInfo: ()=>"/User/user/userCompleteInfo",

    //获取身份状态


    //填写给付申请表 error
     addApplyForm:()=>"/ApplyForm/addApplyForm",

    //用户注册  //post在url里传参数validatecode
    userRegister:(telephone,validatecode)=>`/Login/userRegister/${telephone}/${validatecode}`,
    //模拟发送验证码
    getVild:(telephone)=>`/Login/getVild/${telephone}`,

    //NEW NEW 用户登录验证码
    userLoginCode:(telephone,code)=>`/Login/loginUserByCode/${telephone}/${code}`,
    //NEW NEW 用户登录密码
    userLogin:(telephone,password)=>`/Login/userLogin/${telephone}/${password}`,


    //单个文件上传
    upload:()=>"/Picture/upload",
    //保存多个图片
    uploads:()=>"/Picture/uploads",
    //取出图片
    showImages:(picId)=>`/Picture/showImages/${picId}`,
    // //memberStore
    // userGetVaildate:()=>"/member",
    // userRegister:()=>"/member",
    // userLogin:()=>"/member",
    // userCompleteInfo:()=>"/member",
    // getMember:()=>"/member",
    //
    // //planStore
    // findAllPlanList:()=>"/plan",
    // showPlanDetail:()=>"/plan",
    // getPlanbyname:()=>"/plan",
    // getPlan:()=>"/plan",
    //
    // //applyFormStore
    // addApplyForm:()=>"/apply",
    //
    // //caseStore
    // findAllUserList:()=>"/case",
    // getCaseByPlanId:()=>"/case",
}