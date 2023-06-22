import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Tabs, Tab, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";


export default function ItemDetails() {

    const dispatch = useDispatch();
    const {itemId} = useParams();
    const [value, setValue]= useState("description")
    const [count, setCount] = useState(1);
    const [item,setItem]= useState(null);
    const [items,setItems]= useState([]);

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }

    async function getItem() {
      const item = await fetch(
        `http://localhost:1337/api/items/${itemId}?populate=img`,
        { method: "GET"}
      );
      const itemJson =await item.json();
      setItem(itemJson.data);
    }

    async function getItems() {
      const items = await fetch(
        "http://localhost:1337/api/items?populate=img",
        { method: "GET" }
      );
      const itemsJson = await items.json();
      setItems(itemsJson.data);
    }

    useEffect(() => {
      getItem();
      getItems();
    }, [itemId])  //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Box
    width="80%"
    margin="80px auto" 
    >
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* images */}
        <Box flex="1 1 40%" marginBottom="40px">
          <img alt={item?.name}
          width="100%"
          height="100%"
          src={`http://localhost:1337${item?.attributes?.img?.data?.attributes?.formats?.medium?.url}`}
          style={{
            objectFit:"contain"
          }} />
        </Box>
          {/* actions */}

          <Box flex="1 1 50%" marginBottom="40px">
            <Box
            display="flex"
            justifyContent="space-between">
              <Box>Home/Item</Box>
              <Box>Prev/Next</Box>
            </Box>
            <Box margin="65px 0 25px 0">
              <Typography variant="h2">{item?.attributes?.name}</Typography>
              <Typography >${item?.attributes?.price}</Typography>
              <Typography
              sx={{
                marginTop:"20px"
              }}
              >{item?.attributes?.longDescription}</Typography>
            </Box>

            {/* counting */}
            <Box display="flex" alignItems="center" minHeight="50px">
              <Box display="flex" alignItems="center" border={`1.5px solid ${shades.neutral[300]}`}
              marginRight="20px" padding="2px 5px">
                <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{
                padding: "0 5px"
                }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
              </Box>
              <Button
              sx={{
                backgroundColor: "#222222",
                color : "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px"
              }}
              onClick={()=> dispatch(addToCart({item: {...item,count}}))}>
                Add ToCart
              </Button>
            </Box>
            <Box>
              <Box margin="20px 0 5px 0" display="flex">
                <FavoriteBorderOutlinedIcon />
                <Typography sx={{
                  marginLeft: "5px"
                }}>Add to Wishlist</Typography>
              </Box>
              <Typography>Category: {item?.attributes?.categories}</Typography>
            </Box>
        </Box>
      </Box>
      {/* info */}
      <Box
      margin="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Description" value="description" />
          <Tab label="Reviews" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex"
      flexWrap="wrap"
      gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        )}
        {value === "reviews" && <div>Reviews</div>}
      </Box>

      {/* Related items */}
      <Box marginTop="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products:
        </Typography>
        <Box marginTop="20px" display="flex"
        flexWrap="wrap" columnGap="1.33%" justifyContent="space-between">
          {items.slice(0,4).map((item,i)=>(
            <Item key={`${item.name}- ${1}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
