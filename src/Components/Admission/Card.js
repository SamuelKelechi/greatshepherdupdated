import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import { Table } from '@mui/material';
import Data from "./Data.json"
import {makeStyles, createStyles} from "@mui/styles"
import { fontWeight } from '@mui/system';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiDataGrid-columnHeaders":{
        backgroundColor:"#0082cb",
        color: "white"
      },
        "& .MuiDataGrid-row": {
          backgroundColor:"#b0c8e2",
          color: "Black",
          fontWeight:"700",
          "&:nth-child(2n)": { backgroundColor: "#e3edfc" }
        },
     
    }
  })
);

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'level', headerName: 'level', width: 130, headerClassName: 'headed', },
  { field: 'Application-form', headerName: 'Application-form', width: 130 },
  { field: 'Registration and Admin Fee', headerName: 'Registration and Admin Fee', width: 230 },
  { field: 'Fee for verification Of result', headerName: 'Fee for verification Of result', width: 230 },
  { field: 'Tution Fee Per semester', headerName: 'Tution Fee Per semester', width: 230 },
  { field: 'Total', headerName: 'Total', width: 230 },
 
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



function Card() {
  console.log(Data);
  const classes = useStyles()
  return (
    <Container>
      <Wrapper>
        <Title>UNDERGRADUATE FEE FOR ALL COURSES EXEPT LAW</Title>
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

export default Card

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
height: 400px;
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