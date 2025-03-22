<script setup>
import TakeAwayImage from '@/assets/image/take-away-img.png'
import AppStoreImage from '@/assets/image/app-store-image.png'
import ExtraImg05 from '@/assets/image/extra-img-5.png'
import ExtraImg06 from '@/assets/image/extra-img-6.png'
</script>
<template>
  <section id="take-away" class="pt-40 relative">
    <div class="container mx-auto px-6 flex flex-col lg:flex-row">
      <!-- preview image -->
      <div class="w-full order-2 md:order-1 lg:w-1/2 relative flex justify-end md:px-20">
        <figure class="relative w-[612px]">
          <img :src="TakeAwayImage" alt="take away image" class="" />
        </figure>
      </div>
      <div
        class="take-away-text order-1 md:order-2 lg:w-1/2 flex flex-wrap md:px-20 my-20 lg:mt-0 items-center content-center"
      >
        <h1 class="order-2 md:text-[48px] font-bold md:leading-[60px] mt-6 text-agak-hitam">
          Simple Way To Order Your Food
        </h1>

        <h2 class="order-1 text-orange font-semibold text-2xl">Take away</h2>
        <p class="order-3 text-md md:text-xl font-[450] leading-8 mt-[21px] text-hitam-soft">
          Keep healthy food readily available. When you get hungry, you’re more likely to eat the
          first thing you see on the counter or in the cupboard.
        </p>
        <figure class="order-4 mt-12">
          <img :src="AppStoreImage" alt="app store" class="w-screen lg:w-auto" />
        </figure>
      </div>
    </div>
    <img
      :src="ExtraImg05"
      alt="extra image"
      className="absolute left-0 top-1 hidden lg:block lg:w-44 xl:w-56"
    />
    <img
      :src="ExtraImg06"
      alt="extra image"
      className="absolute right-0 top-1 hidden lg:block lg:w-44 xl:w-56"
    />
  </section>
</template>
