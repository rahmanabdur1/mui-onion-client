import { Container, Badge, Button, Stack } from '@mui/material';
import React from 'react';
import { FlexBox } from '../../styled/FlexBox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../../hooks/useCart';

const Header = () => {
    const {cart} =useCart();
    const quantity = cart.reduce((acc, curr) => curr.quantity + acc, 0);
    return (
        <Container maxWidth='lg'>
            <FlexBox sx={{
                padding: '2rem 0',
            }} justifyContent='space-between'>
                <img
                    alt='Logo'
                    src='https://i.ibb.co/GV0gqff/logo2.png'
                    style={{
                        width: '160px',
                    }}
                />
                <Stack spacing={4} direction='row' sx={{ alignContent: 'center' }}>
                <Badge
                  badgeContent={quantity}
                  color='primary'
                  sx={{
                     cursor: 'pointer',
                     '&:hover': {
                        '& > svg': {
                           color: 'primary.main',
                        },
                     },
                  }}
               >
                  <ShoppingCartOutlinedIcon />
               </Badge>

                    <Button variant='text' sx={{ color: '' }}> Sign In </Button>
                    <Button>Sign Up</Button>
                </Stack>
            </FlexBox>
        </Container>
    );
};

export default Header;