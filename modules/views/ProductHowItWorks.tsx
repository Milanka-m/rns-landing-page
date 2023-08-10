import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

const ProductHowItWorks: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ 
        display: 'flex', 
        overflow: 'hidden',
        color: 'black' 
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 10,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/images/productCurvyLines.webp"
          alt="curvy-lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -120,
            opacity: 0.7,
          }}
        />
        <Typography 
          variant="h2" 
          marked="center" 
          component="span" 
          sx={{
            textAlign: 'center', 
            mb: 8, 
            maxWidth: 800, 
            color: 'black' 
            }}
        >
          Условия работы
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="/images/office-icon.webp"
                  alt="office-icon"
                  sx={image}
                />
                <Typography 
                  variant="subtitle1"
                  component="span"
                >
                  Современный новый большой офис 
                  класса «А» в стиле high-tech с видом 
                  на Неву и занимающий целый этаж бизнес-центра
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="/images/travel-icon.webp"
                  alt="travel-icon"
                  sx={image}
                />
                <Typography 
                  variant="subtitle1"
                  component="span"
                >
                  Бесплатная развозка от и до метро Новочеркасская
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="/images/relaxation-icon.webp"
                  alt="relaxation-icon"
                  sx={image}
                />
                <Typography 
                  variant="subtitle1"
                  component="span"
                >
                  В офисе предусмотрены различные зоны отдыха, 
                  в том числе просторная кухня-трансформер, 
                  превращающая столовую в кинозал
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>4.</Box>
                <Box
                  component="img"
                  src="/images/games-icon.webp"
                  alt="games-icon"
                  sx={image}
                />
                <Typography 
                  variant="subtitle1"
                  component="span"
                >
                  Кикер и аэрохоккей в офисе, а также домашняя библиотека
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>5.</Box>
                <Box
                  component="img"
                  src="/images/distant-work-icon.webp"
                  alt="distant-work-icon"
                  sx={image}
                />
                <Typography 
                  variant="subtitle1"
                  component="span"
                >
                  Возможность удаленной 
                  работы и своевременная выплата заработной платы
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>6.</Box>
                <Box
                  component="img"
                  src="/images/career-icon.webp"
                  alt="career-icon"
                  sx={image}
                />
                <Typography 
                  variant="subtitle1"
                  component="span"
                >
                  Возможность быстрого карьерного роста
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;