import {get} from "../utils/request";
import url from "../utils/url";

export default {
    getStatus:id => get(url.getStatus(id))
};
