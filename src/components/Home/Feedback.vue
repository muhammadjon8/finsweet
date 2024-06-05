<template>
  <div class="py-9">
    <div class="container">
      <div class="flex gap-9">
        <div class="flex flex-col gap-3 w-[370px]">
          <h3 class="text-[38px] font-semibold">
            What our clients say about us
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            quibusdam recusandae accusamus iste
          </p>
        </div>
        <div class="flex w-[70%] flex-col gap-5">
          <h3 class="text-3xl font-semibold">
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </h3>
          <div class="flex justify-between items-center">
            <div class="py-5 flex gap-5">
              <img src="../../assets/woman.png" alt="" class="rounded-full" />
              <div>
                <p class="text-[18px] font-normal">Jenny Wilson</p>
                <p class="text-[12px] font-normal">Vice president</p>
              </div>
            </div>
            <div class="flex gap-3">
              <button class="bg-gray-100 rounded-full w-8 h-8 hover:bg-blue-500 hover:text-white font-semibold"><</button>
              <button class="bg-gray-100 rounded-full w-8 h-8 hover:bg-blue-500 hover:text-white font-semibold">></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  font-family: Poppins;
}
</style>
