import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss'
import { useEffect, useState } from 'react';
import { Popper } from '@mui/material';


const cx = classNames.bind(styles)

function Header() {

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, ,2, 3]);
        }, 0)
    })

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

                <Tippy 
                        interactive
                        visible={searchResult.length > 0}
                        // render={attrs => (
                        //     <PopperWrapper>
                        //         <div className={cx('search-result')} tabIndex="-1" {...attrs}>

                        //             Ket qua

                        //         </div>
                        //     </PopperWrapper>
                        // )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search features' spellCheck={false}/>
                        {/* <button classname={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button> */}
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}

                        
                            <button className={cx('search-btn')} >
                                {/* Search */}
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </button>
                        
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;