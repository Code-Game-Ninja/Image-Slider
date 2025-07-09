
// Image database with categories and captions
const imageDatabase = [
    // Nature
    {
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop",
        alt: "Beautiful mountain landscape at sunrise",
        category: "nature",
        title: "Mountain Sunrise",
        description: "Breathtaking view of mountains during golden hour"
    },
    {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop",
        alt: "Foggy forest with sun rays",
        category: "nature",
        title: "Misty Forest",
        description: "Sun rays piercing through the morning fog"
    },
    {
        url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=800&fit=crop",
        alt: "Green field with trees under cloudy sky",
        category: "nature",
        title: "Countryside View",
        description: "Peaceful countryside landscape with dramatic clouds"
    },

    // Technology
    {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
        alt: "Close-up of computer circuit board",
        category: "technology",
        title: "Circuit Board",
        description: "Macro view of modern computer components"
    },
    {
        url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop",
        alt: "Modern laptop on desk",
        category: "technology",
        title: "Workstation",
        description: "Minimalist workspace with high-end laptop"
    },
    {
        url: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1200&h=800&fit=crop",
        alt: "Person coding on laptop",
        category: "technology",
        title: "Coding Session",
        description: "Developer working on a complex project"
    },

    // Architecture
    {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop",
        alt: "Modern interior design",
        category: "architecture",
        title: "Contemporary Living",
        description: "Elegant modern interior with clean lines"
    },
    {
        url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop",
        alt: "Skyscrapers in city",
        category: "architecture",
        title: "Urban Landscape",
        description: "City skyline with impressive high-rises"
    },
    {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
        alt: "Historic building facade",
        category: "architecture",
        title: "Historic Architecture",
        description: "Beautiful details of a centuries-old building"
    },

    // People
    {
        url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&h=800&fit=crop",
        alt: "Woman working on laptop",
        category: "people",
        title: "Remote Work",
        description: "Professional working from a cozy environment"
    },
    {
        url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
        alt: "Person using laptop in cafe",
        category: "people",
        title: "Coffee Shop Coding",
        description: "Developer working in a relaxed atmosphere"
    },
    {
        url: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=1200&h=800&fit=crop",
        alt: "Group of people collaborating",
        category: "people",
        title: "Team Meeting",
        description: "Colleagues discussing a project together"
    },
    // Animals (new category)
    {
        url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200&h=800&fit=crop",
        alt: "Dog running in field",
        category: "animals",
        title: "Joyful Dog",
        description: "A happy dog running through a sunny meadow"
    },
    {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&h=800&fit=crop",
        alt: "Cat lounging on sofa",
        category: "animals",
        title: "Lazy Cat",
        description: "A relaxed cat enjoying a lazy afternoon"
    },
    {
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=800&fit=crop",
        alt: "Colorful parrot on branch",
        category: "animals",
        title: "Tropical Parrot",
        description: "A vibrant parrot perched on a tree branch"
    },
    // More Nature
    {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
        alt: "Lake with mountains",
        category: "nature",
        title: "Serene Lake",
        description: "Crystal clear lake surrounded by mountains"
    },
    // More Technology
    {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
        alt: "VR headset user",
        category: "technology",
        title: "Virtual Reality",
        description: "Person experiencing virtual reality technology"
    },
    // More Architecture
    {
        url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=1200&h=800&fit=crop",
        alt: "Bridge at sunset",
        category: "architecture",
        title: "Sunset Bridge",
        description: "A modern bridge illuminated by sunset colors"
    },
    // More People
    {
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&h=800&fit=crop",
        alt: "Friends laughing together",
        category: "people",
        title: "Good Times",
        description: "Friends sharing a laugh outdoors"
    }
];

// Global variables
let currentImageIndex = 0;
let isAutoPlaying = true;
let autoPlayInterval;
let currentImages = [...imageDatabase];
let currentCategory = "all";
let isFullscreen = false;
let touchStartX = 0;
let touchEndX = 0;
let progressInterval;
let isShuffled = false;

let likedImages = new Set();
let isDarkMode = false;

// DOM elements
const sliderImagesContainer = document.getElementById('sliderImages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const imageCounter = document.getElementById('imageCounter');
const indicatorsContainer = document.getElementById('indicators');
const thumbnailsContainer = document.getElementById('thumbnails');
const categoryButtons = document.querySelectorAll('.category-btn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const sliderContainer = document.querySelector('.slider-container');
const progressBar = document.getElementById('progressBar');
const shuffleBtn = document.getElementById('shuffleBtn');
const downloadBtn = document.getElementById('downloadBtn');
const likeBtn = document.getElementById('likeBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');

/**
 * Initialize the slider when the page loads
 */
function initializeSlider() {
    console.log('Initializing premium image slider...');

    // Display all images initially
    displayImages(currentImages);

    // Create indicator dots
    createIndicators();

    // Create thumbnails
    createThumbnails();

    // Start auto-play
    startAutoPlay();

    // Add event listeners
    addEventListeners();

    console.log('Premium image slider initialized successfully');
}

/**
 * Display images in the slider
 * @param {array} images - Array of image objects to display
 */
function displayImages(images) {
    sliderImagesContainer.innerHTML = '';

    images.forEach((image, index) => {
        // Create image element
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.alt;
        imgElement.className = 'slider-image';
        imgElement.dataset.index = index;

        // Create caption element
        const captionElement = document.createElement('div');
        captionElement.className = 'image-caption';
        captionElement.innerHTML = `
                    <h3 class="caption-title">${image.title}</h3>
                    <p class="caption-description">${image.description}</p>
                `;

        // Add to container
        sliderImagesContainer.appendChild(imgElement);
        sliderImagesContainer.appendChild(captionElement);
    });

    // Show first image
    showImage(currentImageIndex);

    console.log(`Displayed ${images.length} images`);
}

/**
 * Show specific image by index
 * @param {number} index - Index of image to show
 */
function showImage(index) {
    // Hide all images first
    const allImages = document.querySelectorAll('.slider-image');
    const allCaptions = document.querySelectorAll('.image-caption');

    allImages.forEach(img => {
        img.classList.remove('active');
    });

    allCaptions.forEach(caption => {
        caption.classList.remove('active');
    });

    // Show selected image
    if (allImages[index]) {
        allImages[index].classList.add('active');
        allCaptions[index].classList.add('active');
        currentImageIndex = index;

        // Update counter
        updateCounter();

        // Update indicators
        updateIndicators();

        // Update thumbnails
        updateThumbnails();

        // Reset progress bar
        resetProgressBar();

        // Update like button state
        updateLikeButton();

        console.log(`Showing image ${index + 1}: ${currentImages[index].title}`);
    }
}

/**
 * Navigate to next image
 */
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    showImage(currentImageIndex);
}

/**
 * Navigate to previous image
 */
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    showImage(currentImageIndex);
}

/**
 * Go to specific image by index
 * @param {number} index - Target image index
 */
function goToImage(index) {
    if (index >= 0 && index < currentImages.length) {
        showImage(index);
    }
}

/**
 * Create indicator dots for navigation
 */
function createIndicators() {
    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < currentImages.length; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicator.addEventListener('click', () => {
            goToImage(i);
            // Reset auto-play timer when user interacts
            if (isAutoPlaying) {
                startAutoPlay();
            }
        });
        indicatorsContainer.appendChild(indicator);
    }

    updateIndicators();
}

/**
 * Update active indicator
 */
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentImageIndex);
    });
}

/**
 * Create thumbnail navigation
 */
function createThumbnails() {
    thumbnailsContainer.innerHTML = '';

    currentImages.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.innerHTML = `<img src="${image.url}" alt="${image.alt}">`;
        thumbnail.addEventListener('click', () => {
            goToImage(index);
            // Reset auto-play timer when user interacts
            if (isAutoPlaying) {
                startAutoPlay();
            }
        });
        thumbnailsContainer.appendChild(thumbnail);
    });

    updateThumbnails();
}

/**
 * Update active thumbnail
 */
function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentImageIndex);

        // Scroll to active thumbnail
        if (index === currentImageIndex) {
            thumbnail.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    });
}

/**
 * Update image counter display
 */
function updateCounter() {
    imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
}

/**
 * Start automatic slideshow
 */
function startAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }

    if (progressInterval) {
        clearInterval(progressInterval);
    }

    // Start progress bar animation
    resetProgressBar();
    progressInterval = setInterval(updateProgressBar, 100);

    autoPlayInterval = setInterval(() => {
        nextImage();
    }, 5000); // Change image every 5 seconds

    isAutoPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';

    console.log('Auto-play started');
}

/**
 * Update progress bar
 */
function updateProgressBar() {
    const currentWidth = parseFloat(progressBar.style.width) || 0;
    const increment = 100 / (5000 / 100); // 5000ms total, updating every 100ms
    progressBar.style.width = `${currentWidth + increment}%`;

    if (currentWidth >= 100) {
        progressBar.style.width = '0%';
    }
}

/**
 * Reset progress bar
 */
function resetProgressBar() {
    progressBar.style.width = '0%';
}

/**
 * Stop automatic slideshow
 */
function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }

    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }

    isAutoPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';

    console.log('Auto-play stopped');
}

/**
 * Toggle auto-play on/off
 */
function toggleAutoPlay() {
    if (isAutoPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

/**
 * Filter images by category
 * @param {string} category - Category to filter by
 */
function filterByCategory(category) {
    currentCategory = category;

    if (category === 'all') {
        currentImages = [...imageDatabase];
    } else {
        currentImages = imageDatabase.filter(img => img.category === category);
    }

    // Reset index when filtering
    currentImageIndex = 0;

    // Recreate UI elements
    displayImages(currentImages);
    createIndicators();
    createThumbnails();

    // Restart autoplay if it was running
    if (isAutoPlaying) {
        startAutoPlay();
    }

    console.log(`Filtered images by category: ${category}`);
}

/**
 * Toggle fullscreen mode
 */
function toggleFullscreen() {
    if (!isFullscreen) {
        if (sliderContainer.requestFullscreen) {
            sliderContainer.requestFullscreen();
        } else if (sliderContainer.webkitRequestFullscreen) {
            sliderContainer.webkitRequestFullscreen();
        } else if (sliderContainer.msRequestFullscreen) {
            sliderContainer.msRequestFullscreen();
        }

        sliderContainer.classList.add('fullscreen');
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
        isFullscreen = true;
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        sliderContainer.classList.remove('fullscreen');
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
        isFullscreen = false;
    }
}

/**
 * Shuffle the images
 */
function shuffleImages() {
    isShuffled = !isShuffled;

    if (isShuffled) {
        // Create a shuffled copy
        const shuffled = [...currentImages];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        currentImages = shuffled;
        shuffleBtn.innerHTML = '<i class="fas fa-sort-amount-down"></i> Unshuffle';
    } else {
        // Return to original order
        if (currentCategory === 'all') {
            currentImages = [...imageDatabase];
        } else {
            currentImages = imageDatabase.filter(img => img.category === currentCategory);
        }
        shuffleBtn.innerHTML = '<i class="fas fa-random"></i> Shuffle';
    }

    // Reset to first image
    currentImageIndex = 0;

    // Update display
    displayImages(currentImages);
    createIndicators();
    createThumbnails();

    // Restart autoplay if it was running
    if (isAutoPlaying) {
        startAutoPlay();
    }

    console.log(`Images ${isShuffled ? 'shuffled' : 'unshuffled'}`);
}

/**
 * Handle touch events for swipe navigation
 */
function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const difference = touchStartX - touchEndX;

    // Minimum swipe distance
    if (Math.abs(difference) > 50) {
        if (difference > 0) {
            // Swipe left - next image
            nextImage();
        } else {
            // Swipe right - previous image
            prevImage();
        }

        // Reset auto-play timer when user interacts
        if (isAutoPlaying) {
            startAutoPlay();
        }
    }
}

/**
 * Add event listeners to all interactive elements
 */
function addEventListeners() {
    // Navigation buttons
    nextBtn.addEventListener('click', () => {
        nextImage();
        // Reset auto-play timer when user interacts
        if (isAutoPlaying) {
            startAutoPlay();
        }
    });

    prevBtn.addEventListener('click', () => {
        prevImage();
        // Reset auto-play timer when user interacts
        if (isAutoPlaying) {
            startAutoPlay();
        }
    });

    // Play/Pause button
    playPauseBtn.addEventListener('click', toggleAutoPlay);

    // Category buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active category button
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter images
            filterByCategory(btn.dataset.category);
        });
    });

    // Fullscreen button
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Shuffle button
    shuffleBtn.addEventListener('click', shuffleImages);

    // Download image button
    downloadBtn.addEventListener('click', () => {
        const image = currentImages[currentImageIndex];
        const link = document.createElement('a');
        link.href = image.url;
        link.download = image.title.replace(/\s+/g, '_').toLowerCase() + '.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Like/Favorite button
    likeBtn.addEventListener('click', () => {
        const image = currentImages[currentImageIndex];
        const key = image.url;
        if (likedImages.has(key)) {
            likedImages.delete(key);
            likeBtn.classList.remove('liked');
            likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            likedImages.add(key);
            likeBtn.classList.add('liked');
            likeBtn.innerHTML = '<i class="fas fa-heart"></i> <span style="color:#e25555;">♥</span>';
        }
    });

    // Theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        sliderContainer.classList.toggle('dark-mode', isDarkMode);
        document.querySelector('.slider-wrapper').classList.toggle('dark-mode', isDarkMode);
        document.querySelectorAll('.image-caption').forEach(el => el.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.category-btn').forEach(el => el.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.control-btn').forEach(el => el.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.nav-btn').forEach(el => el.classList.toggle('dark-mode', isDarkMode));
        document.querySelectorAll('.thumbnail').forEach(el => el.classList.toggle('dark-mode', isDarkMode));
        themeToggleBtn.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
        // Only respond if not in a text input
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            switch (event.key) {
                case 'ArrowLeft':
                    prevImage();
                    if (isAutoPlaying) startAutoPlay();
                    break;
                case 'ArrowRight':
                    nextImage();
                    if (isAutoPlaying) startAutoPlay();
                    break;
                case ' ': // Spacebar
                    event.preventDefault();
                    toggleAutoPlay();
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case 's':
                    shuffleImages();
                    break;
            }
        }
    });

    // Pause auto-play on hover
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.addEventListener('mouseenter', () => {
        if (isAutoPlaying) {
            stopAutoPlay();
        }
    });

    sliderWrapper.addEventListener('mouseleave', () => {
        if (!isAutoPlaying && !isFullscreen) {
            startAutoPlay();
        }
    });

    // Touch events for mobile
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
    sliderWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Fullscreen change event
    document.addEventListener('fullscreenchange', () => {
        isFullscreen = !!document.fullscreenElement;
        sliderContainer.classList.toggle('fullscreen', isFullscreen);
        fullscreenBtn.innerHTML = isFullscreen ? '<i class="fas fa-compress"></i>' : '<i class="fas fa-expand"></i>';

        // Restart autoplay when exiting fullscreen if it was playing before
        if (!isFullscreen && !isAutoPlaying) {
            startAutoPlay();
        }
    });

    console.log('Event listeners added');
}

// Update like button state when image changes
function updateLikeButton() {
    const image = currentImages[currentImageIndex];
    if (likedImages.has(image.url)) {
        likeBtn.classList.add('liked');
        likeBtn.innerHTML = '<i class="fas fa-heart"></i> <span style="color:#e25555;">♥</span>';
    } else {
        likeBtn.classList.remove('liked');
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    }
}

// Initialize slider when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeSlider);