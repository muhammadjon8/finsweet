<script>
import { reactive } from "vue";

const arr = reactive([
  {
    name: "John Smith",
    job: "Developer",
    image: "/team1.png",
  },
  {
    name: "Simon Adams",
    job: "CTO",
    image: "/team4.png",
  },
  {
    name: "Paul Jones",
    job: "Design Lead",
    image: "/team3.png",
  },
  {
    name: "Sara Hardin",
    job: "Project Manager",
    image: "/team2.png",
  },
]);
export default {
  setup() {
    return {
      arr,
    };
  },
};
</script>

<template>
  <div class="py-16 bg-[#F4F6FC]">
    <div class="container">
      <h3 class="text-center text-[28px] font-semibold py-5">Meet Our Team</h3>
      <div class="grid grid-cols-4 py-5 gap-5">
        <div v-for="(person, index) in arr" :key="index">
          <div class="bg-white flex flex-col items-center w-[290px] py-5">
            <img :src="person.image" alt="" class="py-5"/>
            <h3 class="text-[24px] font-medium">{{ person.name }}</h3>
            <p class="text-black/50">{{ person.job }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
