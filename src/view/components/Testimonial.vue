<script setup>
import Testimonial from '@/assets/image/testimonial-image.png'
import LeftArrowIcon from '@/assets/vector/left-arrow.svg'
import RightArrowIcon from '@/assets/vector/cil_arrow-right.svg'
</script>
<template>
  <section id="testimonial" class="mt-24 relative">
    <div class="container mx-auto flex">
      <div class="testimonial-text w-1/2 flex flex-wrap px-[150px] items-center content-center">
        <h1 class="order-2 text-[48px] font-bold leading-[60px] mt-6">
          That’s what our Client Says
        </h1>
        <h2 class="order-1 text-orange font-semibold text-2xl">Testimonial</h2>
        <div class="order-3 mt-[30px]">
          <p class="text-xl font-[500] font-circular italic leading-8">
            “Food palace is an awesome place. Food is everything we are. It’s an extension of
            nationalist feeling, ethnic feeling, your personal history, your province”
          </p>
          <p class="text-2xl font-gliroy font-semibold mt-11">Jessica Parker</p>
          <p class="font-circular text-sm text-stone-600">Product Designer @ Kitty</p>
        </div>
      </div>
      <!-- preview testimonial image -->
      <div class="w-1/2 relative">
        <figure class="relative w-[744px]">
          <img :src="Testimonial" alt="testimonial image" class="" />
        </figure>
      </div>
      <div class="arrow absolute bottom-[14%] left-[35%] flex items-center gap-2">
        <button><LeftArrowIcon /></button>
        <button><RightArrowIcon /></button>
      </div>
    </div>
  </section>
</template>
