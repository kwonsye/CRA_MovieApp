import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding : 0px 20px;
`;

const HomePresenter = ({nowPlaying , upcoming, popular, error, loading}) => loading ? <Loader /> : (
    <Container>
        {nowPlaying && nowPlaying.length>0 && 
        <Section title="Now Playing">
            {nowPlaying.map(movie=> <span>{movie.title}</span>)}
        </Section>}

        {upcoming && upcoming.length>0 && 
        <Section title="Upcoming">
            {upcoming.map(movie => <span>{movie.title}</span>)}
        </Section>}

        {popular && popular.length &&
        <Section title="Popular">
            {popular.map(movie => <span>{movie.title}</span>)}
        </Section>}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying : PropTypes.array,
    upcoming : PropTypes.array,
    popular : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
}
export default HomePresenter;