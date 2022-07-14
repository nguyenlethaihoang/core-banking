import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss'
import { useEffect, useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Popper, Tooltip, Typography } from '@mui/material';

import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";

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

                <div className={cx('email_logo')}>
                        <EmailIcon 
                            sx={{ 
                                display: "flex",
                                marginRight: '5px',
                                // padding: 'px'
                            }} 
                        />
                </div>

                <div className={cx('bell_logo')}>
                <NotificationsIcon
                        // sx={{ display: { xs: "flex" }}}
                        />
                </div>

                <div className={cx('avt_logo')}>
                <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
            //   anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            //   open={Boolean(anchorElUser)}
            //   onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
                </div>
                

                <div className={cx('actions')}>
                    
                    <Box>
                        
                    </Box>
                </div>
            </div>
        </header>
    )
}

export default Header;