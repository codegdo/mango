'use client';
import templateLayout from './template.layout';

interface IProps { }

function Home(props: IProps) {
  return (
    <>
      HOME
    </>
  );
}

export default templateLayout(Home, {
  module: '*',
});
