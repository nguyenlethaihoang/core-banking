import { InputLabel, NativeSelect } from "@mui/material"

 import  CityData  from "./CityData"

function SelectBox() {
    console.log(CityData)
    return (
        <div>
            <InputLabel 
                variant="standard" 
                htmlFor="uncontrolled-native"
            >
                City/Province
            </InputLabel>
            <NativeSelect
                sx={{ width: `40ch`, mr: `20px`}}
                defaultValue={30}
                // inputProps={{
                // name: 'age',
                // id: 'uncontrolled-native',
                // }}
            >
                
                {
                
                CityData.map((item, index) => {
                    console.log(item)
                    return (
                        <option key={index} value={item}>{item}</option>
                    )
                })}

            </NativeSelect>
        </div>
    )
}

export default SelectBox