import React from 'react';

export default function Home() {
  return (
    <>
      <main class="byc-masthead byc-masthead-background-style-1" role="main">
        <div class="container">
          <div class="row">
            <div class="col-md-10 text-center text-md-left">
              <h1 class="mb-3">
                4 steps to help stop police brutality:
              </h1>

              <p class="lead mb-5">
                1. Dial the number below.<br />
                2. Type in your zip code.<br />
                3. Select a congressmen.<br />
                4. Read from the script below.
              </p>

              <div class="d-flex flex-column flex-md-row">
                <a href="tel:7752048432" class="btn btn-lg btn-custom-dark mb-3 mr-md-3">(775) 204-8432</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div class="byc-masthead-followup">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="mb-3 text-center">
                The George Floyd Justice in Policing Act of 2020
              </h1>

              <p class="lead mb-3 text-center text-muted">
                The House of Representatives just passed this bill which, "addresses a
                wide range of policies and issues regarding policing practices and law
                enforcement accountability". Now it's up to the Senate. Call your
                Senator and let them know this is an important issue for you.
              </p>
            </div>

            <div class="col-md-6 mx-auto">
              <div class="card my-5 text-body" >
                <div class="card-body">
                  <h2 class="card-title mb-4">
                    When calling your senator, this can help
                  </h2>

                  <p class="card-text">
                    Hello, my name is <strong>YOUR NAME</strong>. I'm a constituent from
                    <strong>YOUR CITY</strong>, zip code <strong>YOUR ZIP CODE</strong>.
                    I don't need a response.
                  </p>

                  <p class="card-text">
                    I’m very concerned about the ongoing violence police officers are
                    using against civilians and I strongly encourage the senator to vote
                    yes on bill <strong>H.R.7120</strong>, the “George Floyd Justice in
                    Policing Act of 2020“.
                  </p>

                  <p class="card-text">
                    Thank you for your hard work!
                  </p>
                </div>
              </div>
            </div>
          </div>


          <hr />

          <div class="text-center my-5">
            <h3>
              Want to do more?
            </h3>

            <p>
              Support this site by donating with the button below. Any money not
              used to keep the lights on will be donated to the <a href="https://secure.actblue.com/donate/naacp-1">NAACP</a>.
            </p>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="AQEA49Z6MPEC8" />
              <input type="hidden" name="item_name" value="Support for BugYourCongressman.com. Any money not used to keep the lights on will be donated to the NAACP." />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}