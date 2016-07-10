window.onload=function(){
	var _$ = document;
    //需要显示内容，更改了部分样式以便于查看==========================================
	var content=_$.getElementsByClassName('l-side-margins')[0];
	content.classList.add('in-view');

	var article_content = _$.getElementById('article');
	article_content.classList.add('article_content');
	//用chrome测试的时候，平板的广告插件类名和pc一致，这里判断只有一个临界值，根据小屏的广告插件选择器，清除相应结点
    if(screen.width<400){//
    	//清除顶部广告节点=====================================================
    	var small_top_ad=_$.getElementById('dfp-ad--top-above-nav');
    	small_top_ad.parentNode.removeChild(small_top_ad);

    	//清除侧边栏广告节点====================================================
    	var small_aside_content=_$.getElementsByTagName('aside')[0];
		small_aside_content.parentNode.removeChild(small_aside_content);
    }

	//清除顶部广告节点=========================================================
    var top_ad=_$.getElementsByClassName('top-banner-ad-container')[0];
    top_ad.parentNode.removeChild(top_ad);

	//清除侧边栏广告节点=======================================================
	var aside_content=_$.getElementsByTagName('aside')[0];
	aside_content.parentNode.removeChild(aside_content);
    
       	
	/*
	*  obj :需要过滤内容的类选择器
	*  过滤内容样式：  display：none
	*/
	function filter_content(obj){

		var content = _$.getElementsByClassName(obj)[0];
		return content.classList.add('out-view');
	}

	/*
	*  contentArr保存需过滤内容的类名  
	*/
	var contentArr = ['content__labels','l-header', 'content__meta-container' ,'content-footer ', 'content__secondary-column js-secondary-column', 'submeta', 'meta__extras',"l-footer" ];
	for(var data in contentArr){
		filter_content(contentArr[data]);
	}


}
