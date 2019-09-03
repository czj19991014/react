import React,{Component} from 'react';
class Picture extends Component{
    render() {
        return (
            <div>
                <form action="/Picture/upload" method="post" encType="multipart/form-data">
                    选择图片：<input type="file" name="pictureFile"/>
                    <input id="submit_once" type="submit" value="上传"/>
                </form>
            </div>
        );
    }
}
export default Picture;
