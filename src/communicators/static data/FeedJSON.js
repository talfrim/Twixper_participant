// twitterApiCommunicator.js


//require("dotenv").config();
//console.log(process.env);

/*
var T = new Twit({
  consumer_key:         process.env.API_KEY,
  consumer_secret:      process.env.API_SECRET_KEY,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
})*/

//COMMENTING the following code because its only prpuse is writing 
//the feed to a fille. Then I copied the output to export at the end.

/*
console.log("running")
let Twit = require('twit')

var T = new Twit({
    consumer_key:         'OMF3C62ujk8hZhtBxs2PKR5qu',
    consumer_secret:      'HpNJkId1HCkj8LAnR9wgD7XRc9kddhz5vCvXTkoEmTbIpHNYLI',
    access_token:         '1238476547444572162-t8xwUcDloOjQDyFYKmOqe57JAi9y3q',
    access_token_secret:  'IuCVKE0scTYoY7KxJkvkQB7YtFzXohg7OHAtAI6WTJmfX',
})
var fs = require('fs');

console.log("function");
T.get('statuses/home_timeline', {count: 10},
  function gotData(err, data, response){
      //Write the data to file
      fs.writeFile('feedJSON10.txt', JSON.stringify(data), function (err) {
        if (err) console.log('Error in writing feed to file');
        console.log('Saved feed to file');
      });
  }
)*/


/*
export default {
  getHomeTimeline(){
      console.log("function");
      T.get('statuses/home_timeline', 
        function gotData(err, data, response){
            console.log(data)
        }
      );
  },
}
*/

/*CONTAINS BOTH TWEETS WITH "tweet+mode: extended" PARAMETERS AND WITHOUT THIS PARAMETER. */
exports.data = [
    {
        "created_at": "Wed Mar 03 15:31:13 +0000 2021",
        "id": 1367135482593837057,
        "id_str": "1367135482593837057",
        "full_text": "Let's get it! 💙\n\nYou can follow today's game live on CITY+ with a subscription - https://t.co/BfVGtMgtQW https://t.co/YM571qZL8k",
        "truncated": false,
        "display_text_range": [
            0,
            104
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
                {
                    "url": "https://t.co/BfVGtMgtQW",
                    "expanded_url": "https://www.mancity.com/citytv/city-plus/live",
                    "display_url": "mancity.com/citytv/city-pl…",
                    "indices": [
                        81,
                        104
                    ]
                },
                {
                    "url": "https://t.co/YM571qZL8k",
                    "expanded_url": "https://twitter.com/ManCityWomen/status/1367135182180990981",
                    "display_url": "twitter.com/ManCityWomen/s…",
                    "indices": [
                        105,
                        128
                    ]
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 14573900,
            "id_str": "14573900",
            "name": "Manchester City",
            "screen_name": "ManCity",
            "location": "Etihad Stadium",
            "description": "𝐸𝓈𝓉. 1894  💙 This Is Our City 🏆 6 x League Champions 🙌 #ManCity ℹ️ @ManCityHelp",
            "url": "https://t.co/iRkmKWEETz",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/iRkmKWEETz",
                            "expanded_url": "http://www.mancity.com/app",
                            "display_url": "mancity.com/app",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 9249835,
            "friends_count": 51547,
            "listed_count": 15035,
            "created_at": "Mon Apr 28 19:28:08 +0000 2008",
            "favourites_count": 14267,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 138479,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": true,
            "profile_background_color": "060606",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1339132670169804801/SeYDEWVq_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1339132670169804801/SeYDEWVq_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/14573900/1606121387",
            "profile_link_color": "81B2D5",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1367135182180990981,
        "quoted_status_id_str": "1367135182180990981",
        "quoted_status_permalink": {
            "url": "https://t.co/YM571qZL8k",
            "expanded": "https://twitter.com/ManCityWomen/status/1367135182180990981",
            "display": "twitter.com/ManCityWomen/s…"
        },
        "quoted_status": {
            "created_at": "Wed Mar 03 15:30:02 +0000 2021",
            "id": 1367135182180990981,
            "id_str": "1367135182180990981",
            "full_text": "Your City team to face Fiorentina! 💙\n\nXI | Roebuck, Bronze, Houghton (C), Dahlkemper, Greenwood, Coombs, Weir, Stanway, Kelly, Hemp, White\n\nSUBS | Taieb, Keating, Walsh, Mannion, Mewis, Lavelle, Beckie, Morgan, Davies\n\n🔷 #ManCity | https://t.co/HkTzfLv0HJ https://t.co/PTnCJbtyKk",
            "truncated": false,
            "display_text_range": [
                0,
                255
            ],
            "entities": {
                "hashtags": [
                    {
                        "text": "ManCity",
                        "indices": [
                            221,
                            229
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                    {
                        "url": "https://t.co/HkTzfLv0HJ",
                        "expanded_url": "http://mancity.com",
                        "display_url": "mancity.com",
                        "indices": [
                            232,
                            255
                        ]
                    }
                ],
                "media": [
                    {
                        "id": 1367131957264601090,
                        "id_str": "1367131957264601090",
                        "indices": [
                            256,
                            279
                        ],
                        "media_url": "http://pbs.twimg.com/media/EvkHRZHXUAIc7Y_.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/EvkHRZHXUAIc7Y_.jpg",
                        "url": "https://t.co/PTnCJbtyKk",
                        "display_url": "pic.twitter.com/PTnCJbtyKk",
                        "expanded_url": "https://twitter.com/ManCityWomen/status/1367135182180990981/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 680,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1080,
                                "h": 1080,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1080,
                                "h": 1080,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 1367131957264601090,
                        "id_str": "1367131957264601090",
                        "indices": [
                            256,
                            279
                        ],
                        "media_url": "http://pbs.twimg.com/media/EvkHRZHXUAIc7Y_.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/EvkHRZHXUAIc7Y_.jpg",
                        "url": "https://t.co/PTnCJbtyKk",
                        "display_url": "pic.twitter.com/PTnCJbtyKk",
                        "expanded_url": "https://twitter.com/ManCityWomen/status/1367135182180990981/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 680,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 1080,
                                "h": 1080,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1080,
                                "h": 1080,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 344643933,
                "id_str": "344643933",
                "name": "Man City Women",
                "screen_name": "ManCityWomen",
                "location": "Manchester",
                "description": "The official Manchester City Women match day account | Follow the women’s team beyond the game @ManCity | Supporter Services @ManCityHelp",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 142772,
                "friends_count": 908,
                "listed_count": 652,
                "created_at": "Fri Jul 29 11:07:23 +0000 2011",
                "favourites_count": 1789,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": true,
                "statuses_count": 23782,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "FFFFFF",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1339132770459717635/wVW7wVyk_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1339132770459717635/wVW7wVyk_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/344643933/1569141465",
                "profile_link_color": "002760",
                "profile_sidebar_border_color": "FFFFFF",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "000000",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 70,
            "favorite_count": 713,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
        },
        "retweet_count": 36,
        "favorite_count": 594,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Mar 04 04:40:17 +0000 2021",
        "id": 1367334055188992000,
        "id_str": "1367334055188992000",
        "full_text": "WHAAAAAATTTT?! 😃@JanetJackson https://t.co/SzUzxqgqoy",
        "truncated": false,
        "display_text_range": [
            0,
            29
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "JanetJackson",
                    "name": "Janet Jackson",
                    "id": 52939106,
                    "id_str": "52939106",
                    "indices": [
                        16,
                        29
                    ]
                }
            ],
            "urls": [
                {
                    "url": "https://t.co/SzUzxqgqoy",
                    "expanded_url": "https://twitter.com/variety/status/1367218673837109252",
                    "display_url": "twitter.com/variety/status…",
                    "indices": [
                        30,
                        53
                    ]
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 23314049,
            "id_str": "23314049",
            "name": "yvette nicole brown",
            "screen_name": "YNB",
            "location": "Fiddling with your mind",
            "description": "Just a scripted-line saying, game show playing, TV show talking, notebook hawking super blerd! ❤✊🏽 Wrote #AlwaysABridesmaid on @netflix",
            "url": "https://t.co/mbvt4lPcpt",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/mbvt4lPcpt",
                            "expanded_url": "http://fairfight.com",
                            "display_url": "fairfight.com",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 481557,
            "friends_count": 3124,
            "listed_count": 3941,
            "created_at": "Sun Mar 08 14:47:33 +0000 2009",
            "favourites_count": 53992,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 186294,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1342216202387484672/NfYjdpWn_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1342216202387484672/NfYjdpWn_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/23314049/1608844201",
            "profile_link_color": "0084B4",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1367218673837109252,
        "quoted_status_id_str": "1367218673837109252",
        "quoted_status_permalink": {
            "url": "https://t.co/SzUzxqgqoy",
            "expanded": "https://twitter.com/variety/status/1367218673837109252",
            "display": "twitter.com/variety/status…"
        },
        "quoted_status": {
            "created_at": "Wed Mar 03 21:01:48 +0000 2021",
            "id": 1367218673837109252,
            "id_str": "1367218673837109252",
            "full_text": "Janet Jackson Two-Night Documentary Event Set at Lifetime and A&amp;E https://t.co/KTPuq79d28",
            "truncated": false,
            "display_text_range": [
                0,
                93
            ],
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                    {
                        "url": "https://t.co/KTPuq79d28",
                        "expanded_url": "https://variety.com/2021/tv/news/janet-jackson-documentary-lifetime-ae-1234920992/",
                        "display_url": "variety.com/2021/tv/news/j…",
                        "indices": [
                            70,
                            93
                        ]
                    }
                ]
            },
            "source": "<a href=\"http://publicize.wp.com/\" rel=\"nofollow\">WordPress.com</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 17525171,
                "id_str": "17525171",
                "name": "Variety",
                "screen_name": "Variety",
                "location": "Los Angeles, CA",
                "description": "The business of entertainment.",
                "url": "https://t.co/8QkvN6A5Nf",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "https://t.co/8QkvN6A5Nf",
                                "expanded_url": "http://www.variety.com",
                                "display_url": "variety.com",
                                "indices": [
                                    0,
                                    23
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 2571070,
                "friends_count": 247705,
                "listed_count": 17617,
                "created_at": "Thu Nov 20 23:02:29 +0000 2008",
                "favourites_count": 1217,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": true,
                "statuses_count": 322036,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "FFFFFF",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1060236422500704257/jltNN1hQ_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1060236422500704257/jltNN1hQ_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/17525171/1614814860",
                "profile_link_color": "60728A",
                "profile_sidebar_border_color": "FFFFFF",
                "profile_sidebar_fill_color": "FFFFFF",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 707,
            "favorite_count": 1807,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
        },
        "retweet_count": 9,
        "favorite_count": 141,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:42:35 +0000 2020",
        "id": 1339687461107077120,
        "id_str": "1339687461107077120",
        "full_text": "RT @insider_reviews: 💰 New low: The @Fitbit Inspire 2 Activity Tracker is down to $70 at @target (originally $100) ➡️ https://t.co/briQK7nn…",
        "truncated": false,
        "display_text_range": [
            0,
            140
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "insider_reviews",
                    "name": "Insider Reviews",
                    "id": 2873888723,
                    "id_str": "2873888723",
                    "indices": [
                        3,
                        19
                    ]
                },
                {
                    "screen_name": "fitbit",
                    "name": "fitbit",
                    "id": 17424053,
                    "id_str": "17424053",
                    "indices": [
                        36,
                        43
                    ]
                },
                {
                    "screen_name": "Target",
                    "name": "Target",
                    "id": 89084561,
                    "id_str": "89084561",
                    "indices": [
                        89,
                        96
                    ]
                }
            ],
            "urls": []
        },
        "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3224616765,
            "id_str": "3224616765",
            "name": "Tech Insider",
            "screen_name": "techinsider",
            "location": "New York, USA",
            "description": "What you want to know about tech. A division of @thisisinsider. Follow us on Facebook, Instagram, and YouTube. Visit our homepage for the day's top stories.",
            "url": "http://t.co/Fp1fi3LC2G",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/Fp1fi3LC2G",
                            "expanded_url": "http://www.techinsider.io",
                            "display_url": "techinsider.io",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 337131,
            "friends_count": 467,
            "listed_count": 4089,
            "created_at": "Thu Apr 30 15:15:08 +0000 2015",
            "favourites_count": 824,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 80955,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1197961125641494529/MVjp8tHL_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1197961125641494529/MVjp8tHL_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3224616765/1549483972",
            "profile_link_color": "64C5F0",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
            "created_at": "Thu Dec 17 19:18:48 +0000 2020",
            "id": 1339651275688964097,
            "id_str": "1339651275688964097",
            "full_text": "💰 New low: The @Fitbit Inspire 2 Activity Tracker is down to $70 at @target (originally $100) ➡️ https://t.co/briQK7nnn4",
            "truncated": false,
            "display_text_range": [
                0,
                120
            ],
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "fitbit",
                        "name": "fitbit",
                        "id": 17424053,
                        "id_str": "17424053",
                        "indices": [
                            15,
                            22
                        ]
                    },
                    {
                        "screen_name": "Target",
                        "name": "Target",
                        "id": 89084561,
                        "id_str": "89084561",
                        "indices": [
                            68,
                            75
                        ]
                    }
                ],
                "urls": [
                    {
                        "url": "https://t.co/briQK7nnn4",
                        "expanded_url": "http://bit.ly/38cfkTt",
                        "display_url": "bit.ly/38cfkTt",
                        "indices": [
                            97,
                            120
                        ]
                    }
                ]
            },
            "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 2873888723,
                "id_str": "2873888723",
                "name": "Insider Reviews",
                "screen_name": "insider_reviews",
                "location": "New York, NY",
                "description": "Honest reviews of products and services. A division of @thisisinsider. When you buy through our links, we may earn money from our affiliate partners.",
                "url": "https://t.co/TkIDwDER4M",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "https://t.co/TkIDwDER4M",
                                "expanded_url": "https://www.businessinsider.com/reviews",
                                "display_url": "businessinsider.com/reviews",
                                "indices": [
                                    0,
                                    23
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 9526,
                "friends_count": 34,
                "listed_count": 134,
                "created_at": "Wed Nov 12 16:01:37 +0000 2014",
                "favourites_count": 331,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": true,
                "statuses_count": 14322,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1234951420937490433/pGMblHja_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234951420937490433/pGMblHja_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/2873888723/1564001442",
                "profile_link_color": "157491",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 1,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Nov 19 00:50:10 +0000 2020",
        "id": 1329225417539137537,
        "id_str": "1329225417539137537",
        "full_text": "עוד טעימה מהפרוייקט-אם גם אתם התעוררתם באמצע הלילה אני ממליץ לכם לתת מבט. עכשיו ההתלבטות היא האם להישאר ער עוד קצת ולראות את הדראפט של ים..\n@Madar2020 https://t.co/bJpEzPJmUP",
        "truncated": false,
        "display_text_range": [
            0,
            150
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "madar2020",
                    "name": "ali",
                    "id": 186947059,
                    "id_str": "186947059",
                    "indices": [
                        140,
                        150
                    ]
                }
            ],
            "urls": [
                {
                    "url": "https://t.co/bJpEzPJmUP",
                    "expanded_url": "https://twitter.com/TwixperApp/status/1329186802859712517",
                    "display_url": "twitter.com/TwixperApp/sta…",
                    "indices": [
                        151,
                        174
                    ]
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 1316854914820321282,
            "id_str": "1316854914820321282",
            "name": "Dekel Levy",
            "screen_name": "Dekellevy93",
            "location": "",
            "description": "4th year student of BSc in Software and Information Systems Engineering in BGU.\nCheck out my Senior Project @TwixperApp .\nHTA fan (well, nobody's perfect).",
            "url": "https://t.co/1YmH9O1NEb",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/1YmH9O1NEb",
                            "expanded_url": "https://www.linkedin.com/in/dekellevy/",
                            "display_url": "linkedin.com/in/dekellevy/",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 10,
            "friends_count": 18,
            "listed_count": 0,
            "created_at": "Thu Oct 15 21:34:31 +0000 2020",
            "favourites_count": 172,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 65,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1317003834913423360/Y1eOmZmW_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1317003834913423360/Y1eOmZmW_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1316854914820321282/1602850317",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1329186802859712517,
        "quoted_status_id_str": "1329186802859712517",
        "quoted_status_permalink": {
            "url": "https://t.co/bJpEzPJmUP",
            "expanded": "https://twitter.com/TwixperApp/status/1329186802859712517",
            "display": "twitter.com/TwixperApp/sta…"
        },
        "quoted_status": {
            "created_at": "Wed Nov 18 22:16:43 +0000 2020",
            "id": 1329186802859712517,
            "id_str": "1329186802859712517",
            "full_text": "Another look at our much-improved app, which is just a part of a powerful project.\nLatest main features:\n-Great visualization of photos and videos in a tweet.\n-Public user page. \n-Full tweet page\n-Search page, including tweets and users' search results.\nCheck out the demo below👇 https://t.co/Lu4yonTXvL",
            "truncated": false,
            "display_text_range": [
                0,
                279
            ],
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 1329186742570790913,
                        "id_str": "1329186742570790913",
                        "indices": [
                            280,
                            303
                        ],
                        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1329186742570790913/pu/img/SxJHk7r3K58euPDa.jpg",
                        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1329186742570790913/pu/img/SxJHk7r3K58euPDa.jpg",
                        "url": "https://t.co/Lu4yonTXvL",
                        "display_url": "pic.twitter.com/Lu4yonTXvL",
                        "expanded_url": "https://twitter.com/TwixperApp/status/1329186802859712517/video/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 440,
                                "h": 938,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 319,
                                "h": 680,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 440,
                                "h": 938,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 1329186742570790913,
                        "id_str": "1329186742570790913",
                        "indices": [
                            280,
                            303
                        ],
                        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1329186742570790913/pu/img/SxJHk7r3K58euPDa.jpg",
                        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1329186742570790913/pu/img/SxJHk7r3K58euPDa.jpg",
                        "url": "https://t.co/Lu4yonTXvL",
                        "display_url": "pic.twitter.com/Lu4yonTXvL",
                        "expanded_url": "https://twitter.com/TwixperApp/status/1329186802859712517/video/1",
                        "type": "video",
                        "sizes": {
                            "large": {
                                "w": 440,
                                "h": 938,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 319,
                                "h": 680,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 440,
                                "h": 938,
                                "resize": "fit"
                            }
                        },
                        "video_info": {
                            "aspect_ratio": [
                                220,
                                469
                            ],
                            "duration_millis": 79401,
                            "variants": [
                                {
                                    "bitrate": 632000,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/ext_tw_video/1329186742570790913/pu/vid/320x682/XHTVYSB7doJ63VMl.mp4?tag=10"
                                },
                                {
                                    "content_type": "application/x-mpegURL",
                                    "url": "https://video.twimg.com/ext_tw_video/1329186742570790913/pu/pl/9eVc5Stb0hXfhAG5.m3u8?tag=10"
                                },
                                {
                                    "bitrate": 832000,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/ext_tw_video/1329186742570790913/pu/vid/440x938/M6JdAnzVgiZbCkED.mp4?tag=10"
                                }
                            ]
                        },
                        "additional_media_info": {
                            "monetizable": false
                        }
                    }
                ]
            },
            "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 1316847294424199168,
                "id_str": "1316847294424199168",
                "name": "Twixper",
                "screen_name": "TwixperApp",
                "location": "",
                "description": "Twixper is a social-media experimentation app, currently in development process. We are coming soon!",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 11,
                "friends_count": 32,
                "listed_count": 0,
                "created_at": "Thu Oct 15 21:04:13 +0000 2020",
                "favourites_count": 23,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 6,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "F5F8FA",
                "profile_background_image_url": null,
                "profile_background_image_url_https": null,
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1316848349618860033/5ii_bkh9_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1316848349618860033/5ii_bkh9_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1316847294424199168/1602796117",
                "profile_link_color": "1DA1F2",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": true,
                "default_profile": true,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 1,
            "favorite_count": 3,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
        },
        "retweet_count": 0,
        "favorite_count": 2,
        "favorited": true,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "iw"
    },
    {
        "created_at": "Sun Dec 20 12:21:03 +0000 2020",
        "id": 1340633309093621761,
        "id_str": "1340633309093621761",
        "full_text": "It is true. @RealMerrinD blazed trails! ❤️ I watched her on television LONG before I started acting and we’re peers. She got in young and is STILL killing the game. \n\nShe WORKS! Ya hear me?! She WORKS! ❤️\n\n👏🏾👏🏾👏🏾👏🏾👏🏾👏🏾👏🏾👏🏾👏🏾 https://t.co/zH873x9ZEJ",
        "truncated": false,
        "display_text_range": [
            0,
            224
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "RealMerrinD",
                    "name": "Merrin Christmas!🎅🏾🎄",
                    "id": 418455326,
                    "id_str": "418455326",
                    "indices": [
                        12,
                        24
                    ]
                }
            ],
            "urls": [
                {
                    "url": "https://t.co/zH873x9ZEJ",
                    "expanded_url": "https://twitter.com/realmerrind/status/1340380048742703105",
                    "display_url": "twitter.com/realmerrind/st…",
                    "indices": [
                        225,
                        248
                    ]
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 23314049,
            "id_str": "23314049",
            "name": "yvette nicole brown",
            "screen_name": "YNB",
            "location": "Fiddling with your mind",
            "description": "Just a scripted-line saying, game show playing, TV show talking, notebook hawking super blerd! #StayWoke ❤✊🏽 #AlwaysABridesmaid on @netflix",
            "url": "https://t.co/2hxFMNIpad",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/2hxFMNIpad",
                            "expanded_url": "https://secure.actblue.com/donate/walkingdeadlive",
                            "display_url": "secure.actblue.com/donate/walking…",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 478962,
            "friends_count": 3017,
            "listed_count": 3965,
            "created_at": "Sun Mar 08 14:47:33 +0000 2009",
            "favourites_count": 50861,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 179090,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1330996124434329600/VzG9q-1R_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1330996124434329600/VzG9q-1R_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/23314049/1606169180",
            "profile_link_color": "0084B4",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1340380048742703105,
        "quoted_status_id_str": "1340380048742703105",
        "quoted_status_permalink": {
            "url": "https://t.co/zH873x9ZEJ",
            "expanded": "https://twitter.com/realmerrind/status/1340380048742703105",
            "display": "twitter.com/realmerrind/st…"
        },
        "quoted_status": {
            "created_at": "Sat Dec 19 19:34:41 +0000 2020",
            "id": 1340380048742703105,
            "id_str": "1340380048742703105",
            "full_text": "It’s true. \n#everywhere https://t.co/F65OAvCZ1i",
            "truncated": false,
            "display_text_range": [
                0,
                23
            ],
            "entities": {
                "hashtags": [
                    {
                        "text": "everywhere",
                        "indices": [
                            12,
                            23
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                    {
                        "url": "https://t.co/F65OAvCZ1i",
                        "expanded_url": "https://twitter.com/keenie2020/status/1340369694356889602",
                        "display_url": "twitter.com/keenie2020/sta…",
                        "indices": [
                            24,
                            47
                        ]
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 418455326,
                "id_str": "418455326",
                "name": "Merrin Christmas!🎅🏾🎄",
                "screen_name": "RealMerrinD",
                "location": "Probably on your tv right now ",
                "description": "No cuts, no buts, no coconuts. She/her",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 28930,
                "friends_count": 964,
                "listed_count": 312,
                "created_at": "Tue Nov 22 06:01:16 +0000 2011",
                "favourites_count": 78172,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": true,
                "statuses_count": 19666,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "CACDB8",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
                "profile_background_tile": true,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1326576445754277888/jHZr2oy5_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1326576445754277888/jHZr2oy5_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/418455326/1606660961",
                "profile_link_color": "F5ABB5",
                "profile_sidebar_border_color": "4B9C96",
                "profile_sidebar_fill_color": "491D3E",
                "profile_text_color": "E97E6E",
                "profile_use_background_image": true,
                "has_extended_profile": true,
                "default_profile": false,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": true,
            "quoted_status_id": 1340369694356889602,
            "quoted_status_id_str": "1340369694356889602",
            "quoted_status_permalink": {
                "url": "https://t.co/F65OAvCZ1i",
                "expanded": "https://twitter.com/keenie2020/status/1340369694356889602",
                "display": "twitter.com/keenie2020/sta…"
            },
            "retweet_count": 0,
            "favorite_count": 65,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
        },
        "retweet_count": 0,
        "favorite_count": 20,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Sun Dec 20 12:15:22 +0000 2020",
        "id": 1340631877942571009,
        "id_str": "1340631877942571009",
        "full_text": "This energy. \nThis dragging. \nThis truth. https://t.co/iNxCdnECpJ",
        "truncated": false,
        "display_text_range": [
            0,
            41
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
                {
                    "url": "https://t.co/iNxCdnECpJ",
                    "expanded_url": "https://twitter.com/ufwupdates/status/1340629945165307904",
                    "display_url": "twitter.com/ufwupdates/sta…",
                    "indices": [
                        42,
                        65
                    ]
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 23314049,
            "id_str": "23314049",
            "name": "yvette nicole brown",
            "screen_name": "YNB",
            "location": "Fiddling with your mind",
            "description": "Just a scripted-line saying, game show playing, TV show talking, notebook hawking super blerd! #StayWoke ❤✊🏽 #AlwaysABridesmaid on @netflix",
            "url": "https://t.co/2hxFMNIpad",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/2hxFMNIpad",
                            "expanded_url": "https://secure.actblue.com/donate/walkingdeadlive",
                            "display_url": "secure.actblue.com/donate/walking…",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 478962,
            "friends_count": 3017,
            "listed_count": 3965,
            "created_at": "Sun Mar 08 14:47:33 +0000 2009",
            "favourites_count": 50861,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 179090,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1330996124434329600/VzG9q-1R_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1330996124434329600/VzG9q-1R_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/23314049/1606169180",
            "profile_link_color": "0084B4",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 1340629945165307904,
        "quoted_status_id_str": "1340629945165307904",
        "quoted_status_permalink": {
            "url": "https://t.co/iNxCdnECpJ",
            "expanded": "https://twitter.com/ufwupdates/status/1340629945165307904",
            "display": "twitter.com/ufwupdates/sta…"
        },
        "quoted_status": {
            "created_at": "Sun Dec 20 12:07:41 +0000 2020",
            "id": 1340629945165307904,
            "id_str": "1340629945165307904",
            "full_text": "Good morning to Justice González and Justice González only  https://t.co/vsYgurNqCn https://t.co/Q97S7TCPfu",
            "truncated": false,
            "display_text_range": [
                0,
                107
            ],
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                    {
                        "url": "https://t.co/Q97S7TCPfu",
                        "expanded_url": "https://twitter.com/UFWupdates/status/1324510174774661120",
                        "display_url": "twitter.com/UFWupdates/sta…",
                        "indices": [
                            84,
                            107
                        ]
                    }
                ],
                "media": [
                    {
                        "id": 1324528745156284417,
                        "id_str": "1324528745156284417",
                        "indices": [
                            60,
                            83
                        ],
                        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1324528745156284417/pu/img/Wx_G-Plq0Oged5CG.jpg",
                        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1324528745156284417/pu/img/Wx_G-Plq0Oged5CG.jpg",
                        "url": "https://t.co/vsYgurNqCn",
                        "display_url": "pic.twitter.com/vsYgurNqCn",
                        "expanded_url": "https://twitter.com/straterize/status/1324528916833316865/video/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 1040,
                                "h": 584,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 382,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1040,
                                "h": 584,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 1324528916833316865,
                        "source_status_id_str": "1324528916833316865",
                        "source_user_id": 806334038554202112,
                        "source_user_id_str": "806334038554202112"
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 1324528745156284417,
                        "id_str": "1324528745156284417",
                        "indices": [
                            60,
                            83
                        ],
                        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1324528745156284417/pu/img/Wx_G-Plq0Oged5CG.jpg",
                        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1324528745156284417/pu/img/Wx_G-Plq0Oged5CG.jpg",
                        "url": "https://t.co/vsYgurNqCn",
                        "display_url": "pic.twitter.com/vsYgurNqCn",
                        "expanded_url": "https://twitter.com/straterize/status/1324528916833316865/video/1",
                        "type": "video",
                        "sizes": {
                            "large": {
                                "w": 1040,
                                "h": 584,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 382,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1040,
                                "h": 584,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 1324528916833316865,
                        "source_status_id_str": "1324528916833316865",
                        "source_user_id": 806334038554202112,
                        "source_user_id_str": "806334038554202112",
                        "video_info": {
                            "aspect_ratio": [
                                130,
                                73
                            ],
                            "duration_millis": 69795,
                            "variants": [
                                {
                                    "bitrate": 2176000,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/ext_tw_video/1324528745156284417/pu/vid/1040x584/RXnSHUfy3j3XC_HS.mp4?tag=10"
                                },
                                {
                                    "bitrate": 832000,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/ext_tw_video/1324528745156284417/pu/vid/640x360/kxIb1EA1XQk61W6-.mp4?tag=10"
                                },
                                {
                                    "content_type": "application/x-mpegURL",
                                    "url": "https://video.twimg.com/ext_tw_video/1324528745156284417/pu/pl/SvvlUu6ZcU67qPy5.m3u8?tag=10"
                                },
                                {
                                    "bitrate": 256000,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/ext_tw_video/1324528745156284417/pu/vid/480x270/IjIrwPy_TfAO86EF.mp4?tag=10"
                                }
                            ]
                        },
                        "additional_media_info": {
                            "monetizable": false,
                            "source_user": {
                                "id": 806334038554202112,
                                "id_str": "806334038554202112",
                                "name": "(probably) not your mom",
                                "screen_name": "straterize",
                                "location": "",
                                "description": "a shark • progressive organizer • 2-cat lesbian • personal acct, personal opinions • she/her",
                                "url": null,
                                "entities": {
                                    "description": {
                                        "urls": []
                                    }
                                },
                                "protected": false,
                                "followers_count": 504,
                                "friends_count": 858,
                                "listed_count": 1,
                                "created_at": "Wed Dec 07 03:06:30 +0000 2016",
                                "favourites_count": 25364,
                                "utc_offset": null,
                                "time_zone": null,
                                "geo_enabled": true,
                                "verified": false,
                                "statuses_count": 8708,
                                "lang": null,
                                "contributors_enabled": false,
                                "is_translator": false,
                                "is_translation_enabled": false,
                                "profile_background_color": "F5F8FA",
                                "profile_background_image_url": null,
                                "profile_background_image_url_https": null,
                                "profile_background_tile": false,
                                "profile_image_url": "http://pbs.twimg.com/profile_images/1266541704082939910/8ZMWoR4l_normal.jpg",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1266541704082939910/8ZMWoR4l_normal.jpg",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/806334038554202112/1586570577",
                                "profile_link_color": "1DA1F2",
                                "profile_sidebar_border_color": "C0DEED",
                                "profile_sidebar_fill_color": "DDEEF6",
                                "profile_text_color": "333333",
                                "profile_use_background_image": true,
                                "has_extended_profile": true,
                                "default_profile": true,
                                "default_profile_image": false,
                                "following": false,
                                "follow_request_sent": false,
                                "notifications": false,
                                "translator_type": "none"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 16316895,
                "id_str": "16316895",
                "name": "United Farm Workers",
                "screen_name": "UFWupdates",
                "location": "California",
                "description": "United Farm Workers of America (UFW): Fighting for farm worker rights since 1962. Si Se Puede! ® RT≠Endorsement",
                "url": "https://t.co/i4thyPvseu",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "https://t.co/i4thyPvseu",
                                "expanded_url": "http://www.ufw.org",
                                "display_url": "ufw.org",
                                "indices": [
                                    0,
                                    23
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 96830,
                "friends_count": 4307,
                "listed_count": 745,
                "created_at": "Tue Sep 16 20:18:19 +0000 2008",
                "favourites_count": 41713,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 31947,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "F00E21",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": true,
                "profile_image_url": "http://pbs.twimg.com/profile_images/306656052/Flag_twitter1_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/306656052/Flag_twitter1_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/16316895/1348164671",
                "profile_link_color": "0084B4",
                "profile_sidebar_border_color": "FFFFFF",
                "profile_sidebar_fill_color": "8D9986",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": true,
            "quoted_status_id": 1324510174774661120,
            "quoted_status_id_str": "1324510174774661120",
            "quoted_status_permalink": {
                "url": "https://t.co/Q97S7TCPfu",
                "expanded": "https://twitter.com/UFWupdates/status/1324510174774661120",
                "display": "twitter.com/UFWupdates/sta…"
            },
            "retweet_count": 34,
            "favorite_count": 165,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "cs"
        },
        "retweet_count": 12,
        "favorite_count": 122,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:39:38 +0000 2020",
        "id": 1339686716530188294,
        "id_str": "1339686716530188294",
        "full_text": "🔄 A second change as we approach the final 10 minutes — @Donny_Beek6 is on for @B_Fernandes8!\n\n🔴 #MUFC\n#️⃣ #SHUMUN\n🏆 #PL https://t.co/wUAbWrtGs9",
        "truncated": false,
        "display_text_range": [
            0,
            120
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "MUFC",
                    "indices": [
                        97,
                        102
                    ]
                },
                {
                    "text": "SHUMUN",
                    "indices": [
                        107,
                        114
                    ]
                },
                {
                    "text": "PL",
                    "indices": [
                        117,
                        120
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "Donny_beek6",
                    "name": "Donny van de Beek",
                    "id": 1699890626,
                    "id_str": "1699890626",
                    "indices": [
                        56,
                        68
                    ]
                },
                {
                    "screen_name": "B_Fernandes8",
                    "name": "Bruno Fernandes",
                    "id": 1123232834376933376,
                    "id_str": "1123232834376933376",
                    "indices": [
                        79,
                        92
                    ]
                }
            ],
            "urls": [],
            "media": [
                {
                    "id": 1339686355274768386,
                    "id_str": "1339686355274768386",
                    "indices": [
                        121,
                        144
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeFpGSXIAIJAVj.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeFpGSXIAIJAVj.jpg",
                    "url": "https://t.co/wUAbWrtGs9",
                    "display_url": "pic.twitter.com/wUAbWrtGs9",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339686716530188294/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1280,
                            "h": 720,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339686355274768386,
                    "id_str": "1339686355274768386",
                    "indices": [
                        121,
                        144
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeFpGSXIAIJAVj.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeFpGSXIAIJAVj.jpg",
                    "url": "https://t.co/wUAbWrtGs9",
                    "display_url": "pic.twitter.com/wUAbWrtGs9",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339686716530188294/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1280,
                            "h": 720,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 558797310,
            "id_str": "558797310",
            "name": "Manchester United",
            "screen_name": "ManUtd",
            "location": "Manchester, England",
            "description": "Official #MUFC account 🔴⚪⚫ Find out the latest news from around the club ⤵",
            "url": "https://t.co/y0CpzwkC1c",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/y0CpzwkC1c",
                            "expanded_url": "http://manutd.co/ManUtdApp",
                            "display_url": "manutd.co/ManUtdApp",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 23960274,
            "friends_count": 148,
            "listed_count": 21661,
            "created_at": "Fri Apr 20 15:17:43 +0000 2012",
            "favourites_count": 3118,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 63179,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/558797310/1608134178",
            "profile_link_color": "B30000",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 86,
        "favorite_count": 1022,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
{
        "created_at": "Sun Nov 15 10:27:30 +0000 2020",
        "id": 1327921158386315264,
        "id_str": "1327921158386315264",
        "full_text": "7️⃣ whole years of @JillScottJS8! \n\n#OnThisDay in 2013, we signed the one and only Jill Scott! 🙌\n\n🔷 #ManCity | https://t.co/axa0klD5re https://t.co/k8FTSOSh1l",
        "truncated": false,
        "display_text_range": [
            0,
            134
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "OnThisDay",
                    "indices": [
                        36,
                        46
                    ]
                },
                {
                    "text": "ManCity",
                    "indices": [
                        100,
                        108
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "JillScottJS8",
                    "name": "Jill Scott MBE",
                    "id": 73983778,
                    "id_str": "73983778",
                    "indices": [
                        19,
                        32
                    ]
                }
            ],
            "urls": [
                {
                    "url": "https://t.co/axa0klD5re",
                    "expanded_url": "http://mancity.com",
                    "display_url": "mancity.com",
                    "indices": [
                        111,
                        134
                    ]
                }
            ],
            "media": [
                {
                    "id": 1327918268267507713,
                    "id_str": "1327918268267507713",
                    "indices": [
                        135,
                        158
                    ],
                    "media_url": "http://pbs.twimg.com/tweet_video_thumb/Em22oR7WMAE7Gi7.jpg",
                    "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/Em22oR7WMAE7Gi7.jpg",
                    "url": "https://t.co/k8FTSOSh1l",
                    "display_url": "pic.twitter.com/k8FTSOSh1l",
                    "expanded_url": "https://twitter.com/ManCity/status/1327921158386315264/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1038,
                            "h": 778,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 510,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1038,
                            "h": 778,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1327918268267507713,
                    "id_str": "1327918268267507713",
                    "indices": [
                        135,
                        158
                    ],
                    "media_url": "http://pbs.twimg.com/tweet_video_thumb/Em22oR7WMAE7Gi7.jpg",
                    "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/Em22oR7WMAE7Gi7.jpg",
                    "url": "https://t.co/k8FTSOSh1l",
                    "display_url": "pic.twitter.com/k8FTSOSh1l",
                    "expanded_url": "https://twitter.com/ManCity/status/1327921158386315264/photo/1",
                    "type": "animated_gif",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1038,
                            "h": 778,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 510,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1038,
                            "h": 778,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            519,
                            389
                        ],
                        "variants": [
                            {
                                "bitrate": 0,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/tweet_video/Em22oR7WMAE7Gi7.mp4"
                            }
                        ]
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 14573900,
            "id_str": "14573900",
            "name": "Manchester City",
            "screen_name": "ManCity",
            "location": "Etihad Stadium",
            "description": "𝐸𝓈𝓉. 1894  💙 This Is Our City 🏆 6 x League Champions 🙌 #ManCity ℹ️ @ManCityHelp",
            "url": "https://t.co/rZckZ8PABr",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/rZckZ8PABr",
                            "expanded_url": "http://www.mancity.com/city+",
                            "display_url": "mancity.com/city+",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 8690190,
            "friends_count": 51837,
            "listed_count": 14684,
            "created_at": "Mon Apr 28 19:28:08 +0000 2008",
            "favourites_count": 13685,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 135020,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": true,
            "profile_background_color": "060606",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319230083371065344/_WS47oVD_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319230083371065344/_WS47oVD_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/14573900/1602505147",
            "profile_link_color": "81B2D5",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 42,
        "favorite_count": 789,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    {
        "created_at": "Mon Oct 26 15:32:13 +0000 2020",
        "id": 1320750085811113985,
        "id_str": "1320750085811113985",
        "full_text": "ביום רביעי הבא נניח הצעה לפיזור הכנסת. לא עוד שבועיים, לא עוד חודש, לא עוד 45 יום, יום רביעי הבא תונח על שולחן הכנסת הצעה לפיזור הכנסת. אם עד אז לא יעבור תקציב אין לי ספק, שהפעם אנשי כחול לבן יעמדו במילתם, יצביעו איתנו, נפזר את הכנסת, נשלח את הממשלה האיומה הביתה ונלך לבחירות. https://t.co/pqxZjsg2lr",
        "truncated": false,
        "display_text_range": [
            0,
            276
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1320749550185943042,
                    "id_str": "1320749550185943042",
                    "indices": [
                        277,
                        300
                    ],
                    "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1320749550185943042/pu/img/gaaYrC0P3BRx4G3q.jpg",
                    "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1320749550185943042/pu/img/gaaYrC0P3BRx4G3q.jpg",
                    "url": "https://t.co/pqxZjsg2lr",
                    "display_url": "pic.twitter.com/pqxZjsg2lr",
                    "expanded_url": "https://twitter.com/yairlapid/status/1320750085811113985/video/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1280,
                            "h": 720,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1320749550185943042,
                    "id_str": "1320749550185943042",
                    "indices": [
                        277,
                        300
                    ],
                    "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1320749550185943042/pu/img/gaaYrC0P3BRx4G3q.jpg",
                    "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1320749550185943042/pu/img/gaaYrC0P3BRx4G3q.jpg",
                    "url": "https://t.co/pqxZjsg2lr",
                    "display_url": "pic.twitter.com/pqxZjsg2lr",
                    "expanded_url": "https://twitter.com/yairlapid/status/1320750085811113985/video/1",
                    "type": "video",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1280,
                            "h": 720,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            16,
                            9
                        ],
                        "duration_millis": 27834,
                        "variants": [
                            {
                                "bitrate": 256000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1320749550185943042/pu/vid/480x270/W1y7Hp15llS0RH4r.mp4?tag=10"
                            },
                            {
                                "bitrate": 2176000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1320749550185943042/pu/vid/1280x720/WYL-g1jlYEkZYy9Q.mp4?tag=10"
                            },
                            {
                                "content_type": "application/x-mpegURL",
                                "url": "https://video.twimg.com/ext_tw_video/1320749550185943042/pu/pl/NZa-J45vWANS1siO.m3u8?tag=10"
                            },
                            {
                                "bitrate": 832000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1320749550185943042/pu/vid/640x360/NIoGS37d8Xm4i3Cb.mp4?tag=10"
                            }
                        ]
                    },
                    "additional_media_info": {
                        "monetizable": false
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 2946300174,
            "id_str": "2946300174",
            "name": "יאיר לפיד - Yair Lapid",
            "screen_name": "yairlapid",
            "location": "ישראל",
            "description": "ראש האופוזיציה • חבר כנסת • יו״ר יש עתיד - תל\"ם • Yair Lapid - Member of Knesset and Chairperson of Yesh Atid",
            "url": "https://t.co/NAKeERt2K2",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/NAKeERt2K2",
                            "expanded_url": "http://www.yeshatid.org.il",
                            "display_url": "yeshatid.org.il",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 224866,
            "friends_count": 173,
            "listed_count": 406,
            "created_at": "Sun Dec 28 12:22:24 +0000 2014",
            "favourites_count": 141,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 4103,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1244262677163257857/tXYybiqv_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1244262677163257857/tXYybiqv_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/2946300174/1585490316",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 2,
        "favorite_count": 75,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "iw"
    },
    {
        "created_at": "Sun Nov 15 14:30:29 +0000 2020",
        "id": 1327982305730760704,
        "id_str": "1327982305730760704",
        "full_text": "Honours even 🔵🔴\n\nWatch all the best bits from a thrilling Manchester derby! 👇\n\n🔷 #ManCity | https://t.co/axa0klD5re https://t.co/GMAS665cgp",
        "truncated": false,
        "display_text_range": [
            0,
            115
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "ManCity",
                    "indices": [
                        81,
                        89
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [
                {
                    "url": "https://t.co/axa0klD5re",
                    "expanded_url": "http://mancity.com",
                    "display_url": "mancity.com",
                    "indices": [
                        92,
                        115
                    ]
                }
            ],
            "media": [
                {
                    "id": 1327982162524692481,
                    "id_str": "1327982162524692481",
                    "indices": [
                        116,
                        139
                    ],
                    "media_url": "http://pbs.twimg.com/media/Em3wyFRXcAAB96l.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Em3wyFRXcAAB96l.jpg",
                    "url": "https://t.co/GMAS665cgp",
                    "display_url": "pic.twitter.com/GMAS665cgp",
                    "expanded_url": "https://twitter.com/ManCity/status/1327982305730760704/video/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1920,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1327982162524692481,
                    "id_str": "1327982162524692481",
                    "indices": [
                        116,
                        139
                    ],
                    "media_url": "http://pbs.twimg.com/media/Em3wyFRXcAAB96l.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Em3wyFRXcAAB96l.jpg",
                    "url": "https://t.co/GMAS665cgp",
                    "display_url": "pic.twitter.com/GMAS665cgp",
                    "expanded_url": "https://twitter.com/ManCity/status/1327982305730760704/video/1",
                    "type": "video",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1920,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            16,
                            9
                        ],
                        "duration_millis": 117680,
                        "variants": [
                            {
                                "content_type": "application/x-mpegURL",
                                "url": "https://video.twimg.com/amplify_video/1327982162524692481/pl/48sq3u5qq0ERsbB_.m3u8?tag=13"
                            },
                            {
                                "bitrate": 288000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/1327982162524692481/vid/480x270/M5ostLWzanC9bSgJ.mp4?tag=13"
                            },
                            {
                                "bitrate": 2176000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/1327982162524692481/vid/1280x720/ev-TBZxZtaw1aEGM.mp4?tag=13"
                            },
                            {
                                "bitrate": 832000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/1327982162524692481/vid/640x360/sFmeHSaszV_6xqFo.mp4?tag=13"
                            }
                        ]
                    },
                    "additional_media_info": {
                        "title": "FA WSL HIGHLIGHTS | UNITED V CITY ",
                        "monetizable": true
                    }
                }
            ]
        },
        "source": "<a href=\"http://grabyo.com\" rel=\"nofollow\">Grabyo</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 14573900,
            "id_str": "14573900",
            "name": "Manchester City",
            "screen_name": "ManCity",
            "location": "Etihad Stadium",
            "description": "𝐸𝓈𝓉. 1894  💙 This Is Our City 🏆 6 x League Champions 🙌 #ManCity ℹ️ @ManCityHelp",
            "url": "https://t.co/rZckZ8PABr",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/rZckZ8PABr",
                            "expanded_url": "http://www.mancity.com/city+",
                            "display_url": "mancity.com/city+",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 8690190,
            "friends_count": 51837,
            "listed_count": 14684,
            "created_at": "Mon Apr 28 19:28:08 +0000 2008",
            "favourites_count": 13685,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 135020,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": true,
            "profile_background_color": "060606",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319230083371065344/_WS47oVD_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319230083371065344/_WS47oVD_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/14573900/1602505147",
            "profile_link_color": "81B2D5",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 14,
        "favorite_count": 517,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    
]