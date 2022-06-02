import React from 'react'
import './Poster.css'
import { Card, Col, Row, NavLink } from 'react-bootstrap'
import Data from '../Data'

function Poster() {
  return (
<div className='container'>
  <div className='header'>
      <h3 className='shop-category'> Shop By Category </h3>
  </div>
    <Row sm={12} md={10} lg={10} xl={4} className="cards">
        {Data.products.map((products) => (
          <Col className='colum'>
            <NavLink to={`/products/${products._id}`} className='navlink'>
              <Card className='styl' >
               <Card.Img variant="top" src={products.image}  className='card-image'/>
                <div className='buttons'>
                  <button className='viewmore-button'><p>View More</p></button>           
                  <button className=' trending-buton  btn-2x '>{products.button}</button>
                </div>
                <Card.Body >
                  <Card.Title className='product-name'>{products.name}</Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
        ))}
     </Row>
</div>
  )
}

export default Poster











// import { Grid, Paper } from '@mui/material'
// import { Box } from '@mui/system';

// const Item = experimentalStyled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? 'red' : 'black',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const Image = styled.img`
  
//   text-align: center;
//   color : black;
//   `

//   const Header = styled.h3`
//   text-align : center;
//   margin-top : 25px;
//   margin-bottom : 25px;
//   `
//   const Wrapper = styled.div`
//   padding: 2rem;
//   ` 
//   const cardContainer =styled(Grid)`
//   width:20%;
//   `


  
// <Wrapper >
//         <Header> Shop By Category </Header>
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 3, sm: 3, md: 12}}>
//           {Data.products.map((products) => (
//             <cardContainer item xs={2} sm={4} md={4} xl={4} key={products.id}>
//               <Item>
//                 <Image src={products.image} />
//               </Item>
//             </cardContainer>
//           ))}
//         </Grid>
//       </Box>
//     </Wrapper>

