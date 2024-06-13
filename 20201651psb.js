
/*페이지 이동*/
const page_1 = document.querySelector(".page_1");
const page_2 = document.querySelector(".page_2");
const page_3 = document.querySelector(".page_3");

function next_page2(){
    //아무 값도 주지 않은 경우
    if(result_value.toString() == [null,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }

    //값을 한 개만 준 경우
    else if(result_value.toString() == [0,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [null,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [null,null,0]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [1,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [null,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [null,null,1]){
        alert("모든 박스를 체크해주세요!!!");
    }

    //값을 두 개만 준 경우
    else if(result_value.toString() == [0,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [0,null,0]){
        alert("모든 박스를 체크해주세요!!!");
    }    
    else if(result_value.toString() == [null,0,0]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [0,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [0,null,1]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [null,0,1]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [1,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [1,null,0]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [null,1,0]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [1,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [1,null,1]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value.toString() == [null,1,1]){
        alert("모든 박스를 체크해주세요!!!");
    }

    //result_value2 경고 메세지 츨력 (값 0)
    else if(result_value2.toString() == [null,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }

    //값 1
    else if(result_value2.toString() == [0,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value2.toString() == [null,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value2.toString() == [1,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value2.toString() == [null,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }   
    else{
        page_1.style.display = "none";
        page_2.style.display = "block";
    }
}

function next_page3(){
    //페이지 변경으로 인해 3번쨰 값의 변화만 주면됨.
    if(result_value2.toString() == [0,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value2.toString() == [1,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value2.toString() == [0,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value2.toString() == [1,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }

    // 3번 결과 값 (아무 값도 주지 않은 경우)
    else if(result_value3.toString() == [null,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }

    //값을 한 개만 준 경우
    else if(result_value3.toString() == [0,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [null,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [null,null,0]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [1,null,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [null,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [null,null,1]){
        alert("모든 박스를 체크해주세요!!!");
    }

    //값을 두 개만 준 경우
    else if(result_value3.toString() == [0,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [0,null,0]){
        alert("모든 박스를 체크해주세요!!!");
    }    
    else if(result_value3.toString() == [null,0,0]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [0,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [0,null,1]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [null,0,1]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [1,0,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [1,null,0]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [null,1,0]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [1,1,null]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [1,null,1]){
        alert("모든 박스를 체크해주세요!!!");
    }
    else if(result_value3.toString() == [null,1,1]){
        alert("모든 박스를 체크해주세요!!!");
    }
    //4번 값 (선택지가 하나이므로 null 값 일 시에만 반응하면됨.)
    else if(result_value4.toString()== [null]){
        alert("모든 박스를 체크해주세요!!!");
    }

    else{
        page_2.style.display ="none";
        page_3.style.display = "block";
        ImgResult();
        Result_name();
        Result_Travel();
    }
}

function pre_page(){
    page_2.style.display = "none";
    page_1.style.display = "block";
}

/* 버튼 클릭 시 색 유지 */

//1번
document.querySelector(".rd1").onclick = function(){
            this.style.backgroundColor ="#FFA500";
            document.querySelector(".rd2").style.backgroundColor ="#1E3A8A";
        };

document.querySelector(".rd2").onclick = function(){
            this.style.backgroundColor ="#FFA500";
            document.querySelector(".rd1").style.backgroundColor ="#1E3A8A";
        };

//2번
document.querySelector(".rd3").onclick = function(){
            this.style.backgroundColor ="#FFA500";
            document.querySelector(".rd4").style.backgroundColor ="#1E3A8A";
        };

document.querySelector(".rd4").onclick = function(){
            this.style.backgroundColor ="#FFA500";
            document.querySelector(".rd3").style.backgroundColor ="#1E3A8A";
        };

//3번
document.querySelector(".rd5").onclick = function(){
            this.style.backgroundColor ="#FFA500";
            document.querySelector(".rd6").style.backgroundColor ="#1E3A8A";
        };

document.querySelector(".rd6").onclick = function(){
            this.style.backgroundColor ="#FFA500";
            document.querySelector(".rd5").style.backgroundColor ="#1E3A8A";
        };

//4번
document.querySelector(".rd7").onclick = function(){
            this.style.backgroundColor ="#FFA500";
            document.querySelector(".rd8").style.backgroundColor ="#1E3A8A";
        };

document.querySelector(".rd8").onclick = function(){
            this.style.backgroundColor ="#FFA500";
            document.querySelector(".rd7").style.backgroundColor ="#1E3A8A";
        };

//5번
document.querySelector(".rd9").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd10").style.backgroundColor ="#1E3A8A";
};

document.querySelector(".rd10").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd9").style.backgroundColor ="#1E3A8A";
};

//6번
document.querySelector(".rd11").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd12").style.backgroundColor ="#1E3A8A";
};

document.querySelector(".rd12").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd11").style.backgroundColor ="#1E3A8A";
};

//7번
document.querySelector(".rd13").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd14").style.backgroundColor ="#1E3A8A";
};

document.querySelector(".rd14").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd13").style.backgroundColor ="#1E3A8A";
};

//8번
document.querySelector(".rd15").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd16").style.backgroundColor ="#1E3A8A";
};

document.querySelector(".rd16").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd15").style.backgroundColor ="#1E3A8A";
};

//9번
document.querySelector(".rd17").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd18").style.backgroundColor ="#1E3A8A";
};

document.querySelector(".rd18").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd17").style.backgroundColor ="#1E3A8A";
};

//10번
document.querySelector(".rd19").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd20").style.backgroundColor ="#1E3A8A";
};

document.querySelector(".rd20").onclick = function(){
    this.style.backgroundColor ="#FFA500";
    document.querySelector(".rd19").style.backgroundColor ="#1E3A8A";
};

