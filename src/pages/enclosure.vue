<template>
	<!--附件右侧,申请列表-->
	<div class="">
		<div class="user-title">附件</div>
		<div class="rightContent_apply" v-show="editListShow11">
			<!--附件1-->
			<div class="enclosure_inputMessage">
				<p class="enclosure_inputMessage_step"><span class="sameColor1">附件1：</span><span class="sameColor2">借款人信息</span></p>
				<div class="samePl clearfix">
					<img index="../../../../static/assets/img3/no-img.png" src="../../static/assets/img3/no-img.png" alt="" class="borrowpel_imgMessage noImg" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
				</div>
			</div>
			<!--附件2-->
			<div class="enclosure_inputMessage">
				<p class="enclosure_inputMessage_step"><span class="sameColor1">附件2：</span><span class="sameColor2">资产信息</span></p>
				<div class="samePl clearfix">
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
				</div>
			</div>
			<!--附件3-->
			<div class="enclosure_inputMessage">
				<p class="enclosure_inputMessage_step"><span class="sameColor1">附件3：</span><span class="sameColor2">店铺经营信息</span></p>
				<div class="samePl clearfix">
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
					<img index="../../static/assets/img3/cat.png" src="../../static/assets/img3/cat.png" alt="" class="borrowpel_imgMessage" />
				</div>
			</div>
		</div>

		<!--附件右侧，新增列表-->
		<div class="rightContent_add" style="display: none;" v-show="editListShow22">
			<!--附件1-->
			<div class="enclosure_inputMessage">
				<p class="enclosure_inputMessage_step"><span class="sameColor1">附件1：</span><span class="sameColor2">借款人信息</span></p>
				<div class="samePl clearfix">
					<a href="javascript:;" class="dragSub flt">
						<i class="icon-jiahao"><label for="choiceLocalImg1" class="labelFileImg"></label></i>拖动图片至此处上传
						<img index src="" id="" class="getLocalImg" style="display: none;" />
					</a>
					<a href="javascript:;" class="selectfile">
						<input type="file" class="choiceLocalImg flt" value="选择文件" id="choiceLocalImg1" style="background: none;" />选择文件
					</a>
					<form action="" method="post" class="clearfix flt">
						<table border="" cellspacing="0" cellpadding="0" class="fileTabel flt">
							<thead>
								<tr>
									<td style="width: 266px;">文件</td>
									<td style="width: 84px;">大小</td>
									<td style="width: 180px;">上传状态</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody>
								<tr class="exampleTr">
									<td>借款人、担保人身份证照、结婚证</td>
									<td>0</td>
									<td>未上传</td>
									<td>
										<a href="javascript:;" class="fileTabel_btn sub">上传</a>
										<a href="javascript:;" class="fileTabel_btn">删除</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="subAndDelete clearfix flt">
							<a href="javascript:;" class="subAll flt">上传全部</a>
							<a href="javascript:;" class="deleteAll flt">删除全部</a>
						</div>
					</form>

				</div>
			</div>
			<!--附件2-->
			<div class="enclosure_inputMessage">
				<p class="enclosure_inputMessage_step"><span class="sameColor1">附件2：</span><span class="sameColor2">资产信息</span></p>
				<div class="samePl clearfix">
					<a href="javascript:;" class="dragSub flt" id="getDragImg">
						<i class="icon-jiahao"><label for="choiceLocalImg2" class="labelFileImg"></label></i>拖动图片至此处上传
						<img src="" id="" class="getLocalImg" style="display: none;" />
					</a>
					<a href="javascript:;" class="selectfile">
						<input type="file" class="choiceLocalImg flt" value="选择文件" id="choiceLocalImg2" style="background: none;" />选择文件
					</a>
					<form action="" method="post" class="clearfix flt">
						<table border="" cellspacing="0" cellpadding="0" class="fileTabel flt">
							<thead>
								<tr class="">
									<td style="width: 266px;">文件</td>
									<td style="width: 84px;">大小</td>
									<td style="width: 180px;">上传状态</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody>
								<tr class="exampleTr">
									<td>借款人、担保人身份证照、结婚证</td>
									<td>0</td>
									<td>未上传</td>
									<td>
										<a href="javascript:;" class="fileTabel_btn sub">上传</a>
										<a href="javascript:;" class="fileTabel_btn">删除</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="subAndDelete clearfix flt">
							<a href="javascript:;" class="subAll flt">上传全部</a>
							<a href="javascript:;" class="deleteAll flt">删除全部</a>
						</div>
					</form>
				</div>
			</div>
			<!--附件3-->
			<div class="enclosure_inputMessage">
				<p class="enclosure_inputMessage_step"><span class="sameColor1">附件3：</span><span class="sameColor2">店铺经营信息</span></p>
				<div class="samePl clearfix">
					<a href="javascript:;" class="dragSub flt" id="getDragImg">
						<i class="icon-jiahao"><label for="choiceLocalImg3" class="labelFileImg"></label></i>拖动图片至此处上传
						<img src="" id="" class="getLocalImg" style="display: none;" />
					</a>
					<a href="javascript:;" class="selectfile">
						<input type="file" class="choiceLocalImg flt" value="选择文件" id="choiceLocalImg3" style="background: none;" />选择文件
					</a>
					<form action="" method="post" class="clearfix flt">
						<table border="" cellspacing="0" cellpadding="0" class="fileTabel flt">
							<thead>
								<tr class="">
									<td style="width: 266px;">文件</td>
									<td style="width: 84px;">大小</td>
									<td style="width: 180px;">上传状态</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody>
								<tr class="exampleTr">
									<td>借款人、担保人身份证照、结婚证</td>
									<td>0</td>
									<td>未上传</td>
									<td>
										<a href="javascript:;" class="fileTabel_btn sub">上传</a>
										<a href="javascript:;" class="fileTabel_btn">删除</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="subAndDelete clearfix flt">
							<a href="javascript:;" class="subAll flt">上传全部</a>
							<a href="javascript:;" class="deleteAll flt">删除全部</a>
						</div>
					</form>
				</div>
			</div>
			<!--附件4-->
			<div class="enclosure_inputMessage">
				<p class="enclosure_inputMessage_step"><span class="sameColor1">附件4：</span><span class="sameColor2">借款人信息</span></p>
				<div class="samePl clearfix">
					<a href="javascript:;" class="dragSub flt" id="getDragImg">
						<i class="icon-jiahao"><label for="choiceLocalImg4" class="labelFileImg"></label></i>拖动图片至此处上传
						<img src="" id="" class="getLocalImg" style="display: none;" />
					</a>
					<a href="javascript:;" class="selectfile">
						<input type="file" class="choiceLocalImg flt" value="选择文件" id="choiceLocalImg4" style="background: none;" />选择文件
					</a>
					<form action="" method="post" class="clearfix flt">
						<table border="" cellspacing="0" cellpadding="0" class="fileTabel flt">
							<thead>
								<tr class="">
									<td style="width: 266px;">文件</td>
									<td style="width: 84px;">大小</td>
									<td style="width: 180px;">上传状态</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody>
								<tr class="exampleTr">
									<td>借款人、担保人身份证照、结婚证</td>
									<td>0</td>
									<td>未上传</td>
									<td>
										<a href="javascript:;" class="fileTabel_btn sub">上传</a>
										<a href="javascript:;" class="fileTabel_btn">删除</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="subAndDelete clearfix flt">
							<a href="javascript:;" class="subAll flt">上传全部</a>
							<a href="javascript:;" class="deleteAll flt">删除全部</a>
						</div>
					</form>
				</div>
			</div>
			<div class="saveAndSub">
				<a href="javascript:;">保存</a>
				<a href="javascript:;" class="active">提交审核</a>
			</div>
		</div>
	</div>
</template>
<script>
	import lightBox from '../../static/js/jquery.lightbox-0.5';
	import lookImg from '../../static/assets/scripts/enclosure';
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
			lightBox();
			lookImg();
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