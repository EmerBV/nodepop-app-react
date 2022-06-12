import { Fragment } from 'react';
import Title from '../common/Title';

function Page({ title, children }) {
  return (
    <Fragment>
      <Title title={title}></Title>
      <section>{children}</section>
    </Fragment>
  );
}

export default Page;
