import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
//포스터를 그리는 컴포넌트

const Container = styled.div`
    font-size : 12px;
`;

//height를 꼭 줘야 사진이 나온다.
const Image = styled.div`
    background-image : url(${props => props.bgUrl});
    background-size : cover;
    height : 180px;
    transition : opacity 0.2s linear;
    background-position : center;
    border-radius : 4px;
`;


const Rating = styled.span`
    position : absolute;
    bottom : 3px;
    right : 2px;
    opacity : 0;
    transition : opacity 0.1s linear;
`;
//& : hover 이렇게 중간에 한 칸씩 띄어쓰면 적용이 안된다.
const ImageContainer = styled.div`
    &:hover {
        ${Image} {
            opacity : 0.3;
        }
        ${Rating} {
            opacity : 1;
        }
    }
    margin-bottom : 5px;
    position : relative;
`;
// display : block <span/>속성을 블록 속성으로 바꿀 수 있다.
const Title = styled.span`
    display : block;
    margin-bottom : 2px;
`;

const Year = styled.span`
    color: rgba(255, 255, 255, 0.5);
    font-size : 10px;
`;


const Poster = ({id, imageUrl, title, year, rating, isMovie}) => (
    <Link to={isMovie ? `/movie/${id}` : `/tvshow/${id}` }>
    <Container>
        <ImageContainer>
            <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/bread.JPG")}></Image>
            <Rating>
            <span role="img" aria-label="rating">
            ⭐️
            </span>{" "}
            {rating}/10
            </Rating>
        </ImageContainer>

        <Title>{title.length>18 ? `${title.substring(0,18)}...` : title}</Title>
        <Year>{year}</Year>
    </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
  };

export default Poster;