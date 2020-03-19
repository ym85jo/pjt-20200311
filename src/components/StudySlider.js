import React, { useState } from 'react';
import styled from 'styled-components';
import Section from './common/Section';

export default function(){

    const Block = styled.div`
        
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        background-color : #cccccc;

        video {
            width : 90%;
        }

        &>div>section>div{
            position:relative;
            width : 100%;
            display : flex;
            flex-direction : column;
            align-items : center;
            justify-content : center;
        }

        .navigation {
            position : absolute;
            bottom : 30px;
            z-index : 2;
            display : flex;
            justify-content : center;
            align-items : center;
            padding : 0;
        }

        .navigation li{
            list-style : none;
            cursor: pointer;
            margin : 0 10px;
            padding : 3px 3px 0;
            opacity : 0.7;
            transition : 0.5s;
        }

        .navigation li:hover{
            opacity : 1;
        }

        .navigation li img{
            width : 80px;
            transition : 0.5s;
            border-radius : 4px;
            border : 1px solid gray;
        }

        .navigation li img:hover{
            width : 120px;
            transition : 0.5s;
        }

    `;

    const [src, setSrc] = useState('videos/1.mp4');
    
    const onClick = (a) => {
        if(a === '1'){
            setSrc('videos/1.mp4')
        } else if(a === '2'){
            setSrc('videos/2.mp4')
        } else if(a === '3'){
            setSrc('videos/3.mp4')
        } else if(a === '4'){
            setSrc('videos/4.mp4')
        }
    }

    return (
        <Block>
            <Section h1="Video Slider" h2="CSS, Javascript를 사용한 동영상 슬라이더">
                <video id="slider" autoPlay loop muted>
                    <source src={src} type="video/mp4"/>
                </video>
                <ul className="navigation">
                    <li onClick={() => onClick('1')}><img src="imgs/1.jpg" alt="1"/></li>
                    <li onClick={() => onClick('2')}><img src="imgs/2.jpg" alt="2"/></li>
                    <li onClick={() => onClick('3')}><img src="imgs/3.jpg" alt="3"/></li>
                    <li onClick={() => onClick('4')}><img src="imgs/4.jpg" alt="4"/></li>
                </ul>
            </Section>
                
            
        </Block>
    );
    
}