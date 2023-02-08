import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head><title>home - toodoo</title></head>

<p class="${"text-lg font-bold underline"}">this is a home page with nothing on it</p>`;
});
export {
  Page as default
};
