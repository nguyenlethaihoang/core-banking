import { Button, TextField } from "@mui/material"
import SelectBox from "../../components/Layout/components/SelectBox";
// import TextBox from "../../components/Layout/components/TextBox"

function CustomerManagement() {
    return (
        <div className="root">
            <h2>Open Individual Customer</h2>

            <hr></hr>

            <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `25ch`, mr: `20px`}} 
                    // required
                    id="txtFirstName" 
                    label="First Name"
                    variant="outlined" 
                />
                <TextField sx={{ width: `25ch:`,  mr: `20px`}} 
                    // required
                    id="txtLastName" 
                    label="Last Name" 
                    variant="outlined" 
                /> 
                <TextField sx={{ width: `25ch:`}} 
                    // required
                    id="txtMiddleName" 
                    label="Middle Name" 
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtGBShortName" 
                    label="GB Short Name"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtGBFullName" 
                    label="GB Full Name"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtBirthDay" 
                    label="Birth Day"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtGBStreet" 
                    label="GB Street"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtGBTownDist" 
                    label="GB Town/Dist"
                    variant="outlined" 
                />
                <TextField sx={{ width: `22.5ch`, mr: `20px`}} 
                    // required
                    id="txtPhoneNumber" 
                    label="Phone Number"
                    variant="outlined" 
                />
        </div>
        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtCityProvince" 
                    label="City/Province"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    // required
                    id="txtGBCountry" 
                    label="GB Country"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    // required
                    id="txtNationality" 
                    label="Nationality"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    // required
                    id="txtResidence" 
                    label="Residence"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtDocType" 
                    label="Doc Type"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtDocID" 
                    label="Doc ID (*)"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtDocIssuePlace" 
                    label="Doc Issue Place"
                    variant="outlined" 
                />
                <TextField sx={{ width: `22.5ch`, mr: `20px`}} 
                    required
                    id="txtDocIssueDate" 
                    label="Doc Issue Date"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `22.5ch`, mr: `20px`}} 
                    // required
                    id="txtDocExpiryDate" 
                    label="Doc Expiry Date"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    // required
                    id="txtEmail Address" 
                    label="Email Address"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtMainSector" 
                    label="Main Sector"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtSubSector" 
                    label="SubSector"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtMainIndustry" 
                    label="Main Industry"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtIndustry" 
                    label="Industry"
                    variant="outlined" 
                />
        </div>

        <div
                style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
            >
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtAccountOfficer" 
                    label="Account Officer"
                    variant="outlined" 
                />
                <TextField sx={{ width: `40ch`, mr: `20px`}} 
                    required
                    id="txtCompanyBook" 
                    label="Company Book"
                    variant="outlined" 
                />
        </div>

        <Button 
            sx={{ width: `40ch`, mr: `400px`, padding: ``}} 
            variant="contained"
            // color="success"
            size="large"
            // href="https://google.com"
            onClick={() => {
                alert('Save susscessfully');
              }}
        >
            SAVE
        </Button>

        <SelectBox props="CityData"/>

        </div>
    )
}

export default CustomerManagement