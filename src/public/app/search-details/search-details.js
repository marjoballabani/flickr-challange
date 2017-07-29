angular
.module('app')
.component('searchDetails', {
    templateUrl: 'app/search-details/search-details.html',
    controller: function (
        DataFactory
    ) {
        this.photos = []
        this.selectedImage = DataFactory.selectedImage
        this.pagination = 10
        this.page = 1


        /**
         * get list of photos
         */
        this.search = () => {
            DataFactory.getPhotos((success) => {
                console.log(success.data)
                    if(this.page == 1) {
                        this.photos = success.data.photos.photo
                    } else {
                        var tmp = this.photos.concat(success.data.photos.photo)
                        this.photos = tmp
                    }
            },(error) => {
                alert(error.data)
            },{
                per_page: this.pagination,
                page: this.page,
                tag: this.selectedImage.tag,
                userId: this.selectedImage.userId
            })
        }

        /**
         * Call API to load more
         */
        this.loadMore = () => {
            this.page++;
            this.search();
        }

        /**
         * Autamitc call when controller starts
         */
        this.search()
    }
});
