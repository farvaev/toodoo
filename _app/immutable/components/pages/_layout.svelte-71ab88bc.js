import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, F as update_slot_base, G as get_all_dirty_from_scope, H as get_slot_changes, f as transition_in, t as transition_out } from "../../chunks/index-46550db7.js";
import { b as base } from "../../chunks/paths-9be677aa.js";
const app = "";
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let div;
  let a0;
  let t2;
  let t3;
  let a1;
  let t4;
  let t5;
  let t6;
  let p;
  let t7;
  let a2;
  let t8;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      h1 = element("h1");
      t0 = text("toodoo app");
      t1 = space();
      div = element("div");
      a0 = element("a");
      t2 = text("home");
      t3 = space();
      a1 = element("a");
      t4 = text("about");
      t5 = space();
      if (default_slot)
        default_slot.c();
      t6 = space();
      p = element("p");
      t7 = text("Powered by ");
      a2 = element("a");
      t8 = text("SvelteKit");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "toodoo app");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      a0 = claim_element(div_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "home");
      a0_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      a1 = claim_element(div_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "about");
      a1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t5 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      t6 = claim_space(nodes);
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t7 = claim_text(p_nodes, "Powered by ");
      a2 = claim_element(p_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t8 = claim_text(a2_nodes, "SvelteKit");
      a2_nodes.forEach(detach);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-red-500 text-lg font-semibold font-serif");
      attr(a0, "href", base + "/");
      attr(a0, "class", "underline hover:no-underline");
      attr(a1, "href", base + "/about");
      attr(a1, "class", "underline hover:no-underline");
      attr(a2, "href", "https://kit.svelte.dev");
      attr(p, "class", "text-sm text-gray-500");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, a0);
      append_hydration(a0, t2);
      append_hydration(div, t3);
      append_hydration(div, a1);
      append_hydration(a1, t4);
      insert_hydration(target, t5, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t6, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t7);
      append_hydration(p, a2);
      append_hydration(a2, t8);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      if (detaching)
        detach(t5);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(p);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
