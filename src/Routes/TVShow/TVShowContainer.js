import React from "react";
import TVShowPresenter from "./TVShowPresenter";
import {tvshowApi} from "api";

//tvshow 컨테이너
export default class extends React.Component {
    state = {
        topRated : null,
        popular : null,
        airingToday : null,
        error : null,
        loading : true,
    }

    //topRated 데이터 가져오기
    _getTopRated = async ()=> {
        const {data : {results: topRated} }= await tvshowApi.topRated(); //객체 비구조화 할당
        this.setState({
            topRated,
        })
    }

    //poopular 데이터 가져오기
    async _getPopular() {
        const {data : {results: popular} }= await tvshowApi.popular(); //객체 비구조화 할당
        this.setState({
            popular,
        })
    }

    //airing 데이터 가져오기
    async _getAiringToday() {
        const {data : {results: airingToday} }= await tvshowApi.airingToday(); //객체 비구조화 할당
        this.setState({
            airingToday,
        })
    }

    //컴포넌트가 마운트되면 api로부터 데이터를 가져온다.
    async componentDidMount() {
        try{
            await this._getTopRated();
            await this._getPopular();
            await this._getAiringToday();
        } catch (error) {
            this.setState({
                error : "Can't load tvshow",
            })
        } finally {
            this.setState({
                loading :false,
            })
        }
        
        console.log(this.state); //잘 들어갔는지 확인!
    }

    render() {
        const {topRated, popular, airingToday, error, loading} = this.state;

        return(
            <TVShowPresenter 
                topRated={topRated} 
                popular={popular} 
                airingToday={airingToday}
                error={error}
                loading={loading}
            />
        )
    }
}