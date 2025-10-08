const cart = [];
const rides = [
  {
    name: "Roller Coaster",
    price: 1199,
    image: "https://www.adventurepark.com.au/_next/image?url=https%3A%2F%2Fdfsekouzoh96q.cloudfront.net%2FWebsite_Rides_Crazy_Coaster_Night_1_9a9eb306cf.webp&w=3840&q=75"
  },
  {
    name: "Ferris Wheel",
    price: 899,
    image: "https://images.stockcake.com/public/9/c/2/9c2b00f6-2eca-40ed-8fe0-849713496f79_large/magical-carnival-night-stockcake.jpg"
  },
  {
    name: "Haunted House",
    price: 899,
    image: "https://www.blacklightattractions.com/wp-content/uploads/2022/11/The-Darkness-2022-01.jpg"
  },
  {
    name: "Drop Tower",
    price: 999,
    image: "https://www.dinisparksolutions.com/wp-content/uploads/2024/09/Gyro-Drop-Anchor-Attraction-in-Park-at-Night.jpg"
  },
  {
    name: "Bumper Cars",
    price: 499,
    image: "https://www.shutterstock.com/image-photo/pont-de-larche-france-07-600nw-2496438951.jpg"
  },
  {
    name: "Water Rapids",
    price: 999,
    image: "https://keansburgamusementpark.com/wp-content/uploads/2024/03/Untitled-7.png"
  },
  {
    name: "Sky Swing",
    price: 1099,
    image: "https://media.gettyimages.com/id/172166464/photo/amusement-park-ride-1.jpg?s=612x612&w=gi&k=20&c=Qn9h1pOnsWCqfRx9bGvtztcHjhhzBuB4bqEs9gDTZuU="
  },
  {
    name: "Magic Carousel",
    price: 599,
    image: "https://png.pngtree.com/background/20230519/original/pngtree-carousel-at-night-at-an-amusement-park-picture-image_2649649.jpg"
  }
];

function addToCart(rideName, price) {
  cart.push({ rideName, price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartDisplay = document.getElementById('cartDisplay');
  if (cart.length === 0) {
    cartDisplay.innerHTML = "<h3>Your Cart</h3><p>No items added yet.</p>";
    return;
  }
  const items = cart.map(item => `<li>${item.rideName} - ₹${item.price}</li>`).join('');
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartDisplay.innerHTML = `
    <h3>Your Cart</h3>
    <ul>${items}</ul>
    <strong>Total: ₹${total}</strong>
  `;
}

function renderRides() {
  const container = document.getElementById('rideCards');
  container.innerHTML = rides.map(ride => `
    <div class="card">
      <img src="${ride.image}" alt="${ride.name}">
      <div class="card-content">
        <h3>${ride.name}</h3>
        <p>Exciting experience!<br><strong>₹${ride.price}</strong></p>
        <button class="animated-btn" onclick="addToCart('${ride.name}', ${ride.price})">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

function handleBooking(event) {
  event.preventDefault();
  document.getElementById('confirmation').style.display = 'block';
}

window.onload = renderRides;
