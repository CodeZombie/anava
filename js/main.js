var app = new Vue({
    el: '#app',
    data: {
      videos: [ {title: "Journey", id: "occNBvPCbBA"}, 
                {title: "Happiness is inside", id: "KLVK7moIPU8"},
                {title: "Music is my life", id: "Ok993rCKfy8"},
                {title: "How to paint", id: "Ltys7M8rwq0"}
      ],
      player: {visible: false, video: null}
    },
    methods: {
        getThumbnail: function(video) {
            return "https://img.youtube.com/vi/" + video.id + "/mqdefault.jpg"
        },
        getEmbedURL: function(video) {
            return "https://www.youtube.com/embed/" + this.player.video.id + "?&autoplay=1";
        },
        showVideoPlayer: function(video) {
            if(video == null || video.id == "") {
                console.log("ERROR: Invalid video, cannot start player.")
                return;
            }
            document.body.style.backgroundColor = "#1b1b1d";
            this.player.video = video;
            this.player.visible = true;
            window.scrollTo(0, 0); 
        },

        showVideoList: function() {
            document.body.style.backgroundColor = "#FFF";
            this.player.visible = false;
        }
    }
  });