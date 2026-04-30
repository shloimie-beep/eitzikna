// next/image with output:'export' + unoptimized:true does not apply basePath to <img src>.
// Use this helper for any /images/ src so URLs resolve correctly under GitHub Pages basePath.
export const BASE_PATH = '/eitzikna';
export const img = (path: string) => `${BASE_PATH}${path}`;
