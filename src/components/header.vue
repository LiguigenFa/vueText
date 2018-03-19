<template>
	<!--<div id="wrapper">-->
	<!-- NAVBAR -->
	<div class="header bz-bb">
		<div class="header_1">
			<div class="welcome bz-bb">
				<div class="loginBtn">
					<p>hi,欢迎来到网润金服集团</p>
					<router-link to="/">点我登录</router-link>
				</div>
				<div class="serviceNum">
					<i class="icon icon-service"></i>
					<span id="">
								客服热线：
							</span>
					<span class="serviceNum_num">
								400-1688-911
							</span>
				</div>
			</div>
		</div>
		<div class="header_1 borderNone">
			<div class="logoDiv bz-bb">
				<img src="../../static/assets/img3/logo.png" />
				<div class="myAccountBtn clearfix" v-on:mouseenter="showNav()" v-on:mouseleave="hideNav()">
					<ul class="myAccountBtn_ul1">
						<li>
							<a href="javascript:;">
								<i class="icon-account flt"></i>
								<span id="" class="flt">我的账户</span>
								<i :class="navShow?'icon-bottom flt':'icon-right flt'"></i>
							</a>
						</li>
					</ul>
					<ul class="myAccountBtn_ul2" style="display: none;" v-show="navShow">
						<li :class="activeNum == 4?'active':''" @click="changeActiveNum(4)">
							<router-link to="/applyList">
								<i class="icon-applylist flt"></i>
								<span id="" class="flt">申请列表</span>
							</router-link>
						</li>
						<li :class="activeNum == 0?'active':''" @click="changeActiveNum(0)">
							<router-link to="/userOperation/yj" >
								<i class="icon-yeji flt"></i>
								<span id="" class="flt">我的业绩</span>
							</router-link>
						</li>
						<li :class="activeNum == 1?'active':''" @click="changeActiveNum(1)">
							<router-link to="/userOperation/changePwd" >
								<i class="icon-changePass flt"></i>
								<span id="" class="flt">修改密码</span>
							</router-link>
						</li>
						<li :class="activeNum == 2?'active':''" @click="changeActiveNum(2)">
							<router-link to="/userOperation/changePhone" >
								<i class="icon-changePhoneNum flt"></i>
								<span id="" class="flt">修改手机号</span>
							</router-link>
						</li>
						<li :class="activeNum == 3?'active':''" @click="changeActiveNum(3)">
							<a href="javascript:;">
								<i class="icon-logout flt"></i>
								<span id="" class="flt logout">退出登录</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {
				navShow: false,
				navActiveNum : 0,
				activeNum : 4
			}
		},
		mounted: function() {
			switch(this.$route.name) {
				case "applyList":
					this.activeNum = 4;
					break;
				case "yj":
					this.activeNum = 0;
					break;
				case "changePwd":
					this.activeNum = 1;
					break;
				case "changePhone":
					this.activeNum = 2;
					break;
				default:
					break;
			}
		},
		methods: {
			showNav: function() {
				this.navShow = true;
			},
			hideNav: function() {
				this.navShow = false;
			},
			changeActiveNum : function(num){
				this.navActiveNum = num;
				this.activeNum = num;
				this.navShow = false;
				this.$emit("listenToChileEvent",this.navActiveNum);
			},
			changeActiveNum2 : function(){
				this.activeNum = this.navActiveNum2;
			}
		},
		watch : {
			"navActiveNum2" : "changeActiveNum2"
		},
		props : ['navActiveNum2']
	}
</script>

<style>

</style>

<!--<nav class="navbar navbar-default navbar-fixed-top  header">
			<span v-show="status=='1'"><img v-bind:src="imgurl" class="mgtop" v-on:click='imgclick'></span>
			<img src="static/assets/img/user-medium.png" class="txcls">
			<span class="txcls1">赵宁，欢迎您！
        <span style="margin-left:10px;color:#ffffff"  >
        <img src="static/assets/img/icon_03.png" style="margin-top:-6px"> 400-900-780909     </span>
			<span style="margin-left:10px;color:#ffffff" class="menu1"><img src="static/assets/img/icon_05.png" style="margin-top:-6px">账号设置    </span>
			<span style="margin-left:10px;color:#ffffff" id="exitbutton" class="menu1">退出   </span>
			</span>

		</nav>
		<span v-if="status=='0'">
  <div id="sidebar-nav" class="sidebar leftnav" style="width:180px;height:1200px;maring-top:-80px;z-index:9999">
      <div class="sidebar-scroll">
        <nav>
          <ul class="nav">
<div style="margin-top:-50px;background:#2b333e;width:30%">          
<img src="static/assets/img/logo.png"  class="img-responsive logo  maxicon">
	<span v-show="status=='0'"><img v-bind:src="imgurl" class="mgtop" v-on:click='imgclick'></span></div>
	<li>
		<a href="#subPages" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>楼盘查询</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
		<div id="subPages" class="collapse ">
			<ul class="nav">
				<li>
					<a href="page-profile.html" class="">新建楼盘-楼盘详情</a>
				</li>
				<li>
					<a href="page-login.html" class="">新建楼盘-楼盘相册</a>
				</li>
				<li>
					<a href="page-lockscreen.html" class="">新建楼盘-楼盘户型</a>
				</li>
			</ul>
		</div>
	</li>
	<li>
		<a href="#subPages1" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>楼盘审核</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
		<div id="subPages1" class="collapse ">
			<ul class="nav">
				<li>
					<a href="page-profile.html" class="">审核页面</a>
				</li>
				<li>
					<a href="page-login.html" class="">审核历史</a>
				</li>

			</ul>
		</div>
	</li>

	</ul>
	</nav>
	</div>
	</div>
	</span>
	<span v-else-if="status=='1'">
  <div id="sidebar-nav" class="sidebar leftnav1"  style="width:5%;height:1200px;maring-top:-80px;z-index:9999">
      <div class="sidebar-scroll">
        <nav>
          <ul class="nav">
<div style="margin-top:-50px;background:#2b333e;width:30%">          
	<span v-show="status=='1'"><img v-bind:src="imgurl" class="mgtop1" v-on:click='imgclick'></span></div>
	<li>
		<a data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <img v-bind:src="imglist[0].path" v-on:click='btnclick(0)'></a>

	</li>
	<li>
		<a data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <img v-bind:src="imglist[1].path" v-on:click='btnclick(1)'></a>

	</li>
	<li>
		<a data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <img v-bind:src="imglist[2].path" v-on:click='btnclick(2)'></a>

	</li>
	<li>
		<a data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <img v-bind:src="imglist[3].path" v-on:click='btnclick(3)'></a>

	</li>
	<li>
		<a data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <img v-bind:src="imglist[4].path" v-on:click='btnclick(4)'></a>

	</li>
	<li>
		<a data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <img v-bind:src="imglist[5].path" v-on:click='btnclick(5)'></a>

	</li>
	<li>
		<a data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <img v-bind:src="imglist[6].path" v-on:click='btnclick(6)'></a>

	</li>
	<li>
		<a data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <img v-bind:src="imglist[7].path" v-on:click='btnclick(7)'></a>

	</li>

	</ul>
	</nav>
	</div>
	</div>
	</span>
	<span v-show="ishide=='1'">
	     <ul class="popupmenu" v-bind:style="{ top: menuy + 'px' }">
	      <div class="popupmenumain">{{thismenu}}<img src="static/assets/img/flogin.png"  class="flslogo"></div>
	      <div class="popupmenu1" v-for="item in menulist">{{item.menus}}</div>
	     </ul>
	  </span>-->
<!--</div>-->