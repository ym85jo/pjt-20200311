import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Section from "./common/Section";
import Axios from 'axios';

const { kakao } = window;

export default function () {
    const Block = styled.div`
  
  `;

    
    useEffect( async () => {

        const response = await Axios.get('https://openapi.gg.go.kr/RegionMnyFacltStus?Type=json&KEY=5e0ea99f87484b4abdd0740cb3a3097d&SIGUN_NM=광명시')
        console.log(response.data)
        const rows = response.data.RegionMnyFacltStus[1].row

        if (kakao) {
            kakao.maps.load(() => {
                const el = document.getElementById("map");
                const map = new kakao.maps.Map(el, {
                    center: new kakao.maps.LatLng(37.452703, 126.888344),
                    level: 5
                });

                var positions = [];
                rows.map(row => {
                    positions.push({
                        title : row.CMPNM_NM
                        , latlng: new kakao.maps.LatLng(row.REFINE_WGS84_LAT, row.REFINE_WGS84_LOGT)
                    })
                })                

                // 마커 이미지의 이미지 주소입니다
                var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                for (var i = 0; i < positions.length; i++) {
                    // 마커 이미지의 이미지 크기 입니다
                    var imageSize = new kakao.maps.Size(24, 35);

                    // 마커 이미지를 생성합니다
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: positions[i].latlng, // 마커를 표시할 위치
                        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        image: markerImage // 마커 이미지
                    });
                }
            });
        }
    }, []);

    return (
        <Block>
            <Section h1="Map API" h2="광명시 지역화폐 사용처" mode="">
                <div id={`map`} style={{ width: "1000px", height: "600px" }} />
            </Section>
        </Block>
    );
}
