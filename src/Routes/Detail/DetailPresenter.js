import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Helmet from "react-helmet";

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

const Data = styled.div`
    width : 70%;
    margin-left : 10px;
`;

const Title = styled.h3`
    font-size : 50px;
    opacity : 1;
`;

const InfoContainer = styled.div`
    font-size : 15px;
    margin : 20px 0px;
`;

const Info = styled.span`
    margin : 10px;
`;

const Overview = styled.p`
    font-size : 17px;
    line-height : 24px;
    width : 70%;
    opacity: 0.7;
`;

const Divider = styled.span`
    margin : 0 3px;
`;

const DetailPresenter = ({result , error, loading}) => (
    loading ? (<Loader />) : 
    (<Container>
        <Helmet>
            <title>{result.original_title ? result.original_title : result.original_name } </title>
        </Helmet>
        <Backdrop backdropImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}></Backdrop>
        <Content>
            <Cover imageUrl={ result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/bread.JPG")}></Cover>
            <Data>
                <Title>
                    {result.original_title ? result.original_title : result.original_name}
                </Title>

                <InfoContainer>
                    <Info>{(result.release_date || result.first_air_date) && result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Info>
                    <Divider>•</Divider> 
                    <Info>{(result.runtime || result.episode_run_time) && result.runtime ? result.runtime : result.episode_run_time[0]} min</Info>
                    <Divider>•</Divider>
                    <Info>{result.genres && result.genres.map((genre, index) => 
                                                    index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}                                   
                    </Info>
                </InfoContainer>

                <Overview>
                        {result.overview}
                </Overview>
            </Data>
        </Content>
    </Container>)
);


DetailPresenter.propTypes = {
    result : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
}

export default DetailPresenter;