import React from 'react';
import { useTranslation } from "react-i18next";

export default function AboutQualifiedImmunity() {
  const { t } = useTranslation();
  return (
    <main className="container text-center" role="main">
      <h1 className="my-5">
        {t('views.aboutQualifiedImmunity.title')}
      </h1>

      <div className="row">
        <div className="col-md-10 mx-auto">
          <blockquote className="lead blockquote">
            <p className="mb-0">
              {t('views.aboutQualifiedImmunity.quotation.content')}
            </p>

            <footer className="blockquote-footer">
              {t('views.aboutQualifiedImmunity.quotation.authors')}
              &nbsp;

              <cite title="Qualified Immunity: Explained">
                <a href="https://theappeal.org/qualified-immunity-explained/">
                  Qualified Immunity: Explained
                </a>
              </cite>
            </footer>
          </blockquote>

          <p
            className="my-5"
            dangerouslySetInnerHTML={
              { __html: t('views.aboutQualifiedImmunity.quotation.summary_html') }
            }
          />
        </div>

        <div className="col-sm-8 col-md-6 mx-auto">
          <div className="embed-responsive embed-responsive-16by9 mb-5">
            <iframe className="embed-responsive-item"
                    title="Qualified Immunity YouTube video explanation"
                    src="https://www.youtube.com/embed/km4uCOAzrbM?start=484&end=578"
                    allowfullscreen>
            </iframe>
          </div>
        </div>

        <div className="col-md-10 mx-auto">
          <p className="lead my-5">
            <a className="btn btn-lg btn-outline-custom-dark"
              href="https://www.markey.senate.gov/imo/media/doc/Qualified%20Immunity%20resolution.pdf">
              {t('views.aboutQualifiedImmunity.resolution_link_title')}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}