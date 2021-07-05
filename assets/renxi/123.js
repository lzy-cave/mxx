//音乐
function music(){
    var oMusic=document.getElementById("music");
    var Audio=document.getElementsByTagName("audio")[0];

     Audio.addEventListener("ended",function(event){
        oMusic.setAttribute("src","//pic1.qiyipic.com/common/20180315/zSmusicCloase_03.png");
    },false);

    // 兼容 ios系统 微信
    if(typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function"){
        Audio.play();

    }else{
      /*监听客户端抛事件 WeixinJSBridgeReady*/
      if(document.addEventListener){

          document.addEventListener("WeixinJSBridgeReady", function(){
                    Audio.play();
          }, false);
      }else if(document.attachEvent){

          document.attachEvent("WeixinJSBridgeReady", function(){
              Audio.play();

          });

          document.attachEvent("onWeixinJSBridgeReady", function(){

             Audio.play(); 

          });

        }

    }

    // 兼容safari
      var voiceStatu = true;
        document.addEventListener("touchstart",function(e){
            if(voiceStatu){
                Audio.play();
                voiceStatu = false;
            }
        }, false);


    oMusic.addEventListener("touchend",function(event){
        if(Audio.paused){
            Audio.play();
            this.setAttribute("class","play");
            this.setAttribute("src","//pic2.qiyipic.com/common/20180315/zSmusic_03.png");
        }else{
            Audio.pause();
            this.setAttribute("class","");
            this.setAttribute("src","//pic1.qiyipic.com/common/20180315/zSmusicCloase_03.png");
        }
    },false);


}