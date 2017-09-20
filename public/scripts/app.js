/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
// Test / driver code (temporary). Eventually will get this from the server.
// ########## FUNCTIONS

  function createTweetElement(tweet) {
    return $(`<article class="tweet">
                  <header>
                    <img class="profile-photo" src="${tweet.user.avatars.small}" width="50px" height="50px">
                    <h2 class='username'>${tweet.user.name}</h2>
                    <h5>${tweet.user.handle}</h5>
                  </header>

                  <div class="tweet-body"><p></p></div>

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
      $('#tweet-log').find(".tweet-body p:first").text(tweet.content.text)
    }
  }

  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function (tweetData) {
        renderTweets(tweetData)
      }
    })
  }

// ########## EVENT HANDLERS
  var $form = $('.tweet-input')
  $form.on('submit', function(event){
    event.preventDefault()
    var tweetInput = $form.serialize()
    if ($('form > textarea').val() === '') {
      $('#error-message').empty()
      $('#error-message').text('Nothing to tweet!')

    } else if ($('form > textarea').val().length > 140) {
      $('#error-message').empty()
      $('#error-message').text('Please enter less than 140 characters.')

    } else {
      $('#error-message').empty()
      $('tweet-log').empty()
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: tweetInput
      })
    loadTweets()
    }
  })




  // Test / driver code (temporary)
   // to see what it looks like
   // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})