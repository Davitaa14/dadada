// Rentify Local Database and Persistence Layer

// Translation Helper Objects
const CATEGORIES = [
  { id: 'all', ka: 'ყველა', en: 'All', icon: 'grid' },
  { id: 'electronics', ka: 'ელექტრონიკა', en: 'Electronics', icon: 'laptop' },
  { id: 'transport', ka: 'ტრანსპორტი', en: 'Transport', icon: 'bike' },
  { id: 'tools', ka: 'ხელსაწყოები', en: 'Tools', icon: 'wrench' },
  { id: 'outdoors', ka: 'დასვენება & ლაშქრობა', en: 'Outdoors', icon: 'tent' },
  { id: 'events', ka: 'ღონისძიებები', en: 'Events', icon: 'music' }
];

const INITIAL_USERS = [
  {
    id: 'user1',
    email: 'giorgi@rentify.ge',
    password: 'password123',
    fullName: 'გიორგი მებურიშვილი',
    phone: '+995 599 123 456',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'user2',
    email: 'nino@rentify.ge',
    password: 'password123',
    fullName: 'ნინო ტაბატაძე',
    phone: '+995 555 987 654',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  }
];

const INITIAL_ITEMS = [
  {
    id: 'item1',
    title: {
      ka: 'პროფესიონალური დრონი DJI Mavic 3 Cine',
      en: 'Professional Drone DJI Mavic 3 Cine'
    },
    description: {
      ka: 'იდეალურ მდგომარეობაში, მოყვება 3 ელემენტი, დამტენი, ჩანთა და ND ფილტრები. იღებს 5.1K ვიდეოს. ქირავდება მხოლოდ გამოცდილ პილოტებზე ან დეპოზიტით.',
      en: 'In perfect condition, comes with 3 batteries, charger, bag, and ND filters. Shoots 5.1K video. For rent only to experienced pilots or with a safety deposit.'
    },
    category: 'electronics',
    price: 120, // Daily rate in GEL
    deposit: 500, // Safety deposit in GEL
    location: {
      ka: 'თბილისი, საბურთალო',
      en: 'Tbilisi, Saburtalo'
    },
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    ownerId: 'user1',
    rating: 4.9,
    reviewsCount: 14,
    created_at: '2026-05-10T10:00:00Z'
  },
  {
    id: 'item2',
    title: {
      ka: 'ელექტრო სკუტერი Xiaomi Pro 2',
      en: 'Electric Scooter Xiaomi Pro 2'
    },
    description: {
      ka: 'გადის 45 კმ-მდე ერთი დამუხტვით. მაქსიმალური სიჩქარე 25 კმ/სთ. მოყვება დამტენი. იდეალურია თბილისში გადასაადგილებლად საცობების გარეშე.',
      en: 'Travels up to 45 km on a single charge. Max speed 25 km/h. Charger included. Perfect for moving around Tbilisi without traffic jams.'
    },
    category: 'transport',
    price: 35,
    deposit: 150,
    location: {
      ka: 'თბილისი, ვაკე',
      en: 'Tbilisi, Vake'
    },
    image: 'https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?auto=format&fit=crop&w=800&q=80',
    ownerId: 'user2',
    rating: 4.7,
    reviewsCount: 8,
    created_at: '2026-06-01T12:00:00Z'
  },
  {
    id: 'item3',
    title: {
      ka: 'კამერა Sony Alpha 7 IV (Body)',
      en: 'Sony Alpha 7 IV Camera (Body)'
    },
    description: {
      ka: 'Full-frame ჰიბრიდული კამერა 33MP სენსორით. იდეალურია როგორც ფოტო, ისე 4K 60p ვიდეო გადაღებისთვის. ობიექტივი არ მოყვება.',
      en: 'Full-frame hybrid camera with 33MP sensor. Ideal for both photography and 4K 60p video recording. Lens is not included.'
    },
    category: 'electronics',
    price: 90,
    deposit: 400,
    location: {
      ka: 'თბილისი, ძველი თბილისი',
      en: 'Tbilisi, Old Tbilisi'
    },
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    ownerId: 'user1',
    rating: 5.0,
    reviewsCount: 21,
    created_at: '2026-06-05T09:30:00Z'
  },
  {
    id: 'item4',
    title: {
      ka: 'საოჯახო კარავი 4 კაცზე (Quechua)',
      en: 'Family Tent for 4 People (Quechua)'
    },
    description: {
      ka: 'წყალგაუმტარი და ქარგამძლე კარავი ორმაგი ფენით. ადვილია ასაწყობად (2 წუთში). იდეალურია კომფორტული კემპინგისთვის მთაში ან ზღვაზე.',
      en: 'Waterproof and wind-resistant double-layer tent. Easy to assemble (in 2 minutes). Ideal for comfortable camping in the mountains or beach.'
    },
    category: 'outdoors',
    price: 25,
    deposit: 50,
    location: {
      ka: 'ქუთაისი',
      en: 'Kutaisi'
    },
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    ownerId: 'user2',
    rating: 4.8,
    reviewsCount: 5,
    created_at: '2026-06-12T15:00:00Z'
  },
  {
    id: 'item5',
    title: {
      ka: 'პერფორატორი Bosch Professional 800W',
      en: 'Rotary Hammer Bosch Professional 800W'
    },
    description: {
      ka: 'მძლავრი პერფორატორი ბეტონის, ქვისა და ლითონის ბურღვისთვის. მოყვება სხვადასხვა ზომის ბურღები და მოსახერხებელი ქეისი.',
      en: 'Powerful rotary hammer drill for concrete, stone, and metal. Comes with various drill bits and a convenient carrying case.'
    },
    category: 'tools',
    price: 20,
    deposit: 100,
    location: {
      ka: 'ბათუმი',
      en: 'Batumi'
    },
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    ownerId: 'user1',
    rating: 4.5,
    reviewsCount: 3,
    created_at: '2026-06-14T08:00:00Z'
  },
  {
    id: 'item6',
    title: {
      ka: 'DJ კონტროლერი Pioneer DDJ-FLX4',
      en: 'DJ Controller Pioneer DDJ-FLX4'
    },
    description: {
      ka: 'იდეალური კონტროლერი დამწყები და საშუალო დონის DJ-ებისთვის. მუშაობს Rekordbox და Serato პროგრამებზე. უერთდება პირდაპირ ლეპტოპს USB კაბელით.',
      en: 'Perfect controller for beginners and intermediate DJs. Works with Rekordbox and Serato software. Connects directly to laptop via USB.'
    },
    category: 'events',
    price: 60,
    deposit: 250,
    location: {
      ka: 'თბილისი, გლდანი',
      en: 'Tbilisi, Gldani'
    },
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    ownerId: 'user2',
    rating: 4.9,
    reviewsCount: 11,
    created_at: '2026-06-15T11:20:00Z'
  }
];

const INITIAL_BOOKINGS = [
  {
    id: 'booking1',
    itemId: 'item2', // Xiaomi Scooter
    renterId: 'user1', // Giorgi rents from Nino
    startDate: '2026-06-20',
    endDate: '2026-06-22',
    totalDays: 2,
    totalPrice: 70,
    deposit: 150,
    status: 'pending', // pending, approved, active, completed, cancelled
    paymentStatus: 'paid', // unpaid, paid, refunded
    createdAt: '2026-06-16T18:00:00Z'
  },
  {
    id: 'booking2',
    itemId: 'item3', // Sony Camera
    renterId: 'user2', // Nino rents from Giorgi
    startDate: '2026-06-10',
    endDate: '2026-06-13',
    totalDays: 3,
    totalPrice: 270,
    deposit: 400,
    status: 'completed',
    paymentStatus: 'paid',
    createdAt: '2026-06-08T14:00:00Z'
  }
];

// Database Utilities
const DB = {
  // Initialize storage
  init() {
    if (!localStorage.getItem('rentify_users')) {
      localStorage.setItem('rentify_users', JSON.stringify(INITIAL_USERS));
    }
    if (!localStorage.getItem('rentify_items')) {
      localStorage.setItem('rentify_items', JSON.stringify(INITIAL_ITEMS));
    }
    if (!localStorage.getItem('rentify_bookings')) {
      localStorage.setItem('rentify_bookings', JSON.stringify(INITIAL_BOOKINGS));
    }
  },

  // Users
  getUsers() {
    this.init();
    return JSON.parse(localStorage.getItem('rentify_users'));
  },

  getUserById(id) {
    return this.getUsers().find(u => u.id === id);
  },

  registerUser(email, password, fullName, phone) {
    const users = this.getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: { ka: 'მომხმარებელი ამ ელ-ფოსტით უკვე არსებობს', en: 'User with this email already exists' } };
    }
    const newUser = {
      id: 'user_' + Date.now(),
      email: email.toLowerCase(),
      password,
      fullName,
      phone: phone || '+995 ',
      avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random()*1000000)}?auto=format&fit=crop&w=150&q=80`
    };
    users.push(newUser);
    localStorage.setItem('rentify_users', JSON.stringify(users));
    this.setCurrentUser(newUser);
    return { success: true, user: newUser };
  },

  loginUser(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) {
      return { success: false, message: { ka: 'არასწორი ელ-ფოსტა ან პაროლი', en: 'Invalid email or password' } };
    }
    this.setCurrentUser(user);
    return { success: true, user };
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('rentify_current_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  setCurrentUser(user) {
    if (user) {
      localStorage.setItem('rentify_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('rentify_current_user');
    }
  },

  // Items
  getItems() {
    this.init();
    return JSON.parse(localStorage.getItem('rentify_items'));
  },

  getItemById(id) {
    return this.getItems().find(item => item.id === id);
  },

  addItem(titleKa, titleEn, descKa, descEn, category, price, deposit, locationKa, locationEn, imageFileOrUrl, ownerId) {
    const items = this.getItems();
    const newItem = {
      id: 'item_' + Date.now(),
      title: { ka: titleKa, en: titleEn },
      description: { ka: descKa, en: descEn },
      category,
      price: Number(price),
      deposit: Number(deposit),
      location: { ka: locationKa, en: locationEn },
      image: imageFileOrUrl || 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      ownerId,
      rating: 5.0,
      reviewsCount: 0,
      created_at: new Date().toISOString()
    };
    items.unshift(newItem);
    localStorage.setItem('rentify_items', JSON.stringify(items));
    return newItem;
  },

  deleteItem(id, userId) {
    const items = this.getItems();
    const filtered = items.filter(item => !(item.id === id && item.ownerId === userId));
    localStorage.setItem('rentify_items', JSON.stringify(filtered));
    // Cancel related bookings
    const bookings = this.getBookings();
    const updatedBookings = bookings.map(b => {
      if (b.itemId === id && b.status !== 'completed' && b.status !== 'cancelled') {
        return { ...b, status: 'cancelled' };
      }
      return b;
    });
    localStorage.setItem('rentify_bookings', JSON.stringify(updatedBookings));
    return true;
  },

  // Bookings
  getBookings() {
    this.init();
    return JSON.parse(localStorage.getItem('rentify_bookings'));
  },

  addBooking(itemId, renterId, startDate, endDate, totalDays, totalPrice, deposit) {
    const bookings = this.getBookings();
    const newBooking = {
      id: 'booking_' + Date.now(),
      itemId,
      renterId,
      startDate,
      endDate,
      totalDays,
      totalPrice,
      deposit,
      status: 'pending',
      paymentStatus: 'paid', // Paid immediately in mock simulation
      createdAt: new Date().toISOString()
    };
    bookings.unshift(newBooking);
    localStorage.setItem('rentify_bookings', JSON.stringify(bookings));
    return newBooking;
  },

  updateBookingStatus(bookingId, status, userId) {
    const bookings = this.getBookings();
    const items = this.getItems();
    const booking = bookings.find(b => b.id === bookingId);
    
    if (!booking) return false;
    
    const item = items.find(i => i.id === booking.itemId);
    if (!item) return false;

    // Renter can cancel pending
    // Owner can approve/reject/complete
    const isOwner = item.ownerId === userId;
    const isRenter = booking.renterId === userId;

    if (isOwner || isRenter) {
      booking.status = status;
      localStorage.setItem('rentify_bookings', JSON.stringify(bookings));
      return true;
    }
    return false;
  }
};

// Auto initialize on load
DB.init();
window.RentifyDB = DB;
window.RentifyCategories = CATEGORIES;
