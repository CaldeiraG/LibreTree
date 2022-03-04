import fetch from 'node-fetch'
import siteconfig from '../configuration.yaml';

export const state = () => ({
  discordGuildName: '',
})

export const mutations = {
  setDiscordGuildName(state, data) {
    state.discordGuildName = data
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.discordGuildName) {
      commit('setDiscordGuildName', req.session.discordGuildName)
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
}

