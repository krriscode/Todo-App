import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';


function Dashboard() {
    return (
        <div>
            {<Menu />}
            <br />
            <Link to="/home" > Todo App 1 </Link>
            <br />
            <Link to="/todo" > Todo App 2 </Link>
        </div>
    );
}

export default Dashboard;