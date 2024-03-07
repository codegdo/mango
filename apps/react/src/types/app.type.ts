export interface ContextRouteProps {
  name?: string;
  title?: string;
  module?: string;
  view?: string;
  object?: string;
  actions?: string[];
}

export interface ContextOutletProps {
  isAuthenticated: boolean;
}
