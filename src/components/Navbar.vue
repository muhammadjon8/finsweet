<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-[#1C1E53]">
    <div class="container py-8">
      <div class="flex justify-between items-center">
        <img src="../assets/Logo.png" alt="" />
        <div class="flex gap-9 text-[#BBBBCB] items-center">
          <router-link to="/" class="hover:text-white">Home</router-link>
          <router-link to="/about" class="hover:text-white"
            >About Us</router-link
          >
          <router-link to="/pricing" class="hover:text-white"
            >Pricing</router-link
          >
          <router-link to="/work" class="hover:text-white">Work</router-link>
          <router-link to="/blog" class="hover:text-white">Blog</router-link>
          <button class="border border-[#F4F6FC33] py-4 px-9 rounded-full">
            Contact us
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
