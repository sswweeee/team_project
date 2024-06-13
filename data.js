let value1_1 = [0,0,0];
let value1_2 = [1,0,0];
let value1_3 = [0,1,0];
let value1_4 = [0,0,1];
let value2 = [0];

function result_1 (result_value) {
    if (result_value.toString() == value1_1.toString() ){
        return 'e';
    }
    else if (result_value.toString() == value1_2.toString()){
        return 'e';
    }
    else if (result_value.toString() == value1_3.toString()){
        return 'e';
    }
    else if (result_value.toString() == value1_4.toString()){
        return 'e';
    }
    else{
        return 'i';
    }

}

function result_2 (result_value2) {
    if (result_value2.toString() == value1_1.toString() ){
        return 'j';
    }
    else if (result_value2.toString() == value1_2.toString()){
        return 'j';
    }
    else if (result_value2.toString() == value1_3.toString()){
        return 'j';
    }
    else if (result_value2.toString() == value1_4.toString()){
        return 'j';
    }
    else{
        return 'p';
    }
}

function result_3 (result_value3) {
    if (result_value3.toString() == value1_1.toString() ){
        return 't';
    }
    else if (result_value3.toString() == value1_2.toString()){
        return 't';
    }
    else if (result_value3.toString() == value1_3.toString()){
        return 't';
    }
    else if (result_value3.toString() == value1_4.toString()){
        return 't';
    }
    else{
        return 'f';
    }
}

function result_4 (result_value4) {
    if (result_value4.toString() == value2.toString() ){
        return 'n';
    }
    else {
        return 's';
    }
}

function setResult() {
    var point1 = result_1(result_value);
    var point2 = result_2(result_value2);
    var point3 = result_3(result_value3);
    var point4 = result_4(result_value4);
    var all_point = point1 + point4 + point3 + point2;
    return all_point;
}

function product() {
    let mbti = setResult();

        if (mbti === 'enfp') {
        const data1 = ['이탈리아 - enfp',
            '이 나라는 사람들이 매우 쾌활하고 정열적인 나라입니다! 모든 사람들이 열성적으로 반응해주는 이 곳으로 떠나보시지 않으시겠어요?',
            '로마'];
            return data1;
        }
        else if (mbti === 'istj') {
            const data2 = ['일본 - istj',
                '이 나라는 사람들이 배려심도 많으면서 개인적인 생활을 중시하는 것을 중요하게 생각합니다. 현실적이면서 이성적인 당신에게 어울릴 것 같은데요?'
                ,'도쿄'
            ]
            return data2;
        }

        else if (mbti === 'entp') {
            const data3 = ['미국 - entp',
                '이 나라는 사람들이 다양하면서 자유로운 것 자체가 상징이며 대부분이 자신의 삶을 즐기고 향유하죠. 자기애가 강하며 자유로운 당신에게 이 나라를 추천합니다!',
                '워싱턴'
            ]
            return data3;
        }

        else if (mbti === 'intj') {
            const data4 = ['영국 - intj',
                '이 나라는 사람들이 단호하면서 계획적이고 그들만의 고집이 매우 강하면서 고상해보이는 느낌이 강하죠. 똑똑하면서 영리한 당신에게 어울릴 듯 한데요?',
                '런던'
            ]
            return data4;
        }

        else if (mbti === 'intp') {
            const data5 = ['중국 - intp',
                '이 나라는 사람들이 홀로 서는걸 좋아하며, 꽤나 논리적으로 말하는 것을 선호합니다! 또한 교육쪽에서도 매우 열정적인 것을 알 수 있죠. 이런 부분에서 당신과 잘 맞을 듯 한데요? ',
                '베이징'
            ]
            return data5;
        }

        else if (mbti === 'entj') {
            const data6 = ['러시아 - entj',
                '단호하고 칼같은 성격의 사람들이 많은 러시아! 내면은 다르겠지만 항상 계획적이며 아주 철두철미하게 행동하는 것을 알 수 있죠. 이런 나라에서의 공통점이 많은 당신에게 추천합니다!',
                '모스크바'
            ]
            return data6;
        }

        else if (mbti === 'infj') {
            const data7 = ['핀란드 - infj',
                '고독한 늑대라고 불릴 정도로 낯가림이 심한 핀란드인들은 친해지기 시작하면 아주 든든하다는 느낌을 받을겁니다. 개인적이면서 내면은 따뜻한 당신에게 핀란드는 잘 맞을지도 모릅니다!',
                '헬싱키'
            ]
            return data7;
        }

        else if (mbti === 'infp') {
            const data8 = ['캐나다 - infp',
                '다양한 인종이 존재하면서 자유로우면서 쾌활한 나라인 캐나다! 평화로우면서 따뜻한 그들의 성격은 다정하면서 개인적 취향은 확고한 당신에게 어울릴 것 같네요!',
                '오타와'
            ]
            return data8;
        }

        else if (mbti === 'enfj') {
            const data9 = ['프랑스 - enfj',
                '세련되지만 어쩌다 한번 터지면 갈때까지 가는 국가 프랑스! 강강약약인 프랑스인들의 성격은 어쩌면 당신과 맞을지도 모릅니다..!',
                '파리'
            ]
            return data9;
        }

        else if (mbti === 'isfj') {
            const data10 = ['한국 - isfj',
                '정 많고 현실적인 이 나라는 남 얘기하는 것 들어주는 거 또한 좋아하며, 친해진다면 여기저기서 챙겨주고 배려하죠. 현실적이면서도 남의 고민을 잘 들어주는 당신에게 잘 어울리네요!',
                '서울'
            ]
            return data10;
        }

        else if (mbti === 'estj') {
            const data11 = ['독일 - estj',
                '단호하고 현실적이며 자신의 선이 확실한 이들은 일 또한 잘하며 기계처럼 모든 것을 절차대로 시행하는 것을 좋아하는데요. 이런 성격에 잘 맞아 보이는 당신에게 추천합니다!',
                '베를린'
            ]
            return data11;
        }

        else if (mbti === 'esfj') {
            const data12 = ['브라질 - esfj',
                '대외적으로 누구랑 만나기만해도 잘 챙겨주고 보답해주는 나라 브라질! 사교적이면서 인간관계를 중요시하는 당신에게 어울릴 것 같네요!',
                '브라질리아'
            ]
            return data12;
        }

        else if (mbti === 'istp') {
            const data13 = ['아일랜드 - istp',
                '자신만의 고집과 스타일이 아주아주 확고한 아일랜드! 하지만 이와 다르게 내 안에 들어온 사람들이라면 아주 잘 챙겨준답니다. 이런 성격과 잘 맞는 당신에게 추천합니다!',
                '더블린'
            ]
            return data13;
        }

        else if (mbti === 'isfp') {
            const data14 = ['아이슬란드 - isfp',
                '신비하면서도 자유로우면서 그 속에서는 평화로운 나라인 아이슬란드.. 겉은 차갑더라도 속은 따뜻하며 아주 감정적인 당신에게 추천합니다!',
                '레이캬비크'
            ]
            return data14;
        }

        else if (mbti === 'estp') {
            const data15 = ['베트남 - estp',
                '각각의 도시 별로 특색이 매우 다양한 베트남! 어디로 튈 지 모르는 매력이 있는 당신에게 아주 딱 맞는 나라 같은데요?!',
                '하노이'
            ]
            return data15;
        }

        else if (mbti === 'esfp') {
            const data16 = ['호주 - esfp',
                '어디에 구속되어 있기보다는 자유롭게 여기저기 뛰어놀며 자신의 끼를 막 펼치는 이 나라는 당신과 정말 잘 어울리겠는데요?',
                '캔버라'
            ]
            return data16;
        }
};

function travel() {
    var mbti = setResult();
        if(mbti === 'enfp') {
            initMap1();
            var travel1 = document.querySelector('#travel'); 
            travel1.setAttribute("href","https://www.kayak.co.kr/flights/GMP-ROM/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti === 'istj') {
            initMap2();
            var travel2 = document.querySelector('#travel'); 
            travel2.setAttribute("href","https://www.kayak.co.kr/flights/GMP-NRT/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'entp') {
            initMap3();
            var travel3 = document.querySelector('#travel'); 
            travel3.setAttribute("href","https://www.kayak.co.kr/flights/GMP-IAD/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'intj') {
            initMap4();
            var travel4 = document.querySelector('#travel'); 
            travel4.setAttribute("href","https://www.kayak.co.kr/flights/GMP-LHR/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'intp') {
            initMap5();
            var travel5 = document.querySelector('#travel'); 
            travel5.setAttribute("href","https://www.kayak.co.kr/flights/GMP-PEK/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'entj') {
            initMap6();
            var travel6 = document.querySelector('#travel'); 
            travel6.setAttribute("href","https://www.0404.go.kr/dev/country_view.mofa?idx=39");
        }
        else if (mbti == 'infj') {
            initMap7();
            var travel7 = document.querySelector('#travel'); 
            travel7.setAttribute("href","https://www.kayak.co.kr/flights/GMP-HEL/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'infp') {
            initMap8();
            var travel8 = document.querySelector('#travel'); 
            travel8.setAttribute("href","https://www.kayak.co.kr/flights/GMP-YOW/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'enfj') {
            initMap9();
            var travel9 = document.querySelector('#travel'); 
            travel9.setAttribute("href","https://www.kayak.co.kr/flights/GMP-CDG/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'isfj') {
            initMap10();
            var travel10 = document.querySelector('#travel'); 
            travel10.setAttribute("href","https://www.kayak.co.kr/flights/GMP-PUS/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'estj') {
            initMap11();
            var travel11 = document.querySelector('#travel'); 
            travel11.setAttribute("href","https://www.kayak.co.kr/flights/GMP-BER/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'esfj') {
            initMap12();
            var travel12 = document.querySelector('#travel'); 
            travel12.setAttribute("href","https://www.kayak.co.kr/flights/GMP-BSB/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'istp') {
            initMap13();
            var travel13 = document.querySelector('#travel'); 
            travel13.setAttribute("href","https://www.kayak.co.kr/flights/GMP-DUB/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'isfp') {
            initMap14();
            var travel14 = document.querySelector('#travel'); 
            travel14.setAttribute("href","https://www.kayak.co.kr/flights/GMP-REK/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'estp') {
            initMap15();
            var travel15 = document.querySelector('#travel'); 
            travel15.setAttribute("href","https://www.kayak.co.kr/flights/GMP-HAN/2024-07-08/2024-07-15?sort=bestflight_a");
        }
        else if (mbti == 'esfp') {
            initMap16();
            var travel16 = document.querySelector('#travel'); 
            travel16.setAttribute("href","https://www.kayak.co.kr/flights/GMP-CBR/2024-07-08/2024-07-15?sort=bestflight_a");
        }
}