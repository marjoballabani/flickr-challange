angular
.module("commons")
.constant('Constants', {
    Url: {
        PHOTOS: 'http://localhost:8081/jsons/photos.json',
        API: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9dccdbfb7ef0c99dcb1ed74cb929a685&sort=interestingness-desc&extras=date_upload%2C+date_taken%2C+owner_name%2C+views%2C+url_q&format=json&nojsoncallback=1'
    }
});
