/*====================================== interview question and answer ======================================*/

function pramidCode(num){
    let arr = [];
    for(let a=1; a<=num; a++){
        arr.push(" *".repeat(a));
    }
    return arr;
}
let stars = pramidCode(5);
console.log(stars.join('\n'))


function getReverse(str){
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


function getRandomOTP(num){
    return parseInt(Math.random() * (9**num));
}
console.log(getRandomOTP(6))


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


function findDuplicateNumber(arr, size)
{
    let duplicateNumber = [];
    for (let i = 0; i < size; i++) {		// i = 0,1,2,3,4,5,6,7,8,9
        var abs_value = Math.abs(arr[i]); 	// abs_value = 1,22
        if (arr[abs_value] >= 0)
            arr[abs_value] = -arr[abs_value]; 
        else
            duplicateNumber.push(abs_value)
    }
    return duplicateNumber;
}
numberArr = [1,22,77,4,5,7,77,22,5,8];
let getVal = findDuplicateNumber(numberArr, numberArr.length);
let unique = getVal.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique)


[1,-22,77,4,5,7,77,22,5,8];









