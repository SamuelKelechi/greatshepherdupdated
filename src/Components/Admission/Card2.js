import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import { Table } from '@mui/material';
import Data from "./Data2.json"
import {makeStyles, createStyles} from "@mui/styles"
import { fontWeight } from '@mui/system';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiDataGrid-columnHeaders":{
        backgroundColor:"#a69ab7",
        color: "black",
        fontWidth:"bold",
      },
        "& .MuiDataGrid-row": {
          backgroundColor:"#dbcae8",
          color: "Black",
          fontWeight:"700",
          "&:nth-child(2n)": { backgroundColor: "#a69ab7" }
        },
     
    }
  })
);

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: '-', headerName: '-', width: 330, headerClassName: 'headed', },
  { field: 'installmental payment', headerName: 'installmental payment', width: 230 },
  { field: 'other payment', headerName: 'other payment', width: 230 },
  { field: 'total', headerName: 'total', width: 230 },

 
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];



function Card2() {
  console.log(Data);
  const classes = useStyles()
  return (
    <Container>
      <Wrapper>
        <Title>MASTERS: MINIUM OF THREE CHARACTER</Title>
        <Title2>TUTORS FEE AND OTHER CHARGES</Title2>
        <Tablecon>
        <DataGrid
        rows={Data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        className={classes.root}
      
      />
        </Tablecon>
        
      </Wrapper>
    </Container>
  )
}

export default Card2



const Title2 = styled.div`
height:50px;
width: 90%;
background-color: #662b8c;
display: flex;
justify-content:center;
align-items: center;
color: white;
font-weight: 600;
font-size:20px;

`

const Title = styled.div`
margin-bottom: 10px;
font-weight:700;
font-size:25px;

@media screen and (max-width:425px){
  font-size:15px;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
}
`



const Tablecon = styled.div`
height: 300px;
width: 90%;
`

const Container = styled.div``
const Wrapper = styled.div`
width: 100%;
flex-direction: column;
margin-top: 50px;
display: flex;
justify-content:center;
align-items: center;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;



`