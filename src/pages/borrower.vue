<template>
	<!--附件右侧,申请列表-->
	<div class="">
		<div class="user-title">借款人信息</div>
		<!--显示-->
		<div class="borrow-form  rightContent_add" v-show="editListShow11">
			<form action="">
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">姓名：</label>
						<input type="text" class="border-none" value="吴xx" disabled="disabled" />
					</div>
					<div class="field frt">
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">身份证号码：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">身份证地址：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">文化水平：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">联系电话：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">营业地址：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">婚烟状况：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">配偶姓名：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">配偶身份证号码：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">是否为担保人：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">担保人姓名：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">担保人身份证号码：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">和借款人关系：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">备注：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
				</div>
				<div class="form-part clearfix">
					<p class="title">常用联系人</p>
					<div class="field flt">
						<label for="">手机号码1：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">和借款人关系：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">手机号码2：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">和借款人关系：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">手机号码1：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">和借款人关系：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field flt">
						<label for="">手机号码2：</label>
						<input type="text" class="border-none" disabled="disabled" />
					</div>
					<div class="field frt">
						<label for="">和借款人关系：</label>
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
						<label for="">姓名：</label>
						<input type="text" placeholder="请输入姓名" value="" />
					</div>
					<div class="field user-radio radio-distance frt">
						<input type="radio" name="sex" />男&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="sex" />女
					</div>
					<div class="field flt" style="clear:both">
						<label for="">身份证号码：</label>
						<input type="text" placeholder="请输入身份证号码" />
					</div>
					<div class="field frt">
						<label for="">身份证地址：</label>
						<input type="text" placeholder="请输入身份证地址" />
					</div>
					<div class="field flt">
						<label for="">文化水平：</label>
						<div class="common-select">
							<cite class="choiceSelect" >初中及以下</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">初中及以下</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">高中</a>
								</li>
								<li>
									<a href="javascript:;" selectid="3">专科</a>
								</li>
								<li>
									<a href="javascript:;" selectid="4">本科</a>
								</li>
								<li>
									<a href="javascript:;" selectid="5">硕士及以上</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
					<div class="field frt">
						<label for="">联系电话：</label>
						<input type="text" placeholder="请输入联系电话" />
					</div>
					<div class="field flt">
						<label for="">营业地址：</label>
						<input type="text" placeholder="请输入营业地址" />
					</div>
					<div class="field frt">
						<label for="">婚烟状况：</label>
						<div class="common-select short-select">
							<cite class="choiceSelect" >未婚</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">已婚</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">未婚</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">配偶姓名：</label>
						<input type="text" placeholder="请输入配偶姓名" />
					</div>
					<div class="field frt">
						<label for="">配偶身份证号码：</label>
						<input type="text" placeholder="请输入配偶身份证号码" />
					</div>
					<div class="field user-radio flt">
						<label for="">是否为担保人：</label>
						<input type="radio" name="db" />是&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="db" />否
					</div>
				</div>
				<div class="form-part clearfix">
					<div class="field flt">
						<label for="">担保人姓名：</label>
						<input type="text" placeholder="请输入担保人姓名" />
					</div>
					<div class="field frt">
						<label for="">担保人身份证号码：</label>
						<input type="text" placeholder="请输入担保人身份证号码" />
					</div>
					<div class="field flt">
						<label for="">和借款人关系：</label>
						<div class="common-select short-select">
							<cite class="choiceSelect" >配偶</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">朋友</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">父子</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
					<div class="field frt">
						<label for="">备注：</label>
						<input type="text" placeholder="请输入备注" />
					</div>
				</div>
				<div class="form-part clearfix">
					<p class="title">常用联系人</p>
					<div class="field flt">
						<label for="">手机号码1：</label>
						<input type="text" placeholder="请输入手机号码" />
					</div>
					<div class="field frt">
						<label for="">和借款人关系：</label>
						<div class="common-select">
							<cite class="choiceSelect" >配偶</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">朋友</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">父子</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
					<div class="field flt">
						<label for="">手机号码2：</label>
						<input type="text" placeholder="请输入手机号码" />
					</div>
					<div class="field frt">
						<label for="">和借款人关系：</label>
						<div class="common-select">
							<cite class="choiceSelect" >配偶</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">朋友</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">父子</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
					<div class="field flt">
						<label for="">手机号码1：</label>
						<input type="text" placeholder="请输入手机号码" />
					</div>
					<div class="field frt">
						<label for="">和借款人关系：</label>
						<div class="common-select">
							<cite class="choiceSelect" >配偶</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">朋友</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">父子</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
					<div class="field flt">
						<label for="">手机号码2：</label>
						<input type="text" placeholder="请输入手机号码" />
					</div>
					<div class="field frt">
						<label for="">和借款人关系：</label>
						<div class="common-select">
							<cite class="choiceSelect" >配偶</cite>
							<ul class="div-loan-time_ul">
								<li>
									<a href="javascript:;" selectid="1">朋友</a>
								</li>
								<li>
									<a href="javascript:;" selectid="2">父子</a>
								</li>
							</ul>
						</div>
						<input name="" type="hidden" value="" class="input-select" />
					</div>
				</div>
				<div class="user-action form-part">
					<button type="button" class="pure-button save-btn">保存</button>
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