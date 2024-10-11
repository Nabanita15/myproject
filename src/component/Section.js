import React from "react";
import { useEffect, useState } from "react";
const Section = () => {
  const cardItem = [
    {
      id: 1,
      save: "Save₹100.00",
      topic: "Rice Water for Hair and Skin",
      link: "The power of grain for your hair health gain.",
      money: "₹499.00",
      off: "20% OFF",
    },
    {
      id: 2,
      save: "Save₹100.00",
      topic: "Rice Water for Hair and Skin",
      link: "The power of grain for your hair health gain.",
      money: "₹499.00",
      off: "20% OFF",
    },
    {
      id: 3,
      save: "Save₹100.00",
      topic: "Rice Water for Hair and Skin",
      link: "The power of grain for your hair health gain.",
      money: "₹499.00",
      off: "20% OFF",
    },
  ];

  // Clone the items to create a continuous scroll effect
  const clonedItems = [...cardItem, ...cardItem];

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCurrentTime = () => {
    const now = new Date();

    // Calculate the time components
    const days = Math.floor(now / (1000 * 60 * 60 * 24)); // Assuming you want the total days since the epoch
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    setTime({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  };

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Initial call to set the time immediately
    updateCurrentTime();

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      {/*-banner-section start */}
      <div className="banner-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-12 sm-col-12 col-md-12 col-lg-12 ">
              <div className="banner-text">
                <h1>
                  Ecocert Certified <br />
                  <span className="h-style">Organic &amp; Natural</span>
                </h1>
                <p>Environment friendly &amp; sustainable</p>
                <div className="button-cen">
                  <div className="botton1">
                    <a href="#">View all</a>
                  </div>
                  <div className="botton2">
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*- banner-section end */}
      <div className="natura-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-12 sm-col-12 col-md-12 col-lg-12 "></div>
          </div>
          <div className="row">
            <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3">
              <div className="box-l">
                <h4>New Launch</h4>
                <p>
                  Explore our latest launch, a carefully made collection of
                  herbal treasures designed as per requests made by you to
                  Nanaji.
                </p>
                <div className="botton">
                  <a href="#">View all</a>
                </div>
              </div>
            </div>
            <div className="marquee">
              <div className="marquee-inner">
                {clonedItems.map((item, i) => (
                  <div
                    className="xs-col-3 sm-col-3 col-md-3 col-lg-3 slider-iner"
                    key={i}
                  >
                    <div className="inner">
                      <p className="save">{item.save}</p>
                      <div className="box-n">
                        <img src="/images/protct.png" alt="protct" />
                        <h6>{item.topic}</h6>
                        <a href="#">{item.link}</a>
                        <div className="pro-price">
                          <s className="product__compare-at-price">
                            <span className="money">{item.money}</span>
                          </s>
                          <p className="product__product-price">
                            <span className="money">₹399.00</span>
                          </p>
                          <div className="custom_discount-bsl">{item.off}</div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="product-card__quick-add-button"
                      >
                        <span className="sr-only">Add to cart</span>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*- natura-section end */}
      {/*- organic-section start */}
      <div className="organic-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6 ">
              <div className="img-left">
                <img src="images/praice.png" />
              </div>
            </div>
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6 ">
              <div className="text-center">
                <div className="bor">
                  <p className="mb-2">Natural &amp; Organic Shampoo</p>
                  <h2 className="fw-bold text-uppercase mb-4">
                    Deals of the Day
                  </h2>
                  <div className="product">
                    <s className="product__compare-at-price">
                      <span className="money">$99.99</span>
                    </s>
                    <h2 className="display-4 text-primary mb-4">$95.99</h2>
                  </div>
                  <h5>Fresh Organic Shampoo</h5>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam feugiat rutrum lectus sed auctor.
                  </p>
                  <div className="row g-0 cdt mb-4">
                    <div id="clockdiv">
                      <div>
                        <span className="days">{time.days}</span>
                        <div className="smalltext">Day</div>
                      </div>
                      <div>
                        <span className="hours">{time.hours}</span>
                        <div className="smalltext">Hours</div>
                      </div>
                      <div>
                        <span className="minutes">{time.minutes}</span>
                        <div className="smalltext">Minutes</div>
                      </div>
                      <div>
                        <span className="seconds">{time.seconds}</span>
                        <div className="smalltext">Seconds</div>
                      </div>
                    </div>
                  </div>
                  <a className="btn btn-primary py-2 px-4" href="">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*- organic-section end */}
      {/*- our-section start */}
      <div className="our-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-12 sm-col-12 col-md-12 col-lg-12 ">
              <div className="hding-tow">
                <h2>Our Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="xs-col-3 sm-col-3 col-md-3 col-lg-3 ">
              <p className="save">Save₹100.00</p>
              <div className="box-n">
                <img src="images/protct.png" />
                <h6>Rice Water for Hair and Skin</h6>
                <a href="#">The power of grain for your hair health gain.</a>
                <div className="pro-price">
                  <s className="product__compare-at-price">
                    <span className="money">₹499.00</span>
                  </s>
                  <p className="product__product-price">
                    <span className="money">₹399.00</span>
                  </p>
                  <div className="custom_discount-bsl">20% OFF</div>
                </div>
              </div>
              <button type="submit" className="product-card__quick-add-button">
                <span className="sr-only">Add to cart</span>
                Add To Cart
              </button>
            </div>
            <div className="xs-col-3 sm-col-3 col-md-3 col-lg-3 ">
              <p className="save">Save₹100.00</p>
              <div className="box-n">
                <img src="images/protct.png" />
                <h6>Rice Water for Hair and Skin</h6>
                <a href="#">The power of grain for your hair health gain.</a>
                <div className="pro-price">
                  <s className="product__compare-at-price">
                    <span className="money">₹499.00</span>
                  </s>
                  <p className="product__product-price">
                    <span className="money">₹399.00</span>
                  </p>
                  <div className="custom_discount-bsl">20% OFF</div>
                </div>
              </div>
              <button type="submit" className="product-card__quick-add-button">
                <span className="sr-only">Add to cart</span>
                Add To Cart
              </button>
            </div>
            <div className="xs-col-3 sm-col-3 col-md-3 col-lg-3 ">
              <p className="save">Save₹100.00</p>
              <div className="box-n">
                <img src="images/protct.png" />
                <h6>Rice Water for Hair and Skin</h6>
                <a href="#">The power of grain for your hair health gain.</a>
                <div className="pro-price">
                  <s className="product__compare-at-price">
                    <span className="money">₹499.00</span>
                  </s>
                  <p className="product__product-price">
                    <span className="money">₹399.00</span>
                  </p>
                  <div className="custom_discount-bsl">20% OFF</div>
                </div>
              </div>
              <button type="submit" className="product-card__quick-add-button">
                <span className="sr-only">Add to cart</span>
                Add To Cart
              </button>
            </div>
            <div className="xs-col-3 sm-col-3 col-md-3 col-lg-3 ">
              <p className="save">Save₹100.00</p>
              <div className="box-n">
                <img src="images/protct.png" />
                <h6>Rice Water for Hair and Skin</h6>
                <a href="#">The power of grain for your hair health gain.</a>
                <div className="pro-price">
                  <s className="product__compare-at-price">
                    <span className="money">₹499.00</span>
                  </s>
                  <p className="product__product-price">
                    <span className="money">₹399.00</span>
                  </p>
                  <div className="custom_discount-bsl">20% OFF</div>
                </div>
              </div>
              <button type="submit" className="product-card__quick-add-button">
                <span className="sr-only">Add to cart</span>
                Add To Cart
              </button>
            </div>
            <div className="button">
              <a href="our-product.html">View all</a>
            </div>
          </div>
        </div>
      </div>
      {/*- our-section end */}
      {/*-bac-product start*/}
      <div className="bac-product">
        <div className="container">
          <div className="row">
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6 bc-img ">
              <div className="bc-left">
                <div className="banner-content">
                  <h4>-50% Sale</h4>
                  <h5>Winter Vacation</h5>
                </div>
              </div>
            </div>
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6 bc-img">
              <div className="bc-right">
                <div className="banner-content">
                  <h4>-25% Sale</h4>
                  <h5>Summer Vacation</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*- bac-product end */}
      {/*-teas-section start*/}
      <div className="teas-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6">
              <div className="img-d">
                <img src="images/protct.png" />
              </div>
            </div>
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6">
              <div className="teas-hdding">
                <h2>High-Quality Teas &amp; Botanicals</h2>
                <p>
                  Save 25% sitewide on beautifully packaged gift sets, tea
                  collections, and exquisite accessories Moms adore.
                </p>
                <div className="button">
                  <a href="#">View all</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-teas-section end*/}
      {/*-late-section start*/}
      <div className="late-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-12 sm-col-12 col-md-12 col-lg-12">
              <div className="hding-tow">
                <h2>Latest News &amp; Recipes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3">
              <div className="teas-hdding">
                <img src="images/late1.png" />
                <div className="right-text">
                  <h4>Chamomile: Herbal Tea of the Month</h4>
                  <a href="">Read more</a>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3">
              <div className="teas-hdding">
                <img src="images/late2.png" />
                <div className="right-text">
                  <h4>Chamomile: Herbal Tea of the Month</h4>
                  <a href="">Read more</a>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3">
              <div className="teas-hdding">
                <img src="images/late3.png" />
                <div className="right-text">
                  <h4>Chamomile: Herbal Tea of the Month</h4>
                  <a href="">Read more</a>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3">
              <div className="teas-hdding">
                <img src="images/late4.png" />
                <div className="right-text">
                  <h4>Chamomile: Herbal Tea of the Month</h4>
                  <a href="">Read more</a>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-late-section end*/}
      {/*-ultimate-section  start*/}
      <div className="ultimate-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3 left-img">
              <div className="img-d">
                <img src="images/about1.png" />
              </div>
              <div className="img-e">
                <img src="images/about3.png" />
              </div>
            </div>
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6">
              <div className="Contact-center">
                <div className="hding-tow">
                  <h2>The Ultimate Tea Experience</h2>
                </div>
                <p>
                  Extraordinary teas meet unparalleled presentation for an
                  exceptional experience that could only be Teapoz. We work
                  directly with growers that share our dedication and
                  determination to producing the definitive expression of every
                  type of tea we feature. Our ingredients represent less than 1%
                  of all the teas available worldwide. Our diverse, subtle
                  flavors are a result of creating without compromise.
                </p>
                <div className="button">
                  <a href="#">Learn more</a>
                </div>
              </div>
            </div>
            <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3 img-leftm">
              <div className="img-d">
                <img src="images/about2.png" />
              </div>
              <div className="img-e">
                <img src="images/about1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-ultimate-section end*/}
      {/*-health-section start*/}
      <div className="health-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6 left-img">
              <div className="hding-tow">
                <h2>
                  Want To Stay Healthy Drink Matcha Best Flavour Of Our Tea
                </h2>
              </div>
              <p>
                Integer ut ligula quis lectus fringilla elementum porttitor sed
                est. Fringilla efficitur ligula sed lobortis. Sed tempus
                faucibus mi, quis fringilla mauris lacinia sed. Integer vehicula
                egestas nunc ac facilisis. Nam bibendum non faucibus libero eu.
                Curabitur posuere to ullamcorper
              </p>
              <div className="button">
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6 left-img">
              <iframe
                width="100%"
                height={300}
                src="https://www.youtube.com/embed/R3yY9jFcaxc?si=9vmykWXX5IEs6KKS"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
      {/*-health-section end*/}
      {/*-world-section start*/}
      <div className="world-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6 left-img">
              <div className="img-d">
                <img src="images/pest.png" />
              </div>
            </div>
            <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6">
              <div className="right-img">
                <div className="hding-tow">
                  <h2>Tea Is One Of The Most Popular Drinks In The World.</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-world-section end*/}
      {/*-Testimonial-section start*/}
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-12 sm-col-12 col-md-12 col-lg-12">
              <div className="hding-tow">
                <h2>Testimonials</h2>
              </div>
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-ir">
                      <div className="img-e">
                        <img src="images/testi-use.png" />
                      </div>
                      <div className="top">
                        <div className="name font-headers color-black">
                          Patricia James
                        </div>
                        <div className="subheader color-main font-headers">
                          Top Manager
                        </div>
                      </div>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam facilisis at turpis eu faucibus. In
                          dignissim, enim eu ornare aliquet, metus ex tempor
                          neque, sit amet efficitur turpis lorem et odio. Nam
                          congue in orci at facilisis. In efficitur, leo non
                          commodo lacinia, odio metus sodales purus, sed
                          consequat lectus mi in purus.
                        </p>
                      </div>
                      <div className="star">
                        {" "}
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-ir">
                      <div className="img-e">
                        <img src="images/testi-use.png" />
                      </div>
                      <div className="top">
                        <div className="name font-headers color-black">
                          Patricia James
                        </div>
                        <div className="subheader color-main font-headers">
                          Top Manager
                        </div>
                      </div>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam facilisis at turpis eu faucibus. In
                          dignissim, enim eu ornare aliquet, metus ex tempor
                          neque, sit amet efficitur turpis lorem et odio. Nam
                          congue in orci at facilisis. In efficitur, leo non
                          commodo lacinia, odio metus sodales purus, sed
                          consequat lectus mi in purus.
                        </p>
                      </div>
                      <div className="star">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-ir">
                      <div className="img-e">
                        <img src="images/testi-use.png" />
                      </div>
                      <div className="top">
                        <div className="name font-headers color-black">
                          Patricia James
                        </div>
                        <div className="subheader color-main font-headers">
                          Top Manager
                        </div>
                      </div>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam facilisis at turpis eu faucibus. In
                          dignissim, enim eu ornare aliquet, metus ex tempor
                          neque, sit amet efficitur turpis lorem et odio. Nam
                          congue in orci at facilisis. In efficitur, leo non
                          commodo lacinia, odio metus sodales purus, sed
                          consequat lectus mi in purus.
                        </p>
                      </div>
                      <div className="star">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="carousel-caption d-none d-md-block"></div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-Testimonial-section end*/}
      {/*-icon-section start*/}
      <div className="icon-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-2 sm-col-2 col-md-2 col-lg-2">
              <div className="icon-div b-d">
                <i className="fa-solid fa-cart-shopping" />
                <p>Free Shipping</p>
              </div>
            </div>
            <div className=" xs-col-2 sm-col-2 col-md-2 col-lg-2">
              <div className="icon-div">
                <i className="fa-solid fa-boxes-packing" />
                <p>Hand Packed</p>
              </div>
            </div>
            <div className=" xs-col-2 sm-col-2 col-md-2 col-lg-2">
              <div className="icon-div">
                <i className="fa-solid fa-file-shield" />
                <p>Secured Payment</p>
              </div>
            </div>
            <div className=" xs-col-2 sm-col-2 col-md-2 col-lg-2">
              <div className="icon-div">
                <i className="fa fa-check-circle" aria-hidden="true" />
                <p>Quality Guarantee</p>
              </div>
            </div>
            <div className=" xs-col-2 sm-col-2 col-md-2 col-lg-2">
              <div className="icon-div">
                <i className="fa-solid fa-headphones" />
                <p>Customer Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-icon-section end*/}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13518.853007815713!2d76.2629000320481!3d32.104034709840576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4f902117bb1f%3A0xf28a1e3b1ff9e8f9!2sKangra%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1727256970607!5m2!1sen!2sin"
        width="100%"
        height={400}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/*-input-section start*/}
      <div className="input-section">
        <div className="container">
          <div className="row">
            <div className=" xs-col-4 sm-col-4 col-md-4 col-lg-4">
              <h4>Join The Tea Club</h4>
              <p>
                You will receive a FREE STAMP and a 10% discount for your next
                purchase.
              </p>
            </div>
            <div className=" xs-col-8 sm-col-8 col-md-8 col-lg-8">
              <div className="form-fields">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email address"
                  required=""
                />
                <button type="submit" value="Submit">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-input-section end*/}
    </div>
  );
};

export default Section;
