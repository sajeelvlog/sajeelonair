// DEFAULT INITIAL DATASET
let INITIAL_BUSINESSES = [
    {
        id: 'optim',
        name: 'Optim',
        tagline: 'Coaching Institute / Entrance & CMA USA',
        category: 'Education / Academy',
        color: '#3B82F6',
        icon: 'fa-graduation-cap',
        impDates: [
            { id: 'd1', title: 'CMA USA Exam Registration Deadline', date: '2026-11-15', urgent: true },
            { id: 'd2', title: 'Parent-Teacher Meet', date: '2026-11-20', urgent: false }
        ],
        todos: [
            { id: 't1', text: 'Review CMA batch attendance portal', priority: 'High', completed: false, dueDate: '2026-11-08' },
            { id: 't2', text: 'Draft faculty contract extension', priority: 'Medium', completed: false, dueDate: '2026-11-12' },
            { id: 't3', text: 'Launch Instagram ad campaign', priority: 'Low', completed: true, dueDate: '2026-11-05' }
        ],
        schedules: [
            { id: 's1', title: 'Secondary Commerce Demo Class', date: '2026-11-07', time: '10:00 AM', location: 'Hall A / Zoom' },
            { id: 's2', title: 'Academic Review Meeting', date: '2026-11-12', time: '03:00 PM', location: 'Conference Room' }
        ],
        checklists: [
            { id: 'c1', text: 'Verify portal logins', completed: true },
            { id: 'c2', text: 'Send SMS alerts for fees', completed: false },
            { id: 'c3', text: 'Review batch feedback', completed: false }
        ],
        notes: 'Keep focus on CMA USA batch registration targets. Target 50 new enrollments by end of month.'
    },
    {
        id: 'edudot',
        name: 'Edudot',
        tagline: 'EdTech / Learning Portal Platform',
        category: 'EdTech / SaaS',
        color: '#8B5CF6',
        icon: 'fa-book-open',
        impDates: [
            { id: 'd3', title: 'App v2.0 Beta Release', date: '2026-11-25', urgent: true },
            { id: 'd4', title: 'Server Renewal', date: '2026-12-01', urgent: true }
        ],
        todos: [
            { id: 't4', text: 'Update Physics optics quiz modules', priority: 'High', completed: false, dueDate: '2026-11-09' },
            { id: 't5', text: 'Fix Auth bug in student portal', priority: 'High', completed: false, dueDate: '2026-11-07' },
            { id: 't6', text: 'Optimize video CDN streaming', priority: 'Medium', completed: false, dueDate: '2026-11-15' }
        ],
        schedules: [
            { id: 's3', title: 'Sprint Planning Session', date: '2026-11-09', time: '11:00 AM', location: 'Google Meet' },
            { id: 's4', title: 'Content Review Call', date: '2026-11-14', time: '04:00 PM', location: 'Slack Huddle' }
        ],
        checklists: [
            { id: 'c4', text: 'Backup database', completed: true },
            { id: 'c5', text: 'Audit active student subscriptions', completed: false },
            { id: 'c6', text: 'Test mobile layout on iOS', completed: false }
        ],
        notes: 'Prioritize student engagement metrics and CDN video loading latency improvements.'
    },
    {
        id: 'aurkid',
        name: 'Aurkid',
        tagline: 'Consumer Toy Label & Smart Game Sets',
        category: 'E-commerce / Toys',
        color: '#EC4899',
        icon: 'fa-bag-shopping',
        impDates: [
            { id: 'd5', title: 'KSUM Startup Grant Submission', date: '2026-11-18', urgent: true },
            { id: 'd6', title: 'Black Friday Sale Launch', date: '2026-11-27', urgent: true }
        ],
        todos: [
            { id: 't7', text: 'Finalize packaging design for Balancing Tower', priority: 'High', completed: false, dueDate: '2026-11-10' },
            { id: 't8', text: 'Order prototype batch for Gobble Gamers', priority: 'High', completed: false, dueDate: '2026-11-12' },
            { id: 't9', text: 'Run Meta Ad A/B test', priority: 'Medium', completed: true, dueDate: '2026-11-04' }
        ],
        schedules: [
            { id: 's5', title: 'Supplier Call with Mold Factory', date: '2026-11-10', time: '02:00 PM', location: 'Phone Call' },
            { id: 's6', title: 'Logistics & Fulfillment Review', date: '2026-11-16', time: '05:00 PM', location: 'Warehouse HQ' }
        ],
        checklists: [
            { id: 'c7', text: 'Verify inventory count', completed: true },
            { id: 'c8', text: 'Update Amazon listing assets', completed: false },
            { id: 'c9', text: 'Calculate per-unit margin', completed: true }
        ],
        notes: 'Q4 sales push starting soon. Ensure supplier leads times are strictly monitored.'
    },
    {
        id: 'wowbite',
        name: 'Wowbite',
        tagline: 'Consumer Food & Snack Brand',
        category: 'FMCG / Food',
        color: '#10B981',
        icon: 'fa-utensils',
        impDates: [
            { id: 'd7', title: 'New Flavor Sampling Event', date: '2026-11-22', urgent: false },
            { id: 'd8', title: 'FSSAI License Renewal', date: '2026-12-10', urgent: true }
        ],
        todos: [
            { id: 't10', text: 'Finalize recipe trial batch', priority: 'High', completed: false, dueDate: '2026-11-08' },
            { id: 't11', text: 'Source eco-friendly packaging materials', priority: 'Medium', completed: false, dueDate: '2026-11-14' },
            { id: 't12', text: 'Design retail shelf displays', priority: 'Low', completed: false, dueDate: '2026-11-19' }
        ],
        schedules: [
            { id: 's7', title: 'Batch Tasting & Quality Control', date: '2026-11-11', time: '04:00 PM', location: 'Test Kitchen' },
            { id: 's8', title: 'Distributor Onboarding Pitch', date: '2026-11-17', time: '11:30 AM', location: 'Hotel Taj Boardroom' }
        ],
        checklists: [
            { id: 'c10', text: 'Check expiry date logs', completed: true }
        ],
        notes: 'Ensure quality benchmarks are met before distributor onboarding pitch.'
    }
];

let currentActiveBizId = null;

// Initialize Dashboard on Load
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    
    // Color picker hex label sync
    const colorInput = document.getElementById('newBizColor');
    if (colorInput) {
        colorInput.addEventListener('input', (e) => {
            const label = document.getElementById('colorHexLabel');
            if (label) label.textContent = e.target.value;
        });
    }
});

// Render Main Dashboard Cards & Global Stats with Highlights
function renderDashboard() {
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const query = (searchInput ? searchInput.value : '') || (mobileSearchInput ? mobileSearchInput.value : '');
    const lowerQuery = query.toLowerCase();

    const grid = document.getElementById('cardsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let totalPending = 0;
    let totalEvents = 0;
    let totalUrgent = 0;
    let totalTasksCount = 0;
    let completedTasksCount = 0;

    const filteredBizs = INITIAL_BUSINESSES.filter(b => 
        b.name.toLowerCase().includes(lowerQuery) || 
        b.tagline.toLowerCase().includes(lowerQuery) || 
        b.category.toLowerCase().includes(lowerQuery)
    );

    const bizCountTag = document.getElementById('bizCountTag');
    if (bizCountTag) bizCountTag.textContent = filteredBizs.length;

    filteredBizs.forEach(biz => {
        // Calculate stats
        const pendingTodos = biz.todos ? biz.todos.filter(t => !t.completed).length : 0;
        const eventsCount = biz.schedules ? biz.schedules.length : 0;
        const urgentCount = biz.impDates ? biz.impDates.filter(d => d.urgent).length : 0;

        biz.todos.forEach(t => {
            totalTasksCount++;
            if (t.completed) completedTasksCount++;
        });

        totalPending += pendingTodos;
        totalEvents += eventsCount;
        totalUrgent += urgentCount;

        // Determine Important Highlight for Card
        const urgentDate = biz.impDates && biz.impDates.find(d => d.urgent);
        const highTodo = biz.todos && biz.todos.find(t => !t.completed && t.priority === 'High');

        let highlightHtml = '';
        if (urgentDate) {
            highlightHtml = `
                <div class="bg-rose-500/10 border border-rose-500/20 px-3 py-2 rounded-xl flex items-center space-x-2 text-rose-400 text-xs">
                    <i class="fa-solid fa-triangle-exclamation shrink-0"></i>
                    <span class="line-clamp-1"><strong>Urgent:</strong> ${urgentDate.title} (${urgentDate.date})</span>
                </div>
            `;
        } else if (highTodo) {
            highlightHtml = `
                <div class="bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-xl flex items-center space-x-2 text-amber-400 text-xs">
                    <i class="fa-solid fa-circle-exclamation shrink-0"></i>
                    <span class="line-clamp-1"><strong>Top Task:</strong> ${highTodo.text}</span>
                </div>
            `;
        } else if (biz.notes) {
            highlightHtml = `
                <div class="bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded-xl flex items-center space-x-2 text-blue-400 text-xs">
                    <i class="fa-solid fa-note-sticky shrink-0"></i>
                    <span class="line-clamp-1"><strong>Note:</strong> ${biz.notes}</span>
                </div>
            `;
        }

        // Card Element
        const card = document.createElement('div');
        card.className = "bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer group relative overflow-hidden";
        card.onclick = () => openWorkspaceModal(biz.id);

        card.innerHTML = `
            <div class="absolute top-0 left-0 w-1.5 h-full" style="background-color: ${biz.color}"></div>
            <div class="flex items-start justify-between">
                <div class="flex items-center space-x-3">
                    <div class="p-3 rounded-xl text-white shadow-md flex items-center justify-center" style="background-color: ${biz.color}20; color: ${biz.color}; border: 1px solid ${biz.color}40;">
                        <i class="fa-solid ${biz.icon || 'fa-briefcase'} text-lg"></i>
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-white group-hover:text-blue-400 transition-colors">${biz.name}</h3>
                        <p class="text-xs text-slate-400 line-clamp-1">${biz.tagline}</p>
                    </div>
                </div>
                <span class="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    ${biz.category}
                </span>
            </div>

            <!-- IMPORTANT HIGHLIGHT SECTION -->
            ${highlightHtml}

            <div class="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/60 text-center">
                <div class="bg-slate-950/40 p-2 rounded-lg">
                    <span class="block text-xs font-bold text-white">${pendingTodos}</span>
                    <span class="text-[10px] text-slate-400 uppercase">Pending</span>
                </div>
                <div class="bg-slate-950/40 p-2 rounded-lg">
                    <span class="block text-xs font-bold text-white">${eventsCount}</span>
                    <span class="text-[10px] text-slate-400 uppercase">Events</span>
                </div>
                <div class="bg-slate-950/40 p-2 rounded-lg">
                    <span class="block text-xs font-bold text-white">${urgentCount}</span>
                    <span class="text-[10px] text-slate-400 uppercase">Urgent</span>
                </div>
            </div>

            <div class="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Open Workspace</span>
                <i class="fa-solid fa-arrow-right text-slate-500 group-hover:translate-x-1 transition-transform"></i>
            </div>
        `;
        grid.appendChild(card);
    });

    // Update Global Stats
    document.getElementById('statPending').textContent = totalPending;
    document.getElementById('statEvents').textContent = totalEvents;
    document.getElementById('statUrgent').textContent = totalUrgent;
    
    const overallProgress = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;
    document.getElementById('statProgress').textContent = overallProgress + '%';
}

// Search synchronization
function syncMobileSearch(val) {
    const desktopSearch = document.getElementById('searchInput');
    if (desktopSearch) desktopSearch.value = val;
    renderDashboard();
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const mobileSearch = document.getElementById('mobileSearchInput');
    if (searchInput) searchInput.value = '';
    if (mobileSearch) mobileSearch.value = '';
    renderDashboard();
}

// Modal Handlers: Add Business
function openAddBusinessModal() {
    const modal = document.getElementById('addBusinessModal');
    if (modal) modal.classList.remove('hidden');
}

function closeAddBusinessModal() {
    const modal = document.getElementById('addBusinessModal');
    if (modal) modal.classList.add('hidden');
}

function handleCreateBusiness(event) {
    event.preventDefault();
    const name = document.getElementById('newBizName').value.trim();
    const tagline = document.getElementById('newBizTagline').value.trim();
    const category = document.getElementById('newBizCategory').value.trim();
    const color = document.getElementById('newBizColor').value;
    const icon = document.getElementById('newBizIcon').value;
    const notes = document.getElementById('newBizNotes').value.trim();

    if (!name) return;

    const newBiz = {
        id: name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now(),
        name: name,
        tagline: tagline || 'New Venture Workspace',
        category: category || 'General',
        color: color,
        icon: icon,
        impDates: [],
        todos: [],
        schedules: [],
        checklists: [],
        notes: notes
    };

    INITIAL_BUSINESSES.push(newBiz);
    closeAddBusinessModal();
    renderDashboard();
    event.target.reset();
}

// Workspace Modal Handlers
function openWorkspaceModal(bizId) {
    currentActiveBizId = bizId;
    const biz = INITIAL_BUSINESSES.find(b => b.id === bizId);
    if (!biz) return;

    // Populate Header
    document.getElementById('wsTitle').textContent = biz.name;
    document.getElementById('wsCategory').textContent = biz.category;
    document.getElementById('wsTagline').textContent = biz.tagline;
    
    const iconBox = document.getElementById('wsIconBox');
    iconBox.style.backgroundColor = biz.color + '20';
    iconBox.style.color = biz.color;
    iconBox.style.borderColor = biz.color + '40';
    iconBox.style.borderWidth = '1px';
    
    const wsIcon = document.getElementById('wsIcon');
    wsIcon.className = `fa-solid ${biz.icon || 'fa-briefcase'} text-2xl`;

    // Populate counts in tabs
    document.getElementById('tabCount-todos').textContent = biz.todos ? biz.todos.length : 0;
    document.getElementById('tabCount-schedules').textContent = biz.schedules ? biz.schedules.length : 0;
    document.getElementById('tabCount-dates').textContent = biz.impDates ? biz.impDates.length : 0;
    document.getElementById('tabCount-checklist').textContent = biz.checklists ? biz.checklists.length : 0;

    // Populate Notes
    document.getElementById('wsNotesText').value = biz.notes || '';

    refreshWorkspaceContent();

    const modal = document.getElementById('workspaceModal');
    if (modal) modal.classList.remove('hidden');
    switchTab('todos');
}

function closeWorkspaceModal() {
    const modal = document.getElementById('workspaceModal');
    if (modal) modal.classList.add('hidden');
    currentActiveBizId = null;
    renderDashboard();
}

// Workspace Tabs Navigation
function switchTab(tabName) {
    const tabs = ['todos', 'schedules', 'dates', 'checklist', 'notes'];
    tabs.forEach(t => {
        const panel = document.getElementById(`tabPanel-${t}`);
        const btn = document.getElementById(`tabBtn-${t}`);
        if (panel && btn) {
            if (t === tabName) {
                panel.classList.remove('hidden');
                btn.className = "tab-btn py-3.5 px-4 text-sm font-semibold border-b-2 border-blue-500 text-blue-400 flex items-center space-x-2 whitespace-nowrap";
            } else {
                panel.classList.add('hidden');
                btn.className = "tab-btn py-3.5 px-4 text-sm font-semibold border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center space-x-2 whitespace-nowrap";
            }
        }
    });
}

function refreshWorkspaceContent() {
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;

    // 1. Todos List
    const todoListContainer = document.getElementById('wsTodoList');
    todoListContainer.innerHTML = '';
    if (!biz.todos || biz.todos.length === 0) {
        todoListContainer.innerHTML = `<p class="text-xs text-slate-500 py-4 text-center">No tasks added yet.</p>`;
    } else {
        biz.todos.forEach(todo => {
            const div = document.createElement('div');
            div.className = "bg-slate-950/40 border border-slate-800/80 p-3 rounded-xl flex items-center justify-between gap-3";
            div.innerHTML = `
                <label class="flex items-center space-x-3 cursor-pointer flex-1">
                    <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo('${todo.id}')" class="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 focus:ring-0" />
                    <span class="text-sm ${todo.completed ? 'line-through text-slate-500' : 'text-slate-200'}">${todo.text}</span>
                </label>
                <div class="flex items-center space-x-2">
                    <span class="text-[10px] px-2 py-0.5 rounded font-semibold ${
                        todo.priority === 'High' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                        todo.priority === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-slate-800 text-slate-400'
                    }">${todo.priority}</span>
                    <button onclick="deleteTodo('${todo.id}')" class="text-slate-500 hover:text-rose-400 p-1">
                        <i class="fa-solid fa-trash-can text-xs"></i>
                    </button>
                </div>
            `;
            todoListContainer.appendChild(div);
        });
    }

    // 2. Schedules List
    const schedContainer = document.getElementById('wsSchedulesList');
    schedContainer.innerHTML = '';
    if (!biz.schedules || biz.schedules.length === 0) {
        schedContainer.innerHTML = `<p class="text-xs text-slate-500 py-4 text-center">No scheduled events.</p>`;
    } else {
        biz.schedules.forEach(sch => {
            const div = document.createElement('div');
            div.className = "bg-slate-950/40 border border-slate-800/80 p-3.5 rounded-xl flex items-center justify-between gap-4";
            div.innerHTML = `
                <div class="space-y-0.5">
                    <h5 class="text-sm font-semibold text-white">${sch.title}</h5>
                    <p class="text-xs text-slate-400 flex items-center gap-3">
                        <span><i class="fa-regular fa-calendar text-blue-400 mr-1"></i> ${sch.date}</span>
                        ${sch.time ? `<span><i class="fa-regular fa-clock text-amber-400 mr-1"></i> ${sch.time}</span>` : ''}
                        ${sch.location ? `<span><i class="fa-solid fa-location-dot text-emerald-400 mr-1"></i> ${sch.location}</span>` : ''}
                    </p>
                </div>
                <button onclick="deleteSchedule('${sch.id}')" class="text-slate-500 hover:text-rose-400 p-1">
                    <i class="fa-solid fa-trash-can text-xs"></i>
                </button>
            `;
            schedContainer.appendChild(div);
        });
    }

    // 3. Key Dates List
    const datesContainer = document.getElementById('wsDatesList');
    datesContainer.innerHTML = '';
    if (!biz.impDates || biz.impDates.length === 0) {
        datesContainer.innerHTML = `<p class="text-xs text-slate-500 py-4 text-center">No key dates recorded.</p>`;
    } else {
        biz.impDates.forEach(d => {
            const div = document.createElement('div');
            div.className = "bg-slate-950/40 border border-slate-800/80 p-3.5 rounded-xl flex items-center justify-between gap-4";
            div.innerHTML = `
                <div class="flex items-center space-x-3">
                    <div class="p-2.5 rounded-lg ${d.urgent ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-slate-800 text-slate-300'}">
                        <i class="fa-regular fa-calendar-days text-sm"></i>
                    </div>
                    <div>
                        <h5 class="text-sm font-semibold text-white">${d.title}</h5>
                        <p class="text-xs text-slate-400">Due: ${d.date} ${d.urgent ? '<span class="text-rose-400 font-semibold ml-2">• High Priority Urgent</span>' : ''}</p>
                    </div>
                </div>
                <button onclick="deleteImpDate('${d.id}')" class="text-slate-500 hover:text-rose-400 p-1">
                    <i class="fa-solid fa-trash-can text-xs"></i>
                </button>
            `;
            datesContainer.appendChild(div);
        });
    }

    // 4. Checklist Items
    const checklistContainer = document.getElementById('wsChecklistItems');
    checklistContainer.innerHTML = '';
    if (!biz.checklists || biz.checklists.length === 0) {
        checklistContainer.innerHTML = `<p class="text-xs text-slate-500 py-4 text-center">No checklist items.</p>`;
    } else {
        biz.checklists.forEach(chk => {
            const div = document.createElement('div');
            div.className = "bg-slate-950/40 border border-slate-800/80 p-3 rounded-xl flex items-center justify-between gap-3";
            div.innerHTML = `
                <label class="flex items-center space-x-3 cursor-pointer flex-1">
                    <input type="checkbox" ${chk.completed ? 'checked' : ''} onchange="toggleChecklist('${chk.id}')" class="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 focus:ring-0" />
                    <span class="text-sm ${chk.completed ? 'line-through text-slate-500' : 'text-slate-200'}">${chk.text}</span>
                </label>
                <button onclick="deleteChecklist('${chk.id}')" class="text-slate-500 hover:text-rose-400 p-1">
                    <i class="fa-solid fa-trash-can text-xs"></i>
                </button>
            `;
            checklistContainer.appendChild(div);
        });
    }
}

// Add Item Handlers Inside Workspace
function handleAddTodo(e) {
    e.preventDefault();
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;

    const text = document.getElementById('wsTodoText').value.trim();
    const priority = document.getElementById('wsTodoPriority').value;
    if (!text) return;

    if (!biz.todos) biz.todos = [];
    biz.todos.push({
        id: 't_' + Date.now(),
        text: text,
        priority: priority,
        completed: false
    });

    document.getElementById('wsTodoText').value = '';
    document.getElementById('tabCount-todos').textContent = biz.todos.length;
    refreshWorkspaceContent();
    renderDashboard();
}

function toggleTodo(todoId) {
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;
    const todo = biz.todos.find(t => t.id === todoId);
    if (todo) {
        todo.completed = !todo.completed;
        refreshWorkspaceContent();
        renderDashboard();
    }
}

function deleteTodo(todoId) {
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;
    biz.todos = biz.todos.filter(t => t.id !== todoId);
    document.getElementById('tabCount-todos').textContent = biz.todos.length;
    refreshWorkspaceContent();
    renderDashboard();
}

function handleAddSchedule(e) {
    e.preventDefault();
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;

    const title = document.getElementById('wsSchedTitle').value.trim();
    const date = document.getElementById('wsSchedDate').value;
    const time = document.getElementById('wsSchedTime').value.trim();
    const location = document.getElementById('wsSchedLoc').value.trim();
    if (!title || !date) return;

    if (!biz.schedules) biz.schedules = [];
    biz.schedules.push({
        id: 's_' + Date.now(),
        title, date, time, location
    });

    e.target.reset();
    document.getElementById('tabCount-schedules').textContent = biz.schedules.length;
    refreshWorkspaceContent();
    renderDashboard();
}

function deleteSchedule(schId) {
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;
    biz.schedules = biz.schedules.filter(s => s.id !== schId);
    document.getElementById('tabCount-schedules').textContent = biz.schedules.length;
    refreshWorkspaceContent();
    renderDashboard();
}

function handleAddImpDate(e) {
    e.preventDefault();
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;

    const title = document.getElementById('wsDateTitle').value.trim();
    const date = document.getElementById('wsDateVal').value;
    const urgent = document.getElementById('wsDateUrgent').checked;
    if (!title || !date) return;

    if (!biz.impDates) biz.impDates = [];
    biz.impDates.push({
        id: 'd_' + Date.now(),
        title, date, urgent
    });

    e.target.reset();
    document.getElementById('tabCount-dates').textContent = biz.impDates.length;
    refreshWorkspaceContent();
    renderDashboard();
}

function deleteImpDate(dateId) {
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;
    biz.impDates = biz.impDates.filter(d => d.id !== dateId);
    document.getElementById('tabCount-dates').textContent = biz.impDates.length;
    refreshWorkspaceContent();
    renderDashboard();
}

function handleAddChecklist(e) {
    e.preventDefault();
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;

    const text = document.getElementById('wsChecklistText').value.trim();
    if (!text) return;

    if (!biz.checklists) biz.checklists = [];
    biz.checklists.push({
        id: 'c_' + Date.now(),
        text,
        completed: false
    });

    document.getElementById('wsChecklistText').value = '';
    document.getElementById('tabCount-checklist').textContent = biz.checklists.length;
    refreshWorkspaceContent();
}

function toggleChecklist(chkId) {
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;
    const chk = biz.checklists.find(c => c.id === chkId);
    if (chk) {
        chk.completed = !chk.completed;
        refreshWorkspaceContent();
    }
}

function deleteChecklist(chkId) {
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;
    biz.checklists = biz.checklists.filter(c => c.id !== chkId);
    document.getElementById('tabCount-checklist').textContent = biz.checklists.length;
    refreshWorkspaceContent();
}

function handleSaveNotes() {
    const biz = INITIAL_BUSINESSES.find(b => b.id === currentActiveBizId);
    if (!biz) return;
    biz.notes = document.getElementById('wsNotesText').value;
    alert('Notes and strategy updated successfully!');
    renderDashboard();
}