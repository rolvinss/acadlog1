import  React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Router, Route, browserHistory,Link } from 'react-router';
import { Tracker } from 'meteor/tracker';

import AppRouter from './../imports/Routers/AppRouter';
import Footer from './../imports/ui/other/Footer';

const unauthenticatedPages = ['/' ];
const authenticatedPages =['/home'];

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated){
    browserHistory.replace('/home');
  } else if(isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
});

Meteor.startup( function () {
  ReactDOM.render(<AppRouter/>, document.getElementById('app'));
  ReactDOM.render(<Footer/>, document.getElementById('footer'));

});
