import { CountUp } from "../../node_modules/countup.js/dist/countUp.min.js";
window.onscroll = function () {
  let HappyCountUp = new CountUp('icon-blue',9341);
  if (!HappyCountUp.error) {
    HappyCountUp.start();
  } else {
    console.error(HappyCountUp.error);
  }
  let richTextCountUp = new CountUp('icon-orange', 542);
    if (!richTextCountUp.error) {
      richTextCountUp.start();
    } else {
      console.error(richTextCountUp.error)
    }

    let supportCountUp = new CountUp('icon-green', 11201);
      if (!supportCountUp.error) {
        supportCountUp.start();
      } else {
        console.error(supportCountUp.error);
      }

  let managersCountUp = new CountUp('icon-red', 287);
    if (!managersCountUp.error) {
      managersCountUp.start();
    } else {
      console.error(managersCountUp.error);
    }
}

// AOS init -->

  AOS.init();