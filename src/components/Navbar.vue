<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const activeLink = computed(() => {
  switch (route.path) {
    case "/":
      return "home";
    case "/about":
      return "about";
    case "/pricing":
      return "pricing";
    case "/work":
      return "work";
    case "/blog":
      return "blog";
    default:
      return "";
  }
});
</script>
<template>
  <div class="bg-[#1C1E53]">
    <div class="container py-8">
      <div class="flex justify-between items-center">
        <img src="../assets/Logo.png" alt="Logo" />
        <div class="flex gap-9 text-[#BBBBCB] items-center">
          <router-link
            to="/"
            class="hover:text-white"
            :class="{
              'text-white border-b border-b-white pb-1': activeLink === 'home',
            }"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="hover:text-white"
            :class="{
              'text-white border-b border-b-white pb-1': activeLink === 'about',
            }"
          >
            About Us
          </router-link>
          <router-link
            to="/pricing"
            class="hover:text-white"
            :class="{
              'text-white border-b border-b-white pb-1':
                activeLink === 'pricing',
            }"
          >
            Pricing
          </router-link>
          <router-link
            to="/work"
            class="hover:text-white"
            :class="{
              'text-white border-b border-b-white pb-1': activeLink === 'work',
            }"
          >
            Work
          </router-link>
          <router-link
            to="/blog"
            class="hover:text-white"
            :class="{
              'text-white border-b border-b-white pb-1': activeLink === 'blog',
            }"
          >
            Blog
          </router-link>
          <button class="border border-[#F4F6FC33] py-4 px-9 rounded-full hover:bg-white hover:text-black">
            Contact us
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
