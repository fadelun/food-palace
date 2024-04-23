<script setup>
import MouthImage from '@/assets/vector/mouth.svg'
import FoodImage from '@/assets/vector/food.svg'
import TruckImage from '@/assets/vector/truck.svg'
import ExtraImg02 from '@/assets/image/extra-img-2.png'
import ExtraImg03 from '@/assets/image/extra-img-3.png'
</script>
<template>
  <section
    id="features"
    class="container px-10 lg:px-20 xl:px-64 mx-auto mt-20 lg:mt-[62px] flex flex-col items-center"
  >
    <h1 class="order-2 font-bold text-[48px]">Our Awesome Services</h1>
    <h2 class="order-1 text-orange font-semibold text-2xl">Features</h2>

    <ul
      class="order-3 flex flex-col items-center lg:flex-row mt-14 gap-x-[118px] gap-y-20 lg:gap-y-0"
    >
      <li class="flex flex-row text-center lg:w-1/3">
        <figure>
          <FoodImage class="mx-auto" />
          <figcaption>
            <h2 class="font-bold font-gilroy text-2xl mt-12">Quality Food</h2>
            <p class="text-lg mt-5">
              Keep healthy food readily available. When you get hungry, you’re more likely to
            </p>
          </figcaption>
        </figure>
      </li>
      <li class="flex flex-row text-center lg:w-1/3">
        <figure>
          <MouthImage class="mx-auto" />
          <figcaption>
            <h2 class="font-bold font-gilroy text-2xl mt-12">Super Taste</h2>
            <p class="text-lg mt-5">
              Keep healthy food readily available. When you get hungry, you’re more likely to
            </p>
          </figcaption>
        </figure>
      </li>
      <li class="flex flex-row text-center lg:w-1/3">
        <figure>
          <TruckImage class="mx-auto" />
          <figcaption>
            <h2 class="font-bold font-gilroy text-2xl mt-12">Fast Delivery</h2>
            <p class="text-lg mt-5">
              Keep healthy food readily available. When you get hungry, you’re more likely to.
            </p>
          </figcaption>
        </figure>
      </li>
    </ul>
    <img :src="ExtraImg02" alt="extra image" class="absolute left-0 hidden lg:block lg:w-40" />
    <img
      :src="ExtraImg03"
      alt="extra image"
      class="absolute right-0 hidden lg:block lg:w-44 xl:w-52"
    />
  </section>
</template>
