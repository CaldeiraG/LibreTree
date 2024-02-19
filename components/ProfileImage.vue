<script setup lang="ts">

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
</script>

<template>
  <div class="flex md:flex-grow flex-grow justify-center items-center">
    <Avatar class="w-60 h-60">
      <AvatarImage src="https://cdn.caldeirag.xyz/assets/profile.png" alt="CaldeiraG avatar" />
      <AvatarFallback>CG</AvatarFallback>
    </Avatar>

  </div>
</template>

<style scoped>

</style>