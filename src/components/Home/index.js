import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="home-image-small">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
    </div>
    <div className="home-image-large">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-lg-image-style"
      />
    </div>
  </div>
)

export default Home
