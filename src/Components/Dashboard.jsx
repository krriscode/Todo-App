import { Link } from 'react-router-dom';
import style from './Dashboard.module.css';

function Dashboard() {
    return (
        <div className={style.container}>
            <label><Link to="/todo" > Todo App 1 </Link></label>
        </div>
    );
}

export default Dashboard;