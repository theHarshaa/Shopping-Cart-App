import { useTheme } from '@mui/material';
import { Box,Typography }from '@mui/material';
import { shades } from '../../theme';


export default function Footer() {
    const { palette : {
        neutral  }} =useTheme();

  return (
    <Box
    marginTop="70px" 
    padding="40px 0"
    backgroundColor={neutral.light}>
      <Box 
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      rowGap="30px"
      columnGap="clamp(20px, 30px, 40px)">
        <Box width="clamp(20%, 30%, 40%)">
            <Typography variant='h4' fontWeight="bold" marginBottom="30px" color={shades.secondary[500]}>
                ECOMMer.
            </Typography>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </Box>
        <Box>
            <Typography variant='h4' fontWeight="bold" marginBottom="30px">
                About Us
            </Typography>
            <Typography marginBottom="30px">Careers</Typography>
            <Typography marginBottom="30px">Our Stores</Typography>
            <Typography marginBottom="30px">Terms & Conditions</Typography>
            <Typography marginBottom="30px">Privacy Policy</Typography>
        </Box>
        <Box>
            <Typography variant='h4' fontWeight="bold" marginBottom="30px">
                Customer Cares
            </Typography>
            <Typography marginBottom="30px">Help Center</Typography>
            <Typography marginBottom="30px">Track Your Order</Typography>
            <Typography marginBottom="30px">Corporate & Bulk Purchase</Typography>
            <Typography marginBottom="30px">Return & Refund</Typography>
        </Box>
        <Box width="clamp(20px, 25%, 30%)">
            <Typography variant='h4' fontWeight="bold" marginBottom="30px">
                Contact Us
            </Typography>
            <Typography marginBottom="30px">Jhansi ,284002 </Typography>
            <Typography marginBottom="30px">Email: ECOMMer@gmail.com</Typography>
            <Typography marginBottom="30px">+91-9876543210</Typography>
            </Box>
      </Box>
    </Box>
  )
}
