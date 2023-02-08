import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head><title>about - toodoo</title></head>

<p class="${"text-lg underline"}">and this is about page</p>`;
});
export {
  Page as default
};
