declare module 'vant' {
  export const Button: any;
  export const Cell: any;
  export const CellGroup: any;
  export const DatetimePicker: any;
  export const Field: any;
  export const Icon: any;
  export const Lazyload: any;
  export const List: any;
  export const Picker: any;
  export const Search: any;
  export const Swipe: any;
  export const SwipeItem: any;
  export const Tab: any;
  export const Tabs: any;
  export const Tabbar: any;
  export const TabbarItem: any;
}

declare module 'qs' {
  export const stringify: any;
}

interface MarkedOptions {
  gfm?: boolean;
  tables?: boolean;
  breaks?: boolean;
  pedantic?: boolean;
  sanitize?: boolean;
  sanitizer?(html: string): string;
  mangle?: boolean;
  smartLists?: boolean;
  silent?: boolean;
  highlight?(code: string, lang: string, callback?: (error: any | undefined, code: string) => void): string;
  langPrefix?: string;
  smartypants?: boolean;
  headerPrefix?: string;
  xhtml?: boolean;
}

declare module  'marked'

declare function marked(src: string, options?: MarkedOptions, callback?: (error: any | undefined, parseResult: string) => void): string;

declare module '*.png'
