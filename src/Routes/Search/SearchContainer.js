import React from "react";
import SearchPresenter from "./SearchPresenter";
import {movieApi , tvshowApi} from "api";

//검색메뉴 컨테이너
export default class extends React.Component {
    state = {
        movieResults : null,
        tvResults : null,
        loading : false, //false일때는 검색 입력폼을 render, true일때는 검색 결과를 보여줄 것이다.
        error : null,
        searchTitle : "code", //사용자가 검색할 제목 sumit을 하면 setState 해줄 것임
    }
    //presenter에서 submit했을때 넘겨줄 함수
    _handleSubmit = () => {
        const {searchTitle} = this.state;
        if(searchTitle !== ""){
            this._getSearchByTitle();
        }
    }

    _getSearchByTitle = async () => {
        const { searchTitle } = this.state;
        try {
            const movieResults = await movieApi.searchMovie(searchTitle);
            const tvResults = await tvshowApi.searchTV(searchTitle);
            this.setState({
                movieResults,
                tvResults,
            })
            //console.log(this.state); //잘 들어갔는지 확인!
        } catch(error){
            this.setState({
                error : "Can't search movie or tvshow",
            })
        } finally {
            this.setState({
                loading : true,
            })
        }
        
    }

    componentDidMount() {
        this._handleSubmit();
    }
    
    render() {
        const {movieResults, tvResults, loading, error, searchTitle} = this.state;

        return(
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                loading={loading}
                error={error}
                searchTitle={searchTitle}   
            />
        )
    }
}