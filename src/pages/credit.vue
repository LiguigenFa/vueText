<template>
	<!--附件右侧,申请列表-->
	<div>
		<div class="user-title">借款人资产和信用信息</div>
		<!--显示-->
		<div class="borrow-form rightContent_apply" v-show="editListShow11">
			<form action="">
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">房产总价值：</label>
						<input type="text" class="border-none" value="" disabled="disabled" />
					</div>
					<div class="field frt">
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">车辆总价值：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="" class="long-label">机器及库存<br>商品总价值：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="" class="red">累计资产总价值：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">银行负债金额：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">担保贷款金额：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">信用卡负债金额：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">平台负债金额：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="" class="red">负债总金额：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="" class="red">综合负债率：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="" class="long-label">借款人民<br>间借贷金额：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">备注：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt" style="clear:both">
						<label for="" class="long-label">担保人民<br>间借贷金额：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">备注：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt" style="clear:both">
						<label for="" class="long-label">借款人征信<br>被查询次数：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">个人查询次数：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
			</form>
		</div>
		<!--编辑-->
		<div class="borrow-form rightContent_add" v-show="editListShow22">
			<form action="">
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">房产总价值：</label>
						<input type="text" placeholder="请输入房产总价值" value="" />
					</div>
					<div class="field frt">
						<input type="radio" name="house" value="" />无房
					</div>
					<div class="field flt" style="clear:both;">
						<label for="">车辆总价值：</label>
						<input type="text" placeholder="请输入车辆总价值" />
					</div>
					<div class="field frt">
						<input type="radio" name="car" value="" />无车
					</div>
					<div class="field flt" style="clear:both">
						<label for="" class="long-label">机器及库存<br>商品总价值：</label>
						<input type="text" placeholder="请输入机器及库存商品总价值" />
					</div>
					<div class="field frt">
						<label for="" class="red">累计资产总价值：</label>
						<input type="text" placeholder="请输入累计资产总价值" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">银行负债金额：</label>
						<input type="text" placeholder="请输入银行负债金额" />
					</div>
					<div class="field frt">
						<label for="">担保贷款金额：</label>
						<input type="text" placeholder="请输入担保贷款金额" />
					</div>
					<div class="field flt">
						<label for="">信用卡负债金额：</label>
						<input type="text" placeholder="请输入信用卡负债金额" />
					</div>
					<div class="field frt">
						<label for="">平台负债金额：</label>
						<input type="text" placeholder="请输入平台负债金额" />
					</div>
					<div class="field flt">
						<label for="" class="red">负债总金额：</label>
						<input type="text" placeholder="请输入负债总金额" />
					</div>
					<div class="field frt">
						<label for="" class="red">综合负债率：</label>
						<input type="text" placeholder="请输入综合负债率" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="" class="long-label">借款人民<br>间借贷金额：</label>
						<input type="text" placeholder="请输入借款人民间借贷金额" />
					</div>
					<div class="field frt">
						<label for="">备注：</label>
						<input type="text" placeholder="请输入备注" />
					</div>
					<div class="field flt" style="clear:both;">
						<label for="" class="long-label">担保人民<br>间借贷金额：</label>
						<input type="text" placeholder="请输入担保人民间借贷金额" />
					</div>
					<div class="field frt">
						<label for="">备注：</label>
						<input type="text" placeholder="请输入备注" />
					</div>
					<div class="field flt" style="clear:both;">
						<label for="" class="long-label">借款人征信<br>被查询次数：</label>
						<input type="text" placeholder="请输入借款人征信被查询次数" />
					</div>
					<div class="field frt">
						<label for="">个人查询次数：</label>
						<input type="text" placeholder="请输入个人查询次数" />
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
	import divselect from '../../static/js/select'
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
			var a = divselect($(".common-select"));
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