import classNames from 'classnames/bind';
import Header from "../components/Header";
import styles from './DefaultLayout.module.scss'
import Sidebar from "./Sidebar_1";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div classname={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;