import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Courses from './Courses';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto mt-8 px-4">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
            <Route path="/courses" component={Courses} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;