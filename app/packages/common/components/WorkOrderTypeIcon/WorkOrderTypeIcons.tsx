import React from "react";
import { WORK_ORDER_TYPE_ICONS } from "../../../../../shared/constants/sharedConstant";
import ColorPalette from "../../util/color-palette.json";
import { Wrench } from "phosphor-react-native";
import { SvgXml } from 'react-native-svg';

const WorkOrderTypeIcons = ({ icon,size,strokeColor }) => {
  switch (icon) {
    case WORK_ORDER_TYPE_ICONS.BROKEN_LINK:
      return (
        <SvgXml xml={`<svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.962 11.9037L17.05 9.32035C17.9559 8.56248 18.0737 7.21554 17.3132 6.31187L15.3235 3.94787C14.563 3.0442 13.212 2.92601 12.3061 3.68388L8.67498 6.72161C8.27577 7.05558 8.13576 7.60688 8.3274 8.0903L8.73553 9.11985C8.92726 9.60351 9.4079 9.91065 9.9286 9.88226L10.6135 9.84492L10.7678 10.8117C10.8413 11.2729 11.1748 11.6505 11.6243 11.7817L12.8437 12.1374C13.2323 12.2508 13.652 12.163 13.962 11.9037ZM16.3928 7.08185C16.7266 7.47846 16.6748 8.06962 16.2772 8.40225L13.1893 10.9856C13.1869 10.9876 13.1836 10.9882 13.1806 10.9874L11.9612 10.6316C11.9578 10.6306 11.9552 10.6277 11.9546 10.6241L11.7633 9.4247C11.6876 8.95016 11.2643 8.60937 10.7832 8.6356L9.86237 8.6858C9.85833 8.68602 9.8546 8.68364 9.85311 8.67989L9.44499 7.65034C9.4435 7.64659 9.44459 7.64231 9.44768 7.63972L13.0788 4.60199C13.4764 4.26936 14.0693 4.32124 14.4031 4.71785L16.3928 7.08185ZM10.5968 11.6528L10.5967 11.6528L9.84982 11.8018L9.67627 10.7636C9.62483 10.4559 9.4878 10.1686 9.28078 9.93462L8.17151 8.68065L8.1715 8.68064C7.73661 8.18901 6.98801 8.13278 6.48462 8.55391L3.94437 10.679C3.03845 11.4369 2.92061 12.7838 3.68116 13.6875L5.66051 16.0393C6.43014 16.9538 7.80173 17.0622 8.70537 16.2799L11.6291 13.7491L11.6291 13.7491C12.5675 12.9367 11.8157 11.4098 10.5968 11.6528ZM10.833 12.8278C10.8424 12.8259 10.8483 12.8378 10.841 12.8441L10.837 12.8476L9.94033 13.6237L9.93935 13.6246L9.25932 14.2132L7.91726 15.3749C7.52067 15.7182 6.91869 15.6707 6.58091 15.2693L4.60156 12.9175C4.26776 12.5209 4.31948 11.9298 4.71708 11.5971L7.25733 9.47201C7.26123 9.46875 7.26704 9.46918 7.27042 9.473L8.37969 10.727C8.43789 10.7928 8.47642 10.8735 8.49088 10.96L8.7089 12.2642C8.74707 12.4925 8.8648 12.6873 9.02873 12.8256C9.20084 12.9708 9.42388 13.0537 9.65926 13.0477C9.71265 13.0464 9.76667 13.0404 9.82088 13.0296L10.8277 12.8289L10.833 12.8278ZM3.82918 7.06132C3.96957 6.76116 4.32697 6.63107 4.62746 6.77077L5.91593 7.36979C6.21641 7.50949 6.3462 7.86606 6.20581 8.16622C6.06542 8.46639 5.70802 8.59647 5.40753 8.45677L4.11906 7.85775C3.81858 7.71806 3.68879 7.36148 3.82918 7.06132ZM13.1523 15.7989C13.2383 16.1189 13.0485 16.4477 12.7283 16.5332C12.4082 16.6188 12.0789 16.4287 11.9929 16.1086L11.625 14.7395C11.539 14.4195 11.7288 14.0908 12.0489 14.0053C12.3691 13.9197 12.6983 14.1098 12.7843 14.4298L13.1523 15.7989ZM7.40039 4.07198C7.08025 4.15751 6.89044 4.48626 6.97645 4.80628L7.3444 6.17538C7.43041 6.49539 7.75966 6.68548 8.0798 6.59996C8.39995 6.51443 8.58975 6.18568 8.50375 5.86566L8.13579 4.49656C8.04979 4.17655 7.72054 3.98646 7.40039 4.07198ZM15.5013 13.8346C15.8018 13.9743 16.1592 13.8442 16.2996 13.544C16.44 13.2439 16.3102 12.8873 16.0097 12.7476L14.7212 12.1486C14.4208 12.0089 14.0634 12.1389 13.923 12.4391C13.7826 12.7393 13.9124 13.0958 14.2129 13.2355L15.5013 13.8346ZM6.77481 6.9259C7.02897 6.71328 7.06203 6.33539 6.84866 6.08186L5.93482 4.99607C5.72145 4.74254 5.34243 4.70938 5.08827 4.92201C4.83411 5.13463 4.80105 5.51252 5.01443 5.76605L5.92826 6.85184C6.14164 7.10537 6.52065 7.13853 6.77481 6.9259ZM14.2197 13.7373C14.0064 13.4838 13.6274 13.4506 13.3732 13.6633C13.119 13.8759 13.086 14.2538 13.2994 14.5073L14.2132 15.5931C14.4266 15.8466 14.8056 15.8798 15.0597 15.6671C15.3139 15.4545 15.347 15.0766 15.1336 14.8231L14.2197 13.7373Z"
             fill=${strokeColor || "#172B4D"}
          />
         </svg>`}
        />
      );

    case WORK_ORDER_TYPE_ICONS.ENERGY:
      return (
        <SvgXml xml={`<svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.20066 2L3.72266 9.33333H8.55599L7.91132 14L13.3893 6.66667H8.55599L9.20066 2Z"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>`}
        />
      );

    case WORK_ORDER_TYPE_ICONS.ICE_CRYSTAL:
      return (
        <SvgXml xml={`
                      <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66927 2.92676V14.8385"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1133 3.86719L8.66799 5.30255L7.22266 3.86719"
             stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0026 5.8252L3.33594 11.9399"
             stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.767 7.61774L11.793 7.09296L12.3216 5.13281"
             stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.57031 10.1475L5.54431 10.6722L5.01565 12.6324"
             stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33594 5.8252L14.0026 11.9399"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.57031 7.61774L5.54431 7.09296L5.01565 5.13281"
               stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.767 10.1475L11.793 10.6722L12.3216 12.6324"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.22266 13.8983L8.66799 12.4629L10.1133 13.8983"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          `}
        />
      );
    //
    case WORK_ORDER_TYPE_ICONS.INSPECTION:
      return (
       <SvgXml xml={`
            <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.66797 3.58818L6.53464 2.51281C6.6613 2.35597 6.85264 2.26465 7.0553 2.26465H9.61464C9.8173 2.26465 10.0086 2.35597 10.1353 2.51281L11.0013 3.58818V3.58818V4.24994C11.0013 4.61524 10.7026 4.91171 10.3346 4.91171H6.33464C5.96664 4.91171 5.66797 4.61524 5.66797 4.24994V3.58818V3.58818H5.66797Z"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.66797 11.3973H7.0013"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.66797 8.74983H8.33464"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.57 14.8379H4.33333C3.59667 14.8379 3 14.2456 3 13.5144V4.91142C3 4.18017 3.59667 3.58789 4.33333 3.58789H5.66667"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 3.58789H12.3333C13.07 3.58789 13.6667 4.18017 13.6667 4.91142V10.5609"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5191 12.2646L12.0378 13.7351L11.1484 12.853"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.3346 15.5002C10.862 15.5002 9.66797 14.315 9.66797 12.8531C9.66797 11.3913 10.862 10.2061 12.3346 10.2061C13.808 10.2061 15.0013 11.3913 15.0013 12.8531C15.0013 14.315 13.808 15.5002 12.3346 15.5002"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
       `}/>
      );

    case WORK_ORDER_TYPE_ICONS.LIGHT_BULB:
      return (
       <SvgXml xml={`
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4453 10.993H6.44531"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.13927 10.7993C4.95527 9.96874 4.24527 8.51882 4.49527 6.92264C4.76594 5.19742 6.2146 3.82029 7.96194 3.61713C10.3873 3.33455 12.4453 5.20867 12.4453 7.55926C12.4453 8.89933 11.7746 10.0819 10.7499 10.8006C10.5659 10.9296 10.4453 11.1295 10.4453 11.3532V13.1843C10.4453 14.0982 9.69927 14.8387 8.7786 14.8387H8.11194C7.19127 14.8387 6.44527 14.0982 6.44527 13.1843V11.3558C6.44527 11.1301 6.32394 10.929 6.13927 10.7993Z"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7812 4.25039L14.5746 3.46289"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.11365 10.8682L2.32031 11.6557"
              stroke='$'${strokeColor || "#748094"}''
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.78161 3.58828L2.98828 2.80078"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7812 10.8682L14.5746 11.6557"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4453 7.55842H15.572"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.32031 7.55842H2.44698"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.44531 12.8533H10.3586"
              stroke='${strokeColor || "#748094"}'
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
       `}/>
      );

    case WORK_ORDER_TYPE_ICONS.PREVENTIVE:
      return (
        <SvgXml xml={` <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M4.58821 13.6987C4.20421 13.4227 3.85421 13.1044 3.54688 12.7471"
            stroke='${strokeColor}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.45703 6.89706C2.83103 5.84949 3.48703 4.93493 4.34103 4.25"
            stroke='${strokeColor}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.10822 8.88281C2.10822 9.58031 2.23489 10.246 2.45689 10.8681"
            stroke='${strokeColor}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3519 3.53125C12.9732 3.53125 13.4772 4.03154 13.4772 4.64831C13.4772 5.26507 12.9732 5.76537 12.3519 5.76537C11.7306 5.76537 11.2266 5.26507 11.2266 4.64831C11.2272 4.03154 11.7312 3.53125 12.3519 3.53125"
            stroke='${strokeColor}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4786 3.95448C10.5179 3.30595 9.35861 2.92676 8.10995 2.92676C7.50195 2.92676 6.91595 3.01808 6.36328 3.18485"
            stroke='${strokeColor}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.36328 14.5807C6.91595 14.7475 7.50195 14.8388 8.10995 14.8388C11.4239 14.8388 14.1099 12.1725 14.1099 8.88291C14.1099 8.52358 14.0726 8.1735 14.0113 7.83203"
            stroke='${strokeColor}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1094 9.7098C10.1094 10.8017 8.10938 11.5296 8.10938 11.5296C8.10938 11.5296 6.10938 10.8017 6.10938 9.7098V7.51207L7.56671 6.99127C7.91738 6.86619 8.30004 6.86619 8.65071 6.99127L10.1094 7.51207V9.7098Z"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>`}
        />
      );

    case WORK_ORDER_TYPE_ICONS.PROCEDURE:
      return (
        <SvgXml xml={` <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1419 5.58348L10.2566 3.71201C10.0066 3.46385 9.66722 3.32422 9.31389 3.32422H4.53255C3.79589 3.32422 3.19922 3.9165 3.19922 4.64775V13.9125C3.19922 14.6437 3.79589 15.236 4.53255 15.236H11.1992C11.9359 15.236 12.5326 14.6437 12.5326 13.9125V6.51922C12.5326 6.16848 12.3919 5.83165 12.1419 5.58348V5.58348Z"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5326 6.63304H9.86589C9.49789 6.63304 9.19922 6.33657 9.19922 5.97128V3.32422"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.19922 10.6033H9.19922"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.19922 12.5887H8.08589"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>`}
        />
      );

    case WORK_ORDER_TYPE_ICONS.SHIELD:
      return (
        <SvgXml xml={`<svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5573 9.54407C13.5573 12.4678 11.1693 14.8382 8.22396 14.8382V14.8382C5.27862 14.8382 2.89062 12.4678 2.89062 9.54407V5.51525C2.89062 5.17577 3.14929 4.88591 3.49062 4.85944C5.12996 4.73106 6.62196 4.08319 7.79929 3.08062C8.04062 2.87547 8.40796 2.87547 8.64862 3.08062C9.82596 4.08319 11.318 4.73172 12.9573 4.85944C13.2986 4.88591 13.5573 5.17577 13.5573 5.51525V9.54407Z"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.4364 7.78516L7.67105 10.5302L6.01172 8.88302"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>`}
        />
      );
      
    case WORK_ORDER_TYPE_ICONS.SPANNERS:
      return (
        <SvgXml xml={`<svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M8.78125 10.8671L12.1146 14.176C12.6666 14.7239 13.5626 14.7239 14.1146 14.176V14.176C14.6666 13.628 14.6666 12.7386 14.1146 12.1907L10.7813 8.88184"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8326 4.81028C14.8486 4.8255 14.8606 4.84535 14.8666 4.86653C15.1799 5.90351 14.9373 7.07021 14.1119 7.88947C13.2779 8.71734 12.0866 8.95425 11.0339 8.62866L5.46928 14.1524C4.92728 14.6904 4.04328 14.7308 3.48261 14.212C2.89328 13.6673 2.88128 12.7515 3.44528 12.1909L9.03395 6.64337C8.70595 5.59844 8.94461 4.41587 9.77861 3.588C10.6039 2.76873 11.7793 2.52785 12.8239 2.83888C12.8453 2.8455 12.8653 2.85675 12.8806 2.87263L12.9886 2.97984C13.0406 3.03146 13.0406 3.1155 12.9886 3.16712L11.2319 4.91153L12.7786 6.44682L14.5359 4.70241C14.5879 4.65079 14.6726 4.65079 14.7246 4.70241L14.8326 4.81028V4.81028Z"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.84525 3.78144L3.29459 5.12019C3.38525 5.39086 3.63992 5.57284 3.92725 5.57284H5.44659V4.06468C5.44659 3.78012 5.26325 3.52666 4.99059 3.43666L3.64192 2.99064C3.52192 2.95093 3.38992 2.98203 3.30059 3.07071L2.92592 3.44262C2.83659 3.5313 2.80525 3.66233 2.84525 3.78144V3.78144Z"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.44922 5.57324L7.78255 7.88942"
            stroke='${strokeColor || "#748094"}'
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>`}
        />
      );
      
    case WORK_ORDER_TYPE_ICONS.SPARE_PART_ORDER:
      return (
        <Wrench
          size={size}
          color={strokeColor || ColorPalette.darkGray.primary}
        />
      );
    case WORK_ORDER_TYPE_ICONS.PREVENTIVE_MAINTENANCE:
      return (
        <SvgXml xml={`<svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.27507 13.125C2.15861 13.125 2.04691 13.0789 1.96456 12.9969C1.8822 12.9148 1.83594 12.8035 1.83594 12.6875C1.83594 12.5715 1.8822 12.4602 1.96456 12.3781C2.04691 12.2961 2.15861 12.25 2.27507 12.25H3.15334V11.375C3.15316 10.6321 3.36394 9.9043 3.76133 9.27568C4.15871 8.64706 4.7265 8.14327 5.39908 7.8225C5.65378 7.70087 5.78816 7.49263 5.78816 7.30625V6.69375C5.78816 6.50738 5.6529 6.29912 5.39908 6.1775C4.7265 5.85673 4.15871 5.35294 3.76133 4.72432C3.36394 4.0957 3.15316 3.3679 3.15334 2.625V1.75H2.27507C2.15861 1.75 2.04691 1.70391 1.96456 1.62186C1.8822 1.53981 1.83594 1.42853 1.83594 1.3125C1.83594 1.19647 1.8822 1.08519 1.96456 1.00314C2.04691 0.921094 2.15861 0.875 2.27507 0.875H11.9361C12.0525 0.875 12.1642 0.921094 12.2466 1.00314C12.3289 1.08519 12.3752 1.19647 12.3752 1.3125C12.3752 1.42853 12.3289 1.53981 12.2466 1.62186C12.1642 1.70391 12.0525 1.75 11.9361 1.75H11.0578V2.625C11.058 3.3679 10.8472 4.0957 10.4498 4.72432C10.0524 5.35294 9.48463 5.85673 8.81204 6.1775C8.55735 6.29912 8.42297 6.50738 8.42297 6.69375V7.30625C8.42297 7.49263 8.55822 7.70087 8.81204 7.8225C9.48463 8.14327 10.0524 8.64706 10.4498 9.27568C10.8472 9.9043 11.058 10.6321 11.0578 11.375V12.25H11.9361C12.0525 12.25 12.1642 12.2961 12.2466 12.3781C12.3289 12.4602 12.3752 12.5715 12.3752 12.6875C12.3752 12.8035 12.3289 12.9148 12.2466 12.9969C12.1642 13.0789 12.0525 13.125 11.9361 13.125H2.27507ZM4.03162 1.75V2.625C4.03162 3.09488 4.13701 3.53938 4.32759 3.9375H9.88354C10.0732 3.53938 10.1795 3.09488 10.1795 2.625V1.75H4.03162ZM6.66643 7.30625C6.66643 7.91963 6.24661 8.38775 5.7785 8.61175C5.25531 8.86122 4.81364 9.25308 4.50452 9.74205C4.1954 10.231 4.03146 10.7971 4.03162 11.375C4.03162 11.375 4.7922 10.2384 6.66643 10.08V7.30625ZM7.5447 7.30625V10.08C9.41893 10.2384 10.1795 11.375 10.1795 11.375C10.1797 10.7971 10.0157 10.231 9.70661 9.74205C9.39749 9.25308 8.95582 8.86122 8.43263 8.61175C7.96451 8.38775 7.5447 7.9205 7.5447 7.30713V7.30625Z"
      fill='${strokeColor || "#748094"}'
    />
      </svg>`}/>
      );
      
    case WORK_ORDER_TYPE_ICONS.FORM_SUBMISSION:
      return (
        <SvgXml xml={ `<svg
          width="28"
          height="30"
          viewBox="0 0 28 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         
        >
          <path
            d="M2.74998 0H18.6809L27.1249 8.41128V28.125C27.1249 29.1609 26.285 30 25.25 30H2.74998C1.71495 30 0.875 29.1609 0.875 28.125V1.87498C0.875 0.839081 1.71505 0 2.74998 0Z"
            fill='${strokeColor || "#748094"}'
          />
          <path
            d="M27.0978 8.43437H20.5625C19.5275 8.43437 18.6875 7.59442 18.6875 6.55939V0.015625L27.0978 8.43437Z"
            fill={
              ["#fff", "#ffffff"].includes('${strokeColor}'.toLowerCase())
                ? "#174b4d"
                : "white"
            }
            fillOpacity="0.7"
          />
          <path
            d="M20.0903 16.0791C20.4044 16.0791 20.5582 15.8053 20.5582 15.54C20.5582 15.2653 20.3978 15 20.0903 15H18.3016C17.9519 15 17.7569 15.2897 17.7569 15.6094V20.0053C17.7569 20.3972 17.98 20.6147 18.2819 20.6147C18.5819 20.6147 18.806 20.3972 18.806 20.0053V18.7988H19.8879C20.2235 18.7988 20.3913 18.524 20.3913 18.2513C20.3913 17.9841 20.2235 17.7187 19.8879 17.7187H18.806V16.0791H20.0903ZM14.0444 15H12.7356C12.3803 15 12.1281 15.2438 12.1281 15.6056V20.0091C12.1281 20.4581 12.4909 20.5988 12.7505 20.5988H14.124C15.7496 20.5988 16.823 19.5291 16.823 17.8781C16.8222 16.1325 15.8116 15 14.0444 15ZM14.1072 19.5132H13.3094V16.0857H14.0285C15.1169 16.0857 15.5903 16.816 15.5903 17.8238C15.5903 18.7669 15.1253 19.5132 14.1072 19.5132ZM9.31283 15H8.01627C7.6497 15 7.44531 15.2418 7.44531 15.6094V20.0053C7.44531 20.3972 7.67967 20.6147 7.99464 20.6147C8.30961 20.6147 8.54397 20.3972 8.54397 20.0053V18.7218H9.35677C10.3599 18.7218 11.1877 18.0112 11.1877 16.8684C11.1878 15.75 10.3891 15 9.31283 15ZM9.29129 17.6907H8.54407V16.0322H9.29129C9.75254 16.0322 10.046 16.3922 10.046 16.8619C10.045 17.3307 9.75254 17.6907 9.29129 17.6907Z"
            fill={
              ["#fff", "#ffffff"].includes('${strokeColor}'.toLowerCase())
                ? "#174b4d"
                : "white"
            }
          />
        </svg>`}></SvgXml>
      );
    
    default:
      
      return (
        <SvgXml xml={`<svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 16.25V5C2.5 4.83424 2.56585 4.67527 2.68306 4.55806C2.80027 4.44085 2.95924 4.375 3.125 4.375H7.28906C7.4242 4.37556 7.55562 4.41936 7.66406 4.5L9.83594 6.125C9.94438 6.20564 10.0758 6.24944 10.2109 6.25H15.625C15.7908 6.25 15.9497 6.31585 16.0669 6.43306C16.1842 6.55027 16.25 6.70924 16.25 6.875V8.75"
            stroke='${strokeColor || "black"}'
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 16.25L4.85938 9.17969C4.9005 9.05467 4.98004 8.94583 5.08666 8.86868C5.19327 8.79152 5.32152 8.74999 5.45313 8.75H17.8828C17.9816 8.74999 18.0791 8.77342 18.1671 8.81836C18.2551 8.86331 18.3312 8.92848 18.3892 9.00854C18.4471 9.0886 18.4852 9.18126 18.5004 9.27891C18.5156 9.37657 18.5074 9.47643 18.4766 9.57031L16.25 16.25H2.5Z"
            stroke='${strokeColor || "black"}'
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>`} />
      );
  }
};

export default WorkOrderTypeIcons;
