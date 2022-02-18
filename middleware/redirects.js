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
