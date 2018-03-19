<template>
	<content2 :navActiveNum="messageFromHeader" v-on:listenToChileEvent2="getNavActiveNum2"></content2>
</template>

<script>
	import content2 from './content2';
	export default {
		name: 'content',
		data() {
			return {
				messageFromHeader : this.navActiveNum
			}
		},
		methods: {
			changeActiveNum : function(){
				this.messageFromHeader = this.navActiveNum;
			},
			getNavActiveNum2 : function(data){
//				console.log(data);
				this.$emit("listenToChileEvent3",data);
			}
		},
		components: {
			content2
		},
		watch : {
			"navActiveNum" : "changeActiveNum"
		},
		props : ['navActiveNum'],
	}
</script>
<style>
	@import '/static/css/style.css';
</style>