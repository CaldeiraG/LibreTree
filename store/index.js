import fetch from 'node-fetch'
import siteconfig from '../configuration.yaml';

export const state = () => ({
  discordGuildName: '',
  redditSubreddit: '',
  hetrixtoolsTracker : '',
})

export const mutations = {
  setDiscordGuildName(state, data) {
    state.discordGuildName = data
  },
  setSubreddit(state, data) {
    state.redditSubreddit = data
  },
  setHetrixtoolsTracker(state, data) {
    state.hetrixtoolsTracker = data
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.discordGuildName) {
      commit('setDiscordGuildName', req.session.discordGuildName)
    }
    if (req.session && req.session.redditSubreddit) {
      commit('setSubreddit', req.session.redditSubreddit)
    }
  },
  async getDiscordGuildName({commit}) {
    try {
      const data = await fetch('https://discord.com/api/invites/' + siteconfig[0].discord_guild, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (data.status === 200 || data.status === 201) {
        const count = await data.json().then(res => res.guild.name)
        commit('setDiscordGuildName', count)
      }
    } catch (data) {
      if (data.response && data.response.status === 401) {
        console.error('Unauthorized!')
      }
    }
  },
  async getSubredditInfo({commit}) {
    try {
      const data = await fetch('https://api.reddit.com/r/' + siteconfig[0].reddit_subreddit + '/about', {
        method: 'GET',
      })
      if (data.status === 200 || data.status === 201) {
        const name = await data.json().then(res => res.data.display_name_prefixed)
        commit('setSubreddit', name)
      }
    } catch (data) {
      if (data.response && data.response.status === 401) {
        console.error('Unauthorized!')
      }
    }
  },
  async getHetrixtoolsTracker({commit}) {
    try {
      const data = await fetch('https://api.hetrixtools.com/v1/' + siteconfig[0].hetrixtools_token + '/uptime/report/' + siteconfig[0].hetrixtools_tracker, {
        method: 'GET',
      })
      if (data.status === 200 || data.status === 201) {
        const status = await data.json().then(res => res.data.Status)
        const uptime = await data.json().then(res => res.data.UptimeStatus)
        const uptimepercentage = await data.json().then(res => res.data.Uptime_Stats.Total.Uptime)

        // commit('setHetrixtoolsTracker', count)
      }
    } catch (data) {
      if (data.response && data.response.status === 401) {
        console.error('Unauthorized!')
      }
    }
  },
}

