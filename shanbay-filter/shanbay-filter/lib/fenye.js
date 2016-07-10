
var numberBox = document.createElement('div');//创建div包含翻页码
numberBox.className = 'number-box-name';

var article_content = document.getElementsByClassName('l-side-margins')[0];
article_content.appendChild(numberBox);//添加进包含内容的盒子中

var obj = document.getElementById('article');  //获取内容层
var pages = document.getElementsByClassName("number-box-name")[0];//获取翻页层

var pgindex=2; //当前页  
                         
var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(screen.height));//获取页面数量
// pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量

for(var i=1;i<=allpages;i++){
	pages.innerHTML += "<a href=\"javascript:showPage('"+i+"');\">第"+i+"页</a> ";//循环输出第几页
}
pages.innerHTML += " <a href=\"javascript:gotopage('-1');\">上一页</a>  <a href=\"javascript:gotopage('1');\">下一页</a>"


function gotopage(value){

	 	value=="-1"?showPage(pgindex-1):showPage(pgindex+1);	
}

function showPage(pageINdex){
	 obj.scrollTop=(pageINdex-1)*parseInt(obj.offsetHeight); //根据高度，输出指定的页
	 pgindex=pageINdex;
	 console.log(pgindex);
}