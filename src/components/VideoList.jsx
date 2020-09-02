// Refactor the VideoList component to dynamically render one VideoListEntry component for each video object in exampleVideoData
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (

  <div className="video-list">
    {/* for each video object in exampleVideoData, dynamically render one VideoListEntry component */}
    {props.videos.map((video) => <VideoListEntry clickFunc={props.clickFunc} video={video}/>)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.

export default VideoList;

