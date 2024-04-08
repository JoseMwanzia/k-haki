import React from 'react'

function GetingStarted() {
  return (
    <>
        {/* <!-- ======= Get Started Section ======= --> */}
<section id="get-started" className="get-started section-bg">
  <div className="container">

    <div className="row justify-content-between gy-4">

      <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
        <div className="content">
          <h3>Support Our Programs.</h3>
          <p>Help our organization by donating today! All donations go directly to making a difference for our programs.Help our organization by donating today! All donations go directly to making a difference for our programs.</p>
          <ul className='text-start'>
            <li><i className="bi bi-check-circle"></i> <span>Outreach Program</span></li>
            <li><i className="bi bi-check-circle"></i> <span>School Program</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Citizenship Paralegals</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Radio Program</span></li>
          </ul>
          </div>
      </div>

      <div className="col-lg-5" data-aos="fade">
        <form action="forms/quote.php" method="post" className="php-email-form">
          <h3>Make a Donation</h3>
          <p>K-haki a Human rights organization started in 2020 as a human rights movement that advocates for the rights of minority in Kibra.</p>
          <div className="row gy-3">

            <div className="col-md-12">
              <input type="text" name="name" className="form-control" placeholder="Name" required/>
            </div>

            <div className="col-md-12 ">
              <input type="email" className="form-control" name="email" placeholder="Email" required/>
            </div>

            <div className="col-md-12">
              <input type="text" className="form-control" name="phone" placeholder="Phone" required/>
            </div>

            <div className="col-md-12">
              <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your donation request has been sent successfully. Thank you!</div>

              <button type="submit">DONATE</button>
            </div>

          </div>
        </form>
      </div>
      {/* <!-- End Quote Form --> */}

    </div>

  </div>
</section>
{/* <!-- End Get Started Section --> */}   
    </>
  )
}

export default GetingStarted