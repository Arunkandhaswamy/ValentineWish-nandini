// ==============================
// Animation Timeline
// ==============================
const animationTimeline = () => {
  const textBox = document.querySelector(".hbd-chatbox");
  const wishHbd = document.querySelector(".wish-hbd");

  // Split text into spans for animation
  textBox.innerHTML = `<span>${textBox.innerText
    .split("")
    .join("</span><span>")}</span>`;

  wishHbd.innerHTML = `<span>${wishHbd.innerText
    .split("")
    .join("</span><span>")}</span>`;

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

  tl.to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .from(".two", 0.4, { opacity: 0, y: 10 })

    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")

    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")

    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })

    .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)

    .to(".four", 0.5, {
      scale: 0.2,
      opacity: 0,
      y: -150,
    }, "+=0.7")

    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-5", 0.7, ideaTextTrans)
    .to(".idea-5", 0.7, ideaTextTransLeave, "+=2")

    .staggerFrom(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: Expo.easeOut,
    }, 0.2)

    .staggerFromTo(".baloons img", 2.5,
      { opacity: 0.9, y: 1400 },
      { opacity: 1, y: -1000 },
      0.2
    )

    .from(".girl-dp", 0.6, {
      scale: 3,
      opacity: 0,
      rotationZ: -30,
    })

    .staggerFrom(".wish-hbd span", 0.6, {
      opacity: 0,
      y: -40,
      rotation: 120,
      ease: Elastic.easeOut.config(1, 0.4),
    }, 0.08)

    .from(".wish h5", 0.5, {
      opacity: 0,
      y: 10,
    })

    .to(".six", 0.5, { opacity: 0 }, "+=2")

    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2);

  // Replay button
  document.getElementById("replay").addEventListener("click", () => {
    tl.restart();
  });
};

// ==============================
// Load customize.json
// ==============================
const fetchData = async () => {
  const response = await fetch("customize.json");
  const data = await response.json();

  Object.keys(data).forEach((key) => {
    const element = document.getElementById(key);

    if (!element) return;

    if (key === "imagePath") {
      element.src = data[key];
    } else {
      element.innerText = data[key];
    }
  });
};

// ==============================
// Start Everything
// ==============================
fetchData().then(animationTimeline);
