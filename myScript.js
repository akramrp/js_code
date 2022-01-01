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

function isNumberKey(evt) {
    var charCode = event.keyCode;
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

function formatDate() {
    var d = new Date(),
        month = d.getMonth() + 1,
        day = d.getDate(),
        year = d.getFullYear();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

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