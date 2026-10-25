document.querySelectorAll("[data-github-stars]").forEach(async (element) => {
  const repository = element.dataset.githubStars;
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`);
    if (!response.ok) return;
    const data = await response.json();
    if (Number.isInteger(data.stargazers_count)) {
      element.textContent = data.stargazers_count.toLocaleString("en-US");
    }
  } catch {
    // Keep the last verified count if the public API cannot be reached.
  }
});
