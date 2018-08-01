<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx46cc5c79783d7441", "b00e3da956576ff3bb7a48bae6acdb84");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      'onMenuShareTimeline',
      'onMenuShareAppMessage'
    ]
  });
  wx.ready(function () {
    // 在这里调用 API
    wx.ready(function () {
          // 2. 分享接口
          // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
    //      document.querySelector('#onMenuShareAppMessage').onclick = function () {
            wx.onMenuShareAppMessage({
              title: '信阳21分钟前发生了一件大事',
              desc: '信阳社会大哥被打，老婆惨遭摧残，大哥一怒之下将所有混混......',
              link: 'http://www.baidu.com',
              imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
              trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                alert('用户点击发送给朋友');
              },
              success: function (res) {
                alert('已分享');
              },
              cancel: function (res) {
                alert('已取消');
              },
              fail: function (res) {
                alert(JSON.stringify(res));
              }
            });

    //      };

          // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
          document.querySelector('#onMenuShareTimeline').onclick = function () {
            wx.onMenuShareTimeline({
              title: '信阳21分钟前发生了一件大事',
              link: 'http://pmm.people.com.cn/c?d=people&i=z1862,803482,12609&u=http://sp.yqsc.org/t75qfiinkhoe.html?id=wtcps30icrdlqp&fr=groupmessage',
              imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
              trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                alert('用户点击分享到朋友圈');
              },
              success: function (res) {
                alert('已分享');
              },
              cancel: function (res) {
                alert('已取消');
              },
              fail: function (res) {
                alert(JSON.stringify(res));
              }
            });
            //alert('已注册获取“分享到朋友圈”状态事件');
          };

        });

        wx.error(function (res) {
          alert(res.errMsg);
        });
  });
</script>
</html>
