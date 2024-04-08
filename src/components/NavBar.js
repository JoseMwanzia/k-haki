import React from 'react'

function NavBar() {
  return (
    <>
        {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        <img src="assets/img/kituo_cha_haki.png" alt="" className="" style={{Width: '100%',
        AspectRatio: 3/2,
        ObjectFit: 'contain',
        mixBlendMode: "color-burn"}}/>
        {/* <!-- <h1>UpConstruction<span>.</span></h1> --> */}
      </a>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#constructions">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#recent-blog-posts">News</a></li>
          <li><a href="#alt-services">Services</a></li>
          <li className="dropdown"><a href="#..."><span>Dropdown</span> <i
                className="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#...">Dropdown 1</a></li>
              <li className="dropdown"><a href="#..."><span>Deep Dropdown</span> <i
                    className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#..">Deep Dropdown 1</a></li>
                  <li><a href="#..">Deep Dropdown 2</a></li>
                  <li><a href="#..">Deep Dropdown 3</a></li>
                  <li><a href="#..">Deep Dropdown 4</a></li>
                  <li><a href="#..">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#...">Dropdown 2</a></li>
              <li><a href="#...">Dropdown 3</a></li>
              <li><a href="#...">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#get-started">Contact</a></li>
        </ul>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}
    </>
  )
}

export default NavBar