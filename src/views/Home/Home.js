import React from 'react';
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <main className="byc-masthead byc-masthead-background-style-1" role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-10 text-center text-md-left">
              <h1 className="mb-3">
                {t('views.home.instructions.title')}
              </h1>

              <p className="lead mb-5">
                {t('views.home.instructions.step_1')}<br />
                {t('views.home.instructions.step_2')}<br />
                {t('views.home.instructions.step_3')}<br />
                {t('views.home.instructions.step_4')}
              </p>

              <div className="d-flex flex-column flex-md-row">
                <a href="tel:7752048432" className="btn btn-lg btn-custom-dark mb-3 mr-md-3">(775) 204-8432</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="byc-masthead-followup">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-3 text-center">
                {t('views.home.scripts.title')}
              </h1>

              <p className="lead mb-3 text-center text-muted">
                {t('views.home.scripts.subtitle')}
              </p>
            </div>

            <div className="col-md-6 mx-auto">
              <div className="card my-5 text-body" >
                <div className="card-body">
                  <h2 className="card-title mb-4">
                    {t('views.home.scripts.senate.title')}
                  </h2>

                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={
                      { __html: t('views.home.scripts.senate.paragraph_1_html') }
                    }
                  />

                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={
                      { __html: t('views.home.scripts.senate.paragraph_2_html') }
                    }
                  />

                  <p className="card-text">
                    {t('views.home.scripts.senate.paragraph_3')}
                  </p>
                </div>
              </div>
            </div>
          </div>


          <hr />

          <div className="text-center my-5">
            <h3>
              {t('views.home.donation.title')}
            </h3>

            <p
              dangerouslySetInnerHTML={
                { __html: t('views.home.donation.description_html') }
              }
            />

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