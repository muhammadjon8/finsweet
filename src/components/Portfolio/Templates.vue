<script setup>
import { ref, reactive } from "vue";

const data = reactive([
  {
    id: 1,
    image: "/template1.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 2,
    image: "/template2.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 3,
    image: "/template3.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 4,
    image: "/template4.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 5,
    image: "/template5.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 6,
    image: "/template6.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
]);

const activeLink = ref('all');

const setActiveLink = (link) => {
  activeLink.value = link;
};

</script>

<template>
  <div class="py-9">
    <div class="container">
      <div class="flex gap-5 items-center justify-center py-5 pb-3">
        <a 
          href="#all" 
          :class="{'text-blue-500': activeLink === 'all'}"
          @click="setActiveLink('all')"
          class="hover:text-blue-500"
        >
          All
        </a>
        <a 
          href="#ui" 
          :class="{'text-blue-500': activeLink === 'ui'}"
          @click="setActiveLink('ui')"
          class="hover:text-blue-500"
        >
          UI Design
        </a>
        <a 
          href="#webflow" 
          :class="{'text-blue-500': activeLink === 'webflow'}"
          @click="setActiveLink('webflow')"
          class="hover:text-blue-500"
        >
          Webflow Design
        </a>
        <a 
          href="#figma" 
          :class="{'text-blue-500': activeLink === 'figma'}"
          @click="setActiveLink('figma')"
          class="hover:text-blue-500"
        >
          Figma Design
        </a>
      </div>
      <div class="md:grid grid-cols-2 gap-8">
        <div v-for="item in data" :key="item.id" class="py-6">
          <img :src="item.image" alt="" />
          <p class="text-3xl font-semibold">Template {{ item.id }}</p>
          <p class="text-[#282938] text-[14px] py-5">{{ item.description }}</p>
          <button class="font-semibold">View Portfolio -></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
