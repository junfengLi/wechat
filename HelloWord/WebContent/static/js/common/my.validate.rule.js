jQuery.validator.addMethod("chinese", function(value, element) {
	var chinese = /^[\u4e00-\u9fa5]+$/;
	return this.optional(element) || (chinese.test(value));
}, "只能输入中文");
jQuery.validator.addMethod("chrnum", function(value, element) {
	var chrnum = /^([a-zA-Z0-9]+)$/;
	return this.optional(element) || (chrnum.test(value));
}, "只能输入数字和字母(字符A-Z, a-z, 0-9)");
jQuery.validator
		.addMethod(
				"ip",
				function(value, element) {
					var ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
					return this.optional(element)
							|| (ip.test(value) && (RegExp.$1 < 256
									&& RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256));
				}, "Ip地址格式错误");
jQuery.validator.addMethod("qq", function(value, element) {
	var tel = /^[1-9]\d{4,9}$/;
	return this.optional(element) || (tel.test(value));
}, "qq号码格式错误");
jQuery.validator.addMethod("zipCode", function(value, element) {
	var tel = /^[0-9]{6}$/;
	return this.optional(element) || (tel.test(value));
}, "邮政编码格式错误");
jQuery.validator.addMethod("phone", function(value, element) {
	var tel = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
	return this.optional(element) || (tel.test(value));
}, "电话号码格式错误");
jQuery.validator.addMethod("mobile", function(value, element) {
	var length = value.length;
	var mobile = /^(((13[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1}))+\d{8})$/
	return this.optional(element) || (length == 11 && mobile.test(value));
}, "手机号码格式错误");

jQuery.validator.addMethod('isOnlyLoginName', function(loginName, element) {
	var ok = this.optional(element) || (/^([a-zA-Z0-9_]+)$/.test(loginName));
    if (ok)  //通过了上面的2个验证后启动ajax验证，注意一定要为同步的
        $.ajax({
        	url : contants.basePath + '/user/isOnly',
    		data : "loginName=" + loginName,
            async: false, /////////关键，设置为同步
            type: 'POST',
            dataType: 'json',
            success: function (data) {
                ok = (data.result === true) ? true : false;
            },
            error: function (xhr) {
                ok = false;
            }
        });
    return ok;
}, "登录名已被使用");
jQuery.extend(jQuery.validator.messages, {
    required:"此项必填。",
    remote:"请修正此项。",
    email:"请输入一个合法的电子邮件地址。",
    url:"请输入合法网址。",
    date:"请输入合法日期。",
    dateISO:"请输入合法日期（ISO格式）。",
    number:"请输入合法数字。",
    digits:"请只输入数字。",
    creditcard:"请输入一个有效的信用卡号。",
    equalTo:"请再次输入相同的值。",
    maxlength:jQuery.validator.format("请输入不超过{0}个字符。"),
    minlength:jQuery.validator.format("请输入至少{0}个字符。"),
    rangelength:jQuery.validator.format("请输入介于{0}和{1}个长的字符值。"),
    range:jQuery.validator.format("请输入介于{0}和{1}的值。"),
    max:jQuery.validator.format("请输入一个小于或等于{0}的值。"),
    min:jQuery.validator.format("请输入一个大于或等于{0}的值。")
});

