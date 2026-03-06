// Budget data based on Santa Cruz City budget information
const budgetData = {
    departments: [
        { name: 'Police Department', budget: 42000000, percentage: 28.5, change: 2.3 },
        { name: 'Fire Department', budget: 35000000, percentage: 23.8, change: 1.8 },
        { name: 'Public Works', budget: 22000000, percentage: 15.0, change: 4.2 },
        { name: 'Parks & Recreation', budget: 18000000, percentage: 12.2, change: 1.5 },
        { name: 'Planning & Community Development', budget: 15000000, percentage: 10.2, change: 3.8 },
        { name: 'General Government', budget: 12000000, percentage: 8.1, change: 2.1 },
        { name: 'Library Services', budget: 13000000, percentage: 8.8, change: 1.2 }
    ],
    revenue: [
        { source: 'Property Taxes', amount: 55000000, percentage: 37.4 },
        { source: 'Sales Taxes', amount: 32000000, percentage: 21.7 },
        { source: 'Business License Taxes', amount: 18000000, percentage: 12.2 },
        { source: 'State & Federal Grants', amount: 22000000, percentage: 14.9 },
        { source: 'Service Charges & Fees', amount: 14000000, percentage: 9.5 },
        { source: 'Other Revenue', amount: 7000000, percentage: 4.3 }
    ]
};

// Initialize budget page
document.addEventListener('DOMContentLoaded', function() {
    createDepartmentChart();
    createRevenueChart();
    populateBudgetTable();
});

// Create department budget pie chart
function createDepartmentChart() {
    const ctx = document.getElementById('departmentChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: budgetData.departments.map(dept => dept.name),
            datasets: [{
                data: budgetData.departments.map(dept => dept.budget),
                backgroundColor: [
                    '#3b82f6',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444',
                    '#8b5cf6',
                    '#ec4899',
                    '#6b7280'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 10,
                        font: {
                            size: 11
                        },
                        boxWidth: 12
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const percentage = budgetData.departments[context.dataIndex].percentage;
                            return `${context.label}: $${(value / 1000000).toFixed(1)}M (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Create revenue sources pie chart
function createRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: budgetData.revenue.map(rev => rev.source),
            datasets: [{
                data: budgetData.revenue.map(rev => rev.amount),
                backgroundColor: [
                    '#059669',
                    '#0891b2',
                    '#7c3aed',
                    '#dc2626',
                    '#ea580c',
                    '#65a30d'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 10,
                        font: {
                            size: 11
                        },
                        boxWidth: 12
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const percentage = budgetData.revenue[context.dataIndex].percentage;
                            return `${context.label}: $${(value / 1000000).toFixed(1)}M (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Populate budget table
function populateBudgetTable() {
    const tableBody = document.getElementById('budgetTable');
    
    budgetData.departments.forEach(dept => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        
        const changeClass = dept.change >= 0 ? 'text-green-600' : 'text-red-600';
        const changeSymbol = dept.change >= 0 ? '+' : '';
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${dept.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$${(dept.budget / 1000000).toFixed(1)}M</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${dept.percentage}%</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm ${changeClass} font-medium">
                ${changeSymbol}${dept.change}%
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add print functionality for budget data
function printBudgetReport() {
    window.print();
}

// Add export to CSV functionality (placeholder)
function exportBudgetCSV() {
    let csv = 'Department,Budget,Percentage,YoY Change\n';
    budgetData.departments.forEach(dept => {
        csv += `"${dept.name}",${dept.budget},${dept.percentage},${dept.change}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'santa-cruz-budget.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}
