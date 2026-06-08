// Generador asíncrono de interfaz táctica
function renderDashboard(data) {
    const container = document.getElementById('dashboard-content');
    container.innerHTML = `
        <header class="flex flex-col md:flex-row md:items-center md:justify-between pb-6 mb-8 border-b border-zinc-800/80">
            <div class="mb-4 md:mb-0">
                <div class="flex items-center space-x-2 text-xs text-zinc-500 uppercase tracking-widest font-mono mb-1">
                    <span>2050LAB.ORG</span>
                    <span>/</span>
                    <span class="text-amber-500/80 font-semibold">INTELLIGENCE VAULT</span>
                    <span>/</span>
                    <span>${data.breadcrumb}</span>
                </div>
                <h2 class="text-2xl font-bold tracking-tight text-zinc-100 uppercase">${data.title}</h2>
                <p class="text-xs text-zinc-400 mt-1 flex items-center">
                    <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
                    Encrypted tunnel established // Live intelligence stream
                </p>
            </div>
            <div class="flex items-center space-x-3">
                <button onclick="logoutVault()" class="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all flex items-center space-x-2">
                    <i class="fa-solid fa-lock text-xs text-amber-500"></i>
                    <span>Lock Vault</span>
                </button>
            </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="space-y-8 lg:col-span-1">
                <section class="bg-brand-cardBg/60 border border-brand-border rounded-xl p-6 backdrop-blur-sm">
                    <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 border-b border-zinc-800/60 pb-2 font-mono">Project Scope</h3>
                    <div class="space-y-4">
                        <div><span class="text-[10px] uppercase text-zinc-500 block font-mono">Lab Codename:</span><span class="text-sm font-semibold text-zinc-200 font-mono">${data.codename}</span></div>
                        <div><span class="text-[10px] uppercase text-zinc-500 block font-mono">Target Horizon:</span><span class="text-sm font-medium text-amber-500/90">${data.horizon}</span></div>
                        <div><span class="text-[10px] uppercase text-zinc-500 block font-mono">Lead Strategic Partner:</span><span class="text-sm font-medium text-zinc-200">2050 Futures Lab Core</span></div>
                        <div><span class="text-[10px] uppercase text-zinc-500 block font-mono">Last Co-design Session:</span><span class="text-xs bg-zinc-950 border border-zinc-800/80 px-2 py-1 rounded inline-block text-zinc-400 mt-1">${data.lastMeeting}</span></div>
                    </div>
                </section>

                <section class="bg-[#181111]/80 border border-red-900/30 rounded-xl p-6">
                    <div class="flex items-center space-x-2 text-red-400 mb-4">
                        <i class="fa-solid fa-triangle-exclamation animate-pulse"></i>
                        <h3 class="text-xs font-bold uppercase tracking-[0.2em] font-mono">Active Flash Alerts</h3>
                    </div>
                    <p class="text-xs text-zinc-400 leading-relaxed mb-4">${data.alert}</p>
                    <button onclick="simulateAction('Downloading strategic intelligence brief...')" class="w-full bg-red-950/40 hover:bg-red-950/70 border border-red-900/50 text-red-300 font-mono text-[10px] uppercase tracking-widest py-2.5 rounded">Read Tactical Intel Note (PDF)</button>
                </section>
            </div>

            <div class="lg:col-span-2 space-y-8">
                <section class="bg-brand-cardBg/60 border border-brand-border rounded-xl p-6">
                    <div class="flex items-center justify-between mb-6 border-b border-zinc-800/60 pb-3">
                        <div class="flex items-center space-x-2.5"><i class="fa-solid fa-layer-group text-amber-500/80"></i><h3 class="text-xs font-bold uppercase tracking-[0.2em] text-zinc-200 font-mono">Strategic Deliverables Vault</h3></div>
                        <span class="text-[10px] bg-zinc-950 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">${data.deliverables.length} Active</span>
                    </div>
                    <div class="space-y-4">${data.deliverables.map(item => `
                        <div class="p-4 bg-zinc-950/50 border border-zinc-900 rounded-lg hover:border-amber-500/30 transition">
                            <div class="flex justify-between items-start mb-2">
                                <h4 class="text-sm font-semibold text-zinc-200">${item.title}</h4>
                                <span class="text-[9px] font-mono bg-zinc-900 px-2 py-0.5 rounded text-amber-500/80">${item.type}</span>
                            </div>
                            <p class="text-xs text-zinc-500 mb-3">${item.desc}</p>
                            <div class="flex justify-between text-[10px] font-mono text-zinc-600">
                                <span>${item.date}</span>
                                <button onclick="simulateAction('Downloading: ${item.title}')" class="text-zinc-400 hover:text-amber-500"><i class="fa-solid fa-download"></i> ${item.fileSize}</button>
                            </div>
                        </div>
                    `).join('')}</div>
                </section>

                <section class="bg-brand-cardBg/60 border border-brand-border rounded-xl p-6">
                    <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-zinc-200 mb-4">Dynamic Horizon & Signals Radar</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-zinc-950/80 border border-zinc-900 rounded-lg p-4">
                            <span class="text-[9px] font-mono text-emerald-500 uppercase font-bold">Horizon 1: Near Term</span>
                            <h4 class="text-xs font-bold text-zinc-300 mt-1 mb-3">Direct Transitions</h4>
                            <ul class="space-y-2">${data.horizon1.map(item => `<li onclick="simulateAction('Analyzing: ${item.label}')" class="flex justify-between p-2 rounded hover:bg-zinc-900/50 cursor-pointer"><span class="text-[11px]">${item.label}</span><span class="text-[8px] font-mono bg-zinc-900 px-1.5 py-0.5 rounded">${item.severity}</span></li>`).join('')}</ul>
                        </div>
                        <div class="bg-zinc-950/80 border border-zinc-900 rounded-lg p-4">
                            <span class="text-[9px] font-mono text-amber-500/80 uppercase font-bold">Horizon 2: Mid Term</span>
                            <h4 class="text-xs font-bold text-zinc-300 mt-1 mb-3">Friction & Scaling</h4>
                            <ul class="space-y-2">${data.horizon2.map(item => `<li onclick="simulateAction('Analyzing: ${item.label}')" class="flex justify-between p-2 rounded hover:bg-zinc-900/50 cursor-pointer"><span class="text-[11px]">${item.label}</span><span class="text-[8px] font-mono bg-zinc-900 px-1.5 py-0.5 rounded">${item.severity}</span></li>`).join('')}</ul>
                        </div>
                        <div class="bg-zinc-950/80 border border-zinc-900 rounded-lg p-4">
                            <span class="text-[9px] font-mono text-purple-400/80 uppercase font-bold">Horizon 3: Long Term</span>
                            <h4 class="text-xs font-bold text-zinc-300 mt-1 mb-3">Structural Shifts</h4>
                            <ul class="space-y-2">${data.horizon3.map(item => `<li onclick="simulateAction('Analyzing: ${item.label}')" class="flex justify-between p-2 rounded hover:bg-zinc-900/50 cursor-pointer"><span class="text-[11px]">${item.label}</span><span class="text-[8px] font-mono bg-zinc-900 px-1.5 py-0.5 rounded">${item.severity}</span></li>`).join('')}</ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;
}
window.renderDashboard = renderDashboard;
