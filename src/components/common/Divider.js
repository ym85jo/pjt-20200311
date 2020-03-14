import React, { Children } from 'react';
import styled from 'styled-components';

export default function({mode}){

    const Block = styled.div`

        hr {
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
        }

        hr.dark{
            border-top: 1px dashed white;
            background: black;
            margin-block-start : 0;
            margin-block-end : 0;
        }

    `

    return (
        <Block>
            <hr className={mode}/>
        </Block>
            
    );
    
}