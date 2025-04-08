<script setup>
import { ref } from 'vue'
import { motion } from 'motion-v'

import MouthImage from '@/assets/vector/mouth.svg'
import FoodImage from '@/assets/vector/food.svg'
import TruckImage from '@/assets/vector/truck.svg'
import ExtraImg02 from '@/assets/image/extra-img-2.png'
import ExtraImg03 from '@/assets/image/extra-img-3.png'

const features = ref([
  {
    icon: FoodImage,
    title: 'Quality Food',

    description: 'Keep healthy food readily available. When you get hungry, you’re more likely to'
  },
  {
    icon: MouthImage,
    title: 'Super Taste',
    description: 'Keep healthy food readily available. When you get hungry, you’re more likely to'
  },
  {
    icon: TruckImage,
    title: 'Fast Delivery',
    description: 'Keep healthy food readily available. When you get hungry, you’re more likely to.'
  }
])
</script>

<template>
  <section
    id="features"
    class="container px-6 lg:px-20 xl:px-64 mx-auto mt-20 lg:mt-[62px] flex flex-col items-center"
  >
    <h1 class="order-2 font-bold md:text-[48px]">Our Awesome Services</h1>
    <h2 class="order-1 text-orange font-semibold text-2xl">Features</h2>

    <motion.ul
      class="order-3 flex flex-col items-center lg:flex-row mt-14 gap-x-[118px] gap-y-20 lg:gap-y-0"
      :initial="{ opacity: 0, y: -50 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.3 }"
      :inViewOptions="{ once: true }"
    >
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex flex-row text-center lg:w-1/3"
      >
        <figure>
          <component :is="feature.icon" class="mx-auto" />
          <figcaption>
            <h2 class="font-bold font-gilroy text-2xl mt-12">{{ feature.title }}</h2>
            <p class="text-lg mt-5">{{ feature.description }}</p>
          </figcaption>
        </figure>
      </li>
    </motion.ul>

    <img :src="ExtraImg02" alt="extra image" class="absolute left-0 hidden lg:block lg:w-40" />
    <img
      :src="ExtraImg03"
      alt="extra image"
      class="absolute right-0 hidden lg:block lg:w-44 xl:w-52"
    />
  </section>
</template>
