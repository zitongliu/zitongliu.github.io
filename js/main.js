$(document).ready(function(){
  $(function(){


    // ===========================================================================
    //   Start of intro typed.js
    // ===========================================================================
      $("#intro-text").typed(
        {
          strings: ["Hi there, I'm Steve.", "I'm a full stack web developer.","I'm interested in new and innovative technologies.", "I want to build products that are... ", "... creative...","... user friendly...", "... and solve real world problems."],
          // typing speed
          typeSpeed: 20,
          // time before typing starts
          startDelay: 0,
          // backspacing speed
          backSpeed: 0,
          // time before backspacing
          backDelay: 800,
          // loop
          loop: true,
          // false = infinite
          loopCount: false,

      });

  });

  // ===========================================================================
  //   Start of about
  // ===========================================================================


  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // // Intro
  // var pinIntroScene = new ScrollMagic.Scene({
  //   triggerElement: '.fullwidth-intro',
  //   triggerHook: 0,
  //   duration: '10%'
  // })
  // .setPin('.fullwidth-intro', {pushFollowers: false})
  // .addIndicators({
  //
  // })
  // .addTo(controller);

  // About card
  // build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '#about',
  // duration: '90%',
  triggerHook: 0.3
})
.setClassToggle('.about-card', 'transition-about-card') // add class to project01
.addIndicators({
  name: 'About Transition',
  colorTrigger: 'black',
  colorStart: '#75C695',
  colorEnd: 'pink'
}) // this requires a plugin
.addTo(controller);


// ===========================================================================
//   Start of intro test
// ===========================================================================
  // // parallax scene
  // var slideParallaxScene = new ScrollMagic.Scene({
  //   triggerElement: '#ticTacThrones',
  //   triggerHook: 0.2,
  //   duration: '100%'
  // })
  // .setTween(TweenMax.from('.ticTacThrones-bcg',1, {y: '-40%', ease:Power0.easeNone}))
  // .addIndicators({
  //   name: 'TicTacThrones Transition',
  //   colorTrigger: 'black',
  //   colorStart: '#75C695',
  //   colorEnd: 'pink'
  // })
  // .addTo(controller);



  // ===========================================================================
  //   Start of Projects ScrollMagic
  // ===========================================================================


  // Init ScrollMagic
  // var controller = new ScrollMagic.Controller();

  // Scene 1 - pin the second section
  var pinScene01 = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#slide01 .pin-wrapper')
  .addTo(controller)
  ;

  // Scene 2 - pin the third section
  var pinScene02 = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('#slide02 .pin-wrapper')
  .addTo(controller)
  ;

  // Scene 3 - pin the fourth section
  var pinScene03 = new ScrollMagic.Scene({
    triggerElement: '#slide02',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('#slide03 .pin-wrapper')
  .addTo(controller)
  ;

  // Scene 4 - pin the fifth section
  var pinScene04 = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#slide04 .pin-wrapper')
  .addTo(controller)
  ;









});
