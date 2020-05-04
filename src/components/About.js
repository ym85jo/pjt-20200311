import React from 'react';
import styled from 'styled-components';

export default function(){

    const Block = styled.div`
        
        background-color : #252525;
        height : calc(100vh - 56px);
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        color : white;

        h1{
            margin:0;
            padding:0;
        }

        p {
            padding : 0 30px;
        }

    `;

    return (
        <Block>
            <h1>About</h1>
            <p>
                Hello. my name is ..
            </p>
        </Block>
    );
}