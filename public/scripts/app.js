/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
// Test / driver code (temporary). Eventually will get this from the server.
  var tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
]

  function createTweetElement(tweet) {
    return $(`<article class="tweet">
                  <header>
                    <img class="profile-photo" src="${tweet.user.avatars.small}" width="50px" height="50px">
                    <h2 class='username'>${tweet.user.name}</h2>
                    <h5>${tweet.user.handle}</h5>
                  </header>

                  <div class="tweet-body"><p>${tweet.content.text}</p></div>

                  <footer>
                    <p>${moment(tweet.created_at).fromNow()}</p>
                    <div class="buttons">
                      <img class="flag" src="/images/flag.png" />
                      <img class="retweet" src="/images/retweet.png"  />
                      <img class="favourite" src="/images/heart.png" />
                    </div>
                  </footer>
                </article>`)
  }


  function renderTweets(tweets) {
    for (tweet of tweets) {
      let $tweet = createTweetElement(tweet)
      $('#tweet-log').prepend($tweet)
    }
  }

  renderTweets(tweetData)

  // Test / driver code (temporary)
   // to see what it looks like
   // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})