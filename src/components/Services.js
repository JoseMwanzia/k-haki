import React from 'react'

function Services() {
  return (
    <>
    {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                <h2>K-Haki</h2>
                <p>K-Haki provides legal aid and representation to marginalized and
                    disadvantaged communities in Kenya, with a focus on promoting and protecting human
                    rights. They also conduct research and advocacy and community mobilizations to influence
                    policies and laws that impact access to justice and human rights.</p>
                </div>

                <div className="row gy-4">

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-item  position-relative">
                    <div className="icon">
                        <i className="fa-solid fa-mountain-city"></i>
                    </div>
                    <h3>Vision</h3>
                    <p>To have a society that recognizes social justice, legal systems, and human rights.</p>

                        {/* <!-- Button trigger modal --> */}
                        <a href='...' class="readmore stretched-link" data-bs-toggle="modal" data-bs-target="#exampleModal-1">
                        Learn More<i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- End Service Item --> */}

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-item position-relative">
                    <div className="icon">
                        <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                    </div>
                    <h3>Mission</h3>
                    <p>Advance human rights to vulnerable communities, through an integrated platform, litigation,
                        advocacy, and action research.
                    </p>
                        {/* <!-- Button trigger modal --> */}
                        <a href='...' class="readmore stretched-link" data-bs-toggle="modal" data-bs-target="#exampleModal-2">
                        Learn More<i className="bi bi-arrow-right"></i>
                        </a>

                    </div>
                </div>
                {/* <!-- End Service Item --> */}

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-item position-relative">
                    <div className="icon">
                        <i className="fa-solid fa-compass-drafting"></i>
                    </div>
                    <h3>Our Values</h3>
                    <p>Promoting social transformation and empowerment of the minorities.</p>

                        {/* <!-- Button trigger modal --> */}
                        <a href='...' class="readmore stretched-link" data-bs-toggle="modal" data-bs-target="#exampleModal-3">
                        Learn More<i className="bi bi-arrow-right"></i>
                        </a>

                    </div>
                </div>
                {/* <!-- End Service Item --> */}

                </div>

            </div>

            {/* <!-- Start Modal-3 --> */}
            <div class="modal fade" id="exampleModal-3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Our Core Values</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul className='text-start'>
                            <li>People are at the very center and heart of development; they are the forces behindall we do and every endeavor we undertake.</li>
                            <li>Transparency and accountability drive our actions.</li>
                            <li>Sustainability is built into every intervention we pursue.</li>
                            <li>A holistic approach is essential to our treatment of ourselves and one another, withthe aim of developing the whole person: health body, healthy mind, and healthy spirit.</li>
                            <li>Working with efficiency, efficacy, and long-term sustainability.</li>
                            <li>Valuing the principle of social justice, and empowerment of youth, women, and child</li>
                            <li>Solving youth conflicts and building peace and deep true ship among the youth</li>
                            <li>Believe in the power of committed youth individuals and organization who want tocontribute to a sustainable development.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Modal-3 --> */}

            {/* <!-- Start Modal-2 --> */}
            <div class="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Our Core Values</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul className='text-start'>
                            <li>Advance human rights to vulnerable communities, through an integrated platform, litigation, advocacy, and action research.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Modal-2 --> */}

            {/* <!-- Start Modal-1 --> */}
            <div class="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Our Core Values</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul className='text-start'>
                            <li>To have a society that recognizes social justice, legal systems, and human rights.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Modal-1 --> */}

        </section>
        {/* <!-- End Services Section --> */}   

        {/* <!-- ======= Alt Services Section ======= --> */}
        <section id="alt-services" className="alt-services">
            <div className="container" data-aos="fade-up">

                <div className="row justify-content-around gy-4">
                <div className="col-lg-6 img-bg" style={{backgroundImage: 'url(assets/img/Untitled-design-12.png)'}} data-aos="zoom-in"
                    data-aos-delay="100"></div>

                <div className="col-lg-5 d-flex flex-column justify-content-center text-start">
                    <h3>Our Objectives</h3>
                    <p>The K-Haki Identity Documentation Program empowers the  by providing the much-needed assistance 
                    in acquiring identity documents, which are vital tools in fighting for other rights such as education, land rights, seeking loans and employment opportunities.</p>

                    <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-patch-check flex-shrink-0 animate__animated animate__pulse animate__infinite"></i>
                    <div>
                        <h4><div className="stretched-link" >1</div></h4>
                        <p>To raise awareness of the contents of Chapter 4 (Bill of Rights) of the Constitution of Kenya in Kibra Sub- County, which relate to the phrase Amkeni Wakenya (wake up Kenyans)
                        </p>
                    </div>
                    </div>
                    {/* <!-- End Icon Box --> */}

                    <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-brightness-high flex-shrink-0 animate__animated animate__pulse animate__infinite"></i>
                    <div>
                        <h4><div className="stretched-link">2</div></h4>
                        <p>Increase empowerment to women, girls, and boys on Gender Based Violence (GBV)
                        </p>
                    </div>
                    </div>
                    {/* <!-- End Icon Box --> */}

                    <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-brightness-high flex-shrink-0 animate__animated animate__pulse animate__infinite"></i>
                    <div>
                        <h4><div className="stretched-link">3</div></h4>
                        <p>To document and follow up on human rights violations to ensure justice is done.
                        </p>
                    </div>
                    </div>
                    {/* <!-- End Icon Box --> */}

                    <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-brightness-high flex-shrink-0 animate__animated animate__pulse animate__infinite"></i>
                    <div>
                        <h4><div className="stretched-link">4</div></h4>
                        <p>To network with justice actors including police, judiciary and ODPP to enhance access to justice and rule of law in Kibra Sub- County</p>
                    </div>
                    </div>
                    {/* <!-- End Icon Box --> */}

                </div>
                </div>

            </div>
        </section>
        {/* <!-- End Alt Services Section --> */}
    </>
  )
}

export default Services