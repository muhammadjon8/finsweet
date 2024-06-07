<script setup></script>
<template>
  <div class="bg-[#1C1E53] py-9 max-sm: px-3">
    <div class="container">
      <div class="py-9 md:flex w-full items-center justify-between max-sm:gap-3">
        <div class="md:w-[40%] w-full gap-5 flex flex-col">
          <h1
            class="md:text-[50px] font-semibold text-white leading-[64px] max-sm:text-3xl max-sm:text-center"
          >
            Building stellar websites for early startups
          </h1>
          <p class="text-white font-medium max-sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div class="flex gap-[40px] max-sm:py-3 items-center max-sm:justify-center">
            <router-link to="/work"
              class="md:py-4 border border-none bg-[#FCD980] rounded-full md:px-14 max-sm:text-[12px] max-sm:px-2 max-sm:py-3"
            >
              View our work
            </router-link>
            <router-link to="/pricing" class="md:py-4 text-white max-sm:text-[12px] max-sm:py-2">View pricing -></router-link>
          </div>
        </div>
        <div class="md:w-[50%]">
          <img src="/Illustration.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
</style>
