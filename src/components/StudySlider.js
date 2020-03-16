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
        
        h1 {
            font-size : 30px;
        }

        h2{
            font-size : 20px;
        }

        & .cont{
            position : relative;
            width : 100%;
            height : calc(100vh + 200px);
        }

        & .cont video{
            position : absolute;
            top : 0;
            left : 0;
            width : 100%;
            object-fit : cover;
        }

        .navigation {
            position:absolute;
            bottom : 60px;
            left : 50%;
            transform : translateX(-50%);
            z-index : 2;
            display : flex;
            justify-content : center;
            align-items : center;
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
            opacity : 0.7;
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
            <h1>Video Slider</h1>
            <h2>전체 화면 동영상 슬라이더</h2>
            <div className="cont">
                <video id="slider" autoPlay loop>
                    <source src={src} type="video/mp4"/>
                </video>
                <ul className="navigation">
                    <li onClick={() => onClick('1')}><img src="imgs/1.jpg"/></li>
                    <li onClick={() => onClick('2')}><img src="imgs/2.jpg"/></li>
                    <li onClick={() => onClick('3')}><img src="imgs/3.jpg"/></li>
                    <li onClick={() => onClick('4')}><img src="imgs/4.jpg"/></li>
                </ul>
            </div>
            
        </Block>
    );
    
}