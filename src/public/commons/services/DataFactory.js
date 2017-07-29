/**
 * Created by Marjo on 1/5/2016.
 */
angular
.module("commons")
.factory('DataFactory', function (
    Http,
    Constants,
    LocalStorage
) {
    var dataFactory = {};
    this.selectedImage = {};
    dataFactory.searchData =  {
        tag: "",
        userId: ""
    }
    dataFactory.photos = []
    dataFactory.searchs = LocalStorage.get("searchs") != null ? LocalStorage.get("searchs") : []

    dataFactory.getPhotos = (success, error, data) => {
        var user = ""
        if(data.userId) {
            user = "&user_id=" + data.userId
        }
        Http.GET(
            Constants.Url.API + "&per_page=" + data.per_page + "&page=" + data.page + "&tags=" + data.tag + user,
            {},
            success,
            error
        )
    };

    return dataFactory;
});
