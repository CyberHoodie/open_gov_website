import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { AboutQualifiedImmunity } from './views/AboutQualifiedImmunity';
import { AboutCongress } from './views/AboutCongress';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Routes() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about-qualified-immunity">
          <AboutQualifiedImmunity />
        </Route>

        <Route path="/about-congress">
          <AboutCongress />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}
