import { ContextRouteProps } from '@/types';
import Welcome from './welcome/welcome.dashboard';

interface IProps extends ContextRouteProps { }

function Dashboard(props: IProps) {
  console.log(props);

  return <Welcome />;
}

export default Dashboard;
