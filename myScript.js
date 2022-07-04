/*
    UTF  ==> Unicode Transformation Format
    ECMA ==> European Computer Manufactures Association


    turnaryOperator:
        var a=7,b;
        ( a > 5 ) ? b='True' : b='False';
    
    escape charecter:
        var x = "my name is \"akram\" mohd";
        //op==> my name is "akram" mohd
    
    string method:
        var str = 'akram mohd'; 
        var x = "mm nn bb vv cc xx zz cc";
        x.slice(15,30)              "xx zz cc"
        x.substring(15, 30)         "xx zz cc"    //substring not accept negative index 
        x.search('cc')              12
        x.indexOf('cc')             12
        x.indexOf('cc', 15)         21
        x.lastIndexOf('cc')         21
        x.replace('bb','dd')
        x.replace(/bb/i,'dd')       // an /i flag (insensitive):
        x.replace(/bb/g,'dd')       // an /g flag (global match):
        str.toUpperCase()           "AKRAM"
        str.trim()()                remove whitespace from string
        str.split(' ')              ['akram', 'mohd']  convert to array by split 

    number method:
        var num = 7
        num.toString()              "7"
        parseInt(num)               7

    math objects:
        Math.abs(-7.7)          7.7
        Math.ceil(7.7)          8   returns the value of x rounded up to its nearest integer:
        Math.round(4.7)         5
        Math.round(4.4)         4
        Math.pow(8, 2);         64
        Math.sqrt(64)           8
        Math.max(1,23,85)       85

    array method:
        var arr = ['akm','zee','srz'];
        arr.includes('akm')     true
        

*/


function hello() {
    window.alert('hello');
}

function rendomOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

function getRandomOTP(num){
    return parseInt(Math.random() * (9**num));
}
console.log(getRandomOTP(6))

function isNumberKey(evt) {
    var charCode = evt.keyCode;
    if (charCode > 48 && charCode < 57)
        return true;
    return false;
}

function checkDay() {
    var day = Number(prompt('enter the number of day'));
    switch (day) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            document.getElementById('day').innerHTML = 'Working day';
            break;
        case 5:
        case 6:
            document.getElementById('day').innerHTML = 'Holyday..';
            break;
        default:
            document.getElementById('day').innerHTML = 'enter the number of day';
    }
}

function checkAge() {
    var age = Number(prompt('enter age'));
    switch (true) {
        case (age < 18):
            document.getElementById('age').innerText = 'You are child';
            break;
        case (age >= 18 && age <= 30):
            document.getElementById('age').innerHTML = 'You are eligible';
            break;
        case (age >= 31 && age <= 70):
            document.getElementById('age').innerHTML = 'You are not eligible';
            break;
        default:
            document.getElementById('age').innerHTML = 'enter the valid year';
    }
}

function table() {
    for (var a = 1; a <= 7; a++) {
        for (var b = 1; b <= a; b++) {
            document.write(b + ' ');
        }
        document.write('<br>');
    }
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7

function formatDate() {
    var d = new Date(),
        month = d.getMonth() + 1,
        day = d.getDate(),
        year = d.getFullYear();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    // 2022-06-17
    document.getElementById('formatDate').innerHTML = [year, month, day].join('-') + ' (toDateString: ' + d.toDateString() + ')';
}

function todayDay() {
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}


// ==================== js important function

function pramidCode(num){
    let arr = [];
    for(let a=1; a<=num; a++){
        arr.push(" *".repeat(a));
    }
    return arr;
}
let stars = pramidCode(5);
console.log(stars.join('\n'))


function getStringReverse(str){
	let nstr = "";
    for(let a=str.length-1; a>=0; a--){
      	nstr += str[a];
    }
    return nstr;
}


// getUpperCaseWord 1
function getUpperCaseWord(str){
  	return str[0].toUpperCase()+str.slice(1)
}
console.log(getUpperCaseWord('akram'));


// getUpperCaseWord 2
function getUpperCaseWord2(str){
	let nval = "";
	let splitValue = str.split(' ');
	if(splitValue.length > 1) {
		for(let a=0; a<splitValue.length; a++) {
		 	let singleValue = splitValue[a];
		 	nval += singleValue[0].toUpperCase()+singleValue.slice(1)+'';
		}
	}
	else{
	  	nval = str[0].toUpperCase()+str.slice(1)
	}
	return nval;
}
console.log(getUpperCaseWord2('mohd akram').trimEnd());


function getPassword(num){
    let mixStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let pass = '';
    for(let a=1; a<=num; a++){
        getChar = Math.floor(Math.random() * mixStr.length);
        pass += mixStr.charAt(getChar);
    }
    return pass;
}
console.log(getPassword(10))


function removeDuplicateNumber(getArr){
    let uniqueNumberArr = [];
    for(let a=0; a<getArr.length; a++) {
        if(!uniqueNumberArr.includes(getArr[a]))
            uniqueNumberArr.push(getArr[a]);  
    }
    return uniqueNumberArr;
}
numberArr = [1,22,77,4,5,7,77,22,5,8];
console.log(removeDuplicateNumber(numberArr))


const findOcurrence = (strval) => {
    var maxVal = 1;
    var maxLetter = strval[0];
    var  map = {};
    split = strval.split('');
    split.forEach((item)=>{
        map[item] = map[item] ? map[item]+1 : 1;
    })
    
    for(let k in map){
        if( map[k] > maxVal){
            maxVal = map[k];
            maxLetter = k;   
        }
    }
    return maxLetter;
}
console.log(findOcurrence('mohd akram! hello goodmorning'))


let vowels = "aeiou";
for(let i=0; i<vowels.length; i++){
    console.log(vowels[i])
}

let ciperText = [..."YZOGUT QGMORTZ MTRHTILS"];
let plainText = "";
for(let [index, value] of ciperText.entries()){
    plainText += (index %2===0) ? value : '';
}
console.log(plainText); //YOU GOT THIS


function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}
let formdate = new Date(2014, 0, 3); // 3 Jan 2014
console.log(getWeekDay(formdate))  // FR



// Rest parameters and spread syntax
function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sumAll(1,3,5,7,8)) // 24

let ex_arr1 = [1,2,3];
let ex_arr2 = [5,6,7];
// add both array
let fianl_arr = [...ex_arr1, ...ex_arr2];


//  array chunk in js
function chunk(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
        const last = chunked_arr[chunked_arr.length - 1];
        if (!last || last.length === size)
            chunked_arr.push([array[i]]);
        else
            last.push(array[i]);
    }
    return chunked_arr;
} 
console.log(chunk([1,2,3,4,5],2))


let timerId = setInterval(() => {
    let now = new Date();
    // document.getElementById('timer').innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}, 1000);
timerId;


function getDataWithFetchAPI(){
    // calling api in js
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })
    /*Output: Array [
        0: {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
        1: {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}
        2: {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false}
    ]*/
}

function sendDataWithFetchAPI(dataObj){
    // send data by apis in js
    // dataObj = {name, email, phone}
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method:"POST",
        Headers:{
            "Accept":'application/json',
            "Content-Type": "application/json"
        },
        body:JSON.stringify(dataObj)
    }).then((result)=>{
        result
    })
}


function findMax(arr) {
    var length = arr.length
    var max = -Infinity;
    while (length--) {
        if (arr[length] > max) {
            max = arr[length];
        }
    }
    return max;
}
let marks = [22,6,88,23];
console.log(findMax(marks))



















/*
    // jquery code
    $(document).ready(function(){
        $(document).on('submit', '#frmAddPromo', function(event){
            event.preventDefault();
            if( $('input[name=pay_amount]').val() =='' ){
                $('input[name=pay_amount]').focus(); return;
            }

            $.ajax({
                url:"requsetAction.php",  method:'POST',
                data:new FormData(this),  dataType:"json",
                contentType:false,        processData:false,
                success:function(response)
                {
                    if(response.success==0 || response.success=='0'){
                        alert(response.message);
                    }else{
                        $('#succ_message').css('display','block');
                        $('#succ_message').html(response.message);
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                        // $('#frmAddPromo')[0].reset();
                        setTimeout(function(){ 
                            // $('#succ_message').css('display','none');
                            window.location='manage_test_booking_order.php';
                        }, 2000);
                    }
                }
            });
        });
    });

    function exportCSV(){
        var startDate = $('#startDate').val();
        var endDate   = $('#endDate').val();
        
        //using a[1]-1 since Date object has month from 0-11
        var a = startDate.split('-');
        var startDateNew = new Date (a[2], a[1] - 1,a[0]);

        var b = endDate.split('-');
        var endDateNew = new Date (b[2], b[1] - 1, b[0]);

        if( endDateNew !='' && startDateNew !='' ){
            if( endDateNew > startDateNew ) {
                if(confirm("Are you sure to export CSV file?")){
                window.location.href="export_medical_loan.php?startDate="+startDate+"&endDate="+endDate+"";
                }else { return false; }
            }
            else{ 
                alert('Invalid date.Please select correct date'); 
            }
        }
        else{ 
            alert('Please select both Start Date and End Date'); 
        }
    }

*/