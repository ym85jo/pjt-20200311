import React, {useState} from 'react';
import styled from 'styled-components';
import Section from './common/Section';

export default function(){

    const [value, setValue] = useState('0');

    const Block = styled.div`
        
        .calculator{
            position : relative;
            display : grid;
        }

        .calculator .value{
            grid-column : span 4;
            height : 60px;
            text-align : right;
            border : none;
            outline : none;
            padding : 10px;
            font-size : 18px;
        }
        
        .calculator span{
            display : grid;
            width : 60px;
            height : 60px;
            color : white;
            background : #0c2835;
            place-items : center;
            border : 1px solid rgba(0, 0, 0, 0.1)
        }


        .calculator span:active{
            background : #74ff3b;
            color : #111;
        }

        .calculator span.clear{
            grid-column : span 2;
            width : 120px;
            background : #ff3077;
        }

        .calculator span.plus{
            grid-row : span 2;
            height : 120px;
        }

        .calculator span.equal{
            background-color : #03b1ff;
        }

    `

    const onClick = (e) => {
        console.log(e.target.innerHTML);
        if(e.target.innerHTML === '='){

            try {
                setValue(eval(value));    
            } catch (e) {
                setValue('Error');
            }

        } else if(e.target.innerHTML === 'c'){
            setValue('');
        } else {
            if(value ==='Error'){
                setValue(e.target.innerHTML);
            } else {
                setValue(value + e.target.innerHTML);
            }
            
        }
        
    }

    return (
        <Block>
            <Section h1='Styled Calculator' h2='React useState 이용한 계산기' mode='dark'>
                <form className="calculator" name="calc">
                    <input className="value" type="text" name="text" value={value} readOnly/>
                    <span className="num clear" onClick={onClick}>c</span>
                    <span className="num" onClick={onClick}>/</span>
                    <span className="num" onClick={onClick}>*</span>

                    <span className="num" onClick={onClick}>7</span>
                    <span className="num" onClick={onClick}>8</span>
                    <span className="num" onClick={onClick}>9</span>
                    <span className="num" onClick={onClick}>-</span>

                    <span className="num" onClick={onClick}>4</span>
                    <span className="num" onClick={onClick}>5</span>
                    <span className="num" onClick={onClick}>6</span>
                    <span className="num plus" onClick={onClick}>+</span>

                    <span className="num" onClick={onClick}>3</span>
                    <span className="num" onClick={onClick}>2</span>
                    <span className="num" onClick={onClick}>1</span>

                    <span className="num" onClick={onClick}>0</span>
                    <span className="num" onClick={onClick}>00</span>
                    <span className="num" onClick={onClick}>.</span>
                    <span className="num equal" onClick={onClick}>=</span>

                </form>

            </Section>
        </Block>
    );
    
}