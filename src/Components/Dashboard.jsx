import { Link } from 'react-router-dom';
import style from './Dashboard.module.css';

function Dashboard() {
    return (
        <div className={style.container}>
            <label><Link to="/todo1" > Todo App 1 </Link></label>
            <label><Link to="/todo2" > Todo App 2 </Link></label>
        </div>
    );
}

export default Dashboard;