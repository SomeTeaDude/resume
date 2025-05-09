export const colors = [
  {
    name: "gold",
    value: "golden",
    mngThmClass: "bg-golden gold:bg-golden/70",
    tickClass: "gold:opacity-100",
  },
  {
    name: "love",
    value: "lovely",
    mngThmClass: "bg-lovely love:bg-lovely/70",
    tickClass: "love:opacity-100",
  },
  {
    name: "nature",
    value: "natury",
    mngThmClass: "bg-natury nature:bg-natury/70",
    tickClass: "nature:opacity-100",
  },
  {
    name: "ice",
    value: "icey",
    mngThmClass: "bg-icey ice:bg-icey/70",
    tickClass: "ice:opacity-100",
  },
];

export const themeColors = ["love", "gold", "nature", "ice"];

function changeHeroBg(mode) {
  if (mode === "light") {
    document
      .querySelector(".fader")
      .style.setProperty("--myColor1", "rgba(244, 244, 246, 0.5)");
    document
      .querySelector(".fader")
      .style.setProperty("--myColor2", "rgba(244, 244, 246, 1)");
  } else if (mode === "dark") {
    document
      .querySelector(".fader")
      .style.setProperty("--myColor1", "rgba(30, 30, 40, 0.65)");
    document
      .querySelector(".fader")
      .style.setProperty("--myColor2", "rgba(30, 30, 40, 1)");
  } else {
    document
      .querySelector(".fader")
      .style.setProperty("--myColor1", "rgba(244, 244, 246, 0.5)");
    document
      .querySelector(".fader")
      .style.setProperty("--myColor2", "rgba(244, 244, 246, 1)");
  }
}

export function makeDark() {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
  changeHeroBg("dark");
}

export function makeLight() {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
  changeHeroBg("light");
}

export function changeThemeColor(color) {
  if (!themeColors.includes(color)) {
    localStorage.setItem("themeColor", "gold");
    document.body.setAttribute("data-theme", "gold");
  } else {
    localStorage.setItem("themeColor", color);
    document.body.setAttribute("data-theme", color);
  }
}

function setThemeByDevice() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    makeDark();
    changeThemeColor("gold");
  } else {
    makeLight();
    changeThemeColor("love");
  }
}

export function setTheme() {
  const themes = ["light", "dark"];

  if (
    !localStorage.getItem("theme") ||
    !localStorage.getItem("themeColor") ||
    !themes.includes(localStorage.getItem("theme")) ||
    !themeColors.includes(localStorage.getItem("themeColor"))
  ) {
    setThemeByDevice();
  } else {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    document.body.setAttribute(
      "data-theme",
      localStorage.getItem("themeColor")
    );
    changeHeroBg(localStorage.getItem("theme"));
  }
}
