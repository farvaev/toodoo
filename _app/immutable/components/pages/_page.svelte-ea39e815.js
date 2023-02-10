import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, C as noop } from "../../chunks/index-46550db7.js";
function create_fragment(ctx) {
  let head;
  let title;
  let t0;
  let t1;
  let p;
  let t2;
  return {
    c() {
      head = element("head");
      title = element("title");
      t0 = text("home - toodoo");
      t1 = space();
      p = element("p");
      t2 = text("this is a home page with nothing on it");
      this.h();
    },
    l(nodes) {
      head = claim_element(nodes, "HEAD", {});
      var head_nodes = children(head);
      title = claim_element(head_nodes, "TITLE", {});
      var title_nodes = children(title);
      t0 = claim_text(title_nodes, "home - toodoo");
      title_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "this is a home page with nothing on it");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-lg font-bold underline");
    },
    m(target, anchor) {
      insert_hydration(target, head, anchor);
      append_hydration(head, title);
      append_hydration(title, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(head);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
