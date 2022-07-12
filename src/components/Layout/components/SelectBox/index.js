import { InputLabel, NativeSelect } from "@mui/material"
import { CityData } from "./CityData"
import { CountryData } from "./CountryData"

function SelectBox({props}) {
    const file = JSON.stringify({props})
    let string = ""
    string = props.stringValue
    return (
        <div>
            <InputLabel 
                variant="standard" 
                htmlFor="uncontrolled-native"
            >
                {props}
            </InputLabel>
            <NativeSelect
                sx={{ width: `40ch`, mr: `20px`}}
                defaultValue={30}
                // inputProps={{
                // name: 'age',
                // id: 'uncontrolled-native',
                // }}
            >
                if (string === "CityData") {
                    CityData.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                })} 
                {/* else if (string === "CountryData") {
                    CountryData.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                })} */}
            </NativeSelect>
        </div>
    )
}

export default SelectBox