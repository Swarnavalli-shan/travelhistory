import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './login/login';
import Travel from './travel/index';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/travel' component = {Travel} />
                <Route path = '/' component = {Login} />
               
            </Switch>
        </BrowserRouter>

    )
};



ReactDOM.render(<Router />, document.querySelector('#root'));