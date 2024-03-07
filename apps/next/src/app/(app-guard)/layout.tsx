import AppGuard from './app.guard';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppGuard>{children}</AppGuard>;
}
