export class PageContentMap {
  constructor(...pairs) {
    this.map = new Map([...pairs]);
  }

  getComponent(pageName) {
    const Component = this.map.get(pageName);
    if (Component) return <Component />;
    return null;
  }
}
