import { useActions } from '@/hooks';

export function ButtonLogout() {
  const { logoutSuccess } = useActions();

  const handleClick = () => {
    logoutSuccess({ session: { isAuthenticated: false } });
  };

  return (
    <button type='button' onClick={handleClick}>
      Logout
    </button>
  );
}
