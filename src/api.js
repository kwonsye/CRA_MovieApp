import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{ //params란 ?뒤에 붙는 쿼리 &로 이어짐 ex > ?api_keys=sdfs&language=kor
        api_key : "1b9e4b85e90b73deb159485a7c7bf064",
        language : "en-US",
    }
})


export const movieApi = { //나중에 사용할 곳에서 import {movieApi} from "api" 로 가져올 수 있다.
    nowPlaying : () => api.get("movie/now_playing"), //리턴하는 것들을 객체로 받아서 저장
    upcoming : () => api.get("movie/upcoming"),
    popular : () => api.get("movie/popular"),
    movieDetail : (id) => api.get(`movie/${id}`,
    {
        params:{
            append_to_respond : "videos",
        }
    }),
    searchMovie : (title) => api.get("search/movie",{
        params : {
            query : encodeURIComponent(title), //특수문자, 띄어쓰기 등 encode 해줘야함
        }
    })
}

export const tvshowApi = {
    topRated : () => api.get("tv/top_rated"),
    popular : () => api.get("tv/popular"),
    airingToday : () => api.get("tv/airing_today"),
    tvDetail : (id) => api.get(`tv/${id}`,
    {
        params:{
            append_to_respond : "videos",
        }
    }),
    searchTV : (title) => api.get("search/tv",{
        params : {
            query : encodeURIComponent(title),
        }
    })
}