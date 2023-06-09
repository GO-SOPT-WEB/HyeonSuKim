import { CSSProp } from "styled-components";

declare module "styled-components" {
  export const reset: CSSProp;
}

declare module "*.woff2" {
  const url: string;
  export default url;
}
