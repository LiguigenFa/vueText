<template>
	<div>
		<header1 v-on:listenToChileEvent="getNavActiveNum" :navActiveNum2="messageFromContent2"></header1>
		<router-view :navActiveNum="messageFromHeader" v-on:listenToChileEvent3="getNavActiveNum2"></router-view>
		<footer1></footer1>
	</div>
</template>

<script>
	import commonJs from '../../static/js/common/common';
	import header1 from './header';
	import footer1 from './footer';
	export default {
		name: 'index',
		data() {
			return {
				messageFromHeader : 0,
				messageFromContent2 : 0
			}
		},
		methods : {
			getNavActiveNum : function(data){
				console.log(data);
				this.messageFromHeader = data;
			},
			getNavActiveNum2 : function(data){
				console.log(data);
				this.messageFromContent2 = data;
			}
		},
		mounted: function() {
			commonJs();
		},
		components: { header1, footer1 }
	}
</script>
<style scoped>
	@import '/static/css/style.css';
</style>