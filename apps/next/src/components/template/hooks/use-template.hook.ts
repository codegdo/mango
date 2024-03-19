'use client'
import { useSelector } from "react-redux";
import { AppState } from "@/stores";
import { templateHelper } from "@/helpers";
import defaultTemplate from '../layouts';

interface Param {
  module?: string;
  view?: string;
}

export const useTemplate = ({ module, view }: Param) => {
  const template = useSelector((state: AppState) => state.template);

  const getTemplate = (key: string) => {
    return templateHelper.getTemplate(key, template, defaultTemplate);
  };

  return getTemplate(`${module}_${view}`) || getTemplate(`${module}`) || defaultTemplate.base;
};
