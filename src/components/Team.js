import React from 'react'

function Team() {
  return (
    <>
        {/* <!-- ======= Our Team Section ======= --> */}
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                <h2>Our Team</h2>
                <p className='text-center'>K-Haki partners with various organizations and institutions, including other NGOs,
                    legal aid providers, government agencies, and international organizations, to advance their
                    mission and serve their clients. Some of their key partners include the Leeds University,
                    National Endowment Fund (NED) HAKI Africa , and the International Development Law
                    Organization.
                </p>
                </div>

                <div className="row gy-5">

                <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                    <div className="member-img">
                    <img src="assets/img/team/1.png" className="img-fluid" alt=""/>
                    <div className="social">
                        <a href="#default"><i className="bi bi-twitter"></i></a>
                        <a href="#default"><i className="bi bi-facebook"></i></a>
                        <a href="#default"><i className="bi bi-instagram"></i></a>
                        <a href="#default"><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                    <div className="member-info text-center">
                    <h4>Shafi Ali Hussein</h4>
                    <span>Chief Executive Officer</span>
                    <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow
                    </p>
                    </div>
                </div>
                {/* <!-- End Team Member --> */}

                <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
                    <div className="member-img">
                    <img src="assets/img/team/2.png" className="img-fluid" alt=""/>
                    <div className="social">
                        <a href="#default"><i className="bi bi-twitter"></i></a>
                        <a href="#default"><i className="bi bi-facebook"></i></a>
                        <a href="#default"><i className="bi bi-instagram"></i></a>
                        <a href="#default"><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                    <div className="member-info text-center">
                    <h4>Yassah Musa</h4>
                    <span>Project Manager</span>
                    <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem
                        ut</p>
                    </div>
                </div>
                {/* <!-- End Team Member --> */}

                <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
                    <div className="member-img">
                    <img src="assets/img/team/3.png" className="img-fluid" alt=""/>
                    <div className="social">
                        <a href="#default"><i className="bi bi-twitter"></i></a>
                        <a href="#default"><i className="bi bi-facebook"></i></a>
                        <a href="#default"><i className="bi bi-instagram"></i></a>
                        <a href="#default"><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                    <div className="member-info text-center">
                    <h4>Zena Musa</h4>
                    <span>Program Officer</span>
                    <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis
                        at qui</p>
                    </div>
                </div>
                {/* <!-- End Team Member --> */}

                </div>

            </div>
        </section>
        {/* <!-- End Our Team Section --> */}
    </>
  )
}

export default Team