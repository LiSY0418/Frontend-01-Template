var lis = document.getElementById("container").children

var result = [];

for (let li of lis) {
    if (li.getAttribute('data-tag').match(/css/))
        result.push({
            name: li.children[1].innerText,
            url: li.children[1].children[0].href
        })
}
console.log(result)

console.log(JSON.stringify(result, null, " "))
    //     标准的JSON文件
    //  {
    //   "name": "Ethiopic Layout Requirements",
    //   "url": "https://www.w3.org/TR/2020/WD-elreq-20200526/"
    //  },
    //  {
    //   "name": "CSS Box Sizing Module Level 4",
    //   "url": "https://www.w3.org/TR/2020/WD-css-sizing-4-20200526/"
    //  },
    //  {
    //   "name": "Requirements for Chinese Text Layout中文排版需求",
    //   "url": "https://www.w3.org/TR/2020/WD-clreq-20200521/"
    //  },
    //  {
    //   "name": "CSS Display Module Level 3",
    //   "url": "https://www.w3.org/TR/2020/CR-css-display-3-20200519/"
    //  },
    //  {
    //   "name": "CSS Positioned Layout Module Level 3",
    //   "url": "https://www.w3.org/TR/2020/WD-css-position-3-20200519/"
    //  },
    //  {
    //   "name": "CSS Text Decoration Module Level 4",
    //   "url": "https://www.w3.org/TR/2020/WD-css-text-decor-4-20200506/"
    //  },
    //  {
    //   "name": "CSS Ruby Layout Module Level 1",
    //   "url": "https://www.w3.org/TR/2020/WD-css-ruby-1-20200429/"
    //  },
    //  {
    //   "name": "CSS Text Module Level 3",
    //   "url": "https://www.w3.org/TR/2020/WD-css-text-3-20200429/"
    //  },
    //  {
    //   "name": "CSS Box Alignment Module Level 3",
    //   "url": "https://www.w3.org/TR/2020/WD-css-align-3-20200421/"
    //  },
    //  {
    //   "name": "CSS Box Model Module Level 3",
    //   "url": "https://www.w3.org/TR/2020/WD-css-box-3-20200421/"
    //  },
    //  {
    //   "name": "CSS Box Model Module Level 4",
    //   "url": "https://www.w3.org/TR/2020/WD-css-box-4-20200421/"
    //  },
    //  {
    //   "name": "CSS Color Adjustment Module Level 1",
    //   "url": "https://www.w3.org/TR/2020/WD-css-color-adjust-1-20200402/"
    //  },
    //  {
    //   "name": "Media Queries Level 5",
    //   "url": "https://www.w3.org/TR/2020/WD-mediaqueries-5-20200318/"
    //  },
    //  {
    //   "name": "CSS Speech Module",
    //   "url": "https://www.w3.org/TR/2020/CR-css-speech-1-20200310/"
    //  },
    //  {
    //   "name": "CSS Conditional Rules Module Level 4",
    //   "url": "https://www.w3.org/TR/2020/WD-css-conditional-4-20200303/"
    //  },
    //  {
    //   "name": "CSS Transforms Module Level 2",
    //   "url": "https://www.w3.org/TR/2020/WD-css-transforms-2-20200303/"
    //  },
    //  {
    //   "name": "CSS Color Module Level 5",
    //   "url": "https://www.w3.org/TR/2020/WD-css-color-5-20200303/"
    //  },
    //  {
    //   "name": "CSS Scroll Anchoring Module Level 1",
    //   "url": "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20200211/"
    //  },
    //  {
    //   "name": "Resize Observer",
    //   "url": "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/"
    //  },
    //  {
    //   "name": "Timed Text Markup Language 2 (TTML2) (2nd Edition)",
    //   "url": "https://www.w3.org/TR/2020/CR-ttml2-20200128/"
    //  },
    //  {
    //   "name": "CSS Basic User Interface Module Level 4",
    //   "url": "https://www.w3.org/TR/2020/WD-css-ui-4-20200124/"
    //  },
    //  {
    //   "name": "CSS Writing Modes Level 3",
    //   "url": "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/"
    //  },
    //  {
    //   "name": "CSS Grid Layout Module Level 2",
    //   "url": "https://www.w3.org/TR/2019/WD-css-grid-2-20191203/"
    //  },
    //  {
    //   "name": "CSS Spatial Navigation Level 1",
    //   "url": "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/"
    //  },
    //  {
    //   "name": "CSS Containment Module Level 1",
    //   "url": "https://www.w3.org/TR/2019/REC-css-contain-1-20191121/"
    //  },
    //  {
    //   "name": "CSS Fonts Module Level 4",
    //   "url": "https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/"
    //  },
    //  {
    //   "name": "CSS Text Module Level 4",
    //   "url": "https://www.w3.org/TR/2019/WD-css-text-4-20191113/"
    //  },
    //  {
    //   "name": "CSS Containment Module Level 2",
    //   "url": "https://www.w3.org/TR/2019/WD-css-contain-2-20191111/"
    //  },
    //  {
    //   "name": "CSS Color Module Level 4",
    //   "url": "https://www.w3.org/TR/2019/WD-css-color-4-20191105/"
    //  },
    //  {
    //   "name": "CSS Properties and Values API Level 1",
    //   "url": "https://www.w3.org/TR/2019/WD-css-properties-values-api-1-20191025/"
    //  },
    //  {
    //   "name": "CSS Multi-column Layout Module Level 1",
    //   "url": "https://www.w3.org/TR/2019/WD-css-multicol-1-20191015/"
    //  },
    //  {
    //   "name": "CSS Images Module Level 3",
    //   "url": "https://www.w3.org/TR/2019/CR-css-images-3-20191010/"
    //  },
    //  {
    //   "name": "CSS Lists Module Level 3",
    //   "url": "https://www.w3.org/TR/2019/WD-css-lists-3-20190817/"
    //  },
    //  {
    //   "name": "CSS Text Decoration Module Level 3",
    //   "url": "https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/"
    //  },
    //  {
    //   "name": "CSS Generated Content Module Level 3",
    //   "url": "https://www.w3.org/TR/2019/WD-css-content-3-20190802/"
    //  },
    //  {
    //   "name": "CSS Writing Modes Level 4",
    //   "url": "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/"
    //  },
    //  {
    //   "name": "CSS Table Module Level 3",
    //   "url": "https://www.w3.org/TR/2019/WD-css-tables-3-20190727/"
    //  },
    //  {
    //   "name": "CSS Syntax Module Level 3",
    //   "url": "https://www.w3.org/TR/2019/CR-css-syntax-3-20190716/"
    //  },
    //  {
    //   "name": "CSS Animation Worklet API",
    //   "url": "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/"
    //  },
    //  {
    //   "name": "CSS Overscroll Behavior Module Level 1",
    //   "url": "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/"
    //  },
    //  {
    //   "name": "CSS Values and Units Module Level 3",
    //   "url": "https://www.w3.org/TR/2019/CR-css-values-3-20190606/"
    //  },
    //  {
    //   "name": "CSS Intrinsic & Extrinsic Sizing Module Level 3",
    //   "url": "https://www.w3.org/TR/2019/WD-css-sizing-3-20190522/"
    //  },
    //  {
    //   "name": "CSS Easing Functions Level 1",
    //   "url": "https://www.w3.org/TR/2019/CR-css-easing-1-20190430/"
    //  },