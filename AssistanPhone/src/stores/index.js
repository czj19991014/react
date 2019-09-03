import MemberStore from './MemberStore';
import memberApi from "../api/memberApi";
import PlanStore from "./PlanStore";
import planApi from "../api/planApi";
import applyFormApi from "../api/applyFormApi";
import ApplyFromStore from "./ApplyFormStore"
import CaseStore from "./CaseStore";
import caseApi from "../api/caseApi";
import LoginStore from "./LoginStore";
import loginApi from "../api/loginApi"
import OpenStore from "./OpenStore";
import openApi from "../api/openApi";

const memberStore = new MemberStore(memberApi);
const planStore = new PlanStore(planApi);
const applyFormStore= new ApplyFromStore(applyFormApi);
const caseStore = new CaseStore(caseApi);
const loginStore = new LoginStore(loginApi);
const openStore = new OpenStore(openApi);

const stores = {
    memberStore,
    planStore,
    applyFormStore,
    caseStore,
    loginStore,
    openStore
};

export default stores;