import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-red-500 text-lg font-semibold font-serif"}">toodoo app</h1>

<div><a href="${escape(base, true) + "/"}" class="${"underline hover:no-underline"}">home</a>
	<a href="${escape(base, true) + "/about"}" class="${"underline hover:no-underline"}">about</a></div>

${slots.default ? slots.default({}) : ``}

<p class="${"text-sm text-gray-500"}">Powered by <a href="${"https://kit.svelte.dev"}">SvelteKit</a></p>`;
});
export {
  Layout as default
};
