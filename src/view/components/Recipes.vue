<script setup>
import { ref } from 'vue'
import StarIcon from '@/assets/vector/star.svg'
import ReacipeImage01 from '@/assets/image/recipe-1.png'
import ReacipeImage02 from '@/assets/image/recipe-2.png'
import ReacipeImage03 from '@/assets/image/recipe-3.png'

const images = ref([ReacipeImage01, ReacipeImage02, ReacipeImage03])
</script>
<template>
  <section id="recipes" class="px-64 mt-[62px] pt-[87px] flex flex-col bg-gradient-orange">
    <div class="container mx-auto flex flex-col items-center">
      <h1 class="order-2 font-semibold text-[48px]">Most Popular Items</h1>
      <h2 class="order-1 text-orange font-semibold text-2xl">Recipes</h2>

      <ul class="flex justify-between order-3 gap-14 mt-[73px]">
        <li v-for="(image, index) in images" :key="index" class="">
          <div class="card w-[354px] rounded-lg bg-green-200">
            <div class="card-header p-3">
              <figure class="w-[330px] mx-auto">
                <img :src="image" :alt="`recipe image-${index}`" class="rounded-lg" />
              </figure>
            </div>
            <div class="card-main flex px-4">
              <div class="w-2/3">
                <h2>Flame-boiled dish</h2>
                <button>ADD TO CART</button>
              </div>

              <div class="w-1/3 text-right">
                <p class="rating"><StarIcon /> 8.5</p>
                <p class="price">$19.99</p>
              </div>
            </div>
          </div>
        </li>
        <!-- <li>
        <div class="card">
          <div class="card-header">
            <figure>
              <img src="" alt="" />
            </figure>
          </div>
          <div class="card-main">
            <div>
              <h2>asfafadf</h2>
              <button>ADD TO CART</button>
            </div>

            <div>
              <p class="rating">8.5</p>
              <p class="price">$19.99</p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="card">
          <div class="card-header">
            <figure>
              <img src="" alt="" />
            </figure>
          </div>
          <div class="card-main">
            <div>
              <h2>asfafadf</h2>
              <button>ADD TO CART</button>
            </div>

            <div>
              <p class="rating">8.5</p>
              <p class="price">$19.99</p>
            </div>
          </div>
        </div>
      </li> -->
      </ul>
    </div>
  </section>
</template>
