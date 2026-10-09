/* AUTO-GENERATED from portal/app.js by build/compile_app.js. Do not edit. */
const {
  useState
} = React;
const BG = "#F3F6FC",
  BG_OFF = "#E6ECF7",
  CARD = "#FFFFFF";
const INK = "#0B1433",
  MUTED = "#55607A",
  FAINT = "#98A2B8";
const BORDER = "#D3DBEA",
  ACCENT = "#004AAD",
  GOLD = "#004AAD",
  NAVY = "#021363",
  ON_ACCENT = "#FFFFFF";
const MONO = "'IBM Plex Mono','Courier New',monospace";
const BARLOW = "'Barlow Condensed',Impact,sans-serif";
const ATTENDEES = window.TITAN.attendees || [];
const MATCHES = window.TITAN.matches || [];
const TAG_COLORS = window.TITAN.tagColors || {};
const CLUSTERS = (window.TITAN.clusterDefs || []).map(d => ({
  ...d,
  members: d.members && d.members.length ? d.members : ATTENDEES.filter(a => (a.cluster || []).includes(d.name)).map(a => a.name)
})).filter(c => c.members.length > 0);
const UPDATE_FORM_URL = "";
const VOTE = {
  formId: window.TITAN.voteFormId || "",
  show: false
};
const voteLive = () => !!VOTE.formId && (VOTE.show || /[?&]vote\b/.test(location.search));
const PROGRAM = window.TITAN.program || [];
const VENUE = window.TITAN.venue || null;
const VENUE_REVEAL = window.TITAN.venueReveal || "";
const GOLD_LINE = "#C8963E";
const NETWORKING = window.TITAN.networking || {
  minutes: 20,
  rounds: []
};
const groupsOf = name => NETWORKING.rounds.map(r => r.groups.find(g => g.members.includes(name)) || null);
function MyGroups({
  me,
  setSelected
}) {
  const gs = groupsOf(me.name);
  if (!gs.some(Boolean)) return null;
  const label = ["ROUND 1 · START HERE", "ROUND 2 · SWITCH TO"];
  return React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, React.createElement(Label, {
    mt: 0
  }, "Your networking groups"), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, gs.map((g, r) => g && React.createElement("div", {
    key: r,
    className: "d2-flat",
    style: {
      padding: "12px 14px",
      borderTop: "6px solid " + g.hex
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 10,
      color: MUTED,
      letterSpacing: 1.5
    }
  }, label[r]), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 4
    }
  }, React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: g.hex,
      display: "inline-block",
      flexShrink: 0
    }
  }), React.createElement("span", {
    className: "barlow",
    style: {
      fontSize: 20,
      fontWeight: 900,
      textTransform: "uppercase"
    }
  }, g.color)), g.theme && React.createElement("div", {
    style: {
      fontSize: 11,
      color: INK,
      marginTop: 4
    }
  }, g.theme), React.createElement("div", {
    style: {
      fontSize: 11,
      color: MUTED,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "With ", g.members.filter(n => n !== me.name).slice(0, 4).map((n, i, arr) => {
    const a = byName(n);
    return React.createElement(React.Fragment, {
      key: n
    }, React.createElement("span", {
      onClick: () => a && setSelected(a),
      style: {
        color: INK,
        cursor: a ? "pointer" : "default",
        borderBottom: "1px dotted " + BORDER
      }
    }, n), i < arr.length - 1 ? ", " : "");
  }), g.members.length > 5 ? ` + ${g.members.length - 5} more` : "")))));
}
const byName = name => ATTENDEES.find(a => a.name === name);
const byId = id => ATTENDEES.find(a => a.id === id);
function Avatar({
  a,
  size
}) {
  const PARTICLES = ["van", "de", "den", "der", "het", "ten", "ter", "te", "op", "aan", "du", "des", "la", "le", "da", "di", "el", "al"];
  const words = (a.name || "").split(/\s+/).filter(w => w && !PARTICLES.includes(w.toLowerCase()) && !/^\(/.test(w));
  const initials = (words.length ? words : [a.name || "?"]).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  const h = [...(a.name || "")].reduce((s, c) => s * 31 + c.charCodeAt(0) >>> 0, 7);
  const TILES = [[135, NAVY, ACCENT], [45, NAVY, "#1F5FC4"], [160, "#0A2A7A", ACCENT], [20, NAVY, "#2E6FD6"]];
  const [deg, from, to] = TILES[h % TILES.length];
  return React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0,
      overflow: "hidden",
      background: `linear-gradient(${deg}deg, ${from} 0%, ${to} 100%)`,
      border: "1px solid " + NAVY,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#FFFFFF",
      fontFamily: BARLOW,
      fontWeight: 700,
      fontSize: size * 0.42,
      letterSpacing: 1,
      lineHeight: 1
    }
  }, React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: size * 1.1,
      height: size * 1.1,
      right: -size * 0.55,
      bottom: -size * 0.55,
      borderRadius: "50%",
      border: `${Math.max(1, size * 0.04)}px solid rgba(255,255,255,0.14)`
    }
  }), React.createElement("span", {
    style: {
      position: "relative"
    }
  }, initials), a.photo && React.createElement("img", {
    src: a.photo,
    alt: a.name,
    onError: e => {
      e.currentTarget.style.display = "none";
    },
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top"
    }
  }));
}
function Label({
  children,
  mt
}) {
  return React.createElement("div", {
    className: "barlow",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 11,
      fontWeight: 800,
      color: GOLD,
      letterSpacing: 3,
      textTransform: "uppercase",
      marginBottom: 8,
      marginTop: mt || 18
    }
  }, React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: ACCENT,
      display: "inline-block"
    }
  }), children);
}
function Badge({
  text,
  bg,
  color,
  border
}) {
  return React.createElement("span", {
    className: "barlow",
    style: {
      background: bg || "transparent",
      color: color || INK,
      border: border ? "1px solid " + border : "none",
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: 1.5,
      padding: "2px 7px",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, text);
}
function StackChips({
  stack,
  max
}) {
  stack = (stack || []).filter(x => x && x.toLowerCase() !== "other");
  const shown = max ? stack.slice(0, max) : stack;
  const extra = max && stack.length > max ? stack.length - max : 0;
  return React.createElement("div", null, shown.map(t => React.createElement("span", {
    key: t,
    style: {
      display: "inline-block",
      background: "#fff",
      border: "1px solid " + BORDER,
      color: MUTED,
      fontSize: 10,
      padding: "2px 7px",
      marginRight: 4,
      marginTop: 4
    }
  }, t)), extra > 0 && React.createElement("span", {
    style: {
      display: "inline-block",
      background: "#fff",
      border: "1px solid " + BORDER,
      color: FAINT,
      fontSize: 10,
      padding: "2px 7px",
      marginTop: 4
    }
  }, "+", extra));
}
function App() {
  const savedMe = (() => {
    try {
      const v = JSON.parse(localStorage.getItem("d5_me") || "null");
      if (!v || typeof v !== "object" || typeof v.name !== "string") return null;
      return ATTENDEES.some(a => a.id === v.id && a.name === v.name) ? v : null;
    } catch (e) {
      return null;
    }
  })();
  const [tab, setTab] = useState("profiles");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [clusterFilter, setClusterFilter] = useState(null);
  const [myName, setMyName] = useState(savedMe ? savedMe.name : "");
  const [myId, setMyId] = useState(savedMe ? savedMe.id : null);
  const [voting, setVoting] = useState(false);
  const [info, setInfo] = useState(null);
  const haystack = a => {
    if (a._hay) return a._hay;
    a._hay = [a.name, a.profession, a.city, a.bio, a.summary, a.company, a.role, a.sector, a.tedTalk, a.website, a.org, (a.descriptors || []).join(" "), (a.goals || []).join(" "), (a.cluster || []).join(" "), (a.collab || []).join(" ")].filter(Boolean).join(" ").toLowerCase();
    return a._hay;
  };
  const filtered = ATTENDEES.filter(a => {
    const q = search.toLowerCase().trim();
    const ms = !q || haystack(a).includes(q);
    const mc = !clusterFilter || (a.cluster || []).includes(clusterFilter);
    return ms && mc;
  });
  const tabs = [["profiles", "Profiles"], ["matches", "Matchmaking"], ["forme", "Who To Meet"], ["clusters", "Skill Map"], ["breakouts", "Groups"]];
  return React.createElement("div", {
    style: {
      background: BG,
      minHeight: "100vh",
      fontFamily: MONO,
      color: INK
    }
  }, React.createElement("div", {
    style: {
      background: BG,
      borderBottom: "1px solid " + BORDER,
      padding: "16px 22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
      flexWrap: "wrap",
      gap: 10
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      display: "flex",
      alignItems: "flex-end",
      fontWeight: 900,
      fontSize: 22,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: NAVY
    }
  }, window.TITAN.logo && React.createElement("img", {
    src: window.TITAN.logo,
    alt: "",
    width: "30",
    height: "30",
    style: {
      marginRight: 10,
      alignSelf: "center"
    }
  }), React.createElement("span", null, "Titan\xA0Stage"), React.createElement("span", {
    style: {
      color: ACCENT,
      fontSize: 28,
      lineHeight: 0.7
    }
  }, "_")), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      color: MUTED,
      fontSize: 11,
      letterSpacing: 1
    }
  }, ATTENDEES.length, " ATTENDEES", window.TITAN.eventLine ? " · " + window.TITAN.eventLine : "")), React.createElement("div", {
    style: {
      flexBasis: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, [["program", "\u{1F5D3}\uFE0F", "Program", PROGRAM.length ? "Doors " + PROGRAM[0][0] : ""], ["venue", "\u{1F4CD}", "Location", VENUE ? "Tap for address" : window.TITAN.venueRevealShort || ""]].map(([k, icon, label, sub]) => React.createElement("button", {
    key: k,
    onClick: () => setInfo(k),
    className: "barlow d2-info",
    style: {
      background: NAVY,
      color: "#fff",
      border: "none",
      borderBottom: "3px solid " + GOLD_LINE,
      padding: "7px 10px",
      cursor: "pointer",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 18
    }
  }, icon), React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.1,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 900,
      letterSpacing: 1.5,
      textTransform: "uppercase"
    }
  }, label, " \u2192"), React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1,
      color: GOLD_LINE,
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, sub)))))), React.createElement("div", {
    className: "d2-tabs",
    style: {
      display: "flex",
      padding: "0 14px",
      borderBottom: "1px solid " + BORDER,
      overflowX: "auto",
      background: BG
    }
  }, tabs.map(([k, label]) => React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    className: "barlow d2-tab",
    style: {
      background: "none",
      border: "none",
      color: tab === k ? INK : FAINT,
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: 2,
      padding: "13px 16px",
      cursor: "pointer",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      borderBottom: tab === k ? "2px solid " + ACCENT : "2px solid transparent",
      outline: "none"
    }
  }, label))), voteLive() && React.createElement("button", {
    onClick: () => setVoting(true),
    className: "barlow",
    style: {
      display: "block",
      width: "100%",
      background: ACCENT,
      color: ON_ACCENT,
      border: "none",
      padding: "14px 16px",
      fontSize: 16,
      fontWeight: 900,
      letterSpacing: 2,
      textTransform: "uppercase",
      cursor: "pointer",
      textAlign: "center"
    }
  }, "Vote for the best pitch \u2192"), tab === "profiles" && React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      padding: "14px 16px 8px",
      borderBottom: "1px solid " + BORDER
    }
  }, React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "SEARCH NAME, ROLE, CITY, GOALS, BIO...",
    style: {
      background: "#fff",
      border: "1px solid " + BORDER,
      color: INK,
      padding: "11px 14px",
      fontSize: 12,
      width: "100%",
      outline: "none",
      fontFamily: "inherit",
      letterSpacing: 1
    }
  })), React.createElement("div", {
    className: "d2-filter-select",
    style: {
      padding: "10px 16px",
      borderBottom: "1px solid " + BORDER
    }
  }, React.createElement("select", {
    value: clusterFilter || "",
    onChange: e => setClusterFilter(e.target.value || null),
    "aria-label": "Filter by cluster",
    className: "barlow",
    style: {
      width: "100%",
      background: clusterFilter ? ACCENT : "#fff",
      border: "1px solid " + (clusterFilter ? ACCENT : BORDER),
      color: clusterFilter ? ON_ACCENT : INK,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 1,
      padding: "11px 12px",
      textTransform: "uppercase",
      outline: "none",
      borderRadius: 0,
      fontFamily: "inherit"
    }
  }, React.createElement("option", {
    value: ""
  }, "All clusters (", ATTENDEES.length, ")"), CLUSTERS.map(c => React.createElement("option", {
    key: c.name,
    value: c.name
  }, c.name, " (", c.members.length, ")")))), React.createElement("div", {
    className: "d2-chips",
    style: {
      display: "flex",
      gap: 6,
      padding: "10px 16px",
      overflowX: "auto",
      borderBottom: "1px solid " + BORDER
    }
  }, React.createElement("button", {
    onClick: () => setClusterFilter(null),
    className: "barlow",
    style: {
      background: !clusterFilter ? ACCENT : "#fff",
      border: "1px solid " + (!clusterFilter ? ACCENT : BORDER),
      color: !clusterFilter ? ON_ACCENT : MUTED,
      fontSize: 11,
      fontWeight: 700,
      padding: "5px 10px",
      cursor: "pointer",
      letterSpacing: 1,
      whiteSpace: "nowrap",
      textTransform: "uppercase"
    }
  }, "All (", ATTENDEES.length, ")"), CLUSTERS.map(c => {
    const on = clusterFilter === c.name;
    return React.createElement("button", {
      key: c.name,
      onClick: () => setClusterFilter(on ? null : c.name),
      className: "barlow",
      style: {
        background: on ? c.color : "#fff",
        border: "1px solid " + (on ? c.color : BORDER),
        color: on ? "#fff" : MUTED,
        fontSize: 11,
        fontWeight: 700,
        padding: "5px 10px",
        cursor: "pointer",
        letterSpacing: 1,
        whiteSpace: "nowrap",
        textTransform: "uppercase"
      }
    }, c.name, " (", c.members.length, ")");
  })), React.createElement("div", {
    style: {
      padding: "8px 16px 0",
      color: MUTED,
      fontSize: 11
    }
  }, filtered.length, " attendees shown"), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))",
      gap: 12,
      padding: 16
    }
  }, filtered.map(a => React.createElement("div", {
    key: a.id,
    className: "d2-card",
    style: {
      padding: 16
    },
    onClick: () => setSelected(a)
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      marginBottom: 8
    }
  }, React.createElement(Avatar, {
    a: a,
    size: 52
  }), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4
    }
  }, React.createElement("span", {
    style: {
      color: FAINT,
      fontSize: 11,
      fontWeight: 700
    }
  }, "#", String(a.id).padStart(2, "0"))), React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 19,
      fontWeight: 900,
      letterSpacing: 0,
      lineHeight: 1.05
    }
  }, a.name), React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 12,
      color: GOLD,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: "uppercase",
      marginTop: 2
    }
  }, a.profession))), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 8,
      flexWrap: "wrap"
    }
  }, a.city && React.createElement(Badge, {
    text: a.city,
    border: BORDER,
    color: MUTED
  }), a.sector && React.createElement(Badge, {
    text: a.sector,
    border: BORDER,
    color: INK
  })), React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      lineHeight: 1.5,
      marginBottom: 6
    }
  }, a.bio || a.summary), React.createElement(StackChips, {
    stack: a.descriptors || [],
    max: 3
  }), (a.collab || []).length > 0 && React.createElement("div", {
    className: "barlow",
    style: {
      marginTop: 10,
      paddingTop: 8,
      borderTop: "1px solid " + BORDER,
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1.5,
      color: GOLD,
      textTransform: "uppercase"
    }
  }, a.collab.length, " ", a.collab.length === 1 ? "intro" : "intros", " \u2192"))))), tab === "matches" && React.createElement("div", {
    style: {
      padding: 16,
      maxWidth: 720
    }
  }, React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 26,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: -0.5
    }
  }, "Top ", MATCHES.length, " Introductions"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginTop: 4,
      letterSpacing: 1
    }
  }, "RANKED BY SIGNAL STRENGTH")), MATCHES.map(m => React.createElement("div", {
    key: m.rank,
    className: "d2-flat",
    style: {
      padding: 16,
      marginBottom: 10
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, React.createElement("span", {
    className: "barlow",
    style: {
      color: GOLD,
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: 2
    }
  }, "#", m.rank), React.createElement(Badge, {
    text: m.tag,
    bg: TAG_COLORS[m.tag] || "#888",
    color: "#fff"
  })), React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 19,
      fontWeight: 900,
      marginBottom: 8,
      lineHeight: 1.1
    }
  }, React.createElement("span", {
    style: byName(m.a) ? {
      cursor: "pointer",
      borderBottom: "2px solid " + BORDER
    } : undefined,
    onClick: () => {
      const o = byName(m.a);
      if (o) setSelected(o);
    }
  }, m.a), " ", React.createElement("span", {
    style: {
      color: GOLD
    }
  }, "\u2194"), " ", React.createElement("span", {
    style: byName(m.b) ? {
      cursor: "pointer",
      borderBottom: "2px solid " + BORDER
    } : undefined,
    onClick: () => {
      const o = byName(m.b);
      if (o) setSelected(o);
    }
  }, m.b)), React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: MUTED,
      lineHeight: 1.6
    }
  }, m.why)))), tab === "clusters" && React.createElement("div", {
    style: {
      padding: 16
    }
  }, React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 26,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: -0.5
    }
  }, "Skill & Domain Clusters"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginTop: 4,
      letterSpacing: 1
    }
  }, "CLICK A CLUSTER TO FILTER THE PROFILES VIEW")), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
      gap: 12
    }
  }, CLUSTERS.map(c => React.createElement("div", {
    key: c.name,
    className: "d2-card",
    style: {
      padding: 16,
      borderLeft: "3px solid " + c.color
    },
    onClick: () => {
      setClusterFilter(c.name);
      setTab("profiles");
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: c.color,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, c.name, " ", React.createElement("span", {
    style: {
      color: FAINT
    }
  }, "(", c.members.length, ")")), c.members.map(m => {
    const a = byName(m);
    return React.createElement("div", {
      key: m,
      style: {
        fontSize: 12.5,
        color: MUTED,
        marginBottom: 4,
        display: "flex",
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        color: c.color
      }
    }, "\xB7"), React.createElement("span", null, m));
  }))))), tab === "breakouts" && React.createElement(Networking, {
    myName: myName,
    myId: myId,
    setSelected: setSelected
  }), tab === "forme" && React.createElement(ForMe, {
    myName: myName,
    setMyName: setMyName,
    myId: myId,
    setMyId: setMyId,
    setSelected: setSelected
  }), React.createElement("div", {
    style: {
      borderTop: "1px solid " + BORDER,
      padding: "22px 16px 28px",
      textAlign: "center",
      fontSize: 10,
      letterSpacing: 2,
      color: FAINT,
      textTransform: "uppercase"
    }
  }, "Made by ", React.createElement("a", {
    href: "https://deploytlv.com",
    target: "_blank",
    rel: "noopener",
    className: "d2-link",
    style: {
      color: MUTED,
      textDecoration: "none",
      borderBottom: "1px solid " + BORDER,
      fontWeight: 600
    }
  }, "DeployTLV")), selected && React.createElement(Modal, {
    a: selected,
    setSelected: setSelected
  }), info && React.createElement(InfoSheet, {
    kind: info,
    close: () => setInfo(null)
  }), voting && React.createElement(VoteSheet, {
    myId: (resolveMe(myName, myId) || {}).id,
    close: () => setVoting(false),
    pickMe: () => {
      setVoting(false);
      setTab("forme");
    }
  }));
}
const esc = t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const FIRST_COUNT = {};
ATTENDEES.forEach(a => {
  const f = a.name.split(/\s+/)[0];
  FIRST_COUNT[f] = (FIRST_COUNT[f] || 0) + 1;
});
const NAME_INDEX = ATTENDEES.flatMap(a => {
  const full = a.name.replace(/\s*\(.*$/, "");
  const first = full.split(/\s+/)[0];
  const entries = [{
    a,
    key: full
  }];
  if (FIRST_COUNT[first] === 1 && first !== full) entries.push({
    a,
    key: first
  });
  return entries;
}).map(({
  a,
  key
}) => ({
  a,
  key,
  re: new RegExp("\\b" + esc(key) + "\\b")
})).sort((x, y) => y.key.length - x.key.length);
function AngleText({
  text,
  setSelected
}) {
  const parts = [];
  let rest = text,
    guard = 0;
  while (rest && guard++ < 40) {
    let best = null;
    for (const {
      a,
      re
    } of NAME_INDEX) {
      const m = re.exec(rest);
      if (m && (best === null || m.index < best.i)) best = {
        i: m.index,
        len: m[0].length,
        a
      };
    }
    if (!best) break;
    if (best.i > 0) parts.push(rest.slice(0, best.i));
    const who = best.a;
    parts.push(React.createElement("span", {
      key: parts.length,
      onClick: e => {
        e.stopPropagation();
        setSelected(who);
      },
      style: {
        cursor: "pointer",
        fontWeight: 700,
        color: INK,
        borderBottom: "1px solid " + ACCENT
      }
    }, rest.substr(best.i, best.len)));
    rest = rest.slice(best.i + best.len);
  }
  if (rest) parts.push(rest);
  return React.createElement("span", null, parts);
}
const resolveMe = (myName, myId) => {
  if (myId != null) return byId(myId);
  const q = (myName || "").trim().toLowerCase();
  const exact = q ? ATTENDEES.filter(a => a.name.toLowerCase() === q) : [];
  return exact.length === 1 ? exact[0] : null;
};
function Networking({
  myName,
  myId,
  setSelected
}) {
  const me = resolveMe(myName, myId);
  const [round, setRound] = useState(0);
  const rd = NETWORKING.rounds[round];
  if (!rd) return React.createElement("div", {
    style: {
      padding: 16,
      color: MUTED
    }
  }, "Groups not published yet.");
  return React.createElement("div", {
    style: {
      padding: 16
    }
  }, React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 26,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: -0.5
    }
  }, "Networking Groups"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginTop: 4,
      letterSpacing: 1
    }
  }, NETWORKING.rounds.length, " ROUNDS \xB7 ", NETWORKING.minutes, " MIN EACH \xB7 ", rd.groups.length, " GROUPS \xB7 YOUR BADGE SHOWS BOTH COLOURS"), React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: INK,
      marginTop: 10,
      lineHeight: 1.6,
      maxWidth: 640
    }
  }, React.createElement("b", null, "Round 1 \u2014 your field."), " You start with people whose work is related to yours.", " ", React.createElement("b", null, "Round 2 \u2014 who can help you."), " After the switch you join a mixed group. The two rounds together are arranged so you meet the investors, mentors, clients or co-founders you said you were looking for.")), me ? React.createElement(MyGroups, {
    me: me,
    setSelected: setSelected
  }) : React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginBottom: 18,
      letterSpacing: 1
    }
  }, "SET YOUR NAME IN \u201CWHO TO MEET\u201D TO SEE YOUR OWN GROUPS HERE"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14
    }
  }, NETWORKING.rounds.map((r, i) => React.createElement("button", {
    key: i,
    onClick: () => setRound(i),
    className: "barlow",
    style: {
      background: round === i ? ACCENT : "#fff",
      color: round === i ? "#fff" : INK,
      border: "1px solid " + (round === i ? ACCENT : BORDER),
      padding: "8px 14px",
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: 1.5,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "ROUND ", r.round, i === 0 ? " · START" : " · SWITCH"))), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
      gap: 12
    }
  }, rd.groups.map(g => React.createElement("div", {
    key: g.id,
    className: "d2-flat",
    style: {
      padding: 16,
      borderTop: "6px solid " + g.hex
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: g.hex,
      display: "inline-block"
    }
  }), React.createElement("span", {
    className: "barlow",
    style: {
      fontSize: 19,
      fontWeight: 900,
      textTransform: "uppercase"
    }
  }, g.color), React.createElement("span", {
    className: "barlow",
    style: {
      fontSize: 11,
      color: GOLD,
      fontWeight: 800,
      letterSpacing: 1.5,
      marginLeft: "auto"
    }
  }, g.members.length, " PEOPLE")), g.theme && React.createElement("div", {
    style: {
      fontSize: 11,
      color: MUTED,
      letterSpacing: 0.5,
      marginTop: -4,
      marginBottom: 10
    }
  }, g.theme), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, g.members.map(m => {
    const a = byName(m),
      mine = me && me.name === m;
    return React.createElement("span", {
      key: m,
      onClick: () => a && setSelected(a),
      className: "barlow",
      style: {
        background: mine ? g.hex : "#fff",
        color: mine ? "#fff" : INK,
        border: "1px solid " + (mine ? g.hex : BORDER),
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 8px",
        letterSpacing: 0.5,
        cursor: a ? "pointer" : "default",
        whiteSpace: "nowrap"
      }
    }, m);
  }))))));
}
function ForMe({
  myName,
  setMyName,
  myId,
  setMyId,
  setSelected
}) {
  const q = myName.trim().toLowerCase();
  const exact = q ? ATTENDEES.filter(a => a.name.toLowerCase() === q) : [];
  const me = myId != null ? byId(myId) : exact.length === 1 ? exact[0] : null;
  const candidates = !me && q ? ATTENDEES.filter(a => a.name.toLowerCase().includes(q)) : [];
  const pickMe = a => {
    setMyId(a.id);
    setMyName(a.name);
    try {
      localStorage.setItem("d5_me", JSON.stringify({
        id: a.id,
        name: a.name
      }));
    } catch (e) {}
  };
  const onType = v => {
    setMyName(v);
    if (myId != null) setMyId(null);
  };
  const myMatches = me ? MATCHES.filter(m => m.a === me.name || m.b === me.name) : [];
  const myClusters = me ? me.cluster || [] : [];
  const peers = me ? ATTENDEES.filter(a => a.id !== me.id && (a.cluster || []).some(c => myClusters.includes(c))).map(a => ({
    ...a,
    shared: a.cluster.filter(c => myClusters.includes(c))
  })).sort((x, y) => y.shared.length - x.shared.length) : [];
  return React.createElement("div", {
    style: {
      padding: 16,
      maxWidth: 720
    }
  }, React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 26,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: -0.5
    }
  }, "Who Should I Meet?"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginTop: 4,
      letterSpacing: 1
    }
  }, "TYPE YOUR NAME TO GET YOUR PERSONAL MATCH LIST")), React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 24
    }
  }, React.createElement("input", {
    value: myName,
    onChange: e => onType(e.target.value),
    placeholder: "TYPE YOUR NAME...",
    autoFocus: true,
    style: {
      background: "#fff",
      border: "2px solid " + (me ? ACCENT : BORDER),
      color: INK,
      padding: "13px 16px",
      fontSize: 14,
      width: "100%",
      outline: "none",
      fontFamily: "inherit",
      letterSpacing: 1
    }
  }), candidates.length > 0 && React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      background: "#fff",
      border: "1px solid " + BORDER,
      zIndex: 10,
      maxHeight: 220,
      overflowY: "auto"
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      padding: "7px 16px",
      fontSize: 11,
      color: GOLD,
      letterSpacing: 1.5,
      borderBottom: "1px solid " + BORDER,
      textTransform: "uppercase"
    }
  }, "\u2193 Tap your name", candidates.length > 1 ? " (" + candidates.length + " matches)" : ""), candidates.map(a => React.createElement("div", {
    key: a.id,
    onClick: () => pickMe(a),
    style: {
      padding: "10px 16px",
      cursor: "pointer",
      borderBottom: "1px solid " + BORDER,
      fontSize: 13,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, React.createElement("span", null, React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, a.name), React.createElement("span", {
    style: {
      color: FAINT,
      marginLeft: 8,
      fontSize: 11
    }
  }, a.profession)), React.createElement("span", {
    className: "barlow",
    style: {
      color: GOLD,
      fontSize: 11,
      letterSpacing: 1,
      whiteSpace: "nowrap",
      marginLeft: 12
    }
  }, "THIS IS ME \u2192"))))), myName.length > 0 && !me && candidates.length === 0 && React.createElement("div", {
    style: {
      color: MUTED,
      fontSize: 13,
      letterSpacing: 1
    }
  }, "NO MATCH FOUND \u2014 TRY FIRST OR LAST NAME"), me && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "d2-flat",
    style: {
      borderLeft: "3px solid " + ACCENT,
      padding: "14px 16px",
      marginBottom: 24
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 22,
      fontWeight: 900
    }
  }, me.name), React.createElement("span", {
    className: "barlow",
    onClick: () => {
      setMyId(null);
      setMyName("");
      try {
        localStorage.removeItem("d5_me");
      } catch (e) {}
    },
    style: {
      cursor: "pointer",
      color: GOLD,
      fontSize: 11,
      letterSpacing: 1.5,
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      borderBottom: "1px solid " + BORDER
    }
  }, "NOT YOU? \u21BB")), React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 12,
      color: GOLD,
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, me.profession), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, (me.cluster || []).map(c => {
    const cl = CLUSTERS.find(x => x.name === c);
    return React.createElement(Badge, {
      key: c,
      text: c,
      border: cl && cl.color || BORDER,
      color: cl && cl.color || MUTED
    });
  }))), React.createElement(MyGroups, {
    me: me,
    setSelected: setSelected
  }), UPDATE_FORM_URL && React.createElement("a", {
    href: UPDATE_FORM_URL,
    target: "_blank",
    rel: "noreferrer",
    className: "barlow d2-link",
    style: {
      display: "block",
      textAlign: "center",
      marginBottom: 24,
      padding: "11px 14px",
      border: "1px solid " + ACCENT,
      color: ACCENT,
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: 1.5,
      textDecoration: "none",
      textTransform: "uppercase"
    }
  }, me.photo ? "Update your profile or photo" : "Add your photo & update your profile", " \u2197"), (me.collab || []).length > 0 && React.createElement(React.Fragment, null, React.createElement(Label, {
    mt: 0
  }, "\u2605 Who you should meet (", me.collab.length, ")"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginBottom: 14,
      lineHeight: 1.6
    }
  }, "Written for you specifically. Tap any name to open their profile."), me.collab.map((c, i) => React.createElement("div", {
    key: i,
    className: "d2-flat",
    style: {
      padding: "13px 16px",
      marginBottom: 8,
      display: "flex",
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      color: ACCENT,
      fontWeight: 900,
      flexShrink: 0
    }
  }, "\u2192"), React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: MUTED,
      lineHeight: 1.6
    }
  }, React.createElement(AngleText, {
    text: c,
    setSelected: setSelected
  }))))), myMatches.length > 0 && React.createElement(React.Fragment, null, React.createElement(Label, {
    mt: 28
  }, "\u2605 Priority matches for the whole room (", myMatches.length, ")"), myMatches.map(m => {
    const otherName = m.a === me.name ? m.b : m.a;
    const other = byName(otherName);
    return React.createElement("div", {
      key: m.rank,
      className: "d2-card",
      style: {
        padding: 16,
        marginBottom: 10,
        cursor: other ? "pointer" : "default"
      },
      onClick: () => other && setSelected(other)
    }, React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
      }
    }, React.createElement("span", {
      style: {
        color: FAINT,
        fontSize: 11
      }
    }, "MATCH #", m.rank), React.createElement(Badge, {
      text: m.tag,
      bg: TAG_COLORS[m.tag] || "#888",
      color: "#fff"
    })), React.createElement("div", {
      className: "barlow",
      style: {
        fontSize: 18,
        fontWeight: 900
      }
    }, otherName), other && React.createElement("div", {
      className: "barlow",
      style: {
        fontSize: 12,
        color: GOLD,
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: "uppercase",
        marginBottom: 8
      }
    }, other.profession), React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: MUTED,
        lineHeight: 1.6
      }
    }, m.why), other && React.createElement("div", {
      style: {
        marginTop: 10,
        fontSize: 10,
        color: FAINT,
        letterSpacing: 1
      }
    }, "TAP TO VIEW FULL PROFILE \u2192"));
  })), peers.length > 0 && React.createElement(React.Fragment, null, React.createElement(Label, {
    mt: 28
  }, "Others in your domain (", peers.length, ")"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginBottom: 14,
      lineHeight: 1.6
    }
  }, "These attendees share at least one cluster with you \u2014 common ground for a conversation."), peers.map(a => React.createElement("div", {
    key: a.id,
    className: "d2-card",
    style: {
      padding: "12px 16px",
      marginBottom: 8,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    },
    onClick: () => setSelected(a)
  }, React.createElement("div", null, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 16,
      fontWeight: 900,
      marginBottom: 2
    }
  }, a.name), React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 12,
      color: GOLD,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: "uppercase",
      marginBottom: 5
    }
  }, a.profession), React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      flexWrap: "wrap"
    }
  }, a.shared.map(c => {
    const cl = CLUSTERS.find(x => x.name === c);
    return React.createElement(Badge, {
      key: c,
      text: c,
      border: cl && cl.color || BORDER,
      color: cl && cl.color || MUTED
    });
  })))))), (me.collab || []).length === 0 && myMatches.length === 0 && peers.length === 0 && React.createElement("div", {
    style: {
      color: MUTED,
      fontSize: 13,
      lineHeight: 1.7
    }
  }, "Your profile is still light on detail \u2014 browse the Profiles tab, or find Myron and he will point you at the right people.")));
}
function InfoSheet({
  kind,
  close
}) {
  const q = VENUE && encodeURIComponent([VENUE.name, ...VENUE.address].join(", "));
  const btn = {
    display: "block",
    background: ACCENT,
    color: ON_ACCENT,
    textDecoration: "none",
    padding: "12px 16px",
    fontSize: 14,
    fontWeight: 900,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 10
  };
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(2,19,99,0.55)",
      zIndex: 300,
      padding: 12,
      display: "flex"
    },
    onClick: close
  }, React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 520,
      width: "100%",
      margin: "auto",
      maxHeight: "100%",
      overflowY: "auto",
      background: "#fff",
      borderTop: "4px solid " + GOLD_LINE
    }
  }, React.createElement("div", {
    style: {
      background: NAVY,
      color: "#fff",
      padding: "16px 18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 11,
      letterSpacing: 3,
      color: GOLD_LINE,
      fontWeight: 800
    }
  }, window.TITAN.eventDay || ""), React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: 1,
      textTransform: "uppercase",
      marginTop: 2
    }
  }, kind === "program" ? "Evening program" : "Location")), React.createElement("button", {
    onClick: close,
    className: "barlow",
    style: {
      background: "none",
      border: "1px solid rgba(255,255,255,0.4)",
      color: "#fff",
      padding: "6px 12px",
      cursor: "pointer",
      fontSize: 12,
      letterSpacing: 2,
      flexShrink: 0
    }
  }, "\u2715 CLOSE")), kind === "program" && React.createElement("div", {
    style: {
      padding: "10px 18px 18px"
    }
  }, PROGRAM.map(([t, what, icon], i) => React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "11px 0",
      borderBottom: i < PROGRAM.length - 1 ? "1px solid " + BORDER : "none"
    }
  }, React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: BG_OFF,
      border: "2px solid " + GOLD_LINE,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 17,
      flexShrink: 0
    }
  }, icon), React.createElement("span", {
    className: "barlow",
    style: {
      fontSize: 20,
      fontWeight: 900,
      color: GOLD_LINE,
      width: 54,
      flexShrink: 0
    }
  }, t), React.createElement("span", {
    className: "barlow",
    style: {
      fontSize: 17,
      fontWeight: 800,
      color: NAVY,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      lineHeight: 1.15
    }
  }, what)))), kind === "venue" && (VENUE ? React.createElement("div", {
    style: {
      padding: "20px 18px 22px",
      color: NAVY
    }
  }, React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 22,
      fontWeight: 900,
      textTransform: "uppercase",
      lineHeight: 1.15
    }
  }, VENUE.name), VENUE.address.map(l => React.createElement("div", {
    key: l,
    style: {
      fontSize: 15,
      marginTop: 6,
      color: INK
    }
  }, l)), React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, React.createElement("a", {
    className: "barlow",
    style: btn,
    target: "_blank",
    rel: "noopener",
    href: "https://www.google.com/maps/search/?api=1&query=" + q
  }, "Open in Google Maps \u2192"), React.createElement("a", {
    className: "barlow",
    style: {
      ...btn,
      background: "#fff",
      color: ACCENT,
      border: "1px solid " + ACCENT
    },
    target: "_blank",
    rel: "noopener",
    href: "https://maps.apple.com/?q=" + q
  }, "Open in Apple Maps \u2192")), React.createElement("p", {
    style: {
      fontSize: 13,
      color: MUTED,
      marginTop: 16,
      lineHeight: 1.5
    }
  }, PROGRAM.length ? "Doors open at " + PROGRAM[0][0] + ". " : "", "Please keep the location within the community.")) : React.createElement("div", {
    style: {
      padding: "26px 20px",
      textAlign: "center",
      color: NAVY
    }
  }, React.createElement("div", {
    style: {
      fontSize: 34
    }
  }, "\u{1F4CD}"), React.createElement("p", {
    className: "barlow",
    style: {
      fontSize: 20,
      fontWeight: 900,
      textTransform: "uppercase",
      margin: "8px 0 6px"
    }
  }, "Announced ", VENUE_REVEAL), React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: INK
    }
  }, "Local time. The address will appear right here, so open the app again then.")))));
}
function VoteSheet({
  myId,
  close,
  pickMe
}) {
  const src = myId != null && `https://tally.so/embed/${VOTE.formId}?hideTitle=1&transparentBackground=1&alignLeft=1&attendee=${encodeURIComponent(myId)}`;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(2,19,99,0.55)",
      zIndex: 300,
      padding: 12,
      display: "flex"
    },
    onClick: close
  }, React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 560,
      width: "100%",
      margin: "auto",
      height: "min(640px, 100%)",
      background: "#fff",
      borderTop: "4px solid " + ACCENT,
      display: "flex",
      flexDirection: "column"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 16px",
      borderBottom: "1px solid " + BORDER
    }
  }, React.createElement("span", {
    className: "barlow",
    style: {
      fontSize: 20,
      fontWeight: 900,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: NAVY
    }
  }, "Best pitch"), React.createElement("button", {
    onClick: close,
    className: "barlow",
    style: {
      background: "none",
      border: "1px solid " + BORDER,
      color: MUTED,
      padding: "6px 12px",
      cursor: "pointer",
      fontSize: 12,
      letterSpacing: 2
    }
  }, "\u2715 CLOSE")), src ? React.createElement("iframe", {
    src: src,
    title: "Vote for the best pitch",
    style: {
      flex: 1,
      width: "100%",
      border: 0
    }
  }) : React.createElement("div", {
    style: {
      flex: 1,
      padding: "28px 20px",
      textAlign: "center",
      color: NAVY
    }
  }, React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      margin: "0 0 20px"
    }
  }, "One vote per person. First tell us who you are: find your name under ", React.createElement("b", null, "Who To Meet"), " and tap it."), React.createElement("button", {
    onClick: pickMe,
    className: "barlow",
    style: {
      background: ACCENT,
      color: ON_ACCENT,
      border: "none",
      padding: "12px 18px",
      fontSize: 14,
      fontWeight: 900,
      letterSpacing: 2,
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, "Find my name \u2192"))));
}
function Modal({
  a,
  setSelected
}) {
  const mm = MATCHES.filter(m => m.a === a.name || m.b === a.name);
  const websiteHref = a.website ? a.website.startsWith("http") ? a.website : "https://" + a.website : null;
  const liHref = a.linkedin ? a.linkedin.startsWith("http") ? a.linkedin : "https://" + a.linkedin : null;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(20,17,8,0.55)",
      zIndex: 200,
      overflowY: "auto",
      padding: 20
    },
    onClick: () => setSelected(null)
  }, React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 600,
      margin: "0 auto",
      background: "#FFFFFF",
      border: "1px solid #C3CDE2",
      borderTop: "4px solid " + ACCENT,
      padding: 24
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 16
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, React.createElement(Avatar, {
    a: a,
    size: 72
  }), React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      color: FAINT,
      fontSize: 11,
      marginBottom: 4
    }
  }, "#", String(a.id).padStart(2, "0"), " / ", a.cluster && a.cluster[0] || "—"), React.createElement("div", {
    className: "barlow",
    style: {
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: -0.5,
      lineHeight: 1
    }
  }, a.name), React.createElement("div", {
    className: "barlow",
    style: {
      color: GOLD,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginTop: 3
    }
  }, a.profession))), React.createElement("button", {
    onClick: () => setSelected(null),
    className: "barlow",
    style: {
      background: "none",
      border: "1px solid " + BORDER,
      color: MUTED,
      padding: "6px 12px",
      cursor: "pointer",
      fontSize: 12,
      letterSpacing: 2
    }
  }, "\u2715 CLOSE")), (a.role || a.company) && React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginBottom: 8,
      letterSpacing: 0.5
    }
  }, [a.role, a.company].filter(Boolean).join(" · "), a.sector ? "  —  " + a.sector : ""), a.summary && React.createElement("div", {
    style: {
      fontSize: 13,
      color: INK,
      lineHeight: 1.6,
      marginBottom: 10
    }
  }, a.summary), a.bio && React.createElement("div", {
    style: {
      fontSize: 13,
      color: a.summary ? MUTED : INK,
      lineHeight: 1.6,
      marginBottom: 14
    }
  }, a.summary && React.createElement("span", {
    className: "barlow",
    style: {
      fontSize: 10,
      color: GOLD,
      letterSpacing: 1.5,
      marginRight: 6
    }
  }, "IN THEIR WORDS"), a.bio), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, a.city && React.createElement(Badge, {
    text: a.city,
    border: BORDER,
    color: MUTED
  }), a.org && React.createElement(Badge, {
    text: a.org,
    border: BORDER,
    color: MUTED
  }), liHref && React.createElement("a", {
    className: "d2-link",
    href: liHref,
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: MUTED,
      fontSize: 11,
      textDecoration: "none",
      border: "1px solid " + BORDER,
      padding: "3px 8px",
      letterSpacing: 1
    }
  }, "LINKEDIN \u2197"), websiteHref && React.createElement("a", {
    className: "d2-link",
    href: websiteHref,
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: MUTED,
      fontSize: 11,
      textDecoration: "none",
      border: "1px solid " + BORDER,
      padding: "3px 8px",
      letterSpacing: 1
    }
  }, a.website, " \u2197")), a.tedTalk && React.createElement(React.Fragment, null, React.createElement(Label, null, "\u2605 Key Insight"), React.createElement("div", {
    style: {
      background: "#EEF3FC",
      borderLeft: "3px solid " + ACCENT,
      padding: "12px 16px",
      fontSize: 13,
      lineHeight: 1.7,
      color: INK
    }
  }, a.tedTalk)), a.descriptors && a.descriptors.length > 0 && React.createElement(React.Fragment, null, React.createElement(Label, null, "Stack"), React.createElement(StackChips, {
    stack: a.descriptors
  })), a.goals && a.goals.length > 0 && React.createElement(React.Fragment, null, React.createElement(Label, null, "Seeking"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, a.goals.map(g => React.createElement("span", {
    key: g,
    style: {
      display: "inline-block",
      background: "#fff",
      border: "1px solid " + BORDER,
      color: MUTED,
      fontSize: 12,
      padding: "4px 10px"
    }
  }, g)))), a.cluster && a.cluster.length > 0 && React.createElement(React.Fragment, null, React.createElement(Label, null, "Clusters"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, a.cluster.map(c => {
    const cl = CLUSTERS.find(x => x.name === c);
    return React.createElement(Badge, {
      key: c,
      text: c,
      border: cl && cl.color || BORDER,
      color: cl && cl.color || MUTED
    });
  }))), a.collab && a.collab.length > 0 && React.createElement(React.Fragment, null, React.createElement(Label, null, "Collaboration Angles"), a.collab.map((c, i) => React.createElement("div", {
    key: i,
    style: {
      fontSize: 12.5,
      color: MUTED,
      lineHeight: 1.6,
      marginBottom: 7,
      display: "flex",
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      color: ACCENT,
      fontWeight: 900
    }
  }, "\u2192"), React.createElement("span", null, React.createElement(AngleText, {
    text: c,
    setSelected: setSelected
  }))))), mm.length > 0 && React.createElement(React.Fragment, null, React.createElement(Label, null, "Matchmaking Signals"), mm.map(m => {
    const otherName = m.a === a.name ? m.b : m.a;
    return React.createElement("div", {
      key: m.rank,
      className: "d2-flat",
      style: {
        padding: "10px 12px",
        marginBottom: 8
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, React.createElement("span", {
      style: {
        color: GOLD,
        fontSize: 11
      }
    }, "#", m.rank), React.createElement(Badge, {
      text: m.tag,
      bg: TAG_COLORS[m.tag] || "#888",
      color: "#fff"
    })), React.createElement("div", {
      className: "barlow",
      style: {
        fontSize: 15,
        fontWeight: 800,
        marginBottom: 4
      }
    }, React.createElement("span", {
      style: byName(otherName) ? {
        cursor: "pointer",
        borderBottom: "1px solid " + BORDER
      } : undefined,
      onClick: () => {
        const o = byName(otherName);
        if (o) setSelected(o);
      }
    }, otherName)), React.createElement("div", {
      style: {
        fontSize: 12,
        color: MUTED,
        lineHeight: 1.55
      }
    }, React.createElement(AngleText, {
      text: m.why,
      setSelected: setSelected
    })));
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
