import { get,post,put } from '../utils/request'
import url from '../utils/url';

export default {
//单个文件上传
    upload: () => "/Picture/upload",
    //保存多个图片
    uploads: () => "/Picture/uploads",
    //取出图片
    showImages: (picId) => {`/Picture/showImages/${picId}`},
}