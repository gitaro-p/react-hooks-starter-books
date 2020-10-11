import React from 'react';
import './App.css';
import { BookToRead } from './BookToRead';

const dummyBooks: BookToRead[] = [
  {
    id: 1,
    title: 'プログラミングTypeScript',
    authors: 'ダミー',
    memo: ''
  },
  {
    id: 2,
    title: '現場で使えるRuby on Rails5 速習実践ガイド',
    authors: 'ダミー',
    memo: ''
  },
  {
    id: 3,
    title: 'SQL第２版　ゼロからはじめるデータベース操作',
    authors: 'ダミー',
    memo: ''
  }
];

const App = () => {
  return (
    <div className="App">
      <section className="nav">
        <h1>読みたい本リスト</h1>
        <div className="button-like">本を追加</div>
      </section>
      <section className="main">
        <h1>チュートリアルを始めましょう</h1>
      </section>
    </div>
  );
};

export default App;
