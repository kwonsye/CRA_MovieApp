import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";

const Container = styled.div`
    padding : 20px;
`;

const TVShowPresenter = ({topRated, popular, airingToday, error, loading}) => loading ? <Loader /> :(
    <Container>
        {topRated && topRated.length>0 && 
        <Section title="Top Rated">
            {topRated.map(tv =>
                <Poster key={tv.id} 
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path} 
                year={tv.first_air_date && tv.first_air_date.substring(0,4)} 
                rating={tv.vote_average}
                isMovie = {false}/>)}
        </Section>}
        {popular && popular.length>0 && 
        <Section title="Popular">
            {popular.map(tv =>
                <Poster key={tv.id} 
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path} 
                year={tv.first_air_date && tv.first_air_date.substring(0,4)} 
                rating={tv.vote_average}
                isMovie = {false}/>)}
        </Section>}
        {airingToday && airingToday.length>0 &&
        <Section title="Airing Today">
            {airingToday.map(tv =>
                <Poster key={tv.id} 
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path} 
                year={tv.first_air_date && tv.first_air_date.substring(0,4)} 
                rating={tv.vote_average}
                isMovie = {false}/>)}
        </Section>}
        {error && <Error text={error}/>}
    </Container>
);

TVShowPresenter.propTypes ={
    topRated : PropTypes.array,
    popular : PropTypes.array,
    airingToday : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
}

export default TVShowPresenter;