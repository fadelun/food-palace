<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-undef -->
<script setup>
import HeroImage from '@/assets/image/hero-image.png'
import SmileImage from '@/assets/image/smile-face.png'
import HeroTextImage from '@/assets/image/hero-text.png'
import ExtraImg01 from '@/assets/image/extra-img-1.png'

// import { onMounted, onUnmounted } from 'vue'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion-v'
</script>
<template>
  <section class="hero pt-32 relative flex">
    <motion.img
      :src="ExtraImg01"
      alt="extra image"
      class="absolute hidden lg:block right-[40%] top-[-71px] lg:w-40 xl:w-[251px]"
      :initial="{ scale: 0 }"
      :whileInView="{ scale: 1 }"
      :transition="{ duration: 0.6 }"
      :inViewOptions="{ once: true }"
    />
    <motion.div
      :initial="{ opacity: 0, x: -100 }"
      :whileInView="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.5 }"
      :inViewOptions="{ once: true }"
      class="hero-text w-full lg:4/5 2xl:w-2/5"
    >
      <div class="sub-header text-orange textW-2xl leading-loose flex">
        <span class="relative">__ Restaurant</span>
      </div>
      <h1
        class="header text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-gilroy text-neutral-800 font-extrabold mt-4"
      >
        <!-- gambar untuk text 'oo' -->
        <div class="">
          <span class="">Good F</span>
          <img :src="HeroTextImage" alt="o" class="inline w-6 sm:w-10 lg:w-[62px] -mr-1" />
          <img :src="HeroTextImage" alt="o" class="inline w-6 sm:w-10 lg:w-[62px]" />

          <span
            class="text-neutral-800 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-10"
            >d</span
          >
        </div>

        <div>
          <span>Good M</span>
          <img :src="SmileImage" alt="o" class="inline w-4 sm:w-8 lg:w-[52px] mx-1" />
          <img :src="SmileImage" alt="o" class="inline w-4 sm:w-8 lg:w-[52px]" />
          <span
            class="text-neutral-800 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-10"
            >d</span
          >
        </div>
      </h1>
      <p class="description font-circular text-md md:text-xl mt-4 text-hitam-soft">
        The food palace is an neighborhood restaurent serving seasonal global cuisine driven by the
        faire.
      </p>
      <button
        class="w-60 h-16 bg-orange rounded-full mt-11 text-white text-md md:text-xl font-medium capitalize leading-loose"
      >
        Explore food menu
      </button>
      <!-- link media sosial -->
      <div class="wrapper-links list-none w-4/12 hidden md:flex justify-between items-center mt-16">
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
    </motion.div>

    <!-- preview hero image -->
    <motion.div
      class="hidden lg:block lg:1/5 2xl:w-3/5 relative"
      :initial="{ opacity: 0, x: 100 }"
      :whileInView="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.5 }"
      :inViewOptions="{ once: true }"
    >
      <figure class="relative lg:min-w-[400px] xl:min-w-[550px] 2xl:w-[840px]">
        <img :src="HeroImage" alt="hero image" class="absolute" />
      </figure>
    </motion.div>
  </section>
</template>
<style></style>
