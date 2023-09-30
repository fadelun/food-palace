<script setup>
import HeroImage from '@/assets/image/hero-image.png'
import SmileImage from '@/assets/image/smile-face.png'
import HeroTextImage from '@/assets/image/hero-text.png'
</script>
<template>
  <section class="hero pt-32 relative flex">
    <div class="hero-text w-full lg:4/5 2xl:w-2/5">
      <div class="sub-header text-orange text-2xl leading-loose flex">
        <span class="relative">__ Restaurant</span>
      </div>
      <h1
        class="header text-6xl md:text-7xl xl:text-8xl leading-[108px] font-gilroy text-neutral-800 font-extrabold mt-4"
      >
        <!-- gambar untuk text 'oo' -->
        <p>
          <span class="">Good F</span>
          <img :src="HeroTextImage" alt="o" class="inline w-12 lg:w-[62px] -mr-1" />
          <img :src="HeroTextImage" alt="o" class="inline w-12 lg:w-[62px]" />

          <span class="text-neutral-800 text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-10"
            >d</span
          >
        </p>

        <p>
          <span>Good M</span>
          <img :src="SmileImage" alt="o" class="inline w-10 lg:w-[52px] mx-1" />
          <img :src="SmileImage" alt="o" class="inline w-10 lg:w-[52px]" />
          <span class="text-neutral-800 text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-10"
            >d</span
          >
        </p>
      </h1>
      <p class="description font-circular text-xl mt-4 text-hitam-soft">
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
    <div class="hidden lg:block lg:1/5 2xl:w-3/5 relative">
      <figure class="relative lg:min-w-[400px] xl:min-w-[550px] 2xl:w-[840px]">
        <img :src="HeroImage" alt="hero image" class="absolute" />
      </figure>
    </div>
  </section>
</template>
<style></style>
