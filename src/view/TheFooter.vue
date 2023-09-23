<script setup>
import MainLogo from '@/assets/vector/main-logo.svg'
import MailIcon from '@/assets/vector/mail.svg'
import GlobeIcon from '@/assets/vector/globe.svg'
import LoveIcon from '@/assets/vector/love.svg'
</script>
<template>
  <footer class="bg-gradient-orange pt-[85px]">
    <div class="container px-28 mx-auto flex justify-around">
      <ul class="flex flex-col gap-6">
        <li>
          <a href="#"><MainLogo /></a>
        </li>
        <li><MailIcon class="inline mr-3" /><a href="#">info@food_palace.com</a></li>
        <li><GlobeIcon class="inline mr-3" /><a href="#">www.Food_palace.com</a></li>
      </ul>
      <ul id="footer-menu" class="flex flex-col gap-5 text-abu-abu">
        <h2 class="text-agak-hitam">Our menu</h2>
        <li>Breakfast</li>
        <li>Lunce</li>
        <li>Dinner</li>
      </ul>
      <ul id="footer-information" class="flex flex-col gap-5 text-abu-abu">
        <h2 class="text-agak-hitam">Information</h2>
        <li>About us</li>
        <li>Testimonial</li>
        <li>Event</li>
      </ul>
      <ul id="footer-links" class="flex flex-col gap-5 text-abu-abu">
        <h2 class="text-agak-hitam">Useful links</h2>
        <li>Services</li>
        <li>Support</li>
        <li>Conditions</li>
      </ul>
      <ul id="footer-social" class="flex flex-col gap-5">
        <h2 class="text-agak-hitam">Social Handles</h2>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Youtube</a></li>
      </ul>
    </div>
    <p class="text-center text-xs font-circular text-abu-abu mt-12 mb-10">
      Created with <LoveIcon class="inline" /> by Sajib Das Supriyo for Twinkle Creative. All rights
      reserved
    </p>
  </footer>
</template>
