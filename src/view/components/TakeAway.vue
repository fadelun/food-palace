<script setup>
import TakeAwayImage from '@/assets/image/take-away-img.png'
import AppStoreImage from '@/assets/image/app-store-image.png'
</script>
<template>
  <section id="take-away" class="mt-24">
    <div class="container mx-auto px-10 flex flex-col lg:flex-row">
      <!-- preview image -->
      <div class="w-full lg:w-1/2 relative flex justify-end md:px-20">
        <figure class="relative w-[612px]">
          <img :src="TakeAwayImage" alt="take away image" class="" />
        </figure>
      </div>
      <div
        class="take-away-text lg:w-1/2 flex flex-wrap md:px-20 xl:px-[150px] mt-20 lg:mt-0 items-center content-center"
      >
        <h1 class="order-2 text-[48px] font-bold leading-[60px] mt-6 text-agak-hitam">
          Simple Way To Order Your Food
        </h1>

        <h2 class="order-1 text-orange font-semibold text-2xl">Take away</h2>
        <p class="order-3 text-xl font-[450] leading-8 mt-[21px] text-hitam-soft">
          Keep healthy food readily available. When you get hungry, you’re more likely to eat the
          first thing you see on the counter or in the cupboard.
        </p>
        <figure class="order-4 mt-12">
          <img :src="AppStoreImage" alt="app store" class="w-screen lg:w-auto" />
        </figure>
      </div>
    </div>
  </section>
</template>
