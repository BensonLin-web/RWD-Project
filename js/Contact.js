function createCode(len){
	var arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var code = "";
	//隨機到數組中取len位元素
	for(var i = 0; i < len; i ++){
		//生成隨機下標
		var index = parseInt(Math.random()*arr.length);
		//拼接驗證碼
		code += arr[index];
	}
	return code;
}
function validateCode(){
	//生成驗證碼
	var code = createCode(4);
	var button = document.getElementsByClassName('btnCode')[0];
	button.innerText = code;
}