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
            font-size : 28px;
        }

        p {
            padding : 20px;
            margin : auto;
            width : 500px;
            font-size : 18px;
            padding-bottom : 10px;
        }

    `

    return (
        <Block>
            <div style={{backgroundColor : '#005baa'}}>
                <img src="imgs/miracom.png" width="200px"/>
                <h1>미라콤 아이엔씨</h1>
                <p>
                    <b>2018.01 ~ 현재</b>
                    <br/>삼성전자 PLMhme 의료기기 인허가 관리 시스템
                </p>
            </div>

            <div style={{backgroundColor : '#fff', color : '#555555'}}>
            <img src="imgs/osstem.png" width="200px"/>
                <h1>오스템 임플란트</h1>
                <p>
                    <b>2017.01 ~ 2017.07</b>
                    <br/>오스템 임플란트 업무 관리 시스템
                </p>
            </div>

            <div>
                <img src="imgs/medialog.png" width="200px"/>
                <h1>미디어로그</h1>
                <p>
                    <b>2015.06 ~ 2016.10</b>
                    <br/>LGU+ 전자결제 청약/관리자 시스템
                    <br/>LGU+ 전자결제 고객 홈페이지
                    <br/>LGU+ 전자결제 업무지원 시스템
                </p>
            </div>

            <div style={{backgroundColor:'#F7A119'}}>
                <h1>커머스아이</h1>
                <p>
                    <b>2011.04 ~ 2015.06</b>
                    <br/>삼성전자 PLM 2차 고도화
                    <br/>삼성전자 PLMc 구축
                    <br/>삼성전자 무선사 구매 시스템 고도화
                    <br/>삼성전자 무선사 기술소싱 프로세스 개선
                    <br/>삼성전자 무선사 요구사항관리 시스템 개발
                </p>
            </div>
            
        </Block>
    );
    
}