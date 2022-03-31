const express = require('express');
const { range } = require('express/lib/request');
const app = express();
const fs = require('fs');

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html')
})

// range
app.get('/rangeOfVideo', function(req, res) {
    let videoRange = req.headers.range;
    if (!videoRange) {
        res.status(400).send('Please provide range of video')
    }
    let video = "file_example.mp4"
    let videoSize = fs.statSync("file_example.mp4").size;
  //  console.log(videoSize, "videoSize()")
    let chunkSize = 10 ** 5;
    const start = Number(videoRange.replace(/\D/g, ""));
    
    const end = Math.min(start + chunkSize, videoSize - 1);
    const contentLength = end - start + 1;
    console.log(start, videoRange, end, contentLength, 'start()')
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(video, {start, end})
    videoStream.pipe(res);
})
app.listen(3001, ()=> console.log('server started'))