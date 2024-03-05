interface Layout {
  [key: string]: string;
}

class LayoutHelper {
  getLayout(key: string, layout: Layout, defaultLayout: Layout) {
    if (layout && layout[key]) {
      return layout[key];
    } else if (layout && layout.base) {
      return layout.base;
    } else if (defaultLayout && defaultLayout[key]) {
      return defaultLayout[key];
    } else {
      return null;
    }
  }
}

export const layoutHelper = new LayoutHelper();