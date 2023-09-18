<script setup>
import TakeAwayImage from '@/assets/image/take-away-image.png'
import AppStoreImage from '@/assets/image/app-store-image.png'
</script>
<template>
  <section id="take-away" class="mt-24">
    <div class="container mx-auto flex">
      <!-- preview image -->
      <div class="w-1/2 relative flex justify-end">
        <figure class="relative w-[612px]">
          <img :src="TakeAwayImage" alt="take away image" class="" />
        </figure>
      </div>
      <div class="take-away-text w-1/2 flex flex-wrap px-[150px] items-center content-center">
        <h1 class="order-2 text-[48px] font-bold leading-[60px] mt-6">
          Simple Way To Order Your Food
        </h1>
        <h2 class="order-1 text-orange font-semibold text-2xl">Take away</h2>
        <p class="order-3 text-xl font-[450] leading-8 mt-[21px]">
          Keep healthy food readily available. When you get hungry, you’re more likely to eat the
          first thing you see on the counter or in the cupboard.
        </p>
        <figure class="order-4 mt-12">
          <img :src="AppStoreImage" alt="app store" />
        </figure>
      </div>
    </div>
  </section>
</template>
