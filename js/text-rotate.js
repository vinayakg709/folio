
function textRotate(classSelector,animationTime,ease,intervalLength,color){
	
    var spanHeight = $(classSelector+" > p").height();
    $(classSelector).parent().css("height",spanHeight+"px")
    $(".sentence > p").css("display","inline");
    $("head").append("<style>.sentence p {display: inline-block;}.sentence span {overflow: hidden;display: inline-block;position: relative;-webkit-transform: translateY(20%);-ms-transform: translateY(20%);transform: translateY(20%);}.sentence span div {display: inline-block;}.sentence span div p {display: block;background-color: transparent;top: 0;}.sentence span div p span {top: 0;height: auto;display: inline;}</style>")
    if(color != ""){
        $(classSelector+" > p").css("color", color);
    }
    var iniElmWidth = $(classSelector+" > p:nth-child(1) > span").width();
    $(classSelector).css("width",iniElmWidth);
    $(classSelector+" > p").each(function(){
        var newValue = $(this).html().split(" ").join("&nbsp;");
        $(this).html(newValue);
    });
    var numOfWords = $(classSelector+" > p").length;
    var count = 1;
    $(classSelector).css("will-change","transform");
    $(classSelector).css("transform", "translateY(0)");
    $(classSelector).css("transition", "transform "+animationTime+"s "+ease+", width "+animationTime+"s "+ease);
    setInterval(function(){
        if(count < numOfWords){
            count++;
            var elmWidth = $(classSelector+" > p:nth-child("+count+") > span").width();
            $(classSelector).css("width",elmWidth);
            var move = (count - 1)*spanHeight;	$(classSelector).css("transform","translateY(-"+move+"px)");
        } else if (count >= numOfWords){	
            count = 1;
            var elmWidth = $(classSelector+" > p:nth-child(1) > span").width();
            $(classSelector).css("width",elmWidth);
            $(classSelector).css("transform","translateY(0px)");
        }
        },intervalLength);
    }
    
    textRotate(".rotate",1,"ease",2000,"#FF4646");
    
    