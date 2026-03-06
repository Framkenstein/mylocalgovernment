// Council member data - Current Santa Cruz City Council (2024-2026)
const councilMembers = [
    {
        id: 1,
        name: "Fred Keeley",
        title: "Mayor",
        photo: "Photos/fred-keely-480.png",
        scores: {
            housing: { score: 5.0, pro: 17, total: 17 },
            safety: { score: 4.6, pro: 21, total: 23 },
            economy: { score: 5.0, pro: 18, total: 18 },
            transportation: { score: 5.0, pro: 38, total: 38 },
            environment: { score: 5.0, pro: 62, total: 62 }
        },
        platform: "",
        email: "fkeeley@santacruzca.gov",
        phone: "(831) 420-5020",
        termExpires: "December 2026"
    },
    {
        id: 2,
        name: "Shebreh Kalantari-Johnson",
        title: "Vice Mayor - District 3",
        photo: "Photos/skj-480.png",
        scores: {
            housing: { score: 5.0, pro: 17, total: 17 },
            safety: { score: 4.8, pro: 24, total: 25 },
            economy: { score: 5.0, pro: 18, total: 18 },
            transportation: { score: 5.0, pro: 39, total: 39 },
            environment: { score: 5.0, pro: 62, total: 62 }
        },
        platform: "",
        email: "skalantari-johnson@santacruzca.gov",
        phone: "(831) 420-5020",
        termExpires: "December 2028"
    },
    {
        id: 3,
        name: "Gabriela Trigueiro",
        title: "Councilmember - District 1",
        photo: "Photos/gt-480.png",
        scores: {
            housing: { score: 4.3, pro: 13, total: 15 },
            safety: { score: 4.5, pro: 19, total: 21 },
            economy: { score: 5.0, pro: 13, total: 13 },
            transportation: { score: 5.0, pro: 32, total: 32 },
            environment: { score: 5.0, pro: 52, total: 52 }
        },
        platform: "",
        email: "gtrigueiro@santacruzca.gov",
        phone: "(831) 420-5020",
        termExpires: "December 2028"
    },
    {
        id: 4,
        name: "Sonja Brunner",
        title: "Councilmember - District 2",
        photo: "Photos/sb480.png",
        scores: {
            housing: { score: 5.0, pro: 10, total: 10 },
            safety: { score: 5.0, pro: 21, total: 21 },
            economy: { score: 5.0, pro: 11, total: 11 },
            transportation: { score: 5.0, pro: 34, total: 34 },
            environment: { score: 5.0, pro: 58, total: 58 }
        },
        platform: "",
        email: "sbrunner@santacruzca.gov",
        phone: "(831) 420-5020",
        termExpires: "December 2028"
    },
    {
        id: 5,
        name: "Scott Newsome",
        title: "Councilmember - District 4",
        photo: "Photos/sn480.png",
        scores: {
            housing: { score: 4.3, pro: 13, total: 15 },
            safety: { score: 4.8, pro: 23, total: 24 },
            economy: { score: 5.0, pro: 16, total: 16 },
            transportation: { score: 5.0, pro: 34, total: 34 },
            environment: { score: 5.0, pro: 60, total: 60 }
        },
        platform: "",
        email: "snewsome@santacruzca.gov",
        phone: "(831) 420-5020",
        termExpires: "December 2026"
    },
    {
        id: 6,
        name: "Susie O'Hara",
        title: "Councilmember - District 5",
        photo: "Photos/soh-480.png",
        scores: {
            housing: { score: 5.0, pro: 17, total: 17 },
            safety: { score: 4.8, pro: 24, total: 25 },
            economy: { score: 4.7, pro: 17, total: 18 },
            transportation: { score: 4.9, pro: 38, total: 39 },
            environment: { score: 5.0, pro: 62, total: 62 }
        },
        platform: "",
        email: "sohara@santacruzca.gov",
        phone: "(831) 420-5020",
        termExpires: "December 2028"
    },
    {
        id: 7,
        name: "Renee Golder",
        title: "Councilmember - District 6",
        photo: "Photos/rg-480.png",
        scores: {
            housing: { score: 5.0, pro: 17, total: 17 },
            safety: { score: 4.8, pro: 22, total: 23 },
            economy: { score: 5.0, pro: 15, total: 15 },
            transportation: { score: 5.0, pro: 37, total: 37 },
            environment: { score: 5.0, pro: 54, total: 54 }
        },
        platform: "",
        email: "rgolder@santacruzca.gov",
        phone: "(831) 420-5020",
        termExpires: "December 2026"
    }
];

const categories = {
    housing: {
        name: "Housing Development",
        methodology: `An AYE vote was counted as a "Pro Housing Development" vote for items that approved new housing construction, zoning changes for increased density, affordable housing funding, and housing policy reforms.`,
        memberVotes: [
            "Mayor Keeley: 17/17 (100%)",
            "Vice Mayor Kalantari-Johnson: 17/17 (100%)",
            "Councilmember Trigueiro: 13/13 (100%)",
            "Councilmember Brunner: 11/11 (100%)",
            "Councilmember Newsome: 16/16 (100%)",
            "Councilmember Golder: 15/15 (100%)",
            "Councilmember O'Hara: 13/15 (87%) - NO votes on February 25, 2025 Library expansion and June 24, 2025 Ocean Street project"
        ],
        votes: [
            "Accessory Dwelling Units (ADUs) - January 14, 2025",
            "Library & Affordable Housing Project Funding - February 25, 2025", 
            "313 Swift Street Project (100 Units) - March 11, 2025",
            "Downtown Plan Expansion (Increased Density) - March 25, 2025",
            "Zoning Amendments for 2394 Delaware Avenue - March 25, 2025",
            "Leonard Street General Plan Land Use Amendment - March 25, 2025",
            "Downtown Density Bonus Fees and Charges - March 25, 2025",
            "PLHA Funding for Downtown Library Project - April 22, 2025",
            "AHSC Award for Downtown Library Project - April 22, 2025",
            "TEFRA Hearing for Downtown Library Project - April 22, 2025",
            "1811/1815/1819 Mission Street Project (67 Units) - May 13, 2025",
            "Design Standards for Multifamily Housing - May 27, 2025",
            "Construction Agreements for Library Project - June 10, 2025",
            "530/542/548 Ocean Street Project (225 Units) - June 24, 2025",
            "2020 N. Pacific Avenue Project (178 Units) - August 12, 2025",
            "TEFRA Hearings & Bond Financing - August 26, 2025",
            "ADU Regulations Update - February 10, 2026"
        ]
    },
    safety: {
        name: "Public Safety",
        methodology: `An AYE vote was counted as "Pro Public Safety" for items that approved safety funding, equipment purchases, labor agreements, impact fees, safety codes, and policy renewals (24 of the 25 items were structured this way).

Exception: For the January 13, 2026 vote on whether to terminate the Flock Safety Automated License Plate Reader (ALPR) cameras, a NO vote (voting to keep the police cameras) was counted as the "Pro Public Safety" stance, while an AYE to terminate was counted as a vote against keeping that specific law enforcement tool.`,
        memberVotes: [
            "Councilmember Brunner: 21/21 (100%)",
            "Councilmember O'Hara: 24/25 (96%)",
            "Vice Mayor Kalantari-Johnson: 24/25 (96%)",
            "Councilmember Newsome: 23/24 (96%)",
            "Councilmember Golder: 22/23 (96%)",
            "Mayor Keeley: 21/23 (91%)",
            "Councilmember Trigueiro: 19/21 (90%)"
        ],
        votes: [
            {
                type: "Unanimous or Unanimous-Present Approvals (23 Items)",
                description: "These items received unanimous AYE votes from all council members present:",
                items: [
                    "Fire Department Agreements & Grants: Fire Consolidation Feasibility Study (Jan 14, 2025), Fire Dept Risk Assessment (Feb 25, 2025), Fire Management Association and Local 1716 Labor Agreements (Mar 11, 2025), Wildfire Prevention Grants (Apr 22, 2025)",
                    "Fire Equipment & Facilities: Fire Engine purchase (May 13, 2025), Fire Station 1 roof restoration (May 27, 2025), UCSC Fire Station remodel/agreements (Jun 10, 2025), Fire Equipment purchases via Impact Fees (Jun 24, 2025)",
                    "Police Equipment & Services: Police Interceptor Vehicles purchase and outfitting (Aug 12, 2025), Independent Police Auditor contracts and reports (Aug 26, 2025)",
                    "Public Safety Fees & Codes: Public Safety Impact Fees update (Feb 10, 2026), 2025 CA Fire Code and Wildland-Urban Interface Code adoption (Feb 10, 2026), Comprehensive Wildfire Preparedness Program (Feb 10, 2026), Fire Hazard Severity Zones setting (Feb 10, 2026)",
                    "Joint Reports: Joint annual report from SCPD and Commission for the Prevention of Violence Against Women (Feb 10, 2026)"
                ]
            },
            {
                type: "Contested Public Safety Votes (2 Items)",
                description: "",
                items: [
                    "AB 481 Military Equipment Policy (April 22, 2025): Motion to receive annual military equipment report and adopt updated use policy passed 4-2. Councilmembers Trigueiro and Mayor Keeley cast NO votes.",
                    "Terminate Flock Safety ALPR Contract (January 13, 2026): Motion to terminate Flock license plate reader cameras passed 6-1. Councilmember Brunner cast the sole NO vote to keep the cameras."
                ]
            }
        ]
    },
    economy: {
        name: "Economic Development",
        methodology: `An AYE vote was counted as a "Pro Economic Development" vote for items that approved business funding, commercial leases, downtown/midtown improvements, and business support action plans.`,
        memberVotes: [
            "Vice Mayor Kalantari-Johnson: 18/18 (100%)",
            "Mayor Keeley: 18/18 (100%)",
            "Councilmember O'Hara: 17/18 (94%) - Cast the sole NO vote on the August 26, 2025 update regarding actions to support Seabright/Harbor businesses",
            "Councilmember Newsome: 16/16 (100%)",
            "Councilmember Golder: 15/15 (100%)",
            "Councilmember Trigueiro: 13/13 (100%)",
            "Councilmember Brunner: 11/11 (100%) - Recused from 6 votes regarding the Vibrancy Ordinance, EIFD, and Downtown BIDs due to employment conflicts"
        ],
        votes: [
            "Reviewed 18 decisions across City Council minutes that directly relate to Economic Development",
            "Includes votes on Business Improvement District (BID) assessments, Economic Development Strategy and Vibrancy Ordinance, commercial space leases, business recovery/support initiatives, and extending commercial permits"
        ]
    },
    transportation: {
        name: "Transportation",
        methodology: `An AYE vote was counted as a "Pro Transportation" vote for items that approved funding, contracts, planning, and standards for transit, pedestrian/bicycle infrastructure, and roadway improvements.`,
        memberVotes: [
            "Vice Mayor Kalantari-Johnson: 39/39 (100%)",
            "Councilmember Golder: 37/37 (100%)",
            "Mayor Keeley: 38/38 (100%) - Recused from the January 27, 2026 vote on the Pacific-Beach Roundabout Enhancements due to the proximity of his residence",
            "Councilmember O'Hara: 38/39 (97%) - Cast the sole NO vote on the August 26, 2025 update regarding traffic control, temporary bike paths, and transit alternatives for the Murray Street Bridge closure",
            "Councilmember Brunner: 34/34 (100%)",
            "Councilmember Newsome: 34/34 (100%)",
            "Councilmember Trigueiro: 32/32 (100%)"
        ],
        votes: [
            "Reviewed 39 decisions across City Council minutes that directly relate to Transportation",
            "Includes votes on active transportation (Monterey Bay Sanctuary Scenic Rail Trail, protected bike lanes), street maintenance and striping, parking bonds and impact fees, traffic calming programs, roundabout enhancements, and traffic/transit mitigation plans for the Murray Street Bridge closure"
        ]
    },
    environment: {
        name: "Environment",
        methodology: `An AYE vote was counted as a "Pro Environment" vote for items that advanced environmental protections, approved funding/contracts for environmental infrastructure and maintenance, adopted climate action plans, or supported conservation efforts.`,
        memberVotes: [
            "Vice Mayor Kalantari-Johnson: 62/62 (100%)",
            "Mayor Keeley: 62/62 (100%)",
            "Councilmember O'Hara: 62/62 (100%)",
            "Councilmember Newsome: 60/60 (100%)",
            "Councilmember Brunner: 58/58 (100%)",
            "Councilmember Golder: 54/54 (100%)",
            "Councilmember Trigueiro: 52/52 (100%)"
        ],
        votes: [
            "Reviewed 62 decisions across City Council minutes that directly relate to the Environment",
            "Includes votes on climate action planning, coastal resilience and sea-level rise, water and wastewater management, stormwater and sewer infrastructure, urban forestry and tree removal appeals, parks and open spaces, waste management (including refuse trucks and recycling), and energy efficiency/battery storage"
        ]
    }
};

let currentCategory = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderMembers();
    setupCategoryFilters();
    setupLightbox();
});

// Render council members
function renderMembers() {
    const grid = document.getElementById('membersGrid');
    grid.innerHTML = '';

    councilMembers.forEach(member => {
        const card = createMemberCard(member);
        grid.appendChild(card);
    });
}

// Create member card element
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl cursor-pointer';
    card.onclick = () => showMemberDetails(member);

    const averageScore = calculateAverageScore(member.scores);

    card.innerHTML = `
        <div class="relative flex justify-center">
            <img src="${member.photo}" alt="${member.name}" class="w-56 h-56 object-cover object-center rounded-lg">
            <div class="absolute top-2 right-2 bg-white rounded-full px-2 py-1 shadow">
                <span class="text-xs font-semibold text-gray-700">Avg: ${(calculateAverageScore(member.scores) * 20).toFixed(0)}%</span>
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900">${member.name}</h3>
            <p class="text-sm text-gray-600 mb-3">${member.title}</p>
            
            <div class="space-y-2">
                ${Object.entries(member.scores).map(([key, scoreData]) => {
                    if (currentCategory !== 'all' && currentCategory !== key) return '';
                    const display = scoreData.total > 0 ? `${scoreData.pro}/${scoreData.total}` : '0/0';
                    const percentage = scoreData.total > 0 ? (scoreData.pro / scoreData.total) * 100 : 0;
                    let colorClass;
                    if (percentage === 100) colorClass = 'score-5'; // Perfect green
                    else if (percentage >= 80) colorClass = 'score-4'; // Blue
                    else if (percentage >= 60) colorClass = 'score-3'; // Yellow
                    else if (percentage >= 40) colorClass = 'score-2'; // Orange
                    else if (percentage >= 20) colorClass = 'score-1'; // Red
                    else colorClass = 'score-0'; // Black
                    const categoryName = typeof categories[key] === 'object' ? categories[key].name : categories[key];
                    return `
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-600">${categoryName}</span>
                            <div class="flex items-center">
                                <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                    <div class="${colorClass} h-2 rounded-full" style="width: ${percentage}%"></div>
                                </div>
                                <span class="${colorClass} text-white text-xs px-2 py-1 rounded-full">${display}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <button class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm">
                View Details
            </button>
        </div>
    `;

    return card;
}

// Calculate average score
function calculateAverageScore(scores) {
    const values = Object.values(scores).map(scoreData => scoreData.score);
    return values.reduce((a, b) => a + b, 0) / values.length;
}

// Setup category filter buttons
function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.category-btn');
    const votingDetails = document.getElementById('votingDetails');
    const votingTitle = document.getElementById('votingTitle');
    const votingContent = document.getElementById('votingContent');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update button styles
            buttons.forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-200', 'text-gray-700');
            });
            this.classList.remove('bg-gray-200', 'text-gray-700');
            this.classList.add('bg-blue-600', 'text-white');
            
            // Update current category and re-render
            currentCategory = this.dataset.category;
            renderMembers();
            
            // Show voting details if available
            if (currentCategory !== 'all' && categories[currentCategory] && categories[currentCategory].votes) {
                const categoryData = categories[currentCategory];
                votingTitle.textContent = `${categoryData.name} - Voting Details`;
                
                let content = '';
                
                // Add methodology if available
                if (categoryData.methodology) {
                    content += `
                        <div class="mb-6">
                            <h4 class="font-semibold text-gray-900 mb-3">Voting Methodology:</h4>
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <p class="text-blue-800 whitespace-pre-line">${categoryData.methodology}</p>
                            </div>
                        </div>
                    `;
                }
                
                // Add member votes if available
                if (categoryData.memberVotes) {
                    content += `
                        <div class="mb-6">
                            <h4 class="font-semibold text-gray-900 mb-3">Council Member Vote Summary:</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                ${categoryData.memberVotes.map(vote => `
                                    <div class="bg-gray-50 p-3 rounded-lg text-sm">
                                        <div class="font-medium text-gray-900">${vote}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
                
                // Add voting details
                if (Array.isArray(categoryData.votes) && categoryData.votes.length > 0 && typeof categoryData.votes[0] === 'object') {
                    content += `
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-3">Detailed Vote Breakdown:</h4>
                            <div class="space-y-6">
                                ${categoryData.votes.map(voteGroup => `
                                    <div class="border-l-4 border-blue-400 pl-4">
                                        <h5 class="font-medium text-gray-900 mb-2">${voteGroup.type}</h5>
                                        ${voteGroup.description ? `<p class="text-gray-600 text-sm mb-3">${voteGroup.description}</p>` : ''}
                                        <ul class="space-y-1">
                                            ${voteGroup.items.map(item => `<li class="text-gray-700 text-sm">• ${item}</li>`).join('')}
                                        </ul>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                } else if (Array.isArray(categoryData.votes)) {
                    // Fallback for simple array format
                    content += `
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-3">Items Voted On:</h4>
                            <ul class="space-y-2">
                                ${categoryData.votes.map(item => `<li class="text-gray-700">• ${item}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
                
                // Add member vote breakdown
                content += `
                    <div class="mt-6 pt-6 border-t border-gray-200">
                        <h4 class="font-semibold text-gray-900 mb-3">Individual Council Member Votes:</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${councilMembers.map(member => {
                                const scoreData = member.scores[currentCategory];
                                if (!scoreData || scoreData.total === 0) return '';
                                
                                const percentage = ((scoreData.pro / scoreData.total) * 100).toFixed(1);
                                return `
                                    <div class="bg-gray-50 p-3 rounded-lg">
                                        <div class="font-medium text-gray-900">${member.name}</div>
                                        <div class="text-sm text-gray-600">${scoreData.pro}/${scoreData.total} pro votes (${percentage}%)</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
                
                votingContent.innerHTML = content;
                votingDetails.classList.remove('hidden');
            } else {
                votingDetails.classList.add('hidden');
            }
        });
    });
}

// Setup lightbox modal
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('closeModal');
    
    closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });
}

// Show member details in lightbox
function showMemberDetails(member) {
    const lightbox = document.getElementById('lightbox');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = member.name;
    
    modalContent.innerHTML = `
        <div class="space-y-6">
            <div class="flex items-center space-x-4">
                <img src="${member.photo}" alt="${member.name}" class="w-24 h-24 rounded-full object-cover object-center">
                <div>
                    <h4 class="text-lg font-semibold text-gray-900">${member.title}</h4>
                    <p class="text-gray-600">${member.email}</p>
                    <p class="text-gray-600">${member.phone}</p>
                    <p class="text-gray-600">Term expires: ${member.termExpires}</p>
                </div>
            </div>
            
            <div>
                <h5 class="font-semibold text-gray-900 mb-3">Performance Scores</h5>
                <div class="space-y-3">
                    ${Object.entries(member.scores).map(([key, scoreData]) => `
                        <div class="flex items-center justify-between">
                            <span class="text-gray-700 w-32">${typeof categories[key] === 'object' ? categories[key].name : categories[key]}</span>
                            <div class="flex items-center flex-1">
                                <div class="w-32 bg-gray-200 rounded-full h-3 mr-3">
                                    <div class="${scoreData.total > 0 ? (scoreData.pro / scoreData.total) * 100 === 100 ? 'score-5' : (scoreData.pro / scoreData.total) * 100 >= 80 ? 'score-4' : (scoreData.pro / scoreData.total) * 100 >= 60 ? 'score-3' : (scoreData.pro / scoreData.total) * 100 >= 40 ? 'score-2' : (scoreData.pro / scoreData.total) * 100 >= 20 ? 'score-1' : 'score-0' : 'score-0'} h-3 rounded-full transition-all duration-500" style="width: ${scoreData.total > 0 ? (scoreData.pro / scoreData.total) * 100 : 0}%"></div>
                                </div>
                                <span class="${scoreData.total > 0 ? (scoreData.pro / scoreData.total) * 100 === 100 ? 'score-5' : (scoreData.pro / scoreData.total) * 100 >= 80 ? 'score-4' : (scoreData.pro / scoreData.total) * 100 >= 60 ? 'score-3' : (scoreData.pro / scoreData.total) * 100 >= 40 ? 'score-2' : (scoreData.pro / scoreData.total) * 100 >= 20 ? 'score-1' : 'score-0' : 'score-0'} text-white text-sm px-3 py-1 rounded-full font-semibold">${scoreData.total > 0 ? `${scoreData.pro}/${scoreData.total}` : '0/0'}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="pt-4 border-t border-gray-200">
                <div class="flex items-center justify-between">
                    <span class="text-gray-700 font-semibold">Overall Performance</span>
                    <span class="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                        ${calculateAverageScore(member.scores).toFixed(1)}/5
                    </span>
                </div>
            </div>
        </div>
    `;
    
    lightbox.classList.remove('hidden');
}
