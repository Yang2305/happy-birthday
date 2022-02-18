// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady(id, videoID) {
//   player = new YT.Player(id, {
//     height: "500",
//     width: "350",
//     videoId: videoID,
//     playerVars: {
//       playsinline: 1,
//     },
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange,
//     },
//   });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }

// Import the data to customize and insert them into page
// const fetchData = () => {
//   fetch("customize.json")
//     .then((data) => data.json())
//     .then((data) => {
//       dataArr = Object.keys(data);
//       dataArr.map((customData) => {
//         if (data[customData] !== "") {
//           if (customData === "imagePath") {
//             document
//               .querySelector(`[data-node-name*="${customData}"]`)
//               .setAttribute("src", data[customData]);
//           } else {
//             document.querySelector(
//               `[data-node-name*="${customData}"]`
//             ).innerText = data[customData];
//           }
//         }

//         // Check if the iteration is over
//         // Run amimation if so
//         if (dataArr.length === dataArr.indexOf(customData) + 1) {
//           animationTimeline();
//         }
//       });
//     });
// };

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .from(".two-img", 0.3, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .to(".two-img", 0.3, {
      opacity: 0,
      scale: 0.3,
    })
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .from(".three-img", 0.2, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three-img",
      0.1,
      {
        y: 0,
        scale: 0.5,
        opacity: 0,
        skewX: "15deg",
      },
      "+=2"
    )
    .to(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .from(".four-img", 1, {
      opacity: 0,
    })
    .to(
      ".four-img",
      0.1,
      {
        scale: 1,
        opacity: 1,
      },
      "+=2"
    )
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )

    .from(".idea-1", 0.7, ideaTextTrans)
    .from(".idea1-img", 0.5, {
      opacity: 1,
      x: -80,
    })
    .to(".idea1-img", 0.2, { opacity: 0, x: 50 }, "+=1.5")
    .to(".idea-1", 0.7, ideaTextTransLeave)

    .from(".idea-2", 0.7, ideaTextTrans)

    .to(".idea-2", 0.7, ideaTextTransLeave)

    .from(".idea-3", 0.7, ideaTextTrans)

    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .from(".idea3-img", 0.5, {
      opacity: 0,
      skewY: "20deg",
    })
    .to(".idea3-img", 0.2, { opacity: 0 }, "+=1.5")

    .to(".idea-3", 0.7, ideaTextTransLeave)
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .from(".idea5-img", 0.5, {
      opacity: 0,
      skewY: "20deg",
    })
    .to(".idea5-img", 0.2, { opacity: 1 }, "+=1.5")
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".ten p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Run fetch and animation in sequence
// fetchData();

// if (dataArr.length === dataArr.indexOf(customData) + 1) {
animationTimeline();
// }
