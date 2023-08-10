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

const ProductValues: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ 
        display: 'flex', 
        overflow: 'hidden', 
        bgcolor: 'secondary.light', 
        color: 'inherit' 
      }}
    >
      <Container 
        sx={{ 
          mt: 10, 
          mb: 10, 
          display: 'flex', 
          position: 'relative',
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
            top: -180,
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
          Как стать частью РНС
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>1.</Box>
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}
              >
                Напишите нам
              </Typography>
              <Typography 
                variant="subtitle1"
                component="span" 
                sx={{ mb: 3 }}>
                {
                  `Если вы добавите своё резюме с актуальным опытом 
                  работы и навыками, мы свяжемся с вами в ближайшее время 😉.`
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>2.</Box>
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                Первичный звонок
              </Typography>
              <Typography 
                variant="subtitle1"
                component="span"
                sx={{ mb: 3 }}>
                {
                  `В процессе первичного звонка мы познакомимся и узнаем друг друга лучше.
                  Вы узнаете больше о компании, а мы о вас (формат: телефонный звонок, до 15 минут).`
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>3.</Box>
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                Онлайн собеседование
              </Typography>
              <Typography 
                variant="subtitle1" 
                component="span"
                sx={{ mb: 3 }}>
                {
                  `Если после первичного разговора мы понравимся 
                  друг другу, мы пригласим вас на техническое собеседование 
                  в онлайн формате (длительность до 70 минут)`
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>4.</Box>
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                Обратная связь
              </Typography>
              <Typography 
                variant="subtitle1" 
                component="span"
                sx={{ mb: 3 }}>
                {
                  `В течение недели наши HR менеджеры к вам вернутся 
                  и предложат тестовое задание 🧐 
                  (по необходимости, зависит от вакансии), 
                  либо сразу результат, после которого вы узнаете дальнейшие шаги.`
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>5.</Box>
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                Не подошел на вакансию
              </Typography>
              <Typography 
                variant="subtitle1" 
                component="span"
                sx={{ mb: 3 }}>
                {
                  `Не расстраивайтесь👍, мы вас добавим в нашу базу и возможно, 
                  в ближайшее время появятся новые вакансии, которые вас 
                  заинтересуют. Мы часто возвращаемся к нашим кандидатам, 
                  так что будем рады предложить ещё варианты)`
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>6.</Box>
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                IT's a MATCH
              </Typography>
              <Typography 
                variant="subtitle1" 
                component="span"
                sx={{ mb: 3 }}>
                {
                  `Ура, мы совпали! 🥰 Вам будет предложен оффер, в котором 
                  обозначены все условия компании. Если возникнут вопросы, 
                  то мы оперативно на все ответим.`
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;