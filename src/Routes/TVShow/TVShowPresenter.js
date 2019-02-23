import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding : 0px 20px;
`;

const TVShowPresenter = ({topRated, popular, airingToday, error, loading}) => loading ? <Loader /> :(
    <Container>
        {topRated && topRated.length>0 && 
        <Section title="Top Rated">
            {topRated.map(tv => <span>{tv.name}</span>)}
        </Section>}
        {popular && popular.length>0 && 
        <Section title="Popular">
            {popular.map(tv => <span>{tv.name}</span>)}
        </Section>}
        {airingToday && airingToday.length>0 &&
        <Section title="Airing Today">
            {airingToday.map(tv => <span>{tv.name}</span>)}
        </Section>}
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