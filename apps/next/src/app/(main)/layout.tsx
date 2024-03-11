import MainGuard from './main.guard';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainGuard>{children}</MainGuard>;
}
