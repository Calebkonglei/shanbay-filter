# shanbay-filter
#更新日志1：chrome插件文件配置
		```
		{
	"manifest_version": 2,

	"name": "my extension",
	"version":"1.0",
	"description": "A extension that can filter expect title,image,
					content and can callback shanbay api to achieve 
					fundation that  search the meaning of word.",
	"background": {
		 "scripts": ["js/background.js"],
		 "persistent": false
	},				

	"permissions": ["tabs", "http://*/*", "notifications", "contextMenus"],

	"content_scripts":[{
		"matches":["http://www.theguardian.com/politics/2015/may/28/david-cameron-sets-off-on-mission-to-win-over-european-leaders"],
		"css":["style/mystyle.css"],
		"js":["lib/jquery.js","lib/filter.js", "lib/fenye.js", "lib/shanbaySearch.js"]
		}],
	"browser_action":{
		"default_icon":"icon.png",
		"default_title":"default title"
		// "default_popup":"popup.html"
	}				
}
	```
#更新日志2：实现指定网页文件的广告插件及不相关内容
