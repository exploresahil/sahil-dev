import "./style.scss";

const Hero = () => {
  return (
    <section id="homeHero">
      <div className="hero-title">
        <h2>
          I craft <br />
          digital <br />
          experiences,
        </h2>
        <h2>
          Turning <br />
          pixels into <br />
          possibilities.
        </h2>
        <video autoPlay loop muted playsInline preload="metadata">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-man-in-cyberpunk-outfit-stands-under-laser-lights-50454-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};
``;
export default Hero;
