<template>
  <div>
    <h1>{{ title }}</h1>
    <p> {{description}}</p>
  </div>
</template>

<style>

</style>

<script>

import siteconfig from '../configuration.yaml';


export default {
  data () {
    return {
      title: siteconfig[0].site.title,
      description: siteconfig[0].site.description,
    }
  }
}


</script>
