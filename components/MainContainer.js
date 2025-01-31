import React from 'react';
import A from './A';
import Head from 'next/head';

const MainContainer = ({ keywords, children }) => {
  return (
    <>
      <Head>
        <meta keywords={'nextjs' + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div>
        <div className="navbar">
          <A href={'/'} text="Главная" />
          <A href={'/users'} text="Пользователи" />
        </div>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
