$.ajax({
    url:"https://www.googleapis.com/youtube/v3/playlistItems",
    dataType:'jsonp',
    data:{
        part: "snippet",
        key: "AIzaSyAa0MDtm5PVOMRm24Xj5FHzB06gXLgGQ5E",
        maxResult: 5,
        playlistId: "PLkA_G8ICbFiiFyqdafuGDXyM8CF77dmat"
    }
})

.success(function(data){

    let items = data.items;
    console.log(items);

    $(items).each(function(index,data){

        // let thumb = data.snippet.thumbnais.high.url;
        // if(!thumb) thumb = "img/default.jpg"
        
        $("#vidGallery")
            .append(
                $("<article>")
                    .append(
                        $("<a>").attr({ href: data.snippet.resourceId.videoId})
                            .append(
                                $("<img>").attr({ src: data.snippet.thumbnails.high.url})
                            ),
                        $("<div class='con'>")
                                .append(
                                    $("<h2>").text(data.snippet.title),
                                    $("<p>").text(data.snippet.description),
                                    $("<span>").text(data.snippet.publishedAt)
                                )
                    )

            )
    });
})

.error(function(err){
    console.error(err);
})