import React from 'react';
import styled from 'styled-components';
import Section from './common/Section';


export default function(){

    const Block = styled.div`
        
    `

    return (
        <Block>
            <Section h1='Styled Clock' h2='CSS, Javascript 이용한 시계' mode='dark'>
                시계 ing..
                코드 센드박스 테스트 
                다시 테스트
            </Section>
        </Block>
    );
    
}