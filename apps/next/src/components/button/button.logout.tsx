import { useAction } from '@/hooks';

export function ButtonLogout() {
  const { logoutSuccess } = useAction();

  const handleClick = () => {
    logoutSuccess({ session: { isAuthenticated: false } });
  };

  return (
    <button type='button' onClick={handleClick}>
      Logout
    </button>
  );
}
