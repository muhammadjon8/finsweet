<template>
  <div class="bg-[#1C1E53]">
    <div class="container py-8">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <img src="../assets/Logo.png" alt="" />
        </router-link>
        <div class="flex gap-9 text-[#BBBBCB] items-center max-sm:hidden">
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
          <button
            @click="goto"
            class="border border-[#F4F6FC33] py-4 px-9 rounded-full hover:bg-white hover:text-black"
          >
            Contact us
          </button>
        </div>
        <span class="text-white text-4xl cursor-pointer sm:hidden" @click="openNav">&#9776;</span>
      </div>
    </div>
    <OverlayMenu :isOpen="isOverlayOpen" @close="closeNav" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import OverlayMenu from './OverlayMenu.vue';

const route = useRoute();
const router = useRouter();

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

const isOverlayOpen = ref(false);

const goto = () => {
  router.push("/contacts");
};

function openNav() {
  isOverlayOpen.value = true;
}

function closeNav() {
  isOverlayOpen.value = false;
}
</script>

<style scoped>
/* Your existing styles */
</style>
