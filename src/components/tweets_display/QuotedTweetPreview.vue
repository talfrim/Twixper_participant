<template>
    <div class="quoted-tweet-wrapper" ref="quotedTweetWrapper">
        <div
            class="user-header-container"
            @click="clickedTweet"
        >
            <div class="user-avatar" v-lazyload>
                <img :data-url="author.profileImgUrl">
            </div>
            <h4>
                {{author.userFullName}} 
                <i v-if="author.isVerified" class="fas fa-check-circle"></i> 
                <span class="usernameSpan">@{{author.userName}}</span>
            </h4>
            <span class="time-span">&#183; {{time}}</span>
		</div>

        <TweetPreviewBody 
            :isQuotedTweet="true"
            :tweetPreview="qTweetPreview" 
            @clickedTweet="clickedTweet"
        />
    </div>
</template>

<script>
import {parseTwitterDateFunc} from "../../assets/globalFunctions";

export default {
    components:{
        TweetPreviewBody: () => import('./TweetPreviewBody.vue')
    },
    props:{
        qTweetPreview: {
			type: Object,
			required: true
		}
    },
    data(){
        return{
            tweetId: "",
			time: "",
			author:{
				userFullName: "",
				userName: "",
				profileImgUrl: "",
				isVerified: false
			},
        }
    },
    created(){
        const tweetPrev = this.qTweetPreview;
        this.tweetId = tweetPrev.id_str;
        this.time = parseTwitterDateFunc(tweetPrev.created_at);

        const userJson = tweetPrev.user;
		this.author.userFullName = userJson.name;
		this.author.userName = userJson.screen_name;
		this.author.profileImgUrl = userJson.profile_image_url_https;
		this.author.isVerified = userJson.verified;	
    },
    methods:{
        clickedTweet(){
            // Redirect to tweet page
            this.$refs.quotedTweetWrapper.style.backgroundColor = "rgba(0,0,0,0.1)"
            setTimeout( () =>{
                this.$root.setViewTweetFullAction(this.tweetId) // log the action
				this.$router.push({ path: '/tweetPage/'+this.tweetId})
            }
			, 400)
        }
    }
}
</script>

<style scoped src="../../assets/css/QuotedTweetPreview.css">

</style>