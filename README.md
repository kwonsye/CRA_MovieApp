## CRA_Movie_App
---
- `create-react-app` 사용
    ```
    yarn global add npx
    npm i npx -g
    npx create-react-app cra_movie_app 
    ```
- `react-router-dom` 사용 : `Router.js`에서 각 **url**에 해당하는 **컴포넌트**로 이동할 수 있게 라우터 지정
    ```
    yarn add react-router-dom
    ```
- **Style**
    - styled-components 사용
    - styled-reset 사용 => css를 초기화시켜주고 `styled-components`의 `createGlobalStyle`을 통해 global하게 적용가능    
    ``` 
    yarn add styled-components
    yarn add styled-reset
    ```
- Movie API : <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a>
    - `axios` 를 사용해서 fetch
    ```
    yarn add axios
    ```
- `react-helmet` 사용 : 현재 컴포넌트에 따라 페이지의 **header title** 을 바꿀 수 있다.
    ```
    yarn add react-helmet
    ```
    - **reference**<p>
    <a href="https://github.com/nfl/react-helmet">https://github.com/nfl/react-helmet</a>
    ```
    import Helmet from "react-helmet"
    <Helmet>
        <title>원하는 헤더 이름</title>
    </Helmet>
    ```
- 파일 구성 (추가예정)
    - `Components`
        - `App.js`
        - `Header.js` : 헤더 컴포넌트 - 모든 page에 적용됨
        - `Loader.js` : api에서 데이터를 로드할 때 로딩페이지를 그려주는 컴포넌트
        - `Router.js` : url에 따른 컴포넌트를 지정해주는 라우터 컴포넌트
        - `Poster.js` : 영화 / TV쇼의 커버사진+제목+별점을 그려주는 컴포넌트
        - `Section.js` : 다수의 영화 / TV쇼를 섹션 주제로 묶어서 보여주는 컨테이너 역할의 컴포넌트
        - `Error.js` : error 발생 시 보여주는 컴포넌트
        - `NotFound.js` : `Search Component` 에서 검색 결과가 없을 때 보여주는 컴포넌트
        - `GlobalStyles.js` : Global 스타일 적용 <- `App.js` 하단에 컴포넌트 추가해줌

    - `Routes`
        - `Home` : <b>영화 page</b>
            - `index.js`
            - `HomeContainer.js`
            - `HomePresenter.js`
        - `TVShow` : <b>TV프로그램 page</b>
            - `index.js`
            - `TVShowContainer.js`
            - `TVShowPresenter.js`
        - `Search` : <b>영화 & TV프로그램 제목 검색 page</b>
            - `index.js`
            - `SearchContainer.js`
            - `SearchPresenter.js`
        - `Detail` : 클릭한 <b>영화 or TV프로그램 상세정보 page</b>
            - `index.js`
            - `DetailContainer.js`
            - `DetailPresenter.js`
    - `assets`
        - bread.JPG : 커버 이미지가 없을 경우 보여줄 커버 이미지. 그냥 빵 사진이다..(출처:구글링)
    - `api.js` : movie database에서 제공한 api로 json data를 가져오는 모든 fuction이 정의되어있다.
    - `index.js`

- 리액트 디자인 패턴
    - <b>Container-Presenter 패턴</b> 사용
        - Container
            - data, state, 로직을 가짐
            - class component
        - Presenter
            - Container로 부터 데이터를 받아서 화면에 그려주고 보여주는 역할
            - 스타일
            - function component

- 깃허브 페이지에 deploy 하기
    1. `gh-pages` 설치
    ```
    yarn add gh-pages
    ```
    2. `package.json` 수정
    ```
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy" : "gh-pages -d build",
    "predeploy" : "yarn run build"
    },
    "homepage" :"http://kwonsye.github.io/CRA_MovieApp",
    ```
    3. deploy 실행
    ```
    yarn deploy
    ```

    4. 확인!!! (시간이 조금 걸린다.)<p>
    <a href="http://kwonsye.github.io/CRA_MovieApp">http://kwonsye.github.io/CRA_MovieApp</a>



- 천천히 해볼 과제
    - Detail Component
        1. 버튼 만들고 {imdb_id} 로 IMDB Link 연결하기 (https://www.imdb.com/title/{imdb_id})
        2. Overview 하단에 탭추가
            - 유튜브 비디오
            - 제작 국가 + 국기(?)
            - 제작회사 + 로고
        3. **Movie** 시리즈 볼수 있는 링크걸기
            - 링크 클릭하면 `/collections` 로 이동할 수 있는 Route 생성 {belongs_to_collection : {id}}
            - {id}로 Collection 상세 정보 가져오기(api-doc)
            https://developers.themoviedb.org/3/collections/get-collection-details
            - 포스터 이미지 가져오는 url 예시
            (https://image.tmdb.org/t/p/w300/{belongs_to_collection})

        4. **TVShow** 
            - 시즌들 보여주기 
                - {seasons}
            - 제작자에 대한 정보+사진
                - {created_by}
                - 이미지 가져오는 url 예시
                (https://image.tmdb.org/t/p/w300/{profile_path})
            - {networks} 보여주기

            
