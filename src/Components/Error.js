import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width : 100vw;
    display : flex;
    justify-content : center;
`;

const ErrorText = styled.span`
    color : red;
    font-weight : 600;
`;

const Error = ({text}) => (
    <Container>
        <ErrorText>{text}</ErrorText>
    </Container>
);

Error.propTypes = {
    text : PropTypes.string.isRequired,
}

export default Error;
