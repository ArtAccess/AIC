function giveAppliedFeedback() {
    document.getElementById('apply-alert').style.visibility = "visible";
}

function closeFeedback() {
    document.getElementById('apply-alert').style.visibility = "hidden";
}

// function querySearch() {
//     const baseURL = 'https://aggregator-data.artic.edu/api/v1/artworks/search?q=';
//     let term = document.getElementById('search');
//     if (event.keyCode == 13) {
//         console.log("Yello", term.value);

//         let tombstoneElement;
//         let titleElement;
//         let artistElement;


//         tombstoneElement = document.getElementById('tombstone');
//         titleElement = document.getElementById('title');
//         artistElement = document.getElementById('artist');
//         artworkContainer = document.getElementById('artwork-container');
//         imageLink = document.getElementById('imageLink');

//         let search1 = "flowers";
//         let search2 = "van gogh";

//         let found_flowers = term.value.toLowerCase().includes(search1.toLowerCase());
//         let found_van = term.value.toLowerCase().includes(search2.toLowerCase());
//         if (found_flowers) {
//             artistElement.innerHTML = "Kurt Seligmann";
//             titleElement.innerHTML = "Exotic garden, c. 1954";
//             imageLink.setAttribute('src', "https://www.artic.edu/iiif/2/fef8bb75-6989-ad03-51b8-c8c7279bbc2a/full/800,/0/default.jpg")
//             document.getElementById("artwork-url").setAttribute('href', "https://www.artic.edu/artworks/62315/exotic-garden");
//         }
//         if (found_van) {
//             artistElement.innerHTML = "Vincent van Gogh";
//             titleElement.innerHTML = "Self-Portrait, 1887";
//             imageLink.setAttribute('src', "https://www.artic.edu/iiif/2/d650ba2f-db7d-8450-ca2a-b7f0806ef9b9/full/1000,/0/default.jpg")
//             document.getElementById("artwork-url").setAttribute('href', "https://www.artic.edu/artworks/80607/self-portrait");
//         }

//     }
//TODO: Make search dynamic
//    const searchQuery = baseURL + term.value;
//    console.log(searchQuery);
//
//   // LocalStorage keys for reference
//    const savedResponseKey = 'response';
//
//    // Settings for cache aggressiveness
//    const artworksToPrefetch = 50;
//
//    let tombstoneElement;
//    let titleElement;
//    let artistElement;
//
//
//    tombstoneElement = document.getElementById('tombstone');
//    titleElement = document.getElementById('title');
//    artistElement = document.getElementById('artist');
//    artworkContainer = document.getElementById('artwork-container');
//    imageLink = document.getElementById('imageLink');
//    console.log("1",artistElement,imageLink);
//
//    // https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
//    // ...returns `null` if not found. JSON.parsing `null` also returns `null`
//    let savedResponse = JSON.parse(localStorage.getItem(savedResponseKey));
//
//    if (savedResponse !== null) {
//        if (savedResponse.data.length > 0) {
//            return processResponse(savedResponse);
//        }
//    }
//
//    getJson(searchQuery, getQuery(), processResponse);
//
//    function getJson(url, body, callback) {
//        let request = new XMLHttpRequest();
//        request.open('POST', url, true);
//        request.setRequestHeader('Content-Type', 'application/json');
//        request.onreadystatechange = function () {
//            if (this.readyState === 4 && this.status === 200) {
//                callback(JSON.parse(this.responseText));
//            }
//        };
//        request.send(JSON.stringify(body));
//    }
//
//    /**
//     * Remove one artwork from the response and save it to LocalStorage.
//     */
//    function processResponse(response) {
//        console.log(response.data);
//        let artwork = response.data[0];
//        response.data = response.data.slice(1);
//        localStorage.setItem(savedResponseKey, JSON.stringify(response));
//        console.log("Artwork", artwork);
//        updatePage(artwork);
//    }
//
//    function updatePage(artwork) {
//        let artistPrint = [artwork.artist_title, artwork.date_display].filter(function (el) {
//            return el != null;
//        }).join(', ');
//        let titlePrint = artwork.title ? artwork.title : "";
//
//        let linkToArtwork = 'https://www.artic.edu/artworks/' + artwork.id + '/' + titleToLink(titlePrint);
//
//        let linkToImage = getIIIFLevel(artwork, 500);
//
//        artistElement.innerHTML = artistPrint;
//        titleElement.innerHTML = titlePrint;
//        imageLink.setAttribute('src', linkToImage.url)
//        tombstoneElement.setAttribute('href', linkToArtwork);
//        document.getElementById("artwork-url").setAttribute('href', linkToArtwork);
//
//    }
//
//    //this formats the image url
//    //uses iiif: https://openseadragon.github.io/examples/tilesource-legacy/
//    function getIIIFLevel(artwork, displayWidth) {
//        return {
//            url: 'https://www.artic.edu/iiif/2/' + artwork.image_id + '/full/' + displayWidth + ',/0/default.jpg',
//            width: displayWidth,
//            height: Math.floor(artwork.thumbnail.height * displayWidth / artwork.thumbnail.width),
////        };
//    }
//
//
//    function getQuery() {
//        return {
//            "resources": "artworks",
//            "fields": [
//                "id",
//                "title",
//                "artist_title",
//                "image_id",
//                "date_display",
//                "thumbnail"
//            ],
//            "boost": false,
//            "limit": artworksToPrefetch,
//            "query": {
//                "function_score": {
//                    "query": {
//                        "bool": {
//                            "filter": [
//                                {
//                                    "term": {
//                                        "is_public_domain": true
//                                    },
//                                },
//                                {
//                                    "exists": {
//                                        "field": "image_id",
//                                    },
//                                },
//                                {
//                                    "exists": {
//                                        "field": "thumbnail.width",
//                                    },
//                                },
//                                {
//                                    "exists": {
//                                        "field": "thumbnail.height",
//                                    },
//                                },
//                            ],
//                        },
//                    },
//                    "boost_mode": "replace",
//                    "random_score": {
//                        "field": "id"
//                    },
//                },
//            },
//        };
//    }
//
//    function titleToLink(text) {
//        return text.toString().toLowerCase()
//            .replace(/\s+/g, '-')           // Replace spaces with -
//            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
//            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
//            .replace(/^-+/, '')             // Trim - from start of text
//            .replace(/-+$/, '');            // Trim - from end of text
//    }
//
//    }

// };

function spinNoMore() {
    let spinner;
    spinner = document.getElementById('spinme');
    spinner.innerHTML = "";
}

function getArt() {
    $(this).html(
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
    );
    // LocalStorage keys for reference
    const savedResponseKey = 'response';

    // Settings for cache aggressiveness
    const artworksToPrefetch = 50;

    let tombstoneElement;
    let titleElement;
    let artistElement;
    let spinner;


    tombstoneElement = document.getElementById('tombstone');
    titleElement = document.getElementById('title');
    artistElement = document.getElementById('artist');
    artworkContainer = document.getElementById('artwork-container');
    imageLink = document.getElementById('imageLink');




    let term = document.getElementById('search').value;
    // console.log(term);

    let search1 = "flowers";
    let search2 = "van gogh";

    if (term) {
        spinner = document.getElementById('spinme');
        spinner.innerHTML = `<span class="spinner-border text-primary" role="status" aria-hidden="true"></span>`;
        setTimeout(spinNoMore, 300);

        let found_flowers = term.toLowerCase().includes(search1);
        let found_van = term.toLowerCase().includes(search2);

        if (found_flowers) {
            artistElement.innerHTML = "Kurt Seligmann";
            titleElement.innerHTML = "Exotic garden, c. 1954";
            imageLink.setAttribute('src', "https://www.artic.edu/iiif/2/fef8bb75-6989-ad03-51b8-c8c7279bbc2a/full/800,/0/default.jpg")
            document.getElementById("artwork-url").setAttribute('href', "https://www.artic.edu/artworks/62315/exotic-garden");
        }
        if (found_van) {
            artistElement.innerHTML = "Vincent van Gogh";
            titleElement.innerHTML = "Self-Portrait, 1887";
            imageLink.setAttribute('src', "https://www.artic.edu/iiif/2/d650ba2f-db7d-8450-ca2a-b7f0806ef9b9/full/1000,/0/default.jpg")
            document.getElementById("artwork-url").setAttribute('href', "https://www.artic.edu/artworks/80607/self-portrait");
        } else {
            console.log(tombstoneElement);
            console.log(artworkContainer);
            // https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
            // ...returns `null` if not found. JSON.parsing `null` also returns `null`
            let savedResponse = JSON.parse(localStorage.getItem(savedResponseKey));
            if (savedResponse !== null) {
                if (savedResponse.data.length > 0) {
                    return processResponse(savedResponse);
                }
            }

            getJson('https://aggregator-data.artic.edu/api/v1/search', getQuery(), processResponse);

            function getJson(url, body, callback) {
                let request = new XMLHttpRequest();
                request.open('POST', url, true);
                request.setRequestHeader('Content-Type', 'application/json');
                request.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                        callback(JSON.parse(this.responseText));
                    }
                };
                request.send(JSON.stringify(body));
            }

            /**
             * Remove one artwork from the response and save it to LocalStorage.
             */
            function processResponse(response) {
                let artwork = response.data[0];
                response.data = response.data.slice(1);
                localStorage.setItem(savedResponseKey, JSON.stringify(response));
                updatePage(artwork);
            }

            function updatePage(artwork) {
                let artistPrint = [artwork.artist_title, artwork.date_display].filter(function(el) {
                    return el != null;
                }).join(', ');
                let titlePrint = artwork.title ? artwork.title : "";

                let linkToArtwork = 'https://www.artic.edu/artworks/' + artwork.id + '/' + titleToLink(titlePrint);

                let linkToImage = getIIIFLevel(artwork, 500);

                artistElement.innerHTML = artistPrint;
                titleElement.innerHTML = titlePrint;
                imageLink.setAttribute('src', linkToImage.url)
                tombstoneElement.setAttribute('href', linkToArtwork);
                document.getElementById("artwork-url").setAttribute('href', linkToArtwork);

            }

            //this formats the image url
            //uses iiif: https://openseadragon.github.io/examples/tilesource-legacy/
            function getIIIFLevel(artwork, displayWidth) {
                return {
                    url: 'https://www.artic.edu/iiif/2/' + artwork.image_id + '/full/' + displayWidth + ',/0/default.jpg',
                    width: displayWidth,
                    height: Math.floor(artwork.thumbnail.height * displayWidth / artwork.thumbnail.width),
                };

            }


        }



    }


    function getQuery() {
        return {
            "resources": "artworks",
            "fields": [
                "id",
                "title",
                "artist_title",
                "image_id",
                "date_display",
                "thumbnail"
            ],
            "boost": false,
            "limit": artworksToPrefetch,
            "query": {
                "function_score": {
                    "query": {
                        "bool": {
                            "filter": [{
                                    "term": {
                                        "is_public_domain": true
                                    },
                                },
                                {
                                    "exists": {
                                        "field": "image_id",
                                    },
                                },
                                {
                                    "exists": {
                                        "field": "thumbnail.width",
                                    },
                                },
                                {
                                    "exists": {
                                        "field": "thumbnail.height",
                                    },
                                },
                            ],
                        },
                    },
                    "boost_mode": "replace",
                    "random_score": {
                        "field": "id"
                    },
                },
            },
        };
    }

    function titleToLink(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }


};