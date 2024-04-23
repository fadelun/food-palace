<script setup>
import { ref } from 'vue'
import StarIcon from '@/assets/vector/star.svg'
import ReacipeImage01 from '@/assets/image/recipe-1.png'
import ReacipeImage02 from '@/assets/image/recipe-2.png'
import ReacipeImage03 from '@/assets/image/recipe-3.png'
import ExtraImg04 from '@/assets/image/extra-img-4.png'

const recipes = ref([
  {
    name: 'Flame-boiled dish',
    img: ReacipeImage01,
    rate: '8.5',
    price: '19.99'
  },
  {
    name: 'Peach Melba dish',
    img: ReacipeImage02,
    rate: '9.5',
    price: '20.99'
  },
  {
    name: 'Delmonico Steak dish',
    img: ReacipeImage03,
    rate: '8.0',
    price: '18.99'
  }
])
</script>
<template>
  <section
    id="recipes"
    class="px-10 lg:px-20 xl:px-64 mt-[62px] pt-[87px] flex flex-col bg-gradient-orange relative"
  >
    <div class="container mx-auto flex flex-col items-center">
      <h1 class="order-2 font-semibold text-agak-hitam text-[48px]">Most Popular Items</h1>
      <h2 class="order-1 text-orange font-semibold text-2xl">Recipes</h2>

      <ul class="flex flex-col xl:flex-row justify-between order-3 gap-14 mt-[73px]">
        <li v-for="(recipe, index) in recipes" :key="index" class="">
          <div class="card w-full xl:w-[354px] rounded-lg bg-white">
            <div class="card-header p-3">
              <figure class="xl:w-[330px] mx-auto">
                <img :src="recipe.img" :alt="`recipe image-${index}`" class="rounded-lg" />
              </figure>
            </div>
            <div class="card-main flex px-4">
              <div class="w-2/3">
                <h2 class="text-xl mb-2 text-agak-hitam font-circular">{{ recipe.name }}</h2>
                <button
                  class="bg-stone-300 w-[100px] bg-opacity-25 rounded-[15px] text-stone-500 text-[10px] font-medium py-2 font-circular"
                >
                  ADD TO CART
                </button>
              </div>

              <div class="w-1/3 text-right">
                <p
                  class="rating mb-2 flex justify-end text-base items-center gap-1 text-zinc-500 font-semibold font-gilroy"
                >
                  <StarIcon /> <span>{{ recipe.rate }}</span>
                </p>
                <p class="price text-orange font-bold text-lg font-gilroy italic">
                  $ {{ recipe.price }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <button
        class="order-4 w-60 h-16 bg-orange rounded-full text-white capitalize text-xl font-medium leading-[30px] mt-[72px]"
      >
        See more recipes
      </button>
    </div>
    <img
      :src="ExtraImg04"
      alt="extra image"
      class="absolute hidden lg:block lg:w-[86px] lg:top-16 xl:top-20 lg:right-[20%] xl:right-[23%]"
    />
  </section>
</template>
