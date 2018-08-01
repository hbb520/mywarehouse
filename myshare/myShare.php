<?php  
require_once "jssdk.php";  
  
//获取到网页授权的access_token  
$appid = "wx46cc5c79783d7441";//   输入公众号、服务号、或者测试号的appid    
$secret = "b00e3da956576ff3bb7a48bae6acdb84";//   输入公众号、服务号、或者测试号的 secret  
  
  
$jssdk = new JSSDK($appid, $secret);  
$signPackage = $jssdk->GetSignPackage();  
  
//此处用于输出得到的数据  用来测试签名证书是否正确   
/* 
echo '   appId:'. $signPackage["appId"].'<br/>'; 
echo '   jsapi_ticket:'. $signPackage["jsapiTicket"].'<br/>'; 
echo '   url:'. $signPackage["url"].'<br/>'; 
echo '   timestamp:'. $signPackage["timestamp"].'<br/>'; 
echo '   nonceStr:'. $signPackage["nonceStr"].'<br/>'; 
echo '   signature：'. $signPackage["signature"]; 
echo '<br/>'; 
echo '<br/>'; 
echo '<br/>'; 
exit; 
*/  
  
?>  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <title></title>  
</head>  
<body>  
  Hello Hello Hello  
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
            'checkJsApi',  
            'onMenuShareTimeline',  
            'onMenuShareAppMessage',  
            'onMenuShareQQ',  
            'onMenuShareWeibo',  
            'onMenuShareQZone',  
        ]  
    });  
  
    wx.ready(function () {  
        // 在这里调用 API  
        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口  
        wx.onMenuShareTimeline({  
            title: '快来!分享朋友圈', // 分享标题  
            link: 'http://www.baidu.com', // 分享链接  
            imgUrl: 'http://img1.3lian.com/img013/v2/4/d/101.jpg', // 分享图标  
            success: function () {  
                // 用户确认分享后执行的回调函数  
            },  
            cancel: function () {  
                // 用户取消分享后执行的回调函数  
            }  
        });  
        //获取“分享给朋友”按钮点击状态及自定义分享内容接口  
        wx.onMenuShareAppMessage({  
            title: ' 微信分享给朋友', // 分享标题  
            desc: '描述一下，可是知道该咋描述你呢？', // 分享描述  
            link: 'http://www.baidu.com', // 分享链接  
            imgUrl: 'http://img1.3lian.com/img013/v2/4/d/101.jpg', // 分享图标  
            type: 'link', // 分享类型,music、video或link，不填默认为link  
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空  
        });  
        wx.onMenuShareQQ({  
            title: 'QQ我要跳转到百度页面了啊！', // 分享标题  
            desc: '描述一下，可是知道该咋描述你呢？', // 分享描述  
            link: 'http://www.baidu.com', // 分享链接  
            imgUrl: 'http://img1.3lian.com/img013/v2/4/d/101.jpg', // 分享图标  
        });  
        wx.onMenuShareQZone({  
            title: 'QZone我要跳转到百度页面了啊！', // 分享标题  
            desc: '描述一下，可是知道该咋描述你呢？', // 分享描述  
            link: 'http://www.baidu.com', // 分享链接  
            imgUrl: 'http://img1.3lian.com/img013/v2/4/d/101.jpg', // 分享图标  
        });  
    });  
</script>  
</html>  