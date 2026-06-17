// Rentify Application Controller

// Translation Dictionary
const TRANSLATIONS = {
  ka: {
    logo_sub: 'გააქირავე',
    search_placeholder: 'მოძებნე სასურველი ნივთი ან მოწყობილობა...',
    btn_add_listing: 'ნივთის დამატება',
    btn_login: 'შესვლა',
    btn_logout: 'გამოსვლა',
    btn_dashboard: 'მართვის პანელი',
    btn_home: 'მთავარი',
    hero_title: 'იქირავე ყველაფერი, გააქირავე რაც გაქვს',
    hero_desc: 'პლატფორმა, სადაც მარტივად იპოვი სასურველ მოწყობილობას ან ნივთს დროებითი სარგებლობისთვის და გამოიმუშავებ თანხას საკუთარი ნივთების გაქირავებით.',
    all_categories: 'ყველა კატეგორია',
    latest_listings: 'უახლესი განცხადებები',
    price_per_day: 'დღეში',
    deposit: 'დეპოზიტი',
    gel: '₾',
    days: 'დღე',
    no_listings: 'ნივთები ვერ მოიძებნა',
    no_listings_desc: 'სცადეთ სხვა კატეგორია ან საძიებო სიტყვა',
    location: 'მდებარეობა',
    owner: 'მფლობელი',
    rating: 'რეიტინგი',
    reviews: 'შეფასება',
    
    // Auth Modal
    login: 'შესვლა',
    register: 'რეგისტრაცია',
    email: 'ელ-ფოსტა',
    password: 'პაროლი',
    fullname: 'სახელი და გვარი',
    phone: 'ტელეფონის ნომერი',
    auth_error: 'ავტორიზაცია ვერ მოხერხდა',
    register_success: 'რეგისტრაცია წარმატებით დასრულდა!',
    
    // Add Listing
    add_title: 'განცხადების განთავსება',
    title_ka: 'სათაური (ქართულად)',
    title_en: 'სათაური (ინგლისურად)',
    desc_ka: 'აღწერა (ქართულად)',
    desc_en: 'აღწერა (ინგლისურად)',
    category: 'კატეგორია',
    price_label: 'დღიური ფასი (₾)',
    deposit_label: 'დეპოზიტის თანხა (₾)',
    loc_ka: 'მდებარეობა (ქართულად)',
    loc_en: 'მდებარეობა (ინგლისურად)',
    image_url: 'სურათის ლინკი (Unsplash ან სხვა)',
    btn_publish: 'განთავსება',
    add_success: 'განცხადება წარმატებით განთავსდა!',
    
    // Item Details
    rent_period: 'ქირაობის პერიოდი',
    start_date: 'დასაწყისი',
    end_date: 'დასასრული',
    subtotal: 'ჯამური ფასი',
    service_fee: 'სერვისის საკომისიო (5%)',
    total: 'სულ გადასახდელი',
    btn_rent_now: 'დაქირავება',
    login_to_rent: 'დასაქირავებლად გაიარეთ ავტორიზაცია',
    invalid_dates: 'გთხოვთ აირჩიოთ სწორი თარიღები',
    
    // Payment Modal
    payment_title: 'გადახდის სიმულაცია',
    card_number: 'ბარათის ნომერი',
    card_holder: 'ბარათის მფლობელი',
    card_expiry: 'მოქმედების ვადა',
    card_cvv: 'CVV კოდი',
    btn_pay: 'გადახდა',
    payment_processing: 'მიმდინარეობს ტრანზაქცია...',
    payment_success: 'გადახდა წარმატებით დასრულდა!',
    payment_success_desc: 'ნივთი წარმატებით დაიჯავშნა. შეგიძლიათ სტატუსი მართვის პანელში შეამოწმოთ.',
    btn_close: 'დახურვა',

    // Dashboard
    dash_title: 'თქვენი მართვის პანელი',
    stat_listings: 'აქტიური განცხადება',
    stat_earnings: 'გამომუშავებული თანხა',
    stat_spent: 'დახარჯული თანხა',
    tab_my_listings: 'ჩემი განცხადებები',
    tab_my_bookings: 'ჩემი ჯავშნები',
    tab_rental_requests: 'მოთხოვნები გაქირავებაზე',
    
    col_item: 'ნივთი',
    col_date: 'თარიღი',
    col_price: 'ფასი',
    col_status: 'სტატუსი',
    col_renter: 'დამქირავებელი',
    col_actions: 'მოქმედება',
    
    status_pending: 'მოლოდინში',
    status_approved: 'დადასტურებული',
    status_active: 'აქტიური',
    status_completed: 'დასრულებული',
    status_cancelled: 'გაუქმებული',
    
    btn_approve: 'დადასტურება',
    btn_reject: 'უარყოფა',
    btn_complete: 'დასრულება',
    btn_cancel: 'გაუქმება',
    
    no_bookings: 'ჯავშნები არ ფიქსირდება',
    no_requests: 'მოთხოვნები არ არის'
  },
  en: {
    logo_sub: 'Rent It',
    search_placeholder: 'Search for any item or device...',
    btn_add_listing: 'Add Listing',
    btn_login: 'Login',
    btn_logout: 'Logout',
    btn_dashboard: 'Dashboard',
    btn_home: 'Home',
    hero_title: 'Rent Anything, Make Money on What You Own',
    hero_desc: 'The best peer-to-peer platform to quickly rent any tool or device you need, or lists your items to generate passive income.',
    all_categories: 'All Categories',
    latest_listings: 'Latest Listings',
    price_per_day: 'per day',
    deposit: 'deposit',
    gel: '₾',
    days: 'days',
    no_listings: 'No items found',
    no_listings_desc: 'Try a different category or search term',
    location: 'Location',
    owner: 'Owner',
    rating: 'Rating',
    reviews: 'Reviews',
    
    // Auth Modal
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    fullname: 'Full Name',
    phone: 'Phone Number',
    auth_error: 'Authentication failed',
    register_success: 'Registration completed successfully!',
    
    // Add Listing
    add_title: 'Create Rental Listing',
    title_ka: 'Title (Georgian)',
    title_en: 'Title (English)',
    desc_ka: 'Description (Georgian)',
    desc_en: 'Description (English)',
    category: 'Category',
    price_label: 'Price per day (₾)',
    deposit_label: 'Deposit fee (₾)',
    loc_ka: 'Location (Georgian)',
    loc_en: 'Location (English)',
    image_url: 'Image URL (Unsplash recommended)',
    btn_publish: 'Publish Listing',
    add_success: 'Listing published successfully!',
    
    // Item Details
    rent_period: 'Rental Period',
    start_date: 'Start Date',
    end_date: 'End Date',
    subtotal: 'Subtotal Price',
    service_fee: 'Service fee (5%)',
    total: 'Total payment',
    btn_rent_now: 'Rent Now',
    login_to_rent: 'Login to Rent',
    invalid_dates: 'Please select valid dates',
    
    // Payment Modal
    payment_title: 'Payment Simulator',
    card_number: 'Card Number',
    card_holder: 'Card Holder',
    card_expiry: 'Expiration Date',
    card_cvv: 'CVV Code',
    btn_pay: 'Pay Now',
    payment_processing: 'Processing transaction...',
    payment_success: 'Payment Completed!',
    payment_success_desc: 'The item has been successfully booked. You can check the status in your Dashboard.',
    btn_close: 'Close',

    // Dashboard
    dash_title: 'Your Dashboard',
    stat_listings: 'Active Listings',
    stat_earnings: 'Total Earnings',
    stat_spent: 'Total Spent',
    tab_my_listings: 'My Listings',
    tab_my_bookings: 'My Bookings',
    tab_rental_requests: 'Rental Requests',
    
    col_item: 'Item',
    col_date: 'Dates',
    col_price: 'Price',
    col_status: 'Status',
    col_renter: 'Renter',
    col_actions: 'Actions',
    
    status_pending: 'Pending',
    status_approved: 'Approved',
    status_active: 'Active',
    status_completed: 'Completed',
    status_cancelled: 'Cancelled',
    
    btn_approve: 'Approve',
    btn_reject: 'Reject',
    btn_complete: 'Complete',
    btn_cancel: 'Cancel',
    
    no_bookings: 'No bookings found',
    no_requests: 'No rental requests'
  }
};

// Global App State
const AppState = {
  lang: localStorage.getItem('rentify_lang') || 'ka',
  currentUser: window.RentifyDB.getCurrentUser(),
  activePage: 'listings', // 'listings' or 'dashboard'
  selectedCategory: 'all',
  searchQuery: '',
  activeDashboardTab: 'my-listings' // 'my-listings', 'my-bookings', 'requests'
};

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Bind Theme
  initTheme();
  
  // Render navbar and UI elements
  renderApp();
  
  // Set up listeners for static elements
  setupStaticListeners();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('rentify_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('rentify_theme', isLight ? 'light' : 'dark');
  renderThemeIcon();
}

function renderThemeIcon() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  const isLight = document.body.classList.contains('light-theme');
  toggleBtn.innerHTML = isLight ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
  lucide.createIcons();
}

// Multi-Language translation function
function t(key) {
  return TRANSLATIONS[AppState.lang][key] || key;
}

// Master Render Function
function renderApp() {
  renderNavbar();
  renderThemeIcon();
  
  if (AppState.activePage === 'listings') {
    document.getElementById('listings-view').classList.remove('hidden');
    document.getElementById('dashboard-view').classList.add('hidden');
    renderHeroSection();
    renderCategories();
    renderListings();
  } else if (AppState.activePage === 'dashboard') {
    document.getElementById('listings-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.remove('hidden');
    renderDashboard();
  }
  
  // Run Lucide icons update to replace icons placeholders
  lucide.createIcons();
}

// Navbar Rendering
function renderNavbar() {
  const navContainer = document.querySelector('.nav-container');
  if (!navContainer) return;
  
  const user = AppState.currentUser;
  
  navContainer.innerHTML = `
    <a href="#" class="logo" id="nav-logo-link">
      <i data-lucide="share-2" class="logo-icon"></i>Rent<span>ify</span>
    </a>
    
    <div class="nav-search">
      <i data-lucide="search"></i>
      <input type="text" id="global-search-input" value="${AppState.searchQuery}" placeholder="${t('search_placeholder')}">
    </div>
    
    <div class="nav-actions">
      <select class="lang-switch" id="lang-select">
        <option value="ka" ${AppState.lang === 'ka' ? 'selected' : ''}>KA</option>
        <option value="en" ${AppState.lang === 'en' ? 'selected' : ''}>EN</option>
      </select>
      
      <button class="theme-toggle" id="theme-toggle-btn" title="Toggle Theme">
      </button>
      
      ${user ? `
        <button class="btn btn-primary" id="btn-add-listing-trigger">
          <i data-lucide="plus-circle"></i> ${t('btn_add_listing')}
        </button>
        
        <div class="user-profile-menu" id="user-menu-trigger">
          <img src="${user.avatar}" alt="Avatar" class="avatar">
          <div class="profile-dropdown glass" id="profile-dropdown-menu">
            <div class="dropdown-item" style="color: var(--text-main); font-weight:700; border-bottom:1px solid var(--border-color); padding-bottom:8px; cursor:default">
              ${user.fullName}
            </div>
            <a href="#" class="dropdown-item" id="menu-home-link">
              <i data-lucide="home"></i> ${t('btn_home')}
            </a>
            <a href="#" class="dropdown-item" id="menu-dash-link">
              <i data-lucide="layout-dashboard"></i> ${t('btn_dashboard')}
            </a>
            <a href="#" class="dropdown-item divider" id="menu-logout-link">
              <i data-lucide="log-out"></i> ${t('btn_logout')}
            </a>
          </div>
        </div>
      ` : `
        <button class="btn btn-outline" id="btn-login-trigger">
          <i data-lucide="log-in"></i> ${t('btn_login')}
        </button>
      `}
    </div>
  `;
  
  // Re-bind navbar event handlers
  setupNavbarListeners();
}

// Hero Rendering
function renderHeroSection() {
  const hero = document.getElementById('hero-section');
  if (!hero) return;
  hero.innerHTML = `
    <h1 class="gradient-text">${t('hero_title')}</h1>
    <p>${t('hero_desc')}</p>
  `;
}

// Category Chips Rendering
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;
  
  container.innerHTML = window.RentifyCategories.map(cat => {
    const isActive = AppState.selectedCategory === cat.id;
    return `
      <div class="category-chip ${isActive ? 'active' : ''}" data-category="${cat.id}">
        <i data-lucide="${cat.icon}"></i>
        <span>${AppState.lang === 'ka' ? cat.ka : cat.en}</span>
      </div>
    `;
  }).join('');
  
  // Add category click listeners
  container.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      AppState.selectedCategory = chip.dataset.category;
      renderApp();
    });
  });
}

// listings Rendering
function renderListings() {
  const grid = document.getElementById('listings-grid');
  const countEl = document.getElementById('listings-count-label');
  if (!grid) return;
  
  const allItems = window.RentifyDB.getItems();
  
  // Filter by category and search query
  const filtered = allItems.filter(item => {
    const matchesCategory = AppState.selectedCategory === 'all' || item.category === AppState.selectedCategory;
    
    const titleText = (item.title[AppState.lang] || '').toLowerCase();
    const descText = (item.description[AppState.lang] || '').toLowerCase();
    const query = AppState.searchQuery.toLowerCase();
    const matchesSearch = titleText.includes(query) || descText.includes(query);
    
    return matchesCategory && matchesSearch;
  });
  
  countEl.innerText = `${filtered.length} ${t('latest_listings')}`;
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1">
        <i data-lucide="search-code"></i>
        <h2>${t('no_listings')}</h2>
        <p>${t('no_listings_desc')}</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  grid.innerHTML = filtered.map(item => {
    const title = item.title[AppState.lang] || item.title.ka;
    const desc = item.description[AppState.lang] || item.description.ka;
    const location = item.location[AppState.lang] || item.location.ka;
    const categoryObj = window.RentifyCategories.find(c => c.id === item.category);
    const categoryName = categoryObj ? (AppState.lang === 'ka' ? categoryObj.ka : categoryObj.en) : item.category;
    
    return `
      <div class="item-card glass" data-id="${item.id}">
        <div class="card-img-container">
          <img src="${item.image}" alt="${title}" loading="lazy">
          <span class="card-category-badge">${categoryName}</span>
          <span class="card-rating">
            <i data-lucide="star" style="fill: var(--secondary); width:14px; height:14px"></i>
            ${item.rating.toFixed(1)}
          </span>
        </div>
        <div class="card-content">
          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${desc}</p>
          <div class="card-location">
            <i data-lucide="map-pin" style="width:14px; height:14px"></i>
            <span>${location}</span>
          </div>
          <div class="card-footer">
            <div class="card-price-container">
              <span class="card-price-label">${t('price_per_day')}</span>
              <span class="card-price">${item.price}${t('gel')} <span>/ ${t('days')}</span></span>
            </div>
            <div class="card-price-container" style="align-items: flex-end">
              <span class="card-price-label">${t('deposit')}</span>
              <span style="font-size:0.95rem; font-weight:600">${item.deposit}${t('gel')}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Attach card click handlers
  grid.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', () => {
      const itemId = card.dataset.id;
      showItemDetails(itemId);
    });
  });
  
  lucide.createIcons();
}

// Dashboard Page Rendering
function renderDashboard() {
  const container = document.getElementById('dashboard-view');
  if (!container) return;
  
  const user = AppState.currentUser;
  if (!user) {
    AppState.activePage = 'listings';
    renderApp();
    return;
  }
  
  const allItems = window.RentifyDB.getItems();
  const allBookings = window.RentifyDB.getBookings();
  
  // Filter user lists
  const myListings = allItems.filter(item => item.ownerId === user.id);
  const myBookings = allBookings.filter(b => b.renterId === user.id);
  
  // Requests for items owned by this user
  const myItemIds = myListings.map(i => i.id);
  const myRequests = allBookings.filter(b => myItemIds.includes(b.itemId));
  
  // Calculate Stats
  const activeListingsCount = myListings.length;
  
  // Total Earnings (completed/approved rentals of owner items)
  const earningsTotal = myRequests
    .filter(b => b.status !== 'cancelled' && b.status !== 'pending')
    .reduce((sum, b) => sum + b.totalPrice, 0);
    
  // Total Spent (completed/approved rentals by this renter)
  const spentTotal = myBookings
    .filter(b => b.status !== 'cancelled')
    .reduce((sum, b) => sum + b.totalPrice, 0);

  container.innerHTML = `
    <div class="dashboard-header">
      <h1 class="gradient-text">${t('dash_title')}</h1>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card glass">
        <div class="stat-icon purple"><i data-lucide="tag"></i></div>
        <div class="stat-info">
          <h3>${activeListingsCount}</h3>
          <p>${t('stat_listings')}</p>
        </div>
      </div>
      <div class="stat-card glass">
        <div class="stat-icon gold"><i data-lucide="wallet"></i></div>
        <div class="stat-info">
          <h3>${earningsTotal}${t('gel')}</h3>
          <p>${t('stat_earnings')}</p>
        </div>
      </div>
      <div class="stat-card glass">
        <div class="stat-icon green"><i data-lucide="shopping-bag"></i></div>
        <div class="stat-info">
          <h3>${spentTotal}${t('gel')}</h3>
          <p>${t('stat_spent')}</p>
        </div>
      </div>
    </div>
    
    <div class="dashboard-tabs">
      <div class="dashboard-tab ${AppState.activeDashboardTab === 'my-listings' ? 'active' : ''}" data-tab="my-listings">
        ${t('tab_my_listings')} (${myListings.length})
      </div>
      <div class="dashboard-tab ${AppState.activeDashboardTab === 'my-bookings' ? 'active' : ''}" data-tab="my-bookings">
        ${t('tab_my_bookings')} (${myBookings.length})
      </div>
      <div class="dashboard-tab ${AppState.activeDashboardTab === 'requests' ? 'active' : ''}" data-tab="requests">
        ${t('tab_rental_requests')} (${myRequests.length})
      </div>
    </div>
    
    <div class="dashboard-tab-content">
      ${renderDashboardTabContent(myListings, myBookings, myRequests)}
    </div>
  `;
  
  // Dashboard Tabs Listeners
  container.querySelectorAll('.dashboard-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      AppState.activeDashboardTab = tab.dataset.tab;
      renderDashboard();
      lucide.createIcons();
    });
  });
  
  // Table action button listeners
  setupDashboardTableListeners();
}

function renderDashboardTabContent(myListings, myBookings, myRequests) {
  if (AppState.activeDashboardTab === 'my-listings') {
    if (myListings.length === 0) {
      return `<div class="empty-state"><i data-lucide="tag"></i><p>${t('no_listings_desc')}</p></div>`;
    }
    return `
      <div class="dashboard-table-container glass" style="padding:16px; border-radius: var(--radius-md)">
        <table class="dashboard-table">
          <thead>
            <tr>
              <th>${t('col_item')}</th>
              <th>${t('location')}</th>
              <th>${t('col_price')}</th>
              <th>${t('col_actions')}</th>
            </tr>
          </thead>
          <tbody>
            ${myListings.map(item => {
              const title = item.title[AppState.lang] || item.title.ka;
              const location = item.location[AppState.lang] || item.location.ka;
              return `
                <tr>
                  <td>
                    <div class="table-item-cell">
                      <img src="${item.image}" alt="${title}" class="table-item-img">
                      <div>
                        <div style="font-weight:600">${title}</div>
                        <div style="font-size:0.8rem; color:var(--text-muted)">ID: ${item.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>${location}</td>
                  <td><span style="font-weight:700; color:var(--secondary)">${item.price}${t('gel')}</span> / ${t('days')}</td>
                  <td>
                    <button class="btn btn-outline btn-text delete-item-btn" data-id="${item.id}" style="color:var(--danger)">
                      <i data-lucide="trash-2" style="width:16px; height:16px"></i>
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  if (AppState.activeDashboardTab === 'my-bookings') {
    if (myBookings.length === 0) {
      return `<div class="empty-state"><i data-lucide="calendar-days"></i><p>${t('no_bookings')}</p></div>`;
    }
    return `
      <div class="dashboard-table-container glass" style="padding:16px; border-radius: var(--radius-md)">
        <table class="dashboard-table">
          <thead>
            <tr>
              <th>${t('col_item')}</th>
              <th>${t('col_date')}</th>
              <th>${t('col_price')}</th>
              <th>${t('col_status')}</th>
              <th>${t('col_actions')}</th>
            </tr>
          </thead>
          <tbody>
            ${myBookings.map(booking => {
              const item = window.RentifyDB.getItemById(booking.itemId);
              const title = item ? (item.title[AppState.lang] || item.title.ka) : 'Deleted Item';
              const image = item ? item.image : 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=80&q=80';
              return `
                <tr>
                  <td>
                    <div class="table-item-cell">
                      <img src="${image}" alt="${title}" class="table-item-img">
                      <div>
                        <div style="font-weight:600">${title}</div>
                        <div style="font-size:0.8rem; color:var(--text-muted)">Booking ID: ${booking.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>${booking.startDate} - ${booking.endDate}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted)">${booking.totalDays} ${t('days')}</div>
                  </td>
                  <td>
                    <div style="font-weight:700; color:var(--secondary)">${booking.totalPrice}${t('gel')}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted)">+ ${booking.deposit}${t('gel')} ${t('deposit')}</div>
                  </td>
                  <td>
                    <span class="badge-status ${booking.status}">${t('status_' + booking.status)}</span>
                  </td>
                  <td>
                    ${booking.status === 'pending' ? `
                      <button class="btn btn-outline cancel-booking-btn" data-id="${booking.id}" style="color:var(--danger); border-color:var(--danger)">
                        ${t('btn_cancel')}
                      </button>
                    ` : '-'}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  if (AppState.activeDashboardTab === 'requests') {
    if (myRequests.length === 0) {
      return `<div class="empty-state"><i data-lucide="bell"></i><p>${t('no_requests')}</p></div>`;
    }
    return `
      <div class="dashboard-table-container glass" style="padding:16px; border-radius: var(--radius-md)">
        <table class="dashboard-table">
          <thead>
            <tr>
              <th>${t('col_item')}</th>
              <th>${t('col_renter')}</th>
              <th>${t('col_date')}</th>
              <th>${t('col_price')}</th>
              <th>${t('col_status')}</th>
              <th>${t('col_actions')}</th>
            </tr>
          </thead>
          <tbody>
            ${myRequests.map(req => {
              const item = window.RentifyDB.getItemById(req.itemId);
              const title = item ? (item.title[AppState.lang] || item.title.ka) : 'Deleted Item';
              const image = item ? item.image : 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=80&q=80';
              const renter = window.RentifyDB.getUserById(req.renterId);
              const renterName = renter ? renter.fullName : 'Unknown Renter';
              const renterPhone = renter ? renter.phone : '';
              
              return `
                <tr>
                  <td>
                    <div class="table-item-cell">
                      <img src="${image}" alt="${title}" class="table-item-img">
                      <div>
                        <div style="font-weight:600">${title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style="font-weight:600">${renterName}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted)">${renterPhone}</div>
                  </td>
                  <td>
                    <div>${req.startDate} - ${req.endDate}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted)">${req.totalDays} ${t('days')}</div>
                  </td>
                  <td>
                    <div style="font-weight:700; color:var(--secondary)">${req.totalPrice}${t('gel')}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted)">+ ${req.deposit}${t('gel')} ${t('deposit')}</div>
                  </td>
                  <td>
                    <span class="badge-status ${req.status}">${t('status_' + req.status)}</span>
                  </td>
                  <td>
                    <div class="action-group">
                      ${req.status === 'pending' ? `
                        <button class="btn btn-primary approve-request-btn" data-id="${req.id}">
                          ${t('btn_approve')}
                        </button>
                        <button class="btn btn-outline reject-request-btn" data-id="${req.id}" style="color:var(--danger); border-color:var(--danger)">
                          ${t('btn_reject')}
                        </button>
                      ` : ''}
                      ${req.status === 'approved' ? `
                        <button class="btn btn-secondary complete-request-btn" data-id="${req.id}">
                          ${t('btn_complete')}
                        </button>
                      ` : ''}
                      ${req.status !== 'pending' && req.status !== 'approved' ? '-' : ''}
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  return '';
}

// Item Details Modal
function showItemDetails(itemId) {
  const item = window.RentifyDB.getItemById(itemId);
  if (!item) return;
  
  const modal = document.getElementById('details-modal');
  const overlay = modal.closest('.modal-overlay');
  
  const title = item.title[AppState.lang] || item.title.ka;
  const desc = item.description[AppState.lang] || item.description.ka;
  const location = item.location[AppState.lang] || item.location.ka;
  const owner = window.RentifyDB.getUserById(item.ownerId);
  const ownerName = owner ? owner.fullName : 'Rentify User';
  const ownerPhone = owner ? owner.phone : '';
  const ownerAvatar = owner ? owner.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80';
  
  modal.innerHTML = `
    <button class="modal-close" id="btn-close-details"><i data-lucide="x"></i></button>
    
    <div class="details-layout">
      <div>
        <div class="details-media">
          <img src="${item.image}" alt="${title}">
        </div>
        <div class="details-info-section">
          <div class="details-meta-row">
            <span class="details-badge category-type">${t(item.category) || item.category}</span>
            <span class="details-badge">
              <i data-lucide="star" style="fill: var(--secondary); width:14px; height:14px; color:var(--secondary)"></i>
              ${item.rating.toFixed(1)} (${item.reviewsCount} ${t('reviews')})
            </span>
            <span class="details-badge">
              <i data-lucide="map-pin" style="width:14px; height:14px; color:var(--primary)"></i>
              ${location}
            </span>
          </div>
          
          <h2 style="font-size:1.8rem; font-weight:800; line-height:1.3">${title}</h2>
          <p style="color:var(--text-muted); line-height:1.6; font-size:0.95rem">${desc}</p>
          
          <div class="owner-card">
            <img src="${ownerAvatar}" alt="Owner" style="width:46px; height:46px; border-radius:50%; object-fit:cover">
            <div class="owner-details">
              <p style="font-size:0.75rem; color:var(--text-muted)">${t('owner')}</p>
              <h4>${ownerName}</h4>
              <p style="font-size:0.85rem">${ownerPhone}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div class="booking-panel glass">
          <div class="booking-header">
            <div>
              <span style="font-size:1.6rem; font-weight:800; color:var(--secondary)">${item.price}${t('gel')}</span>
              <span style="color:var(--text-muted); font-size:0.9rem">/ ${t('days')}</span>
            </div>
            <div style="font-size:0.85rem; color:var(--text-muted)">
              ${t('deposit')}: ${item.deposit}${t('gel')}
            </div>
          </div>
          
          <div class="booking-form-group">
            <label>${t('start_date')}</label>
            <input type="date" id="rental-start-date" min="${new Date().toISOString().split('T')[0]}">
          </div>
          <div class="booking-form-group">
            <label>${t('end_date')}</label>
            <input type="date" id="rental-end-date" min="${new Date().toISOString().split('T')[0]}">
          </div>
          
          <div id="booking-calculation" class="hidden">
            <div class="calc-breakdown">
              <div class="calc-row">
                <span>${item.price}${t('gel')} x <span id="calc-days">0</span> ${t('days')}</span>
                <span id="calc-subtotal">0${t('gel')}</span>
              </div>
              <div class="calc-row">
                <span>${t('deposit')}</span>
                <span>${item.deposit}${t('gel')}</span>
              </div>
              <div class="calc-row">
                <span>${t('service_fee')}</span>
                <span id="calc-fee">0${t('gel')}</span>
              </div>
              <div class="calc-row total">
                <span>${t('total')}</span>
                <span id="calc-total">0${t('gel')}</span>
              </div>
            </div>
          </div>
          
          <div id="booking-error" class="alert-banner error hidden"></div>
          
          ${AppState.currentUser ? `
            <button class="btn btn-primary" id="btn-submit-booking" style="width:100%; height:48px; font-size:1.05rem">
              <i data-lucide="credit-card"></i> ${t('btn_rent_now')}
            </button>
          ` : `
            <button class="btn btn-outline" id="btn-login-to-rent" style="width:100%">
              ${t('login_to_rent')}
            </button>
          `}
        </div>
      </div>
    </div>
  `;
  
  overlay.classList.add('show');
  lucide.createIcons();
  
  // Date changes triggers calculation
  const startInput = document.getElementById('rental-start-date');
  const endInput = document.getElementById('rental-end-date');
  
  const recalculate = () => {
    const sDate = startInput.value;
    const eDate = endInput.value;
    
    if (sDate && eDate) {
      const start = new Date(sDate);
      const end = new Date(eDate);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      const errorDiv = document.getElementById('booking-error');
      
      if (diffDays <= 0) {
        errorDiv.innerText = t('invalid_dates');
        errorDiv.classList.remove('hidden');
        document.getElementById('booking-calculation').classList.add('hidden');
        return;
      }
      
      errorDiv.classList.add('hidden');
      
      const subtotal = item.price * diffDays;
      const serviceFee = Math.round(subtotal * 0.05);
      const total = subtotal + item.deposit + serviceFee;
      
      document.getElementById('calc-days').innerText = diffDays;
      document.getElementById('calc-subtotal').innerText = `${subtotal}${t('gel')}`;
      document.getElementById('calc-fee').innerText = `${serviceFee}${t('gel')}`;
      document.getElementById('calc-total').innerText = `${total}${t('gel')}`;
      
      document.getElementById('booking-calculation').classList.remove('hidden');
    }
  };
  
  startInput.addEventListener('change', () => {
    endInput.min = startInput.value;
    recalculate();
  });
  endInput.addEventListener('change', recalculate);
  
  // Close details modal
  document.getElementById('btn-close-details').addEventListener('click', () => {
    overlay.classList.remove('show');
  });
  
  // Auth to rent trigger
  const loginToRentBtn = document.getElementById('btn-login-to-rent');
  if (loginToRentBtn) {
    loginToRentBtn.addEventListener('click', () => {
      overlay.classList.remove('show');
      openAuthModal();
    });
  }
  
  // Submit Booking Trigger
  const submitBookingBtn = document.getElementById('btn-submit-booking');
  if (submitBookingBtn) {
    submitBookingBtn.addEventListener('click', () => {
      const sDate = startInput.value;
      const eDate = endInput.value;
      
      if (!sDate || !eDate) {
        const errorDiv = document.getElementById('booking-error');
        errorDiv.innerText = t('invalid_dates');
        errorDiv.classList.remove('hidden');
        return;
      }
      
      const start = new Date(sDate);
      const end = new Date(eDate);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 0) return;
      
      const subtotal = item.price * diffDays;
      const serviceFee = Math.round(subtotal * 0.05);
      const total = subtotal + item.deposit + serviceFee;
      
      overlay.classList.remove('show');
      
      openPaymentModal(item.id, sDate, eDate, diffDays, total, item.deposit);
    });
  }
}

// Payment Simulator Modal
function openPaymentModal(itemId, startDate, endDate, totalDays, totalPrice, deposit) {
  const modal = document.getElementById('payment-modal');
  const overlay = modal.closest('.modal-overlay');
  
  modal.innerHTML = `
    <button class="modal-close" id="btn-close-payment"><i data-lucide="x"></i></button>
    
    <div class="payment-modal-container">
      <h2 class="gradient-text mb-4 text-center">${t('payment_title')}</h2>
      
      <div id="payment-form-content">
        <div class="payment-card-visual">
          <div class="card-visual-top">
            <div class="card-visual-chip"></div>
            <div class="card-visual-brand">Rentify Pay</div>
          </div>
          <div class="card-visual-number" id="visual-card-number">•••• •••• •••• ••••</div>
          <div class="card-visual-bottom">
            <div>
              <p style="font-size:0.65rem; text-transform:uppercase">${t('card_holder')}</p>
              <p style="font-weight:700; font-size:0.9rem" id="visual-card-holder">YOUR NAME</p>
            </div>
            <div>
              <p style="font-size:0.65rem; text-transform:uppercase">EXPIRES</p>
              <p style="font-weight:700; font-size:0.9rem" id="visual-card-expiry">MM/YY</p>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label>${t('card_number')}</label>
          <input type="text" id="pay-card-number" placeholder="4111 2222 3333 4444" maxlength="19" required>
        </div>
        <div class="form-group">
          <label>${t('card_holder')}</label>
          <input type="text" id="pay-card-holder" placeholder="Giorgi Meburishvili" required>
        </div>
        <div class="add-listing-grid">
          <div class="form-group">
            <label>${t('card_expiry')}</label>
            <input type="text" id="pay-card-expiry" placeholder="12/28" maxlength="5" required>
          </div>
          <div class="form-group">
            <label>${t('card_cvv')}</label>
            <input type="password" id="pay-card-cvv" placeholder="•••" maxlength="3" required>
          </div>
        </div>
        
        <button class="btn btn-secondary mt-4" id="btn-submit-payment" style="width:100%; height:48px; font-size:1.1rem">
          ${t('btn_pay')} ${totalPrice}${t('gel')}
        </button>
      </div>
      
      <div id="payment-loading-content" class="text-center hidden" style="padding:40px 0">
        <div style="font-size:3rem; color:var(--primary); margin-bottom:20px; animation: spin 1s infinite linear">
          <i data-lucide="loader-2"></i>
        </div>
        <h3>${t('payment_processing')}</h3>
      </div>
      
      <div id="payment-success-content" class="payment-success-animation">
        <div class="success-icon-wrap">
          <i data-lucide="check"></i>
        </div>
        <h2 style="color:var(--success); margin-bottom:12px">${t('payment_success')}</h2>
        <p style="color:var(--text-muted); margin-bottom:24px">${t('payment_success_desc')}</p>
        <button class="btn btn-primary" id="btn-close-payment-success" style="width:100%">
          ${t('btn_close')}
        </button>
      </div>
    </div>
  `;
  
  overlay.classList.add('show');
  lucide.createIcons();
  
  // Real-time card mirror events
  const inputNum = document.getElementById('pay-card-number');
  const inputHolder = document.getElementById('pay-card-holder');
  const inputExpiry = document.getElementById('pay-card-expiry');
  
  inputNum.addEventListener('input', (e) => {
    // Format card number with spaces
    let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = val.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || '';
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      e.target.value = parts.join(' ');
    } else {
      e.target.value = val;
    }
    document.getElementById('visual-card-number').innerText = e.target.value || '•••• •••• •••• ••••';
  });
  
  inputHolder.addEventListener('input', (e) => {
    document.getElementById('visual-card-holder').innerText = e.target.value.toUpperCase() || 'YOUR NAME';
  });
  
  inputExpiry.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (val.length >= 2) {
      e.target.value = val.substring(0, 2) + '/' + val.substring(2, 4);
    } else {
      e.target.value = val;
    }
    document.getElementById('visual-card-expiry').innerText = e.target.value || 'MM/YY';
  });
  
  // Close triggers
  document.getElementById('btn-close-payment').addEventListener('click', () => {
    overlay.classList.remove('show');
  });
  
  // Pay Action Trigger
  document.getElementById('btn-submit-payment').addEventListener('click', () => {
    // Basic verification
    if (!inputNum.value || !inputHolder.value || !inputExpiry.value || !document.getElementById('pay-card-cvv').value) {
      alert('Please fill out card details');
      return;
    }
    
    // Simulate Loading
    document.getElementById('payment-form-content').classList.add('hidden');
    document.getElementById('payment-loading-content').classList.remove('hidden');
    
    setTimeout(() => {
      // Complete booking
      window.RentifyDB.addBooking(itemId, AppState.currentUser.id, startDate, endDate, totalDays, totalPrice, deposit);
      
      // Success screens
      document.getElementById('payment-loading-content').classList.add('hidden');
      document.getElementById('payment-success-content').style.display = 'flex';
      
      // Update app views
      renderApp();
    }, 2000);
  });
  
  document.getElementById('btn-close-payment-success').addEventListener('click', () => {
    overlay.classList.remove('show');
  });
}

// Add Item Listing Modal
function openAddListingModal() {
  const modal = document.getElementById('add-listing-modal');
  const overlay = modal.closest('.modal-overlay');
  
  modal.innerHTML = `
    <button class="modal-close" id="btn-close-add-listing"><i data-lucide="x"></i></button>
    
    <div class="add-listing-container">
      <h2 class="gradient-text mb-4">${t('add_title')}</h2>
      
      <div id="add-listing-error" class="alert-banner error hidden"></div>
      
      <form id="add-listing-form">
        <div class="add-listing-grid">
          <div class="form-group">
            <label>${t('title_ka')}</label>
            <input type="text" id="add-title-ka" placeholder="მაგ. პროფესიონალური კამერა" required>
          </div>
          <div class="form-group">
            <label>${t('title_en')}</label>
            <input type="text" id="add-title-en" placeholder="e.g. Professional Camera" required>
          </div>
        </div>
        
        <div class="form-group">
          <label>${t('category')}</label>
          <select id="add-category" required>
            ${window.RentifyCategories.filter(c => c.id !== 'all').map(c => `
              <option value="${c.id}">${AppState.lang === 'ka' ? c.ka : c.en}</option>
            `).join('')}
          </select>
        </div>
        
        <div class="form-group">
          <label>${t('desc_ka')}</label>
          <textarea id="add-desc-ka" rows="3" placeholder="დაწერეთ დეტალური აღწერა ქართულად..." required></textarea>
        </div>
        <div class="form-group">
          <label>${t('desc_en')}</label>
          <textarea id="add-desc-en" rows="3" placeholder="Write detailed description in English..." required></textarea>
        </div>
        
        <div class="add-listing-grid">
          <div class="form-group">
            <label>${t('price_label')}</label>
            <input type="number" id="add-price" min="1" placeholder="50" required>
          </div>
          <div class="form-group">
            <label>${t('deposit_label')}</label>
            <input type="number" id="add-deposit" min="0" placeholder="100" required>
          </div>
        </div>
        
        <div class="add-listing-grid">
          <div class="form-group">
            <label>${t('loc_ka')}</label>
            <input type="text" id="add-loc-ka" placeholder="მაგ. თბილისი, ვაკე" required>
          </div>
          <div class="form-group">
            <label>${t('loc_en')}</label>
            <input type="text" id="add-loc-en" placeholder="e.g. Tbilisi, Vake" required>
          </div>
        </div>
        
        <div class="form-group">
          <label>${t('image_url')}</label>
          <input type="url" id="add-image-url" placeholder="https://images.unsplash.com/photo-...">
        </div>
        
        <button type="submit" class="btn btn-primary mt-4" style="width:100%; height:46px">
          ${t('btn_publish')}
        </button>
      </form>
    </div>
  `;
  
  overlay.classList.add('show');
  lucide.createIcons();
  
  // Close actions
  document.getElementById('btn-close-add-listing').addEventListener('click', () => {
    overlay.classList.remove('show');
  });
  
  // Submit Form Action
  document.getElementById('add-listing-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const titleKa = document.getElementById('add-title-ka').value;
    const titleEn = document.getElementById('add-title-en').value;
    const cat = document.getElementById('add-category').value;
    const descKa = document.getElementById('add-desc-ka').value;
    const descEn = document.getElementById('add-desc-en').value;
    const price = document.getElementById('add-price').value;
    const deposit = document.getElementById('add-deposit').value;
    const locKa = document.getElementById('add-loc-ka').value;
    const locEn = document.getElementById('add-loc-en').value;
    let img = document.getElementById('add-image-url').value;
    
    if (!img) {
      img = 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80';
    }
    
    window.RentifyDB.addItem(
      titleKa, titleEn,
      descKa, descEn,
      cat, price, deposit,
      locKa, locEn,
      img,
      AppState.currentUser.id
    );
    
    overlay.classList.remove('show');
    renderApp();
  });
}

// Auth modal (Login & Register)
function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  const overlay = modal.closest('.modal-overlay');
  
  modal.innerHTML = `
    <button class="modal-close" id="btn-close-auth"><i data-lucide="x"></i></button>
    
    <div class="auth-container">
      <div class="auth-tabs">
        <div class="auth-tab active" id="tab-login-btn">${t('login')}</div>
        <div class="auth-tab" id="tab-register-btn">${t('register')}</div>
      </div>
      
      <div id="auth-error-banner" class="alert-banner error hidden"></div>
      
      <!-- Login form -->
      <form id="login-form">
        <div class="form-group">
          <label>${t('email')}</label>
          <input type="email" id="login-email" placeholder="example@rentify.ge" required>
        </div>
        <div class="form-group">
          <label>${t('password')}</label>
          <input type="password" id="login-password" placeholder="••••••••" required>
        </div>
        <button type="submit" class="btn btn-primary mt-4" style="width:100%">
          ${t('login')}
        </button>
      </form>
      
      <!-- Register form -->
      <form id="register-form" class="hidden">
        <div class="form-group">
          <label>${t('fullname')}</label>
          <input type="text" id="reg-name" placeholder="გიორგი მებურიშვილი" required>
        </div>
        <div class="form-group">
          <label>${t('email')}</label>
          <input type="email" id="reg-email" placeholder="example@rentify.ge" required>
        </div>
        <div class="form-group">
          <label>${t('phone')}</label>
          <input type="tel" id="reg-phone" placeholder="+995 599 123 456" required>
        </div>
        <div class="form-group">
          <label>${t('password')}</label>
          <input type="password" id="reg-password" placeholder="••••••••" required>
        </div>
        <button type="submit" class="btn btn-secondary mt-4" style="width:100%">
          ${t('register')}
        </button>
      </form>
    </div>
  `;
  
  overlay.classList.add('show');
  lucide.createIcons();
  
  // Tab Switch logic
  const tabLogin = document.getElementById('tab-login-btn');
  const tabReg = document.getElementById('tab-register-btn');
  const loginForm = document.getElementById('login-form');
  const regForm = document.getElementById('register-form');
  
  tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
    loginForm.classList.remove('hidden');
    regForm.classList.add('hidden');
  });
  
  tabReg.addEventListener('click', () => {
    tabReg.classList.add('active');
    tabLogin.classList.remove('active');
    regForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  });
  
  // Close Modal
  document.getElementById('btn-close-auth').addEventListener('click', () => {
    overlay.classList.remove('show');
  });
  
  // Submit Login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;
    
    const res = window.RentifyDB.loginUser(email, pass);
    if (res.success) {
      AppState.currentUser = res.user;
      overlay.classList.remove('show');
      renderApp();
    } else {
      const errBanner = document.getElementById('auth-error-banner');
      errBanner.innerText = res.message[AppState.lang];
      errBanner.classList.remove('hidden');
    }
  });
  
  // Submit Register
  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const pass = document.getElementById('reg-password').value;
    
    const res = window.RentifyDB.registerUser(email, pass, name, phone);
    if (res.success) {
      AppState.currentUser = res.user;
      overlay.classList.remove('show');
      renderApp();
    } else {
      const errBanner = document.getElementById('auth-error-banner');
      errBanner.innerText = res.message[AppState.lang];
      errBanner.classList.remove('hidden');
    }
  });
}

// Global Static Listeners
function setupStaticListeners() {
  // Global clicks (outside menu closes dropdown)
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('profile-dropdown-menu');
    const trigger = document.getElementById('user-menu-trigger');
    if (dropdown && dropdown.classList.contains('show') && trigger && !trigger.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
}

// Navbar specific events (binds every time navbar renders)
function setupNavbarListeners() {
  // Logo home navigation
  const logo = document.getElementById('nav-logo-link');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      AppState.activePage = 'listings';
      renderApp();
    });
  }
  
  // Lang Toggle
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      AppState.lang = e.target.value;
      localStorage.setItem('rentify_lang', AppState.lang);
      renderApp();
    });
  }
  
  // Theme Toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
  
  // Search Input events
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      renderListings();
    });
  }
  
  // Auth Trigger Button
  const authTrigger = document.getElementById('btn-login-trigger');
  if (authTrigger) {
    authTrigger.addEventListener('click', openAuthModal);
  }
  
  // Add Listing Trigger Button
  const addTrigger = document.getElementById('btn-add-listing-trigger');
  if (addTrigger) {
    addTrigger.addEventListener('click', openAddListingModal);
  }
  
  // Profile dropdown menu toggle
  const userMenu = document.getElementById('user-menu-trigger');
  if (userMenu) {
    userMenu.addEventListener('click', (e) => {
      // Toggle only if click wasn't inside the dropdown links themselves
      const dropdown = document.getElementById('profile-dropdown-menu');
      if (e.target.closest('.profile-dropdown') === null) {
        dropdown.classList.toggle('show');
      }
    });
  }
  
  // Dropdown menu links
  const menuHome = document.getElementById('menu-home-link');
  if (menuHome) {
    menuHome.addEventListener('click', (e) => {
      e.preventDefault();
      AppState.activePage = 'listings';
      renderApp();
    });
  }
  
  const menuDash = document.getElementById('menu-dash-link');
  if (menuDash) {
    menuDash.addEventListener('click', (e) => {
      e.preventDefault();
      AppState.activePage = 'dashboard';
      renderApp();
    });
  }
  
  const menuLogout = document.getElementById('menu-logout-link');
  if (menuLogout) {
    menuLogout.addEventListener('click', (e) => {
      e.preventDefault();
      window.RentifyDB.setCurrentUser(null);
      AppState.currentUser = null;
      AppState.activePage = 'listings';
      renderApp();
    });
  }
}

// Dashboard Interactive Actions
function setupDashboardTableListeners() {
  const container = document.getElementById('dashboard-view');
  if (!container) return;
  
  // Delete listing action
  container.querySelectorAll('.delete-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(AppState.lang === 'ka' ? 'ნამდვილად გსურთ განცხადების წაშლა?' : 'Are you sure you want to delete this listing?')) {
        const itemId = btn.dataset.id;
        window.RentifyDB.deleteItem(itemId, AppState.currentUser.id);
        renderDashboard();
        lucide.createIcons();
      }
    });
  });
  
  // Cancel booking action (renter)
  container.querySelectorAll('.cancel-booking-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(AppState.lang === 'ka' ? 'ნამდვილად გსურთ ჯავშნის გაუქმება?' : 'Are you sure you want to cancel this booking?')) {
        const bookingId = btn.dataset.id;
        window.RentifyDB.updateBookingStatus(bookingId, 'cancelled', AppState.currentUser.id);
        renderDashboard();
        lucide.createIcons();
      }
    });
  });
  
  // Approve request action (owner)
  container.querySelectorAll('.approve-request-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bookingId = btn.dataset.id;
      window.RentifyDB.updateBookingStatus(bookingId, 'approved', AppState.currentUser.id);
      renderDashboard();
      lucide.createIcons();
    });
  });
  
  // Reject request action (owner)
  container.querySelectorAll('.reject-request-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(AppState.lang === 'ka' ? 'ნამდვილად გსურთ მოთხოვნის უარყოფა?' : 'Are you sure you want to reject this request?')) {
        const bookingId = btn.dataset.id;
        window.RentifyDB.updateBookingStatus(bookingId, 'cancelled', AppState.currentUser.id);
        renderDashboard();
        lucide.createIcons();
      }
    });
  });
  
  // Complete request action (owner)
  container.querySelectorAll('.complete-request-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bookingId = btn.dataset.id;
      window.RentifyDB.updateBookingStatus(bookingId, 'completed', AppState.currentUser.id);
      renderDashboard();
      lucide.createIcons();
    });
  });
}
