import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";
import Helmet from "react-helmet"; //페이지의 header를 바꿀 수 있다.

const Container = styled.div`
    padding : 20px;
`;

const HomePresenter = ({nowPlaying , upcoming, popular, error, loading}) => (
    <>
    <Helmet>
        <title>Happy Movie!</title>
    </Helmet>
        {loading ? <Loader /> : (
    <Container>
        {nowPlaying && nowPlaying.length>0 && 
        <Section title="Now Playing">
            {nowPlaying.map(movie=> 
                <Poster key={movie.id} 
                        id={movie.id}
                        title={movie.title}
                        imageUrl={movie.poster_path} 
                        year={movie.release_date && movie.release_date.substring(0,4)} 
                        rating={movie.vote_average}
                        isMovie = {true}/>)}
        </Section>}

        {upcoming && upcoming.length>0 && 
        <Section title="Upcoming">
            {upcoming.map(movie =>
                <Poster key={movie.id} 
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path} 
                year={movie.release_date && movie.release_date.substring(0,4)} 
                rating={movie.vote_average}
                isMovie = {true}/>)}
        </Section>}

        {popular && popular.length &&
        <Section title="Popular">
            {popular.map(movie =>
                <Poster key={movie.id} 
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path} 
                year={movie.release_date && movie.release_date.substring(0,4)} 
                rating={movie.vote_average}
                isMovie = {true}/>)}
        </Section>}

        {error && <Error text={error}/>}
    </Container>
    )}
    </>
);


HomePresenter.propTypes = {
    nowPlaying : PropTypes.array,
    upcoming : PropTypes.array,
    popular : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
}
export default HomePresenter;