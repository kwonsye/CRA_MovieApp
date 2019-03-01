import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";

const Container = styled.div`
    position : relative;
    height: calc(100vh - 50px);
    width : 100%;
    padding : 50px;
`;

const Backdrop = styled.div`
    background-image : url(${props => props.backdropImage});
    background-size : cover;
    position : absolute;
    height : 100%;
    width : 100%;
    top : 0;
    left : 0;
    z-index : 0;
    filter : blur(3px);
    opacity : 0.5;
`; 

const Content = styled.div`
    z-index : 1;
    width : 100%;
    height : 100%;
    display : flex;
`; 

const Cover = styled.div`
    background-image : url(${props => props.imageUrl});
    background-size : cover;
    background-position: center center;
    width : 30%;
    height : 100%;
    position : relative;
    border-radius: 5px;
`;

const DetailPresenter = ({result , error, loading}) => (
    loading ? (<Loader />) : 
    (<Container>
        <Backdrop backdropImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}></Backdrop>
        <Content>
            <Cover imageUrl={ result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/bread.JPG")}></Cover>
        </Content>
    </Container>)
);


DetailPresenter.propTypes = {
    result : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
}

export default DetailPresenter;