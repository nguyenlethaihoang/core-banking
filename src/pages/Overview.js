import { Navigate } from 'react-router-dom'

const Overview = ({isLogin, handleLogin}) => {
    return (
        <>
            {/* {!isLogin &&  <Navigate to='/' />} */}
            <div className='home'>
                <h1>Overview</h1>
                <h1>Overview</h1>
                <h1>Overview</h1>
            </div>
        </>
    )
}

export default Overview