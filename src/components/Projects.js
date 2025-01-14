import React from "react";


function Projects() {
  return (
    <>
    {/* <!-- ======= Our Projects Section ======= --> */}
<section id="projects" className="projects">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Our Projects</h2>
      <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
        accusamus fugit aut qui distinctio</p>
    </div>

    <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
      data-portfolio-sort="original-order">

      <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
        <li data-filter="*" className="filter-active">All</li>
        <li data-filter=".filter-remodeling">Awareness</li>
        <li data-filter=".filter-construction">Construction</li>
        <li data-filter=".filter-repairs">Donations</li>
        <li data-filter=".filter-design">Research</li>
      </ul>
      {/* <!-- End Projects Filters --> */}

      <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/remodeling-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Remodeling 1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1"
                data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                  className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/construction-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Construction 1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/construction-1.jpg" title="Construction 1"
                data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                  className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/repairs-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Repairs 1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs"
                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div> 


        <div className="col-lg-4 col-md-6 portfolio-item filter-design">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/Untitled design-15.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Donations</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/Untitled design-15.png" title="Repairs 1" data-gallery="portfolio-gallery-book"
                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        {/* <!-- End Projects Item --> */}

        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/Untitled design-16.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Remodeling 2</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/Untitled design-16.png" title="Remodeling 2"
                data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                  className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        {/* <!-- End Projects Item --> */}

        <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/Untitled design-17.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Construction 2</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/Untitled design-17.png" title="Construction 2"
                data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                  className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        {/* <!-- End Projects Item --> */}
{/* <!--  */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/repairs-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Repairs 2</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/repairs-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs"
                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-design">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/design-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Design 2</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/design-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-book"
                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/remodeling-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Remodeling 3</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/remodeling-3.jpg" title="Remodeling 3"
                data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                  className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/construction-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Construction 3</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/construction-3.jpg" title="Construction 3"
                data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                  className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/repairs-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Repairs 3</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/repairs-3.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs"
                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-design">
          <div className="portfolio-content h-100">
            <img src="assets/img/projects/design-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Design 3</h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book"
                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" className="details-link"><i
                  className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div> 
        {/* --> */}

      </div>
      {/* <!-- End Projects Container --> */}

    </div>

  </div>
</section>
{/* <!-- End Our Projects Section --> */}   
    </>
  )
}

export default Projects