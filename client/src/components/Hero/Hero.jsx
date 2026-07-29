import "./Hero.css";

import {
  FaArrowRight,
  FaHeart,
  FaDonate,
  FaUsers,
  FaFlag,
} from "react-icons/fa";



const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-left">

          <span className="hero-tag">
            <FaHeart />
            Together, We Can Create Change
          </span>

          <h1 className="hero-title">
            Small Contribution,
            <br />
            Big <span>Change</span>
          </h1>

          <p className="hero-description">
            HopeHands is a crowdfunding platform that connects compassionate
            people with meaningful causes. Every donation helps create a better
            future for someone in need.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Start a Fundraiser
            </button>

            <button className="secondary-btn">
              Explore Campaigns
              <FaArrowRight />
            </button>

          </div>

          <div className="hero-donors">

            <div className="avatars">

              <img
                src="https://i.pravatar.cc/40?img=1"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=2"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=3"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=4"
                alt=""
              />

            </div>

            <p>
              Join <strong>10,000+</strong> people making a difference
            </p>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero-right">

          <img
            src={heroImg}
            alt="HopeHands"
            className="hero-image"
          />

          {/* Donation Card */}

          <div className="donation-card">

            <div className="card-icon">
              <FaDonate />
            </div>

            <h3>Every Donation Brings Hope</h3>

            <p>
              Your support can change someone's life forever.
            </p>

            <a href="/">Donate Now →</a>

          </div>

          {/* Recent Donors */}

          <div className="donor-card">

            <div className="avatars">

              <img
                src="https://i.pravatar.cc/35?img=5"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/35?img=6"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/35?img=7"
                alt=""
              />

            </div>

            <div>
              <h4>Recent Donors</h4>
              <span>+2.5K People</span>
            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="hero-stats">

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h2>10,500+</h2>
          <p>Happy Donors</p>
        </div>

        <div className="stat-card">
          <FaFlag className="stat-icon" />
          <h2>1,250+</h2>
          <p>Campaigns</p>
        </div>

        <div className="stat-card">
          <FaDonate className="stat-icon" />
          <h2>₹5.2 Cr+</h2>
          <p>Funds Raised</p>
        </div>

        <div className="stat-card">
          <FaHeart className="stat-icon" />
          <h2>98%</h2>
          <p>Donor Satisfaction</p>
        </div>

      </div>

    </section>
  );
};

export default Hero;