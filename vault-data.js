// ============================================================
// 2050 FUTURES LAB — SECURE CRYPTO REGISTRY (MODULE)
// ============================================================
// Las llaves corresponden al hash SHA-256 de las credenciales:
// '2050-ALPHA' -> '74f26ca4f4347781b01c10729792014197db39db82a5c48b049d1fb0be17df54'
// '2050-BETA'  -> '1bc98917812f8618f0eb5e10037a4d57fc5a01bc6ee9370fa9327db1154101cb'

const SECURE_CRYPTO_REGISTRY = {
    "74f26ca4f4347781b01c10729792014197db39db82a5c48b049d1fb0be17df54": {
        title: "Sovereign Portal: Horizon BioTech & AI Corp",
        breadcrumb: "CLIENT-ALPHA",
        codename: "NEXUS-BIO-2050",
        horizon: "2028 - 2045",
        lastMeeting: "Jan 2026, Executive Advisory Board - Santiago",
        alert: "Acceleration of biological intellectual property regulations detected in the EU for Q4.",
        deliverables: [
            { 
                title: "Bio-Tech & Food Systems Transition Map", 
                desc: "Comprehensive scenario modeling of molecular synthesis.", 
                type: "Scenario Report (PDF)", 
                date: "Updated Dec 2025", 
                fileSize: "18.4 MB" 
            },
            { 
                title: "Automated Clinical Lab Mitigation Framework", 
                desc: "Strategic roadmap for scientific labor upskilling.", 
                type: "Interactive Framework", 
                date: "Updated Jan 2026", 
                fileSize: "8.1 MB" 
            },
            { 
                title: "Biotech Regulation Monitor", 
                desc: "Predictive regulatory tracking of gene editing restrictions.", 
                type: "Regulatory Radar", 
                date: "Live Tracking", 
                fileSize: "Dynamic" 
            }
        ],
        horizon1: [
            { label: "AI saturation in diagnostics", severity: "High Impact" }, 
            { label: "Molecular ingredient tariffs", severity: "Medium Impact" }
        ],
        horizon2: [
            { label: "Bio-Hardware patent crisis", severity: "Critical Risk" }, 
            { label: "Commercial synthetic cell meats", severity: "Opportunity" }
        ],
        horizon3: [
            { label: "Genetic sovereignty protocols", severity: "Systemic Shift" }, 
            { label: "Commercial biological computing", severity: "Extreme Wildcard" }
        ]
    },
    "1bc98917812f8618f0eb5e10037a4d57fc5a01bc6ee9370fa9327db1154101cb": {
        title: "Sovereign Portal: Southern Energy & Climate Consortium",
        breadcrumb: "CLIENT-BETA",
        codename: "CLIMATE-FORCE-2050",
        horizon: "2030 - 2055",
        lastMeeting: "Nov 2025, Foresight Vision Workshop - Patagonia",
        alert: "Volatility in direct air capture (DAC) scaling forces re-evaluation.",
        deliverables: [
            { 
                title: "Energy Transition Horizon", 
                desc: "Geopolitical and climate feasibility analysis.", 
                type: "Geopolitical Study", 
                date: "November 2025", 
                fileSize: "24.5 MB" 
            },
            { 
                title: "Infrastructure Resilience Matrix", 
                desc: "Predictive system failure model mapping.", 
                type: "Dynamic Risk Matrix", 
                date: "Updated Jan 2026", 
                fileSize: "12.7 MB" 
            }
        ],
        horizon1: [
            { label: "Record green hydrogen cost", severity: "High Factor" }, 
            { label: "Carbon bond policy frameworks", severity: "Immediate Policy" }
        ],
        horizon2: [
            { label: "Technical labor bottlenecks", severity: "Severe Bottleneck" }, 
            { label: "Private micro-nuclear grids", severity: "Strategic Wildcard" }
        ],
        horizon3: [
            { label: "Carbon market offset decay", severity: "Critical Shift" }, 
            { label: "Continental unified grid", severity: "Systemic Opportunity" }
        ]
    }
};

// Vinculación global silenciosa para el core de la bóveda
window.VaultRegistry = SECURE_CRYPTO_REGISTRY;
