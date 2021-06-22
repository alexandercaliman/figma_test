import './video.scss';

const videoUrls = ["http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com", "https://www.youtube.com/embed/Z1Yd7upQsXY", "https://www.youtube.com/embed/qDkCHe4wi0Y"]

const VideoPage = () => {
  return(
    <div className="container">
      {videoUrls.map((item, index) => 
      <div className="video_container" key={index}>
      <iframe id="ytplayer"
      height="100%"
      width='100%'
          type="text/html"
          src={item}
          frameborder="0"
        />
      </div>
      )}
    </div>
  )
};

export default VideoPage;
