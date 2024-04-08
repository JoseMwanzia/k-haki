import React from 'react'

function Programs() {
  return (
    <>
{/* <!-- ======= Constructions Section ======= --> */}
<section id="constructions" className="constructions">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Welcome to Kituo Cha Haki</h2>
      <p>K-Haki a Human rights organization started in 2020 as a human rights movement 
        that advocates for the rights of the minorities in Kenya.</p>
    </div>

    <div className="section-header">
      <h2>Our Programs</h2>
    </div>

    <div className="row gy-4">


      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div className="card-bg"  style={{backgroundImage: 'url(assets/img/Untitled-design14.png)'}}></div>
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body ">
                <h4 className="card-title">Outreach Program.</h4>
                <p>Many of our clients have busy work schedules, and negative encounters with authorities have led to widespread 
                  apprehension of contact with the government within the community. </p>
                  <br/>
                  <a href="service-details.html" className="readmore stretched-link">Learn more <i
                    className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card Item --> */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div className="card-bg"  style={{backgroundImage: 'url(assets/img/Untitled-design-9.png)'}}></div>
              {/* <div className="card-bg"  style={{backgroundImage: 'url(assets/img/Untitled-design14.png)'}}></div> */}
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title">Radio Program.</h4>
                <p>Paralegals from K-Haki convene every week to 
                  host the Uhaki show broadcasted on Pamoja FM and discuss current social and legislative developments related to identification. </p>
                  <br/>
                  <a href="service-details.html" className="readmore stretched-link">Learn more <i
                    className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card Item --> */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div className="card-bg" style={{backgroundImage: 'url(assets/img/Untitled-design-10.png)'}}></div>
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title">Citizenship Paralegals.</h4>
                <p>Citizenship paralegals assist community members in acquiring necessary 
                  identification documents and conduct various forms of outreach</p>
                  <br/>
                  <a href="service-details.html" className="readmore stretched-link">Learn more <i
                    className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card Item --> */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div className="card-bg" style={{backgroundImage: 'url(assets/img/Untitled-design-11.png)'}}></div>
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title">School Program.</h4>
                <p>K-Haki holds annual competitions for primary and secondary school students to
                   encourage students to gain familiarity with the constitution and their legal rights as citizens. </p>
                  <br/>
                  <a href="service-details.html" className="readmore stretched-link">Learn more <i
                    className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card Item --> */}

    </div>

  </div>
</section>
{/* <!-- End Constructions Section --> */}
    </>
  )
}

export default Programs