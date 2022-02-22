<template>
  <v-container class="container--fluid">
    <v-row justify="center" align="center">
      <v-col cols="12" justify="center" align="center">
        <v-avatar id="ProfileLogo" size="150px">
          <ProfileLogo/>
        </v-avatar>
      </v-col>

      <v-col cols="12" justify="center" align="center">
        <ProfileDescription/>
      </v-col>
      <v-col cols="8" justify="center" align="center">
        <ProfileButtons/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

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
