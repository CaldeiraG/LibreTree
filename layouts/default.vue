<template>
  <v-app dark>

<!--    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="text&#45;&#45;accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>feature-highlight</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{features}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>-->

    <v-app-bar
      color="transparent"
      app
      absolute
      style="border-bottom: none; box-shadow: 0 0 0 0;"
    >
      <v-app-bar-nav-icon
        class="d-flex d-sm-none" @click="drawer = true">
      </v-app-bar-nav-icon>


      <v-app-bar-title class="hidden-md-and-up">CaldeiraG</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2 hidden-xs-only overflow-y-auto" @click="toTop()">Homepage</v-btn>
<!--      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>-->

    </v-app-bar>

    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      fixed
      bottom
      right
      class="hidden-sm-and-down scrolltop"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <v-parallax
      dark
      src="https://cdn.caldeirag.xyz/assets/shubham-dhage-NsPqV-WsZYY-unsplash.jpg"
      fill-height
      style="height: 100%;"
    >
    <v-main>

      <v-container fill-height fluid>

          <Nuxt />

      </v-container>

    </v-main>
    </v-parallax>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>CaldeiraG &copy; {{ new Date().getFullYear() }}</span>
<!--      <v-col class="ma-1 text-right"><NuxtLink class="ma-1" to="/TermsOfService" target="_blank">Terms of Service</NuxtLink><NuxtLink class="ma-1" to="/PrivacyPolicy" target="_blank">Privacy Policy</NuxtLink></v-col>-->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  components: { },
  data () {
    return {

      clipped: false,
      drawer: false,
      fixed: false,
      darkMode: true,
      fab: false,

      title: 'CaldeiraG',
      projects: 'Homepage',
    }
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem(
        "dark_theme",
        this.$vuetify.theme.dark.toString()
      );
    }
  },
  methods: {
    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    },
  },
}

</script>

<style>

.scrolltop {
  bottom: 80px;
}

</style>

