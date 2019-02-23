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
        searchTitle : "", //사용자가 검색할 제목 sumit을 하면 setState 해줄 것임
    }
    //presenter에서 submit했을때 넘겨줄 함수
    _handleSubmit = (event) => { //event가 들어옴
        event.preventDefault(); // 이걸 하는 이유는? form 에서 submit이 되면 browser가 event를 받아서 새로고침되며 state를 잃어버린다. 
        //우리는 state을 잃지 않고 가져와야하므로 이벤트를 가로채야한다.
        
        const {searchTitle} = this.state;
        if(searchTitle !== ""){
            this._getSearchByTitle();
        }
    }

    _updateTitle = (event) => {
        const {target : {value}} = event
        //console.log(value); //input에 업데이트하는 입력텍스트를 한글자씩 받아옴 
        //-> searchTitle을 setState해줘서 input태그의 value에 넣어줘야 prop으로 넘긴 searchTitle이 보임
        this.setState({
            searchTitle : value,
        }) 
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
                loading : false,
            })
        }
        
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
                handleSubmit={this._handleSubmit}  
                updateTitle = {this._updateTitle} 
            />
        )
    }
}