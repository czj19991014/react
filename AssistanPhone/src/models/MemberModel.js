import { observable,action } from 'mobx';

class UserModel {
    store;
    @observable userId;
    @observable openId;//从微信获取的id
    @observable nickName;//微信昵称
    @observable image;//微信头像
    @observable picture;//云执照
    @observable userName;
    @observable password;
    @observable gender;
    @observable age;
    @observable idCard;
    @observable telephone;
    @observable linkMan;//紧急联系人
    @observable linkManTel;//紧急联系人电话
    @observable company;
    @observable duty;
    @observable email;
    @observable status;//状态
    @observable planName;//加入的计划
    @observable money;
    @observable createTime;
    @observable showTime;
    @observable _explain;
    @observable auditStatus;

    constructor(store,userId,openId,nickName,image,
                picture,userName,password,gender,age,
                idCard,telephone,linkMan,linkManTel,
                company,duty,email,status,planName,money,createTime,showTime,_explain,auditStatus){
        this.store = store;
        this.userId = userId;
        this.openId = openId;
        this.nickName = nickName;
        this.image = image;
        this.picture= picture;
        this.userName = userName;
        this.password = password;
        this.gender=gender;
        this.age=age;
        this.idCard=idCard;
        this.telephone = telephone;
        this.linkMan=linkMan;
        this.linkManTel=linkManTel;
        this.company = company;
        this.duty = duty;
        this.email=email;
        this.status=status;
        this.planName=planName;
        this.money=money;
        this.createTime=createTime;
        this.showTime=showTime;
        this._explain=_explain;
        this.auditStatus = auditStatus;
    }

    // /**
    //  * 更新
    //  * @param json
    //  */
    @action updateFromJS(json){
        this.userId=json.userId;
        this.openId = json.openId;
        this.nickName = json.nickName;
        this.image = json.image;
        this.picture=json.picture;
        this.userName = json.userName;
        this.password = json.password;
        this.gender=json.gender;
        this.age=json.age;
        this.idCard=json.idCard;
        this.telephone = json.telephone;
        this.linkMan=json.linkMan;
        this.linkMan=json.linkMan;
        this.company = json.company;
        this.duty = json.duty;
        this.email=json.email;
        this.status=json.status;
        this.planName=json.planName;
        this.money=json.money;
        this.createTime=json.createTime;
        this.showTime=json.showTime;
        this._explain=json._explain;
        this.auditStatus = this.auditStatus;
    }

    static fromJS(store,object){
        return new UserModel(
            store,
            object.userId,
            object.openId,
            object.nickName,
            object.image,
            object.picture,
            object.userName,
            object.password,
            object.gender,
            object.age,
            object.idCard,
            object.telephone,
            object.linkMan,
            object.linkManTel,
            object.company,
            object.duty,
            object.email,
            object.status,
            object.planName,
            object.money,
            object.createTime,
            object.showTime,
            object._explain,
            object.auditStatus,
        )
    }

}
export default UserModel;
