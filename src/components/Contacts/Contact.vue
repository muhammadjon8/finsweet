<script setup></script>

<template>
  <div class="py-[100px]">
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="py-[50px]">
          <h1 class="text-5xl font-semibold pb-3 text-center py-3">Contact Us</h1>
          <p class="text-center md:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <form
          class="md:grid grid-cols-2 md:w-[1061px] md:h-[600px] bg-[#F4F6FC] p-9 gap-5 w-full"
        >
          <div class="py-3">
            <p class="font-semibold">Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              class="w-full px-3 py-3 border outline-none focus:border-blue-500 bg-[#F4F6FC]"
              required
            />
          </div>
          <div class="py-3">
            <p class="font-semibold">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full py-3 px-3 border outline-none focus:border-blue-500 bg-[#F4F6FC]"
              required
            />
          </div>
          <div class="py-3">
            <p class="font-semibold">Subject</p>
            <input
              type="text"
              placeholder="Provide context"
              class="w-full py-3 px-3 border outline-none focus:border-blue-500 bg-[#F4F6FC]"
              required
            />
          </div>
          <div class="py-3">
            <p class="font-semibold">Subject</p>
            <input
              type="text"
              placeholder="Select Subject"
              class="w-full py-3 px-3 border outline-none focus:border-blue-500 bg-[#F4F6FC]"
              required
            />
          </div>
          <div class="col-span-2 py-3">
            <p class="font-semibold">Message</p>
            <textarea
              type="text"
              placeholder="Write your question here"
              class="h-[200px] w-full py-3 px-3 resize-none border outline-none focus:border-blue-500 bg-[#F4F6FC]"
              required
            ></textarea>
          </div>
          <div class="">
            <button type="submit" class="px-9 py-3 bg-black text-white md:w-[50%] rounded-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
