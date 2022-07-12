import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SelectBox from "../../../components/Layout/components/SelectBox";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen ', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

function EnquiryCustomer() {
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
                    }}>3. Enquiry Customer</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <SelectBox props="Customer Type:"/>
                        <TextField sx={{ width: `40ch`,  mr: `20px`,}} 
                                // required
                                id="txtCustomerID" 
                                label="Customer ID" 
                                variant="outlined" 
                                
                        /> 
                    </div> 

                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <TextField sx={{ width: `40ch`,  mr: `20px`,}} 
                                // required
                                id="txtCellPhoneOfficeNum" 
                                label="Cell Phone/Office Num" 
                                variant="outlined" 
                                
                        /> 
                        <TextField sx={{ width: `40ch`,  mr: `20px`,}} 
                                // required
                                id="txtGBFullName" 
                                label="GB Full Name" 
                                variant="outlined" 
                                
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <TextField sx={{ width: `40ch`,  mr: `20px`,}} 
                                // required
                                id="txtDocID" 
                                label="Doc ID" 
                                variant="outlined" 
                                
                        /> 
                        <TextField sx={{ width: `40ch`,  mr: `20px`,}} 
                                // required
                                id="txtMainSector" 
                                label="Main Sector" 
                                variant="outlined" 
                                
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <TextField sx={{ width: `40ch`,  mr: `20px`,}} 
                                // required
                                id="txtSubSector" 
                                label="Sub Sector" 
                                variant="outlined" 
                                
                        /> 
                        <TextField sx={{ width: `40ch`,  mr: `20px`,}} 
                                // required
                                id="txtMainIndustry" 
                                label="Main Industry" 
                                variant="outlined" 
                                
                        /> 
                    </div> 
                    <div
                        style={{ display: "flex", alignItems: "flex-end", margin: "20px 5px" }}
                    > 
                        <TextField sx={{ width: `40ch`,  mr: `20px`,}} 
                                // required
                                id="txtSubIndustry" 
                                label="Sub Industry" 
                                variant="outlined" 
                                
                        /> 
                    </div> 

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Customer ID</TableCell>
                                <TableCell align="right">Customer Type</TableCell>
                                <TableCell align="right">GB Full Name</TableCell>
                                <TableCell align="right">Doc ID</TableCell>
                                <TableCell align="right">Cell Phone/Office Num</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {/* {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))} */}
                            No value
                            </TableBody>
                        </Table>
                        </TableContainer>

                </AccordionDetails>
            </Accordion>
    )
}

export default EnquiryCustomer