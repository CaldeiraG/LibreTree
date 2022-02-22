// import siteconfig from "../configuration.yaml"
const fs = require('fs');
const yaml = require('js-yaml');

export default function(req, res, next) {

  const siteconfig = yaml.loadAll(fs.readFileSync('./configuration.yaml', 'utf8'));

  const redirects = [
    {
      from: "/github",
      to: "https://github.com/" + siteconfig[0].github
    },
    {
      from: "/twitter",
      to: "https://twitter.com/" + siteconfig[0].twitter
    },
    {
      from: "/kofi",
      to: "https://ko-fi.com/" + siteconfig[0].kofi
    },
    {
      from: "/instagram",
      to: "https://instagram.com/" + siteconfig[0].instagram
    },
    {
      from: "/stackoverflow",
      to: "https://stackoverflow.com/users/" + siteconfig[0].stackoverflowid
    },
    {
      from: "/gitlab",
      to: "https://gitlab.com/" + siteconfig[0].gitlab
    },
    {
      from: "/slack",
      to: "https://slack.com/" + siteconfig[0].slack
    },
    {
      from: "/linkedin",
      to: "https://linkedin.com/in/" + siteconfig[0].linkedin
    },
    {
      from: "/email",
      to: "mailto:" + siteconfig[0].email
    },
    {
      from: "/reddit",
      to: "https://reddit.com/u/" + siteconfig[0].reddit
    },
    {
      from: "/paypal",
      to: "https://paypal.me/" + siteconfig[0].paypal
    },
    {
      from: '/venmo',
      to: 'https://venmo.com/' + siteconfig[0].venmo
    },
    {
      from: '/patreon',
      to: 'https://www.patreon.com/' + siteconfig[0].patreon
    },
    {
      from: '/wakatime',
      to: 'https://wakatime.com/' + siteconfig[0].wakatime
    }
  ]
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
