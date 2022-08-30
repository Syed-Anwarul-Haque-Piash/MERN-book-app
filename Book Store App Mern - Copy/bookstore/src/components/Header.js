import React, { useState } from 'react';
import {AppBar, Tabs, Toolbar, Typography,Tab} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const[value,setValue]=useState()
    const valueChange=(e,val)=>{
        setValue(val)

    }
    return (
        <div>
            
        <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
            <Toolbar>
               <Typography>
                 <BookIcon/>
                </Typography>
                <Tabs sx={{ml:'auto'}} value={value} onChange={valueChange} indicatorColor='primary' textColor='inherit'>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Book"/>
                    <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                    <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>
            
        </div>
    );
};

export default Header;