import React from 'react';
import styled from 'styled-components';
import Section from './common/Section';

export default function(){

    const Block = styled.div`

        a {
            position : relative;
            padding : 10px 10px;
            text-decoration : none;
            color : #fff;
            font-size : 2em;
            text-transform : uppercase;
            letter-spacing : 4px;
            overflow : hidden;
            background : rgba(255, 255, 255, 0.1);
            box-shadow : 0 5px 5px rgba(0, 0, 0, 0.2)
        }

        a:before{
            content : '';
            position : absolute ;
            top : 0;
            left : 0;
            width : 50%;
            height : 100%;
            background : rgba(255, 255, 255, 0.1);
        }

        a:after {
            content : '';
            position : absolute ;
            top : 0;
            left : -100%;
            width : 100%;
            height : 100%;
            background : linear-gradient( 90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            transition : 0.5s;
            transition-delay : 0.5s;
        }

        a:hover:after{
            left : 100%;
        }

        a span {
            position : absolute;
            display : block;
            transition : 0.5s ease;
        }

        a span:nth-child(1) {
            top : 0;
            left : 0;
            width : 0;
            height : 1px;
            background : #fff;
        }

        a:hover span:nth-child(1){
            width : 100%;
            transform : translateX(100%);
        }


        a span:nth-child(3) {
            bottom : 0;
            right : 0;
            width : 0;
            height : 1px;
            background : #fff;
        }

        a:hover span:nth-child(3){
            width : 100%;
            transform : translateX(-100%);
        }

        a span:nth-child(2) {
            top : 0;
            left : 0;
            width : 1px;
            height : 0px;
            background : #fff;
        }

        a:hover span:nth-child(2){
            height : 100%;
            transform : translateY(100%);
        }


        a span:nth-child(4) {
            bottom : 0;
            right : 0;
            width : 1px;
            height : 0px;
            background : #fff;
        }

        a:hover span:nth-child(4){
            height : 100%;
            transform : translateY(-100%);
        }
    `
    // https://www.youtube.com/watch?v=uNjfslp6Qnc

    return (
        <Block>
            <Section h1='Styled Button' h2='CSS transform 기능을 사용한 버튼 마우스 오버 효과' mode='dark'>
                <a href="#" onClick={() => {alert('Hello.')}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Button
                </a>
            </Section>
        </Block>
    );
    
}