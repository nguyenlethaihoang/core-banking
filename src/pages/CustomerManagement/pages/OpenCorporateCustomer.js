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
                <Typography variant="h6" align="center" color="#0a3060">2. Open Corporate Customer</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    


                </AccordionDetails>
            </Accordion>
    )
}

export default OpenCorporateCustomer