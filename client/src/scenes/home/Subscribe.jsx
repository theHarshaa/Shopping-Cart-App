import  { useState } from 'react'
import { Box,Typography, Divider, InputBase, IconButton } from '@mui/material';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

export default function Subscribe() {

    const [email, setEmail] = useState("");
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize='large'/>
      </IconButton>
      <Typography variant='h3'>Subscribe To our Newsletter</Typography>
      <Typography>and receive $20 coupon for first order when you checkout</Typography>
      <Box
      padding="2px 4px"
      margin="15px auto"
      display="flex"
      alignItems="center"
      width="75%"
      backgroundColor= "#F2F2F2"
      >
        <InputBase 
            sx={{ margin: 1,flex: 1 }}
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
        />
        <Divider sx={{
            height: 28,
            margin: 0.5
        }} orientation='vertical' />
        <Typography sx={{ padding: "10px", ":hover" : {cursor: "pointer"}}} >Subscribe</Typography>
      </Box>
    </Box>
  )
}
