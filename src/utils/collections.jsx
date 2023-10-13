export class PageContentMap {
  constructor(pages, components) {
    this.map = new Map([pages, components]);
  }

  getComponent(pageName) {
    const Component = this.map.get(pageName);
    if (Component) return <Component />;
    return null;
  }
}
