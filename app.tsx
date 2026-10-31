import { Fragment, jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Plus, Minus, Terminal, GitBranch, Wrench, Layers3, Workflow, Circle } from "lucide-react";
const navItems = [{ label: "Home", href: "#home" }, { label: "Features", href: "#features" }, { label: "Roadmap", href: "#roadmap" }, { label: "FAQ", href: "#faq" }];
const features = [
  { num: "01", icon: Terminal, title: "Terminal first", copy: "A coding assistant designed around terminal-based development. Your tools, your environment, your flow." },
  { num: "02", icon: Wrench, title: "Developer freedom", copy: "A tool that puts you in control of your workflow\u2014without subscriptions, paywalls, or lock-in." },
  { num: "03", icon: GitBranch, title: "Open source", copy: "Transparent development, inspectable source, and a project shaped in the open with its community." },
  { num: "04", icon: Workflow, title: "MCP support", copy: "Connecting to external tools and MCP servers is part of the direction ForgeCode is being built toward." },
  { num: "05", icon: Layers3, title: "Flexible workflow", copy: "An adaptable development experience, made to fit different projects and the way you like to work." }
];
const roadmap = [
  { id: "01", title: "Core experience", status: "In development", kind: "active", detail: "The foundations of a thoughtful, terminal-first coding assistant are in development." },
  { id: "02", title: "MCP connectivity", status: "Planned", kind: "planned", detail: "MCP server connectivity is on the roadmap, opening a path to connect external tools." },
  { id: "03", title: "Public source release", status: "Planned", kind: "planned", detail: "The source will be made publicly available. No repository link is available yet." },
  { id: "04", title: "First public release", status: "Date to be announced", kind: "future", detail: "A public release date has not been announced. No dates are being promised before they're ready." }
];
const faqs = [
  ["Will ForgeCode really be free forever?", "Yes. Free forever is a core intention of ForgeCode. There will be no paid plans, subscriptions, or paywalls."],
  ["Will ForgeCode be open source?", "Yes. Open source is a core commitment. Public source access is planned, but the source release has not happened yet."],
  ["When will ForgeCode be released?", "ForgeCode is planned to be released on December 12, 2026."],
  ["Will ForgeCode support MCP servers?", "MCP connectivity is a planned direction. It is not presented as an available feature yet."],
  ["Can I contribute to ForgeCode?", "Community contributions are part of the open-source vision. Contribution details will be shared when the public source is available."],
  ["Where can I download ForgeCode?", "ForgeCode is not available to download yet. Download information will be shared when a public release is ready."]
];
function Brand({ small = false }) {
  return /* @__PURE__ */ jsx("a", { className: "brand " + (small ? "brand-small" : ""), href: "#home", "aria-label": "ForgeCode home", children: [
    /* @__PURE__ */ jsx("span", { className: "brand-mark-image", "aria-hidden": "true", children: /* @__PURE__ */ jsx("img", { src: "favicon.png", alt: "" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 28,
      columnNumber: 203
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 28,
      columnNumber: 149
    }, this),
    /* @__PURE__ */ jsx("span", { children: [
      "forge",
      /* @__PURE__ */ jsx("span", { className: "brand-code", children: "code" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 28,
        columnNumber: 252
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 28,
      columnNumber: 241
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 28,
    columnNumber: 59
  }, this);
}
function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) setActive(e.target.id);
    }), { rootMargin: "-30% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "topbar", children: /* @__PURE__ */ jsx("div", { className: "nav-inner", children: [
    /* @__PURE__ */ jsx(Brand, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 29,
      columnNumber: 419
    }, this),
    /* @__PURE__ */ jsx("nav", { className: open ? "nav-links open" : "nav-links", "aria-label": "Main navigation", children: [
      navItems.map((item) => /* @__PURE__ */ jsx("a", { className: active === item.href.slice(1) ? "nav-link active" : "nav-link", href: item.href, onClick: () => setOpen(false), children: item.label }, item.label, false, {
        fileName: "<stdin>",
        lineNumber: 29,
        columnNumber: 527
      }, this)),
      /* @__PURE__ */ jsx("a", { className: "nav-cta", href: "#release", onClick: () => setOpen(false), children: [
        "Get started ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 29,
          columnNumber: 760
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 29,
        columnNumber: 680
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 29,
      columnNumber: 427
    }, this),
    /* @__PURE__ */ jsx("button", { className: "menu-toggle", "aria-label": open ? "Close menu" : "Open menu", "aria-expanded": open, onClick: () => setOpen(!open), children: open ? /* @__PURE__ */ jsx(X, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 29,
      columnNumber: 926
    }, this) : /* @__PURE__ */ jsx(Menu, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 29,
      columnNumber: 931
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 29,
      columnNumber: 795
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 29,
    columnNumber: 392
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 29,
    columnNumber: 365
  }, this);
}
function ForgeVisual() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.55], [0, reduce ? 0 : 30]);
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, reduce ? 1 : 1.12]);
  const lift = useTransform(scrollYProgress, [0, 0.55], [0, reduce ? 0 : -18]);
  const outerShift = useTransform(scrollYProgress, [0, 0.55], [0, reduce ? 0 : 7]);
  const gearShift = useTransform(scrollYProgress, [0, 0.55], [0, reduce ? 0 : -6]);
  const innerShift = useTransform(scrollYProgress, [0, 0.55], [0, reduce ? 0 : 4]);
  const glow = useTransform(scrollYProgress, [0, 0.55], [0.4, reduce ? 0.4 : 0.95]);
  return /* @__PURE__ */ jsx(motion.div, { className: "forge-scene", style: { rotate, scale, y: lift }, "aria-label": "An animated precision-engineered forge mechanism", role: "img", children: [
    /* @__PURE__ */ jsx("div", { className: "scene-shadow" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 717
    }, this),
    /* @__PURE__ */ jsx("div", { className: "machine", children: [
      /* @__PURE__ */ jsx("div", { className: "halo-ring" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 773
      }, this),
      /* @__PURE__ */ jsx(motion.div, { className: "outer-ring", style: { x: outerShift, y: outerShift }, children: [
        /* @__PURE__ */ jsx("span", { className: "etch etch-one" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 872
        }, this),
        /* @__PURE__ */ jsx("span", { className: "etch etch-two" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 905
        }, this),
        /* @__PURE__ */ jsx("span", { className: "bolt bolt-a" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 938
        }, this),
        /* @__PURE__ */ jsx("span", { className: "bolt bolt-b" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 969
        }, this),
        /* @__PURE__ */ jsx("span", { className: "bolt bolt-c" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1e3
        }, this),
        /* @__PURE__ */ jsx("span", { className: "bolt bolt-d" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1031
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 801
      }, this),
      /* @__PURE__ */ jsx(motion.div, { className: "gear-ring", style: { x: gearShift, y: gearShift }, children: /* @__PURE__ */ jsx("div", { className: "gear-cut" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1143
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1075
      }, this),
      /* @__PURE__ */ jsx(motion.div, { className: "inner-ring", style: { x: innerShift, y: innerShift }, children: [
        /* @__PURE__ */ jsx("div", { className: "inner-track" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1254
        }, this),
        /* @__PURE__ */ jsx("div", { className: "core-frame", children: [
          /* @__PURE__ */ jsx("div", { className: "core-glass" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 30,
            columnNumber: 1312
          }, this),
          /* @__PURE__ */ jsx(motion.div, { className: "core-light", style: { opacity: glow } }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 30,
            columnNumber: 1341
          }, this),
          /* @__PURE__ */ jsx("div", { className: "core-cross core-cross-h" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 30,
            columnNumber: 1400
          }, this),
          /* @__PURE__ */ jsx("div", { className: "core-cross core-cross-v" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 30,
            columnNumber: 1442
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1284
        }, this),
        /* @__PURE__ */ jsx("span", { className: "pin pin-1" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1490
        }, this),
        /* @__PURE__ */ jsx("span", { className: "pin pin-2" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1519
        }, this),
        /* @__PURE__ */ jsx("span", { className: "pin pin-3" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1548
        }, this),
        /* @__PURE__ */ jsx("span", { className: "pin pin-4" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1577
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1183
      }, this),
      /* @__PURE__ */ jsx("div", { className: "orbit orbit-a" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1619
      }, this),
      /* @__PURE__ */ jsx("div", { className: "orbit orbit-b" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1651
      }, this),
      /* @__PURE__ */ jsx("div", { className: "center-emblem", children: [
        /* @__PURE__ */ jsx("span", { children: "F" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1714
        }, this),
        /* @__PURE__ */ jsx("i", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 1728
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1683
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 748
    }, this),
    /* @__PURE__ */ jsx("div", { className: "scene-label label-top", children: [
      /* @__PURE__ */ jsx("span", { className: "live-dot" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1783
      }, this),
      " PRECISION / 001"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 1744
    }, this),
    /* @__PURE__ */ jsx("div", { className: "scene-label label-bottom", children: [
      "CORE ASSEMBLY ",
      /* @__PURE__ */ jsx("span", { children: "\u2014" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1889
      }, this),
      " 00:01"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 1833
    }, this),
    /* @__PURE__ */ jsx("div", { className: "scene-coordinate", children: [
      "45\xB0 08\u2032 04\u2033 N",
      /* @__PURE__ */ jsx("br", {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 1962
      }, this),
      "13\xB0 37\u2032 21\u2033 E"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 1915
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 30,
    columnNumber: 578
  }, this);
}
function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsx(motion.div, { className, initial: reduce ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }, children }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 31,
    columnNumber: 154
  }, this);
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "hero", id: "home", children: [
    /* @__PURE__ */ jsx("div", { className: "hero-grid" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 60
    }, this),
    /* @__PURE__ */ jsx("div", { className: "hero-copy", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow-line" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 140
        }, this),
        " A TOOL FOR WHAT'S NEXT"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 115
      }, this),
      /* @__PURE__ */ jsx("div", { className: "wordmark-display", children: [
        "FORGE",
        /* @__PURE__ */ jsx("span", { children: "CODE" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 240
        }, this),
        /* @__PURE__ */ jsx("sup", { children: "\xAE" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 257
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 201
      }, this),
      /* @__PURE__ */ jsx("h1", { children: [
        "Make something",
        /* @__PURE__ */ jsx("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 293
        }, this),
        /* @__PURE__ */ jsx("em", { children: "remarkable." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 298
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 275
      }, this),
      /* @__PURE__ */ jsx("p", { className: "hero-description", children: [
        "A coding assistant built for your terminal,",
        /* @__PURE__ */ jsx("br", { className: "desktop-only" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 398
        }, this),
        " your workflow, and your freedom."
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 323
      }, this),
      /* @__PURE__ */ jsx("div", { className: "hero-actions", children: [
        /* @__PURE__ */ jsx("a", { className: "button button-primary", href: "#features", children: [
          "Explore the project ",
          /* @__PURE__ */ jsx(ArrowDownRight, { size: 16 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 32,
            columnNumber: 569
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 495
        }, this),
        /* @__PURE__ */ jsx("a", { className: "button button-quiet", href: "#philosophy", children: [
          "Discover ForgeCode ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 15 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 32,
            columnNumber: 673
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 600
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 465
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 88
    }, this),
    /* @__PURE__ */ jsx(ForgeVisual, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 712
    }, this),
    /* @__PURE__ */ jsx("div", { className: "hero-foot", children: [
      /* @__PURE__ */ jsx("span", { children: "FREE FOREVER. OPEN SOURCE. BUILT FOR EVERYONE." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 753
      }, this),
      /* @__PURE__ */ jsx("a", { href: "#features", "aria-label": "Scroll to features", children: [
        /* @__PURE__ */ jsx("span", { children: "SCROLL TO EXPLORE" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 864
        }, this),
        /* @__PURE__ */ jsx(ArrowDownRight, { size: 14 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 894
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 812
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 726
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 32,
    columnNumber: 24
  }, this);
}
function Features() {
  return /* @__PURE__ */ jsx("section", { className: "section features-section", id: "features", children: [
    /* @__PURE__ */ jsx("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx(Reveal, { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow-line" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 33,
            columnNumber: 151
          }, this),
          " BUILT AROUND YOU"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 126
        }, this),
        /* @__PURE__ */ jsx("h2", { children: [
          "A better way",
          /* @__PURE__ */ jsx("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 33,
            columnNumber: 222
          }, this),
          "to ",
          /* @__PURE__ */ jsx("em", { children: "build." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 33,
            columnNumber: 230
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 206
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 118
      }, this),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsx("p", { className: "section-intro", children: "Not another layer between you and your work. A coding assistant grounded in the tools and freedom developers already value." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 279
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 259
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 88
    }, this),
    /* @__PURE__ */ jsx("div", { className: "feature-grid", children: features.map(({ num, icon: Icon, title, copy }, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsx("article", { className: "feature-card", children: [
      /* @__PURE__ */ jsx("div", { className: "feature-top", children: [
        /* @__PURE__ */ jsx("span", { className: "mono feature-num", children: [
          "/",
          num
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 621
        }, this),
        /* @__PURE__ */ jsx(Icon, { size: 19, strokeWidth: 1.5 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 669
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 592
      }, this),
      /* @__PURE__ */ jsx("h3", { children: title }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 710
      }, this),
      /* @__PURE__ */ jsx("p", { children: copy }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 726
      }, this),
      /* @__PURE__ */ jsx("span", { className: "feature-arrow", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 771
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 739
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 558
    }, this) }, num, false, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 526
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 450
    }, this),
    /* @__PURE__ */ jsx("div", { className: "feature-bottom mono", children: [
      /* @__PURE__ */ jsx("span", { children: "DESIGNED FOR THE WAY YOU BUILD" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 867
      }, this),
      /* @__PURE__ */ jsx("span", { children: "01 \u2014 05" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 910
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 830
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 33,
    columnNumber: 28
  }, this);
}
function Philosophy() {
  return /* @__PURE__ */ jsx("section", { className: "philosophy", id: "philosophy", children: [
    /* @__PURE__ */ jsx("div", { className: "philosophy-orbit", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("span", {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 131
      }, this),
      /* @__PURE__ */ jsx("span", {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 138
      }, this),
      /* @__PURE__ */ jsx("span", {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 145
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 78
    }, this),
    /* @__PURE__ */ jsx("div", { className: "philosophy-content", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow-line" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 219
        }, this),
        " A SIMPLE PROMISE"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 194
      }, this),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", { children: [
        "Software should",
        /* @__PURE__ */ jsx("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 301
        }, this),
        "open doors.",
        /* @__PURE__ */ jsx("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 317
        }, this),
        /* @__PURE__ */ jsx("span", { children: "Not wallets." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 322
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 282
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 274
      }, this),
      /* @__PURE__ */ jsx("div", { className: "principles", children: [
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "mono principle-num", children: "01" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 394
          }, this),
          /* @__PURE__ */ jsx("strong", { children: "Free to use." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 440
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 389
        }, this),
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "mono principle-num", children: "02" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 480
          }, this),
          /* @__PURE__ */ jsx("strong", { children: "Open source." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 526
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 475
        }, this),
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "mono principle-num", children: "03" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 566
          }, this),
          /* @__PURE__ */ jsx("strong", { children: "Built for developer freedom." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 612
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 561
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 361
      }, this),
      /* @__PURE__ */ jsx("div", { className: "free-stamp", children: [
        /* @__PURE__ */ jsx("span", { children: "FREE" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 697
        }, this),
        /* @__PURE__ */ jsx("b", { children: "FOREVER" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 714
        }, this),
        /* @__PURE__ */ jsx("i", { children: "\xB7" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 728
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 669
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 158
    }, this),
    /* @__PURE__ */ jsx("div", { className: "philosophy-caption mono", children: [
      "NO SUBSCRIPTIONS",
      /* @__PURE__ */ jsx("br", {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 805
      }, this),
      "NO PAYWALLS",
      /* @__PURE__ */ jsx("br", {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 821
      }, this),
      "JUST POSSIBILITY."
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 748
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 34,
    columnNumber: 30
  }, this);
}
function Roadmap() {
  const [selected, setSelected] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "section roadmap-section", id: "roadmap", children: [
    /* @__PURE__ */ jsx("div", { className: "roadmap-title", children: [
      /* @__PURE__ */ jsx(Reveal, { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow-line" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 198
          }, this),
          " THE ROAD AHEAD"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 173
        }, this),
        /* @__PURE__ */ jsx("h2", { children: [
          "Built with",
          /* @__PURE__ */ jsx("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 265
          }, this),
          /* @__PURE__ */ jsx("em", { children: "intention." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 270
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 251
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 165
      }, this),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "section-intro", children: "A work in progress, with the next steps in view. Planned means planned\u2014not shipped." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 322
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 303
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 134
    }, this),
    /* @__PURE__ */ jsx("div", { className: "roadmap-list", children: roadmap.map((item, i) => /* @__PURE__ */ jsx("button", { className: "roadmap-row " + (selected === i ? "selected" : ""), onClick: () => setSelected(i), "aria-expanded": selected === i, children: [
      /* @__PURE__ */ jsx("span", { className: "roadmap-index mono", children: item.id }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 642
      }, this),
      /* @__PURE__ */ jsx("span", { className: "roadmap-track", children: /* @__PURE__ */ jsx("i", { className: "track-node " + item.kind }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 727
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 695
      }, this),
      /* @__PURE__ */ jsx("span", { className: "roadmap-main", children: [
        /* @__PURE__ */ jsx("span", { className: "roadmap-name", children: item.title }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 805
        }, this),
        /* @__PURE__ */ jsx("span", { className: "roadmap-detail", children: selected === i ? item.detail : "" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 855
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 774
      }, this),
      /* @__PURE__ */ jsx("span", { className: "status status-" + item.kind, children: [
        /* @__PURE__ */ jsx("i", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 976
        }, this),
        item.status
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 931
      }, this),
      /* @__PURE__ */ jsx("span", { className: "row-plus", children: selected === i ? /* @__PURE__ */ jsx(Minus, { size: 15 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 1041
      }, this) : /* @__PURE__ */ jsx(Plus, { size: 15 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 1060
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 1e3
      }, this)
    ] }, item.id, true, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 506
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 453
    }, this),
    /* @__PURE__ */ jsx("div", { className: "roadmap-note mono", children: [
      /* @__PURE__ */ jsx(Circle, { size: 8, fill: "currentColor" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 1137
      }, this),
      " STATUS REFLECTS CURRENT INTENTIONS"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 1102
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 35,
    columnNumber: 76
  }, this);
}
function Release() {
  return /* @__PURE__ */ jsx("section", { className: "release-section", id: "release", children: [
    /* @__PURE__ */ jsx("div", { className: "release-grid" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 77
    }, this),
    /* @__PURE__ */ jsx("div", { className: "release-content", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow-line" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 166
        }, this),
        " SOMETHING IS TAKING SHAPE"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 141
      }, this),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", { children: [
        "Good things",
        /* @__PURE__ */ jsx("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 253
        }, this),
        "are being ",
        /* @__PURE__ */ jsx("em", { children: "forged." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 268
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 238
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 230
      }, this),
      /* @__PURE__ */ jsx("p", { className: "release-copy", children: "ForgeCode is being built with one promise: powerful development tools should remain accessible to everyone." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 298
      }, this),
      /* @__PURE__ */ jsx("div", { className: "release-actions", children: [
        /* @__PURE__ */ jsx("span", { className: "release-action disabled", "aria-disabled": "true", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(ArrowDownRight, { size: 16 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 539
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 533
          }, this),
          /* @__PURE__ */ jsx("b", { children: "Download ForgeCode" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 573
          }, this),
          /* @__PURE__ */ jsx("small", { children: "COMING SOON" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 598
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 470
        }, this),
        /* @__PURE__ */ jsx("span", { className: "release-action disabled", "aria-disabled": "true", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(GitBranch, { size: 16 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 700
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 694
          }, this),
          /* @__PURE__ */ jsx("b", { children: "View source code" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 726
          }, this),
          /* @__PURE__ */ jsx("small", { children: "COMING SOON" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 36,
            columnNumber: 749
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 631
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 437
      }, this),
      /* @__PURE__ */ jsx("div", { className: "release-date", children: [
        /* @__PURE__ */ jsx("span", { className: "mono", children: "RELEASE DATE" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 818
        }, this),
        /* @__PURE__ */ jsx("b", { children: "December 12, 2026" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 860
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 788
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 108
    }, this),
    /* @__PURE__ */ jsx("div", { className: "release-mark", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("div", { className: "mark-ring ring-1" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 945
      }, this),
      /* @__PURE__ */ jsx("div", { className: "mark-ring ring-2" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 980
      }, this),
      /* @__PURE__ */ jsx("div", { className: "mark-ring ring-3" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 1015
      }, this),
      /* @__PURE__ */ jsx("span", { children: "F" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 1050
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 896
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 36,
    columnNumber: 27
  }, this);
}
function FAQ() {
  const [open, setOpen] = useState(null);
  return /* @__PURE__ */ jsx("section", { className: "section faq-section", id: "faq", children: [
    /* @__PURE__ */ jsx("div", { className: "faq-heading", children: [
      /* @__PURE__ */ jsx(Reveal, { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow-line" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 37,
            columnNumber: 186
          }, this),
          " GOOD QUESTIONS"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 161
        }, this),
        /* @__PURE__ */ jsx("h2", { children: [
          "Things you",
          /* @__PURE__ */ jsx("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 37,
            columnNumber: 253
          }, this),
          "might ",
          /* @__PURE__ */ jsx("em", { children: "wonder." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 37,
            columnNumber: 264
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 239
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 153
      }, this),
      /* @__PURE__ */ jsx("p", { className: "mono faq-aside", children: [
        "CLEAR ANSWERS.",
        /* @__PURE__ */ jsx("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 338
        }, this),
        "NO FINE PRINT."
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 294
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 124
    }, this),
    /* @__PURE__ */ jsx("div", { className: "faq-list", children: faqs.map(([q, a], i) => /* @__PURE__ */ jsx("div", { className: "faq-item " + (open === i ? "is-open" : ""), children: [
      /* @__PURE__ */ jsx("button", { className: "faq-question", "aria-expanded": open === i, "aria-controls": "faq-answer-" + i, onClick: () => setOpen(open === i ? null : i), children: [
        /* @__PURE__ */ jsx("span", { className: "faq-number mono", children: [
          "0",
          i + 1
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 604
        }, this),
        /* @__PURE__ */ jsx("span", { children: q }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 651
        }, this),
        /* @__PURE__ */ jsx("span", { className: "faq-icon", children: open === i ? /* @__PURE__ */ jsx(Minus, { size: 16 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 704
        }, this) : /* @__PURE__ */ jsx(Plus, { size: 16 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 723
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 667
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 475
      }, this),
      /* @__PURE__ */ jsx("div", { className: "faq-answer-wrap", id: "faq-answer-" + i, hidden: open !== i, children: /* @__PURE__ */ jsx("p", { children: a }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 829
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 757
      }, this)
    ] }, q, true, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 414
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 367
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 37,
    columnNumber: 74
  }, this);
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "footer", children: [
    /* @__PURE__ */ jsx("div", { className: "footer-main", children: [
      /* @__PURE__ */ jsx("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsx(Brand, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 112
        }, this),
        /* @__PURE__ */ jsx("p", { children: [
          "Make something",
          /* @__PURE__ */ jsx("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 137
          }, this),
          /* @__PURE__ */ jsx("em", { children: "remarkable." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 142
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 120
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 82
      }, this),
      /* @__PURE__ */ jsx("div", { className: "footer-nav-wrap", children: [
        /* @__PURE__ */ jsx("span", { className: "mono footer-label", children: "FIND YOUR WAY" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 205
        }, this),
        /* @__PURE__ */ jsx("nav", { className: "footer-nav", "aria-label": "Footer navigation", children: [
          navItems.map((n) => /* @__PURE__ */ jsx("a", { href: n.href, children: n.label }, n.label, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 337
          }, this)),
          /* @__PURE__ */ jsx("a", { href: "#release", children: "Get started" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 383
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 261
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 172
      }, this),
      /* @__PURE__ */ jsx("div", { className: "footer-belief", children: [
        /* @__PURE__ */ jsx("span", { className: "mono footer-label", children: "THE PROMISE" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 460
        }, this),
        /* @__PURE__ */ jsx("p", { children: [
          "FREE FOREVER.",
          /* @__PURE__ */ jsx("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 530
          }, this),
          "OPEN SOURCE.",
          /* @__PURE__ */ jsx("br", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 547
          }, this),
          "BUILT FOR EVERYONE."
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 514
        }, this),
        /* @__PURE__ */ jsx("span", { className: "release-badge", children: [
          /* @__PURE__ */ jsx("i", {}, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 607
          }, this),
          " IN DEVELOPMENT"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 575
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 429
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 38,
      columnNumber: 53
    }, this),
    /* @__PURE__ */ jsx("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsx("span", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " FORGECODE"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 676
      }, this),
      /* @__PURE__ */ jsx("span", { children: [
        "MADE FOR WHAT'S NEXT ",
        /* @__PURE__ */ jsx("span", { className: "orange", children: "\u2197" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 38,
          columnNumber: 754
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 727
      }, this),
      /* @__PURE__ */ jsx("a", { href: "#home", children: "BACK TO TOP \u2191" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 794
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 38,
      columnNumber: 645
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 38,
    columnNumber: 26
  }, this);
}
function App() {
  useEffect(() => {
    document.documentElement.classList.add("ready");
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: [
    /* @__PURE__ */ jsx(Nav, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 93
    }, this),
    /* @__PURE__ */ jsx("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 105
      }, this),
      /* @__PURE__ */ jsx(Features, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 112
      }, this),
      /* @__PURE__ */ jsx(Philosophy, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 123
      }, this),
      /* @__PURE__ */ jsx(Roadmap, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 136
      }, this),
      /* @__PURE__ */ jsx(Release, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 146
      }, this),
      /* @__PURE__ */ jsx(FAQ, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 156
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 99
    }, this),
    /* @__PURE__ */ jsx(Footer, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 169
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 39,
    columnNumber: 91
  }, this);
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 40,
  columnNumber: 52
}));
