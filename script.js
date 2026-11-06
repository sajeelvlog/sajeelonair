// Data Seed
const INITIAL_DATA = [
  {
    id: "optim",
    name: "Optim International",
    category: "Coaching & Prep",
    desc: "CMA USA & Secondary Commerce Batches @ K.P. Mall, Kondotty",
    color: "indigo",
    notes: "- In-house faculty agreement finalised.\n- KSEB load optimization verified.\n- Review portal deployment ready.",
    todos: [
      { id: "t1", title: "Verify online exam platform credentials for CMA cohort", priority: "High", date: "2026-11-08", completed: false, pin: true },
      { id: "t2", title: "Review faculty timetable with CMA Jassim Hyder", priority: "High", date: "2026-11-10", completed: false, pin: true },
      { id: "t3", title: "Confirm weekly performance logs with administrative staff", priority: "Medium", date: "2026-11-12", completed: true, pin: false }
    ],
    events: [
      { id: "e1", title: "CMA USA Strategy & Valuation Session", date: "2026-11-09", time: "10:00 AM - 1:00 PM", location: "Kondotty Center - 2nd Floor", type: "Class / Coaching" },
      { id: "e2", title: "Monthly Partner Administrative Review", date: "2026-11-15", time: "4:00 PM - 5:30 PM", location: "Conference Room", type: "Meeting / Review" }
    ],
    dates: [
      { id: "d1", title: "CMA USA Exam Registration Deadline", date: "2026-11-20", note: "Final list of student candidates" },
      { id: "d2", title: "KSEB Utility Compliance Audit", date: "2026-11-25", note: "Quarterly review" }
    ]
  },
  {
    id: "edudot",
    name: "Edudot",
    category: "EdTech & Affiliate",
    desc: "Earnuwi Affiliate Program & Digital Learning Tools",
    color: "emerald",
    notes: "- Peer-to-peer affiliate marketing framework active.\n- Lead conversion tracking via Instagram campaign.",
    todos: [
      { id: "t4", title: "Deploy Earnuwi affiliate link distribution logic", priority: "High", date: "2026-11-07", completed: false, pin: true },
      { id: "t5", title: "Finalize high-retention landing page copy", priority: "Medium", date: "2026-11-11", completed: false, pin: false }
    ],
    events: [
      { id: "e3", title: "Affiliate Portal Demo & Beta Launch", date: "2026-11-12", time: "6:00 PM", location: "Online / Zoom", type: "Product Launch / Promo" }
    ],
    dates: [
      { id: "d3", title: "Earnuwi Secondary Campaign Launch", date: "2026-11-14", note: "Targeting 500+ student affiliates" }
    ]
  },
  {
    id: "aurkid",
    name: "Aurkid / Zzorraa",
    category: "Consumer Toys & Games",
    desc: "Interactive Toys: Balancing Towers & Gobble Gamers",
    color: "amber",
    notes: "- Packaging prototypes in review.\n- Startup Mission grant pitch preparation under process.",
    todos: [
      { id: "t6", title: "Review self-leveling container prototype design", priority: "High", date: "2026-11-10", completed: false, pin: true },
      { id: "t7", title: "Evaluate Meta Ads vs Instagram Boost conversion rates", priority: "Medium", date: "2026-11-13", completed: false, pin: true }
    ],
    events: [
      { id: "e4", title: "Kerala Startup Mission Grant Pitch Meeting", date: "2026-11-18", time: "11:30 AM", location: "KVT / Online Submission", type: "Meeting / Review" }
    ],
    dates: [
      { id: "d4", title: "Balancing Towers Retail Stock Batch Dispatch", date: "2026-11-22", note: "First batch delivery to regional distributors" }
    ]
  },
  {
    id: "wowbite",
    name: "Wowbite",
    category: "Food & Snacks",
    desc: "Consumer Brand & Regional Retail Product Operations",
    color: "rose",
    notes: "- Brand collateral and packaging approved.\n- Quality inspection schedule active.",
    todos: [
      { id: "t8", title: "Audit supplier inventory and COGS breakdown", priority: "Medium", date: "2026-11-12", completed: false, pin: true },
      { id: "t9", title: "Finalise retail kiosk display graphics", priority: "Low", date: "2026-11-16", completed: false, pin: false }
    ],
    events: [
      { id: "e5", title: "Kiosk Franchise Operator Onboarding", date: "2026-11-17", time: "2:00 PM", location: "Kondotty Mall Office", type: "Meeting / Review" }
    ],
    dates: [
      { id: "d5", title: "Quarterly FSSAI License Inspection", date: "2026-11-30", note: "Compliance documentation check" }
    ]
  },
  {
    id: "freelance",
    name: "Freelance Class Section",
    category: "High School Physics",
    desc: "Entrance Coaching, Optics Mnemonic Demos & Exam Prep",
    color: "sky",
    notes: "- Newton's Laws and Fleming's Left Hand Rule visual slides ready.\n- Next batch schedule set.",
    todos: [
      { id: "t10", title: "Prepare Fleming's Left Hand Rule 3D visual aids", priority: "High", date: "2026-11-08", completed: false, pin: true },
      { id: "t11", title: "Upload short video revision on Conservation of Energy", priority: "Medium", date: "2026-11-11", completed: false, pin: true }
    ],
    events: [
      { id: "e6", title: "High School Physics Entrance Masterclass", date: "2026-11-08", time: "7:00 AM - 9:00 AM", location: "Live Studio / Zoom", type: "Class / Coaching" },
      { id: "e7", title: "Optics Rule & Ray Diagram Workshop", date: "2026-11-14", time: "8:00 AM - 10:30 AM", location: "Kondotty Main Lab", type: "Class / Coaching" }
    ],
    dates: [
      { id: "d6", title: "Secondary Board Mock Examination Series", date: "2026-11-21", note: "Evaluations for 150+ students" }
    ]
  }
];

let state = {
  businesses: [],
  currentWorkspaceId: null,
  activeTab: 'todos',
  todoFilter: 'all'
};

const COLOR_CLASSES = {
  indigo: { bg: 'bg-indigo-900/30', border: 'border-indigo-500/40', text: 'text-indigo-400', badge: 'bg-indigo-900/60 text-indigo-300' },
  emerald: { bg: 'bg-emerald-900/30', border: 'border-emerald-500/40', text: 'text-emerald-400', badge: 'bg-emerald-900/60 text-emerald-300' },
  amber: { bg: 'bg-amber-900/30', border: 'border-amber-500/40', text: 'text-amber-400', badge: 'bg-amber-900/60 text-amber-300' },
  rose: { bg: 'bg-rose-900/30', border: 'border-rose-500/40', text: 'text-rose-400', badge: 'bg-rose-900/60 text-rose-300' },
  sky: { bg: 'bg-sky-900/30', border: 'border-sky-500/40', text: 'text-sky-400', badge: 'bg-sky-900/60 text-sky-300' },
  purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/40', text: 'text-purple-400', badge: 'bg-purple-900/60 text-purple-300' }
};

function initApp() {
  const savedData = localStorage.getItem('command_center_data');
  if (savedData) {
    try {
      state.businesses = JSON.parse(savedData);
    } catch(e) {
      state.businesses = INITIAL_DATA;
    }
  } else {
    state.businesses = INITIAL_DATA;
    saveToLocalStorage();
  }
  renderDashboard();
}

function saveToLocalStorage() {
  localStorage.setItem('command_center_data', JSON.stringify(state.businesses));
}

function showDashboard() {
  state.currentWorkspaceId = null;
  document.getElementById('dashboard-view').classList.remove('hidden');
  document.getElementById('workspace-view').classList.add('hidden');
  renderDashboard();
}

function openWorkspace(id) {
  state.currentWorkspaceId = id;
  state.activeTab = 'todos';
  document.getElementById('dashboard-view').classList.add('hidden');
  document.getElementById('workspace-view').classList.remove('hidden');
  renderWorkspace();
}

function renderDashboard() {
  const grid = document.getElementById('business-grid');
  grid.innerHTML = '';

  let totalTodos = 0;
  let totalEvents = 0;

  state.businesses.forEach(biz => {
    const pendingTodos = biz.todos.filter(t => !t.completed);
    totalTodos += pendingTodos.length;
    totalEvents += biz.events.length;

    const pinnedTodos = biz.todos.filter(t => t.pin || !t.completed).slice(0, 2);
    const upcomingEvents = biz.events.slice(0, 1);
    const colorTheme = COLOR_CLASSES[biz.color] || COLOR_CLASSES.indigo;

    const card = document.createElement('div');
    card.className = `bg-gray-800 border ${colorTheme.border} rounded-2xl p-5 shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/60 transition-all flex flex-col justify-between cursor-pointer group`;
    card.onclick = (e) => {
      if (!e.target.closest('input') && !e.target.closest('button')) {
        openWorkspace(biz.id);
      }
    };

    card.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-start justify-between">
          <div>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full ${colorTheme.badge} border border-gray-700">${biz.category}</span>
            <h4 class="text-xl font-bold text-white mt-2 group-hover:text-indigo-300 transition-colors">${biz.name}</h4>
          </div>
          <span class="text-xs font-bold text-gray-400 bg-gray-900 px-2.5 py-1 rounded-lg border border-gray-700">