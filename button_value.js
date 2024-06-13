var result_value = [null,null,null];
var result_value2 = [null,null,null];
var result_value3 = [null,null,null];
var result_value4 = [null];

//value1
document.querySelector('.rd1').addEventListener('click', function() {
        result_value.shift();
        result_value.splice(0,0,1);
    });

document.querySelector('.rd2').addEventListener('click', function() {
        result_value.shift();
        result_value.splice(0,0,0);
    });

document.querySelector('.rd3').addEventListener('click', function() {
        result_value.splice(1,1);
        result_value.splice(1,0,1);
    });

document.querySelector('.rd4').addEventListener('click', function() {
        result_value.splice(1,1);
        result_value.splice(1,0,0);
    });

document.querySelector('.rd5').addEventListener('click', function() {
        result_value.splice(2,1);
        result_value.splice(2,0,1);
    });
document.querySelector('.rd6').addEventListener('click', function() {
        result_value.splice(2,1);
        result_value.splice(2,0,0);
    });

//value2
document.querySelector('.rd7').addEventListener('click', function() {
        result_value2.shift()
        result_value2.splice(0,0,1);
    });
document.querySelector('.rd8').addEventListener('click', function() {
        result_value2.shift();
        result_value2.splice(0,0,0);
    });
document.querySelector('.rd9').addEventListener('click', function() {
        result_value2.splice(1,1);
        result_value2.splice(1,0,1);
    });
document.querySelector('.rd10').addEventListener('click', function() {
        result_value2.splice(1,1);
        result_value2.splice(1,0,0);
    });
document.querySelector('.rd11').addEventListener('click', function() {
        result_value2.splice(2,1);
        result_value2.splice(2,0,1);
    });
document.querySelector('.rd12').addEventListener('click', function() {
        result_value2.splice(2,1);
        result_value2.splice(2,0,0);
    });

//value3
document.querySelector('.rd13').addEventListener('click', function() {
        result_value3.shift();
        result_value3.splice(0,0,1);
    });
document.querySelector('.rd14').addEventListener('click', function() {
        result_value3.shift();
        result_value3.splice(0,0,0);
    });
document.querySelector('.rd15').addEventListener('click', function() {
        result_value3.splice(1,1);
        result_value3.splice(1,0,1);
    });
document.querySelector('.rd16').addEventListener('click', function() {
        result_value3.splice(1,1);
        result_value3.splice(1,0,0);
    });
document.querySelector('.rd17').addEventListener('click', function() {
        result_value3.splice(2,1);
        result_value3.splice(2,0,1);
    });
document.querySelector('.rd18').addEventListener('click', function() {
        result_value3.splice(2,1);
        result_value3.splice(2,0,0);
    });

//value4
document.querySelector('.rd19').addEventListener('click', function() {
        result_value4.shift();
        result_value4.splice(0,0,1);
    });
document.querySelector('.rd20').addEventListener('click', function() {
        result_value4.shift();
        result_value4.splice(0,0,0);
    });