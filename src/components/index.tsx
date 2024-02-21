import "../components/index.css";

function Content() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 h6 p mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Property
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="icons d-flex gap-3 h6">
            <div className="search ">
              <i className="fa fa-search"></i>
              <div className="des ">Search</div>
            </div>
            <div className="search ">
              <i className="fa fa-user"></i>
              <div className="des">Profile</div>
            </div>
            <div className="search ">
              <i className="fa fa-shopping-cart"></i>
              <div className="des">Cart</div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* HEROSECTION */}
      <section className="hero-section bg-light py-5">
        <div className="container pt-5">
          <div className="row m-auto container">
            <div className="col-lg-6 col-md-6">
              <div className="hero-text d-flex flex-column  align-items-start justify-content-center h-100">
                <div className="header">
                  {" "}
                  <h6>Real Estate Agency</h6>
                  <h1>
                    Find Your Dream House <br /> By Us
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                    <br /> Officia incidunt fugiat reprehenderit velit
                    repellendus?
                  </p>
                  <div className="btn btn-hero text-light btn-md">
                    Make an Enquiry
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 container m-auto">
              <div className="hero-image">
                <img src="./images/hero-banner.png" width={"100%"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section bg-light py-5">
        <div className="container">
          <div className="row m-auto">
            <div className="col-lg-6 col-md-6 about-image-container">
              <div className="about-image">
                <img
                  src="./images/about-banner-1.png"
                  width={"90%"}
                  height={"80%"}
                  alt=""
                  className="image1"
                />
                <img
                  src="./images/about-banner-2.jpg"
                  alt=""
                  className="about-sub-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 my-auto ">
              <div className="about-us-content">
                <div className="m-auto w-lg-25 w-md-25 w-50 ">
                  <p className="bg-secondary text-center rounded-1 text-light">
                    About us
                  </p>
                </div>
                <div className="about-us-words">
                  <h2>The Leading Real Estate Rental Marketplace.</h2>
                  <p>
                    Over 39,000 people work for us in more than 70 countries all
                    over the This breadth of global coverage, combined with
                    specialist services
                  </p>
                </div>
                <div className="list-group">
                  <ul className="row container">
                    <li className="d-flex gap-1 col-md-6">
                      <div className="box"></div>
                      <p>Smart Home Design</p>
                    </li>
                    <li className="d-flex gap-1 col-md-6">
                      <div className="box"></div>
                      <p>Beautiful Scene Around</p>
                    </li>
                    <li className="d-flex gap-1 col-md-6">
                      <div className="box"></div>
                      <p>Exceptional Lifestyle</p>
                    </li>
                    <li className="d-flex gap-1 col-md-6">
                      <div className="box"></div>
                      <p>Complete 24/7 Security</p>
                    </li>
                  </ul>
                </div>
                <div className="about-footer p-3">
                  "Enimad minim veniam quis nostrud exercitation llamco laboris.
                  Lorem ipsum dolor sit amet"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="service-section bg-light py-5">
        <div className="container">
          <div className="header-text m-auto pb-4">
            <div className="m-auto w-25 px-md-0    ">
              <p className="bg-secondary text-center rounded-1 text-light">
                Our Services
              </p>
            </div>
            <h2 className=" text-center">Our Main Focus</h2>
          </div>
          <div className="row m-auto ">
            <div className="col-lg-4 border home  border-light border-5 col-md-6 bg-secondary rounded-2 d-flex flex-column align-items-center py-2 px-lg-5 text-light">
              <div className="services-image">
                <img src="./images/service-1.png" alt="" />
              </div>
              <div className="services-content d-flex flex-column align-items-center ">
                <h4>Buy a home</h4>
                <p className="text-center">
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a
                  className="text-decoration-none services-link text-light d-flex gap-2"
                  href="#"
                >
                  <p>Find A home</p>
                  <i className="fa fa-arrow-right mt-2"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 border home  border-light border-5 col-md-6 bg-secondary rounded-2 d-flex flex-column align-items-center py-2 px-lg-5 text-light">
              <div className="services-image">
                <img src="./images/service-2.png" alt="" />
              </div>
              <div className="services-content d-flex flex-column align-items-center ">
                <h4>Rent a home</h4>
                <p className="text-center">
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a
                  className="text-decoration-none text-light d-flex gap-2"
                  href="#"
                >
                  <p>Find A home</p>
                  <i className="fa fa-arrow-right mt-2"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 border home m-auto m-lg-0  border-light border-5 col-md-6 bg-secondary rounded-2 d-flex flex-column align-items-center py-2 px-lg-5 text-light">
              <div className="services-image">
                <img src="./images/service-3.png" alt="" />
              </div>
              <div className="services-content d-flex flex-column align-items-center ">
                <h4>Sell a home</h4>
                <p className="text-center">
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a
                  className="text-decoration-none text-light d-flex gap-2"
                  href="#"
                >
                  <p>Find A home</p>
                  <i className="fa fa-arrow-right mt-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES SECTION */}
      <section className="properties-section py-5 bg-light">
        <div className="container">
          <div className="properties-header m-auto pb-4">
            <div className="m-auto w-md-25 w-lg-25 w-25  ">
              <p className="bg-secondary text-center rounded-1 text-light">
                Our Properties
              </p>
            </div>
            <h2 className=" text-center">Featured Listing</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 rounded-3 col-md-6 border border-light border-5 properties-container py-3">
              <div className="properties-image rounded-2 mx-auto">
                <img
                  className="rounded-2 mx-auto"
                  src="./images/property-1.jpg"
                  width={"100%"}
                  alt=""
                />
              </div>
              <div className="properties-content">
                <div className="price d-flex align-items-center">
                  <h4>$34,900/</h4>
                  <p className="mt-2">month</p>
                </div>
                <div className="advert-content">
                  <h4>New Apartment Nice View</h4>
                  <p>
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>
                </div>
                <div className="properties-description d-flex gap-3">
                  <h6>
                    3 <br /> Bedrooms
                  </h6>
                  <div className="hr"></div>
                  <h6>
                    2 <br /> Bedrooms
                  </h6>
                  <div className="hr"></div>
                  <h6>
                    3450 <br />
                    Square ft
                  </h6>
                </div>
                <hr />
              </div>
            </div>
            <div className="col-lg-4 rounded-3 col-md-6 border border-light border-5 properties-container py-3">
              <div className="properties-image mx-auto">
                <img
                  className="rounded-2"
                  src="./images/property-2.jpg"
                  width={"100%"}
                  alt=""
                />
              </div>
              <div className="properties-content">
                <div className="price d-flex align-items-center">
                  <h4>$34,900/</h4>
                  <p className="mt-2">month</p>
                </div>
                <div className="advert-content">
                  <h4>Modern Apartment</h4>
                  <p>
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>
                </div>
                <div className="properties-description d-flex gap-3">
                  <h6>
                    3 <br /> Bedrooms
                  </h6>
                  <div className="hr"></div>
                  <h6>
                    2 <br /> Bedrooms
                  </h6>
                  <div className="hr"></div>
                  <h6>
                    3450 <br />
                    Square ft
                  </h6>
                </div>
                <hr />
              </div>
            </div>
            <div className="col-lg-4 m-auto m-lg-0 rounded-3 col-md-6 border border-light border-5 properties-container py-3">
              <div className="properties-image mx-auto pb-lg-0 pb-md-0 pb-2">
                <img
                  className="rounded-2"
                  src="./images/property-3.jpg"
                  width={"100%"}
                  alt=""
                />
              </div>
              <div className="properties-content">
                <div className="price d-flex align-items-center">
                  <h4>$34,900/</h4>
                  <p className="mt-2">month</p>
                </div>
                <div className="advert-content">
                  <h4>Comfortable Apartment</h4>
                  <p>
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>
                </div>
                <div className="properties-description d-flex gap-3">
                  <h6>
                    3 <br /> Bedrooms
                  </h6>
                  <div className="hr"></div>
                  <h6>
                    2 <br /> Bedrooms
                  </h6>
                  <div className="hr"></div>
                  <h6>
                    3450 <br />
                    Square ft
                  </h6>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why-section bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="why-content">
                <div className="m-auto w-lg-25 w-md-25 w-50 ">
                  <p className="bg-secondary text-center rounded-1 text-light">
                    Our Values
                  </p>
                </div>
                <div>
                  <h3 className="px-5 text-center">
                    Check Video Presentation to find out more about us
                  </h3>
                  <div className="squares pt-3 d-flex flex-column gap-2">
                    <div className="square-one d-flex align-items-center gap-4">
                      <div className="p-3 bg-secondary rounded-3">
                        <i className="fa fa-phone text-light fs-5"></i>
                      </div>
                      <div>
                        <h5 className="m-0">24 Hours Support</h5>
                        <p className="m-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt voluptas laudantium id quae.
                        </p>
                      </div>
                    </div>
                    <div className="square-one d-flex align-items-center gap-4">
                      <div className="p-3 bg-secondary rounded-3">
                        <i className="fa fa-tools text-light fs-5"></i>
                      </div>
                      <div>
                        <h5 className="m-0">User Admin Panel</h5>
                        <p className="m-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt voluptas laudantium id quae.
                        </p>
                      </div>
                    </div>
                    <div className="square-one d-flex align-items-center gap-4">
                      <div className="p-3 bg-secondary rounded-3">
                        <i className="fa fa-mobile text-light fs-5"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Mobile Friendly</h5>
                        <p className="m-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt voluptas laudantium id quae.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pt-4">
              <div className="why-images w-100">
                <div className="why-image w-100">
                  <img src="./images/property-4.png" width={"100%"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNT */}
      <section className="count-section bg-secondary py-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="content-1 text-light d-flex flex-column align-items-center">
              <h2>578</h2>
              <p>Agent and Agency</p>
            </div>
            <div className="content-1 text-light d-flex flex-column align-items-center">
              <h2>12168</h2>
              <p>Happy Customers Every years</p>
            </div>
            <div className="content-1 text-light d-flex flex-column align-items-center">
              <h2>2176</h2>
              <p>Won Awards</p>
            </div>
            <div className="content-1 m-auto m-lg-0  text-light d-flex flex-column align-items-center">
              <h2>734</h2>
              <p>New Living Every Week</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* TESTIMONIAL */}
      <section className="bg-light py-5">
        <div className="container">
        <div className="testimonial-section container">
          <div className="properties-header m-auto pb-4">
            <div className="m-auto w-md-25 w-lg-25 w-25  ">
              <p className="bg-secondary text-center rounded-1 text-light">
                Testimonials
              </p>
            </div>
            <h2 className=" text-center">Latest Testimonials</h2>
          </div>
        </div>
        <div className="row container">
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="testimonial-profile d-flex flex-column align-items-center">
              <div className="testimonial-image w-50">
                <img src="./images/testimonial_3.jpg" alt="" className="w-100 " />
              </div>
              <div className="testimoial-info text-center">
                <h5 className="m-0">Dalmar Johnson</h5>
                <p className="founder" >FOUNDER OF WEBFLEX INC.</p>
              </div>
              <div className="testimonial-details text-center">
                <p>We have chosen to work extensively with Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam inventore dolor rerum..</p>
                <i className="fa fa-quote-left fs-3 "></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="testimonial-profile d-flex flex-column align-items-center">
              <div className="testimonial-image w-50">
                <img src="./images/testimonial_1.jpg" alt="" className="w-100 " />
              </div>
              <div className="testimoial-info text-center">
                <h5 className="m-0">David S. Morris</h5>
                <p className="founder" >CEO AT ENTAVO LLC</p>
              </div>
              <div className="testimonial-details text-center">
                <p>We have chosen to work extensively with Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam inventore dolor rerum..</p>
                <i className="fa fa-quote-left fs-3 "></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 m-auto m-0 ">
            <div className="testimonial-profile d-flex flex-column align-items-center">
              <div className="testimonial-image w-50">
                <img src="./images/testimonial_6.jpg" alt="" className="w-100 " />
              </div>
              <div className="testimoial-info text-center">
                <h5 className="m-0">Maria E. Flynn</h5>
                <p className="founder" >MANAGER AT COLDHAWK INC.</p>
              </div>
              <div className="testimonial-details text-center">
                <p>We have chosen to work extensively with Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam inventore dolor rerum..</p>
                <i className="fa fa-quote-left fs-3 "></i>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-secondary text-light py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-6">
            <ul>
              <li><h5>Company</h5></li>
              <li>Find a location nearest you.See  <a href="#">Our stories</a></li>
              <li>+391 (0)35 2568 4593</li>
              <li>hello@domain.com

              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <ul className="d-flex flex-column gap-1">
              <li><h4>Useful links</h4></li>
              <li>New Products</li>
              <li>Best Sellers</li>
              <li>Bundle  & Save</li>
              <li>Online Gift Card</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul>
              <li><h4>Information</h4></li>
              <li>Start a Return</li>
              <li>Contact Us</li>
              <li>Shipping FAQ</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-lg-4 pb-5">
            <h4>Good Emails</h4>
            <p>Enter your email below to be the first to know about new  collections and product launches</p>
            <input className="w-75 py-2" type="text" placeholder="Enter your email"></input>
            <input className="border border-0 py-2 p-1 bg-dark text-light" type="button" value="Subscribe"></input>
          </div>
          
      </div>
      </div>
    </footer>
    </>
  );
}

export default Content;
