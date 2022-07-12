import LoginForm from "./LoginForm";
import Slider from "./Slider";
import './Login.css'


function Login() {
    return (
        <div>
            {/* <div class="header">
            <h1>Website Quản Trị Mạng</h1>
            </div>

            <div class="topnav">
            <a href="#">Làng Công nghệ</a>
            <a href="#">Công nghệ</a>
            <a href="#">Cuộc sống</a>
            </div> */}

            <div class="row">
            <div class="column side">
                <Slider />
            </div>

            <div class="column middle">
                <LoginForm />
            </div>

            <div class="column final">
            </div>

            {/* <div class="column side">
                <h2>Liên hệ</h2>
                <p>Điện thoại: 024 2242 6188.</p>
                <p>Email: info@meta.vn.</p>
            </div> */}
            </div>

            {/* <div class="footer">
            <p>Giấy phép số 362/GP-BTTTT. Bộ TT&TT cấp ngày 30/06/2016.</p>
            </div> */}
        </div>
    )
}

export default Login;