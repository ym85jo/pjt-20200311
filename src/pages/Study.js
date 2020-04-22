import React from 'react';
import styled from 'styled-components';
import StudyButton from '../components/StudyButton';
import StudyFlexBox from '../components/StudyFlexBox';
import Divider from '../components/common/Divider';
import StudyCalc from '../components/StudyCalc';
import StudyMap from '../components/StudyMap';
import StudySlider from '../components/StudySlider';
import StudyTable from '../components/StudyTable';
import StudyAos from '../components/StudyAos';
import StudyFe1 from '../components/StudyFe1';

export default function(){

    const Block = styled.div`
        
    `;

    return (
        <Block>
            
            <StudyFe1/>

            <Divider mode=''/>

            <StudyTable/>

            <Divider mode=''/>

            <StudyAos/>

            <Divider mode=''/>

            <StudySlider/>

            <Divider mode=''/>

            <StudyMap/>

            <StudyCalc/>
            
            <Divider mode='dark'/>
            
            <StudyButton/>

        </Block>
    );
    
}