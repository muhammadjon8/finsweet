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
    <div class="container mx-auto">
      <h3 class="text-center text-[28px] font-semibold py-5">Meet Our Team</h3>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 gap-5"
      >
        <div
          v-for="(person, index) in arr"
          :key="index"
          class="flex justify-center"
        >
          <div
            class="bg-white flex flex-col items-center w-[290px] py-5 relative overflow-hidden group "
          >
            <div
              class="absolute top-[40px] left-[58px] w-[168px] h-[168px] bg-[url('/blur.png')] bg-no-repeat bg-center z-20 hidden group-hover:block"
            >
              <div class="flex gap-3 absolute top-[120px] left-[50px]">
                <a href="facebook.com" class="z-30"
                  ><img src="../../assets/facebook.svg" alt=""
                /></a>
                <a href="instagam.com" class="z-30"
                  ><img src="../../assets/instagram.svg" alt=""
                /></a>
                <a href="twitter.com" class="z-30"
                  ><img src="../../assets/twitter.svg" alt=""
                /></a>
              </div>
            </div>
            <img :src="person.image" alt="" class="py-5 relative" />
            <h3 class="text-[24px] font-medium relative">{{ person.name }}</h3>
            <p class="text-black/50 relative">{{ person.job }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
