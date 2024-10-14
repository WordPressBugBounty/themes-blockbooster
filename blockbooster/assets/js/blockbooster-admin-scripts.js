(function ($) {
  "use strict";
  $("#blockbooster-dismiss-notice").on("click", ".notice-dismiss", function () {
    $.ajax({
      url: blockbooster_admin_localize.ajax_url,
      method: "POST",
      data: {
        action: "blockbooster_dismissble_notice",
        nonce: blockbooster_admin_localize.nonce,
      },
      success: function (response) {
        if (response.success) {
          console.log("Notice dismissed successfully.");
          $("#blockbooster-dismiss-notice").fadeOut(); // Hide the notice
        } else {
          console.log("Failed to dismiss notice:", response.data.message);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
      },
    });
  });
  $("#blockbooster-dashboard-tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();
  $("#blockbooster-dashboard-tabs-nav li").click(function () {
    $("#blockbooster-dashboard-tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
})(jQuery);
