import React from 'react';
import styled from 'styled-components';
import Section from './common/Section';

function Card({color}){

    const Block = styled.div`

        & {
            display : flex;
            align-items : center;
            flex-direction : column;
            border-radius : 10px;
        }

        & h1,h2 {
            margin : 10px 0px;
        }

        div.aBtn {
            width : 80%;
            background-color : #bedf36;
            cursor: pointer;
            margin : 10px 0px;
            padding : 10px 0;
            border-radius : 14px;
        }

        &:hover {
            transition : 0.5s;
            background-color : #dddddd;
        }

    `;


    return (
        <Block className="card">
            <h2>Basic</h2>
            <h1 style={{fontSize : '40px', color:'black'}}>$19.99</h1>
            <h2>50G Storage</h2>
            <h2>2Users</h2>
            <h2>Good!</h2>
            <div className="aBtn" onClick={()=>{alert('Hello')}}>Sign UP</div>
        </Block>
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
            color : #666666;
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
                        <h1 style={{color : '#4ba69a'}}>Our Pricing</h1>
                        <h2>마우스 오버 효과</h2>
                        <p>
                            CSS :hover 이용하여 마우스 오버했을때 CSS 변경
                        </p>
                    </div>
                    
                </div>

                <div className="cardDivs">
                    <div className="cardDiv">
                        <Card color="#120136"/>
                    </div>
                    <div className="cardDiv">
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