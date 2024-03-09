interface Template {
  [key: string]: string;
}

class TemplateHelper {
  getTemplate(key: string, template: Template, defaultTemplate: Template) {
    if (template && template[key]) {
      return template[key];
    } else if (template && template.base) {
      return template.base;
    } else if (defaultTemplate && defaultTemplate[key]) {
      return defaultTemplate[key];
    } else {
      return null;
    }
  }
}

export const templateHelper = new TemplateHelper();