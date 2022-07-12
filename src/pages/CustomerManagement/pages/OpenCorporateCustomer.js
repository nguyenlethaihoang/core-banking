import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SelectBox from "../../../components/Layout/components/SelectBox";

function OpenCorporateCustomer() {
    return (
        <Accordion >
                <AccordionSummary
                expandIcon  ={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant="h6" 
                    align="center" 
                    color="#0a3060"
                    fontWeight= "700"
                    sx={{
                        padding: "10px"
                    }}>2. Open Corporate Customer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    >
                        <TextField sx={{ width: `40ch`, mr: `20px`}} 
                            required
                            id="txtGBShortName" 
                            label="GB Short Name"
                            variant="outlined" 
                        />
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            required
                            id="txtGBFullName" 
                            label="GB Full Name" 
                            variant="outlined" 
                        /> 
                    </div>
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    >
                        <TextField sx={{ width: `25ch`, mr: `20px`}} 
                            required
                            id="txtIncorpDate" 
                            label="Incorp Date"
                            variant="outlined" 
                        />
                    </div>

                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    >
                        <TextField sx={{ width: `40ch`, mr: `20px`}} 
                            required
                            id="txtGBStreet" 
                            label="GB Street"
                            variant="outlined" 
                        />
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            required
                            id="txtGBTownDist" 
                            label="GBTown/Dist" 
                            variant="outlined" 
                        /> 
                    </div>                 
                    
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    >
                        <SelectBox props="City/Province"/>
                        <SelectBox props="GB Country"/>
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    >
                        <SelectBox props="Nationality"/>
                        <SelectBox props="Residence"/>
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    >
                        <SelectBox props="Doc Type"/>
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            required
                            id="txtDocID" 
                            label="Doc ID" 
                            variant="outlined" 
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    >
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            required
                            id="txtDocIssuePlace" 
                            label="Doc Issue Place" 
                            variant="outlined" 
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            required
                            id="txtDocIssueDate" 
                            label="Doc Issue Date" 
                            variant="outlined" 
                        /> 
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            // required
                            id="txtDocExpiryDate" 
                            label="Doc Expiry Date" 
                            variant="outlined" 
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            // required
                            id="txtContactPerson" 
                            label="Contact Person" 
                            variant="outlined" 
                        /> 
                        <TextField sx={{ width: `25ch`,  mr: `20px`}} 
                            // required
                            id="txtPosition" 
                            label="Position" 
                            variant="outlined" 
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <TextField sx={{ width: `22.5ch`,  mr: `20px`}} 
                            // required
                            id="txtTelephone" 
                            label="Telephone" 
                            variant="outlined" 
                        /> 
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            // required
                            id="txtEmailAddress" 
                            label="Email Address" 
                            variant="outlined" 
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <TextField sx={{ width: `40ch`,  mr: `20px`}} 
                            // required
                            id="txtRemarks" 
                            label="Remarks" 
                            variant="outlined" 
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <SelectBox props="Main Sector"/>
                        <SelectBox props="Sector"/>
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <SelectBox props="Main Industry"/>
                        <SelectBox props="Industry"/>
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <SelectBox props="Account Officer"/>
                    </div> 
                </AccordionDetails>
            </Accordion>
    )
}

export default OpenCorporateCustomer