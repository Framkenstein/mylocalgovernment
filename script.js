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
            {
                type: "Business Improvement Districts & Vibrancy Ordinance (6 Items)",
                description: "Business district assessments and economic development framework:",
                items: [
                    "Downtown Association: Parking and Business Improvement Area Assessments for FY 2026 (May 27, 2025)",
                    "Downtown Association: Parking and Business Improvement Area Assessments for FY 2026 - Public Hearing (Jun 24, 2025)",
                    "Economic Development Strategy and Vibrancy Ordinance - First Reading (Date TBD)",
                    "Economic Development Strategy and Vibrancy Ordinance - Second Reading (Date TBD)",
                    "Enhanced Infrastructure Financing District (EIFD) Formation (Date TBD)",
                    "Downtown Business Improvement District (BID) Renewal (Date TBD)"
                ]
            },
            {
                type: "Commercial Leases & Business Support (5 Items)",
                description: "Commercial space agreements and business assistance programs:",
                items: [
                    "Downtown Library Mixed Use Project - Commercial Space Lease Agreement (Apr 22, 2025)",
                    "Downtown Library Mixed Use Project - Commercial Lease Amendments (Aug 26, 2025)",
                    "Actions to Support Seabright and Harbor Businesses Impacted by the Murray Street Bridge Project (Aug 12, 2025)",
                    "Update on Actions to Support Seabright and Harbor Businesses Affected by the Murray Street Bridge Project (Aug 26, 2025)",
                    "Business Recovery and Support Initiatives - Quarterly Report (Dec 9, 2025)"
                ]
            },
            {
                type: "Business Funding & Incentives (4 Items)",
                description: "Financial support and incentive programs for businesses:",
                items: [
                    "Small Business Grant Program - Funding Allocation (Feb 25, 2025)",
                    "Business Facade Improvement Program - Budget Adjustment (Mar 11, 2025)",
                    "Economic Development Incentive Fund - Annual Report (Jun 10, 2025)",
                    "Business Attraction and Retention Program - Contract Extension (Jan 13, 2026)"
                ]
            },
            {
                type: "Economic Development Planning (3 Items)",
                description: "Strategic planning and economic analysis:",
                items: [
                    "Economic Development Strategy 2025-2030 - Annual Progress Report (Jan 28, 2025)",
                    "Downtown/Midtown Economic Development Plan - Phase 1 Completion (May 13, 2025)",
                    "Economic Impact Analysis - Downtown Development Projects (Sep 9, 2025)"
                ]
            }
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
            {
                type: "Unanimous Transportation Approvals (38 Items)",
                description: "These items received unanimous AYE votes from all council members present:",
                items: [
                    "HSIP Cycle 10 Advanced Dilemma Zone Detection Project (Jan 14, 2025)",
                    "Go Santa Cruz Downtown Employee Transportation Demand Management Program (Jan 14, 2025)",
                    "Award Contracts for Aggregate Materials and Road Maintenance Materials (Jan 28, 2025)",
                    "Downtown Intersection Improvements Plan Revisions & Metro Transit Station Improvements Agreement (Jan 28, 2025)",
                    "Rail Trail Segments 8 and 9 Budget Adjustment (Jan 28, 2025)",
                    "Award Contract for Bergkamp Patching Truck (Jan 28, 2025)",
                    "PROTECT Discretionary Grant Programs for West Cliff Drive Coastal Resilience (Feb 11, 2025)",
                    "West Cliff Drive - 900 and 1000 Block Striping Plans (Feb 11, 2025)",
                    "Parking Lease Revenue Bond Authorization (Feb 11, 2025)",
                    "2nd Reading and Final Adoption of Ordinance No. 2025-02 - Parking Lease Revenue Bond Authorization (Feb 25, 2025)",
                    "Active Transportation Plan - Outreach Consulting Contract Amendment 1 (Mar 11, 2025)",
                    "Monterey Bay Sanctuary Scenic Trail (Rail Trail) Segment 7 Phase II Project - Budget Adjustment (Mar 11, 2025)",
                    "2025 Parking Revenue Bonds for Public Parking Project (Apr 22, 2025)",
                    "California Street Striping and Signage Improvement (Apr 22, 2025)",
                    "Traffic Calming Pilot Program; Poplar, Seabright and Western Plan Approval (Apr 22, 2025)",
                    "Bay Corridor Design Concept (California Street to High Street) (Apr 22, 2025)",
                    "Pacific-Beach Roundabout Enhancements Project - Authorization to Advertise and Award (May 13, 2025)",
                    "Bay Drive Protected Bike Lanes and Pedestrian Path - Budget Adjustment (May 13, 2025)",
                    "Rail Trail Segments 8 and 9 - Approve Contract with Consultant to Assist with Right-of-Way Acquisition (May 13, 2025)",
                    "Senate Bill 1 Road Maintenance and Rehabilitation Account (RMRA) - FY 2026 Funding (May 13, 2025)",
                    "Downtown Association: Parking and Business Improvement Area Assessments for FY 2026 (May 27, 2025)",
                    "Zoning Ordinance Amendments Related to Parking, Bicycle Parking and Facilities (Objective Design Standards) (May 27, 2025)",
                    "Pass-Through Agreement with Volunteer Center of Santa Cruz County - TDA Claimant (Jun 10, 2025)",
                    "Pass-Through Agreement with Community Bridges - TDA Claimant (Jun 10, 2025)",
                    "2025 Update to City of Santa Cruz Public Works Standard Details (Jun 10, 2025)",
                    "Contract Amendment 3 for Santa Cruz County Regional Bike Share Program (Jun 10, 2025)",
                    "Amendment to the Transportation and Public Works Commission's Bylaws (Jun 10, 2025)",
                    "Soquel/Front and Locust Street Garage Elevator Repairs (Jun 10, 2025)",
                    "Downtown Association: Parking and Business Improvement Area Assessments for FY 2026 - Public Hearing (Jun 24, 2025)",
                    "Actions to Support Seabright and Harbor Businesses Impacted by the Murray Street Bridge Project (Aug 12, 2025)",
                    "Traffic Calming Pilot Program: Award Contract (Aug 12, 2025)",
                    "Pacific-Beach Roundabout Enhancements Project - Budget Adjustment (Aug 26, 2025)",
                    "Transit Proximate Developments: Transportation and Parking Challenges (Aug 26, 2025)",
                    "Monterey Bay Sanctuary Scenic Trail (Rail Trail) Segment 7 Phase 2 Project - Notice of Completion (Sep 9, 2025)",
                    "FY 2025 Traffic Impact Fee Annual Report (Dec 9, 2025)",
                    "FY 2025 Parking In-Lieu Impact Fee Annual Report (Dec 9, 2025)",
                    "Murray Street Bridge Seismic Retrofit Construction Phase - Contract Amendment 12 (Dec 9, 2025)",
                    "Soquel Avenue Minor Striping Improvements 2025 (Jan 13, 2026)"
                ]
            },
            {
                type: "Contested Transportation Votes (1 Item)",
                description: "This item received a dissenting vote from one council member:",
                items: [
                    "Update on Actions to Support Seabright and Harbor Businesses Affected by the Murray Street Bridge Project (Aug 26, 2025): Motion to pursue transit alternatives, temporary bike paths, and traffic lane management passed 6-1. Councilmember O'Hara cast the sole NO vote."
                ]
            }
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
            {
                type: "Water & Wastewater Infrastructure (18 Items)",
                description: "Projects related to water systems, sewer rehabilitation, and wastewater treatment:",
                items: [
                    "Neary Street Sewer Rehabilitation - Notice of Completion (Jan 14, 2025)",
                    "San Lorenzo River Lagoon Culvert Project - Notice of Completion (Jan 14, 2025)",
                    "West Cliff Drive 60-inch RCP Headwall Repair - Contract Change Order (Jan 14, 2025)",
                    "Felton Diversion Pipeline Emergency Repair / Zayante Creek Bank Stabilization (Jan 14, 2025)",
                    "2024 Well Rehabilitation Project - Notice of Completion (Jan 14, 2025)",
                    "Front-Spruce-Pacific 54-Inch Sewer Rehabilitation - Notice of Completion (Feb 11, 2025)",
                    "Purchase of Wastewater Collections Septic Pump Truck (Feb 11, 2025)",
                    "Resource Recovery Facility North Canyon Paving - Notice of Completion (Feb 11, 2025)",
                    "Wastewater Treatment Facility Dashboard - Award Contract (Feb 11, 2025)",
                    "2024 Citywide Sewer/Storm Drain Lining Project - Notice of Completion (Mar 11, 2025)",
                    "User Charges for Wastewater Services - Proposed Five-Year Increase (Mar 25, 2025)",
                    "Wastewater Treatment Facility Digester 1 Cleaning - Notice of Completion (Apr 22, 2025)",
                    "Contract for Septic System Replacement Services at Lower DeLaveaga Community Park (May 13, 2025)",
                    "User Charges for Wastewater Services - Proposed Five-Year Increase - Public Hearing (Jun 10, 2025)",
                    "User Charges for Wastewater Services - Proposed Sewer Connection Fees (Jun 10, 2025)",
                    "Escalona Drive Storm Drain Rehabilitation - Notice of Completion (Jun 24, 2025)",
                    "Emergency San Lorenzo River Lagoon Culvert Repair (Jun 24, 2025)",
                    "Award Purchase Order for 212 Locust Street/117 Union Street Sewer Repair Project (Jan 27, 2026)"
                ]
            },
            {
                type: "Climate Action & Coastal Resilience (15 Items)",
                description: "Climate planning, coastal protection, and sea-level rise initiatives:",
                items: [
                    "Communitywide Climate Action Plan 2030 - Year 2 Progress Report Update (Jan 14, 2025)",
                    "NOAA Climate Resilience Grant for Living Shoreline in Main Beach and Flood Mitigation in Jessie Street Marsh (Jan 28, 2025)",
                    "DTSC Equitable Communities Revitalization Grant for Soils Investigation at Pogonip Open Space (Feb 25, 2025)",
                    "Award Contract for NOAA Grant Administration Services for Coastal Restoration Projects (Mar 11, 2025)",
                    "2025-2030 Local Hazard Mitigation Plan and Climate Adaptation Plan (Mar 11, 2025)",
                    "5-year Roadmap for West Cliff to Advance the Community's 50-year Vision (Mar 11, 2025)",
                    "Approval to Join the Declaration of Support for the Blue City Network (Apr 22, 2025)",
                    "Coastal Conservancy Resilience Grant Program for Wharf Resilience Upgrades (Apr 22, 2025)",
                    "Award Contract for Resilient Coast 2.0: Shoreline Adaptation Management Plans (Jun 24, 2025)",
                    "Endorsement of the Ocean Rise and Coastal Resilience Coalition (Aug 12, 2025)",
                    "800 West Cliff Drive Temporary Erosion Control and Path Reopening (Aug 12, 2025)",
                    "2025 Sewer System Management Plan - Certification (Aug 26, 2025)",
                    "Approve MOUs with Haven Energy for Battery Storage Infrastructure (Dec 9, 2025)",
                    "West Cliff Drive Stabilization Project - Notice of Completion (Dec 9, 2025)",
                    "Resilient Coast Santa Cruz 2.0 Update: Summary of Community Engagement (Jan 27, 2026)"
                ]
            },
            {
                type: "Energy Efficiency & Conservation (8 Items)",
                description: "Energy codes, battery storage, and efficiency improvements:",
                items: [
                    "Modifications to the Energy Reach Code for Major Renovations (Mar 11, 2025)",
                    "Energy Efficiency Improvement Projects - Notice of Completion (Jun 10, 2025)",
                    "Materials Recovery Facility (MRF) Stormwater Treatment System - Notice of Completion (Jun 10, 2025)",
                    "Resource Recovery Facility Permanent Stormwater Treatment System Project (Jun 24, 2025)",
                    "Award Contract for Wastewater Treatment Facility Biosolids End-Use Services (Aug 12, 2025)",
                    "Amendments to Align the Energy Reach Code for Major Renovations (Aug 26, 2025)",
                    "Distribution of Coast Pump Station Battery Storage Tax Credit (Jan 13, 2026)",
                    "Water Supply Augmentation, Beltz Well 10 Aquifer Storage and Recovery Pilot Test (Dec 9, 2025)"
                ]
            },
            {
                type: "Parks, Open Spaces & Urban Forestry (6 Items)",
                description: "Parks, open space management, and tree-related decisions:",
                items: [
                    "DTSC Equitable Communities Revitalization Grant for Soils Investigation at Pogonip Open Space (Feb 25, 2025)",
                    "Second Amendment to Services Agreement for Watershed Lands Forest Management Project (May 13, 2025)",
                    "San Lorenzo Park Redesign Final Report (May 27, 2025)",
                    "Contract Award for French Broom and Acacia Removal (Jun 24, 2025)",
                    "Neary Lagoon Tule and Sediment Removal Project - Approval of Plans (Jun 10, 2025)",
                    "Tree Appeal - 401 Ingalls Street (Upholding the tree removal) (Dec 9, 2025)"
                ]
            },
            {
                type: "Waste Management & Recycling (5 Items)",
                description: "Refuse collection, recycling, and waste facility projects:",
                items: [
                    "Resource Recovery Facility Appliance Recycler Services (Mar 11, 2025)",
                    "Resource Recovery Facility Enclosed Flare Installation Project (Mar 11, 2025)",
                    "Purchase of NewWay Rear Loader Refuse Truck (Jun 24, 2025)",
                    "Purchase of Three Refuse Trucks (Aug 12, 2025)",
                    "Purchase of Vac Con Vactor Truck (Jan 13, 2026)"
                ]
            },
            {
                type: "Environmental Management & Monitoring (10 Items)",
                description: "Environmental monitoring, cyanobacteria management, and fisheries:",
                items: [
                    "Modifications to Forest Management Policies for Water Department Watershed Lands (Mar 25, 2025)",
                    "Neary Lagoon Tule and Sediment Removal Project - Approval of Plans (Jun 10, 2025)",
                    "Award Contract for Cyanobacteria Management (Jun 10, 2025)",
                    "Fisheries Monitoring and Non-Flow Conservation Fund Project - Award Contracts (Jun 10, 2025)",
                    "Bethany Culvert Storm Damage Repair - Notice of Completion (Aug 12, 2025)",
                    "Adjustment of Water Department Miscellaneous Fees (Dec 9, 2025)",
                    "Ordinance Restricting Irrigation of Nonfunctional Turf (Jan 13, 2026)",
                    "Climate Action Plan 2030 - Citywide Implementation Workplan Progress Report (Jan 13, 2026)",
                    "Neary Lagoon Tule & Sediment Removal Project 2025 - Notice of Completion (Jan 13, 2026)",
                    "Final Adoption of Ordinance Restricting Irrigation of Nonfunctional Turf (Jan 27, 2026)"
                ]
            }
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
