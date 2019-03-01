import React from "react";
import DetailPresenter from "./DetailPresenter";
import {movieApi, tvshowApi} from "api";

//선택한 컨텐츠의 세부사항에 대한 컨테이너
export default class extends React.Component {

    //생성자
    constructor(props){
        super(props);
        //console.log(props) //url에 대한 정보가 props로 넘어온다.
        const {location : {pathname}} = props;
        this.state = {
            result : null,
            error : null,
            loading : true,
            isMovie : pathname.includes("/movie/"), 
        }
    }

    //컴포넌트가 마운트 되면 url을 분석해야한다. props로 path와 param을 알 수 있다.
    //movie/14 이라면 movie도 가져와야하고 14도 가져와야한다.
    async componentDidMount(){
        const {
            //location : { pathname }, //위 예시에서의 /movie/14이다.
            match : {params : {id}}, //여기서 id가 위 에시에서의 14이다.
            history : {push}, //url을 파라미터로 넘긴 값으로 보내주는 push함수를 가져온다.
        } = this.props;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)){ //id가 숫자가 아니면
            return push("/"); //홈으로 보내준다.
        }
        
        let result = null;
        try{
            const {isMovie} = this.state;
            if(isMovie){ //url이 영화라면
                ({data : result} = await movieApi.movieDetail(parsedId)); //해당 id의 영화 detail 데이터를 가지고 온다.
                //{data : result } = await movieApi.movieDetail(parsedId) //let result와 여기의 result는 달라지게 된다.
            } else {
                ({data : result}= await tvshowApi.tvDetail(parsedId)); // ()로 묶어줘야 let의 result에 대입할 수 있다.
            }
            //console.log(result);
        } catch(error) {
            this.setState({
                error : "Can't find anything"
            })
        } finally {
            this.setState({
                loading : false,
                result,
            })
            console.log(this.state.result)
        }
    }

    render(){
        const {result , error, loading} = this.state;
        //console.log(this.props); //Router가 현재 위치에 대한 정보를 props로 준다.     
        return(
            <DetailPresenter result={result} error={error} loading={loading} />
        )
    }
}