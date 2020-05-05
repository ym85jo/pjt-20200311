import React from 'react';
import styled from 'styled-components';

export default function(){

    const Block = styled.div`
        
        background-color : #252525;
        height : calc(100vh - 56px);
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        color : white;

        p {
            font-family : 'Anonymous Pro', monospace;
            border-right : 2px solid rgba(255, 255, 255, 0.75);
            width : 16em;
            font-size : 200%;
            transform : translateY(-50%);
            overflow : hidden;
            white-space : nowrap;
        }

        p {
            animation : typewriter 4s steps(40) 1s 1 normal both
            , blinkTextCursor 500ms steps(40) infinite normal;
        }

        @keyframes typewriter {
            from {
                width : 0;
            }

            to {
                width : 16em;
            }
        }

        @keyframes blinkTextCursor {
            from {
                border-right-color : rgba(255, 255, 255, 0.75);
            }
            to {
                border-right-color : transparent;
            }
        }

    `

    return (
        <Block>
            <p>
                Web Developer JO YEONG MIN();
            </p>
        </Block>
    );
}