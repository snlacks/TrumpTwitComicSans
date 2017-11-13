(function(){/** trumpTweets: NodeList */
    let trumpsTweets  = document.querySelectorAll('[data-screen-name="realDonaldTrump"] .tweet-text')

    for (let tweet of trumpsTweets) {
        tweet.style.fontFamily = 'Comic Sans MS';
 }
})();