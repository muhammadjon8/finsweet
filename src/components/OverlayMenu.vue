<template>
  <div id="myNav" class="overlay" :style="{ width: isOpen ? '100%' : '0%' }">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
    <div class="overlay-content">
      <router-link to="/" @click="closeNav"
        :class="{ 'active': activeLink === 'home' }">Home</router-link>
      <router-link to="/about" @click="closeNav"
        :class="{ 'active': activeLink === 'about' }">About Us</router-link>
      <router-link to="/pricing" @click="closeNav"
        :class="{ 'active': activeLink === 'pricing' }">Pricing</router-link>
      <router-link to="/work" @click="closeNav"
        :class="{ 'active': activeLink === 'work' }">Work</router-link>
      <router-link to="/blog" @click="closeNav"
        :class="{ 'active': activeLink === 'blog' }">Blog</router-link>
      <button @click="goto" class="contact-us-btn">Contact us</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close']);

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

const goto = () => {
  closeNav();
  router.push("/contacts");
};

const closeNav = () => {
  emit('close');
};

watch(() => route.path, closeNav);
</script>

<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }

  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

.active {
  color: #f1f1f1;
  border-bottom: 2px solid white;
}

.contact-us-btn {
  border: none;
  background: none;
  color: #818181;
  font-size: 36px;
  margin-top: 20px;
  cursor: pointer;
  transition: color 0.3s;
}

.contact-us-btn:hover {
  color: #f1f1f1;
}
</style>
