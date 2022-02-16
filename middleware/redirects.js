import siteconfig from "~/configuration.yaml"

export default function(req, res, next) {
  const redirects = [
    {
      from: "/github",
      to: "https://github.com/" + siteconfig[0].github
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
