import { useSelector } from "react-redux";
import { AppState } from "@/stores";
import { layoutHelper } from "@/helpers";
import defaultLayout from '../layouts';

interface Param {
  module?: string;
  view?: string;
}

export const useLayout = ({ module, view }: Param) => {
  const layout = useSelector((state: AppState) => state.layout);

  const getTemplate = (key: string) => {
    return layoutHelper.getLayout(key, layout, defaultLayout);
  };

  return getTemplate(`${module}_${view}`) || getTemplate(`${module}`) || defaultLayout.base;
};
