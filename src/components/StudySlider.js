import React from 'react';
import styled from 'styled-components';
import Section from './common/Section';

export default function(){

    const Block = styled.div`

        .sectionSlider{
            position : relative;
        }
        
    `;

    return (
        <Block>
            <Section className="sectionSlider" h1='Video Slider' h2='동영상 슬라이더' mode='dark'>
                <video id="slider" autoPlay loop>
                    <source src="videos/1.mp4" type="video/mp4"/>
                </video>
            </Section>
        </Block>
    );
    
}