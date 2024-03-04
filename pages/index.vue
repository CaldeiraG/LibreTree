<template>
  <div class="flex md:flex-grow flex-grow flex-row-reverse bg-primary text-primary-foreground">
    <NavigationMenu class="justify-end">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NuxtLink to="/blog">
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              About Me
            </NavigationMenuLink>
          </NuxtLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NuxtLink to="/portfolio">
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              Portfolio
            </NavigationMenuLink>
          </NuxtLink>
        </NavigationMenuItem>
        <NavigationMenuItem class="p-2">
          <select
            v-model="colorMode.preference"
            class="border w-24 h-8 bg-primary text-primary-foreground"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>

  <ProfileImage/>
  <ProfileDescription/>
  <ProfileSocials/>
</template>

<style>

body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: hsl(222.2 84% 4.9%);
  color: hsl(210 40% 98%);
}

</style>

<!--
<script>

export default {
  head: {
    title: 'My title',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My description',
      },
    ],
  },
}

</script>
-->
<script setup lang="ts">

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import ProfileImage from '~/components/ProfileImage.vue'
import ProfileSocials from '~/components/ProfileSocials.vue'


const colorMode = useColorMode()

</script>