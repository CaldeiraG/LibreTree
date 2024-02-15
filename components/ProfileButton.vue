<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Mail, Github, Instagram, Twitter } from 'lucide-vue-next'
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 gap-4 justify-center items-center pt-2">
      <Button variant="default" class="bg-custom text-xl">
        <Mail class="w-4 h-4 mr-2" /> Shoot me an email!
      </Button>
      <Button variant="default" class="bg-custom text-xl">
        <github class="w-4 h-4 mr-2" /> GitHub
      </Button>
      <Button variant="default" class="bg-custom text-xl">
        <instagram class="w-4 h-4 mr-2" /> Instagram
      </Button>
      <Button variant="default" class="bg-custom text-xl">
        <twitter class="w-4 h-4 mr-2" /> Twitter
      </Button>
    </div>
  </div>
</template>

<style>

.light-mode .bg-custom {
  border-radius: 0.5em;
  background-color: #333333;
  color: #ffffff;
}

.dark-mode .bg-custom {
  border-radius: 0.5em;
  background-color: hsl(	215.4, 16.3%, 46.9%);
  color: #e5e7eb;
}

.lucide {
  /* Change this! */
  width: 24px;
  height: 24px;
  stroke-width: 1px;
}

</style>