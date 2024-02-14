<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-vue-next'
</script>

<template>
  <div class="flex md:flex-grow flex-grow justify-center items-center pt-2 ">
    <Button variant="destructive" class="bg-primary text-primary-foreground">
      <Mail class="w-4 h-4 mr-2" /> Shoot me an email!
    </Button>
  </div>
</template>

<style scoped>

</style>