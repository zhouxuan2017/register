$(function(){var e,s=$("#user"),a=$("#phone"),r=$("#pas"),t=$("#yanzheng"),o=$("#huoqu"),n=$("#hover"),u=$("#user-dis"),l=($("#submit"),5);function h(e){var s=$(e),a=$(e+"-test");if(""!==s.val())return 1;a.html("不能为空!")}function d(e){var s=$(e),a=$(e+"-test");if(""!==s.val())return"#user"===e?/[^\w\u4e00-\u9fa5]|^\d+$/.test(s.val())?(s.addClass("error"),void a.html("用户名仅支持中英文、数字和下划线，且不能为纯数字")):(s.removeClass("error"),a.html(""),1):"#phone"===e?/^[1][3,4,5,7,8,9][0-9]{9}$/.test(s.val())?(s.removeClass("error"),a.html(""),1):(s.addClass("error"),void a.html("手机号码格式不正确")):"#pas"!==e||/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(s.val())?(s.removeClass("error"),a.html(""),1):(s.addClass("error"),void a.html("密码设置不符合要求"));a.html("不能为空")}s.change(function(){d("#user")}),s.focus(function(){u.removeClass("user-d"),u.addClass("user-show")}),s.focusout(function(){u.removeClass("user-show"),u.addClass("user-d"),d("#user")}),a.change(function(){d("#phone")}),a.focusout(function(){d("#phone")}),r.focusout(function(){n.removeClass("hover"),n.addClass("hid"),d("#pas")}),r.click(function(){n.removeClass("hid"),n.addClass("hover")}),t.focusout(function(){d("#yanzheng")}),o.click(function(){console.log("a"),e=setInterval(function(){-1!==l?(o.attr("disabled",!0),o.val("获取中("+l+")秒"),l--):(o.attr("disabled",!0),o.val("获取验证码"),$("#yanzheng-test").html("请求超时，请稍后再试"),clearInterval(e))},1e3)}),$("form").submit(function(e){h("#user")&&h("#phone")&&h("#pas")&&h("#yanzheng")?d("#user")&&d("#phone")&&d("#pas")&&d("#yanzheng")?alert("注册成功！"):(e.preventDefault(),alert("您输入的信息有误，请重新输入！")):(e.preventDefault(),u.removeClass("user-d"),u.addClass("user-show"),s.attr("autofocus",!0),alert("您填入的信息不完善，请重新填！"))})});