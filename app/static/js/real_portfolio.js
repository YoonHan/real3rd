$(function() {
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
});
