import * as React from 'react';

import styled, { css } from 'styled-components';

const defaultFonts = css`
    font-family:
        "HelveticaNeue-CondensedBold",
        "HelveticaNeueBoldCondensed",
        "HelveticaNeue-Bold-Condensed",
        "Helvetica Neue Bold Condensed",
        "HelveticaNeueBold",
        "HelveticaNeue-Bold",
        "Helvetica Neue Bold",
        "HelveticaNeue",
        "Helvetica Neue",
        'TeXGyreHerosCnBold',
        "Helvetica",
        "Tahoma",
        "Geneva",
        "Arial Narrow",
        "Arial",
        sans-serif;
    font-stretch: condensed;
    color: #fff;
`;

const StyledContainer = styled.div`
    height: 100vh;
    min-height: 400px;
    background-color: #232323;
    padding: 20px;
    box-sizing: border-box;
`;

const StyledTitle = styled.div`
    ${defaultFonts};
    font-size: 60px;
`;

const StyledSubTitle = styled.div`
    ${defaultFonts};
    font-size: 25px;
    margin-top: 30px;
`;

const StyledSubSubTitle = styled.div`
    ${defaultFonts};
    font-size: 16px;
    margin-top: 30px;
`;

const App: React.FunctionComponent = () => (
    <StyledContainer>
        <StyledTitle>
            Humanity
            <br />
            Against
            <br />
            Covid-19
        </StyledTitle>

        <StyledSubTitle>
            A quarantine party game
            <br />
            for horrible people.
        </StyledSubTitle>

        <StyledSubSubTitle>
            Coming soon.
        </StyledSubSubTitle>
    </StyledContainer>
);

export default App;
