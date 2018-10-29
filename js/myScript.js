    
    function resize() {
    var screenW = $(window).width();
    var screenH = $(window).height();

    $(".background").css("width", screenW);
    $(".background").css("height", (screenW*1.7777));
    



    };

    resize();

    window.onresize = function(event) {
        resize();
    }


