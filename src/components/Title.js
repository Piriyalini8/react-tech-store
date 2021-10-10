import React from 'react'
import styled from 'styled-components'

export default function Title({title,center}) {
    return (
        <TitleWrapper className="row" center1={center}>
            <div className="col">
                <h2 className="text-title">{title}</h2>
                <div className="title-underline"/>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
text-align: ${props => (props.center1 ? "center" : "left")};
.title-underline{
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${props => (props.center1 ? "0 auto" : "0")};
}
`;