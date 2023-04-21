import Artists from "../../Utils/artists";

function BannerArtist() {
  return (
    <div className="banner-artist">
      <div className="banner-artist-container">
        {Artists.map((artist) => {
          return (
            <div className="container-artist">
              <img className="banner-artist-picture" src={artist.img}></img>
              <h2 className="banner-artist-h2">{artist.band}</h2>
              <div className="artist-line"></div>
              <p className="banner-artist-p">{artist.type}</p>
              <div className="banner-artist-icon">
                <a
                  className="banner-artist-a"
                  href="https://ro-ro.facebook.com/"
                >
                  <i class="fa-brands fa-facebook-f  "></i>
                </a>
                <a className="active-artist{" href="https://www.instagram.com/">
                  <i class="fa-brands fa-instagram  "></i>
                </a>
                <a href="https://www.youtube.com/">
                  <i class="fa-brands fa-youtube  "></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BannerArtist;
