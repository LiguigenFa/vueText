<template>
	<!--附件右侧,申请列表-->
	<div class="">
		<div class="user-title">借款信息</div>
		<!--显示-->
		<div class="borrow-form rightContent_add" v-show="editListShow11">
			<form action="">
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">借款金额：</label>
						<input type="text" class="border-none" value="1000元" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">借款期限：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">利息费率：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">还款方式：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">申请时间：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">贷款性质：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">贷款用途：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">还款资金来源：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">平台贷款金额：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">客户经理：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">客户经理分公司：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">客户来源：</label>
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
						<label for="">借款金额：</label>
						<input type="text" placeholder="请输入借款金额" class="short-input" value="1000" />&nbsp;&nbsp;元
					</div>
					<div class="field frt">
						<label for="">借款期限：</label>
						<div class="common-select short-select">
							<cite class="choiceSelect">请选择</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">1月</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">2月</a>
								</li>
								<li>
									<a href="javascript:;" selectid="3">3月</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
					<div class="field flt" style="clear:both">
						<label for="">利息费率：</label>
						<input type="text" placeholder="请输入利息费率" class="short-input" />&nbsp;&nbsp;%
					</div>
					<div class="field frt">
						<label for="">还款方式：</label>
						<div class="common-select short-select">
							<cite class="choiceSelect">请选择</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">1月</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">2月</a>
								</li>
								<li>
									<a href="javascript:;" selectid="3">3月</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
					<div class="field flt relative">
						<label for="">申请时间：</label>
						<input type="text" placeholder="请输入申请时间" class="applyTime" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">贷款性质：</label>
						<input type="text" placeholder="请输入贷款性质" />
					</div>
					<div class="field frt">
						<label for="">贷款用途：</label>
						<input type="text" placeholder="请输入贷款用途" />
					</div>
					<div class="field flt">
						<label for="">还款资金来源：</label>
						<input type="text" placeholder="请输入还款资金来源" />
					</div>
					<div class="field frt">
						<label for="">平台贷款金额：</label>
						<input type="text" placeholder="请输入平台贷款金额" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">客户经理：</label>
						<input type="text" placeholder="请输入客户经理" />
					</div>
					<div class="field frt">
						<label for="">客户经理分公司：</label>
						<div class="common-select short-select">
							<cite class="choiceSelect">请选择</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">1月</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">2月</a>
								</li>
								<li>
									<a href="javascript:;" selectid="3">3月</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
					<div class="field user-radio flt">
						<label for="">客户来源：</label>
						<input type="text" placeholder="请输入客户来源" />
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
	import divselect from '../../static/js/select';
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