/**
 * 
 * 
 * 
 * 在规定的时间内完成10以内的加法计算/减法计算
 */
let answer = 0;
let err = 0;
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let answerdom = document.querySelector("#answer");
let errdom = document.querySelector("#err");
let timdom = document.querySelector("#tim");
let starttim =0;
let maxnum =10;


//10以内加法
function factorySimpleAdd(){
	let number3 = parseInt( Math.random()*(maxnum+1));
	let number1 = parseInt( Math.random() *number3);
	while(number3==0 || number1==0){
		number3 = parseInt( Math.random()*(maxnum+1));
		number1 = parseInt( Math.random() *number3);
	}
	let number2 = number3 - number1;
	if(number1 == parseInt(num1.innerHTML) || number2 == parseInt(num2.innerHTML)){
		factorySimpleAdd();
		return;
	}
	num1.innerHTML = number1;
	num2.innerHTML = number2;
	num3.innerHTML = '?';
}

//检查
function clickSimpleAdd(){
	if(starttim<=0){
		starttim = Date.now();
	}
	let t =parseInt((Date.now() - starttim)/1000);
	timdom.innerHTML = (t/60<1?"":((parseInt(t/60))+"分"))+(t%60)+"秒";
	if(parseInt(num1.innerHTML)+ parseInt(num2.innerHTML) == parseInt(num3.innerHTML)){
		answer++;
		answerdom.innerHTML= answer.toString();
		num3.classList.remove("rederror");
		factorySimpleAdd();
		return;
	}
	err++;
	errdom.innerHTML = err.toString();
	num3.innerHTML='❌';
	num3.classList.add("rederror");
}

function clickFactoryNumber3(num){
	if('?❌'.indexOf(num3.innerHTML)!=-1)
		num3.innerHTML='';
	num3.innerHTML += num;
}

function clickDel(){
	num3.innerHTML='?';
}