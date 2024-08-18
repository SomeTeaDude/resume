export function scrollTo(id) {
  const el = document.getElementById(id);

  el.scrollIntoView({ behavior: "smooth" });
}
