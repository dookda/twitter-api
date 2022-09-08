const express = require('express')
const app = express()

const { TwitterClient } = require('twitter-api-client')

const twitterClient = new TwitterClient({
      apiKey: 'process.env.TWITTER_API_KEY',
      apiSecret: 'process.env.TWITTER_API_SECRET',
      accessToken: 'process.env.TWITTER_ACCESS_TOKEN',
      accessTokenSecret: 'process.env.TWITTER_ACCESS_TOKEN_SECRET'
})

app.get('/api/getdata', (req, res) => {
      console.log("ddd")
})

module.exports = app