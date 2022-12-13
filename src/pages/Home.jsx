import React from 'react';

import { Box, Stack, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import Card from '../components/card/Card';
import Divider from '../components/common/MainDivider';

export default function Home() {
  return (
    <Stack
      spacing={2}
      mt={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* title */}
      <Typography variant="h4">TMIL 게시판</Typography>
      {/* container */}
      <Box sx={{ width: '80%' }}>
        {/* Divider */}
        <Divider />
        {/* Card들어가는곳 */}
        <Stack spacing={2}>
          {/* CardItem => 컴포넌트, props ={ title, content, day(format: yyyy/mm/dd) } */}
          <Card title="[TIL]오늘 잠만 잤어요" content="내용" day="2022/10/22" />
        </Stack>
      </Box>
    </Stack>
  );
}
