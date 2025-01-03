import * as React from "react";
const SVGComponent = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2700 2700" {...props}>
    <path d="M712.3 787c-1.3.5-2.3 1.8-2.3 2.8s3.6 6 7.9 11c4.4 5 9.4 11.3 11.2 13.9s11.3 15.1 21.1 27.8c9.8 12.6 21.6 27.9 26.2 34 4.7 6 10.7 13.7 13.3 17s8.8 11.4 13.7 18c8.7 11.6 20 26 35.5 45.4 4.2 5.1 9.4 11.7 11.6 14.5 2.1 2.8 10.9 13.6 19.5 24.1 8.6 10.4 18.4 22.6 21.8 27s12.5 16.1 20.2 26 16.6 21.4 19.7 25.5 10.2 13.1 15.7 20c5.6 6.9 12.8 16.1 16 20.5 3.3 4.4 11 14.3 17.1 22s12.9 16.3 15.1 19.2c15.2 20.1 28.9 37.9 34.6 44.9 3.6 4.5 9.1 11.5 12.2 15.5 11.4 15.1 18 23.6 25.1 32.4 17.1 21.1 30.3 38.4 32.5 42.4 1.9 3.7 9 11.1 12.4 12.9 2.7 1.5 8.9 1.8 53.6 2.2 75.2.9 299.2.5 301.7-.4 4.9-1.8 3.6-5.2-6.9-17.7-3-3.5-9.7-11.9-14.9-18.7s-13.8-18.1-19.2-25c-5.4-7-15.6-20.4-22.6-29.7-17.2-22.7-32.4-42.5-46.7-60.7-17-21.5-32.8-41.7-40.4-51.4-4.3-5.5-8.4-10.7-9.2-11.5-.7-.8-4.7-5.9-8.8-11.4s-11.6-15.2-16.6-21.5-13.9-17.8-19.7-25.5c-18-23.5-27.7-35.8-31.1-39.5-1.8-1.9-7.6-9.2-12.9-16.3-19.2-25.2-29.3-38.3-35.7-46.3-3.6-4.5-10.1-13-14.4-18.9-7.7-10.4-21.1-27.5-43.6-55.5-6-7.4-13.9-17.4-17.7-22.2-3.7-4.8-11.4-14.4-17.1-21.5-5.7-7-11.6-14.5-13.2-16.5-1.7-2-5.3-4.8-8.2-6.1l-5.3-2.5-174.5-.6c-107.7-.3-175.4-.2-176.7.4m563.5-.4c-4.6 1.4.1 9.7 16 28.4 2.1 2.5 6.9 8.8 10.7 14s11.4 15.1 17 22c5.5 6.9 14.1 17.8 19 24.3 24.4 32.1 44.9 58.3 59.8 76.7 3.8 4.7 10.3 13 14.5 18.5s11.2 14.4 15.7 19.9c4.4 5.4 11.6 14.5 16 20.1 15 19.2 25.9 33 32.5 41 3.7 4.4 13.8 17.4 22.6 29 27.9 36.8 38 49.8 64.3 83 21.8 27.5 27.6 34.9 37.9 48.5 5.6 7.4 15.6 20.2 22.2 28.5 6.6 8.2 16.7 21.1 22.5 28.5s12.6 16.2 15.2 19.5 11 14.3 18.7 24.4c18.7 24.3 32.8 42.5 39.7 50.8 9.3 11.4 47.7 60.7 59.3 76.2 6 8 13.2 17.3 16.1 20.6 2.8 3.3 8.9 10.9 13.5 17 4.6 6 13.4 17.3 19.5 25 19.4 24.3 40.4 51.5 61.6 80 4.5 6 11.2 14.6 15 19 3.7 4.4 10.2 12.3 14.4 17.5 29.9 37.3 29.9 37.2 36.5 40.3 4.5 2 5.6 2 179.5 2.4 115.9.3 175.5.1 176.5-.6 2.3-1.6.4-5.1-8.7-15.9-8.6-10.2-33-41-42.3-53.2-3-4-9.3-12.1-14-18-10.1-12.8-18.5-23.7-29.4-38-4.4-5.8-12.3-15.9-17.6-22.5s-13.5-17.2-18.3-23.5c-4.7-6.3-13.4-17.6-19.1-25-5.8-7.4-16.4-21.3-23.6-30.7-7.2-9.5-15.5-20.1-18.4-23.5-2.9-3.5-8.6-10.6-12.7-15.9-20.7-26.8-28.6-36.9-41.9-53.9-8.1-10.2-22.3-28.4-31.6-40.5-9.4-12.1-22.1-28.5-28.4-36.5s-14-17.9-17.2-22c-3.1-4.1-8.9-11.6-12.8-16.5-3.8-5-10.9-14.2-15.7-20.5-8-10.7-19.5-25.2-28.3-36-8.5-10.4-27.9-34.8-33.5-42.1-28.8-37.8-49.1-64-63-81.4-6.2-7.7-13.9-17.6-17.1-22.1-3.3-4.4-9.6-12.8-14.2-18.5-14.9-18.6-24.6-31.1-36.2-46.4-6.3-8.2-13.2-17.3-15.4-20-2.3-2.8-6.1-7.7-8.6-10.9s-7.8-9.9-11.9-15c-4.1-5-11.3-14.3-16-20.6-4.8-6.3-10.9-14.4-13.6-17.9-2.8-3.5-6.8-8.7-9-11.6s-10.3-13-17.9-22.6c-7.7-9.6-17.3-21.7-21.5-26.9-16.5-20.9-20-24-28.1-25.3-4.4-.8-347.9-1.8-350.2-1.1m-877.4 321.9c-.9 2.3.6 5.1 7.1 13 3.2 3.8 6.9 8.8 8.3 11s6.2 8.5 10.7 14 12.3 15.4 17.3 22c5.1 6.6 11.3 14.7 13.9 18 4.6 5.9 14.1 18.2 36.8 48 6.3 8.2 13.3 17.2 15.5 20 2.3 2.7 8.1 10.2 13.1 16.5 11.8 15.3 16.8 21.5 33.5 42.1 15.9 19.8 33.5 41.8 39.8 49.9 2.3 3 9.6 12.4 16.2 20.9 20.2 26 27.6 35.5 36.9 47.8 5 6.5 11.5 14.9 14.6 18.8 3 3.8 12 15.5 19.9 26 13.7 18.1 22.6 29.5 30.9 39.5 2 2.5 6.8 8.5 10.5 13.5 3.8 4.9 7.9 10.2 9.3 11.6 2.4 2.6 21.1 26.6 40 51.4 25.1 32.9 46.4 60.5 54.3 70.4 4.7 5.8 9.7 12.2 11 14.1s4.7 6.2 7.5 9.6c5.9 7.2 15.7 19.7 33.5 42.9 7.2 9.3 15.9 20.6 19.4 25 9.8 12.5 41.3 52.2 47.6 60 3.1 3.8 13 16.9 22 29 9.1 12.1 22.8 29.9 30.5 39.5 7.7 9.7 16.7 21.1 20 25.5 3.2 4.4 8 10.5 10.5 13.5 2.6 3 7.5 9.3 11 14 15.4 20.6 33.3 41 38.1 43.5 1.5.8 6.2 1.7 10.5 2 10.5.7 339.1 1.3 342.9.5 1.7-.3 3.1-1.2 3.3-2.2.6-2.9-4.5-10.3-14.9-21.9-5.5-6.1-10.7-12.3-11.7-13.7-.9-1.5-6.2-8.7-11.7-16.1-13.4-18-12.7-17.1-23-30.1-5-6.3-13.6-17.4-19-24.5-5.4-7.2-12.9-16.6-16.5-21-3.7-4.4-11.3-14.2-17.1-21.8-8.9-11.8-16.8-22-29.7-38.7-3.6-4.6-21.1-26.7-28.2-35.5-3.1-3.9-8.5-10.8-12-15.5-3.4-4.7-9.8-13-14.1-18.5-11-13.9-39.6-51.1-48.2-62.5-3.9-5.2-11.4-14.9-16.7-21.5s-11.1-14-12.8-16.5-6.8-9.2-11.3-15c-4.4-5.8-9.9-13-12.2-16-2.2-3-11.1-14.4-19.6-25.3-20.8-26.3-24.3-30.8-32.9-41.8-4-5.2-10.7-13.7-14.8-18.9s-10.7-13.7-14.7-18.8c-15.3-19.7-28.8-36.9-42.9-54.3-9.8-12.1-39-49.6-56.8-72.9-13.1-17.2-24.6-31.8-42-53.3-12.2-15.2-25.2-32.1-58.4-75.8-6-7.9-15-19.3-20-25.3s-11.3-13.9-14.1-17.6c-6.9-9.3-27.5-35.6-36.1-45.9-3.9-4.7-9.8-12.2-13.1-16.6-7.1-9.3-11.8-14-15.4-15.4-1.7-.6-67.4-1.2-179.3-1.6-162-.5-176.7-.5-177.2 1m841.9 355.5c-3.6 1.5-3.1 2.4 6.9 15.1 8.8 11.1 24.7 31.8 43.7 56.9 19 25.2 24.4 32.2 29.1 38 2.1 2.5 7.9 10.1 13 17 5.2 6.9 14.2 18.3 20 25.5 5.9 7.1 11.8 14.6 13.1 16.6 3.7 5.5 21.6 28 48.5 61 14.9 18.3 37.4 47.3 50.4 64.9 6.2 8.5 14.6 19.3 18.5 24 4 4.7 11 13.4 15.6 19.4s13.5 17.4 19.7 25.5c6.2 8 14.5 18.9 18.5 24.1 3.9 5.2 13 16.9 20.2 26s15.8 20.1 19 24.5c3.3 4.4 9.5 12.3 14 17.6 13 15.5 24 29.4 37.7 47.8 10.2 13.7 5.4 12.5 52.1 13.1 22.1.3 102.6.6 179 .8 150.1.3 141.6.6 138.7-4.8-1.7-3.2-7.3-10.4-13.9-18-3.1-3.6-8.1-9.7-11.1-13.5-3-3.9-8.7-10.8-12.6-15.5-4-4.7-8.8-10.6-10.6-13.3-3-4.3-8.3-11.4-32.3-43.2-12.3-16.3-21.8-28.5-29.1-37.4-6-7.4-21.3-27.5-26.4-34.8-.8-1.1-4.2-5.4-7.5-9.5-3.3-4-7.3-9.1-9-11.3-1.6-2.2-6.1-7.8-10-12.6-3.9-4.7-10.3-12.8-14.1-18-7-9.4-18.1-23.4-31.9-40.4-4.1-5-9.3-11.7-11.7-15-4.8-6.9-25.3-33.3-34.3-44.5-7.7-9.6-11-13.8-16.5-21.4-2.5-3.4-13.7-17.8-25-32s-26.3-33.3-33.5-42.5c-7.1-9.2-17.6-22.6-23.2-29.7-11.2-14.1-13.9-17.7-30.7-39.9-11.1-14.6-14.2-17.6-20.9-19.7-4.3-1.3-350.3-2.1-353.4-.8" />
  </svg>
);
export default SVGComponent;
