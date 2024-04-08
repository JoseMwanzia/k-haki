import React,{ useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Home() {
  const [show, setShow] = useState(true);

  return (
    <>

    <div variant="primary" onClick={() => setShow(false)}></div>

    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Custom Modal Styling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!
        </p>
      </Modal.Body>
    </Modal>

    {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="hero">

    <div className="info d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 data-aos="fade-down">Advocating and protecting the rights of <span>the
              ethnic minorities in Kenya.</span></h2>
            {/* <!-- <p data-aos="fade-up">
              Advocating for the rights of the Nubian
              ethnic minority in Kenya.</p> -->
            <!-- <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Get Started</a> --> */}
          </div>
        </div>
      </div>
    </div>

    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

      <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/hero-carousel/Untitled-design5.png)'}}>
      </div>
      {/* <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/Untitled design-5.png)'}}></div> */}
      <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/Untitled-design6.png)'}}></div>
      <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/Untitled-design7.png)'}}></div>

      <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>

  </section>
  {/* <!-- End Hero Section --> */}

    </>

  )
}

export default Home