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
- Style
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
- 파일 구성 (추가예정)
    - `Components`
        - `App.js`
        - `Header.js` : 헤더 컴포넌트 - 모든 page에 적용됨
        - `Loader.js` : api에서 데이터를 로드할 때 로딩페이지를 그려주는 컴포넌트
        - `Router.js`
        - `Section.js`
        - `Error.js`
        - `NotFound.js`
        - `GlobalStyles.js`
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
        - `Detail` : <b>영화 or TV프로그램 상세정보 page</b>
            - `index.js`
            - `DetailContainer.js`
            - `DetailPresenter.js`

    - `api.js`
    - `index.js`

- 리액트 디자인 패턴
    - <b>Container-Presenter 패턴</b> 사용
        - Container : data, state, 로직을 가짐 / 데이터 / class component
        - Presenter : Container로 부터 데이터를 받아서 화면에 그려주고 보여주는 역할 / 스타일 / function component
