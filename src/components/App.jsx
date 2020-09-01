import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  changeVideo() {
    this.setState({
      currentVideo: this.props.video
    });
  }

  render() {

    return <div>
      {/* SEARCH COMPONENT */}
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search state={this.state}/>
          {/* <div><h5><em>search</em> view goes here</h5></div> */}
        </div>
      </nav>



      <div className="row">
        {/* VIDEO PLAYER */}
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} state={this.state}/>
          {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
        </div>

        {/* VIDEO LIST */}
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} state={this.state} />
          {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
        </div>

      </div>


    </div>;
  }
}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
