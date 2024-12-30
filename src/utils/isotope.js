import Isotope from "isotope-layout";

let iso;
export let currentFilter = "webTemplates";

export function isotopize() {
  const elem = document.querySelector(".portfolio-grid");
  iso = new Isotope(elem, {
    // options
    originLeft: false,
    transitionDuration: 750,
    layoutMode: "cellsByColumn",
    itemSelector: ".portfolio-grid-item",
    layoutMode: "fitRows",
    category: "[data-category]",
  });

  arrange();
}

const filterFns = {
  all: function (itemElem) {
    return "*";
  },
  webTemplates: function (itemElem) {
    return itemElem.getAttribute("data-category") === "webTemplates";
  },
  projects: function (itemElem) {
    return itemElem.getAttribute("data-category") === "projects";
  },
  games: function (itemElem) {
    return itemElem.getAttribute("data-category") === "games";
  },
  logos: function (itemElem) {
    return itemElem.getAttribute("data-category") === "logos";
  },
};

export function arrange(filter = "webTemplates") {
  currentFilter = filter;
  const filterValue = filterFns[currentFilter];
  iso.arrange({ filter: filterValue });
}
