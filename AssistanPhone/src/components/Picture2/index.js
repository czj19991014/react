import React,{Component} from 'react';
class ImagesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            news:[
                {
                    image:""
                }
            ]
        };
    }
    handle_click = ()=>{
        let t = this;
        fetch("http://localhost:308/data", {method: 'GET'}).then(
            function (res) {
                console.log(res);
                res.json().then(function (data) {
                        console.log(data);
                        t.setState({
                            news:data
                        });
                    }
                )
            });
    };
    render() {
        const url = "http://pic1.sc.chinaz.com/files/pic/pic9/201812/";
        return (
            <div>
                <button onClick={this.handle_click}>button</button>
                <br/>
                {this.state.news.map((item,i) =>
                    <div key={i}>
                        {item.image.split(";").map(list=>(
                            <img src={url+list} width="100%" height="100%"/>
                        ))}
                    </div>
                )}
                <br/>
            </div>
        );
    }
}
export default ImagesList;
