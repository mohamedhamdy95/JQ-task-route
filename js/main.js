// ======================== Side Bar ==========================

$(".sidebar .open").click(function () {
  //   let boxWidth = $(".ineerside").outerWidth();
  $(".sidebar").css({ left: "0px" });
});
$(".sidebar .closs").click(function () {
  let boxWidth = $(".ineerside").outerWidth();
  $(".sidebar").css({ left: `-${boxWidth}` });
});

// ======================== acordion ==========================
$(".title").click(function () {
  $(".content").not($(this).next()).slideUp(300);
  $(this).next().slideToggle(300);
});

// ======================== counter ==========================

let countDownDate = new Date("August 24, 2023 24:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let diffTime = countDownDate - now;

  let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  $(".day").html(`${days} Day`);
  $(".hour").html(`${hours} hour`);
  $(".min").html(`${minutes} min`);
  $(".sec").html(`${seconds} sec`);

  if (distance < 0) {
    clearInterval(x);
    $(".row").html(`EXPIRED`);
  }
}, 1000);

// ======================== text area ==========================
let textLength = 100;

$("textarea").keydown(function () {
  textLength--;
  if (textLength <= 0) {
    $(".text").text(`${textLength} your available character finished`);
    $("textarea").attr("disabled", "true");
  } else {
    $(".text").text(`${textLength} Characyer Reamining`);
  }
  console.log(textLength);
});
