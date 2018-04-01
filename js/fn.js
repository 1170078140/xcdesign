function getArgument(url){
	//转换字符串
	url = url.toString();
	
	//存储结果的变量
	var res={};
	
	//按？分离域名和参数
	var arr1=url.split('?');
	
	//如果没有参数，则返回空对象
	if(arr1.length<2){
		return res; 
	}
	
	//按&分离各个参数
	var arr2=arr1[1].split('&');
	var arr3=[];
	for(var i=0;i<arr2.length;i++){
		//提取参数名和参数值
		arr3=arr2[i].split('=');   
		
		//如果参数值为空，则返回undefined
		res[arr3[0]]=arr3.length>0?arr3[1]:undefined;
	}
	return res;
}