<script setup>
import HeroImage from '@/assets/image/hero-image.png'
</script>
<template>
  <section class="hero pt-32 relative flex">
    <div class="hero-text w-2/5">
      <div class="sub-header text-orange text-2xl leading-loose flex">
        <span class="relative">Restaurant</span>
      </div>
      <h1 class="header text-8xl leading-[108px] text-neutral-800 font-extrabold mt-4">
        <!-- gambar untuk text 'oo' -->
        <!-- <img :src="smallFoodImage01" alt="o" class="absolute w-16 h-16 shadow" /><img
          :src="smallFoodImage02"
          alt="o"
        /> -->
        <span class="">Good Foo</span>
        <span class="text-neutral-800 text-8xl font-extrabold leading-10">d</span>
        <br />
        <span>Good Moo</span>
        <span class="text-neutral-800 text-8xl font-extrabold leading-10">d</span>
      </h1>
      <p class="description font-normal mt-4">
        The food palace is an neighborhood restaurent serving seasonal global cuisine driven by the
        faire.
      </p>
      <button
        class="w-60 h-16 bg-orange rounded-full mt-11 text-white text-xl font-medium capitalize leading-loose"
      >
        Explore food menu
      </button>
      <!-- link media sosial -->
      <div class="wrapper-links list-none w-4/12 flex justify-between items-center mt-16">
        <li class="h-9 w-9 grid place-items-center rounded-full">
          <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
        </li>
        <li class="h-9 w-9 grid place-items-center rounded-full">
          <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        </li>
        <li class="h-9 w-9 grid place-items-center rounded-full">
          <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        </li>
      </div>
    </div>

    <!-- preview hero image -->
    <div class="w-3/5 relative">
      <figure class="relative w-[840px]">
        <img :src="HeroImage" alt="hero image" class="absolute" />
      </figure>
    </div>
  </section>
</template>
<style></style>
