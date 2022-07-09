import { TextField} from "@mui/material"

function TextBox({ props1, props2 }) {
    return (
        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "10px 5px" }}
            >
                {/* <Typography sx={{ mr: 3, minWidth: 200 }}>{props1} </Typography> */}
                <TextField sx={{ width: `${props2}`}} 
                    // required
                    id="outlined-required" 
                    label={props1} 
                    variant="outlined" 
                />
                <TextField sx={{ width: `${props2}`}} 
                    // required
                    id="outlined-required" 
                    label={props1} 
                    variant="outlined" 
                /> 
        </div>
    )            
}

export default TextBox