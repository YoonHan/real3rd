// Set initial positions.
// And drag-bar animation.
$(function() {
    var section_before_after = $('#before-after');
    var div_wrapper_after = $('.wrapper-after');
    var div_view_after = $('.view-after');
    var drag_bar = $('#drag-bar');
    var div_height = $("#before-after").height();

    div_wrapper_after.width(section_before_after.width());
    // Set initial position of drag-bar
    drag_bar.css({left: div_view_after.width() + 'px'});

    $(window).bind('resize', function() {
        div_wrapper_after.width(section_before_after.width());
        drag_bar.css({left: div_wrapper_after.width() / 2 + 'px'});
        div_view_after.width(section_before_after.width() / 2 + 'px');
    });

    // add dragging function to drag-bar
    var dragbar = null,
        x_pos = 0;                       // store the mouse position X

    function drag_attach(elem) {
        dragbar = elem;
        document.getElementById('drag-bar').style.transition = 'none';  // remove transition effect
        document.getElementsByClassName('view-after')[0].style.transition = 'none';
    }

    function move_drag_bar(event) {
        x_pos = event.pageX;
        x_pos = x_pos - 4;
        if (dragbar !== null) {
            drag_bar.css({left: x_pos + 'px'});
            div_view_after.css({width: x_pos + 'px'});
        }
    }

    function drag_detach() {
        dragbar = null;
        // restore transition effect
        document.getElementById('drag-bar').style.transition = 'left 1s ease-out';
        document.getElementsByClassName('view-after')[0].style.transition = 'width 1s ease-out';
    }

    drag_bar.mousedown(function() {
        drag_attach(this);
        return false;
    });

    $(document).mousemove(function(event) {
        move_drag_bar(event);
    })

    $(document).mouseup(function() {
        drag_detach();
    });

    var width = $(window).width();
    if(width <= 767) { //for mobile
      $(window).bind('click', function(event) {
          var mouse_pos = event.pageX;
          var mouse_pos_y = event.pageY;
          if(mouse_pos_y < div_height){
            drag_bar.css({left: mouse_pos + 'px'});
            div_view_after.css({width: mouse_pos + 'px'});
          }
      });

      $('.logo-real').attr('src','../static/res/img/logo-normal.png');
    } else {
      $(window).bind('click', function(event) {
          var mouse_pos = event.pageX;
          var mouse_pos_y = event.pageY;
          if(mouse_pos_y < div_height){
            drag_bar.css({left: mouse_pos + 'px'});
            div_view_after.css({width: mouse_pos + 'px'});

            // Change .icon-real logo
            setTimeout(function()
            {
                if( (div_view_after.width() - 15) <= 50) {
                    $('.logo-real').attr('src','../static/res/img/logo-normal.png');
                }
                else {
                    $('.logo-real').attr('src','../static/res/img/logo-white.png');
                }
            }, 1000);
          }
      });

      // scroll
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $("#header-wrapper").addClass("scrolling");
            $(".logo-real").attr("src", "../static/res/img/logo-normal.png");
        } else {
            $("#header-wrapper").removeClass("scrolling");
            $(".logo-real").attr("src", "../static/res/img/logo-white.png");
        }
      });
    }
    // Position drag-bar and view-after

    // scroll
    $('a[href^="/#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
      $('.topnav').removeClass('responsive');
	  });
    // END scroll

    // portfoliocards
    $(".card_bg").mouseover(function() {
        $(this).css("opacity", ".9");
    });
    $(".card_bg").mouseout(function() {
        $(this).css("opacity", "0");
    });
    // END porfoliocards

    // termbar
    $(".tab_content").hide();
    $(".tab_content:last").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
       //  $(this).addClass("active").css("color", "darkred");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
    // END termbar

    // supporter
    // END supporter
});
