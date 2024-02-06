import { ContextProps } from '@/types';

interface IProps extends ContextProps {}

function Welcome(props: IProps) {
  console.log(props);

  return <div>Welcome</div>;
}

export default Welcome;
