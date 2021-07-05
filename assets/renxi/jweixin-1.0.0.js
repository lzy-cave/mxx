<script>
        function autoPlayVideo(){
            wx.config({
                debug:false,
                appId:"",
                timestamp:1,
                nonceStr:"",
                signature:"",
                jsApiList:[]
            });
            wx.ready(function(){
                var autoplayVideo=document.getElementById("audio");
                autoplayVideo.play()
            })
        };
        autoPlayVideo();
</script>