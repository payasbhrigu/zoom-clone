const myVideo = document.createElement('video')

let myVideoStream
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream =>{      //when user gives access to mic and cam
    myVideoStream = stream;
    addVideoStream(myVideo,stream); 
} )

const addVideoStream = (video, stream)=>{
    video.srcObject = stream;
    video.addEventListener('loadedmetadata',()=>{

    })
}