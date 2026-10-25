---
layout: about
title: About
permalink: /
subtitle: ""
profile:
  align: right
  image: portrait.jpg
  image_circular: false
selected_papers: false
social: true
announcements:
  enabled: false
  scrollable: false
  limit: 4
latest_posts:
  enabled: false
---

I am at [Huazhong University of Science and Technology](https://english.hust.edu.cn/) (HUST). During my undergraduate studies, I was fortunate to be advised by **Xiang Bai** and **[Dingkang Liang](https://dk-liang.github.io/)**.

My research interests lie in **3D scene understanding, spatial intelligence, and embodied AI**, with a particular interest in **machine learning systems (MLSys)**. I am interested in building intelligent systems that can understand the physical world and act efficiently within it.

My recent work spans spatial understanding with [VEGA-3D](https://h-embodvis.github.io/VEGA-3D/), real-time robotic manipulation with [TurboVLA](https://arxiv.org/abs/2607.27205), and training-free policy acceleration with [RePIC](https://openreview.net/forum?id=p6thn2PhEo). I also work on multi-camera 3D perception and inference optimization through research and competitions.

I am currently a research intern at **DiDi Voyager**, and previously interned at **Baidu**.

[Email](mailto:wuxianjin633@gmail.com) · [Google Scholar](https://scholar.google.com/citations?user=_xCbYaEAAAAJ) · [GitHub](https://github.com/HyperbolicCurve) · [ORCID](https://orcid.org/0009-0008-2111-6535)

<section class="home-section" id="news">
  <h2>News</h2>
  {% include news.liquid limit=true %}
</section>

<section class="home-section" id="publications">
  <h2>Selected Publications</h2>
  {% include selected_papers.liquid %}
</section>

<section class="home-section" id="honors">
  <h2>Honors &amp; awards</h2>
  {% capture honors %}{% include honors.md %}{% endcapture %}
  {{ honors | markdownify }}
</section>

<section class="home-section" id="experience">
  <h2>Industrial Experience</h2>
  {% include experience.liquid %}
</section>

<section class="home-section" id="education">
  <h2>Education</h2>
  {% include education.liquid %}
</section>

<section class="home-section" id="service">
  <h2>Academic service</h2>
  <p><strong>Reviewer:</strong> Pattern Recognition (PR), European Conference on Computer Vision (ECCV), and International Conference on Learning Representations (ICLR).</p>
</section>

<script defer src="{{ '/assets/js/github-stars.js' | relative_url }}"></script>
