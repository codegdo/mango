import { ContextProps } from '@/types';
import Welcome from './welcome/welcome.dashboard';

interface IProps extends ContextProps { }

function Dashboard(props: IProps) {
  console.log(props);

  return <Welcome />;
}

export default Dashboard;
