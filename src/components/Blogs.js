import React from 'react'

function Blogs() {
  return (
    <>
        {/* <!-- ======= Recent Blog Posts Section ======= --> */}
<section id="recent-blog-posts" className="recent-blog-posts">
  <div className="container" data-aos="fade-up">



<div className="section-header">
    <h2>News and Events</h2>
    <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
  </div>

  <div className="row gy-5">

    <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div className="post-item position-relative h-100">

        <div className="post-img position-relative overflow-hidden">
          <img src="assets/img/blog/blog-1.jpg" className="img-fluid" alt=""/>
          <span className="post-date">December 12</span>
        </div>

        <div className="post-content d-flex flex-column">

          <h3 className="post-title">Why Maisha Namba? Challenges and Recommendations for Kenya’s Digital Identity Implementation</h3>

          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
            </div>
            <span className="px-3 text-black-50">/</span>
            <div className="d-flex align-items-center">
              <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
            </div>
          </div>

          <hr/>

          <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i
              className="bi bi-arrow-right"></i></a>

        </div>

      </div>
    </div>
    {/* <!-- End post item --> */}

    <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div className="post-item position-relative h-100">

        <div className="post-img position-relative overflow-hidden">
          <img src="assets/img/blog/blog-2.jpg" className="img-fluid" alt=""/>
          <span className="post-date">July 17</span>
        </div>

        <div className="post-content d-flex flex-column">

          <h3 className="post-title">The Growing Influence of Tech Companies in Critical Public Services</h3>

          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-person"></i> <span className="ps-2">Mario Douglas</span>
            </div>
            <span className="px-3 text-black-50">/</span>
            <div className="d-flex align-items-center">
              <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
            </div>
          </div>

          <hr/>

          <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i
              className="bi bi-arrow-right"></i></a>

        </div>

      </div>
    </div>
    {/* <!-- End post item --> */}

    <div className="col-xl-4 col-md-6">
      <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="300">

        <div className="post-img position-relative overflow-hidden">
          <img src="assets/img/blog/blog-3.jpg" className="img-fluid" alt=""/>
          <span className="post-date">September 05</span>
        </div>

        <div className="post-content d-flex flex-column">

          <h3 className="post-title">The UPI: Empowering Kenyans or Excluding Marginalized Communities?</h3>

          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-person"></i> <span className="ps-2">Lisa Hunter</span>
            </div>
            <span className="px-3 text-black-50">/</span>
            <div className="d-flex align-items-center">
              <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
            </div>
          </div>

          <hr/>

          <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i
              className="bi bi-arrow-right"></i></a>

        </div>

      </div>
    </div>
    {/* <!-- End post item --> */}

  </div>

  </div>
</section>
{/* <!-- End Recent Blog Posts Section --> */}
    </>
  )
}

export default Blogs