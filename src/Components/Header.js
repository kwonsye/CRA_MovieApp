import React from "react";
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";

//styled-components 를 이용해서 조금 더 리액트 답게!
//className 을 랜덤으로 부여해준다 -> 지역화해줌 
const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid ${props => props.current ? "#fbc531" : "transparent"}
    transition: border-bottom 0.5s ease-in-out;
`;

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
//{Link}를 사용해서 href 링크를 나타내면 링크가 바뀔 때마다 계속 새롭게 화면을 그리지 않는다.
const StyledLink = styled(Link)` 
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//withRouter에 컴포넌트를 감싸면 현재 라우터에 대한 정보를 props를 받을 수 있다. //withRouter()는 <Router />안에서만
//사용할 수 있다.

export default withRouter(( {location : {pathname}}) => (
    //현재 라우터의 위치를 받아와서
    <Header>
        <List>
            <Item current={pathname==="/"}>
                <StyledLink to="/">HOME</StyledLink>
            </Item>
            <Item current={pathname==="/tvshow"}>
                <StyledLink to="/tvshow">TVSHOW</StyledLink>
            </Item>
            <Item current = {pathname==="/search"}>
                <StyledLink to="/search">SEARCH</StyledLink>
            </Item>
        </List>
    </Header>
))