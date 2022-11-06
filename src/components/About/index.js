import './index.css'

const About = () => (
  <div className="about-container">
    <div className="about-image-small">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </div>
    <div className="about-image-large">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-lg-image-style"
      />
    </div>
  </div>
)
export default About
