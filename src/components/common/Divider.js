import React, { Children } from 'react';
import styled from 'styled-components';

export default function({mode}){

    const Block = styled.div`

        hr {
            border: 0;
            /* background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)); */
            border-top: 2px dashed #666666;
            margin-block-start : 0;
            margin-block-end : 0;
            background: #eeeeee;
        }

        hr.dark{
            border-top: 2px dashed #eeeeee;
            background: black;
        }

    `

    return (
        <Block>
            <hr className={mode}/>
        </Block>
            
    );
    
}