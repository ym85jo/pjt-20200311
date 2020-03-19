import React from 'react';
import styled from 'styled-components';

export default function(){

    const Block = styled.div`

        height : 80px;
        display : flex;
        align-items : center;
        justify-content : center;
        color : #222;
        background-color : #eee;
    `

    return (
        <Block>
            Copyright 2020. Jo Yeongmin. all rights reserved.
        </Block>
    );
    
}