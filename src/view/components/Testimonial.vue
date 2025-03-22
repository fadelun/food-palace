<script setup>
import Testimonial from '@/assets/image/testimonial-image.png'
import LeftArrowIcon from '@/assets/vector/left-arrow.svg'
import RightArrowIcon from '@/assets/vector/cil_arrow-right.svg'
</script>
<template>
  <section id="testimonial" class="mt-40 lg:mt-24 mb-32 relative">
    <div class="container mx-auto flex flex-col lg:flex-row">
      <div
        class="testimonial-text lg:w-1/2 flex flex-col lg:flex-row lg:flex-wrap px-6 md:px-20 lg:px-14 xl:px-44 items-center content-center"
      >
        <h1 class="order-2 md:text-[48px] text-agak-hitam font-bold md:leading-[60px] mt-6">
          That’s what our Client Says
        </h1>
        <h2 class="order-1 text-orange font-semibold text-2xl">Testimonial</h2>
        <div class="order-3 mt-[30px]">
          <p class="text-lg font-[500] font-circular italic leading-8 text-hitam-soft">
            “Food palace is an awesome place. Food is everything we are. It’s an extension of
            nationalist feeling, ethnic feeling, your personal history, your province”
          </p>
          <p class="text-2xl font-gilroy font-semibold mt-11">Jessica Parker</p>
          <p class="font-circular text-sm text-abu-abu">Product Designer @ Kitty</p>
        </div>
        <button class="arrow order-4 flex justify-end items-center gap-2 lg:hidden">
          <button><LeftArrowIcon /></button>
          <button><RightArrowIcon /></button>
        </button>
      </div>
      <!-- preview testimonial image -->
      <div class="hidden lg:block lg:w-1/2 relative">
        <figure class="relative w-[500px] xl:w-[600px]">
          <img :src="Testimonial" alt="testimonial image" class="" />
        </figure>
      </div>
      <div class="arrow lg:absolute bottom-[14%] left-[35%] hidden lg:flex items-center gap-2">
        <button><LeftArrowIcon /></button>
        <button><RightArrowIcon /></button>
      </div>
    </div>
  </section>
</template>
