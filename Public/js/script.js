$(function(){
   //header sticky
   $(window).on("scroll", function () {
    var scrollBarPosition = $(this).scrollTop();

    if (scrollBarPosition > 150) {
      $(".header-top-wrapper").addClass("sticky");
    } else {
      $(".header-top-wrapper").removeClass("sticky");
    }
  });

  //search bar
  const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
  }
  
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearInput);
});