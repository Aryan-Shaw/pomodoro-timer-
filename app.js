(() => {
  // app.jsx
  var { useState, useEffect, useRef, useMemo, useCallback } = React;
  var Icon = ({ children, size = 16, color = "currentColor", style, ...rest }) => /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style,
      ...rest
    },
    children
  );
  var Music = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 18V5l12-2v13" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "18", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "16", r: "3" }));
  var Music2 = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "18", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 18V2l7 4" }));
  var ListChecks = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m3 17 2 2 4-4" }), /* @__PURE__ */ React.createElement("path", { d: "m3 7 2 2 4-4" }), /* @__PURE__ */ React.createElement("path", { d: "M13 6h8" }), /* @__PURE__ */ React.createElement("path", { d: "M13 12h8" }), /* @__PURE__ */ React.createElement("path", { d: "M13 18h8" }));
  var Globe = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }), /* @__PURE__ */ React.createElement("path", { d: "M2 12h20" }));
  var SettingsIcon = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }));
  var Play = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("polygon", { points: "6 3 20 12 6 21 6 3" }));
  var Pause = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "14", y: "4", width: "4", height: "16" }), /* @__PURE__ */ React.createElement("rect", { x: "6", y: "4", width: "4", height: "16" }));
  var ChevronRight = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m9 18 6-6-6-6" }));
  var X = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M18 6 6 18" }), /* @__PURE__ */ React.createElement("path", { d: "m6 6 12 12" }));
  var Plus = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "M12 5v14" }));
  var Flame = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }));
  var BarChart3 = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 3v18h18" }), /* @__PURE__ */ React.createElement("path", { d: "M18 17V9" }), /* @__PURE__ */ React.createElement("path", { d: "M13 17V5" }), /* @__PURE__ */ React.createElement("path", { d: "M8 17v-3" }));
  var Bell = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }), /* @__PURE__ */ React.createElement("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }));
  var Minus = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }));
  var Volume2 = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), /* @__PURE__ */ React.createElement("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }), /* @__PURE__ */ React.createElement("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }));
  var Sparkles = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }), /* @__PURE__ */ React.createElement("path", { d: "M20 3v4" }), /* @__PURE__ */ React.createElement("path", { d: "M22 5h-4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 17v2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 18H3" }));
  var ImageIcon = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "9", r: "2" }), /* @__PURE__ */ React.createElement("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }));
  var ArrowLeft = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m12 19-7-7 7-7" }), /* @__PURE__ */ React.createElement("path", { d: "M19 12H5" }));
  var Trash2 = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 6h18" }), /* @__PURE__ */ React.createElement("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }), /* @__PURE__ */ React.createElement("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }), /* @__PURE__ */ React.createElement("line", { x1: "10", x2: "10", y1: "11", y2: "17" }), /* @__PURE__ */ React.createElement("line", { x1: "14", x2: "14", y1: "11", y2: "17" }));
  var Clock3 = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("polyline", { points: "12 6 12 12 16.5 12" }));
  var Upload = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "17 8 12 3 7 8" }), /* @__PURE__ */ React.createElement("line", { x1: "12", x2: "12", y1: "3", y2: "15" }));
  var Repeat = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m17 2 4 4-4 4" }), /* @__PURE__ */ React.createElement("path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }), /* @__PURE__ */ React.createElement("path", { d: "m7 22-4-4 4-4" }), /* @__PURE__ */ React.createElement("path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }));
  var Target = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "6" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "2" }));
  var FANTASY_BG = window.FANTASY_BG || "";
  var PHOTO_BG_GRADIENT = "radial-gradient(120% 100% at 80% 10%, #2a3a5c 0%, #121826 45%, #05060a 100%)";
  var ACCENTS = [
    { key: "blue", hex: "#5b9df0" },
    { key: "purple", hex: "#8b7cf6" },
    { key: "green", hex: "#3ecf8e" },
    { key: "pink", hex: "#ec6fa3" },
    { key: "amber", hex: "#e0a53c" }
  ];
  var TASK_DOT_COLORS = ["#3ecf8e", "#5b9df0", "#e0a53c", "#ec6fa3", "#8b7cf6", "#4dc9e6"];
  var MODES = {
    focus: { label: "Focus", key: "focus" },
    short: { label: "Short Break", key: "short" },
    long: { label: "Long Break", key: "long" }
  };
  var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var GLASS = {
    background: "rgba(15,15,15,0.85)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.08)"
  };
  var GLASS_RAISED = {
    background: "rgba(255,255,255,0.055)",
    border: "1px solid rgba(255,255,255,0.09)"
  };
  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  function formatMinutes(mins) {
    const h = Math.floor(mins / 60);
    const m = Math.round(mins % 60);
    if (h === 0) return `${m}m`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}m`;
  }
  function uid() {
    return Math.random().toString(36).slice(2, 10);
  }
  function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
  function playAlarm(style, volume) {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const now = ctx.currentTime;
      const tone = (freq, start, dur, type = "sine", peak = 0.3) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + start);
        gain.gain.linearRampToValueAtTime(peak * volume, now + start + 0.02);
        gain.gain.exponentialRampToValueAtTime(1e-3, now + start + dur);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + start);
        osc.stop(now + start + dur + 0.05);
      };
      if (style === "chime") {
        tone(523.25, 0, 0.5, "sine", 0.28);
        tone(659.25, 0.18, 0.6, "sine", 0.28);
        tone(783.99, 0.36, 0.9, "sine", 0.28);
      } else if (style === "bell") {
        tone(880, 0, 1.4, "sine", 0.3);
        tone(1760, 0, 1.2, "sine", 0.07);
      } else {
        tone(880, 0, 0.12, "square", 0.2);
        tone(880, 0.18, 0.12, "square", 0.2);
        tone(880, 0.36, 0.16, "square", 0.2);
      }
      setTimeout(() => ctx.close().catch(() => {
      }), 2500);
    } catch (e) {
    }
  }
  function notifyUser(title, body) {
    try {
      if (typeof window === "undefined" || !("Notification" in window)) return;
      if (Notification.permission === "granted") new Notification(title, { body, silent: true });
    } catch (e) {
    }
  }
  function useAmbientAudio(effect, enabled, volume) {
    const masterRef = useRef(null);
    useEffect(() => {
      if (!enabled || effect === "off" || effect === "bubbles-visual-only") return void 0;
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return void 0;
      let cancelled = false;
      const ctx = new Ctx();
      const master = ctx.createGain();
      master.gain.value = volume;
      master.connect(ctx.destination);
      masterRef.current = master;
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (effect === "rain") {
          data[i] = white;
        } else {
          lastOut = (lastOut + 0.02 * white) / 1.02;
          data[i] = lastOut * 3.2;
        }
      }
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      const filter = ctx.createBiquadFilter();
      if (effect === "rain") {
        filter.type = "highpass";
        filter.frequency.value = 850;
      } else if (effect === "bubbles") {
        filter.type = "bandpass";
        filter.frequency.value = 900;
        filter.Q.value = 0.6;
      } else {
        filter.type = "lowpass";
        filter.frequency.value = 480;
      }
      const bedGain = ctx.createGain();
      bedGain.gain.value = effect === "rain" ? 0.5 : 0.35;
      src.connect(filter).connect(bedGain).connect(master);
      src.start();
      const timers = [];
      const scheduleAccent = () => {
        if (cancelled) return;
        const delay = effect === "rain" ? 70 + Math.random() * 140 : effect === "bubbles" ? 400 + Math.random() * 550 : 1400 + Math.random() * 2800;
        const t = setTimeout(() => {
          if (cancelled) return;
          const now = ctx.currentTime;
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          if (effect === "rain") {
            o.type = "sine";
            o.frequency.value = 2800 + Math.random() * 2200;
            g.gain.setValueAtTime(0, now);
            g.gain.linearRampToValueAtTime(0.05, now + 4e-3);
            g.gain.exponentialRampToValueAtTime(1e-3, now + 0.05);
            o.connect(g).connect(master);
            o.start(now);
            o.stop(now + 0.07);
          } else if (effect === "bubbles") {
            o.type = "sine";
            o.frequency.setValueAtTime(280 + Math.random() * 220, now);
            o.frequency.exponentialRampToValueAtTime(650 + Math.random() * 300, now + 0.15);
            g.gain.setValueAtTime(0, now);
            g.gain.linearRampToValueAtTime(0.06, now + 0.02);
            g.gain.exponentialRampToValueAtTime(1e-3, now + 0.2);
            o.connect(g).connect(master);
            o.start(now);
            o.stop(now + 0.25);
          } else {
            o.type = "sine";
            o.frequency.value = 1700 + Math.random() * 900;
            g.gain.setValueAtTime(0, now);
            g.gain.linearRampToValueAtTime(0.03, now + 0.01);
            g.gain.exponentialRampToValueAtTime(1e-3, now + 0.3);
            o.connect(g).connect(master);
            o.start(now);
            o.stop(now + 0.35);
          }
          scheduleAccent();
        }, delay);
        timers.push(t);
      };
      scheduleAccent();
      return () => {
        cancelled = true;
        timers.forEach(clearTimeout);
        try {
          src.stop();
        } catch (e) {
        }
        try {
          ctx.close();
        } catch (e) {
        }
        masterRef.current = null;
      };
    }, [effect, enabled]);
    useEffect(() => {
      if (masterRef.current) masterRef.current.gain.value = volume;
    }, [volume]);
  }
  function GlobalStyle() {
    return /* @__PURE__ */ React.createElement("style", null, `
      * { -webkit-tap-highlight-color: transparent; }
      button { font-family: inherit; }

      .pf-icon-btn {
        transition: background .2s ease, border-color .2s ease, transform .18s cubic-bezier(.2,.8,.2,1), box-shadow .2s ease;
      }
      .pf-icon-btn:hover {
        background: rgba(255,255,255,0.1) !important;
        border-color: rgba(255,255,255,0.18) !important;
        transform: translateY(-1px);
      }
      .pf-icon-btn:active { transform: scale(0.94); }

      .pf-start-btn {
        position: relative; overflow: hidden;
        transition: transform .22s cubic-bezier(.2,.8,.2,1), box-shadow .25s ease, filter .2s ease, background .25s ease;
      }
      .pf-start-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
      .pf-start-btn:active { transform: translateY(0) scale(0.97); }
      .pf-start-btn .sheen {
        position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
        background: linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0) 60%);
      }
      .pf-start-btn .ring {
        position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25);
      }

      .pf-mini-btn {
        transition: background .2s ease, color .2s ease, transform .18s cubic-bezier(.2,.8,.2,1), border-color .2s ease, box-shadow .2s ease;
      }
      .pf-mini-btn:hover { background: rgba(255,255,255,0.14) !important; transform: translateY(-1px); }
      .pf-mini-btn:active { transform: scale(0.96); }

      .pf-mode-pill {
        transition: background .25s cubic-bezier(.2,.8,.2,1), color .25s ease, transform .18s ease, box-shadow .25s ease;
      }
      .pf-mode-pill:hover:not([data-active="true"]) {
        background: rgba(255,255,255,0.08) !important;
        color: rgba(255,255,255,0.9) !important;
      }
      .pf-mode-pill:active { transform: scale(0.97); }

      .pf-timer-digits {
        transition: opacity .2s ease, transform .25s cubic-bezier(.2,.8,.2,1);
      }

      .pf-task-chip {
        animation: pfFadeIn .28s cubic-bezier(.2,.8,.2,1);
        transition: background .2s ease, border-color .2s ease, transform .2s ease;
      }

      .pf-scroll::-webkit-scrollbar { width: 6px; }
      .pf-scroll::-webkit-scrollbar-track { background: transparent; }
      .pf-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.14); border-radius: 10px; }

      .pf-range { -webkit-appearance: none; appearance: none; height: 4px; border-radius: 999px; background: rgba(255,255,255,0.14); outline: none; }
      .pf-range::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: #fff; cursor: pointer; box-shadow: 0 0 0 3px rgba(255,255,255,0.12); transition: transform .15s ease; }
      .pf-range::-webkit-slider-thumb:hover { transform: scale(1.12); }

      .pf-fade-in { animation: pfFadeIn .22s cubic-bezier(.2,.8,.2,1); }
      @keyframes pfFadeIn {
        from { opacity: 0; transform: translateY(6px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }

      .pf-panel-slide {
        animation: pfPanelIn .28s cubic-bezier(.2,.8,.2,1);
      }
      @keyframes pfPanelIn {
        from { opacity: 0; transform: translateX(12px); }
        to { opacity: 1; transform: translateX(0); }
      }

      .pf-streak {
        transition: transform .2s cubic-bezier(.2,.8,.2,1), background .2s ease;
      }
      .pf-streak:hover { transform: scale(1.04); }

      @keyframes floatUp {
        0% { transform: translate(0,110%) scale(0.7); opacity: 0; }
        10% { opacity: 1; }
        88% { opacity: 0.7; }
        100% { transform: translate(var(--drift), -20%) scale(1); opacity: 0; }
      }
      @keyframes twinkle {
        0%, 100% { opacity: 0.15; transform: scale(0.85); }
        50% { opacity: 1; transform: scale(1.15); }
      }
      @keyframes fall {
        0% { transform: translateY(-10%); opacity: 0; }
        8% { opacity: 0.6; }
        100% { transform: translateY(120vh); opacity: 0.2; }
      }
    `);
  }
  function AmbientLayer({ effect, accent }) {
    const particles = useMemo(() => {
      if (effect === "off") return [];
      const count = effect === "rain" ? 40 : effect === "bubbles" ? 15 : 24;
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: effect === "bubbles" ? 20 + Math.random() * 46 : 2 + Math.random() * (effect === "motes" ? 5 : 2),
        duration: effect === "bubbles" ? 10 + Math.random() * 9 : 7 + Math.random() * 10,
        delay: -Math.random() * 14,
        drift: (Math.random() - 0.5) * (effect === "bubbles" ? 36 : 50)
      }));
    }, [effect]);
    if (effect === "off" || particles.length === 0) return null;
    return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 } }, particles.map((p) => {
      if (effect === "stars")
        return /* @__PURE__ */ React.createElement("div", { key: p.id, style: { position: "absolute", left: `${p.left}%`, top: `${p.id * 37 % 90}%`, width: p.size, height: p.size, borderRadius: "50%", background: "#fff", animation: `twinkle ${2 + p.id % 4}s ease-in-out ${p.delay}s infinite` } });
      if (effect === "rain")
        return /* @__PURE__ */ React.createElement("div", { key: p.id, style: { position: "absolute", left: `${p.left}%`, top: 0, width: 1.5, height: 60, background: "linear-gradient(to bottom, transparent, rgba(180,210,255,0.5))", animation: `fall ${0.6 + Math.random() * 0.5}s linear ${p.delay}s infinite` } });
      if (effect === "bubbles")
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: p.id,
            style: {
              position: "absolute",
              left: `${p.left}%`,
              bottom: 0,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55), rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.18) 100%)",
              border: "1px solid rgba(255,255,255,0.45)",
              boxShadow: "0 0 14px rgba(255,255,255,0.12), inset 0 0 10px rgba(255,255,255,0.15)",
              "--drift": `${p.drift}px`,
              animation: `floatUp ${p.duration}s ease-in-out ${p.delay}s infinite`
            }
          }
        );
      return /* @__PURE__ */ React.createElement("div", { key: p.id, style: { position: "absolute", left: `${p.left}%`, bottom: 0, width: p.size, height: p.size, borderRadius: "50%", background: accent, filter: "blur(1.5px)", opacity: 0.45, boxShadow: `0 0 ${p.size * 2}px ${accent}`, "--drift": `${p.drift}px`, animation: `floatUp ${p.duration}s ease-in ${p.delay}s infinite` } });
    }));
  }
  function IconButton({ children, onClick, active, title, accentHex }) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pf-icon-btn",
        onClick,
        title,
        style: { width: 38, height: 38, borderRadius: 11, border: `1px solid ${active ? `${accentHex}55` : "rgba(255,255,255,0.09)"}`, background: active ? `${accentHex}22` : "rgba(255,255,255,0.05)", color: "#fff", display: "grid", placeItems: "center", cursor: "pointer" }
      },
      children
    );
  }
  function Stepper({ value, onChange, min = 1, max = 180, suffix = " min" }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, ...GLASS_RAISED, borderRadius: 10, padding: "5px 8px" } }, /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: () => onChange(Math.max(min, value - 1)), style: pillMiniBtn }, /* @__PURE__ */ React.createElement(Minus, { size: 13 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 600, minWidth: 52, textAlign: "center", fontVariantNumeric: "tabular-nums" } }, value, suffix), /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: () => onChange(Math.min(max, value + 1)), style: pillMiniBtn }, /* @__PURE__ */ React.createElement(Plus, { size: 13 })));
  }
  var pillMiniBtn = { width: 22, height: 22, borderRadius: 6, border: "none", background: "rgba(255,255,255,0.08)", color: "#fff", display: "grid", placeItems: "center", cursor: "pointer" };
  function Toggle({ on, onChange, accent }) {
    return /* @__PURE__ */ React.createElement("button", { onClick: () => onChange(!on), style: { width: 38, height: 21, borderRadius: 999, border: "none", cursor: "pointer", background: on ? accent : "rgba(255,255,255,0.15)", position: "relative", transition: "background .15s ease", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: 2, left: on ? 19 : 2, width: 17, height: 17, borderRadius: "50%", background: "#fff", transition: "left .15s ease" } }));
  }
  function SectionLabel({ children }) {
    return /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,0.38)", textTransform: "uppercase", letterSpacing: 1.1, margin: "18px 0 10px" } }, children);
  }
  function SettingsRow({ icon, label, children }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "rgba(255,255,255,0.82)" } }, icon, label), children);
  }
  function PillGroup({ options, value, onChange, accentHex }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, options.map((opt) => /* @__PURE__ */ React.createElement("button", { key: opt, onClick: () => onChange(opt), style: { border: "none", cursor: "pointer", fontSize: 11.5, fontWeight: 600, textTransform: "capitalize", padding: "6px 11px", borderRadius: 8, color: value === opt ? "#04140d" : "rgba(255,255,255,0.68)", background: value === opt ? accentHex : "rgba(255,255,255,0.06)" } }, opt)));
  }
  function MusicPopover({ tracks, onAddFiles, onRemove, currentTrackId, isPlaying, onToggleTrack, loop, setLoop, onClose }) {
    const fileRef = useRef(null);
    return /* @__PURE__ */ React.createElement("div", { className: "pf-fade-in pf-scroll", style: { position: "absolute", top: 68, right: 178, width: 290, maxHeight: 360, overflowY: "auto", ...GLASS, borderRadius: 16, padding: "14px 16px", zIndex: 30, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Music2, { size: 14 }), " Background music"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: () => fileRef.current?.click(), title: "Add tracks", style: { ...pillMiniBtn, width: 24, height: 24, background: "rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement(Plus, { size: 13 })), /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: onClose, style: { ...pillMiniBtn, width: 24, height: 24, background: "rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement(X, { size: 13 })))), tracks.length === 0 ? /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => fileRef.current?.click(),
        className: "pf-mini-btn",
        style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "16px 10px", borderRadius: 12, border: "1px dashed rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.75)", fontSize: 12.5, fontWeight: 600, cursor: "pointer" }
      },
      /* @__PURE__ */ React.createElement(Upload, { size: 14 }),
      " Add audio files"
    ) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 } }, tracks.map((t) => {
      const active = t.id === currentTrackId;
      const playingHere = active && isPlaying;
      return /* @__PURE__ */ React.createElement("div", { key: t.id, style: { display: "flex", alignItems: "center", gap: 9, padding: "7px 8px", borderRadius: 10, background: active ? "rgba(255,255,255,0.08)" : "transparent" } }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => onToggleTrack(t),
          style: { width: 28, height: 28, borderRadius: "50%", border: "none", cursor: "pointer", display: "grid", placeItems: "center", background: "rgba(255,255,255,0.14)", color: "#fff", flexShrink: 0 }
        },
        playingHere ? /* @__PURE__ */ React.createElement(Pause, { size: 12, fill: "#fff" }) : /* @__PURE__ */ React.createElement(Play, { size: 12, fill: "#fff", style: { marginLeft: 1 } })
      ), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 12, fontWeight: 500, color: active ? "#fff" : "rgba(255,255,255,0.75)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, t.name), /* @__PURE__ */ React.createElement("button", { onClick: () => onRemove(t.id), style: { background: "none", border: "none", cursor: "pointer", padding: 2, opacity: 0.35, flexShrink: 0 } }, /* @__PURE__ */ React.createElement(Trash2, { size: 12, color: "#fff" })));
    })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "rgba(255,255,255,0.75)", paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.07)" } }, /* @__PURE__ */ React.createElement(Repeat, { size: 13 }), " Loop track", /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ React.createElement(Toggle, { on: loop, onChange: setLoop, accent: "#8b7cf6" })))), /* @__PURE__ */ React.createElement("input", { ref: fileRef, type: "file", accept: "audio/*", multiple: true, onChange: onAddFiles, style: { display: "none" } }));
  }
  function ChallengeModal({ goal, setGoal, todayMinutes, onClose, accentHex }) {
    const [hrs, setHrs] = useState(goal ? Math.floor(goal / 60) : 2);
    const [mins, setMins] = useState(goal ? goal % 60 : 0);
    const weekday = WEEKDAYS[(/* @__PURE__ */ new Date()).getDay()];
    const targetMinutes = hrs * 60 + mins;
    const accepted = goal != null;
    const pct = accepted ? Math.min(100, Math.round(todayMinutes / Math.max(1, goal) * 100)) : 0;
    const reached = accepted && todayMinutes >= goal;
    return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40, display: "flex", alignItems: "center", justifyContent: "center" }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "pf-fade-in", onClick: (e) => e.stopPropagation(), style: { width: 380, maxWidth: "90%", ...GLASS, borderRadius: 20, padding: "22px 24px", boxShadow: "0 30px 70px rgba(0,0,0,0.6)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10.5, fontWeight: 700, letterSpacing: 1.2, color: accentHex, textTransform: "uppercase" } }, "Today's challenge"), /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: onClose, style: { ...pillMiniBtn, width: 24, height: 24, background: "rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement(X, { size: 13 }))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 19, fontWeight: 700, lineHeight: 1.35, marginBottom: 20 } }, "Today ", weekday, ", I want to focus for a total of..."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, justifyContent: "center", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, ...GLASS_RAISED, borderRadius: 14, padding: "12px 16px" } }, /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: () => setHrs((h) => Math.max(0, h - 1)), style: { ...pillMiniBtn, width: 26, height: 26 } }, /* @__PURE__ */ React.createElement(Minus, { size: 14 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 28, fontWeight: 800, minWidth: 40, textAlign: "center", fontVariantNumeric: "tabular-nums" } }, hrs), /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: () => setHrs((h) => Math.min(12, h + 1)), style: { ...pillMiniBtn, width: 26, height: 26 } }, /* @__PURE__ */ React.createElement(Plus, { size: 14 }))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, color: "rgba(255,255,255,0.45)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.6 } }, "Hours")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, ...GLASS_RAISED, borderRadius: 14, padding: "12px 16px" } }, /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: () => setMins((m) => Math.max(0, m - 5)), style: { ...pillMiniBtn, width: 26, height: 26 } }, /* @__PURE__ */ React.createElement(Minus, { size: 14 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 28, fontWeight: 800, minWidth: 40, textAlign: "center", fontVariantNumeric: "tabular-nums" } }, String(mins).padStart(2, "0")), /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: () => setMins((m) => Math.min(55, m + 5)), style: { ...pillMiniBtn, width: 26, height: 26 } }, /* @__PURE__ */ React.createElement(Plus, { size: 14 }))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, color: "rgba(255,255,255,0.45)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.6 } }, "Minutes"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.5, marginBottom: 18 } }, "All your focus sessions today add up \u2014 breaks and pauses don't count."), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pf-start-btn",
        onClick: () => setGoal(targetMinutes),
        style: { width: "100%", border: "none", cursor: "pointer", padding: "13px 0", borderRadius: 13, fontSize: 14, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: `linear-gradient(135deg, ${accentHex}, ${accentHex}bb)`, boxShadow: `0 12px 26px ${accentHex}40` }
      },
      /* @__PURE__ */ React.createElement("span", { className: "sheen" }),
      /* @__PURE__ */ React.createElement("span", { className: "ring" }),
      /* @__PURE__ */ React.createElement(Flame, { size: 15 }),
      " ",
      accepted ? "Update challenge" : "Accept challenge"
    ), accepted && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11.5, color: "rgba(255,255,255,0.6)", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", null, formatMinutes(todayMinutes), " focused today"), /* @__PURE__ */ React.createElement("span", null, formatMinutes(goal), " goal")), /* @__PURE__ */ React.createElement("div", { style: { height: 6, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${pct}%`, height: "100%", background: accentHex, transition: "width .3s ease" } })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, fontSize: 12, color: reached ? accentHex : "rgba(255,255,255,0.5)", fontWeight: 600 } }, reached ? "\u{1F381} Prize unlocked \u2014 challenge complete." : "\u{1F381} Reach your goal today to unlock the prize."))));
  }
  function SettingsPanel({ settings, setSettings, onClose, accentHex, notifPermission, requestNotifPermission, notifSupported }) {
    const fileRef = useRef(null);
    const handleCustomUpload = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setSettings((s) => ({ ...s, background: "custom", customBackgroundUrl: reader.result }));
      reader.readAsDataURL(file);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "pf-fade-in pf-scroll", style: { position: "absolute", top: 68, right: 20, width: 320, maxHeight: "calc(100% - 88px)", overflowY: "auto", ...GLASS, borderRadius: 18, padding: "16px 18px", zIndex: 30, boxShadow: "0 24px 60px rgba(0,0,0,0.55)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, fontWeight: 700 } }, "Settings"), /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: onClose, style: { ...pillMiniBtn, width: 26, height: 26, background: "rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement(X, { size: 14 }))), /* @__PURE__ */ React.createElement(SectionLabel, null, "Appearance"), /* @__PURE__ */ React.createElement("button", { onClick: () => fileRef.current?.click(), className: "pf-mini-btn", style: { width: "100%", display: "flex", alignItems: "center", gap: 9, ...GLASS_RAISED, borderRadius: 10, padding: "9px 10px", color: "#fff", cursor: "pointer", fontSize: 12, marginBottom: 12 } }, /* @__PURE__ */ React.createElement(ImageIcon, { size: 14, color: accentHex }), "Set your own photo as the background", /* @__PURE__ */ React.createElement(Upload, { size: 12, style: { marginLeft: "auto", opacity: 0.55 } })), /* @__PURE__ */ React.createElement("input", { ref: fileRef, type: "file", accept: "image/*", onChange: handleCustomUpload, style: { display: "none" } }), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Background" }, /* @__PURE__ */ React.createElement(PillGroup, { options: ["fantasy", "photo", "custom"], value: settings.background, onChange: (v) => setSettings((s) => ({ ...s, background: v })), accentHex })), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Accent" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, ACCENTS.map((a) => /* @__PURE__ */ React.createElement("button", { key: a.key, onClick: () => setSettings((s) => ({ ...s, accent: a.key })), style: { width: 20, height: 20, borderRadius: "50%", border: settings.accent === a.key ? "2px solid #fff" : "2px solid transparent", background: a.hex, cursor: "pointer" } })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "rgba(255,255,255,0.82)", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Sparkles, { size: 14, color: accentHex }), " Ambient effect"), /* @__PURE__ */ React.createElement(PillGroup, { options: ["off", "motes", "stars", "rain", "bubbles"], value: settings.ambient, onChange: (v) => setSettings((s) => ({ ...s, ambient: v })), accentHex }), settings.ambient !== "off" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(SettingsRow, { label: "Ambient sound" }, /* @__PURE__ */ React.createElement(Toggle, { on: settings.ambientSound, onChange: (v) => setSettings((s) => ({ ...s, ambientSound: v })), accent: accentHex })), settings.ambientSound && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 4 } }, /* @__PURE__ */ React.createElement(Volume2, { size: 14, color: "rgba(255,255,255,0.45)" }), /* @__PURE__ */ React.createElement("input", { className: "pf-range", type: "range", min: 0, max: 1, step: 0.05, value: settings.ambientVolume, onChange: (e) => setSettings((s) => ({ ...s, ambientVolume: parseFloat(e.target.value) })), style: { flex: 1 } })))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 4 } }), /* @__PURE__ */ React.createElement(SectionLabel, null, "Timer"), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Concentration", icon: /* @__PURE__ */ React.createElement(Clock3, { size: 14, color: "rgba(255,255,255,0.45)" }) }, /* @__PURE__ */ React.createElement(Stepper, { value: settings.durations.focus, onChange: (v) => setSettings((s) => ({ ...s, durations: { ...s.durations, focus: v } })), min: 5, max: 90 })), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Short break", icon: /* @__PURE__ */ React.createElement(Clock3, { size: 14, color: "rgba(255,255,255,0.45)" }) }, /* @__PURE__ */ React.createElement(Stepper, { value: settings.durations.short, onChange: (v) => setSettings((s) => ({ ...s, durations: { ...s.durations, short: v } })), min: 1, max: 30 })), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Long break", icon: /* @__PURE__ */ React.createElement(Clock3, { size: 14, color: "rgba(255,255,255,0.45)" }) }, /* @__PURE__ */ React.createElement(Stepper, { value: settings.durations.long, onChange: (v) => setSettings((s) => ({ ...s, durations: { ...s.durations, long: v } })), min: 5, max: 60 })), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Auto-start breaks" }, /* @__PURE__ */ React.createElement(Toggle, { on: settings.autoStartBreaks, onChange: (v) => setSettings((s) => ({ ...s, autoStartBreaks: v })), accent: accentHex })), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Auto-start focus" }, /* @__PURE__ */ React.createElement(Toggle, { on: settings.autoStartFocus, onChange: (v) => setSettings((s) => ({ ...s, autoStartFocus: v })), accent: accentHex })), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "rgba(255,255,255,0.82)", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Bell, { size: 14, color: "rgba(255,255,255,0.45)" }), " Alarm"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 10 } }, /* @__PURE__ */ React.createElement(PillGroup, { options: ["chime", "bell", "digital"], value: settings.alarmSound, onChange: (v) => setSettings((s) => ({ ...s, alarmSound: v })), accentHex }), /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: () => playAlarm(settings.alarmSound, settings.alarmVolume), style: { marginLeft: "auto", ...pillMiniBtn, width: "auto", padding: "0 10px", height: 26, fontSize: 11, fontWeight: 600 } }, "Test")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Volume2, { size: 14, color: "rgba(255,255,255,0.45)" }), /* @__PURE__ */ React.createElement("input", { className: "pf-range", type: "range", min: 0, max: 1, step: 0.05, value: settings.alarmVolume, onChange: (e) => setSettings((s) => ({ ...s, alarmVolume: parseFloat(e.target.value) })), style: { flex: 1 } }))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 4 } }), /* @__PURE__ */ React.createElement(SectionLabel, null, "General"), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Notifications", icon: /* @__PURE__ */ React.createElement(Bell, { size: 14, color: "rgba(255,255,255,0.45)" }) }, !notifSupported ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, fontWeight: 600, color: "rgba(255,255,255,0.35)" } }, "Unavailable here") : notifPermission === "granted" ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: accentHex } }, "Enabled") : notifPermission === "denied" ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)" } }, "Blocked") : /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: requestNotifPermission, style: { ...pillMiniBtn, width: "auto", padding: "0 10px", height: 26, fontSize: 11, fontWeight: 600 } }, "Enable")), /* @__PURE__ */ React.createElement(SettingsRow, { label: "Manage labels" }, /* @__PURE__ */ React.createElement(ChevronRight, { size: 14, color: "rgba(255,255,255,0.3)" })));
  }
  function TasksPanel({ tasks, setTasks, activeTaskId, setActiveTaskId, onClose, accentHex }) {
    const [draft, setDraft] = useState("");
    const doneCount = tasks.filter((t) => t.done).length;
    const addTask = () => {
      const name = draft.trim();
      if (!name) return;
      setTasks((ts) => [...ts, { id: uid(), name, done: false, color: TASK_DOT_COLORS[ts.length % TASK_DOT_COLORS.length], loggedMinutes: 0 }]);
      setDraft("");
    };
    return /* @__PURE__ */ React.createElement("div", { className: "pf-panel-slide", style: { width: 320, height: "100%", ...GLASS, borderLeft: "1px solid rgba(255,255,255,0.08)", borderTop: "none", borderBottom: "none", borderRight: "none", borderRadius: 0, display: "flex", flexDirection: "column", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "22px 20px 14px" } }, /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: onClose, style: { ...pillMiniBtn, width: 28, height: 28, background: "rgba(255,255,255,0.05)" } }, /* @__PURE__ */ React.createElement(ChevronRight, { size: 15 })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700 } }, "Tasks"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 4, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: tasks.length ? `${doneCount / tasks.length * 100}%` : "0%", height: "100%", background: accentHex } })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "rgba(255,255,255,0.45)", flexShrink: 0 } }, doneCount, "/", tasks.length)), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, ...GLASS_RAISED, borderRadius: 12, padding: "10px 12px" } }, /* @__PURE__ */ React.createElement(Plus, { size: 14, color: "rgba(255,255,255,0.45)" }), /* @__PURE__ */ React.createElement("input", { value: draft, onChange: (e) => setDraft(e.target.value), onKeyDown: (e) => e.key === "Enter" && addTask(), placeholder: "Add task", style: { flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 13 } }))), /* @__PURE__ */ React.createElement("div", { className: "pf-scroll", style: { flex: 1, overflowY: "auto", padding: "0 12px 12px" } }, tasks.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", color: "rgba(255,255,255,0.32)", fontSize: 12, padding: "30px 12px" } }, "No tasks yet \u2014 add one above and pick it as your focus."), tasks.map((t) => {
      const active = t.id === activeTaskId;
      return /* @__PURE__ */ React.createElement("div", { key: t.id, onClick: () => setActiveTaskId(t.id), style: { display: "flex", alignItems: "center", gap: 10, padding: "11px 10px", borderRadius: 12, marginBottom: 4, cursor: "pointer", background: active ? `${accentHex}18` : "transparent", border: active ? `1px solid ${accentHex}44` : "1px solid transparent" } }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            setTasks((ts) => ts.map((x) => x.id === t.id ? { ...x, done: !x.done } : x));
          },
          style: { width: 17, height: 17, borderRadius: "50%", border: `1.5px solid ${t.done ? accentHex : "rgba(255,255,255,0.3)"}`, background: t.done ? accentHex : "transparent", flexShrink: 0, cursor: "pointer" }
        }
      ), /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: t.color, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 12.5, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", textDecoration: t.done ? "line-through" : "none", color: t.done ? "rgba(255,255,255,0.38)" : "#fff" } }, t.name), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: accentHex, fontWeight: 600, flexShrink: 0 } }, formatMinutes(t.loggedMinutes)), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            setTasks((ts) => ts.filter((x) => x.id !== t.id));
          },
          style: { background: "none", border: "none", cursor: "pointer", padding: 2, opacity: 0.3 }
        },
        /* @__PURE__ */ React.createElement(Trash2, { size: 12, color: "#fff" })
      ));
    })));
  }
  function ProgressPage({ sessions, accentHex, onBack }) {
    const [timeframe, setTimeframe] = useState("week");
    const data = useMemo(() => {
      const now = /* @__PURE__ */ new Date();
      let from;
      if (timeframe === "day") {
        from = new Date(now);
        from.setHours(0, 0, 0, 0);
      } else if (timeframe === "week") {
        from = new Date(now);
        from.setDate(now.getDate() - now.getDay());
        from.setHours(0, 0, 0, 0);
      } else {
        from = new Date(now.getFullYear(), now.getMonth(), 1);
      }
      const filtered = sessions.filter((s) => new Date(s.timestamp) >= from);
      const taskTotals = filtered.reduce((acc, s) => {
        acc[s.taskName] = (acc[s.taskName] || 0) + s.durationMinutes;
        return acc;
      }, {});
      const totalMinutes = Object.values(taskTotals).reduce((a, b) => a + b, 0);
      let buckets;
      if (timeframe === "day") {
        buckets = ["Morning", "Midday", "Afternoon", "Evening"].map((label) => ({ label, minutes: 0 }));
        filtered.forEach((s) => {
          const h = new Date(s.timestamp).getHours();
          buckets[h < 12 ? 0 : h < 17 ? 1 : h < 21 ? 2 : 3].minutes += s.durationMinutes;
        });
      } else if (timeframe === "week") {
        buckets = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label) => ({ label, minutes: 0 }));
        filtered.forEach((s) => buckets[new Date(s.timestamp).getDay()].minutes += s.durationMinutes);
      } else {
        buckets = Array.from({ length: 5 }, (_, i) => ({ label: `Wk ${i + 1}`, minutes: 0 }));
        filtered.forEach((s) => {
          const idx = Math.min(4, Math.floor((new Date(s.timestamp).getDate() - 1) / 7));
          buckets[idx].minutes += s.durationMinutes;
        });
      }
      return {
        displayTotal: formatMinutes(totalMinutes),
        totalMinutes,
        sessionCount: filtered.length,
        taskBreakdown: Object.entries(taskTotals).map(([name, time]) => ({ name, time })).sort((a, b) => b.time - a.time),
        buckets
      };
    }, [sessions, timeframe]);
    const maxMinutes = Math.max(1, ...data.buckets.map((b) => b.minutes));
    return /* @__PURE__ */ React.createElement("div", { className: "pf-scroll", style: { position: "absolute", inset: 0, background: "#0a0a0b", color: "#fff", overflowY: "auto", zIndex: 50 } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto", padding: "26px 20px 60px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 22 } }, /* @__PURE__ */ React.createElement("button", { className: "pf-mini-btn", onClick: onBack, style: { ...pillMiniBtn, width: 34, height: 34, background: "rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 16 })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17, fontWeight: 700 } }, "Progress"), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 4, ...GLASS_RAISED, borderRadius: 999, padding: 4 } }, ["day", "week", "month"].map((t) => /* @__PURE__ */ React.createElement("button", { key: t, onClick: () => setTimeframe(t), style: { border: "none", cursor: "pointer", padding: "6px 15px", borderRadius: 999, fontSize: 12, fontWeight: 600, textTransform: "capitalize", color: timeframe === t ? "#04140d" : "rgba(255,255,255,0.6)", background: timeframe === t ? accentHex : "transparent" } }, t)))), /* @__PURE__ */ React.createElement("div", { style: { ...GLASS, borderRadius: 18, padding: "20px 22px", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 } }, "Total focus time"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 36, fontWeight: 800, letterSpacing: -0.5 } }, data.displayTotal), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "rgba(255,255,255,0.5)" } }, data.sessionCount, " session", data.sessionCount !== 1 ? "s" : "")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: 10, height: 140, marginTop: 20 } }, data.buckets.map((b) => /* @__PURE__ */ React.createElement("div", { key: b.label, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", maxWidth: 32, height: `${Math.max(4, b.minutes / maxMinutes * 104)}px`, borderRadius: 6, background: b.minutes === maxMinutes && maxMinutes > 0 ? accentHex : `${accentHex}45`, transition: "height .3s ease" } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "rgba(255,255,255,0.4)" } }, b.label))))), /* @__PURE__ */ React.createElement("div", { style: { ...GLASS, borderRadius: 18, padding: "8px 10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: 0.8, padding: "10px 10px 6px" } }, "By task"), data.taskBreakdown.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "26px 12px", textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: 12.5 } }, "No focus sessions logged for this ", timeframe, " yet \u2014 finish a pomodoro to see it here."), data.taskBreakdown.map((task, i) => {
      const pct = Math.round(task.time / (data.totalMinutes || 1) * 100);
      return /* @__PURE__ */ React.createElement("div", { key: task.name, style: { display: "flex", alignItems: "center", gap: 12, padding: "11px 10px", borderBottom: i !== data.taskBreakdown.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 999, background: TASK_DOT_COLORS[i % TASK_DOT_COLORS.length], flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, task.name), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, height: 4, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${pct}%`, height: "100%", background: TASK_DOT_COLORS[i % TASK_DOT_COLORS.length] } }))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: accentHex, flexShrink: 0 } }, formatMinutes(task.time)));
    }))));
  }
  var STORAGE_KEY = "pomodoro-app-v1";
  var DEFAULT_SETTINGS = {
    durations: { focus: 25, short: 5, long: 15 },
    autoStartBreaks: false,
    autoStartFocus: false,
    alarmSound: "digital",
    alarmVolume: 0.6,
    background: "fantasy",
    customBackgroundUrl: null,
    accent: "green",
    ambient: "off",
    ambientSound: false,
    ambientVolume: 0.35
  };
  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
  function saveStore(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
    }
  }
  function PomodoroApp() {
    const saved = useMemo(() => loadStore(), []);
    const [settings, setSettings] = useState(() => ({
      ...DEFAULT_SETTINGS,
      ...saved?.settings || {},
      durations: { ...DEFAULT_SETTINGS.durations, ...saved?.settings?.durations || {} }
    }));
    const [mode, setMode] = useState("focus");
    const [timeLeft, setTimeLeft] = useState(() => (saved?.settings?.durations?.focus || DEFAULT_SETTINGS.durations.focus) * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [counts, setCounts] = useState(() => saved?.counts || { focus: 0, short: 0, long: 0 });
    const [streak, setStreak] = useState(() => saved?.streak || 0);
    const [tasks, setTasks] = useState(() => Array.isArray(saved?.tasks) ? saved.tasks : []);
    const [activeTaskId, setActiveTaskId] = useState(() => {
      if (saved?.activeTaskId && Array.isArray(saved?.tasks) && saved.tasks.some((t) => t.id === saved.activeTaskId)) {
        return saved.activeTaskId;
      }
      return null;
    });
    const [sessions, setSessions] = useState(() => Array.isArray(saved?.sessions) ? saved.sessions : []);
    const [showSettings, setShowSettings] = useState(false);
    const [showTasks, setShowTasks] = useState(true);
    const [showMusic, setShowMusic] = useState(false);
    const [showChallenge, setShowChallenge] = useState(false);
    const [view, setView] = useState("timer");
    const [tracks, setTracks] = useState([]);
    const [currentTrackId, setCurrentTrackId] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loop, setLoop] = useState(true);
    const audioRef = useRef(null);
    const [dailyGoal, setDailyGoal] = useState(() => typeof saved?.dailyGoal === "number" ? saved.dailyGoal : null);
    const notifSupported = typeof window !== "undefined" && "Notification" in window;
    const [notifPermission, setNotifPermission] = useState(notifSupported ? Notification.permission : "unsupported");
    const intervalRef = useRef(null);
    const endTimeRef = useRef(null);
    const activeTask = tasks.find((t) => t.id === activeTaskId);
    const accentHex = ACCENTS.find((a) => a.key === settings.accent)?.hex || "#3ecf8e";
    const totalForMode = settings.durations[mode] * 60;
    useAmbientAudio(settings.ambient, settings.ambientSound, settings.ambientVolume);
    const todayMinutes = useMemo(() => {
      const now = /* @__PURE__ */ new Date();
      return sessions.filter((s) => isSameDay(new Date(s.timestamp), now)).reduce((a, s) => a + s.durationMinutes, 0);
    }, [sessions]);
    useEffect(() => {
      saveStore({
        settings,
        tasks,
        activeTaskId,
        sessions,
        counts,
        streak,
        dailyGoal
      });
    }, [settings, tasks, activeTaskId, sessions, counts, streak, dailyGoal]);
    useEffect(() => {
      if (audioRef.current) audioRef.current.loop = loop;
    }, [loop]);
    useEffect(() => {
      if (currentTrackId && !tracks.find((t) => t.id === currentTrackId)) {
        audioRef.current?.pause();
        setCurrentTrackId(null);
        setIsPlaying(false);
      }
    }, [tracks, currentTrackId]);
    const handleAddFiles = (e) => {
      const files = Array.from(e.target.files || []);
      if (!files.length) return;
      const newTracks = files.map((f) => ({ id: uid(), name: f.name, url: URL.createObjectURL(f) }));
      setTracks((ts) => [...ts, ...newTracks]);
      e.target.value = "";
    };
    const handleRemoveTrack = (id) => {
      setTracks((ts) => ts.filter((t) => t.id !== id));
    };
    const handleToggleTrack = (track) => {
      const audio = audioRef.current;
      if (!audio) return;
      if (currentTrackId === track.id) {
        if (audio.paused) {
          audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        } else {
          audio.pause();
          setIsPlaying(false);
        }
        return;
      }
      audio.pause();
      audio.src = track.url;
      audio.loop = loop;
      audio.currentTime = 0;
      setCurrentTrackId(track.id);
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    };
    useEffect(() => {
      if (!isRunning) setTimeLeft(settings.durations[mode] * 60);
    }, [settings.durations, mode]);
    const requestNotifPermission = useCallback(() => {
      if (!notifSupported) return;
      try {
        Notification.requestPermission().then((perm) => setNotifPermission(perm));
      } catch (e) {
        setNotifPermission("denied");
      }
    }, [notifSupported]);
    const completeSession = useCallback(() => {
      playAlarm(settings.alarmSound, settings.alarmVolume);
      if (mode === "focus") {
        notifyUser("Focus session complete", "Nice work \u2014 time for a break.");
        const durMin = settings.durations.focus;
        setSessions((prev) => [...prev, { id: uid(), taskId: activeTaskId, taskName: activeTask ? activeTask.name : "Unassigned", durationMinutes: durMin, timestamp: (/* @__PURE__ */ new Date()).toISOString() }]);
        if (activeTaskId) setTasks((ts) => ts.map((t) => t.id === activeTaskId ? { ...t, loggedMinutes: t.loggedMinutes + durMin } : t));
        setStreak((s) => s + 1);
      } else {
        notifyUser("Break's over", "Ready for another focus round?");
      }
      setCounts((c) => ({ ...c, [mode]: c[mode] + 1 }));
      setMode((prevMode) => {
        let nextMode;
        if (prevMode === "focus") {
          const focusesDone = counts.focus + 1;
          nextMode = focusesDone % 4 === 0 ? "long" : "short";
        } else {
          nextMode = "focus";
        }
        const willAutoStart = nextMode === "focus" ? settings.autoStartFocus : settings.autoStartBreaks;
        const nextSeconds = settings.durations[nextMode] * 60;
        setTimeLeft(nextSeconds);
        if (willAutoStart) {
          endTimeRef.current = Date.now() + nextSeconds * 1000;
        } else {
          endTimeRef.current = null;
        }
        setIsRunning(willAutoStart);
        return nextMode;
      });
    }, [mode, settings, activeTaskId, activeTask, counts.focus]);
    useEffect(() => {
      if (!isRunning) {
        clearInterval(intervalRef.current);
        endTimeRef.current = null;
        return;
      }
      if (endTimeRef.current == null) {
        endTimeRef.current = Date.now() + timeLeft * 1000;
      }
      const tick = () => {
        if (endTimeRef.current == null) return;
        const remaining = Math.max(0, Math.round((endTimeRef.current - Date.now()) / 1000));
        setTimeLeft(remaining);
        if (remaining <= 0) {
          clearInterval(intervalRef.current);
          endTimeRef.current = null;
          setTimeout(() => completeSession(), 0);
        }
      };
      tick();
      intervalRef.current = setInterval(tick, 250);
      const onVisibility = () => {
        if (document.visibilityState === "visible") tick();
      };
      document.addEventListener("visibilitychange", onVisibility);
      return () => {
        clearInterval(intervalRef.current);
        document.removeEventListener("visibilitychange", onVisibility);
      };
    }, [isRunning, completeSession]);
    // Keep tab title in sync so the countdown is visible even when the tab is backgrounded
    useEffect(() => {
      const base = "Pomodoro Timer";
      if (isRunning) {
        document.title = `${formatTime(timeLeft)} \u2014 ${base}`;
      } else {
        document.title = base;
      }
      return () => {
        document.title = base;
      };
    }, [timeLeft, isRunning]);
    const switchMode = (m) => {
      setIsRunning(false);
      endTimeRef.current = null;
      setMode(m);
      setTimeLeft(settings.durations[m] * 60);
    };
    const toggleRunning = () => {
      setIsRunning((r) => {
        if (!r) {
          // starting / resuming — anchor to wall clock so background tabs stay accurate
          endTimeRef.current = Date.now() + timeLeft * 1000;
        } else {
          endTimeRef.current = null;
        }
        return !r;
      });
    };
    const ringRadius = 132;
    const circumference = 2 * Math.PI * ringRadius;
    const elapsedFraction = 1 - timeLeft / totalForMode;
    const dashOffset = circumference * elapsedFraction;
    const backgroundStyle = settings.background === "custom" && settings.customBackgroundUrl ? { backgroundImage: `url(${settings.customBackgroundUrl})`, backgroundSize: "cover", backgroundPosition: "center" } : settings.background === "photo" ? { background: PHOTO_BG_GRADIENT } : { backgroundImage: `url(${FANTASY_BG})`, backgroundSize: "cover", backgroundPosition: "center" };
    return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", minHeight: 620, position: "relative", overflow: "hidden", fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif", color: "#fff", display: "flex" } }, /* @__PURE__ */ React.createElement(GlobalStyle, null), /* @__PURE__ */ React.createElement("audio", { ref: audioRef, onEnded: () => !loop && setIsPlaying(false), style: { display: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, ...backgroundStyle } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.32) 40%, rgba(0,0,0,0.6))" } }), /* @__PURE__ */ React.createElement(AmbientLayer, { effect: settings.ambient, accent: accentHex }), view === "progress" ? /* @__PURE__ */ React.createElement(ProgressPage, { sessions, accentHex, onBack: () => setView("timer") }) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, position: "relative", zIndex: 2, display: "flex", flexDirection: "column", minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", padding: "20px 24px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16.5, fontWeight: 700, letterSpacing: -0.2 } }, "Pomodoro Timer"), /* @__PURE__ */ React.createElement("div", { className: "pf-streak", style: { marginLeft: 12, display: "flex", alignItems: "center", gap: 5, ...GLASS_RAISED, borderRadius: 999, padding: "5px 11px", fontSize: 12, fontWeight: 700 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, lineHeight: 1 }, "aria-hidden": true }, "\u{1F525}"), /* @__PURE__ */ React.createElement("span", { style: { fontVariantNumeric: "tabular-nums" } }, streak)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(IconButton, { title: "Background music", active: showMusic, accentHex, onClick: () => setShowMusic((v) => !v) }, /* @__PURE__ */ React.createElement(Music, { size: 16 })), /* @__PURE__ */ React.createElement(IconButton, { title: "Progress", accentHex, onClick: () => setView("progress") }, /* @__PURE__ */ React.createElement(BarChart3, { size: 16 })), !showTasks && /* @__PURE__ */ React.createElement(IconButton, { title: "Tasks", accentHex, onClick: () => setShowTasks(true) }, /* @__PURE__ */ React.createElement(ListChecks, { size: 16 })), /* @__PURE__ */ React.createElement(IconButton, { title: "Language", accentHex }, /* @__PURE__ */ React.createElement(Globe, { size: 16 })), /* @__PURE__ */ React.createElement(IconButton, { title: "Settings", active: showSettings, accentHex, onClick: () => setShowSettings((v) => !v) }, /* @__PURE__ */ React.createElement(SettingsIcon, { size: 16 })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", marginTop: 30 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, ...GLASS_RAISED, borderRadius: 999, padding: 5 } }, Object.values(MODES).map((m) => {
      const active = m.key === mode;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: m.key,
          className: "pf-mode-pill",
          "data-active": active ? "true" : "false",
          onClick: () => switchMode(m.key),
          style: {
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "9px 18px",
            borderRadius: 999,
            fontSize: 12.5,
            fontWeight: 600,
            color: active ? "#04140d" : "rgba(255,255,255,0.65)",
            background: active ? accentHex : "transparent"
          }
        },
        m.label,
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, fontWeight: 700, background: active ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.1)", borderRadius: 999, padding: "1px 7px", transition: "background .25s ease" } }, counts[m.key])
      );
    }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 300, height: 300 } }, /* @__PURE__ */ React.createElement("svg", { width: "300", height: "300", style: { transform: "rotate(-90deg)" } }, /* @__PURE__ */ React.createElement("circle", { cx: "150", cy: "150", r: ringRadius, fill: "none", stroke: "rgba(255,255,255,0.12)", strokeWidth: "5" }), /* @__PURE__ */ React.createElement("circle", { cx: "150", cy: "150", r: ringRadius, fill: "none", stroke: accentHex, strokeWidth: "5", strokeLinecap: "round", strokeDasharray: circumference, strokeDashoffset: dashOffset, style: { transition: "stroke-dashoffset 1s linear, stroke .35s ease", filter: `drop-shadow(0 0 8px ${accentHex}55)` } })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { className: "pf-timer-digits", style: { fontSize: 54, fontWeight: 800, letterSpacing: -1, fontVariantNumeric: "tabular-nums" } }, formatTime(timeLeft)), activeTask && /* @__PURE__ */ React.createElement("div", { className: "pf-task-chip", style: { display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.78)", ...GLASS_RAISED, borderRadius: 999, padding: "5px 12px" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: activeTask.color } }), activeTask.name))), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pf-start-btn",
        onClick: toggleRunning,
        style: { display: "flex", alignItems: "center", gap: 10, border: "none", cursor: "pointer", padding: "15px 46px", borderRadius: 999, fontSize: 14.5, fontWeight: 700, letterSpacing: 0.4, color: "#fff", marginTop: 32, background: `linear-gradient(135deg, ${accentHex}, ${accentHex}c8)`, boxShadow: `0 8px 22px ${accentHex}35` }
      },
      /* @__PURE__ */ React.createElement("span", { className: "sheen" }),
      /* @__PURE__ */ React.createElement("span", { className: "ring" }),
      isRunning ? /* @__PURE__ */ React.createElement(Pause, { size: 16, fill: "#fff" }) : /* @__PURE__ */ React.createElement(Play, { size: 16, fill: "#fff", style: { marginLeft: 1 } }),
      isRunning ? "PAUSE" : "START"
    )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", padding: "0 24px 22px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setShowChallenge(true), className: "pf-mini-btn", style: { display: "flex", alignItems: "center", gap: 9, ...GLASS_RAISED, borderRadius: 999, padding: "8px 14px 8px 10px", border: "none", cursor: "pointer", color: "#fff" } }, /* @__PURE__ */ React.createElement(Target, { size: 14, color: accentHex }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 600 } }, "Today's Challenge"), dailyGoal != null && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: accentHex, marginLeft: 2 } }, formatMinutes(todayMinutes), " / ", formatMinutes(dailyGoal))))), showTasks && /* @__PURE__ */ React.createElement(TasksPanel, { tasks, setTasks, activeTaskId, setActiveTaskId, onClose: () => setShowTasks(false), accentHex }), showSettings && /* @__PURE__ */ React.createElement(SettingsPanel, { settings, setSettings, onClose: () => setShowSettings(false), accentHex, notifPermission, requestNotifPermission, notifSupported }), showMusic && /* @__PURE__ */ React.createElement(MusicPopover, { tracks, onAddFiles: handleAddFiles, onRemove: handleRemoveTrack, currentTrackId, isPlaying, onToggleTrack: handleToggleTrack, loop, setLoop, onClose: () => setShowMusic(false) }), showChallenge && /* @__PURE__ */ React.createElement(
      ChallengeModal,
      {
        goal: dailyGoal,
        setGoal: (g) => {
          setDailyGoal(g);
          setShowChallenge(false);
        },
        todayMinutes,
        onClose: () => setShowChallenge(false),
        accentHex
      }
    )));
  }
  var root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ React.createElement(PomodoroApp, null));
})();
