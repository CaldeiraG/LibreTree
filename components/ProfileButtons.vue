<template>
  <div>
    <div class="ma-1"><v-btn alt="GitHub" elevation="2" x-large color="#383838" href="github" class="white--text"><img width="24" height="24" :src="github" class="ma-1"/> GitHub</v-btn></div>
    <div class="ma-1"><v-btn alt="Twitter" elevation="2" x-large color="#1DA1F2" href="twitter" class="white--text"><img width="24" height="20" :src="twitter" class="ma-1"/>Twitter</v-btn></div>
    <div class="ma-1"><v-btn alt="Ko-Fi" elevation="2" x-large color="#FF5E5B" href="kofi" class="white--text"><img width="24" height="24" :src="kofi" class="ma-1"/>Ko-Fi</v-btn></div>
    <div class="ma-1"><v-btn alt="Instagram" elevation="2" x-large href="instagram" class="white--text instagram"><img width="24" height="24" :src="instagram" class="ma-1"/>Instagram</v-btn></div>
    <div class="ma-1">
      <v-btn alt="Discord" elevation="2" x-large color="#5865F2" class="white--text discord" @click="copyURL(discordUsername); snackbar = true">
        <img width="21" height="24" :src="discord" class="ma-1"/>{{ discordUsername }}
      </v-btn>
      <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template #action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar></div>
    <div class="ma-1"><v-btn alt="Portfolio" color="#328723" elevation="2" x-large href="" class="white--text"><v-icon class="ma-1">mdi-book-open-outline</v-icon>Portfolio</v-btn></div>
    <div class="ma-1">Coming soon</div>
  </div>
</template>

<script>

import DiscordLogo from '../assets/DiscordWhite.png';
import GitHubLogo from '../assets/GitHub-Mark-Light-32px.png';
import TwitterLogo from '../assets/TwitterLogoWhite.png';
import KofiLogo from '../assets/KofiWhite.png';
import InstagramLogo from '../assets/InstagramLogoWhite.png';
import siteconfig from '../configuration.yaml';

export default {
  data () {
    return {
      github: GitHubLogo,
      twitter: TwitterLogo,
      kofi: KofiLogo,
      instagram: InstagramLogo,
      discord: DiscordLogo,
      discordUsername: siteconfig[0].discord,
      text: 'Copied to clipboard!',
      snackbar: false,
      timeout: 1000,
    }
  },
  methods: {
    async copyURL(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
      } catch($e) {
        // console.error("Could not copy content to clipboard");
      }
    },
  }
}
</script>

<style>

.instagram{
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}

.white--text {
  width: 250px;
}

</style>
