<template>
	<div class="body_content">
		<div class="w1200">
			<div class="body_content_applyList bgWhite">
				<div class="apply_list_add">
					<a href="javascript:;">
						<p><i class="icon-add"></i>申请列表</p>
					</a>
					<a href="javascript:;">
						<p><i class="icon-apply"></i>新增申请</p>
					</a>
				</div>
				<!--状态栏-->
				<div class="apply_list_state">
					<a href="javascript:;" class="active" style="padding-left: 23px;"><i class="icon-noapply"></i>未提交</a>
					<a href="javascript:;" style="padding-left: 23px;"><i class="icon-waitExamine"></i>待审核</a>
					<a href="javascript:;" style="padding-left: 21px;"><i class="icon-examinePass"></i>审核通过</a>
					<a href="javascript:;" style="padding-left: 16px;"><i class="icon-examineNotPass" style="margin-right: 6px;"></i>审核未通过</a>
				</div>
				<div class="apply_list">
					<!--数据表格-->
					<table border="" cellspacing="0" cellpadding="0" class="apply_list_1">
						<thead>
							<tr>
								<td style="width: 100px;">编号</td>
								<td style="width: 154px;">申请人</td>
								<td style="width: 160px;">申请金额</td>
								<td style="width: 124px;">借款期限</td>
								<td style="width: 110px;">借款利率</td>
								<td style="width: 160px;">申请时间</td>
								<td>操作</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>4</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>5</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>6</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>7</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>8</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>9</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
							<tr>
								<td>10</td>
								<td>吴珊珊</td>
								<td>1000000000</td>
								<td>90天</td>
								<td class="borrow_rate">10%</td>
								<td>2017-08-01</td>
								<td class="table_operation">
									<router-link to="/userCenter/borrower" >查看</router-link>
									<router-link to="/userCenter/borrower" >编辑</router-link>
									<a href="javascript:;">提交审核</a>
								</td>
							</tr>
						</tbody>
					</table>

					<!--分页器-->
					<div class="apply_list_changePage">
						<div class="changePage clearfix">
							<table border="0" cellspacing="0" cellpadding="0" class="apply_list_2">
								<tr>
									<td>
										<a href="javascript:;" class="changePage_btn">上一页</a>
									</td>
									<td>
										<ul class="clearfix">
											<li>
												<a href="javascript:;" class="active">1</a>
											</li>
											<li>
												<a href="javascript:;">2</a>
											</li>
											<li>
												<a href="javascript:;">3</a>
											</li>
											<li>
												<a href="javascript:;">...</a>
											</li>
											<li>
												<a href="javascript:;">19</a>
											</li>
											<li>
												<a href="javascript:;">20</a>
											</li>
										</ul>
									</td>
									<td>
										<a href="javascript:;" class="changePage_btn" style="margin-left: 8px;">下一页</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import divselect from '../../static/js/select';
	export default {
		name: 'content',
		data() {
			return {
				
			}
		},
		beforeUpdate: function() {

		},
		mounted: function() {
			
		},
		methods: {
			
		},
		watch: {
			
		}
	}
</script>
<style>

</style>