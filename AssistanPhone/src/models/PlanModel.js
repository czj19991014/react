import {observable, action} from "mobx";

class PlanModel{
    store;
    planId;
    @observable planName;
    @observable helpObject;
    @observable createTime;
    @observable planContent;
    @observable helpMoney;
    @observable helpUserNums;
    @observable payQR;
    @observable QRPath;


    constructor(store,planId,planName,createTime,helpObject,planContent,helpMoney,helpUserNums,payQR,QRPath){
        this.store = store;
        this.planId = planId;
        this.planName = planName;
        this.createTime = createTime;
        this.helpObject = helpObject;
        this.planContent = planContent;
        this.helpMoney=helpMoney;
        this.helpUserNums = helpUserNums;
        this.payQR = payQR;
        this.QRPath = QRPath;
    }

    // //根据json对象更新数据
    // @action updateFromJS(json){
    //     this.planName = json.planName;
    //     this.helpObject = json.helpObject;
    //     this.createTime = json.createTime;
    //     this.planContent = json.planContent;
    //     this.helpMoney=json.helpMoney;
    //     this.helpUserNums = json.helpUserNums;
    // }


    static fromJS(store,object){
        return new PlanModel(
            store,
            object.planId,
            object.planName,
            object.createTime,
            object.helpObject,
            object.planContent,
            object.helpMoney,
            object.helpUserNums,
            object.payQR,
            object.QRPath,
        )
    }
}
export default PlanModel;