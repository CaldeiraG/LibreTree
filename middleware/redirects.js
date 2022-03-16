// import siteconfig from "../configuration.yaml"
const fs = require('fs');
const yaml = require('js-yaml');

export default function(req, res, next) {

  const siteconfig = yaml.loadAll(fs.readFileSync('./configuration.yaml', 'utf8'));

  const redirects = [
    {
      from: "/github",
      to: "https://github.com/"
    },
    {
      from: "/twitter",
      to: "https://twitter.com/"
    },
    {
      from: "/kofi",
      to: "https://ko-fi.com/"
    },
    {
      from: "/instagram",
      to: "https://instagram.com/"
    },
    {
      from: "/stackoverflow",
      to: "https://stackoverflow.com/users/"
    },
    {
      from: "/gitlab",
      to: "https://gitlab.com/"
    },
    {
      from: "/slack",
      to: "https://slack.com/"
    },
    {
      from: "/linkedin",
      to: "https://linkedin.com/in/"
    },
    {
      from: "/email",
      to: "mailto:"
    },
    {
      from: "/reddit",
      to: "https://reddit.com/u/"
    },
    {
      from: "/paypal",
      to: "https://paypal.me/"
    },
    {
      from: '/venmo',
      to: 'https://venmo.com/'
    },
    {
      from: '/patreon',
      to: 'https://www.patreon.com/'
    },
    {
      from: '/wakatime',
      to: 'https://wakatime.com/'
    },
    {
      from: '/tshirt',
      to: siteconfig[0].tshirt
    },
    {
      from: '/bandcamp',
      to: 'https://' + siteconfig[0].bandcamp + '.bandcamp.com/'
    },
    {
      from: '/spotify',
      to: 'https://open.spotify.com/user/'
    },
    {
      from: '/cashapp',
      to: 'https://cash.app/$'
    },
    {
      from: '/gitea',
      to: 'gitea.com/'
    },
    {
      from: '/sponsorblock',
      to: 'https://sb.ltn.fi/username/'
    },
    {
      from: '/onlyfans',
      to: 'https://onlyfans.com/'
    },
    {
      from: '/soundcloud',
      to: 'https://soundcloud.com/'
    },
    {
      from: '/twitch',
      to: 'https://twitch.tv/'
    },
    {
      from: '/youtube',
      to: 'https://youtube.com/c/'
    },
    {
      from: '/telegram',
      to: 'https://t.me/'
    },
    {
      from: '/discord',
      to: 'https://discord.gg/'
    },
    {
      from: '/subreddit',
      to: 'https://reddit.com/r/'
    }
  ]
  const url = req.url.split('/');
  const redirect = redirects.find((r) => r.from === '/' + url[1])
  if (redirect) {
    res.writeHead(301, { Location: redirect.to + url[2] })
    res.end()
  } else {
    next()
  }
}
