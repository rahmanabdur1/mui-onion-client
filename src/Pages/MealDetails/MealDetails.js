import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Container, Stack, styled, Typography, Button } from '@mui/material';
import { FlexBox } from '../../styled/FlexBox';
import useMealById from '../../hooks/useMealById';
import { useCart } from '../../hooks/useCart';
export const CounterBox = styled(Box)(({ theme }) => ({
  borderRadius: '20px',
  border: `1px solid #e1e1e1`,
  width: '130px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  marginLeft: '1.5rem',
  padding: '2px 6px',
  '& > svg': {
    cursor: 'pointer',
  },
  '& > svg:hover': {
    color: theme.palette.primary.main,
  },
}));

const MealDetails = () => {
  const { mealId } = useParams();
  const { meal, loading, error } = useMealById(mealId);
  const [quantity, setQuantity] = useState(1);

  const {setCart} =useCart()

  const adjustQuantity = (action) => {
    if (action === 'remove' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === 'add' && quantity<5) {
      setQuantity(quantity + 1);
    }
  };

  const addToCartHandler = () => {
        setCart((cart)=>[
          ...cart,{
            ...meal,
            quantity
          }
        ])
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box>
      <Container>
        <FlexBox sx={{ my: 5, gap: 10 }}>
          <Box sx={{ flex: 1 }}>
            <Stack spacing={4}>
              <Typography variant='h4' fontWeight={600}>{meal.title}</Typography>
              <Typography variant='body' color='primary-greyText' sx={{ width: 450 }}>{meal.description}</Typography>
              <FlexBox>
                <Typography variant='h4' fontWeight={600}>${meal.price}</Typography>
                <CounterBox>
                  <RemoveIcon
                    onClick={() => adjustQuantity('remove')}
                  />
                  <Typography variant='h5' sx={{ width: '20px' }} fontWeight={600}>
                    {quantity}
                  </Typography>
                  <AddIcon onClick={() => adjustQuantity('add')} disabled={quantity === 5} sx={{ pointerEvents: quantity === 5 ? 'none' : 'auto' }} />
                </CounterBox>
              </FlexBox>

              <Button
                sx={{ width: ['100%', '100%', '40%'] }}
                startIcon={<ShoppingCartOutlinedIcon />}
                onClick={addToCartHandler}
              >
                Add
              </Button>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img
              src={meal.defaultImage}
              alt='meal'
              style={{
                maxWidth: '100%',
                width: '500px',
                 margin: '0 auto',
                display: 'block'
              }}
            />
          </Box>
        </FlexBox>
      </Container>
    </Box>
  );
};

export default MealDetails;
