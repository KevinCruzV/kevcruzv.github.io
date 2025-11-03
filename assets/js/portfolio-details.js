(function () {
  const id = new URLSearchParams(location.search).get("id");
  const item = id && window.PORTFOLIO && window.PORTFOLIO[id];
  if (!item) { location.href = "index.html#portfolio"; return; }

  const titleEl = document.querySelector(".portfolio-description h2");
  if (titleEl) titleEl.textContent = item.title;
  const firstP = document.querySelector(".portfolio-description p");
  if (firstP) firstP.innerHTML = item.description;

  const sliderEl = document.querySelector(".portfolio-details-slider");
  const wrapper = sliderEl?.querySelector(".swiper-wrapper");
  const configEl = sliderEl?.querySelector(".swiper-config");

  if (wrapper && configEl) {
    wrapper.innerHTML = item.images.map(src =>
      `<div class="swiper-slide"><img src="${src}" alt=""></div>`
    ).join("");

    const cfg = JSON.parse(configEl.textContent.trim());
    if (sliderEl.swiper) sliderEl.swiper.destroy(true, true);
    sliderEl.swiper = new Swiper(sliderEl, cfg);
  }

  
  const info = document.querySelector(".portfolio-info ul");
  if (info) {
    info.innerHTML = `
      <li><strong>Category</strong> ${item.category}</li>
      <li><strong>Client</strong> ${item.client}</li>
      <li><strong>Project date</strong> ${new Date(item.date).toLocaleDateString()}</li>
      <li><strong>Project URL</strong> <a href="${item.url}" target="_blank" rel="noopener">${item.url}</a></li>
      <li><a href="${item.url}" target="_blank" rel="noopener" class="btn-visit align-self-start">Visit Website</a></li>
    `;
  }
})();
