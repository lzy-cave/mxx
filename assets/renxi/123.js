//����
function music(){
    var oMusic=document.getElementById("music");
    var Audio=document.getElementsByTagName("audio")[0];

     Audio.addEventListener("ended",function(event){
        oMusic.setAttribute("src","//pic1.qiyipic.com/common/20180315/zSmusicCloase_03.png");
    },false);

    // ���� iosϵͳ ΢��
    if(typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function"){
        Audio.play();

    }else{
      /*�����ͻ������¼� WeixinJSBridgeReady*/
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

    // ����safari
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