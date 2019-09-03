import {observable,action} from "mobx";

class OpenStore{
    api;
    @observable openId;
    @observable status=-1;

    constructor(api){
        this.api = api;
        var arr = document.cookie.split(";");
        for(var i =0;i<arr.length;i++)
        {
            var co =arr[i].split("=");
            if(co[0] == "openId"){
                this.openId = co[i];
                this.status = this.getStatus(co[1]);
            }
        }
    }

    //根据openId更新用户状态
    @action getStatus(openId) {
   return this.api.getStatus(openId);

}
}
export default OpenStore;