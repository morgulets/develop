$(document).ready(function () {
  // slider;
  $(".wrapper").slick({
    arrows:false,
    dots:true
  });
  // burger menu
  $("#burger").click(function () {
    if (!$("#nav").hasClass("active")) {
      $("#nav").addClass("active");
      $(".active").css("left", "0px");
      $("ul").css("display", "block");
    } else {
      $("#nav").removeClass("active");
      $(".active").css("left", "-999px");
      $("ul").css("display", "none");
    }
  });
  // убираем окно меню при скролле страницы на мобильном экране
  $(window).on("scroll", function () {
    if ($("#nav").hasClass("active")) {
      $("#nav").removeClass("active");
      $(".active").css("left", "-999px");
      $("ul").css("display", "none");
    } else {
    }
  });
  // fixed header
  let intro = $("#intro");
  let header = $("#header");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("active-fixed");
    } else {
      header.removeClass("active-fixed");
    }
  }
  // делаем скролл к определенным блокам при нажатии на меню(nav)

  $("[data-scroll]").click(function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffSet = $(elementId).offset().top;
    console.log(elementOffSet);

    $("body, html").animate(
      {
        scrollTop: elementOffSet - 70,
      },
      10
    );
  });

  //При скролле страницы зажигаем кнопки в шапке\\
$(window).scroll(function () {
  let $tracked = $(".tracked");
  $tracked.each(function (i, el) {
    let top = $(el).offset().top - 500;
    let bottom = top + $(el).height();
    let scroll = $(window).scrollTop();
    let id = $(el).attr("id");
    if (scroll > top && scroll < bottom) {
      $("a.link-active").removeClass("link-active");
      $('a[data-scroll="#' + id + '"]').addClass("link-active");
    }
  });
});
});
