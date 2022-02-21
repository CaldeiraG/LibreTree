<template>
  <img
    :alt="profile_alt"
    :src="profile_image"
  >
</template>

<style>

</style>

<script>

import siteconfig from '../configuration.yaml';


export default {
  data () {
    return {
      profile_image: siteconfig[0].site.profile_image,
      profile_alt: siteconfig[0].site.title
    }
  }
}

</script>
