// photo widget by annasthms (jul 23, 2019)

// options
const palette_blog = "paletteworld";
const palette_num = 12; // number of palettes
const palette_tag = ""; // a specific tag to show
const palette_container = "div#palettes"; // container to load the palettes into
const palette_class = "palette"; // the class of the each of the palettes loaded

function acreate(type, attributes = null, html = '') {
  let temp = document.createElement(type);
  if (attributes != null) {
    for (let a in attributes) temp.setAttribute(a, attributes[a]);
  }
  if (html != '') temp.innerHTML = html;
  return temp;
}

let src = "https://" + palette_blog + ".tumblr.com/api/read/json?num=" + palette_num + "&type=photo";
if (palette_tag != "") src += "&tagged=" + palette_tag;
const script = acreate("script", {
  "src": src
});
document.body.appendChild(script);
script.onload = () => {
  const posts = tumblr_api_read["posts"];
  if (script.parentElement != null) script.parentElement.removeChild(script);
  createWidget(posts);
};

function createWidget(posts) {
  const container = document.querySelector(palette_container);

  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];

    // palette container
    const palette = acreate("div", {
      "id": "palette_" + p.id,
      "post-id": p.id,
      "class": palette_class
    });
    container.appendChild(palette);

    // palette permalink
    const permalink = p.url ? acreate("a", {
      "href": p.url,
      "class": palette_class + "_permalink",
      "target": "_blank"
    }) : palette;
    if (p.url) palette.appendChild(permalink);

    // palette image
    const image = acreate("img", {
      "src": p["photo-url-1280"] ? p["photo-url-1280"] : p["photo-url-500"],
      "class": palette_class + "_image"
    });
    permalink.appendChild(image);
  }
}
