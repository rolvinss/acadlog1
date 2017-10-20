import  React from 'react';
import {Router, Route, browserHistory,Link } from 'react-router';

import Home from '../ui/other/Home';
import Public from '../ui/other/Public';
import EditProfile from '../ui/other/EditProfile';
import PageNotFound from '../ui/other/PageNotFound';


const unauthenticatedPages = ['/' ];

const authenticatedPages =['/home'];


const onEnterPublicPage = () => {
  if(Meteor.userId()) {
    browserHistory.replace('/home');
  }
};

const onEnterPrivatePage = () => {
  if(!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Public} onEnter={onEnterPublicPage}/>
    <Route path="/home" component={Home} onEnter={onEnterPrivatePage}/>
    <Route path="/EditProfile" component={EditProfile} onEnter={onEnterPrivatePage}/>
    <Route path="/*" component={PageNotFound} />
  </Router>

);
export default AppRouter;
