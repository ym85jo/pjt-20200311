import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

export default function(){

    const Block = styled.div`

        background-color : #202020;

        a {
            text-decoration : none;
        }
         header {
             display : flex;
             justify-content : space-between;
             align-items : center;
             padding : 0 70px;
         }

        .logo {
             cursor: pointer;
            width : 50px;
        }
        .nav-area {
             list-style : none;
        }
        .nav-area li {
             display : inline-block;
             padding : 0 15px;
             text-transform : uppercase;
        }

        .nav-area li a {
            transition : .3s;
            color : white;
            cursor: pointer;
        }

        .nav-area li a:hover {
            color : #d22938
        }

        .btn-area{
            cursor : pointer;
            color : #fff;
            padding : 2px 10px;
        }

        .btn-area i{
            transition : .3s;
        }
        .btn-area i:hover {
            color : #d22938
        }
    `
    return (
        <Block>
            <header>
                <img src="/imgs/code.png" className="logo"/>
                <nav>
                    <ul className="nav-area">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/study">Study</Link></li>
                    </ul>
                </nav>
                <div>
                    <a href="mailto:ehli@nate.com" className="btn-area">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a onClick={() => {window.open('https://www.youtube.com/channel/UCkxIFgjrCKcN8wL-Y_R3hjA')}} className="btn-area">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                
            </header>
        </Block>
    )

}