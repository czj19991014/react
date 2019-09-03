import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
import Personal_information from "../UserController/PersonalCenter/Personal_information/index";
import PlanList from "../PlanController/PlanList/index";
import Perfectinformation from "../UserController/PersonalCenter/PerfectInformation/index";
import Personal_plan from "../UserController/PersonalCenter/Personal_plan/index";
import PlanDetails from "../PlanController/PlanDetails/index";
import PasswordLogin from "../Login/PasswordLogin";
import Register from "../Login/Register";
import Login from "../Login";

import Home from "../home"
import CasePublicity from "../casePublicity";
import CaseList from "../casePublicity/CaseList";
import PaymentApplication from "../paymentApplication";
import CaseDetail from "../casePublicity/CaseDetail";
import EnterPlan from "../PlanController/EnterPlan/EnterPlan";

import {Redirect} from 'react-router-dom'

// inject("openIdStore")
@observer
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}/>


                        <Route path="/home" component={Home}/>
                        {/*<Route path="/home" render={props=>{return isLogin? <Home{...props}/>:<Redirect to={"/"}/>}}/>*/}


                        <Route  path="/casePublicity" component={CasePublicity}/>
                        {/*<Route path="/casePublicity" render={props=>{return isLogin? <CasePublicity{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path={`/caseList/:id`} component={CaseList}/>
                        {/*<Route path="/caseList/:id" render={props=>{return isLogin? <CaseList{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path="/paymentApplication" component={PaymentApplication}/>
                        {/*<Route path="/paymentApplication" render={props=>{return isLogin? <PaymentApplication{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path={`/caseDetail/:id`} component={CaseDetail}/>
                        {/*<Route path="/caseDetail/:id" render={props=>{return isLogin? <CaseDetail{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path="/PlanController/showPlandetail/EnterPlan" component={EnterPlan}/>
                        {/*<Route path="/PlanController/showPlandetail/EnterPlan" render={props=>{return isLogin? <EnterPlan{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path="/UserContoller/personalCenter" component={Personal_information}/>
                        {/*<Route path="/UserContoller/personalCenter" render={props=>{return isLogin? <Personal_information{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path = "/UserContoller/userCompleteInfo" component={Perfectinformation }/>
                        {/*<Route path="/UserContoller/userCompleteInfo" render={props=>{return isLogin? <Perfectinformation{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path = "/UserContoller/personalCenter/personalPlan" component={Personal_plan}/>
                        {/*<Route path="/UserContoller/personalCenter/personalPlan" render={props=>{return isLogin? <Personal_plan{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path = "/PlanController/findAllPlanList" component = {PlanList}/>
                        {/*<Route path="/PlanController/findAllPlanList" render={props=>{return isLogin? <PlanList{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path = {`/UserContoller/userCompleteInfo/:id`} component={Perfectinformation }/>
                        {/*<Route path={`/UserContoller/userCompleteInfo/:id`}render={props=>{return isLogin? <Perfectinformation{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path = {`/PlanController/showPlandetail/:id`} component={ PlanDetails }/>
                        {/*<Route path={`/PlanController/showPlandetail/:id`}render={props=>{return isLogin? <PlanDetails{...props}/>:<Redirect to={"/"}/>}}/>*/}

                        <Route path = {`/UserContoller/personalCenter/personalPlan/:id`} component={ Personal_plan }/>
                        {/*<Route path={`/UserContoller/personalCenter/personalPlan/:id`}render={props=>{return isLogin? <Personal_plan {...props}/>:<Redirect to={"/"}/>}}/>*/}


                        <Route path="/register" component={Register}/>
                        <Route path="/passwordLogin" component={PasswordLogin}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;