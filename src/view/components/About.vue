<script setup>
import { motion } from 'motion-v'

import AboutImage from '@/assets/image/about-image.png'
import PlayButtonImage from '@/assets/vector/play-button.svg'
</script>
<template>
  <section id="about" class="bg-gradient-orange px-6 md:px-20">
    <div class="container mx-auto flex flex-col lg:flex-row">
      <!-- preview about image -->
      <motion.div
        class="w-full lg:w-1/2 relative"
        :initial="{ opacity: 0, x: -100 }"
        :whileInView="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5 }"
        :inViewOptions="{ once: true }"
      >
        <figure class="relative lg:w-auto lg:min-w-[180px] xl:w-[758px]">
          <img :src="AboutImage" alt="about image" class="" />
          <play-button-image
            class="absolute bottom-0 left-[25%] md:right-[26px] md:bottom-[200px]"
          />
        </figure>
      </motion.div>
      <motion.div
        class="about-text z-10 w-full lg:w-1/2 flex flex-wrap lg:px-8 xl:px-[130px] items-center content-center mt-20"
        :initial="{ opacity: 0, x: 100 }"
        :whileInView="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5 }"
        :inViewOptions="{ once: true }"
      >
        <h1 class="order-2 md:text-[52px] font-bold md:leading-[60px] mt-6">
          Simple Way of Eating Delicious
        </h1>
        <h2 class="order-1 text-orange font-semibold text-2xl">About us</h2>
        <p class="order-3 text-md md:text-xl font-[450] leading-8 mt-[21px]">
          Keep healthy food readily available. When you get hungry, you’re more likely to eat the
          first thing you see on the counter or in the
        </p>
        <button
          class="order-4 w-60 h-16 bg-orange rounded-full text-white capitalize text-xl font-medium leading-[30px] mt-12"
        >
          Explore our story
        </button>
      </motion.div>
    </div>
  </section>
</template>
