document.addEventListener('DOMContentLoaded', () => {
    showCategories('men');
    showBodyImages('men');
});

const categories = {
    men: ['T-shirt', 'Pants', 'Jackets','Shirts','Jeans'],
    women: ['Dresses', 'Skirts', 'Blouses','Top','T-shirts','Tank top','Jeans']
};

const clothingItems = {
    men: [
        { img: 'images/men1.jpg', name: 'Bulman <br> T-shirt' },
        { img: 'images/men2.jpg', name: 'Paul Smith <br> T-shirt' },
        { img: 'images/men3.jpg', name: 'Brioni <br> T-shirt' },
        { img: 'images/men4.jpg', name: 'Shefopi <br> T-shirt' },
        { img: 'images/men5.jpg', name: 'Vansoe <br> T-shirt' },
        { img: 'images/men6.jpg', name: '  Scove <br> T-shirt' }
    ],
    women: [
        { img: 'images/women1.jpg', name: 'Velentino <br> Dress' },
        { img: 'images/women2.jpg', name: 'ZIMMERMANN <br> Dress' },
        { img: 'images/women3.jpg', name: 'DRIES VAN NOTEN <br> Dress' },
        { img: 'images/women4.jpg', name: 'ZARA <br> Dress' },
        { img: 'images/women5.jpg', name: 'SELF-PORTRAIT <br> Dress' },
        { img: 'images/women6.jpg', name: 'GIVENCHY <br> Dress' }
    ]
};

const bodyImages = {
    men: [
        'images/body1_men.png',
        'images/body2_men.png',
        'images/body3_men.png',
        'images/body4_men.png',
        'images/body5_men.png',
    ],
    women: [
        'images/body1_women.png',
        'images/body2_women.png',
        'images/body3_women.png',
        'images/body4_women.png',
        'images/body5_women.png',
        'images/body6_women.png',
        'images/body7_women.png',
        'images/body8_women.png',
        'images/body9_women.png',
        'images/body10_women.png',
    ]
};

function showCategories(section) {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';
    categories[section].forEach(category => {
        categoriesContainer.innerHTML += `<li class="nav-item"><a class="nav-link" href="#">${category}</a></li>`;
    });

    showClothingItems(section);
    showBodyImages(section);
}

function showClothingItems(section) {
    const clothingCardsContainer = document.getElementById('clothing-cards');
    clothingCardsContainer.innerHTML = '';
    clothingItems[section].forEach(item => {
        clothingCardsContainer.innerHTML += `
            <div class="card">
                <img src="${item.img}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <p class="card-text">${item.name}</p>
                </div>
            </div>`;
    });
}

function showBodyImages(section) {
    const bodySliderContainer = document.querySelector('.carousel-inner');
    bodySliderContainer.innerHTML = '';
    bodyImages[section].forEach((img, index) => {
        bodySliderContainer.innerHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100" alt="Body Image ${index + 1}">
            </div>`;
    });
}
