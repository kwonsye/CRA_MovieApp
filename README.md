## CRA_Movie_App
---
- create-react-app 사용
    ```
    yarn global add npx
    npm i npx -g
    npx create-react-app cra_movie_app 
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
- 파일 구성 (추가예정)
    - `Components`
    - `Routes`
        - `Home`
        - `TVShow`
        - `Search`
        - `Detail`

    - `api.js`
    - `index.js`

- 리액트 디자인 패턴
    - <b>Container-Presenter 패턴</b> 사용
        - Container : data, state, 로직을 가짐 / 데이터 / class component
        - Presenter : Container로 부터 데이터를 받아서 화면에 그려주고 보여주는 역할 / 스타일 / function component
