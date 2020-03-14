import React from 'react';
import styled from 'styled-components';
import StudyButton from '../components/StudyButton';
import StudyFlexBox from '../components/StudyFlexBox';
import Divider from '../components/common/Divider';
import StudyCalc from '../components/StudyCalc';

export default function(){

    const Block = styled.div`
        
    `

    return (
        <Block>
            
            <StudyCalc/>
            
            <Divider mode='dark'/>
            
            <StudyButton/>

        </Block>
    );
    
}