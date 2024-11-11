import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import fsLogo from '../assets/FelSurvivorVR_Logo_V2.png';
import './FSPressKit.css';

const FSPressKit: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('scrollable');
    return () => {
      document.body.classList.remove('scrollable');
    };
  }, []);

  const mediaAssets = [
    {
      id: 1,
      type: 'image',
      thumbnail: 'path/to/thumbnail1.jpg', // Replace with actual paths
      full: 'path/to/fullsize1.jpg',
      alt: 'Screenshot 1',
      download: 'path/to/download1.jpg',
    },
    {
      id: 2,
      type: 'image',
      thumbnail: 'path/to/thumbnail2.jpg',
      full: 'path/to/fullsize2.jpg',
      alt: 'Screenshot 2',
      download: 'path/to/download2.jpg',
    },
    {
      id: 3,
      type: 'video',
      thumbnail: 'path/to/video_thumbnail.jpg',
      full: 'path/to/video.mp4',
      alt: 'Gameplay Trailer',
      download: 'path/to/video.mp4',
    },
  ];

  const handleDownloadAll = () => {
    window.location.href = 'path/to/your/media-assets.zip'; // Replace with actual path
  };

  return (
    <div className="fspresskit-container">
      <Helmet>
        <title>Fel Survivors VR - Press Kit | smashit.games</title>
        <meta
          name="description"
          content="Fel Survivors VR Press Kit - Download media assets, fact sheet, and learn more about the upcoming VR roguelike shooter by smashit.games."
        />
        <link rel="canonical" href="https://smashit.games/fel-survivors-presskit" />
      </Helmet>

      {/* Header */}
      <header className="fspresskit-header">
        <img src={fsLogo} alt="Fel Survivors VR Logo" className="fspresskit-logo" />
        <h1>Fel Survivors VR Press Kit</h1>
      </header>

      {/* Fact Sheet */}
      <section className="fspresskit-section">
        <h2>Fact Sheet</h2>
        <table className="fact-sheet">
          <tbody>
          <tr>
            <td><strong>Developer:</strong></td>
            <td>smashit.games</td>
          </tr>
          <tr>
            <td><strong>Based in:</strong></td>
            <td>Brisbane, Australia</td>
          </tr>
          <tr>
            <td><strong>Founding Date:</strong></td>
            <td>2022</td>
          </tr>
          <tr>
            <td><strong>Expected Release Date:</strong></td>
            <td>Mid 2025</td>
          </tr>
          <tr>
            <td><strong>Expected Demo Release Date:</strong></td>
            <td>Holidays 2024</td>
          </tr>
          <tr>
            <td><strong>Platforms:</strong></td>
            <td>Meta Quest Store (Quest 2 and up), Steam VR (later)</td>
          </tr>
          </tbody>
        </table>
      </section>

      {/* Game Overview */}
      <section className="fspresskit-section">
        <h2>Game Overview</h2>
        <p>
          <b>Fel Survivors VR</b> is an adrenaline-pumping virtual reality roguelike shooter that throws you into a demonic
          hellscape teeming with relentless enemies. Inspired by the addictive gameplay of titles like *Vampire Survivors*,
          players choose from a variety of classes in the safety of the 'Sanctuary' before diving into intense battles.
          Collect experience, level up, and select from a range of temporary perks and auto-firing abilities to strategize
          your survival.
        </p>
      </section>

      {/* Features */}
      <section className="fspresskit-section">
        <h2>Key Features</h2>
        <ul>
          <li><b>Class Selection:</b> Choose from multiple classes, each with unique starting weapons and abilities.</li>
          <li><b>Dynamic Abilities:</b> Unlock up to 3 random abilities per run, making each session unique.</li>
          <li><b>Perks System:</b> Level up to select temporary perks that boost your stats and abilities.</li>
          <li><b>Power-ups:</b> Find temporary items that provide significant boosts to help you survive the onslaught.</li>
          <li><b>Permanent Progression:</b> Collect gold to purchase permanent stat upgrades in the Idol Shop.</li>
          <li><b>Challenging Bosses:</b> Face off against minibosses and a final boss that test your strategy and skill.</li>
          <li><b>Immersive VR Experience:</b> Fully realised virtual reality environments optimized for Meta Quest 2 and up.</li>
        </ul>
      </section>

      {/* Media Assets */}
      <section className="fspresskit-section">
        <h2>Media Assets</h2>
        <p>Click on any asset to view it in full size. You can download individual assets or grab them all at once.</p>
        <div className="media-grid">
          {mediaAssets.map((asset) => (
            <div key={asset.id} className="media-item">
              {asset.type === 'image' ? (
                <a href={asset.full} target="_blank" rel="noopener noreferrer">
                  <img src={asset.thumbnail} alt={asset.alt} />
                </a>
              ) : (
                <a href={asset.full} target="_blank" rel="noopener noreferrer">
                  <video src={asset.thumbnail} controls />
                </a>
              )}
              <div className="media-actions">
                <a href={asset.download} download className="download-button">Download</a>
              </div>
            </div>
          ))}
        </div>
        <button className="download-all-button" onClick={handleDownloadAll}>Download All Assets</button>
      </section>

      {/* Contact Information */}
      <section className="fspresskit-section">
        <h2>Contact Information</h2>
        <p>
          For press inquiries, please contact us at{' '}
          <a href="mailto:press@smashit.games">press@smashit.games</a>.
        </p>
      </section>

      {/* Back to Home Link */}
      <footer className="fspresskit-footer">
        <Link to="/">← Back to Home</Link>
      </footer>
    </div>
  );
};

export default FSPressKit;
