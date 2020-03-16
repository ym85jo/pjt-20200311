import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Section from './common/Section';

const {kakao} = window;

export default function(){

    const Block = styled.div`
        
    `

    const mapContainer = useRef();
    useEffect(() => {
        kakao.maps.load(() => {
            
            const el = document.getElementById('map');
            const map = new kakao.maps.Map(el, {
                center: new kakao.maps.LatLng(37.253797, 127.047349)
                , level : 4
            })

            var positions = [
                {
                    title: '작업장', 
                    latlng: new kakao.maps.LatLng(37.251385, 127.044258)
                },
                {
                    title: '지하철 탑승', 
                    latlng: new kakao.maps.LatLng(37.251978, 127.041534)
                },

                {
                    title: '버스 탑승', 
                    latlng: new kakao.maps.LatLng(37.256093, 127.048178)
                },

                


            ];
            
            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
                
            for (var i = 0; i < positions.length; i ++) {
                
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35); 
                
                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage // 마커 이미지 
                });
            }

        })

    }, []);

    return (
        <Block>
            <Section h1='Map API' h2='카카오 지도 API 활용 좌표 출력' mode=''>
                <div id={`map`} style={{width : '1000px', height:'600px'}}></div>
            </Section>
        </Block>
    );
    
}