import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import App from './App.js';
import Profile from './Profile.js';
import Week_06 from './Week_06.js';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/>} />
                <Route path="/profile" element={ <Profile/>} />
                <Route path="/Week_06" element={ <Week_06/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;