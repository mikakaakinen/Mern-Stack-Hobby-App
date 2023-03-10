import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import { Context } from './context/Context';
import Category from './pages/category/Category';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <TopBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/register">{user ? <Home /> : <Register />}</Route>
                <Route path="/login">{user ? <Home /> : <Login />}</Route>
                <Route path="/write">{user ? <Write /> : <Register />}</Route>
                <Route path="/category">
                    <Category />
                </Route>
                <Route path="/settings">
                    {user ? <Settings /> : <Register />}
                </Route>
                <Route path="/post/:postId">
                    <Single />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
