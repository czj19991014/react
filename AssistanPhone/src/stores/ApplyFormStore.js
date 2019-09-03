import { observable,action } from "mobx";
import ApplyFormModel from "../models/ApplyFormModel";
import App from "../components/App/index";

class ApplyFormStore {
    api;
    @observable applies=[];

    constructor(api) {
        this.api = api;
    }

    @action addApplyForm(ApplyForm){
       // return true;
        console.log(ApplyForm);
        return this.api.addApplyForm(ApplyForm);
    }
}
export default ApplyFormStore;


