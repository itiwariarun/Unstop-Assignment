import * as React from "react";
import {
  generateColor,
  printFirstLetters,
} from "@/Dash/app/utils/random-functions";

interface IAppProps {
  rect?: string;
  path?: string;
  title?: string;
}

export const Briefcase: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
    >
      <path
        d="M19.1677 3.49563H15.0796C14.8592 1.49813 13.6597 0 12.142 0H8.91065C8.07833 0 7.29498 0.449438 6.73195 1.29838C6.31579 1.89763 6.04651 2.67166 5.97307 3.49563H1.88495C0.856793 3.49563 0 4.36954 0 5.46817V18.0275C0 19.1011 0.832314 20 1.88495 20H19.1677C20.1958 20 21.0526 19.1261 21.0526 18.0275V5.46817C21.0526 4.36954 20.2203 3.49563 19.1677 3.49563ZM12.1175 9.23845H8.93513C8.20073 9.23845 7.58874 9.88764 7.58874 10.6866V11.4107C3.42717 10.437 1.51775 9.56305 1.22399 9.16355V5.66792C1.22399 5.29338 1.56671 4.99376 1.98286 4.99376H19.0698C19.4859 4.99376 19.8286 5.29338 19.8286 5.66792V9.13858C19.5349 9.53808 17.6255 10.412 13.4639 11.4107V10.6866C13.4639 9.88764 12.8519 9.23845 12.1175 9.23845ZM7.73562 2.24719C7.93146 1.97253 8.34761 1.49813 8.91065 1.49813H12.142C12.9743 1.49813 13.6842 2.47191 13.8556 3.74532H7.19706C7.2705 3.17104 7.46634 2.64669 7.73562 2.24719ZM19.1922 18.7266H1.86047C1.51775 18.7266 1.22399 18.427 1.22399 18.0774V10.6117C2.27662 11.161 4.18605 11.8352 7.68666 12.6092C7.90698 14.0574 9.10649 15.1561 10.5753 15.1561C12.0196 15.1561 13.2191 14.0574 13.4149 12.6092C16.9155 11.8352 18.825 11.161 19.8531 10.6117V18.0774C19.8286 18.427 19.5349 18.7266 19.1922 18.7266Z"
        className={props.path}
      />
    </svg>
  );
};
export const Calender: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
    >
      <g clipPath="url(#clip0_0_568)">
        <path
          d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z"
          className={props.path}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z"
          className={props.path}
        />
      </g>
      <defs>
        <clipPath id="clip0_0_568">
          <rect width="14" height="14" className={props.rect} />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Share: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_0_583)">
        <path
          d="M10.0003 4.10614L7.64331 6.46316L8.82182 7.64168L11.1788 5.28465C12.1511 4.31238 13.7421 4.31238 14.7144 5.28465C15.6867 6.25692 15.6867 7.84792 14.7144 8.82019L12.3574 11.1772L13.5359 12.3557L15.8929 9.9987C17.5192 8.37235 17.5192 5.73249 15.8929 4.10614C14.2665 2.4798 11.6267 2.4798 10.0003 4.10614ZM11.1788 12.3557L8.82182 14.7127C7.84955 15.685 6.25856 15.685 5.28629 14.7127C4.31402 13.7405 4.31402 12.1495 5.28629 11.1772L7.64331 8.82019L6.4648 7.64168L4.10778 9.9987C2.48143 11.625 2.48143 14.2649 4.10778 15.8913C5.73412 17.5176 8.37399 17.5176 10.0003 15.8913L12.3574 13.5342L11.1788 12.3557ZM7.05406 11.7665L11.7681 7.05242L12.9466 8.23093L8.23257 12.945L7.05406 11.7665Z"
          className={props.path}
        />
      </g>
      <defs>
        <clipPath id="clip0_0_583">
          <rect width="20" height="20" className={props.rect} />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CircleChip: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div
      style={{ backgroundColor: generateColor(props?.title || "Null") }}
      className="th-h-[1.875rem] th-w-[1.875rem] th-min-h-full th-flex th-justify-center th-items-center th-rounded-full"
    >
      <p className="th-text-white th-text-sm th-leading-normal th-font-bold">
        {printFirstLetters(props?.title as any)}
      </p>
    </div>
  );
};
export const Dashboard: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <g clipPath="url(#clip0_0_867)">
          <path
            d="M15.8333 4.66667V6.33333H12.5V4.66667H15.8333ZM7.5 4.66667V9.66667H4.16667V4.66667H7.5ZM15.8333 11.3333V16.3333H12.5V11.3333H15.8333ZM7.5 14.6667V16.3333H4.16667V14.6667H7.5ZM17.5 3H10.8333V8H17.5V3ZM9.16667 3H2.5V11.3333H9.16667V3ZM17.5 9.66667H10.8333V18H17.5V9.66667ZM9.16667 13H2.5V18H9.16667V13Z"
            className={props.path}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_867">
            <rect
              width="20"
              height="20"
              className={props.rect}
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export const Assessment: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <mask
          id="mask0_0_871"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="21"
        >
          <rect y="0.5" width="20" height="20" className={props.rect} />
        </mask>
        <g mask="url(#mask0_0_871)">
          <path
            d="M6.00497 14.495H7.50497L12.4108 9.58925L10.9108 8.08925L6.00497 12.995V14.495ZM13.1191 8.88092L13.8691 8.13092C13.9802 8.01981 14.0358 7.90175 14.0358 7.77675C14.0358 7.65175 13.9802 7.5337 13.8691 7.42259L13.0774 6.63092C12.9663 6.51981 12.8483 6.46425 12.7233 6.46425C12.5983 6.46425 12.4802 6.51981 12.3691 6.63092L11.6191 7.38092L13.1191 8.88092ZM4.55978 17.6694C4.08426 17.6694 3.67718 17.5001 3.33856 17.1615C2.99992 16.8228 2.8306 16.4158 2.8306 15.9402V5.05981C2.8306 4.58429 2.99992 4.17721 3.33856 3.83858C3.67718 3.49995 4.08426 3.33063 4.55978 3.33063H7.95787C8.09223 2.89343 8.3448 2.53413 8.71558 2.25273C9.08634 1.97133 9.51448 1.83063 9.99999 1.83063C10.4855 1.83063 10.9136 1.97133 11.2844 2.25273C11.6552 2.53413 11.9078 2.89343 12.0421 3.33063H15.4402C15.9157 3.33063 16.3228 3.49995 16.6614 3.83858C17.0001 4.17721 17.1694 4.58429 17.1694 5.05981V15.9402C17.1694 16.4158 17.0001 16.8228 16.6614 17.1615C16.3228 17.5001 15.9157 17.6694 15.4402 17.6694H4.55978ZM4.55978 15.9402H15.4402V5.05981H4.55978V15.9402ZM9.99999 4.53988C10.156 4.53988 10.2849 4.48889 10.3869 4.38692C10.4889 4.28495 10.5398 4.15598 10.5398 4.00002C10.5398 3.84406 10.4889 3.7151 10.3869 3.61313C10.2849 3.51116 10.156 3.46017 9.99999 3.46017C9.84403 3.46017 9.71507 3.51116 9.6131 3.61313C9.51113 3.7151 9.46014 3.84406 9.46014 4.00002C9.46014 4.15598 9.51113 4.28495 9.6131 4.38692C9.71507 4.48889 9.84403 4.53988 9.99999 4.53988Z"
            className={props.path}
          />
        </g>
      </svg>
    </>
  );
};
export const Library: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <mask
          id="mask0_0_877"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="21"
        >
          <rect y="0.5" width="20" height="20" className={props.rect} />
        </mask>
        <g mask="url(#mask0_0_877)">
          <path
            d="M11.6296 12.8007C11.8657 12.8007 12.0636 12.7209 12.2233 12.5611C12.383 12.4014 12.4629 12.2035 12.4629 11.9674C12.4629 11.7313 12.383 11.5334 12.2233 11.3736C12.0636 11.2139 11.8657 11.134 11.6296 11.134C11.3934 11.134 11.1955 11.2139 11.0358 11.3736C10.8761 11.5334 10.7962 11.7313 10.7962 11.9674C10.7962 12.2035 10.8761 12.4014 11.0358 12.5611C11.1955 12.7209 11.3934 12.8007 11.6296 12.8007ZM11.0254 10.3437H12.2337C12.2337 9.98082 12.2675 9.70923 12.3349 9.52896C12.4024 9.34871 12.5512 9.1505 12.7813 8.93432C13.0696 8.65986 13.3292 8.38208 13.56 8.10098C13.7909 7.81989 13.9063 7.46738 13.9063 7.04346C13.9063 6.41182 13.696 5.90669 13.2755 5.52807C12.855 5.14944 12.3012 4.96013 11.6141 4.96013C11.0833 4.96013 10.6096 5.1086 10.193 5.40554C9.77628 5.7025 9.48628 6.11047 9.32293 6.62944L10.4063 7.08015C10.5002 6.76734 10.6548 6.52677 10.87 6.35844C11.0853 6.19012 11.3333 6.10596 11.6141 6.10596C11.9388 6.10596 12.2005 6.19541 12.3995 6.37429C12.5985 6.5532 12.6979 6.78516 12.6979 7.07019C12.6979 7.36345 12.5903 7.61844 12.375 7.83515C12.1597 8.05186 11.934 8.27241 11.6979 8.49682C11.4123 8.7613 11.2288 9.01145 11.1474 9.24727C11.0661 9.48308 11.0254 9.84857 11.0254 10.3437ZM6.67439 15.5548C6.19546 15.5548 5.78753 15.3863 5.4506 15.0494C5.11368 14.7125 4.94522 14.3045 4.94522 13.8256V3.94519C4.94522 3.46626 5.11368 3.05833 5.4506 2.7214C5.78753 2.38447 6.19546 2.216 6.67439 2.216H16.5548C17.0337 2.216 17.4417 2.38447 17.7786 2.7214C18.1155 3.05833 18.284 3.46626 18.284 3.94519V13.8256C18.284 14.3045 18.1155 14.7125 17.7786 15.0494C17.4417 15.3863 17.0337 15.5548 16.5548 15.5548H6.67439ZM6.67439 13.8256H16.5548V3.94519H6.67439V13.8256ZM3.44522 18.7839C2.96629 18.7839 2.55836 18.6155 2.22143 18.2786C1.8845 17.9416 1.71603 17.5337 1.71603 17.0548V5.44519H3.44522V17.0548H15.0548V18.7839H3.44522Z"
            className={props.path}
          />
        </g>
      </svg>
    </>
  );
};
export const RoundStatus: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <mask
          id="mask0_0_905"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <rect width="20" height="20" className={props.rect} />
        </mask>
        <g mask="url(#mask0_0_905)">
          <path
            d="M10.2781 13.6835C9.7316 14.2278 9.06944 14.4965 8.29167 14.4896C7.51389 14.4826 6.85417 14.2071 6.3125 13.6631C5.77083 13.1191 5.5 12.4628 5.5 11.6944C5.5 10.9259 5.77326 10.2695 6.31979 9.72521L9.72188 6.31646C10.2684 5.77215 10.9306 5.50347 11.7083 5.51042C12.4861 5.51736 13.1458 5.79285 13.6875 6.3369C14.2292 6.88094 14.5 7.53719 14.5 8.30565C14.5 9.0741 14.2267 9.73049 13.6802 10.2748L10.2781 13.6835ZM7.375 12.6042C7.73611 12.9653 8.10147 13.0945 8.47108 12.992C8.84069 12.8894 9.09339 12.767 9.22917 12.625L10.3958 11.4583L8.54167 9.625L7.375 10.7917C7.125 11.0417 7 11.3438 7 11.6979C7 12.0521 7.125 12.3542 7.375 12.6042ZM12.625 7.39583C12.2639 7.03472 11.9015 6.90546 11.5377 7.00804C11.174 7.11064 10.9253 7.23296 10.7917 7.375L9.60417 8.54167L11.4583 10.3958L12.625 9.22917C12.875 8.97917 13 8.67361 13 8.3125C13 7.95139 12.875 7.64583 12.625 7.39583ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H8.0625C8.17361 2.56944 8.40625 2.21181 8.76042 1.92708C9.11458 1.64236 9.52778 1.5 10 1.5C10.4722 1.5 10.8854 1.64236 11.2396 1.92708C11.5938 2.21181 11.8264 2.56944 11.9375 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5ZM10 4C10.1444 4 10.2639 3.95278 10.3583 3.85833C10.4528 3.76389 10.5 3.64444 10.5 3.5C10.5 3.35556 10.4528 3.23611 10.3583 3.14167C10.2639 3.04722 10.1444 3 10 3C9.85556 3 9.73611 3.04722 9.64167 3.14167C9.54722 3.23611 9.5 3.35556 9.5 3.5C9.5 3.64444 9.54722 3.76389 9.64167 3.85833C9.73611 3.95278 9.85556 4 10 4Z"
            className={props.path}
          />
        </g>
      </svg>
    </>
  );
};
export const AssessmentStack: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clipPath="url(#clip0_0_483)">
          <path
            d="M15.8333 4.16667V7.5H3.33332V4.16667H15.8333ZM15.8333 12.5V15.8333H3.33332V12.5H15.8333ZM16.6667 2.5H2.49999C2.04166 2.5 1.66666 2.875 1.66666 3.33333V8.33333C1.66666 8.79167 2.04166 9.16667 2.49999 9.16667H16.6667C17.125 9.16667 17.5 8.79167 17.5 8.33333V3.33333C17.5 2.875 17.125 2.5 16.6667 2.5ZM16.6667 10.8333H2.49999C2.04166 10.8333 1.66666 11.2083 1.66666 11.6667V16.6667C1.66666 17.125 2.04166 17.5 2.49999 17.5H16.6667C17.125 17.5 17.5 17.125 17.5 16.6667V11.6667C17.5 11.2083 17.125 10.8333 16.6667 10.8333Z"
            className={props.path}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_483">
            <rect width="20" height="20" className={props.rect} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export const UserIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
      >
        <path
          d="M0.678711 13.9196V11.4069C0.678711 10.9038 0.808864 10.4414 1.06917 10.0197C1.32949 9.59793 1.67533 9.27608 2.10669 9.05413C2.97777 8.62025 3.86433 8.29401 4.76636 8.07542C5.6684 7.85682 6.58453 7.74752 7.51475 7.74752C8.45135 7.74752 9.37074 7.85599 10.2729 8.07292C11.1751 8.28986 12.0584 8.61527 12.9228 9.04915C13.3542 9.27063 13.7 9.59178 13.9604 10.0126C14.2207 10.4334 14.3508 10.8981 14.3508 11.4067V13.9196H0.678711ZM16.0922 13.9196V11.2552C16.0922 10.6308 15.9237 10.0291 15.5868 9.44996C15.2498 8.87086 14.7639 8.35501 14.1289 7.90242C14.8007 7.99239 15.4358 8.13558 16.0342 8.33198C16.6327 8.52838 17.1961 8.76744 17.7245 9.04915C18.2377 9.32692 18.6321 9.65473 18.9076 10.0326C19.1832 10.4104 19.3209 10.8229 19.3209 11.2702V13.9196H16.0922ZM7.51475 6.91419C6.57152 6.91419 5.76604 6.58033 5.09832 5.9126C4.43059 5.24487 4.09673 4.43938 4.09673 3.49615C4.09673 2.55291 4.43059 1.74743 5.09832 1.07971C5.76604 0.411986 6.57152 0.078125 7.51475 0.078125C8.45799 0.078125 9.26348 0.411986 9.93121 1.07971C10.5989 1.74743 10.9328 2.55291 10.9328 3.49615C10.9328 4.43938 10.5989 5.24487 9.93121 5.9126C9.26348 6.58033 8.45799 6.91419 7.51475 6.91419ZM16.0922 3.4961C16.0922 4.43605 15.7576 5.24072 15.0884 5.9101C14.4192 6.57949 13.6147 6.91419 12.675 6.91419C12.5184 6.91419 12.3236 6.89599 12.0909 6.8596C11.8581 6.82323 11.6586 6.78088 11.4926 6.73256C11.8742 6.28148 12.1666 5.77871 12.3696 5.22425C12.5727 4.66979 12.6742 4.09401 12.6742 3.4969C12.6742 2.89979 12.5727 2.32375 12.3696 1.76879C12.1666 1.21385 11.8742 0.710826 11.4926 0.259729C11.6903 0.186965 11.8864 0.138507 12.0809 0.114354C12.2753 0.0902017 12.4723 0.078125 12.6718 0.078125C13.6124 0.078125 14.4176 0.412805 15.0875 1.08217C15.7573 1.75151 16.0922 2.55616 16.0922 3.4961ZM2.57454 12.0238H12.455V11.4319C12.455 11.2823 12.4168 11.1463 12.3404 11.024C12.264 10.9016 12.1633 10.8064 12.0383 10.7385C11.3082 10.3767 10.5662 10.1038 9.81232 9.91963C9.05838 9.73545 8.29253 9.64335 7.51475 9.64335C6.74363 9.64335 5.97778 9.73545 5.21721 9.91963C4.45664 10.1038 3.71464 10.3767 2.99121 10.7385C2.86621 10.8064 2.76552 10.9016 2.68913 11.024C2.61274 11.1463 2.57454 11.2823 2.57454 11.4319V12.0238ZM7.51396 5.09306C7.95291 5.09306 8.32893 4.93678 8.64202 4.62421C8.95514 4.31164 9.11169 3.93588 9.11169 3.49694C9.11169 3.05801 8.9554 2.68199 8.64282 2.3689C8.33025 2.05578 7.95449 1.89923 7.51554 1.89923C7.07661 1.89923 6.7006 2.05552 6.3875 2.3681C6.07439 2.68067 5.91784 3.05642 5.91784 3.49535C5.91784 3.9343 6.07413 4.31032 6.38671 4.62342C6.69928 4.93651 7.07503 5.09306 7.51396 5.09306Z"
          className={props.path}
        />
      </svg>
    </>
  );
};
export const WebIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M6.83317 15.293C6.58317 14.8346 6.36442 14.3589 6.17692 13.8659C5.98942 13.3728 5.83317 12.8624 5.70817 12.3346H3.24984C3.65262 13.0291 4.15609 13.6332 4.76025 14.1471C5.36442 14.661 6.05539 15.043 6.83317 15.293ZM2.5415 10.668H5.37484C5.33317 10.3902 5.30192 10.1159 5.28109 9.84505C5.26025 9.57422 5.24984 9.29297 5.24984 9.0013C5.24984 8.70963 5.26025 8.42839 5.28109 8.15755C5.30192 7.88672 5.33317 7.61241 5.37484 7.33464H2.5415C2.47206 7.61241 2.41998 7.88672 2.38525 8.15755C2.35053 8.42839 2.33317 8.70963 2.33317 9.0013C2.33317 9.29297 2.35053 9.57422 2.38525 9.84505C2.41998 10.1159 2.47206 10.3902 2.5415 10.668ZM3.24984 5.66797H5.70817C5.83317 5.14019 5.98942 4.62977 6.17692 4.13672C6.36442 3.64366 6.58317 3.16797 6.83317 2.70964C6.05539 2.95964 5.36442 3.34158 4.76025 3.85547C4.15609 4.36936 3.65262 4.97352 3.24984 5.66797ZM7.4165 5.66797H10.5832C10.4165 5.05686 10.2012 4.48047 9.93734 3.9388C9.67345 3.39714 9.36095 2.8763 8.99984 2.3763C8.63873 2.8763 8.32623 3.39714 8.06234 3.9388C7.79845 4.48047 7.58317 5.05686 7.4165 5.66797ZM12.2915 5.66797H14.7498C14.3471 4.97352 13.8436 4.36936 13.2394 3.85547C12.6353 3.34158 11.9443 2.95964 11.1665 2.70964C11.4165 3.16797 11.6353 3.64366 11.8228 4.13672C12.0103 4.62977 12.1665 5.14019 12.2915 5.66797ZM8.99984 17.3346C7.86095 17.3346 6.78456 17.1159 5.77067 16.6784C4.75678 16.2409 3.87136 15.6437 3.11442 14.8867C2.35748 14.1298 1.76025 13.2444 1.32275 12.2305C0.885254 11.2166 0.666504 10.1402 0.666504 9.0013C0.666504 7.84852 0.885254 6.76866 1.32275 5.76172C1.76025 4.75477 2.35748 3.87283 3.11442 3.11589C3.87136 2.35894 4.75678 1.76172 5.77067 1.32422C6.78456 0.886719 7.86095 0.667969 8.99984 0.667969C10.1526 0.667969 11.2325 0.886719 12.2394 1.32422C13.2464 1.76172 14.1283 2.35894 14.8853 3.11589C15.6422 3.87283 16.2394 4.75477 16.6769 5.76172C17.1144 6.76866 17.3332 7.84852 17.3332 9.0013C17.3332 9.14019 17.3297 9.27908 17.3228 9.41797C17.3158 9.55686 17.3054 9.69575 17.2915 9.83463H15.604C15.6318 9.69575 15.6491 9.56033 15.6561 9.42838C15.663 9.29644 15.6665 9.15408 15.6665 9.0013C15.6665 8.70963 15.6491 8.42839 15.6144 8.15755C15.5797 7.88672 15.5276 7.61241 15.4582 7.33464H12.6248C12.6665 7.61241 12.6978 7.88672 12.7186 8.15755C12.7394 8.42839 12.7498 8.70963 12.7498 9.0013V9.42838C12.7498 9.56033 12.7429 9.69575 12.729 9.83463H11.0623C11.0762 9.69575 11.0832 9.56033 11.0832 9.42838V9.0013C11.0832 8.70963 11.0728 8.42839 11.0519 8.15755C11.0311 7.88672 10.9998 7.61241 10.9582 7.33464H7.0415C6.99984 7.61241 6.96859 7.88672 6.94775 8.15755C6.92692 8.42839 6.9165 8.70963 6.9165 9.0013C6.9165 9.29297 6.92692 9.57422 6.94775 9.84505C6.96859 10.1159 6.99984 10.3902 7.0415 10.668H9.83317V12.3346H7.4165C7.58317 12.9457 7.79845 13.5221 8.06234 14.0638C8.32623 14.6055 8.63873 15.1263 8.99984 15.6263C9.15261 15.4041 9.29845 15.1784 9.43734 14.9492C9.57623 14.7201 9.70817 14.4874 9.83317 14.2513V17.293C9.69428 17.3069 9.55886 17.3173 9.42692 17.3242C9.29498 17.3312 9.15261 17.3346 8.99984 17.3346ZM15.6248 16.8138L13.1665 14.3555V16.2096H11.4998V11.5013H16.2082V13.168H14.3332L16.7915 15.6263L15.6248 16.8138Z"
          className={props.path}
        />
      </svg>
    </>
  );
};

export const AddIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <g clipPath="url(#clip0_0_553)">
          <path
            d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z"
            className={props.path}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_553">
            <rect
              width="40"
              height="40"
              className={props.rect}
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export const IconStack: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="17"
        viewBox="0 0 5 17"
        fill="none"
      >
        <path
          d="M2.41667 4.66667C3.56726 4.66667 4.5 3.73393 4.5 2.58333C4.5 1.43274 3.56726 0.5 2.41667 0.5C1.26607 0.5 0.333334 1.43274 0.333334 2.58333C0.333334 3.73393 1.26607 4.66667 2.41667 4.66667Z"
          fill="#1C4980"
        />
        <path
          d="M2.41667 10.5C3.56726 10.5 4.5 9.56726 4.5 8.41667C4.5 7.26607 3.56726 6.33333 2.41667 6.33333C1.26607 6.33333 0.333334 7.26607 0.333334 8.41667C0.333334 9.56726 1.26607 10.5 2.41667 10.5Z"
          fill="#1C4980"
        />
        <path
          d="M2.41667 16.3333C3.56726 16.3333 4.5 15.4006 4.5 14.25C4.5 13.0994 3.56726 12.1667 2.41667 12.1667C1.26607 12.1667 0.333334 13.0994 0.333334 14.25C0.333334 15.4006 1.26607 16.3333 2.41667 16.3333Z"
          fill="#1C4980"
        />
      </svg>
    </>
  );
};

export const IconCross: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z"
          fill="#323232"
        />
      </svg>
    </>
  );
};
export const IconCrossSmall: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <g clipPath="url(#clip0_0_1702)">
          <path
            d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
            className={props.path}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1702">
            <rect width="18" height="18" rx="9" className={props.rect} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export const DownIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_0_1688)">
          <path
            d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
            fill="#1C4980"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1688">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export const CheckIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#1c4980"
        className="th-stroke-Text-100 th-p-0.5 th-w-6 th-h-6"
      >
        <path
          className="th-stroke-Text-100"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </>
  );
};

export const SearchIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <g clipPath="url(#clip0_0_1035)">
          <path
            d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z"
            className={props.path}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1035">
            <rect width="22" height="22" className={props.rect} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export const StatsIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M0 16V5H4V16H0ZM6 16V0H10V16H6ZM12 16V9H16V16H12Z"
          className={props.path}
        />
      </svg>
    </>
  );
};
export const FilterIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_0_1037)">
          <path
            d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98C14.02 12.98 19.51 5.96 19.77 5.64C20.03 5.32 20 5 20 5C20 4.45 19.55 4 18.99 4H5.01C4.4 4 4 4.48 4 5C4 5.2 4.06 5.44 4.25 5.66Z"
            className={props.path}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1037">
            <rect width="24" height="24" className={props.rect} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export const MenuIcon: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <g clipPath="url(#clip0_0_956)">
          <path
            d="M18.75 22.5H3.75V20H18.75V22.5ZM26.25 7.5V10H3.75V7.5H26.25ZM18.75 16.25H3.75V13.75H18.75V16.25Z"
            fill="#1C4980"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_956">
            <rect
              width="30"
              height="30"
              fill="white"
              transform="matrix(-1 0 0 1 30 0)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
