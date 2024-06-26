console.log(
  "-- developed by Richard Martins Tenorio, checkout my github https://gitub.com/richmartins or my web site https://tenorio.dev --"
);

$(document).ready(function () {
  $(".center").slick({
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  });

  $("#project-filter").on("change", function () {
    let cat = this.value;
    $(".card").each(function (i) {
      if (cat == "all" || this.className.includes(cat)) {
        $(this).removeClass("hidden");
        $(this).parent("a").css("position", "static");
      } else {
        $(this).addClass(" hidden");
        $(this).parent("a").css("position", "absolute");
      }
    });
  });

  if ($(window).width() > 800) {
    let modal = $(".modal");
    let toggleModal = $(".project-bottom-imgs > img");
    toggleModal.on("click", function () {
      $(this).next("div").css("display", "block");
    });
    modal.on("click", function () {
      modal.css("display", "none");
    });
  }

  $("#icon-burger").on("click", function () {
    if ($(".header-barnav")[0].className.includes("toggled")) {
      $(".header-barnav")[0].classList.remove("toggled");
    } else {
      $(".header-barnav")[0].classList.add("toggled");
    }
  });
});
