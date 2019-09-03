import { observable,action } from 'mobx';

class ApplyFormModel {
    store;
    @observable applyId;//给付申请表id
    @observable bankNumber;
    @observable bankName;
    @observable applyNumber;
    @observable caseDesc;
    @observable applyMoney;
    @observable auditExplain;
    @observable applyStatus;
    @observable payProve;


    constructor(store,applyId,bankNumber,bankName,
                applyNumber,caseDesc,applyMoney,
                auditExplain,applyStatus,payProve){
        this.store = store;
        this.applyId=applyId;
        this.bankNumber=bankNumber;
        this.bankName=bankName;
        this.applyNumber=applyNumber;
        this.caseDesc=caseDesc;
        this.applyMoney=applyMoney;
        this.auditExplain=auditExplain;
        this.applyStatus=applyStatus;
        this.payProve=payProve;

    }

    // /**
    //  * 更新
    //  * @param json
    //  */
    // @action updateFromJS(json){
    //     this.bankNumber=json.bankNumber;
    //     this.bankName=json.bankName;
    //     this.applyNumber=json.applyNumber;
    //     this.caseDesc=json.caseDesc;
    //     this.applyMoney=json.applyMoney;
    //     this.auditExplain=json.auditExplain;
    //     this.applyStatus=json.applyStatus;
    //     this.payProve=json.payProve;
    // }

    static fromJS(store,object){
        return new ApplyFormModel(
            store,
            object.applyId,
            object.bankNumber,
            object.bankName,
            object.applyNumber,
            object.caseDesc,
            object.applyMoney,
            object.auditExplain,
            object.applyStatus,
            object.payProve
        )
    }
}
export default ApplyFormModel;
