// import React from "react";
import axios from 'axios'



// export const CityData = [
//     "01 - Thành phố Hà Nội",
//     "02 - Tỉnh Hà Giang",
//     "04 - Tỉnh Cao Bằng",
//     "06 - Tỉnh Bắc Kạn",
//     "08 - Tỉnh Tuyên Quang",
//     "10 - Tỉnh Lào Cai",
//     "11 - Tỉnh Điện Biên"
// ];

let CityData = []
axios.get('http://localhost:8080/storage/get_city_province')
.then(res => {
    const cityDataDB = res.data.rows
    cityDataDB.map((city) => {
        CityData.push(city.Name)
    })
})

export default CityData 
