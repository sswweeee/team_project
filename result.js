
//이미지 출력
function ImgResult(){
    var mbti = setResult();
    var resultImg = document.createElement('img');
    const Img = document.getElementById('img_frame');
    var imgUrl = 'image/image-' + mbti + '.png';

    resultImg.src = imgUrl;
    resultImg.alt = mbti;
    resultImg.classList.add('img-result');
    Img.appendChild(resultImg);
}


//이름과 소개 글 출력
function Result_name(){
    const name = product();
    var name_result = document.getElementById('name');
    name_result.innerHTML = name[0];
    
    var content_result = document.getElementById('content');
    content_result.innerHTML = name[1];

    var capital = document.getElementById('capital');
    capital.innerHTML = "이곳의 수도는??" + " " + name[2];
}

//공항 별 시간, 가격 사이트 갱신 (각 수도 별)
function Result_Travel(){
    const Result_Travel = travel();
    return Result_Travel;
}