import './video.scss';

const VideoPage = () => {
  return(
    <div className="page">
        <iframe id="ytplayer"
          type="text/html"
          width='468px'
          height='266px'
          src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        />
        <iframe id="ytplayer"
          type="text/html"
          width='468px'
          height='266px'
          src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        />
        <iframe id="ytplayer"
          type="text/html"
          width='468px'
          height='266px'
          src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        />
      {/* <div className="container">
        <iframe id="ytplayer"
          type="text/html"
          className="responsive-iframe"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        />
      </div>
      <div className="container">
        <iframe id="ytplayer"
          type="text/html"
          className="responsive-iframe"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        />
      </div>
      <div className="container">
        <iframe id="ytplayer"
          type="text/html"
          className="responsive-iframe"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        />
      </div> */}
    </div>
  )
};

export default VideoPage;
