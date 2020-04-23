import React from 'react';
import styled from 'styled-components';
import Section from './common/Section';

function Card({color}){
    return (
        <div className="card" style={{borderTop : `3px solid ${color}`}}>
            <h1>카드 제목</h1>
            <p>
                내용 블라블라블라
                <br/>내용 블라블라블라
            </p>
            <div style={{textAlign:'right'}}>
                <img src="imgs/search.png" width="80px"/>
            </div>
        </div>
    )
}

export default function(){

    const Block = styled.div`
        &>div>section>div{
            width : 70%;
            box-shadow : 3px 3px 4px #999;
            background-color : white;
            text-align : center;
        }

        .cardDivs {
            display : flex;
            width : 80%;
            color : #999999;
            justify-content: space-between;
            margin-bottom : 20px;
        }
        .cardDiv {
            width : 30%;
            display : flex;
            justify-content : center;
            align-items : center;
            flex-direction : column;
            
        }
        .card{
            width : 100%;
            height : 250px;
            margin : 10px;
            border : 1px solid #eeeeee;
            box-shadow : 3px 3px 4px #999;
        }
        
    `

    return (
        <Block>
            <Section h1='2. Four card feature section' h2='CSS Flex' mode=''>
                <div>
                    <div style={{margin:'30px'}}>
                        <h1 style={{color : '#4ba69a'}}>CSS Flex를 이용하여 카드 배치</h1>
                        <h2>부제목</h2>
                        <p>
                            내용 블라블라블라
                            <br/>내용 블라블라블라
                        </p>
                    </div>
                    
                </div>

                <div className="cardDivs">
                    <div className="cardDiv">
                        <Card color="#120136"/>
                    </div>
                    <div className="cardDiv">
                        <Card color="#035aa6"/>
                        <Card color="#40bad5"/>
                    </div>
                    <div className="cardDiv">
                        <Card color="#fcbf1e"/>
                    </div>
                </div>

                
            </Section>
        </Block>
    );
    
}