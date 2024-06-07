<script setup>
import { ref } from "vue";

const prices = ref([
  {
    price: "299$",
    per: "Per Design",
    page_name: "Landing Page",
    description: "When you’re ready to go beyond prototyping in Figma",
    pros: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "399$",
    per: "Multi Design",
    page_name: "Website Page",
    description: "When you’re ready to go beyond prototyping in Figma",
    pros: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "499$ +",
    per: "Per Design",
    page_name: "Complex Project",
    description: "When you’re ready to go beyond prototyping in Figma",
    pros: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
      "Assistant and Help",
    ],
  },
]);
</script>

<template>
  <div class="py-[100px]">
    <div class="container">
      <div>
        <div class="flex flex-col items-center py-3">
          <h2 class="text-3xl font-semibold py-3">Our Pricing Plans</h2>
          <p class="text-black/60 md:w-[570px] text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis a
            iusto inventore quis, ratione quo suscipit non enim dolor hic porro
          </p>
        </div>
        <div class="md:flex gap-5 py-5">
          <div v-for="(data, index) in prices" :key="index">
            <div
              :class="index == 1 ? 'bg-[#1C1E53] text-white' : 'bg-[#F4F6FC]'"
              class="flex flex-col border py-3 px-9 h-[600px] relative rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div class="flex gap-4 items-center py-5">
                <h3 class="text-3xl font-semibold">{{ data.price }}</h3>
                <p
                  :class="index == 1 ? 'text-yellow-500' : 'text-black/60'"
                  class="text-sm"
                >
                  {{ data.per }}
                </p>
              </div>
              <p class="font-semibold">{{ data.page_name }}</p>
              <p
                :class="index == 1 ? 'text-white/50' : 'text-black/60'"
                class="py-3 pb-5"
              >
                {{ data.description }}
              </p>
              <div
                v-for="(attributes, index) in data.pros"
                :key="index"
                class="py-2 flex gap-2"
              >
                <img src="/arrow.svg" alt="" />
                <p>{{ attributes }}</p>
              </div>
              <div
                class="mx-auto py-5 absolute bottom-5 left-[50%] -translate-x-[50%]"
              >
                <button
                  :class="
                    index == 1
                      ? 'bg-yellow-500 text-black'
                      : 'bg-black text-white'
                  "
                  class="py-2 px-9 rounded-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
