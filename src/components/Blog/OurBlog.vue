<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    image: "/rasm2.png",
    date: "27 January 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    image: "/rasm3.png",
    date: "27 January 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    image: "/rasm1.png",
    date: "27 January 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    image: "/rasm3.png",
    date: "27 January 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    image: "/rasm1.png",
    date: "27 January 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    image: "/rasm2.png",
    date: "27 January 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
]);
</script>

<template>
  <div class="py-9">
    <div class="container">
      <div class="flex flex-col items-center">
        <h2 class="text-5xl font-semibold py-5">Our Blog</h2>
        <div class="md:grid grid-cols-3 gap-5">
          <div
            v-for="(item, index) in data"
            :key="index"
            class="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl px-3"
          >
            <img :src="item.image" alt="" class="py-3" />
            <div class="flex flex-col gap-3">
              <p class="text-gray-500 text-sm">{{ item.date }}</p>
              <h3 class="text-2xl font-semibold">{{ item.title }}</h3>
              <p class="text-gray-500 text-sm">{{ item.description }}</p>
            </div>
            <button class="py-5">Read More -></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
//ok