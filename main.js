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
    console.log(data);
})

.error(function(err){
    console.error(err);
})