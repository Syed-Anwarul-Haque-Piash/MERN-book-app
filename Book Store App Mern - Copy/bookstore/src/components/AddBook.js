import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import axios from "axios";
//import useNavigate  from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
    //const history=useNavigation()
    let navigate = useNavigate();
   const [inputs,setInputs]=useState({
    name:'',
    author:'',
    
    price:'',
    description:''
   })
   const handleChange=(e) => {
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
    // console.log(e.target.name,e.target.value)
   }
   const sendRequest=async()=>{
    await axios.post("http://localhost:3000/books",{
        name:String(inputs.name),
        author:String(inputs.author),
        description:String(inputs.description),
        price:Number(inputs.price),
        available:Boolean(checked),
        image:String(inputs.image)
    }).then(res=>res.data);

   }
   const [checked,setChecked]=useState(false)
   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(inputs,checked);
     sendRequest().then(()=>navigate('books'))
   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <Button variant="contained" type="submit">Add Book</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBook;
