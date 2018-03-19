<template>
	<content1></content1>
</template>

<script>
	import content1 from './content';
	export default {
		name: 'content',
		data() {
			return {
				addListShow : this.editListShow
			}
		},
		methods: {
			showApplyLList : function(){
				this.addListShow = !this.addListShow;
			}
		},
		components: {content1}
	}
</script>
<style>

</style>