import React from 'react';
import { useTranslation } from "react-i18next";
import congress from '../../images/congress.jpg';
import house from '../../images/house.svg';
import senate from '../../images/senate.svg';

export default function AboutCongress() {
  const { t } = useTranslation();
  return (
    <>
      <main className="byc-masthead byc-masthead-background-style-2" role="main">
        <div className="container">
          <div className="row mb-5">
            <div className="col-6 mx-auto mb-3 col-md-4 order-md-2">
              <img
                src={congress}
                className="img-fluid rounded"
                alt={t('views.aboutCongress.imageAltText')}
              />
            </div>

            <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
              <h1 className="mb-3">
                {t('views.aboutCongress.title')}
              </h1>

              <p className="lead">
                {t('views.aboutCongress.intro.paragraph_1')}
              </p>

              <p className="lead">
                {t('views.aboutCongress.intro.paragraph_2')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="container">
        <hr className="mb-5"/>
      </div>

      <div className="byc-masthead-followup">
        <div className="container">
          <div className="row mb-5">
            <div className="col-6 mx-auto mb-3">
              <img
                src={house}
                className="img-fluid rounded mx-auto d-block"
                style={{ maxHeight: '300px' }}
                alt={t('views.aboutCongress.house.imageAltText')}
              />
            </div>

            <div className="col-md-6">
              <h2>{t('views.aboutCongress.house.title')}</h2>

              <p className="lead font-weight-normal">
                {t('views.aboutCongress.house.description.paragraph_1')}
              </p>

              <p className="lead font-weight-normal">
                {t('views.aboutCongress.house.description.paragraph_2')}
              </p>

              <div className="text-muted">
                <p>
                  {t('views.aboutCongress.house.description.powers.title')}
                </p>

                <ul>
                  <li>{t('views.aboutCongress.house.description.powers.first')}</li>
                  <li>{t('views.aboutCongress.house.description.powers.second')}</li>
                  <li>{t('views.aboutCongress.house.description.powers.third')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-6 mx-auto mb-3  order-md-12">
              <img
                src={senate}
                className="img-fluid rounded mx-auto d-block"
                style={{ maxHeight: '300px' }}
                alt={t('views.aboutCongress.senate.imageAltText')}
              />
              {/* {image_tag '/images/senate.svg', class: 'img-fluid rounded mx-auto d-block',
                    style: 'max-height: 300px', alt: t('views.aboutCongress.senate.imageAltText')} */}
            </div>

            <div className="col-md-6 order-md-1 ">
              <h2>{t('views.aboutCongress.senate.title')}</h2>

              <p className="lead font-weight-normal">
                {t('views.aboutCongress.senate.description.paragraph_1')}
              </p>

              <p className="lead font-weight-normal">
                {t('views.aboutCongress.senate.description.paragraph_2')}
              </p>

              <div className="text-muted">
                <p>
                  {t('views.aboutCongress.senate.description.powers.title')}
                </p>

                <ul>
                  <li>{t('views.aboutCongress.senate.description.powers.first')}</li>
                  <li>{t('views.aboutCongress.senate.description.powers.second')}</li>
                  <li>{t('views.aboutCongress.senate.description.powers.third')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="mb-5"/>
      </div>

      <div className="byc-masthead-followup">
        <div className="container">
          <h2 className="text-center mb-5">
            {t('views.aboutCongress.twoParts.title')}
          </h2>

          <div className="row mb-5">
            <div className="col-md-8 mx-auto">
              <p className="lead">
                {t('views.aboutCongress.twoParts.description.paragraph_1')}
              </p>

              <p className="lead">
                {t('views.aboutCongress.twoParts.description.paragraph_2')}
              </p>

              <p className="lead">
                {t('views.aboutCongress.twoParts.description.paragraph_3')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="mb-5"/>
      </div>

      <div className="byc-masthead-followup">
        <div className="container text-center">
          <div className="row mb-5">
            <div className="col-md-6 mx-auto">
              <p className="lead mb-4 text-muted">
                {t('views.aboutCongress.moreResearch.content')}
              </p>

              <div className="d-flex flex-column flex-md-row justify-content-center">
                <a href="https://youtu.be/n9defOwVWS8" className="btn btn-lg btn-custom-dark mb-3 mr-md-3">
                  {t('views.aboutCongress.moreResearch.buttonText')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}