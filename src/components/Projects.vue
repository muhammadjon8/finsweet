<script setup></script>

<template>
  <div class="py-9">
    <div class="container">
      <div class="flex justify-between items-center">
        <h3 class="font-[Poppins] text-3xl font-medium">View Our Projects</h3>
        <button class="py-4">View More -></button>
      </div>
      <div class="grid grid-cols-3 py-3 px-9 gap-4">
        <div class="col-span-2 row-span-2 parent relative overflow-hidden">
          <img src="../assets/Card.png" alt="" />
          <div
            class="overlay absolute top-0 left-0 w-0 h-full bg-blue-900/90 transition-all duration-500 ease-in-out flex items-end justify-start"
          >
            <div class="content text-center hidden p-5">
              <h3 class="text-white mb-4 text-left font-normal text-[24px]">
                Workhub office Webflow Webflow Design
              </h3>
              <p class="text-left text-white mb-4">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>

              <button class="text-yellow-500 py-2 px-4">View Project -></button>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rasm">
          <img src="../assets/rasm1.png" alt="" />
          <div
            class="overlay absolute top-0 left-0 w-0 h-full bg-blue-900/90 transition-all duration-500 ease-in-out flex items-end justify-start"
          >
            <div class="content text-center hidden p-5">
              <h3 class="text-white mb-4 text-left font-normal text-[24px]">
                Unisaas Website Design
              </h3>
              <button class="text-yellow-500 py-2 px-4">View Project -></button>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rasm">
          <img src="../assets/rasm2.png" alt="" />
          <div
            class="overlay absolute top-0 left-0 w-0 h-full bg-blue-900/90 transition-all duration-500 ease-in-out flex items-end justify-start"
          >
            <div class="content text-center hidden p-5">
              <h3 class="text-white mb-4 text-left font-normal text-[24px]">
                Unisaas Website Design
              </h3>

              <button class="text-yellow-500 py-2 px-4">View Project -></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent:hover .overlay {
  width: 50%;
}

.parent:hover .overlay .content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.rasm:hover .overlay {
  width: 100%;
}

.rasm:hover .overlay .content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
