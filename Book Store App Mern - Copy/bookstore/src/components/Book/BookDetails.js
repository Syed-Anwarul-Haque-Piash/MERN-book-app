import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

const BookDetails = () => {
  const[inputs,setInputs]=useState({})
  const [checked,setChecked]=useState(false);
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) =>setInputs(data.book));
  }, []);
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleChange=(e)=>{
    console.log(e)
  }
  console.log(inputs)
  
  return (
    <div>
       { inputs && (<form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          ></TextField>
          <FormLabel>Author</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
            value={inputs.author}
            onChange={handleChange}
          ></TextField>
          <FormLabel>Description</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
            value={inputs.description}
            onChange={handleChange}
          ></TextField>
          <FormLabel>Price</FormLabel>
          <TextField
          type='number'
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
            value={inputs.price}
            onChange={handleChange}
          ></TextField>
          <FormLabel>Image</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
            value={inputs.image}
            onChange={handleChange}
          ></TextField>
          <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
          <Button variant="contained" type="submit">Update Book</Button>
        </Box>
      </form>)}
    </div>
  );
};

export default BookDetails;
