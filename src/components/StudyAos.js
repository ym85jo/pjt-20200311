import React, {useState} from 'react';
import styled from 'styled-components';
import Section from './common/Section';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function(){

    const Block = styled.div`

        & div section div div{
            text-align : center;
            width : 460px;
            border : 1px solid gray;
            margin : 20px;
            padding : 20px;
        }

    `

    useState(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100
        });
    });


    return (
        <Block>
            <Section h1='AOS' h2='Animate elements on your page as you scroll' mode=''>
                <div data-aos="fade-up">
                    <h2 data-aos="fade-up">What is Lorem Ipsum?</h2>
                    <p data-aos="fade-up">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                
                <div data-aos="fade-up">
                    <h2 data-aos="fade-up">Why do we use it?</h2>
                    <p data-aos="fade-up">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>

                <div data-aos="fade-up">
                    <h2 data-aos="fade-up">Where does it come from?</h2>
                    <p data-aos="fade-up">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </Section>
        </Block>
    );
    
}