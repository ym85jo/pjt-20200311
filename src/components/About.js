import React from 'react';
import styled from 'styled-components';

export default function(){

    const Block = styled.div`
        
        background-color : rgba(25, 25, 25, 0.9);
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

    `

    return (
        <Block>
            <h1>About</h1>
            <p>
                조영민입니다. 열심히 하겠습니다.
            </p>
        </Block>
    );
    
}