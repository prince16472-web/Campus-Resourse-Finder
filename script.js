const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const chips = document.querySelectorAll('.chip');
const resourceGrid = document.getElementById('resourceGrid');

const resourceData = [
    {
        name: 'Library',
        category: 'study',
        icon: '📚',
        status: 'Open',
        statusClass: 'open',
        description: 'Quiet reading rooms, study booths, and digital resources for research and revision.',
        details: ['Open: 8:00 AM - 10:00 PM', 'Room A1, West Block']
    },
    {
        name: 'Computer Lab',
        category: 'tech',
        icon: '💻',
        status: 'Open',
        statusClass: 'open',
        description: 'High-speed computers, printing services, and dedicated IT support for coursework.',
        details: ['Open: 7:30 AM - 9:00 PM', 'Engineering Building']
    },
    {
        name: 'Health Center',
        category: 'wellness',
        icon: '🩺',
        status: 'Available',
        statusClass: 'available',
        description: 'Medical assistance, first aid, and wellness consultations for students and staff.',
        details: ['Open: 9:00 AM - 5:00 PM', 'Student Services Wing']
    },
    {
        name: 'Canteen',
        category: 'food',
        icon: '🍽️',
        status: 'Open',
        statusClass: 'open',
        description: 'Healthy meals, snacks, and coffee options for students between classes.',
        details: ['Open: 8:00 AM - 8:00 PM', 'Central Plaza']
    },
    {
        name: 'Counseling Center',
        category: 'support',
        icon: '🧠',
        status: 'By appointment',
        statusClass: 'available',
        description: 'Emotional support, guidance, and academic wellbeing services for every student.',
        details: ['Open: 10:00 AM - 6:00 PM', 'South Annex']
    },
    {
        name: 'Sports Complex',
        category: 'facilities',
        icon: '🏀',
        status: 'Open',
        statusClass: 'open',
        description: 'Gym facilities, courts, and fitness programs for active campus life.',
        details: ['Open: 6:00 AM - 9:00 PM', 'Recreation Block']
    },
    {
        name: 'Student Services',
        category: 'support',
        icon: '🎓',
        status: 'Open',
        statusClass: 'open',
        description: 'Admissions help, forms, scholarships, and enrollment guidance from one desk.',
        details: ['Open: 8:30 AM - 5:30 PM', 'Administration Hall']
    },
    {
        name: 'Study Lounge',
        category: 'study',
        icon: '🧾',
        status: 'Open',
        statusClass: 'open',
        description: 'Group study zones, whiteboards, and casual seating for collaborative work.',
        details: ['Open: 7:00 AM - 11:00 PM', 'North Tower']
    },
    {
        name: 'Student Shuttle',
        category: 'transport',
        icon: '🚌',
        status: 'Active',
        statusClass: 'available',
        description: 'Free campus shuttle service connecting classes, hostels, and student parking areas.',
        details: ['Runs every 15 minutes', 'Main Gate Loop']
    },
    {
        name: 'Residence Hall',
        category: 'housing',
        icon: '🏠',
        status: 'Available',
        statusClass: 'available',
        description: 'On-campus housing support with room assistance, maintenance help, and student living guides.',
        details: ['Open: 24/7', 'East Residency Block']
    },
    {
        name: 'Innovation Hub',
        category: 'tech',
        icon: '🚀',
        status: 'Open',
        statusClass: 'open',
        description: 'Startup support, maker spaces, and project labs for students building prototypes.',
        details: ['Open: 9:00 AM - 7:00 PM', 'Innovation Center']
    },
    {
        name: 'Event Lawn',
        category: 'events',
        icon: '🎉',
        status: 'Booked',
        statusClass: 'available',
        description: 'Open-air event space for festivals, workshops, club fairs, and student gatherings.',
        details: ['Host events weekly', 'Central Green Courtyard']
    }
];

function renderResources() {
    resourceGrid.innerHTML = resourceData.map((resource) => `
        <article class="resource-card" data-category="${resource.category}" data-name="${resource.name.toLowerCase()}">
            <div class="resource-icon">${resource.icon}</div>
            <div class="resource-body">
                <div class="resource-topline">
                    <h4>${resource.name}</h4>
                    <span class="status ${resource.statusClass}">${resource.status}</span>
                </div>
                <p>${resource.description}</p>
                <ul>
                    ${resource.details.map((detail) => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        </article>
    `).join('');
}

let cards = [];

function refreshCards() {
    cards = Array.from(document.querySelectorAll('.resource-card'));
}

function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    cards.forEach((card) => {
        const name = card.dataset.name || '';
        const category = card.dataset.category || '';
        const matchesText = name.includes(query) || card.textContent.toLowerCase().includes(query);
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

        card.classList.toggle('hidden', !(matchesText && matchesCategory));
    });
}

renderResources();
refreshCards();

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);

chips.forEach((chip) => {
    chip.addEventListener('click', () => {
        chips.forEach((item) => item.classList.toggle('active', item === chip));
        categoryFilter.value = chip.dataset.filter;
        applyFilters();
    });
});
