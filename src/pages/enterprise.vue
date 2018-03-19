<template>
	<div>
		<div class="user-title">企业信息</div>
		<!--显示-->
		<div class="borrow-form rightContent_add" v-show="editListShow11">
			<form action="">
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">企业名称：</label>
						<input type="text" class="border-none" value="" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">企业类型：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">成立时间：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">法人代表：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">注册地址：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">店铺名称：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">店铺所属平台：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">经营产品介绍：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">销售模式：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">总销售收入：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">营业利润比：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">员工人数：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">员工平均工资水平：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">年均水电费用：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
			</form>
		</div>
		<!--编辑-->
		<div class="borrow-form rightContent_apply" v-show="editListShow22">
			<form action="">
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">企业名称：</label>
						<input type="text" placeholder="请输入企业名称" value="" />
					</div>
					<div class="field frt">
						<label for="">企业类型：</label>
						<input type="text" placeholder="请输入企业类型" value="" />
					</div>
					<div class="field flt">
						<label for="">成立时间：</label>
						<input type="text" placeholder="请输入成立时间" />
					</div>
					<div class="field frt">
						<label for="">法人代表：</label>
						<input type="text" placeholder="请输入法人代表" />
					</div>
					<div class="field flt">
						<label for="">注册地址：</label>
						<input type="text" placeholder="请输入注册地址" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">店铺名称：</label>
						<input type="text" placeholder="请输入店铺名称" />
					</div>
					<div class="field frt">
						<label for="">店铺所属平台：</label>
						<input type="text" placeholder="请输入店铺所属平台" />
					</div>
					<div class="field flt">
						<label for="">经营产品介绍：</label>
						<input type="text" placeholder="请输入经营产品介绍" />
					</div>
					<div class="field frt">
						<label for="">销售模式：</label>
						<input type="text" placeholder="请输入销售模式" />
					</div>
					<div class="field flt">
						<label for="">总销售收入：</label>
						<input type="text" placeholder="请输入总销售收入" />
					</div>
					<div class="field frt">
						<label for="">营业利润比：</label>
						<input type="text" placeholder="请输入营业利润比" />
					</div>
					<div class="field flt">
						<label for="">员工人数：</label>
						<input type="text" placeholder="请输入员工人数" />
					</div>
					<div class="field frt">
						<label for="">员工平均工资水平：</label>
						<input type="text" placeholder="请输入员工平均工资水平" />
					</div>
					<div class="field flt">
						<label for="">年均水电费用：</label>
						<input type="text" placeholder="请输入年均水电费用" />
					</div>
				</div>
				<div class="user-action form-part">
					<button class="pure-button save-btn">保存</button>
					<button class="pure-button submit-btn">提交审核</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
//	import divselect from '../../static/js/select'
	export default {
		name: 'content',
		data() {
			return {
				editListShow11 : this.editListShow1,
				editListShow22 : this.editListShow2
			}
		},
		beforeUpdate : function(){
			
		},
		mounted: function() {
//			var a = divselect($(".common-select"));
		},
		methods: {
			changeShow : function(){
				this.editListShow11 = this.editListShow1;
				this.editListShow22 = this.editListShow2;
			}
		},
		watch : {
			"editListShow1" : "changeShow",
			"editListShow2" : "changeShow"
		},
		props : ['editListShow1','editListShow2']
	}
</script>
<style>

</style>