document.addEventListener('DOMContentLoaded', () => {
  // Book Data
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", description: "A novel about the decadence and excess of the Jazz Age.", price: 15.99, ebookPrice: 7.99, image: "img/books/great-gatsby.jpg", isbn: "9780743273565", publishedYear: 1925, fallbackImage: "https://www.epubbooks.com/images/covers/th/the-great-gatsby-4efc66.jpg" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction", description: "A story about racial inequality and moral growth.", price: 14.99, ebookPrice: 6.99, image: "img/books/mockingbird.jpg", isbn: "9780061120084", publishedYear: 1960, fallbackImage: "data:image/jpeg;base64,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" },
    { id: 3, title: "1984", author: "George Orwell", category: "fiction", description: "A dystopian novel about totalitarianism.", price: 13.99, ebookPrice: 5.99, image: "img/books/1984.jpg", isbn: "9780451524935", publishedYear: 1949, fallbackImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQY0nUiaa4Jg5K0Ry1hdSezKM6_7-AXzoTA&s" },
    { id: 4, title: "Principles of Physics", author: "M Nelkon", category: "academic", description: "A comprehensive textbook covering all aspects of physics.", price: 59.99, ebookPrice: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jK3qkz6ELhN_CYsHA0aG3G94GmguVNyaHw&s", isbn: "9780471320579", publishedYear: 2010, fallbackImage: "https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, title: "Where the Wild Things Are", author: "Maurice Sendak", category: "children", description: "A classic children's picture book.", price: 12.99, ebookPrice: 4.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokJNA6qp6kaptEKu999zo9K0Aa6oOH1pA8g&s", isbn: "9780064431781", publishedYear: 1963, fallbackImage: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "non-fiction", description: "A narrative of humanity's creation and evolution.", price: 24.99, ebookPrice: 14.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WPDnh5ptk1LSE7oDcha29ghcm5QjEGMrkQ&s", isbn: "9780062316097", publishedYear: 2014, fallbackImage: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 7, title: "Atomic Habits", author: "James Clear", category: "self-help", description: "A guide to building good habits.", price: 18.99, ebookPrice: 9.99, image: "https://i.ebayimg.com/images/g/rI0AAOSwgCVnvLYi/s-l1600.webp", isbn: "9780735211292", publishedYear: 2018, fallbackImage: "https://images.pexels.com/photos/4195409/pexels-photo-4195409.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 8, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "academic", description: "A comprehensive introduction to computer algorithms.", price: 79.99, ebookPrice: 59.99, image: "https://0.academia-photos.com/attachment_thumbnails/104058825/mini_magick20230706-1-80heel.png?1688630630", isbn: "9780262033848", publishedYear: 2009, fallbackImage: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 9, title: "The Hobbit", author: "J.R.R. Tolkien", category: "fiction", description: "A fantasy novel about Bilbo Baggins.", price: 16.99, ebookPrice: 8.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqejpZctU2XaQl_511Axfo94F2xLRpS9gig&s", isbn: "9780547928227", publishedYear: 1937, fallbackImage: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 10, title: "Becoming", author: "Michelle Obama", category: "non-fiction", description: "The memoir of former First Lady Michelle Obama.", price: 22.99, ebookPrice: 12.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojIMAIMj9Ieo1m3_SgW9bT1aUbgZdkoCeJw&s", isbn: "9781524763138", publishedYear: 2018, fallbackImage: "https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 11, title: "The Very Hungry Caterpillar", author: "Eric Carle", category: "children", description: "A children's book about a caterpillar.", price: 9.99, ebookPrice: 3.99, image: "https://i.ebayimg.com/images/g/LqIAAeSwkMVoIlHn/s-l1600.webp", isbn: "9780399226908", publishedYear: 1969, fallbackImage: "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 12, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", category: "self-help", description: "A self-help book for effectiveness.", price: 19.99, ebookPrice: 10.99, image: "https://i.ebayimg.com/images/g/htkAAeSwFIJn5EfU/s-l960.webp", isbn: "9781982137137", publishedYear: 1989, fallbackImage: "https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  // Team Data
  const team = [
    { name: "John Maina", role: "Founder & CEO", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", description: "With over 15 years of experience in retail and technology, John founded Smartworks Enterprises." },
    { name: "Sarah Wanjiku", role: "Operations Manager", image: "https://images.pexels.com/photos/27638665/pexels-photo-27638665/free-photo-of-portriat.jpeg?auto=compress&cs=tinysrgb&w=1200", description: "Sarah oversees the day-to-day operations of our store and cyber café." },
    { name: "David Omondi", role: "Technical Specialist", image: "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=1200", description: "David handles all technical aspects of our cyber services." },
    { name: "Mary Akinyi", role: "Book Specialist", image: "https://images.pexels.com/photos/30468652/pexels-photo-30468652/free-photo-of-professional-portrait-of-woman-in-white-blazer.jpeg?auto=compress&cs=tinysrgb&w=1200", description: "Mary curates our book collection and helps customers find the perfect book." }
  ];

  // Routing
  const routes = {
    'home': () => `
      <section class="hero bg-cover bg-center text-white py-20 text-center" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('img/hero-bg.jpg')">
        <div class="page-content">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 animate">Welcome to Smartworks Enterprises</h2>
          <p class="text-xl mb-6 animate delay-100">Your one-stop destination for books and cyber services</p>
          <div class="flex justify-center gap-4 animate delay-200">
            <a href="#bookstore" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">Explore Books</a>
            <a href="#cyber-services" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg">Cyber Services</a>
          </div>
        </div>
      </section>
      <section class="py-12">
        <h2 class="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="feature-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3v17m-9-5h18"/></svg>
            <h3 class="text-xl font-semibold mb-2">Physical Books</h3>
            <p>Explore our vast collection of quality books across various genres.</p>
          </div>
          <div class="feature-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <h3 class="text-xl font-semibold mb-2">E-Books</h3>
            <p>Digital books available for instant download at competitive prices.</p>
          </div>
          <div class="feature-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            <h3 class="text-xl font-semibold mb-2">Cyber Services</h3>
            <p>Professional cyber services including printing, scanning, and more.</p>
          </div>
          <div class="feature-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <h3 class="text-xl font-semibold mb-2">Online Booking</h3>
            <p>Book our cyber services online and save time during your visit.</p>
          </div>
        </div>
      </section>
      <section class="py-12 bg-gray-50 dark:bg-gray-800">
        <h2 class="text-3xl font-bold text-center mb-8">Popular Books</h2>
        <div class="books-slider grid grid-cols-1 md:grid-cols-3 gap-6">
          ${books.slice(0, 3).map(book => `
            <div class="book-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div class="book-image">
                <img src="${book.image}" onerror="this.src='${book.fallbackImage}'" alt="${book.title}" class="w-full h-full object-cover" loading="lazy">
              </div>
              <div class="book-info p-4 text-center">
                <h3 class="text-lg font-semibold">${book.title}</h3>
                <p class="text-gray-600 dark:text-gray-400">${book.author}</p>
                <div class="book-price">
                  <span>$${book.price.toFixed(2)}</span>
                  <span class="ebook-price">E-book: $${book.ebookPrice.toFixed(2)}</span>
                </div>
                <button class="view-book bg-orange-500 text-white px-4 py-2 rounded-lg mt-2" data-id="${book.id}">View Details</button>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="text-center mt-8">
          <a href="#bookstore" class="text-orange-500 hover:underline font-semibold">View All Books</a>
        </div>
      </section>
      <section class="py-12">
        <h2 class="text-3xl font-bold text-center mb-8">Our Cyber Services</h2>
        <div class="services-grid grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-12H4"/></svg>
            <h3 class="text-xl font-semibold mb-2">Printing Services</h3>
            <p>High-quality color and black & white printing.</p>
            <a href="#cyber-services" class="text-orange-500 hover:underline mt-4 inline-block">Learn More</a>
          </div>
          <div class="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"/></svg>
            <h3 class="text-xl font-semibold mb-2">Internet Access</h3>
            <p>Enjoy high-speed internet access at our cyber café.</p>
            <a href="#cyber-services" class="text-orange-500 hover:underline mt-4 inline-block">Learn More</a>
          </div>
          <div class="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 5h16M4 10h16M4 15h16M4 20h16"/></svg>
            <h3 class="text-xl font-semibold mb-2">Document Processing</h3>
            <p>Professional document typing, editing, and formatting.</p>
            <a href="#cyber-services" class="text-orange-500 hover:underline mt-4 inline-block">Learn More</a>
          </div>
          <div class="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-12H4"/></svg>
            <h3 class="text-xl font-semibold mb-2">Scanning Services</h3>
            <p>Convert physical documents to digital format.</p>
            <a href="#cyber-services" class="text-orange-500 hover:underline mt-4 inline-block">Learn More</a>
          </div>
        </div>
        <div class="text-center mt-8">
          <a href="#cyber-services" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">Book a Service</a>
        </div>
      </section>
      <section class="newsletter bg-purple-600 text-white py-12">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p class="mb-6">Stay updated with our latest books and services</p>
          <form id="newsletter-form" class="flex max-w-md mx-auto gap-4">
            <input id="email" type="email" placeholder="Enter your email" class="p-3 rounded-lg flex-1">
            <button type="submit" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">Subscribe</button>
          </form>
          <p id="newsletter-message" class="mt-4 font-semibold"></p>
        </div>
      </section>
    `,
    'bookstore': () => `
      <section class="page-content py-12">
        <h2 class="text-3xl font-bold text-center mb-4">Bookstore</h2>
        <p class="text-center mb-8">Browse our extensive collection of books</p>
        <div class="search-container flex max-w-2xl mx-auto mb-8">
          <input id="search-input" type="text" placeholder="Search books..." class="p-3 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:border-orange-500 outline-none">
          <button id="search-button" class="bg-orange-500 text-white px-4 rounded-r-lg">Search</button>
        </div>
        <div class="categories-grid flex flex-wrap justify-center gap-4 mb-8">
          <button class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg" data-category="all">All</button>
          <button class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg" data-category="fiction">Fiction</button>
          <button class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg" data-category="non-fiction">Non-Fiction</button>
          <button class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg" data-category="academic">Academic</button>
          <button class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg" data-category="children">Children</button>
          <button class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg" data-category="self-help">Self-Help</button>
        </div>
        <div id="books-container" class="books-grid grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </section>
    `,
    'cyber-services': () => `
      <section class="page-content py-12">
        <h2 class="text-3xl font-bold text-center mb-4">Cyber Services</h2>
        <p class="text-center mb-8">Professional digital solutions for all your needs</p>
        <div class="space-y-8">
          <div class="service-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            <svg class="w-16 h-16 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-12H4"/></svg>
            <div>
              <h3 class="text-xl font-semibold mb-2">Printing Services</h3>
              <p>High-quality color and black & white printing.</p>
              <div class="pricing mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h4 class="font-semibold">Pricing:</h4>
                <ul class="list-disc ml-4">
                  <li>Black & White: KSH 5 per page</li>
                  <li>Color: KSH 15 per page</li>
                  <li>Photo printing (4x6): KSH 25 per photo</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="service-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            <svg class="w-16 h-16 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"/></svg>
            <div>
              <h3 class="text-xl font-semibold mb-2">Internet Access</h3>
              <p>Enjoy high-speed internet access at our cyber café.</p>
              <div class="pricing mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h4 class="font-semibold">Pricing:</h4>
                <ul class="list-disc ml-4">
                  <li>30 minutes: KSH 30</li>
                  <li>1 hour: KSH 50</li>
                  <li>3 hours: KSH 120</li>
                  <li>Full day: KSH 250</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="service-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            <svg class="w-16 h-16 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 5h16M4 10h16M4 15h16M4 20h16"/></svg>
            <div>
              <h3 class="text-xl font-semibold mb-2">Document Processing</h3>
              <p>Professional document typing, editing, and formatting.</p>
              <div class="pricing mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h4 class="font-semibold">Pricing:</h4>
                <ul class="list-disc ml-4">
                  <li>Typing: KSH 20 per page</li>
                  <li>Editing: KSH 15 per page</li>
                  <li>Formatting: KSH 10 per page</li>
                  <li>CV/Resume creation: KSH 300</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="service-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            <svg class="w-16 h-16 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-12H4"/></svg>
            <div>
              <h3 class="text-xl font-semibold mb-2">Scanning Services</h3>
              <p>Convert physical documents to digital format.</p>
              <div class="pricing mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h4 class="font-semibold">Pricing:</h4>
                <ul class="list-disc ml-4">
                  <li>Document scanning: KSH 10 per page</li>
                  <li>Photo scanning: KSH 15 per photo</li>
                  <li>ID/Certificate scanning: KSH 20 per item</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section class="booking-section py-12 bg-gray-50 dark:bg-gray-800 rounded-lg mt-8">
          <h2 class="text-2xl font-bold text-center mb-4">Book a Service</h2>
          <form id="booking-form" class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div class="form-group">
              <label for="name" class="block font-semibold mb-2">Full Name</label>
              <input type="text" id="name" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
            </div>
            <div class="form-group">
              <label for="email" class="block font-semibold mb-2">Email Address</label>
              <input type="email" id="email" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
            </div>
            <div class="form-group">
              <label for="phone" class="block font-semibold mb-2">Phone Number</label>
              <input type="tel" id="phone" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
            </div>
            <div class="form-group">
              <label for="service-type" class="block font-semibold mb-2">Service Type</label>
              <select id="service-type" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
                <option value="" disabled selected>Select a service</option>
                <option value="printing">Printing Services</option>
                <option value="internet">Internet Access</option>
                <option value="document">Document Processing</option>
                <option value="scanning">Scanning Services</option>
              </select>
            </div>
            <div class="form-group">
              <label for="date" class="block font-semibold mb-2">Preferred Date</label>
              <input type="date" id="date" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
            </div>
            <div class="form-group">
              <label for="time" class="block font-semibold mb-2">Preferred Time</label>
              <input type="time" id="time" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
            </div>
            <div class="form-group col-span-2">
              <label for="details" class="block font-semibold mb-2">Additional Details</label>
              <textarea id="details" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" rows="4"></textarea>
            </div>
            <button type="submit" class="col-span-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">Book Service</button>
          </form>
          <p id="booking-message" class="text-center mt-4 font-semibold"></p>
        </section>
        <section class="testimonials py-12">
          <h2 class="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="testimonial bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p class="mb-4">"The printing services at Smartworks are excellent! They helped me print and bind my thesis."</p>
              <p class="font-semibold">Sarah K.</p>
              <p class="text-gray-600 dark:text-gray-400">University Student</p>
            </div>
            <div class="testimonial bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p class="mb-4">"I found all the academic books I needed for my course at great prices."</p>
              <p class="font-semibold">James M.</p>
              <p class="text-gray-600 dark:text-gray-400">College Student</p>
            </div>
            <div class="testimonial bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p class="mb-4">"The staff is friendly and the internet access is fast and reliable."</p>
              <p class="font-semibold">Lucy W.</p>
              <p class="text-gray-600 dark:text-gray-400">Freelancer</p>
            </div>
          </div>
        </section>
      </section>
    `,
    'about': () => `
      <section class="page-content py-12">
        <h2 class="text-3xl font-bold text-center mb-4">About Us</h2>
        <p class="text-center mb-8">Learn more about Smartworks Enterprises</p>
        <section class="about-story mb-12">
          <div class="story-content">
            <div class="story-image flex-0 w-full md:w-1/3">
              <img src="img/bookstore-interior.jpg" alt="Smartworks Bookstore Interior" loading="lazy">
            </div>
            <div class="story-text flex-1">
              <h3 class="text-2xl font-semibold mb-4">Our Story</h3>
              <p>Smartworks Enterprises was founded in 2018 with a vision to create a space where knowledge and technology come together. What started as a small bookshop has evolved into a comprehensive service provider, offering both traditional books and modern digital services.</p>
              <p>Our founder recognized the need for accessible knowledge resources alongside practical digital services in our community. This unique combination allows us to serve diverse needs, from students seeking educational materials to professionals requiring business services.</p>
              <p>Over the years, we have grown our collection to include thousands of books across various genres and expanded our cyber services to meet the evolving technological demands of our customers. Throughout our journey, our commitment to quality, affordability, and customer satisfaction has remained unwavering.</p>
            </div>
          </div>
        </section>
        <section class="mission-vision mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="mission-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Our Mission</h3>
              <p>To provide accessible knowledge and digital services that empower individuals and organizations to achieve their goals.</p>
            </div>
            <div class="vision-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Our Vision</h3>
              <p>To be recognized as the leading provider of integrated knowledge and technology solutions in our community.</p>
            </div>
          </div>
        </section>
        <section class="values mb-12">
          <h3 class="text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="value-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h4 class="text-lg font-semibold mb-2">Quality</h4>
              <p>We are committed to providing high-quality books and services.</p>
            </div>
            <div class="value-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h4 class="text-lg font-semibold mb-2">Accessibility</h4>
              <p>We make knowledge and technology accessible to all.</p>
            </div>
            <div class="value-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h4 class="text-lg font-semibold mb-2">Innovation</h4>
              <p>We strive to innovate and adapt to changing needs.</p>
            </div>
            <div class="value-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h4 class="text-lg font-semibold mb-2">Community</h4>
              <p>We are dedicated to serving and enriching our community.</p>
            </div>
          </div>
        </section>
        <section class="team">
          <h3 class="text-2xl font-bold text-center mb-8">Our Team</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            ${team.map(member => `
              <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div class="member-image mb-4">
                  <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover rounded-lg" loading="lazy">
                </div>
                <h4 class="text-lg font-semibold mb-2">${member.name}</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-2">${member.role}</p>
                <p>${member.description}</p>
              </div>
            `).join('')}
          </div>
        </section>
      </section>
    `,
    'contact': () => `
      <section class="page-content py-12">
        <h2 class="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p class="text-center mb-8">We'd love to hear from you</p>
        <div class="contact-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="contact-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <h3 class="text-xl font-semibold mb-2">Phone</h3>
            <p>+254713831045</p>
            <p>Monday to Saturday, 8am to 6pm</p>
          </div>
          <div class="contact-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            <h3 class="text-xl font-semibold mb-2">Email</h3>
            <p>smartworkse@gmail.com</p>
            <p>We'll respond as soon as possible</p>
          </div>
          <div class="contact-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"></path><path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>
            <h3 class="text-xl font-semibold mb-2">Location</h3>
            <p>123 Main Street, Nairobi, Kenya</p>
            <p>Monday to Friday: 8am - 6pm</p>
          </div>
        </div>
        <form id="contact-form" class="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div class="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label for="name" class="block font-semibold mb-2">Full Name</label>
              <input type="text" id="name" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
            </div>
            <div class="form-group">
              <label for="email" class="block font-semibold mb-2">Email Address</label>
              <input type="email" id="email" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
            </div>
            <div class="form-group">
              <label for="phone" class="block font-semibold mb-2">Phone Number</label>
              <input type="tel" id="phone" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg">
            </div>
            <div class="form-group">
              <label for="subject" class="block font-semibold mb-2">Subject</label>
              <input type="text" id="subject" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" required>
            </div>
            <div class="form-group col-span-2">
              <label for="message" class="block font-semibold mb-2">Message</label>
              <textarea id="message" class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg" rows="6" required></textarea>
            </div>
          </div>
          <button type="submit" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 mt-4">Send Message</button>
        </form>
        <p id="contact-message" class="text-center mt-4 font-semibold"></p>
        <section class="map-section py-12">
          <h3 class="text-2xl font-bold text-center mb-8">Find Us</h3>
          <div class="map-container rounded-lg overflow-hidden shadow-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815071108604!2d36.82194631475724!3d-1.283253999054794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10c0a76f8b3b%3A0x1c0b6c8a5a8b7e0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1634567890123" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </section>
        <section class="faq py-12 bg-gray-50 dark:bg-gray-800">
          <h3 class="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div class="accordion max-w-2xl mx-auto">
            <div class="accordion-item mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <button class="accordion-button flex justify-between w-full p-4">
                <span>What are your bookstore operating hours?</span>
                <svg class="accordion-icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="accordion-content p-4">Our bookstore is open Monday to Friday from 8am to 6pm, Saturday from 9am to 5pm, and closed on Sundays.</div>
            </div>
            <div class="accordion-item mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <button class="accordion-button flex justify-between w-full p-4">
                <span>Do you offer book delivery services?</span>
                <svg class="accordion-icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="accordion-content p-4">Yes, we offer book delivery within Nairobi at a small fee depending on your location.</div>
            </div>
            <div class="accordion-item mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <button class="accordion-button flex justify-between w-full p-4">
                <span>How can I book cyber services in advance?</span>
                <svg class="accordion-icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="accordion-content p-4">You can book our cyber services through our online booking system or by calling +254713831045.</div>
            </div>
            <div class="accordion-item mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <button class="accordion-button flex justify-between w-full p-4">
                <span>Do you sell second-hand books?</span>
                <svg class="accordion-icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="accordion-content p-4">Yes, we have a selection of second-hand books available at discounted prices.</div>
            </div>
            <div class="accordion-item bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <button class="accordion-button flex justify-between w-full p-4">
                <span>What payment methods do you accept?</span>
                <svg class="accordion-icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="accordion-content p-4">We accept cash, M-Pesa, credit/debit cards, and bank transfers.</div>
            </div>
          </div>
        </section>
      </section>
    `
  };

  // Render Page
  const app = document.getElementById('app');
  const renderPage = () => {
    const hash = window.location.hash.slice(1) || 'home';
    app.innerHTML = routes[hash] ? routes[hash]() : routes['home']();
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').slice(1) === hash);
    });
    initializePage(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize Page Functionality
  const initializePage = (page) => {
    // Book Modal
    const modal = document.getElementById('book-modal');
    const modalContent = document.getElementById('book-details');
    const closeModal = document.querySelector('.close-modal');

    const showBookDetails = (bookId) => {
      const book = books.find(b => b.id === bookId);
      if (!book) return;
      modalContent.innerHTML = `
        <div class="modal-book-image flex-0 w-full md:w-1/3">
          <img src="${book.image}" onerror="this.src='${book.fallbackImage}'" alt="${book.title}" class="w-full h-auto rounded-lg" loading="lazy">
        </div>
        <div class="modal-book-info flex-1">
          <h3 class="text-2xl font-semibold mb-2">${book.title}</h3>
          <p class="modal-book-meta text-gray-600 dark:text-gray-400">
            Author: ${book.author}<br>
            Category: ${book.category.charAt(0).toUpperCase() + book.category.slice(1)}<br>
            ISBN: ${book.isbn}<br>
            Published: ${book.publishedYear}
          </p>
          <p class="mb-4">${book.description}</p>
          <div class="modal-book-price">
            <span>Physical: $${book.price.toFixed(2)}</span><br>
            <span class="ebook-price">E-book: $${book.ebookPrice.toFixed(2)}</span>
          </div>
          <div class="modal-book-actions flex gap-4 mt-6">
            <button class="add-to-cart bg-orange-500 text-white px-4 py-2 rounded-lg" data-id="${book.id}">Add to Cart</button>
            <button class="add-to-wishlist bg-purple-500 text-white px-4 py-2 rounded-lg" data-id="${book.id}">Add to Wishlist</button>
          </div>
        </div>
      `;
      modal.style.display = 'block';
    };

    if (closeModal) {
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Bookstore
    if (page === 'bookstore' || page === 'home') {
      const booksContainer = document.getElementById('books-container');
      const searchInput = document.getElementById('search-input');
      const searchButton = document.getElementById('search-button');
      const categoryButtons = document.querySelectorAll('.category-btn');
      let currentCategory = 'all';
      let searchQuery = '';

      if (booksContainer) {
        const displayBooks = () => {
          booksContainer.innerHTML = '';
          const filteredBooks = books.filter(book => {
            if (currentCategory !== 'all' && book.category !== currentCategory) return false;
            if (searchQuery && !(
              book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.category.toLowerCase().includes(searchQuery.toLowerCase())
            )) return false;
            return true;
          });

          if (filteredBooks.length === 0) {
            booksContainer.innerHTML = '<p class="text-center">No books found.</p>';
            return;
          }

          filteredBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden';
            bookCard.innerHTML = `
              <div class="book-image">
                <img src="${book.image}" onerror="this.src='${book.fallbackImage}'" alt="${book.title}" class="w-full h-full object-cover" loading="lazy">
              </div>
              <div class="book-info p-4 text-center">
                <h3 class="text-lg font-semibold">${book.title}</h3>
                <p class="text-gray-600 dark:text-gray-400">${book.author}</p>
                <div class="book-price">
                  <span>$${book.price.toFixed(2)}</span>
                  <span class="ebook-price">E-book: $${book.ebookPrice.toFixed(2)}</span>
                </div>
                <button class="view-book bg-orange-500 text-white px-4 py-2 rounded-lg mt-2" data-id="${book.id}">View Details</button>
              </div>
            `;
            booksContainer.appendChild(bookCard);
          });

          document.querySelectorAll('.view-book').forEach(btn => {
            btn.addEventListener('click', () => showBookDetails(parseInt(btn.getAttribute('data-id'))));
          });
        };

        categoryButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('bg-orange-500', 'text-white'));
            btn.classList.add('bg-orange-500', 'text-white');
            currentCategory = btn.getAttribute('data-category');
            displayBooks();
          });
        });

        if (searchButton && searchInput) {
          searchButton.addEventListener('click', () => {
            searchQuery = searchInput.value.trim();
            displayBooks();
          });

          searchInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
              searchQuery = searchInput.value.trim();
              displayBooks();
            }
          });
        }

        displayBooks();
      }

      document.querySelectorAll('.view-book').forEach(btn => {
        btn.addEventListener('click', () => showBookDetails(parseInt(btn.getAttribute('data-id'))));
      });
    }

    // Cart and Wishlist
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const bookId = parseInt(btn.getAttribute('data-id'));
        const book = books.find(b => b.id === bookId);
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (!cart.some(item => item.id === bookId)) {
          cart.push({ id: bookId, title: book.title, price: book.price });
          localStorage.setItem('cart', JSON.stringify(cart));
          alert(`${book.title} added to cart!`);
        } else {
          alert(`${book.title} is already in your cart.`);
        }
      });
    });

    document.querySelectorAll('.add-to-wishlist').forEach(btn => {
      btn.addEventListener('click', () => {
        const bookId = parseInt(btn.getAttribute('data-id'));
        const book = books.find(b => b.id === bookId);
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (!wishlist.some(item => item.id === bookId)) {
          wishlist.push({ id: bookId, title: book.title });
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          alert(`${book.title} added to wishlist!`);
        } else {
          alert(`${book.title} is already in your wishlist.`);
        }
      });
    });

    // Booking Form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', e => {
        e.preventDefault();
        const data = {
          name: bookingForm.querySelector('#name').value,
          email: bookingForm.querySelector('#email').value,
          phone: bookingForm.querySelector('#phone').value,
          service: bookingForm.querySelector('#service-type').value,
          date: bookingForm.querySelector('#date').value,
          time: bookingForm.querySelector('#time').value,
          details: bookingForm.querySelector('#details').value
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{10,15}$/;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(data.date);

        const message = bookingForm.querySelector('#booking-message');
        if (!data.name || !data.email || !data.phone || !data.service || !data.date || !data.time) {
          message.textContent = 'Please fill out all required fields.';
          message.classList.add('text-red-500');
          return;
        }
        if (!emailRegex.test(data.email)) {
          message.textContent = 'Please enter a valid email address.';
          message.classList.add('text-red-500');
          return;
        }
        if (!phoneRegex.test(data.phone)) {
          message.textContent = 'Please enter a valid phone number.';
          message.classList.add('text-red-500');
          return;
        }
        if (selectedDate < today) {
          message.textContent = 'Please select a future date.';
          message.classList.add('text-red-500');
          return;
        }

        message.textContent = 'Processing your booking...';
        message.classList.remove('text-red-500', 'text-green-500');

        setTimeout(() => {
          const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
          bookings.push(data);
          localStorage.setItem('bookings', JSON.stringify(bookings));
          message.textContent = 'Booking confirmed! We will contact you soon.';
          message.classList.add('text-green-500');
          bookingForm.reset();
          setTimeout(() => message.textContent = '', 10000);
        }, 1500);
      });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const data = {
          name: contactForm.querySelector('#name').value,
          email: contactForm.querySelector('#email').value,
          phone: contactForm.querySelector('#phone').value,
          subject: contactForm.querySelector('#subject').value,
          message: contactForm.querySelector('#message').value
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{10,15}$/;
        const message = contactForm.querySelector('#contact-message');

        if (!data.name || !data.email || !data.subject || !data.message) {
          message.textContent = 'Please fill out all required fields.';
          message.classList.add('text-red-500');
          return;
        }
        if (!emailRegex.test(data.email)) {
          message.textContent = 'Please enter a valid email address.';
          message.classList.add('text-red-500');
          return;
        }
        if (data.phone && !phoneRegex.test(data.phone)) {
          message.textContent = 'Please enter a valid phone number.';
          message.classList.add('text-red-500');
          return;
        }

        message.textContent = 'Sending message...';
        message.classList.remove('text-red-500', 'text-green-500');

        setTimeout(() => {
          const messages = JSON.parse(localStorage.getItem('messages') || '[]');
          messages.push(data);
          localStorage.setItem('messages', JSON.stringify(messages));
          message.textContent = 'Message sent successfully!';
          message.classList.add('text-green-500');
          contactForm.reset();
          setTimeout(() => message.textContent = '', 8000);
        }, 1500);
      });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = newsletterForm.querySelector('#email').value;
        const message = newsletterForm.querySelector('#newsletter-message');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          message.textContent = 'Please enter a valid email address.';
          message.classList.add('text-red-500');
          return;
        }

        message.textContent = 'Subscribing...';
        message.classList.remove('text-red-500', 'text-green-500');

        setTimeout(() => {
          const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
          subscribers.push(email);
          localStorage.setItem('subscribers', JSON.stringify(subscribers));
          message.textContent = 'Thank you for subscribing!';
          message.classList.add('text-green-500');
          newsletterForm.reset();
          setTimeout(() => message.textContent = '', 5000);
        }, 1000);
      });
    }

    // FAQ Accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isActive = btn.classList.contains('active');
        accordionButtons.forEach(b => {
          b.classList.remove('active');
          b.nextElementSibling.classList.remove('active');
        });
        if (!isActive) {
          btn.classList.add('active');
          content.classList.add('active');
        }
      });
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      const body = document.body;
      const isDarkMode = localStorage.getItem('theme') === 'dark';
      if (isDarkMode) {
        body.classList.add('dark');
      }
      themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
      });
    }

    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
      });
    }
  };

  // Navigation and Initial Render
  window.addEventListener('hashchange', renderPage);
  renderPage();
});