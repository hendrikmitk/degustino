<template>
  <div
    class="flex min-h-screen flex-col bg-gusti-orange-light px-6 py-10 font-raleway text-gusti-gray-strong space-y-6"
  >
    <!-- Title -->
    <div class="flex flex-col space-y-4">
      <h1 class="text-center text-4xl font-bold text-gusti-orange-strong">
        Degustino
      </h1>
      <h2 class="text-center text-2xl">Can you guess the color?</h2>
    </div>

    <!-- Game stats -->
    <div>
      <div class="flex h-36 rounded-t-xl bg-white py-4">
        <div class="flex-1 flex justify-center">
          <div
            class="h-28 w-28 inline-flex items-center justify-center overflow-hidden rounded-full"
          >
            <svg class="h-full w-full -rotate-90">
              <circle
                class="text-gray-300 fill-transparent stroke-current stroke-[3]"
                :r="radius"
                :cx="radius + 2"
                :cy="radius + 2"
              />
              <circle
                class="text-gusti-orange-strong fill-transparent stroke-current stroke-[3]"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="
                  circumference - (percent / 100) * circumference
                "
                stroke-linecap="round"
                :r="radius"
                :cx="radius + 2"
                :cy="radius + 2"
              />
            </svg>
            <div class="flex flex-col absolute items-center">
              <span class="text-xl">{{ percent }}%</span>
              <span>Time</span>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col">
          <div class="flex flex-1 items-start justify-between px-8 pt-5">
            <span class="font-roboto text-3xl">03</span>
            <span>Score</span>
          </div>
          <div
            class="flex flex-1 items-end justify-between px-8 pb-5 text-gusti-gray-medium"
          >
            <span>Round</span>
            <span class="font-roboto text-3xl">05</span>
          </div>
        </div>
      </div>
      <div
        class="rounded-b-xl bg-gusti-orange-medium py-2 text-center text-4xl text-gusti-orange-strong"
      >
        Maroon
      </div>
    </div>

    <!-- Game board -->
    <div class="grid grid-cols-2 gap-6">
      <button
        class="aspect-square rounded-xl bg-red-300 flex items-center justify-center"
      >
        <span class="text-gusti-orange-light text-8xl">A</span>
      </button>
      <button
        class="aspect-square rounded-xl bg-red-600 flex items-center justify-center"
      >
        <span class="text-gusti-orange-light text-8xl">B</span>
      </button>
      <button
        class="aspect-square rounded-xl bg-red-800 flex items-center justify-center"
      >
        <span class="text-gusti-orange-light text-8xl">C</span>
      </button>
      <button
        class="aspect-square rounded-xl bg-red-400 flex items-center justify-center"
      >
        <span class="text-gusti-orange-light text-8xl">D</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const radius = 54;
const circumference = radius * 2 * Math.PI;
const percent = 75;
</script>
