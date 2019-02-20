import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

//movie컨테이너
export default class extends React.Component {
    state = {
        nowPlaying : null,
        upcoming : null,
        popular : null,
        error : null, //error처리
        loading : true, //loading 상태
    };
    
    //nowPlaying 데이터 가져오기
    async _getNowPlaying() {
        const {data : { results : nowPlaying } } = await movieApi.nowPlaying() //destruction
        this.setState({
            nowPlaying, //변수명 같으면 : 안해줘도 됨
        })
    }

    //upcoming 데이터 가져오기
    async _getUpcoming() {
        const {data : { results : upcoming } } = await movieApi.upcoming() //destruction
        this.setState({
            upcoming,
        })
    }

    //popular 데이터 가져오기
    async _getPopular() {
        const {data : { results : popular } } = await movieApi.popular() //destruction
        this.setState({
            popular,
        })
    }

    //component가 마운트되었을때 api에서 데이터를 가져올 것이다.
    async componentDidMount() {
        try {
            await this._getNowPlaying();
            await this._getUpcoming();
            await this._getPopular();

            //console.log(this.state) //잘 들어갔는지 확인!
            //throw Error(); //에러를 던져주면 catch()로 들어간다.

        } catch (error){
            this.setState({
                error : "Can't load movies",
            })
        } finally {
            this.setState({
                loading : false, //최종적으로 loading 값을 false로 만든다.
            })
        }
    }

    render() {
        const {nowPlaying , upcoming, popular, error, loading} = this.state;
        //console.log(this.state);
        return <HomePresenter nowPlaying={nowPlaying} upcoming ={upcoming} popular ={popular} error={error} loading={loading}/>
    }
};