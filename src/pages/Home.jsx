import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Stack, Paper, Typography, Pagination } from '@mui/material';
import styled from 'styled-components';
import Card from '../components/card/Card';
import Divider from '../components/common/MainDivider';

export default function Home() {
  const perPage = 5;
  const [totalList, setTotalList] = useState();
  const [lastPage, setLastPage] = useState();
  const [currntPage, setCurrentPage] = useState(1);
  const [boardList, setBoardList] = useState();

  const onChangePageHandler = (e, value) => {
    setCurrentPage(value);
  };

  const getBoarList = useCallback(async () => {
    const getList = await axios.get('http://localhost:3001/posts');
    console.log(getList);
    setTotalList(getList.data);
  }, []);

  useEffect(() => {
    getBoarList();
  }, [getBoarList]);

  useEffect(() => {
    if (totalList) {
      setLastPage(Math.ceil(totalList.length / perPage));
    }
  }, [totalList]);

  useEffect(() => {
    // 한 페이지에 5개씩 보여준다.
    if (totalList && currntPage !== lastPage) {
      const sliceData = totalList.slice(
        perPage * (currntPage - 1),
        perPage * (currntPage - 1) + perPage,
      );
      setBoardList(sliceData);
    }
    if (totalList && currntPage === lastPage) {
      // 마지막 페이지는 데이터가 5개보다 부족할 수도 있다.
      const sliceData = totalList.slice(perPage * (currntPage - 1));
      setBoardList(sliceData);
    }
  }, [currntPage, lastPage, totalList]);

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
        {/* Card들어가는곳 Stack을 이용하면 Stack바로 아래의 자식 테그(한댑스 뒤의 테그)가 동일한 spacing을 가짐 */}
        <Stack spacing={2}>
          {/* CardItem => 컴포넌트, props ={ title, content, day(format: yyyy/mm/dd) } */}
          {/* <Card title="[TIL]오늘 잠만 잤어요" content="내용" day="2022/10/22" /> */}
          {boardList &&
            boardList.map((v) => (
              <Card
                key={`${v.postId}`}
                title={v.title}
                usename={v.username}
                createdAt={v.createdAt}
              />
            ))}
        </Stack>
        <Pagination
          count={lastPage}
          defaultPage={1}
          color="primary"
          size="large"
          sx={{ margin: 2, width: '100%', display: 'flex', justifyContent: 'center' }}
          onChange={onChangePageHandler}
        />
      </Box>
    </Stack>
  );
}
