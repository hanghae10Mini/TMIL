import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Stack, Paper, Typography, Pagination, CardActionArea } from '@mui/material';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/card/Card';
import Divider from '../components/common/MainDivider';
import { increaseViews } from '../redux/modules/postSlice';

export default function Home() {
  const dispatch = useDispatch();

  const perPage = 5;
  const [totalList, setTotalList] = useState();
  const [lastPage, setLastPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [boardList, setBoardList] = useState();

  const onChangePageHandler = (e, value) => {
    setCurrentPage(value);
  };

  const getBoardList = useCallback(async () => {
    const getList = await axios.get('http://localhost:3001/posts');
    setTotalList(getList.data);
  }, []);

  useEffect(() => {
    getBoardList();
  }, [getBoardList]);

  useEffect(() => {
    if (totalList) {
      setLastPage(Math.ceil(totalList.length / perPage));
    }
  }, [totalList]);

  useEffect(() => {
    // 한 페이지에 5개씩 보여준다.
    if (totalList && currentPage !== lastPage) {
      const sliceData = totalList.slice(
        perPage * (currentPage - 1),
        perPage * (currentPage - 1) + perPage,
      );
      setBoardList(sliceData);
    }
    if (totalList && currentPage === lastPage) {
      // 마지막 페이지는 데이터가 5개보다 부족할 수도 있다.
      const sliceData = totalList.slice(perPage * (currentPage - 1));
      setBoardList(sliceData);
    }
  }, [currentPage, lastPage, totalList]);

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
              <Link to={`/details/${v.id}`} key={`${v.id}`}>
                <CardActionArea
                  onClick={() => {
                    dispatch(increaseViews(v));
                  }}
                >
                  <Card key={`${v.id}`} title={v.title} username={v.name} createdAt={v.createdAt} />
                </CardActionArea>
              </Link>
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
