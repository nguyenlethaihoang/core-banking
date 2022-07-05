import { Container, Grid, Box, Link } from '@mui/material';
import { textTransform } from '@mui/system';

const arr = ["Terms",
    "Privacy",
    "Security",
    "Status",
    "Docs",
    "Contact",
    "Pricing",
    "API",
    "Training",
    "Blog",
    "About",]

function Footer() {
    return (
        <footer>
            <Box 
                px={{ xs:3, sm: 10}} 
                py={{xs: 5, sm: 10}} 
                bgcolor="text.secondary" 
                color="white"
            >
                <Container maxWidth="1g">
                    <Grid container spacing={5}>
                       
                    </Grid>
                    <Box>
                        <ul>
                            {arr.map(
                                (value, index)=>{
                                    return (
                                        <li style={{textDecoration: 'none'}} key={index}>{value}</li>
                                    )
                                }
                            )}
                        </ul>
                    </Box>
                    <Box
                        textAlign="center"
                        pt={{xs: 5, sm: 10}}
                        pb={{xs: 5, sm: 0}}
                    >
                        Material UI Workshop &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer