import React, {Fragment} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Error from "Components/Error";
import NotFound from "Components/NotFound";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding : 20px;

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
//확장 : 전에 검색했던 제목을 저장해놓는 pastTitle 만들기 -> 완료!
const SearchPresenter = ({movieResults, tvResults, loading, error, searchTitle, handleSubmit, updateTitle, pastTitle}) => (
    
    <>
    <Helmet>
        <title>Search Anything</title>
    </Helmet>
    
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TVShows..." value={searchTitle} onChange={updateTitle}></Input>
        </Form>
        {loading ? <Loader /> : (
            <Fragment>
            {movieResults && movieResults.length>0 && 
                <Section title="Movie Results">
                    {movieResults.map(movie =>
                         <Poster key={movie.id} 
                         id={movie.id}
                         title={movie.title}
                         imageUrl={movie.poster_path} 
                         year={movie.release_date && movie.release_date.substring(0,4)} 
                         rating={movie.vote_average}
                         isMovie = {true}/>)}
                </Section>}
            {tvResults && tvResults.length>0 &&
                <Section title="TV Show Results">
                    {tvResults.map(tv =>
                        <Poster key={tv.id} 
                        id={tv.id}
                        title={tv.original_name}
                        imageUrl={tv.poster_path} 
                        year={tv.first_air_date && tv.first_air_date.substring(0,4)} 
                        rating={tv.vote_average}
                        isMovie = {false}/>)}
                </Section>}   
            {error && <Error text={error}/>} 
            {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && 
                <NotFound text={`Nothing found for ${pastTitle}`}/>}
            </Fragment>
        )}
    </Container>
    </>
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