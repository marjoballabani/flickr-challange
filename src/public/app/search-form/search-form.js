angular
.module('app')
.component('searchForm', {
    templateUrl: 'app/search-form/search-form.html',
    controller: function (
        DataFactory,
        LocalStorage,
        $state
    ) {
        this.searchs = DataFactory.searchs
        this.selectedImage = DataFactory.selectedImage
        this.order = "views"
        this.searchData = DataFactory.searchData =  {
            tag: "",
            userId: ""
        }

        /**
         * Search for a photo
         */
        this.search = () => {
            DataFactory.getPhotos((success) => {
                console.log(success.data)
                if(success.data.photos.photo.length > 0) {
                    this.saveFilter(success.data.photos.photo[0])
                }
            },(error) => {
                console.log(error)
            },{
                per_page: 12,
                pag: 1, tag: this.searchData.tag,
                userId: this.searchData.userId
            })

        }

        /**
         * Save filter to local storage
         * We save only this to to use as less as possible localstorage mmemory
         */
        this.saveFilter = (data) => {
            var temp = {
                tag: this.searchData.tag,
                url: data.url_q,
                owner: data.ownername,
                uploaded: data.dateupload,
                taken: data.datetaken,
                views: data.views,
            }
            this.searchs.push(temp)
            LocalStorage.set("searchs", this.searchs)
            this.searchData.tag = ""
            this.searchData.userId = ""
        }

        /**
         * Select image from tags
         */
        this.selectImage = (selected) => {
            this.selectedImage = DataFactory.selectedImage = selected;
            $state.go("app.details")
        }

        /**
         * Order tags by
         */
        this.setOrder= (order) => {
            this.order = order
        }
    }
});
