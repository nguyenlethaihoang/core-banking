import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'


const cx = classNames.bind(styles)

function Header() {
    return (
        <header
            className={cx('wrapper')}
        >
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img 
                        src = "http://corebanking.vietvictory.vn/images/logo.png"
                        alt = "VietVictory"
                        width= "190"
                        height = "55"
                    />
                </div>
                <div className={cx('university_logo')}>
                    <img 
                            src = "https://app.universityhub.com/assets/images/univ-hub-logo-only.png"
                            alt = "Hub_University"
                            width= "70"
                            height = "55"
                        />
                </div>
                <div className={cx('actions')}>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;