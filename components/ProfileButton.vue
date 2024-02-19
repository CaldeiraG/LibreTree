<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Mail, Github, Instagram, Twitter, Twitch } from 'lucide-vue-next'
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 gap-4 justify-center items-center pt-2">
      <Button variant="default" class="bg-custom text-lg">
        <Mail class="w-4 h-4 mr-2" /> Shoot me an email!
      </Button>
      <Button variant="default" class="bg-custom text-lg">
        <github class="w-4 h-4 mr-2" /> GitHub
      </Button>
      <Button variant="default" class="bg-custom text-lg">
        <instagram class="w-4 h-4 mr-2" /> Instagram
      </Button>
      <Button variant="default" class="bg-custom text-lg">
        <twitter class="w-4 h-4 mr-2" /> Twitter
      </Button>
      <Button variant="default" class="bg-custom text-lg">
        <twitch class="w-4 h-4 mr-2" /> Twitch
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
  background-color: hsl(217.2 32.6% 17.5%);
  color: #e5e7eb;
}

.lucide {
  /* Change this! */
  width: 24px;
  height: 24px;
  stroke-width: 1px;
}

</style>