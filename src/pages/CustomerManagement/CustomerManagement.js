import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SelectBox from "../../components/Layout/components/SelectBox";
import OpenIndividualCustomer from "./pages/OpenIndividualCustomer";
import OpenCorporateCustomer from "./pages/OpenCorporateCustomer";
// import TextBox from "../../components/Layout/components/TextBox"

function CustomerManagement() {
    return (
        <div className="root">

            <OpenIndividualCustomer />
            <OpenCorporateCustomer />


        

        </div>
    )
}

export default CustomerManagement