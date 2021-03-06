<%@page import="com.web.commons.util.ConfigUtil"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%@ taglib uri="/WEB-INF/tld/tool.tld" prefix="tool" %>
<%@page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<jsp:include page="../../include/css-js.jsp" />
</head>
<body>
<div class="row">
	<table class="tableForm">
			<tr >
				<td width="25%" class="titleTd " >关键词：</td>
				<td   >
				${keyword.keyword }
				</td>
			</tr>
			<tr >
				<td class="titleTd" width="20%">标题：<font color="red">*</font></td>
				<td  width="70%" >${messageImg.title }</td>
			</tr>		
			<c:if test="${messageImg.issite == '1' }">
			<tr >
				<td class="titleTd" width="20%">已关联微网站：<font color="red">*</font></td>
				<td  width="70%" id="cancleMenu-td">[<a href="###" onclick="cancleMenu('${messageImg.id}')"><span style="color:blue;"> 取消关联  </span></a>]</td>
			</tr>						
			</c:if>
			<tr>
			<td class="titleTd">封图：</td>
			<td >
				<div style="padding-right:10px;float:left;">
					<img id="photoImg" height="80" 
					style="display: block;"
					<c:choose>
				 		<c:when test="${not empty accessory}">   
					    	src="${accessory.url}" 
					  	</c:when>
					  	<c:otherwise>   
					    	src="${ctx }/static/images/wechat/wechat_photo.png" 
					  	</c:otherwise> 
					</c:choose>
					/></div>
					
			</td>	
			</tr>
			<tr>
				<td class="titleTd">简介：</td>
				<td >${messageImg.description }</td>
			</tr>
			<tr>
				<td class="titleTd">外链地址：</td>
				<td >${messageImg.seturl }</td>
			</tr>
			<tr >
				<td class="titleTd">上次修改时间：</td>
				<td  >${tool:getFormatDateTime(messageImg.updatetime )}</td>
			</tr>	
			<tr class="content-box">
				<td colspan="2"  ><div class="wysiwyg-editor" id="editor1" contenteditable="false">${messageImg.content }</div></td>
			</tr>
		</table>
	<div class="frame_close">
		<button class="btn btn-info" onclick="parent.closeFrame()" type="button"> 关闭</button>
	</div>
</div><!-- /.row -->
<jsp:include page="../../include/footer-js.jsp" />
<script>
var layer;
layui.use(['layer', 'form'], function(){
	layer = layui.layer;
});
$(function(){
});
function cancleMenu(id){
	var loadIndex = layer.load();
	$.post("${ctx}/keyword/cancleMenu",{id:id},function(data){
		layer.close(loadIndex);
		if (data.success) {
			layer.msg("取消关联成功");
			$("#cancleMenu-td").html("已取消关联");
		} else {
			layer.alert('取消关联失败，请刷新后重试！');
		}
	},'json');
	layer.close(index);
}
</script>
</body>
</html>
