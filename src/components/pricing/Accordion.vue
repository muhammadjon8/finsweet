<script setup>
import { ref } from "vue";

// Create a reactive array to store the open state for each accordion item
const data = ref([
  {
    question: "How much time does it take?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores ullam nobis facere vero suscipit laborum assumenda quibusdam dicta atque mollitia, libero, obcaecati illo quos at praesentium? Dolores, culpa porro.",
    isOpen: false,
  },
  {
    question: "What is your class naming convention?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores ullam nobis facere vero suscipit laborum assumenda quibusdam dicta atque mollitia, libero, obcaecati illo quos at praesentium? Dolores, culpa porro.",
    isOpen: false,
  },
  {
    question: "How do we communicate?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores ullam nobis facere vero suscipit laborum assumenda quibusdam dicta atque mollitia, libero, obcaecati illo quos at praesentium? Dolores, culpa porro.",
    isOpen: false,
  },
  {
    question: "I have a bigger project. Can you handle it?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores ullam nobis facere vero suscipit laborum assumenda quibusdam dicta atque mollitia, libero, obcaecati illo quos at praesentium? Dolores, culpa porro.",
    isOpen: false,
  },
  {
    question: "What is your class naming convention?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores ullam nobis facere vero suscipit laborum assumenda quibusdam dicta atque mollitia, libero, obcaecati illo quos at praesentium? Dolores, culpa porro.",
    isOpen: false,
  },
]);

function toggleAccordion(index) {
  // Toggle the isOpen state of the clicked accordion item
  data.value[index].isOpen = !data.value[index].isOpen;
}
</script>

<template>
  <div class="py-[100px]">
    <div class="container">
      <div class="flex gap-9">
        <div class="w-[70%]">
          <h3 class="text-5xl font-semibold py-4">
            Frequently asked questions
          </h3>
          <button class="text-blue-500">Contact us For More Info</button>
        </div>
        <div class="flex flex-col">
          <div class="accordion w-full" v-for="(q, index) in data" :key="index">
            <div
              class="header p-4 flex flex-col"
              @click="toggleAccordion(index)"
            >
              <div
                class="flex justify-between items-center"
                :class="!q.isOpen ? 'border-b border-b-black duration-200' : ''"
              >
                <div class="flex gap-8">
                  <span class="text-blue-500 text-2xl">0{{ index + 1 }}</span>
                  <span>{{ q.question }}</span>
                </div>
                <span
                  class="text-xl duration-200"
                  :class="q.isOpen ? 'rotate-45' : ''"
                  >+</span
                >
              </div>
              <div
                class="body px-5 text-[14px] text-gray-600 overflow-hidden duration-200"
                :class="
                  q.isOpen ? 'max-h-[500px] border-b border-b-black' : 'max-h-0'
                "
              >
                <div class="px-8">
                  {{ q.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
