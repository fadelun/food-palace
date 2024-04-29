<script setup>
import MainLogo from '@/assets/vector/main-logo.svg'
import MailIcon from '@/assets/vector/mail.svg'
import GlobeIcon from '@/assets/vector/globe.svg'
import LoveIcon from '@/assets/vector/love.svg'
import ExtraImg07 from '@/assets/image/extra-img-7.png'
import ExtraImg08 from '@/assets/image/extra-img-8.png'

const footerLink = {
  menu: ['Breakfast', 'Lunce', 'Dinner'],
  information: ['About us', 'Testimonial', 'Event'],
  'usefu-links': ['Services', 'Support', 'Conditions'],
  'social-handles': ['Facebook', 'Twitter', 'Youtube']
}
</script>
<template>
  <footer class="bg-gradient-orange pt-[85px] relative">
    <img
      :src="ExtraImg07"
      alt="extra image"
      className="absolute right-0 top-1 hidden lg:block lg:w-[117px]"
    />
    <img
      :src="ExtraImg08"
      alt="extra image"
      className="absolute leftt-0 top-1 hidden lg:block lg:w-44 xl:w-56"
    />
    <div
      class="container px-20 lg:px-28 mx-auto flex flex-wrap gap-10 lg:gap-x-0 lg:justify-around"
    >
      <ul class="flex flex-col gap-6">
        <li>
          <a href="#"><MainLogo /></a>
        </li>
        <li><MailIcon class="inline mr-3" /><a href="#">info@food_palace.com</a></li>
        <li><GlobeIcon class="inline mr-3" /><a href="#">www.Food_palace.com</a></li>
      </ul>
      <ul id="footer-menu" class="flex flex-col gap-5 text-abu-abu">
        <h2 v-if="footerLink.menu" class="text-agak-hitam">Our menu</h2>
        <li v-for="link in footerLink.menu">
          <a href="#">
            {{ link }}
          </a>
        </li>
      </ul>
      <ul id="footer-information" class="flex flex-col gap-5 text-abu-abu">
        <h2 v-if="footerLink.information" class="text-agak-hitam">Information</h2>
        <li v-for="link in footerLink.information">
          <a href="#">
            {{ link }}
          </a>
        </li>
      </ul>
      <ul id="footer-links" class="flex flex-col gap-5 text-abu-abu">
        <h2 v-if="footerLink['usefu-links']" class="text-agak-hitam">Useful Links</h2>
        <li v-for="link in footerLink['usefu-links']">
          <a href="#">
            {{ link }}
          </a>
        </li>
      </ul>
      <ul id="footer-social" class="flex flex-col gap-5">
        <h2 v-if="footerLink['social-handles']" class="text-agak-hitam">Social Handles</h2>
        <li v-for="link in footerLink['social-handles']" class="underline">
          <a href="#">
            {{ link }}
          </a>
        </li>
        <!-- <h2 class="text-agak-hitam">Social Handles</h2>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Youtube</a></li> -->
      </ul>
    </div>
    <p class="text-center text-xs font-circular text-abu-abu mt-12 mb-10">
      Created with <LoveIcon class="inline" /> by Sajib Das Supriyo for Twinkle Creative. All rights
      reserved
    </p>
  </footer>
</template>
