import React from 'react';
import styled from 'styled-components';
import Section from './common/Section';

export default function(){

    const Block = styled.div`
        &>div>section>div{
            width : 50%;
            box-shadow : 3px 3px 4px #999;
        }

        .one {
            width : 100%;
            background-color : white;
        }
        .divide{
            display : flex;
            width : 100%;
            color : #999999;
        }
        .divide div.aBtn {
            width : 100%;
            background-color : #bedf36;
            text-align : center;
            padding : 10px;
            cursor: pointer;
        }
    `

    return (
        <Block>
            <Section h1='1. Single price grid component' h2='https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc' mode=''>
                <div className="one">
                    <div style={{margin:'50px'}}>
                        <h1 style={{color : '#4ba69a'}}>여기는 제목 영역입니다.</h1>
                        <h2>CSS 기초</h2>
                        <p>
                            영역 분할 연습
                            <br/>CSS 기초 블라블라 내용내용
                        </p>
                    </div>
                    
                </div>

                <div className="divide">
                    <div style={{background : '#46bbb9', width : '50%'}}>
                        <div style={{margin : '50px', color : 'white'}}>
                            <h1>분할된 1번째 영역</h1>
                            <h3>내용 블라블라블라</h3>
                            <div className="aBtn" onClick={()=>{alert('Hello')}}>Sign UP</div>
                        </div>
                    </div>
                    <div style={{background : '#bedf36', width : '50%'}}>
                        <div style={{margin : '50px'}}>
                            <h1>분할된 2번째 영역</h1>
                            <h3>내용 블라블라블라</h3>
                        </div>
                    </div>
                </div>

                
            </Section>
        </Block>
    );
    
}