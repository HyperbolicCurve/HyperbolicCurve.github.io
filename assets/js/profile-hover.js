const profileImage = document.querySelector(".profile img");
const profileScript = document.currentScript;
if (profileImage && profileScript) {
  const original = profileImage.getAttribute("src");
  const hover = profileScript.dataset.hoverSrc;
  new Image().src = hover;
  // Drop responsive variants so the plain src is always the one displayed.
  profileImage.removeAttribute("srcset");
  profileImage.parentElement.querySelectorAll("source").forEach((source) => source.remove());
  profileImage.addEventListener("mouseenter", () => profileImage.setAttribute("src", hover));
  profileImage.addEventListener("mouseleave", () => profileImage.setAttribute("src", original));
}
