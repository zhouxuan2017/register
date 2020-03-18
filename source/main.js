$(function () {
    //jq获取
    var $user = $('#user'),
        $phone = $('#phone'),
        $pas = $('#pas'),
        $yanzheng = $('#yanzheng'),
        $huoqu = $('#huoqu'),
        $hover = $('#hover'),
        $userDis = $('#user-dis'),
        $submit = $('#submit'),
        num = 5,
        timer;




    //用户名表单里面内容改变后触发
    $user.change(function () {
        test('#user')
    })
    //用户名表单聚焦时触发
    $user.focus(function () {
        $userDis.removeClass('user-d')
        $userDis.addClass('user-show')

    })
    //用户名表单触发后焦点移出触发
    $user.focusout(function () {
        $userDis.removeClass('user-show')
        $userDis.addClass('user-d')
        test('#user')

    })
    //手机号码表单触发后焦点移出触发
    $phone.change(function () {
        test('#phone')
    })
    //手机号码表单移除
    $phone.focusout(function () {
        test('#phone')
    })
    //密码表单触发后焦点移出触发
    $pas.focusout(function () {
        $hover.removeClass('hover')
        $hover.addClass('hid')
        test('#pas')
    })
    //密码表单点击后触发
    $pas.click(function () {
        $hover.removeClass('hid')
        $hover.addClass('hover')
    })
    $yanzheng.focusout(function(){
        test('#yanzheng')
    })
    //点击获取验证码后触发
    $huoqu.click(function () {
        console.log('a')
        timer = setInterval(function () {
            if (num !== -1) {
                $huoqu.attr("disabled", true);
                $huoqu.val('获取中(' + num + ')秒')
                num--;
            }
            else {
                $huoqu.attr("disabled", true);
                $huoqu.val('获取验证码')
                $('#yanzheng-test').html('请求超时，请稍后再试')
                clearInterval(timer)
            }
        }, 1000)

    })

    //点击注册后进行验证
    $('form').submit(function (e) {
   
        if (!isnull('#user') || !isnull('#phone') || !isnull('#pas') || !isnull('#yanzheng')) {
          e.preventDefault();
            $userDis.removeClass('user-d')
            $userDis.addClass('user-show')
            $user.attr("autofocus", true)
            alert('您填入的信息不完善，请重新填！')
        }
        else {
          if(!test('#user')||!test('#phone')||!test('#pas')||!test('#yanzheng'))
           {
             e.preventDefault();
                 alert('您输入的信息有误，请重新输入！')
            }
           else{
                alert('注册成功！')
              
                            }

          }
           
         
    })

    //集中性校验是否有空值
    function isnull(item) {
        var $data1 = $(item),
        $test1 = $(item + '-test');
        if ($data1.val() === '') {
            $test1.html('不能为空!')
            return false;
        }
        return true;
    }

    //验证所有是否合法的函数
    function test(id) {
        var $data = $(id),
            $test = $(id + '-test');
            if ($data.val() === '') {
                $test.html('不能为空')
                return false;
            }

        //判断用户名输入是否正确的表单级别验证
        if (id === '#user') {
            if (/[^\w\u4e00-\u9fa5]|^\d+$/.test($data.val())) {
                $data.addClass('error')
                $test.html('用户名仅支持中英文、数字和下划线，且不能为纯数字')
                return false;
            }
            $data.removeClass('error')
            $test.html('')
            return true;
        }
        // 判断手机号码是否合法的表单验证
        if (id === '#phone') {
            if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test($data.val())) {
                $data.addClass('error')
                $test.html('手机号码格式不正确')
                return false;
            }
            $data.removeClass('error')
            $test.html('')
            return true;
        }
        // 判断密码是否合法的表单验证
        //长度为8~14个字符 字母/数字以及标点符号至少包含2种 不允许有空格、中文
        if (id === '#pas') {
            if (!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/).test($data.val())) {
                $data.addClass('error')
                $test.html('密码设置不符合要求')
                return false;
            }
            $data.removeClass('error')
            $test.html('')
            return true;
        }
        $data.removeClass('error')
        $test.html('')
        return true;
    }
})
