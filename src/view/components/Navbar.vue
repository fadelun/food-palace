<script setup>
import MainLogo from '@/assets/vector/main-logo.svg'
import CartIcon from '@/assets/vector/cart.svg'
import SearchIcon from '@/assets/vector/search.svg'
import MenuIcon from '@/assets/vector/menu.svg'
</script>
<template>
  <nav class="w-full flex justify-between items-center">
    <div class="logo">
      <main-logo />
    </div>
    <div class="wrapper flex list-none w-1/4 md:w-1/6 justify-between">
      <li><cart-icon /></li>
      <li><search-icon /></li>
      <li><menu-icon /></li>
    </div>
  </nav>
</template>
