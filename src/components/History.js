import React from 'react';
import styled from 'styled-components';

export default function(){

    const Block = styled.div`
        
        background-color : #252525;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        color : white;

        & > div{
            padding : 60px 0;
            width : 100%;
            display : flex;
            flex-direction : column;
            align-items : center;
        }

        h1{
            margin:0;
            padding:0;
            text-align : center;
        }

        p {
            padding : 20px;
            margin : auto;
            width : 500px;
            font-size : 18px;
        }

    `

    return (
        <Block>
            <div style={{backgroundColor : '#005baa'}}>
                <img src="imgs/miracom.png" width="300px"/>
                <h1>미라콤 아이엔씨</h1>
                <p>
                    <b>2020.02 ~ 현재</b>
                    <br/>삼성전자 PLMhme 의료기기 인허가 관리 시스템 개발 및 운영
                </p>
            </div>

            <div style={{backgroundColor : '#fff', color : '#555555'}}>
            <img src="imgs/osstem.png" width="300px"/>
                <h1>오스템 임플란트</h1>
                <p>
                    <b>2020.02 ~ 2020.01</b>
                    <br/>삼성전자 PLMhme 의료 인허가 관리 시스템 개발 및 운영
                </p>
            </div>

            <div>
                <img src="imgs/medialog.png" width="300px"/>
                <h1>미디어로그</h1>
                <p>
                    <b>2020.02 ~ 2020.01</b>
                    <br/>삼성전자 PLMhme 의료기기 인허가 관리 시스템 개
                    <br/>삼성전자 PLMhme 의료기기 인허가 
                </p>
            </div>

            <div style={{backgroundColor:'#F7A119'}}>
                <h1>커머스아이</h1>
                <p>
                    <b>2020.02 ~ 2020.01</b>
                    <br/>삼성전자 PLMhme 의료기기 인허가 관리 시스템 개발 및 운영 관리 시스템 개발 및 
                    <br/>삼성전자 PLMhme 의료기기 인허가 관
                    <br/>삼성전자 PLMhme 의료기기 인허가 관리 시스템 개발 및 운영
                </p>
            </div>
            
        </Block>
    );
    
}