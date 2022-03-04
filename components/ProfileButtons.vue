<template>
  <div>
    <v-btn v-if="githubUsername != null" alt="GitHub" elevation="2" x-large color="#383838" href="github" class="white--text ma-1"><img width="24" height="24" :src="github" class="ma-1"/> {{githubUsername}}</v-btn>
    <v-btn v-if="twitterUsername != null" alt="Twitter" elevation="2" x-large color="#1DA1F2" href="twitter" class="white--text ma-1"><img width="24" height="20" :src="twitter" class="ma-1"/>{{twitterUsername}}</v-btn>
    <v-btn v-if="kofiUsername != null" alt="Ko-Fi" elevation="2" x-large color="#FF5E5B" href="kofi" class="white--text ma-1"><img width="24" height="24" :src="kofi" class="ma-1"/>{{kofiUsername}}</v-btn>
    <v-btn v-if="instagramUsername != null" alt="Instagram" elevation="2" x-large href="instagram" class="white--text instagram ma-1"><img width="24" height="24" :src="instagram" class="ma-1"/>{{instagramUsername}}</v-btn>
    <v-btn v-if="stackoverflowUsername != null" alt="Stack Overflow" elevation="2" x-large color="#242729" href="stackoverflow" class="white--text ma-1"><svg aria-hidden="true" class="svg-icon iconLogoGlyphXSm ma-1" width="24" height="24" viewBox="0 0 18 18"><path d="M14 16v-5h2v7H2v-7h2v5h10Z" fill="#BCBBBB"/><path d="m12.09.72-1.21.9 4.5 6.07 1.22-.9L12.09.71ZM5 15h8v-2H5v2Zm9.15-5.87L8.35 4.3l.96-1.16 5.8 4.83-.96 1.16Zm-7.7-1.47 6.85 3.19.63-1.37-6.85-3.2-.63 1.38Zm6.53 5L5.4 11.39l.38-1.67 7.42 1.48-.22 1.46Z" fill="#F48024"/></svg>{{stackoverflowUsername}}</v-btn>
    <v-btn v-if="gitlabUsername != null" alt="Gitlab" elevation="2" x-large color="#6E49CB" href="gitlab" class="white--text ma-1"><svg aria-hidden="true" class="svg-icon iconGitLab ma-1" width="24" height="24" viewBox="0 0 18 18"><path d="m17 10-1-3-2-6c.21-.07-.19-.07 0 0l-2 6H6L4 1c.19-.07-.21-.07 0 0L2 7l-1 3c-.05-.17.04.11 0 0l8 6 8-6c-.04.11.05-.17 0 0Z" fill="#E65328"/></svg>{{gitlabUsername}}</v-btn>
    <v-btn v-if="slackUsername != null" alt="Slack" elevation="2" x-large color="#4A154B" href="slack" class="white--text ma-1"><svg aria-hidden="true" class="svg-icon iconSlack ma-1" width="24" height="24" viewBox="0 0 18 18"><path d="M6.5 16A1.5 1.5 0 0 1 5 14.5v-4a1.5 1.5 0 1 1 3 0v4c0 .83-.67 1.5-1.5 1.5Zm-4-4a1.5 1.5 0 0 1 0-3H4v1.5c0 .83-.67 1.5-1.5 1.5Z" fill="#E01E5A"/><path d="M2.5 5h4a1.5 1.5 0 1 1 0 3h-4a1.5 1.5 0 1 1 0-3Zm4-4C7.33 1 8 1.67 8 2.5V4H6.5a1.5 1.5 0 1 1 0-3Z" fill="#36C5F0"/><path d="M10.5 9h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1 0-3Zm0 7A1.5 1.5 0 0 1 9 14.5V13h1.5a1.5 1.5 0 0 1 0 3Z" fill="#ECB22E"/><path d="M10.5 1c.83 0 1.5.67 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4c0-.83.67-1.5 1.5-1.5Zm4 4a1.5 1.5 0 0 1 0 3H13V6.5c0-.83.67-1.5 1.5-1.5Z" fill="#2EB67D"/></svg>{{slackUsername}}</v-btn>
    <v-btn v-if="linkedinUsername != null" alt="LinkedIn" elevation="2" x-large color="#F0B7A8" href="linkedin" class="white--text ma-1"><svg aria-hidden="true" class="svg-icon iconLinkedIn ma-1" width="24" height="24" viewBox="0 0 18 18"><path d="M15 1a2 2 0 0 1 2 1.85V15a2 2 0 0 1-1.85 2H3a2 2 0 0 1-2-1.85V3a2 2 0 0 1 1.85-2H15Zm-3.21 5.8c-1.09 0-1.83.56-2.19 1.13l-.06.11h-.03V7H7.23v7.63H9.6v-3.77c0-1 .2-1.96 1.43-1.96 1.16 0 1.23 1.04 1.23 1.9v3.83h2.37v-4.19c0-2.05-.44-3.63-2.84-3.63ZM5.75 7H3.37v7.63h2.38V7Zm-1.2-3.8a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75Z" fill="#1178B3"/></svg>{{linkedinUsername}}</v-btn>
    <v-btn v-if="mail != null" alt="Email" elevation="2" x-large color="#C71610" href="email" class="white--text ma-1"><svg aria-hidden="true" class="svg-icon iconMail ma-1" width="24" height="24" viewBox="0 0 18 18"><path d="m1 6 8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6Z"/></svg>Email</v-btn>
    <v-btn v-if="redditUsername != null" alt="Reddit" elevation="2" x-large color="#7A9299" href="reddit" class="white--text ma-1"><img width="24" height="24" :src="reddit" class="ma-1"/> {{redditUsername}}</v-btn>
    <v-btn v-if="payPalUsername != null" alt="PayPal" elevation="2" x-large color="#007C85" href="paypal" class="white--text ma-1"><img width="24" height="24" :src="paypal" class="ma-1"/> {{payPalUsername}}</v-btn>
    <v-btn v-if="venmoUsername != null" alt="Venmo" elevation="2" x-large color="#73777D" href="venmo" class="white--text ma-1"><img width="24" height="24" :src="venmo" class="ma-1"/> {{venmoUsername}}</v-btn>
    <v-btn v-if="patreonUsername != null" alt="Patreon" elevation="2" x-large color="#FF424D" href="patreon" class="white--text ma-1"><img width="24" height="24" :src="patreon" class="ma-1"/> {{patreonUsername}}</v-btn>
    <v-btn v-if="wakatimeUsername != null" alt="Wakatime" elevation="2" x-large color="#0088CC" href="wakatime" class="white--text ma-1"><img width="24" height="24" :src="wakatime" class="ma-1"/> {{wakatimeUsername}}</v-btn>
    <v-btn v-if="bandcampUsername != null" alt="Bandcamp" elevation="2" x-large color="#629AA9" href="bandcamp" class="white--text ma-1"><img width="24" height="24" :src="bandcamp" class="ma-1"/> {{bandcampUsername}}</v-btn>
    <v-btn v-if="spotifyUsername != null" alt="Spotify" elevation="2" x-large color="#1DB954" href="spotify" class="white--text ma-1"><img width="24" height="24" :src="spotify" class="ma-1"/> {{spotifyUsername}}</v-btn>
    <v-btn v-if="cashappUsername != null" alt="Cash App" elevation="2" x-large color="#222423" href="cashapp" class="white--text ma-1"><img width="24" height="24" :src="cashapp" class="ma-1"/> {{cashappUsername}}</v-btn>
    <v-btn v-if="giteaUsername != null" alt="Gitea" elevation="2" x-large color="#264D73" href="gitea" class="white--text ma-1"><img width="24" height="24" :src="gitea" class="ma-1"/> {{giteaUsername}}</v-btn>
    <v-btn v-if="sponsorblockUsername != null" alt="Sponsorblock" elevation="2" x-large color="#F7931E" href="sponsorblock" class="white--text ma-1"><img width="24" height="24" :src="sponsorblock" class="ma-1"/> {{sponsorblockUsername}}</v-btn>
    <v-btn v-if="onlyfansUsername != null" alt="OnlyFans" elevation="2" x-large color="#003057" href="onlyfans" class="white--text ma-1"><img width="24" height="24" :src="onlyfans" class="ma-1"/> {{onlyfansUsername}}</v-btn>
    <v-btn v-if="soundcloudUsername != null" alt="Soundcloud" elevation="2" x-large color="#FF5519" href="soundcloud" class="white--text ma-1"><img width="24" height="24" :src="soundcloud" class="ma-1"/> {{soundcloudUsername}}</v-btn>
    <v-btn v-if="telegramUsername != null" alt="Telegram" elevation="2" x-large color="#26A4E2" href="telegram" class="white--text ma-1"><img width="24" height="24" :src="telegram" class="ma-1"/> {{telegramUsername}}</v-btn>
    <v-btn v-if="twitchUsername != null" alt="Twitch" elevation="2" x-large color="#6441A5" href="twitch" class="white--text ma-1"><img width="21" height="24" :src="twitch" class="ma-1"/> {{twitchUsername}}</v-btn>
    <v-btn v-if="youtubeUsername != null" alt="Youtube" elevation="2" x-large color="#FF0000" href="youtube" class="white--text ma-1"><img width="24" height="17" :src="youtube" class="ma-1"/> {{youtubeUsername}}</v-btn>
    <v-btn v-if="tshirtUsername != null" alt="T-Shirt" elevation="2" x-large color="#FF5733" href="tshirt" class="white--text ma-1"><img width="24" height="24" :src="tshirt" class="ma-1"/>T-Shirts</v-btn>
    <v-btn v-if="discordGuild != null" alt="Discord Guild" elevation="2" x-large color="#5865F2" href="discord" class="white--text ma-1 whitespace"><img width="21" height="24" :src="discord" class="ma-1"/><span class="ma-1">{{$store.state.discordGuildName}}</span></v-btn>
    <v-btn v-if="discordUsername != null" alt="Discord" elevation="2" x-large color="#5865F2" class="white--text discord ma-1" @click="copyURL(discordUsername); snackbar = true"><img width="21" height="24" :src="discord" class="ma-1"/>{{ discordUsername }}</v-btn>
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
    </v-snackbar>
    <v-btn alt="Portfolio" color="#328723" elevation="2" x-large href="" class="white--text ma-1"><v-icon class="ma-1">mdi-book-open-outline</v-icon>Portfolio</v-btn>
<!--    <div class="ma-1">Coming soon</div>-->
  </div>
</template>

<script>

import DiscordLogo from '../assets/DiscordWhite.png';
import GitHubLogo from '../assets/GitHub-Mark-Light-32px.png';
import TwitterLogo from '../assets/TwitterLogoWhite.png';
import KofiLogo from '../assets/KofiWhite.png';
import InstagramLogo from '../assets/InstagramLogoWhite.png';
import RedditLogo from '../assets/Reddit_Mark_OnWhite.png';
import PayPalLogo from '../assets/PP_Icon.png';
import VenmoLogo from '../assets/Venmo_Icon.png';
import PatreonLogo from '../assets/Digital-Patreon-Logo_White.png';
import WakatimeLogo from '../assets/WakaTime.png';
import TshirtLogo from '../assets/icons8-t-shirt-50.png';
import BandcampLogo from '../assets/bandcamp-button-circle-grey-32.png';
import SpotifyLogo from '../assets/Spotify_Icon_RGB_White.png';
import CashAppLogo from '../assets/CashAppIcon.png';
import GiteaLogo from '../assets/gitea.svg';
import SponsorblockLogo from '../assets/IconSponsorBlocker256px.png';
import OnlyFansLogo from '../assets/OnlyFans_Social_Icon_Circle_White.png';
import SoundcloudLogo from '../assets/soundcloud24px.png';
import TelegramLogo from '../assets/TelegramLogo.png';
import TwitchLogo from '../assets/TwitchGlitchBlackOps.png';
import YoutubeLogo from '../assets/youtube_social_icon_dark.png';

import siteconfig from '../configuration.yaml';

export default {
  data () {
    return {
      github: GitHubLogo,
      twitter: TwitterLogo,
      kofi: KofiLogo,
      instagram: InstagramLogo,
      discord: DiscordLogo,
      reddit: RedditLogo,
      paypal: PayPalLogo,
      venmo: VenmoLogo,
      patreon: PatreonLogo,
      wakatime: WakatimeLogo,
      tshirt: TshirtLogo,
      bandcamp: BandcampLogo,
      spotify: SpotifyLogo,
      cashapp: CashAppLogo,
      gitea: GiteaLogo,
      sponsorblock: SponsorblockLogo,
      onlyfans: OnlyFansLogo,
      soundcloud: SoundcloudLogo,
      telegram: TelegramLogo,
      twitch: TwitchLogo,
      youtube: YoutubeLogo,
      discordUsername: siteconfig[0].discord,
      githubUsername: siteconfig[0].github,
      twitterUsername: siteconfig[0].twitter,
      kofiUsername: siteconfig[0].kofi,
      instagramUsername: siteconfig[0].instagram,
      stackoverflowUsername: siteconfig[0].stackoverflow,
      gitlabUsername: siteconfig[0].gitlab,
      slackUsername: siteconfig[0].slack,
      linkedinUsername: siteconfig[0].linkedin,
      redditUsername: siteconfig[0].reddit,
      payPalUsername: siteconfig[0].paypal,
      venmoUsername: siteconfig[0].venmo,
      patreonUsername: siteconfig[0].patreon,
      wakatimeUsername: siteconfig[0].wakatime,
      tshirtUsername: siteconfig[0].tshirt,
      bandcampUsername: siteconfig[0].bandcamp,
      spotifyUsername: siteconfig[0].spotify,
      cashappUsername: siteconfig[0].cashapp,
      giteaUsername: siteconfig[0].gitea,
      sponsorblockUsername: siteconfig[0].sponsorblock,
      onlyfansUsername: siteconfig[0].onlyfans,
      soundcloudUsername: siteconfig[0].soundcloud,
      telegramUsername: siteconfig[0].telegram,
      twitchUsername: siteconfig[0].twitch,
      youtubeUsername: siteconfig[0].youtube,
      discordGuild: siteconfig[0].discord_guild,
      mail: siteconfig[0].mail,
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
  },
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

.v-btn__content { width: 100%; white-space: normal; }

</style>
