import React, { Children } from 'react';
import styled from 'styled-components';

export default function({mode, h1, h2, children}){

    const Block = styled.div`
        
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        width : 100%;

        section {

            width : 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            
            display : flex;
            flex-direction : column;
            align-items : center;
            justify-content : center;
            
            background-color : #cccccc;

        }

        section.dark{
            background-color : #222222;
            color : #ffffff;
            background-color : #262626;
        }

        h1 {
            font-size : 30px;
        }

        h2{
            font-size : 20px;
        }

        p {
            
        }

        & > section > div {
            margin : 40px;
            display : flex;
        }
        
        
    `

    return (
        <Block>
            
            <section className={mode}>
            
                <h1>{h1}</h1>
                <h2>{h2}</h2>
                
                <div>
                    {children}
                </div>

            </section>
        </Block>
    );
    
}