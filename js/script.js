var img = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1200px-Earth_Eastern_Hemisphere.jpg";
var app = new Vue({
    
    el: "#root",
    data: {
        message: "hello world",
        image: img,
        resize: "image"
    },
    methods: {
        cambioImmagine() {
            if (this.image == img) {
                this.image = "https://img.huffingtonpost.com/asset/5d5a5b062400009a01b9fae0.jpeg?cache=AFJvAyaCyF&ops=scalefit_630_noupscale";
            } else {
                this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1200px-Earth_Eastern_Hemisphere.jpg";
            }
        }
    }
})
