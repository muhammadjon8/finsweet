<script setup>
import { ref } from "vue";

// Testimonials data
const testimonials = ref([
  {
    text: "The best agency we’ve worked with so far. They understand our product.",
    name: "Jenny Wilson",
    position: "Vice president",
    image: "/woman.png",
  },
  {
    text: "Amazing service! They exceeded our expectations in every way. Highly recommend this agency.",
    name: "John Doe",
    position: "CEO",
    image: "/woman.png",
  },
  {
    text: "Great experience working with them. They delivered everything on time and with great quality.",
    name: "Sara Smith",
    position: "Product Manager",
    image: "/woman.png",
  },
]);

const currentTestimonialIndex = ref(0);

// Navigate to previous testimonial
const prevTestimonial = () => {
  if (currentTestimonialIndex.value === 0) {
    currentTestimonialIndex.value = testimonials.value.length - 1;
  } else {
    currentTestimonialIndex.value -= 1;
  }
};

// Navigate to next testimonial
const nextTestimonial = () => {
  if (currentTestimonialIndex.value === testimonials.value.length - 1) {
    currentTestimonialIndex.value = 0;
  } else {
    currentTestimonialIndex.value += 1;
  }
};
</script>

<template>
  <div class="py-9">
    <div class="container">
      <div class="flex flex-col lg:flex-row gap-9">
        <div class="flex flex-col gap-3 w-full lg:w-[370px]">
          <h3 class="text-[38px] font-semibold">
            What our clients say about us
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            quibusdam recusandae accusamus iste
          </p>
        </div>
        <div class="flex w-full lg:w-[70%] flex-col gap-5">
          <h3 class="text-3xl font-semibold">
            "{{ testimonials[currentTestimonialIndex].text }}"
          </h3>
          <div class="flex justify-between items-center">
            <div class="py-5 flex gap-5">
              <img
                :src="testimonials[currentTestimonialIndex].image"
                alt=""
                class="rounded-full"
              />
              <div>
                <p class="text-[18px] font-normal">
                  {{ testimonials[currentTestimonialIndex].name }}
                </p>
                <p class="text-[12px] font-normal">
                  {{ testimonials[currentTestimonialIndex].position }}
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <button
                class="bg-gray-100 rounded-full w-8 h-8 hover:bg-blue-500 hover:text-white font-semibold"
                @click="prevTestimonial"
              >
                &lt;
              </button>
              <button
                class="bg-gray-100 rounded-full w-8 h-8 hover:bg-blue-500 hover:text-white font-semibold"
                @click="nextTestimonial"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: Poppins;
}
</style>
