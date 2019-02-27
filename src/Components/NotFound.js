import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width : 100vw;
    display : flex;
    justify-content : center;
`;

const NotFoundText = styled.span`
    font-weight : 600;
    color : yellow;
`;

const NotFound = ({text}) => (
    <Container>
        <NotFoundText>{text}</NotFoundText>
    </Container>
);

NotFound.propTypes = {
    text : PropTypes.string.isRequired,
}

export default NotFound;