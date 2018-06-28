//注册导航组件
var navindex=sessionStorage.getItem('navindex') != null?sessionStorage.getItem('navindex'):'0';
console.log(navindex)
Vue.component('my-nav', {
  data:function(){
  	return {
  		activeIndex:navindex,
  	}
  },
  template: '<header>'+
				'<div class="logobox" style="line-height:40px;font-size:30px;text-indent:30px;">logo</div>'+
				'<nav class="navbox" v-cloak>'+
					'<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#409EFF" @select="cutNav">'+
					  '<el-menu-item index="0">首页</el-menu-item>'+
					  '<el-menu-item index="1">关于我们</el-menu-item>'+
					  '<el-menu-item index="2">成功案例</el-menu-item>'+
					  '<el-menu-item index="3">新闻中心</el-menu-item>'+
					  '<el-menu-item index="4">招商加盟</el-menu-item>'+
					  '<el-menu-item index="5">联系我们</el-menu-item>'+
					'</el-menu>'+
				'</nav>'+
			'</header>',
  methods:{
	//菜单改变
	cutNav:function(key) {
        if(key != this.activeIndex){
        	console.log(key);
        	if(key == '0'){
						window.open('index.html','_self')
					}else if(key == '1'){
						window.open('aboutUs.html','_self')
					}else if(key == '2'){
						window.open('succeedCase.html','_self')
					}else if(key == '3'){
						window.open('news.html','_self')
					}else if(key == '4'){
						window.open('joinIn.html','_self')
					}else if(key == '5'){
						window.open('contact.html','_self')
					}
        }
				sessionStorage.setItem('navindex',key)
      }
  }
})



//快捷菜单
Vue.component('b-menu', {	
  data:function(){
  	return {
  	}
  },
  template: '<div class="bmenubox">'+
				'<el-button type="text">联系我们</el-button>'+
				'<el-button type="text">导航地图</el-button>'+
				'<el-button type="text">快捷菜单</el-button>'+
			'</div>',
  methods:{
	
  }
})

//页脚组件
Vue.component('footer-box', {	
  data:function(){
  	return {
				data:{
					name:'',
					phone:'',
					email:''
				}
  	}
  },
  template: '<div class="footer">'+
						'<el-row :gutter="20">'+
						  '<el-col :span="8">'+
						  	'<div class="footleft">'+
						  		'<p>Contact & 联系我们</p>'+
						  		'<div>北京市朝阳区来广营中街朝来科技园<br/>(创远路36号园3号楼)</div>'+
						  		'<p>企业邮箱:hi@qudaosujian.com</p>'+
						  		'<p>邮编&100012</p>'+
						  		'<p>网站:WWW.QDSJ.COM</p>'+
						  	'</div>'+
						  '</el-col>'+
						  '<el-col :span="8">'+
						  	'<div class="footcenter">'+
						  		'<div>Sitemap&网站地图</div>'+
						  		'<p>'+
						  			'<span>关于我们</span>'+
						  			'<span>ABOUT US</span>'+
						  		'</p>'+
						  		'<p>'+
						  			'<span>渠道服务</span>'+
						  			'<span>CHANNEL SERVER</span>'+
						  		'</p>'+
						  		'<p>'+
						  			'<span>成功案例</span>'+
						  			'<span>CHANNEL RUNUP</span>'+
						  		'</p>'+
						  		'<p>'+
						  			'<span>新闻中心</span>'+
						  			'<span>NEWS CENTER</span>'+
						  		'</p>'+
						  		'<p>'+
						  			'<span>卓越人才</span>'+
						  			'<span>TALENT RECRUITMENT</span>'+
						  		'</p>'+
						  		'<p>'+
						  			'<span>联系我们</span>'+
						  			'<span>CONTACT US</span>'+
						  		'</p>'+
						  	'</div>'+
						  '</el-col>'+
						  '<el-col :span="8">'+
						  	'<div class="footright">'+
						  		'<div class="fr-box">'+
						  			'<el-row :gutter="20">'+
										'<el-col :span="16">'+
											'<div class="frrl">'+
												'<p>'+
									  				'<el-input v-model="data.name" placeholder="Name"></el-input>'+
									  			'</p>'+
									  			'<p>'+
									  				'<el-input v-model="data.email" placeholder="Email"></el-input>'+
									  			'</p>'+
									  			'<p>'+
									  				'<el-input v-model="data.phone" placeholder="Phone"></el-input>'+
									  			'</p>'+
									  			'<p>'+
									  				'<el-button type="info" size="small">Send Message</el-button>'+
									  			'</p>'+
											'</div>'+
										'</el-col>'+
										'<el-col :span="8">'+
											'<div class="frrr">'+
												'<img src="img/erweima.png"/>'+
												'<img src="img/erweima.png"/>'+
											'</div>'+
										'</el-col>'+
									'</el-row>'+
						  		'</div>'+
						  	'</div>'+
						  '</el-col>'+
						'</el-row>'+
					'</div>',
  methods:{
  }
})