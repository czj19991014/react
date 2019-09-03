import React,{Component} from "react"
import paycode from "../../imgs/paycode.jpg"
import {inject, observer} from "mobx-react";

@inject("planStore")
@observer
class EnterPlan extends Component{
  render() {
      // const plan = this.props.planStore.plans;
      // const userId = plan.userId;
      // const planName = plan.planName;
      const {planStore}= this.props.planStore;
      const plan=planStore.plans;
      console.log("ddd");
      console.log(plan);
      const userId=plan.userId;
      const planName = plan.planName;

      // console.log(userId);

      return(
          <div>
              <span> 付款码 </span>
              <div><img src = {paycode} alt="" width="250px"/>
              </div>
              <div>
                  <div>
                      <form action={`http://129.204.67.108:8080/mab/User/updateUserByUserId`} method="post" encType="multipart/form-data">
                          选择图片：<input type="file" name="pictureFile"/>
                          <input id="submit_once" type="submit" value="上传"/>
                      </form>
                  </div>
                  </div>
          </div>
      )
  }

}
export default  EnterPlan;
