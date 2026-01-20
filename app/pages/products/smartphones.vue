<script setup>
const {
  data: products,
  pending,
  error,
} = await useFetch("/api/products/category/smartphones", {
  default: () => [],
});

console.log(products.value);
</script>

<template>
  <div
    class="relative bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900"
  >
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1
        class="text-4xl font-bold text-primary-800 dark:text-white mb-8 animate-bounce-slow"
      >
        Featured Collection
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Product Cards with Enhanced Design -->
        <div
          v-for="product in products.products"
          class="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-primary-800 dark:text-white">
              {{ product.title }}
            </h3>
            <div class="flex justify-between items-center mt-2">
              <p class="text-primary-600 font-bold">₹99.99</p>
              <span
                class="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs"
                >New</span
              >
            </div>
            <button
              class="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Featured Categories with Interactive SVG -->
  <div class="bg-white dark:bg-gray-900 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-primary-800 dark:text-white mb-8">
        Featured Categories
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          class="relative category-overlay overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp"
            alt="Men's Wear"
            class="w-full h-64 object-cover"
          />
          <div
            class="absolute inset-0 bg-primary-500 bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 rounded-2xl"
          ></div>
          <span
            class="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg"
            >Men's Wear</span
          >
        </div>
        <div
          class="relative category-overlay overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp"
            alt="Accessories"
            class="w-full h-64 object-cover"
          />
          <div
            class="absolute inset-0 bg-primary-500 bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 rounded-2xl"
          ></div>
          <span
            class="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg"
            >Accessories</span
          >
        </div>
      </div>
    </div>
  </div>

  <!-- Footer with SVG Elements -->
  <footer class="bg-primary-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3
            class="text-lg font-semibold text-primary-800 dark:text-white mb-4"
          >
            About Us
          </h3>
          <p class="text-primary-700 dark:text-gray-300">
            Your premier destination for fashion and style.
          </p>
        </div>
        <div>
          <h3
            class="text-lg font-semibold text-primary-800 dark:text-white mb-4"
          >
            Quick Links
          </h3>
          <ul class="space-y-2 text-primary-700 dark:text-gray-300">
            <li class="hover:text-primary-500 transition-colors">Home</li>
            <li class="hover:text-primary-500 transition-colors">Shop</li>
            <li class="hover:text-primary-500 transition-colors">Categories</li>
            <li class="hover:text-primary-500 transition-colors">Contact</li>
          </ul>
        </div>
        <div>
          <h3
            class="text-lg font-semibold text-primary-800 dark:text-white mb-4"
          >
            Contact Us
          </h3>
          <p class="text-primary-700 dark:text-gray-300">
            Email: info@shopstyle.com
          </p>
          <p class="text-primary-700 dark:text-gray-300">
            Phone: (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
