import React from 'react';
import Header from '../header/Header';
import InputForm from '../inputform/InputForm';

function Create() {
  return (
    <>
      <Header />
      <InputForm title="게시글 수정" buttonName="수정하기" />
    </>
  );
}

export default Create;
