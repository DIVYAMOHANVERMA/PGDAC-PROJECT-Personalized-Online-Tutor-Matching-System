import React from 'react';
import Footer from './Footer';
import NavbarH from './NavbarH';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePageDashboard = () => {
  return (
    <>
      <NavbarH />
      <div className="container-fluid">
        <h1 className="text-center mt-5 mb-4">Personalized Tutor Matching System</h1>

        <div className="row">
          <div className="col-md-4">
      
          </div>
          <div className="col-md-8">
            <div id="carouselExampleInterval" className="carousel slide" style={{marginRight:'50%'}} data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                  <img src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img src="https://blog.imaginext.co.in/content/images/2023/06/beautiful-background-scenery-kerala-india_674045-3-transformed.jpeg" className="d-block w-100" alt="Slide 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <div className="col">
            <div className="card">
              <img src="https://www.edinburghcollege.ac.uk/media/c5ghakxe/pexels-tirachard-kumtanom-733856.jpg?center=0.40242891032492345,0.50277250251192762&mode=crop&quality=80&width=1200&height=360&rnd=132717830764430000" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://www.gkftii.com/blog/img/multimedia-courses-scope-and-career.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://analyticsindiamag.com/wp-content/uploads/2020/04/Untitled-design-7.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://analyticsindiamag.com/wp-content/uploads/2020/04/Untitled-design-7.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePageDashboard;
