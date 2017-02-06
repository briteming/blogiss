var showPosts = function (conf) {
  return window.fetch(`https://api.github.com/repos/${conf.user}/${conf.repo}/issues`)
  .then(function (response) {
    // Convert to JSON
    return response.json()
  })
  
}
var loadConfig = function () {
  return window.fetch('https://raw.githubusercontent.com/FredWe/blogiss/master/config.json')
  .then(function (response) {
    // Convert to JSON
    return response.json()
  })
}

loadConfig().then(function (conf) {
  console.log(conf)

  conf.username
  conf.repo
})
