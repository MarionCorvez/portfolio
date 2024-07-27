import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const Redux = ({ ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512"
    strokeWidth={1}
    stroke="currentColor"
    {...props}
  >
    <path d="m290.5827332 477.715332c9.087616-6.4911194 22.0698853-16.8769531 29.2101135-23.368042 124.4559326 49.4433899 165.0598145-47.1943054 161.8180847-84.0771484-3.5895996-40.8399353-54.298645-157.390976-226.728302-157.39328-8.1076813 19.0032654-31.8166199 28.5365295-51.4269409 17.1775208-24.0652771-13.9395142-24.0652771-48.9773712 0-62.9168243 18.6949158-10.8288269 41.1114502-2.667511 50.1887207 14.5818939 104.6848145-.5327454 222.0458069 43.9302521 254.8640442 167.6486816 23.6686096 89.2261657-75.6339722 193.2417907-217.9257202 128.3471984zm64.4064331-126.1935424c17.3190308-2.0410767 32.3324585-16.4964905 32.3324585-36.0848083 0-27.8788757-30.4049072-45.3978577-54.5975037-31.4584045-21.2230225 12.2284546-23.8233948 40.6903076-7.8106384 56.9048157-57.4418946 107.0973204-185.7330017 148.9729307-253.4322892 108.3241575-37.4898681-22.5101013-76.1502285-103.0918884 13.9814682-177.2612915-2.596489-8.4384766-6.4911652-22.7190094-8.4384766-33.1048584-162.0473937 122.1159058-45.3990745 316.4234925 137.3116456 240.7545472 49.3985138-20.4582825 102.9578094-56.21344 140.6533356-128.0741577zm-197.6041718 41.4602966c24.2267151 13.9394531 54.6745605-3.5794373 54.6745605-31.4584045 0-23.2654114-21.2043915-39.2989502-42.3022614-35.8728027-134.0154342-250.3257981 148.1390382-398.980774 184.4385682-162.1067506l32.455719 9.7367249c-23.5991821-190.5416718-166.0664062-173.106871-211.7063446-134.5159531-34.2060699 28.922966-125.6453094 130.6958313-31.1728516 305.0267029-9.1037139 16.390831-4.5667877 38.7305221 13.6126099 49.1904831z" />
  </svg>
);