import React, {Fragment} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div`
    padding : 0px 20px;

`;

const Form = styled.form`
    margin-bottom : 50px;
    width : 100%;
`;

const Input = styled.input`
    all : unset;
    font-size : 28px;
    width : 100%;
`;

const SearchPresenter = ({movieResults, tvResults, loading, error, searchTitle, handleSubmit, updateTitle}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TVShows..." value={searchTitle} onChange={updateTitle}></Input>
        </Form>
        {loading ? <Loader /> : (
            <Fragment>
            {movieResults && movieResults.length>0 && 
                <Section title="Movie Results">
                    {movieResults.map(movie => <span key={movie.id}>{movie.title}</span>)}
                </Section>}
            {tvResults && tvResults.length>0 &&
                <Section title="TV Show Results">
                    {tvResults.map(tv => <span key={tv.id}>{tv.name}</span>)}
                </Section>}    
            </Fragment>
        )}
        
    </Container>
);

SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string,
    searchTitle : PropTypes.string, 
    handleSubmit : PropTypes.func.isRequired,
    updateTitle : PropTypes.func.isRequired,
}

export default SearchPresenter;