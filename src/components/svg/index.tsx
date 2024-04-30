import type { FC } from 'react'

type Props = {
    id: string
}

export const SVG: FC<Props> = ({ id }) => {
    switch (id) {
        case "logo-icon":
            return (
                <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.625 15.6458L38.25 19.9583L21 28.5833L3.75 19.9583L12.375 15.6458M29.625 25.2292L38.25 29.5417L21 38.1667L3.75 29.5417L12.375 25.2292M21 1.75L38.25 10.375L21 19L3.75 10.375L21 1.75Z" stroke="#00528F" stroke-width="3" />
                </svg>
            )
        case "main-icon":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.235 2.37401C10.867 2.52601 10.538 2.85601 9.87898 3.51401C9.21998 4.17401 8.88998 4.50301 8.73898 4.87001C8.63843 5.1127 8.58668 5.37282 8.58668 5.63551C8.58668 5.89821 8.63843 6.15832 8.73898 6.40101C8.88998 6.76901 9.21898 7.09801 9.87898 7.75701C10.537 8.41601 10.867 8.74601 11.235 8.89701C11.7248 9.0998 12.2751 9.0998 12.765 8.89701C13.133 8.74601 13.462 8.41701 14.121 7.75701C14.781 7.09801 15.109 6.76901 15.261 6.40101C15.4638 5.91117 15.4638 5.36085 15.261 4.87101C15.109 4.50301 14.781 4.17401 14.121 3.51501C13.462 2.85501 13.133 2.52601 12.765 2.37401C12.2751 2.17123 11.7248 2.17123 11.235 2.37401ZM4.86998 8.73801C4.50298 8.89001 4.17298 9.21901 3.51498 9.87801C2.85498 10.538 2.52598 10.867 2.37398 11.234C2.27343 11.4767 2.22168 11.7368 2.22168 11.9995C2.22168 12.2622 2.27343 12.5223 2.37398 12.765C2.52598 13.133 2.85598 13.462 3.51398 14.121C4.17398 14.78 4.50298 15.109 4.86998 15.261C5.11266 15.3616 5.37278 15.4133 5.63548 15.4133C5.89817 15.4133 6.15829 15.3616 6.40098 15.261C6.76898 15.109 7.09798 14.78 7.75698 14.121C8.41698 13.462 8.74498 13.133 8.89698 12.765C9.09976 12.2752 9.09976 11.7249 8.89698 11.235C8.74498 10.867 8.41698 10.537 7.75698 9.87801C7.09798 9.21901 6.76898 8.89001 6.40098 8.73801C5.91113 8.53523 5.35982 8.53523 4.86998 8.73801ZM16.243 9.87801C15.584 10.538 15.255 10.867 15.103 11.234C15.0024 11.4767 14.9507 11.7368 14.9507 11.9995C14.9507 12.2622 15.0024 12.5223 15.103 12.765C15.255 13.133 15.584 13.462 16.243 14.121C16.902 14.78 17.232 15.109 17.599 15.261C18.0888 15.4638 18.6391 15.4638 19.129 15.261C19.497 15.109 19.827 14.78 20.486 14.121C21.145 13.462 21.473 13.133 21.626 12.765C21.8288 12.2752 21.8288 11.7249 21.626 11.235C21.473 10.867 21.145 10.537 20.486 9.87801C19.826 9.21901 19.497 8.89001 19.13 8.73801C18.8873 8.63747 18.6272 8.58572 18.3645 8.58572C18.1018 8.58572 17.8417 8.63747 17.599 8.73801C17.232 8.89001 16.902 9.21901 16.243 9.87801ZM11.235 15.102C10.867 15.254 10.538 15.584 9.87898 16.242C9.21998 16.902 8.88998 17.231 8.73898 17.599C8.53619 18.0889 8.53619 18.6392 8.73898 19.129C8.88998 19.497 9.21898 19.826 9.87898 20.485C10.537 21.144 10.867 21.474 11.235 21.625C11.7248 21.8278 12.2751 21.8278 12.765 21.625C13.133 21.474 13.462 21.145 14.121 20.485C14.781 19.826 15.109 19.497 15.261 19.129C15.464 18.639 15.464 18.089 15.261 17.599C15.109 17.231 14.781 16.901 14.121 16.243C13.462 15.583 13.133 15.254 12.765 15.102C12.2751 14.8992 11.7248 14.8992 11.235 15.102Z" stroke="#00528F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            );
        case "factory-icon":
            return (
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4375 19.1875H12.4491L12.0116 19.625H0.5V1.9375H22.5V11.9689C22.3585 11.8758 22.2127 11.7874 22.0625 11.704V7.1875V6.6875H21.5625H1.4375H0.9375V7.1875V18.6875V19.1875H1.4375ZM21.5625 6.25H22.0625V5.75V2.875V2.375H21.5625H1.4375H0.9375V2.875V5.75V6.25H1.4375H21.5625ZM19.3988 13.4487L19.3988 13.4487H19.4062C19.844 13.4487 20.2442 13.53 20.6121 13.6887C20.9906 13.8518 21.3153 14.0712 21.5908 14.3467C21.8648 14.6208 22.0842 14.948 22.2476 15.3337C22.4079 15.7119 22.4888 16.1133 22.4888 16.5425C22.4888 16.966 22.4109 17.3563 22.2584 17.7186C22.103 18.0878 21.8871 18.4131 21.6092 18.6974C21.3326 18.9804 21.0164 19.1974 20.658 19.351C20.3054 19.5021 19.9113 19.5843 19.4699 19.5913C19.1576 19.591 18.8527 19.5486 18.5539 19.4642C18.2568 19.3802 17.9755 19.2542 17.7087 19.0851L17.3705 18.8706L17.0874 19.1538L14.83 21.4111C14.6553 21.5859 14.4842 21.7607 14.3169 21.9356C14.1604 22.0992 13.9967 22.2595 13.8255 22.4165C13.7811 22.4562 13.7462 22.4818 13.7207 22.4977C13.7126 22.4988 13.6989 22.5 13.6787 22.5C13.629 22.5 13.5807 22.4869 13.5157 22.4218C13.4506 22.3568 13.4375 22.3085 13.4375 22.2588C13.4375 22.2447 13.4383 22.235 13.439 22.229C13.458 22.1972 13.4879 22.154 13.5329 22.0986C13.6786 21.9324 13.8312 21.7731 13.9906 21.6206C14.1629 21.4558 14.339 21.2872 14.5188 21.1149L14.5189 21.115L14.5264 21.1075C14.9094 20.7245 15.2849 20.3452 15.653 19.9696C16.0175 19.5977 16.3932 19.2219 16.7803 18.8423L17.0639 18.5642L16.8571 18.225C16.6925 17.9551 16.5685 17.6739 16.4838 17.3808C16.3995 17.0891 16.3532 16.7823 16.3462 16.4588C16.3468 16.0315 16.4277 15.6416 16.5848 15.2834C16.7472 14.9132 16.9656 14.5964 17.24 14.3284C17.5173 14.0575 17.8409 13.84 18.2145 13.6762C18.5707 13.5199 18.9632 13.4422 19.3988 13.4487ZM22.0731 16.4888L22.0737 16.4764V16.4639C22.0737 16.1225 22.0021 15.7936 21.8605 15.4821C21.722 15.1775 21.5294 14.9038 21.2871 14.6616C21.0449 14.4193 20.7712 14.2267 20.4667 14.0883C20.1575 13.9477 19.8295 13.8732 19.4871 13.864L19.4871 13.8638H19.4736C19.1109 13.8638 18.7629 13.9387 18.4347 14.0887C18.1112 14.2366 17.8258 14.4444 17.5803 14.7081C17.3449 14.961 17.154 15.2396 17.011 15.5435C16.8571 15.8705 16.7837 16.2249 16.7837 16.5986C16.7837 16.9461 16.8481 17.2788 16.9806 17.5913C17.1102 17.8966 17.2921 18.1677 17.5254 18.4009C17.7586 18.6341 18.0296 18.8161 18.335 18.9456C18.6491 19.0789 18.9857 19.1426 19.3389 19.1426C19.6969 19.1426 20.0411 19.0733 20.3669 18.9337C20.6879 18.7961 20.9778 18.6002 21.236 18.3509C21.4957 18.1001 21.6997 17.8154 21.8403 17.4967C21.9791 17.1821 22.0553 16.8446 22.0731 16.4888Z" fill="#00528F" stroke="#00528F" />
                </svg>
            );
        case "courses-icon":
            return (
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 17.5135C21.1406 17.7771 21.6055 18.1005 22.0195 18.4839C22.4336 18.8672 22.7852 19.2944 23.0742 19.7656C23.3633 20.2368 23.5898 20.7479 23.7539 21.299C23.918 21.85 24 22.417 24 23H22.5C22.5 22.3691 22.3828 21.7741 22.1484 21.2151C21.9141 20.6561 21.5938 20.1689 21.1875 19.7536C20.7812 19.3384 20.3008 19.0069 19.7461 18.7594C19.1914 18.5118 18.6094 18.392 18 18.4C17.375 18.4 16.793 18.5198 16.2539 18.7594C15.7148 18.999 15.2383 19.3264 14.8242 19.7417C14.4102 20.1569 14.0859 20.6481 13.8516 21.2151C13.6172 21.7821 13.5 22.3771 13.5 23H12C12 22.417 12.0781 21.85 12.2344 21.299C12.3906 20.7479 12.6172 20.2368 12.9141 19.7656C13.2109 19.2944 13.5664 18.8672 13.9805 18.4839C14.3945 18.1005 14.8594 17.7771 15.375 17.5135C14.7891 17.0823 14.332 16.5432 14.0039 15.8964C13.6758 15.2495 13.5078 14.5507 13.5 13.8C13.5 13.1691 13.6172 12.5741 13.8516 12.0151C14.0859 11.4561 14.4062 10.9689 14.8125 10.5536C15.2188 10.1384 15.6953 9.80694 16.2422 9.55937C16.7891 9.31181 17.375 9.19201 18 9.2C18.6172 9.2 19.1992 9.31979 19.7461 9.55937C20.293 9.79896 20.7695 10.1264 21.1758 10.5417C21.582 10.9569 21.9062 11.4481 22.1484 12.0151C22.3906 12.5821 22.5078 13.1771 22.5 13.8C22.5 14.5507 22.3359 15.2495 22.0078 15.8964C21.6797 16.5432 21.2188 17.0823 20.625 17.5135ZM18 16.8667C18.4141 16.8667 18.8008 16.7868 19.1602 16.6271C19.5195 16.4674 19.8398 16.2477 20.1211 15.9682C20.4023 15.6887 20.6172 15.3653 20.7656 14.9979C20.9141 14.6306 20.9922 14.2312 21 13.8C21 13.3767 20.9219 12.9814 20.7656 12.6141C20.6094 12.2467 20.3945 11.9193 20.1211 11.6318C19.8477 11.3443 19.5312 11.1247 19.1719 10.9729C18.8125 10.8212 18.4219 10.7413 18 10.7333C17.5859 10.7333 17.1992 10.8132 16.8398 10.9729C16.4805 11.1326 16.1602 11.3523 15.8789 11.6318C15.5977 11.9113 15.3828 12.2347 15.2344 12.6021C15.0859 12.9694 15.0078 13.3687 15 13.8C15 14.2233 15.0781 14.6186 15.2344 14.9859C15.3906 15.3533 15.6055 15.6807 15.8789 15.9682C16.1523 16.2557 16.4688 16.4753 16.8281 16.6271C17.1875 16.7788 17.5781 16.8587 18 16.8667ZM12 17.825C11.75 18.1205 11.5234 18.428 11.3203 18.7474C11.1172 19.0668 10.9375 19.4102 10.7812 19.7776C10.3672 19.3384 9.86719 18.999 9.28125 18.7594C8.69531 18.5198 8.10156 18.4 7.5 18.4H3V3.06667H1.5V19.9333H10.7227C10.6133 20.1809 10.5234 20.4325 10.4531 20.688C10.3828 20.9436 10.3242 21.2031 10.2773 21.4667H0V1.53333H3V0H7.5C8.1875 0 8.84766 0.107812 9.48047 0.323437C10.1133 0.539062 10.7031 0.8625 11.25 1.29375C11.7891 0.8625 12.375 0.539062 13.0078 0.323437C13.6406 0.107812 14.3047 0 15 0H19.5V1.53333H22.5V9.2C22.0469 8.74479 21.5469 8.36545 21 8.06198V3.06667H19.5V7.48698C19.25 7.4151 19 7.36319 18.75 7.33125C18.5 7.29931 18.25 7.28333 18 7.28333V1.53333H15C14.4531 1.53333 13.9219 1.62917 13.4062 1.82083C12.8906 2.0125 12.4219 2.29601 12 2.67135V17.825ZM10.5 17.6693V2.67135C10.0781 2.30399 9.60938 2.02448 9.09375 1.83281C8.57812 1.64115 8.04688 1.54132 7.5 1.53333H4.5V16.8667H7.5C8.02344 16.8667 8.53906 16.9345 9.04688 17.0703C9.55469 17.2061 10.0391 17.4057 10.5 17.6693Z" fill="#00528F" />
                </svg>
            );
        case "register-icon":
            return (
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.625 18.375V14.6562L14.175 3.12813C14.35 2.96771 14.5434 2.84375 14.7551 2.75625C14.9669 2.66875 15.1891 2.625 15.4219 2.625C15.6546 2.625 15.8807 2.66875 16.1 2.75625C16.3193 2.84375 16.5089 2.975 16.6687 3.15L17.8719 4.375C18.0469 4.53542 18.1746 4.725 18.2551 4.94375C18.3356 5.1625 18.3756 5.38125 18.375 5.6C18.375 5.83333 18.335 6.05588 18.2551 6.26763C18.1752 6.47938 18.0475 6.67246 17.8719 6.84687L6.34375 18.375H2.625ZM15.4 6.825L16.625 5.6L15.4 4.375L14.175 5.6L15.4 6.825Z" fill="#00528F" />
                </svg>
            );
        case "login-icon":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4" stroke="#00528F" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M4 12H14M14 12L11 9M14 12L11 15" stroke="#00528F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        case "email-icon":
            return (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 2.5H2.5C1.8125 2.5 1.25625 3.0625 1.25625 3.75L1.25 11.25C1.25 11.9375 1.8125 12.5 2.5 12.5H12.5C13.1875 12.5 13.75 11.9375 13.75 11.25V3.75C13.75 3.0625 13.1875 2.5 12.5 2.5ZM12.25 5.15625L7.83125 7.91875C7.63125 8.04375 7.36875 8.04375 7.16875 7.91875L2.75 5.15625C2.68733 5.12107 2.63245 5.07354 2.58868 5.01653C2.54491 4.95953 2.51316 4.89424 2.49536 4.82461C2.47756 4.75498 2.47406 4.68246 2.4851 4.61144C2.49613 4.54042 2.52146 4.47238 2.55955 4.41144C2.59764 4.35049 2.6477 4.29791 2.7067 4.25687C2.7657 4.21583 2.83242 4.18719 2.90281 4.17269C2.9732 4.15818 3.0458 4.1581 3.11622 4.17247C3.18664 4.18683 3.25341 4.21533 3.3125 4.25625L7.5 6.875L11.6875 4.25625C11.7466 4.21533 11.8134 4.18683 11.8838 4.17247C11.9542 4.1581 12.0268 4.15818 12.0972 4.17269C12.1676 4.18719 12.2343 4.21583 12.2933 4.25687C12.3523 4.29791 12.4024 4.35049 12.4404 4.41144C12.4785 4.47238 12.5039 4.54042 12.5149 4.61144C12.5259 4.68246 12.5224 4.75498 12.5046 4.82461C12.4868 4.89424 12.4551 4.95953 12.4113 5.01653C12.3676 5.07354 12.3127 5.12107 12.25 5.15625Z" fill="white" />
                </svg>
            )
        case "tel-icon":
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 10.8844L12.439 9.40014L12.4263 9.39451C12.2111 9.30173 11.9761 9.26438 11.7427 9.28587C11.5093 9.30737 11.285 9.38702 11.0904 9.51756C11.0631 9.53583 11.0368 9.55554 11.0116 9.57662L9.44297 10.9126C8.52891 10.4169 7.58461 9.48029 7.08821 8.57748L8.42836 6.9842C8.44991 6.95848 8.46987 6.93148 8.48813 6.90334C8.61524 6.70938 8.69242 6.48701 8.71278 6.25601C8.73314 6.02501 8.69607 5.79256 8.60485 5.57935C8.60268 5.57527 8.6008 5.57104 8.59922 5.5667L7.11563 2.25006C6.99385 1.97269 6.78601 1.7419 6.52287 1.59184C6.25972 1.44178 5.95526 1.38043 5.65454 1.41685C4.63386 1.55094 3.69689 2.05197 3.01862 2.82638C2.34035 3.60079 1.96716 4.59561 1.96876 5.62506C1.96876 11.3633 6.6368 16.0313 12.375 16.0313C13.4045 16.0329 14.3993 15.6597 15.1737 14.9814C15.9481 14.3032 16.4491 13.3662 16.5832 12.3455C16.6196 12.0448 16.5583 11.7403 16.4082 11.4772C16.2582 11.2141 16.0274 11.0062 15.75 10.8844ZM12.375 14.3438C10.0635 14.341 7.84748 13.4215 6.213 11.7871C4.57852 10.1526 3.65905 7.93656 3.65626 5.62506C3.65464 5.04251 3.85241 4.47696 4.2167 4.02237C4.58099 3.56777 5.08986 3.25152 5.65876 3.12615L6.98204 6.07928L5.63485 7.68381C5.61307 7.70976 5.59288 7.73699 5.57438 7.76537C5.44159 7.96826 5.36353 8.20204 5.34776 8.444C5.33199 8.68597 5.37905 8.9279 5.48438 9.14631C6.14672 10.5019 7.51149 11.8576 8.88118 12.5213C9.10104 12.6255 9.34419 12.6709 9.58686 12.6531C9.82953 12.6352 10.0634 12.5547 10.2656 12.4194C10.2928 12.401 10.3189 12.3811 10.3437 12.3596L11.9208 11.0187L14.8739 12.3413C14.7485 12.9102 14.4323 13.4191 13.9777 13.7834C13.5231 14.1476 12.9575 14.3454 12.375 14.3438Z" fill="white" />
                </svg>
            )
        case "address-icon":
            return (
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.50004 9.10421C8.97513 9.10421 8.47172 8.89569 8.10056 8.52452C7.72939 8.15336 7.52087 7.64995 7.52087 7.12504C7.52087 6.60013 7.72939 6.09672 8.10056 5.72556C8.47172 5.35439 8.97513 5.14587 9.50004 5.14587C10.0249 5.14587 10.5284 5.35439 10.8995 5.72556C11.2707 6.09672 11.4792 6.60013 11.4792 7.12504C11.4792 7.38495 11.428 7.64231 11.3286 7.88243C11.2291 8.12256 11.0833 8.34074 10.8995 8.52452C10.7157 8.7083 10.4976 8.85409 10.2574 8.95355C10.0173 9.05301 9.75995 9.10421 9.50004 9.10421ZM9.50004 1.58337C8.0303 1.58337 6.62075 2.16723 5.58149 3.20649C4.54223 4.24575 3.95837 5.6553 3.95837 7.12504C3.95837 11.2813 9.50004 17.4167 9.50004 17.4167C9.50004 17.4167 15.0417 11.2813 15.0417 7.12504C15.0417 5.6553 14.4579 4.24575 13.4186 3.20649C12.3793 2.16723 10.9698 1.58337 9.50004 1.58337Z" fill="white" />
                </svg>
            )
        case "advantages-icon":
            return (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.667 11.774C29.659 11.751 29.646 11.737 29.637 11.716C29.617 11.665 29.598 11.615 29.579 11.564C29.346 10.821 29.325 10.085 29.519 9.50302L29.533 9.46302C29.661 9.08802 29.691 8.63702 29.609 8.15902V8.15701C29.597 8.09601 29.585 8.03402 29.572 7.97302L29.566 7.95202C29.554 7.89702 29.539 7.84202 29.523 7.78602L29.511 7.74502C29.497 7.69802 29.48 7.64802 29.463 7.60102L29.441 7.53902L29.396 7.42402L29.359 7.33302L29.325 7.25702C29.304 7.21402 29.286 7.17302 29.265 7.13102L29.253 7.11202C29.157 6.92402 29.046 6.73902 28.914 6.56202L28.893 6.52902L28.88 6.51202C28.526 6.03202 28.104 5.65902 27.665 5.41402C27.227 5.16702 26.777 5.05001 26.361 5.05402H26.359C26.349 5.05402 26.34 5.05402 26.332 5.05202C26.314 5.05402 26.298 5.05502 26.279 5.05302H26.273C25.76 5.06702 25.182 4.90001 24.63 4.58202L24.627 4.58602C24.535 4.53102 24.443 4.47102 24.354 4.40702C23.727 3.94402 23.283 3.35702 23.098 2.77302L23.084 2.73102C22.968 2.35302 22.73 1.97102 22.383 1.63202L22.381 1.63102C22.336 1.58602 22.29 1.54302 22.242 1.50302L22.228 1.48902C22.183 1.45202 22.14 1.41602 22.093 1.38102L22.06 1.35402L21.939 1.26602L21.883 1.22802L21.779 1.16002L21.697 1.11002L21.623 1.06802C21.582 1.04402 21.541 1.02302 21.499 1.00202L21.478 0.991015C21.291 0.897015 21.092 0.812015 20.881 0.744015L20.845 0.731015L20.824 0.724015C20.255 0.545015 19.691 0.493015 19.195 0.551015C18.695 0.611015 18.261 0.778015 17.927 1.02702L17.925 1.02902C17.919 1.03502 17.909 1.04002 17.903 1.04502C17.891 1.05802 17.876 1.06602 17.86 1.07602L17.854 1.07902C17.447 1.39402 16.879 1.59902 16.25 1.66502V1.67102C16.169 1.68102 16.084 1.68202 16 1.68302C15.916 1.68202 15.832 1.68102 15.75 1.67202V1.66602C15.118 1.59902 14.552 1.39502 14.144 1.08002L14.14 1.07602C14.124 1.06602 14.11 1.05702 14.097 1.04502C14.09 1.04102 14.081 1.03502 14.076 1.02902H14.075L14.073 1.02702C13.74 0.778015 13.306 0.611015 12.806 0.551015C12.31 0.493015 11.746 0.545015 11.177 0.724015L11.156 0.731015L11.119 0.744015C10.908 0.811015 10.709 0.896015 10.522 0.991015L10.502 1.00202C10.46 1.02302 10.419 1.04402 10.379 1.06802L10.304 1.11002L10.222 1.16002L10.117 1.22802L10.063 1.26602L9.94 1.35402L9.906 1.38102C9.86 1.41602 9.817 1.45202 9.772 1.48902L9.757 1.50402C9.709 1.54402 9.663 1.58702 9.618 1.63202L9.616 1.63302C9.271 1.97202 9.031 2.35402 8.915 2.73202L8.901 2.77402C8.718 3.35802 8.272 3.94402 7.645 4.40802C7.555 4.47202 7.463 4.53202 7.372 4.58702L7.369 4.58202C6.819 4.90001 6.239 5.06602 5.725 5.05302H5.72C5.702 5.05402 5.685 5.05302 5.668 5.05202C5.659 5.05302 5.649 5.05302 5.641 5.05302H5.638C5.223 5.05002 4.773 5.16702 4.335 5.41302C3.897 5.65902 3.474 6.03102 3.12 6.51202L3.106 6.52902L3.084 6.56202C2.952 6.73902 2.841 6.92402 2.745 7.11202L2.735 7.13102C2.714 7.17302 2.694 7.21402 2.675 7.25702L2.64 7.33302L2.603 7.42402L2.558 7.53902L2.535 7.60102C2.519 7.64901 2.502 7.69802 2.488 7.74502L2.477 7.78602C2.461 7.84202 2.447 7.89702 2.433 7.95202L2.429 7.97302C2.414 8.03502 2.401 8.09701 2.392 8.15701V8.15902H2.39C2.308 8.63802 2.339 9.08801 2.466 9.46402L2.481 9.50401C2.675 10.086 2.656 10.821 2.421 11.565C2.403 11.617 2.383 11.667 2.363 11.717C2.353 11.738 2.341 11.751 2.333 11.775C1.962 12.833 0 13.492 0 15.928C0 18.253 1.521 18.896 2.05 19.64C2.191 19.878 2.31 20.141 2.404 20.423C2.439 20.529 2.467 20.634 2.49 20.738L2.484 20.741C2.617 21.362 2.595 21.963 2.424 22.45L2.423 22.455C2.419 22.472 2.413 22.488 2.406 22.503C2.403 22.512 2.401 22.522 2.397 22.529L2.396 22.532C2.264 22.927 2.24 23.39 2.338 23.883C2.437 24.376 2.66 24.895 3.008 25.378L3.023 25.398L3.044 25.429C3.174 25.607 3.316 25.772 3.464 25.919L3.481 25.935C3.513 25.967 3.547 26 3.582 26.032L3.645 26.089L3.718 26.152L3.814 26.231L3.867 26.272L3.99 26.361L4.025 26.382C4.074 26.415 4.121 26.445 4.17 26.478L4.188 26.489C4.244 26.522 4.297 26.551 4.353 26.582H4.356C4.785 26.807 5.221 26.917 5.618 26.911L5.661 26.909C6.274 26.904 6.968 27.148 7.602 27.6C8.233 28.072 8.68 28.666 8.858 29.257L8.86 29.262C8.867 29.28 8.872 29.296 8.874 29.313C8.878 29.322 8.883 29.331 8.885 29.337L8.886 29.34C9.011 29.736 9.265 30.125 9.635 30.465C10.005 30.804 10.491 31.092 11.059 31.278C11.269 31.345 11.48 31.395 11.687 31.427L11.708 31.432C11.755 31.439 11.801 31.445 11.847 31.45L11.932 31.46L12.03 31.468L12.154 31.477L12.22 31.478H12.37L12.413 31.477C12.471 31.473 12.528 31.471 12.584 31.465L12.605 31.464C12.669 31.458 12.732 31.449 12.794 31.443H12.796C13.276 31.371 13.692 31.202 14.011 30.964L14.044 30.94C14.532 30.578 15.231 30.367 16.002 30.358C16.773 30.367 17.473 30.578 17.96 30.94L17.993 30.964C18.31 31.201 18.726 31.37 19.208 31.443H19.21C19.273 31.451 19.335 31.46 19.398 31.464L19.419 31.465C19.477 31.471 19.533 31.473 19.591 31.477L19.634 31.478H19.784L19.849 31.477L19.974 31.468L20.072 31.46L20.157 31.45C20.204 31.445 20.249 31.439 20.296 31.432L20.317 31.427C20.524 31.395 20.735 31.345 20.946 31.278C21.512 31.091 22 30.803 22.369 30.465C22.739 30.125 22.994 29.736 23.119 29.34L23.121 29.337C23.122 29.329 23.127 29.32 23.131 29.313C23.133 29.296 23.138 29.28 23.146 29.262L23.148 29.257C23.326 28.666 23.773 28.07 24.404 27.6C25.039 27.148 25.732 26.904 26.344 26.909L26.388 26.911C26.784 26.917 27.22 26.807 27.65 26.582H27.652C27.709 26.552 27.761 26.522 27.818 26.489L27.836 26.478C27.885 26.447 27.934 26.416 27.981 26.382L28.016 26.361L28.139 26.272L28.192 26.231L28.289 26.152L28.362 26.089L28.425 26.032C28.459 26.001 28.493 25.969 28.528 25.935L28.544 25.919C28.692 25.772 28.834 25.607 28.964 25.429L28.985 25.398L29 25.378C29.349 24.895 29.571 24.376 29.67 23.883C29.771 23.393 29.744 22.927 29.612 22.532L29.61 22.529C29.606 22.52 29.606 22.51 29.602 22.503C29.595 22.488 29.588 22.472 29.585 22.455L29.583 22.45C29.412 21.963 29.391 21.362 29.523 20.741L29.517 20.738C29.539 20.634 29.568 20.529 29.603 20.423C29.697 20.141 29.816 19.878 29.957 19.64C30.484 18.896 32.007 18.252 32.007 15.928C32 13.492 30.038 12.833 29.667 11.774ZM27.426 19.394C27.298 19.829 27.147 20.253 26.968 20.673C26.366 22.097 25.504 23.375 24.406 24.476C23.308 25.573 22.029 26.436 20.605 27.037C19.146 27.654 17.595 27.97 16 27.975C14.402 27.969 12.854 27.655 11.394 27.037C9.971 26.436 8.692 25.573 7.594 24.476C6.939 23.819 6.378 23.091 5.896 22.315H9.27C9.374 22.321 9.474 22.324 9.572 22.324C9.806 22.324 10.041 22.31 10.267 22.296C10.466 22.284 10.658 22.275 10.833 22.275H10.914C11.081 22.31 11.249 22.329 11.423 22.347C11.579 22.364 11.739 22.38 11.909 22.411C12.098 22.449 12.294 22.634 12.484 22.812C12.594 22.916 12.702 23.015 12.808 23.092C12.916 23.167 13.022 23.244 13.129 23.323C13.459 23.562 13.801 23.811 14.188 23.984C14.666 24.19 15.193 24.256 15.705 24.323C15.953 24.355 16.2 24.385 16.436 24.434C16.589 24.451 16.721 24.464 16.856 24.481C17.256 24.526 17.67 24.574 18.085 24.574C18.366 24.574 18.611 24.552 18.84 24.507C19.657 24.276 20.177 23.612 20.177 22.852C20.593 22.688 20.964 22.339 21.198 21.897C21.407 21.5 21.478 21.075 21.402 20.699C22.191 20.182 22.597 19.216 22.38 18.386C22.729 18.148 22.968 17.745 23.051 17.257C23.167 16.58 22.958 15.861 22.522 15.426C21.94 14.873 21.137 14.738 20.43 14.622C20.319 14.602 20.208 14.583 20.1 14.564C20.022 14.543 19.918 14.52 19.817 14.496C18.873 14.276 18.206 14.062 18.204 13.289C18.202 12.78 18.37 12.31 18.546 11.81C18.749 11.238 18.96 10.645 18.927 9.95502C18.863 8.72602 18.341 7.65702 17.531 7.09302C17.209 6.83502 16.782 6.68202 16.378 6.68202C15.776 6.68202 15.326 7.00902 15.144 7.58002C15.015 7.96502 15.037 8.33902 15.058 8.73501C15.064 8.83202 15.07 8.93202 15.074 9.03602C15.097 9.58102 15.031 10.032 14.872 10.458C14.57 11.309 13.965 12.101 13.471 12.697L13.2 13.038C12.822 13.515 12.431 14.008 11.988 14.403C11.769 14.576 11.537 14.637 11.237 14.703C11.154 14.706 10.306 14.73 9.984 14.73C9.811 14.73 9.617 14.737 9.414 14.758L4.164 14.808C4.296 13.551 4.579 12.646 4.579 12.646C4.707 12.213 4.859 11.786 5.037 11.366C5.64 9.94302 6.5 8.66502 7.599 7.56602C8.697 6.46902 9.976 5.60602 11.399 5.00402C12.859 4.38702 14.408 4.07202 16.005 4.06602C17.602 4.07202 19.151 4.38602 20.611 5.00402C22.035 5.60602 23.312 6.46902 24.411 7.56602C25.509 8.66502 26.371 9.94302 26.973 11.366C27.151 11.786 27.303 12.214 27.432 12.646C27.432 12.646 27.912 14.171 27.912 16.02C27.907 17.48 27.568 18.872 27.426 19.394Z" fill="#333333" />
                </svg>

            )
        case "programm-icon":
            return (
                <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_18_416)">
                        <path d="M59.4547 5.30252H35.1131C35.3795 4.79484 35.569 4.24256 35.569 3.62613C35.569 1.62337 33.9706 0 31.9987 0C30.0267 0 28.4283 1.62337 28.4283 3.62613C28.4283 4.24256 28.6178 4.79213 28.8843 5.30252H4.551C2.73833 5.30252 1.26624 6.80317 1.26624 8.63861V45.4132C1.26624 47.2486 2.73833 48.752 4.5482 48.752H24.446L20.5818 62.5955C20.3126 63.555 20.8811 64.4922 21.8479 64.6708L23.3859 64.9692C24.3527 65.1505 25.3605 64.5146 25.627 63.5606L29.7632 48.7493H34.2398L38.3786 63.5578C38.6423 64.5146 39.6557 65.1505 40.6197 64.9664L42.1495 64.6679C43.1163 64.4893 43.6848 63.5522 43.4156 62.5926L39.5514 48.752H59.4547C61.2563 48.752 62.7338 47.2485 62.7338 45.4132V8.63861C62.7339 6.80601 61.2591 5.30252 59.4547 5.30252ZM56.4858 42.2472H7.5088V11.1183H56.4858V42.2472Z" fill="#333333" />
                        <path d="M13.2818 37.0229C14.6879 37.0229 15.8277 35.8653 15.8277 34.4372C15.8277 34.1778 15.7536 33.9434 15.6821 33.7091C18.9339 31.0453 24.6821 26.3481 27.2995 24.3007C27.7141 24.5963 28.192 24.8084 28.7359 24.8084C29.1864 24.8084 29.5873 24.6578 29.9553 24.4485C31.6388 25.9017 34.5006 28.3731 36.5357 30.1276C36.5082 30.2754 36.4479 30.4121 36.4479 30.5683C36.4479 31.9993 37.5903 33.1568 38.9966 33.1568C40.4082 33.1568 41.548 31.9993 41.548 30.5683C41.548 30.3145 41.4739 30.0857 41.4051 29.8542L47.9828 23.8266C48.3372 24.0134 48.7217 24.1474 49.1473 24.1474C50.5534 24.1474 51.6905 22.9898 51.6905 21.5617C51.6905 20.1363 50.5536 18.9787 49.1473 18.9787C47.7412 18.9787 46.6041 20.1363 46.6041 21.5617C46.6041 21.902 46.6755 22.2227 46.7935 22.5212C44.9561 24.206 42.1192 26.8056 40.3504 28.429C39.9521 28.1696 39.5045 27.9772 38.9965 27.9772C38.3978 27.9772 37.8704 28.2199 37.4365 28.5714C35.7558 27.1209 33.0395 24.7779 31.106 23.1098C31.2076 22.8309 31.2818 22.538 31.2818 22.2256C31.2818 20.7975 30.142 19.6426 28.7386 19.6426C27.3351 19.6426 26.1927 20.8002 26.1927 22.2283C26.1927 22.5435 26.2668 22.8363 26.3685 23.1125L14.6907 32.3396C14.2843 32.0551 13.8146 31.8515 13.2818 31.8515C11.8756 31.8515 10.7358 33.009 10.7358 34.4372C10.7358 35.8653 11.8756 37.0229 13.2818 37.0229Z" fill="#333333" />
                    </g>
                    <defs>
                        <clipPath id="clip0_18_416">
                            <rect width="64" height="65" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        case "expert-icon":
            return (
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_18_434)">
                        <path d="M17.3333 23.8334C20.2065 23.8334 22.962 22.692 24.9936 20.6603C27.0253 18.6287 28.1666 15.8732 28.1666 13C28.1666 10.1268 27.0253 7.37134 24.9936 5.3397C22.962 3.30805 20.2065 2.16669 17.3333 2.16669C14.4601 2.16669 11.7046 3.30805 9.67297 5.3397C7.64133 7.37134 6.49996 10.1268 6.49996 13C6.49996 15.8732 7.64133 18.6287 9.67297 20.6603C11.7046 22.692 14.4601 23.8334 17.3333 23.8334ZM17.3333 23.8334C21.6948 23.8334 25.506 25.48 28.2165 28.2165C29.8238 29.8456 31.0261 31.8293 31.7265 34.008M17.3333 23.8334C8.66663 23.8334 2.16663 30.3334 2.16663 39V49.8334H23.8333M26 40.7854L35.0783 47.6667L49.8333 28.1667" stroke="#333333" stroke-width="4" />
                    </g>
                    <defs>
                        <clipPath id="clip0_18_434">
                            <rect width="52" height="52" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        case "actual-icon":
            return (
                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.6421 5.91669L59.1667 22.4413V65.0834H11.8334V5.91669H42.6421ZM40.189 11.8334H17.75V59.1667H53.25V24.8944L40.189 11.8334ZM42.2835 30.4504L46.4666 34.6335L32.5417 48.5584L24.5335 40.5502L28.7166 36.3671L32.5417 40.1922L42.2835 30.4504Z" fill="#333333" />
                </svg>
            )
        case "certificate-icon":
            return (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.9397 12.9362H42.1646C43.1878 12.9362 44.0173 12.1067 44.0173 11.0835C44.0173 10.0603 43.1878 9.23077 42.1646 9.23077H8.9397C7.91651 9.23077 7.08698 10.0603 7.08698 11.0835C7.08698 12.1067 7.91651 12.9362 8.9397 12.9362Z" fill="#333333" />
                    <path d="M8.9397 20.8411H42.1646C43.1878 20.8411 44.0173 20.0115 44.0173 18.9883C44.0173 17.9652 43.1878 17.1356 42.1646 17.1356H8.9397C7.91651 17.1356 7.08698 17.9652 7.08698 18.9883C7.08698 20.0115 7.91651 20.8411 8.9397 20.8411Z" fill="#333333" />
                    <path d="M26.5666 25.0406H8.9397C7.91651 25.0406 7.08698 25.8701 7.08698 26.8933C7.08698 27.9165 7.91651 28.746 8.9397 28.746H26.5666C27.5898 28.746 28.4194 27.9165 28.4194 26.8933C28.4194 25.8701 27.5898 25.0406 26.5666 25.0406Z" fill="#333333" />
                    <path d="M55.8965 53.2088L51.0526 43.6181L52.9269 42.8701C53.4192 42.6736 53.8322 42.1054 53.8673 41.5765L54.0269 39.1717C54.0536 38.7688 54.2578 38.1403 54.4729 37.799L55.7569 35.7596C56.0394 35.3113 56.0394 34.6088 55.757 34.1603L54.4729 32.121C54.2581 31.7796 54.0538 31.1509 54.027 30.7483L53.8675 28.3434C53.8374 27.8907 53.5298 27.4098 53.1334 27.1574V4.86243C53.1334 2.81918 51.4712 1.15698 49.4281 1.15698H3.70532C1.66219 1.15698 0 2.81918 0 4.86243V36.6024C0 38.6457 1.66219 40.3078 3.70532 40.3078H32.8497L32.9338 41.5767C32.969 42.1055 33.3819 42.6736 33.8742 42.8701L35.6339 43.5724L30.7668 53.2088C30.6171 53.5054 30.6572 53.6841 30.7173 53.7818C30.7554 53.8438 30.8486 53.9474 31.045 53.9474C31.1432 53.9474 31.2563 53.9209 31.3813 53.8687L35.3682 52.1995C35.4662 52.1585 35.5829 52.1368 35.7055 52.1368C35.9983 52.1368 36.2968 52.2579 36.4658 52.4451L38.381 54.5685C38.5406 54.7455 38.7383 54.8431 38.9373 54.8431C39.1999 54.8431 39.4355 54.6733 39.5672 54.3893L43.3194 46.2952C43.3276 46.2951 43.3356 46.2951 43.3438 46.2949L47.0961 54.3893C47.2278 54.6734 47.4633 54.8431 47.7262 54.8431C47.925 54.8431 48.1227 54.7455 48.2823 54.5684L50.1974 52.4452C50.3665 52.2579 50.665 52.1368 50.9577 52.1368C51.0802 52.1368 51.1969 52.1585 51.295 52.1995L55.2819 53.8687C55.4068 53.9209 55.52 53.9474 55.6182 53.9474C55.8147 53.9474 55.9078 53.8436 55.9458 53.7818C56.0061 53.6841 56.0462 53.5054 55.8965 53.2088ZM3.70532 4.86243H49.4279L49.4281 25.1963L47.9797 23.4537C47.7153 23.1357 47.2311 22.922 46.7751 22.922C46.664 22.922 46.5578 22.9347 46.4591 22.9598L44.1215 23.5548C43.7491 23.6495 43.0518 23.6495 42.6793 23.5548L40.342 22.9598C40.2433 22.9347 40.1371 22.922 40.026 22.922C39.5699 22.922 39.0858 23.1357 38.8214 23.4537L37.2803 25.308C37.0226 25.6183 36.4881 26.0066 36.1135 26.1561L33.8744 27.05C33.3821 27.2465 32.969 27.8146 32.934 28.3434L32.7744 30.7483C32.7477 31.1511 32.5436 31.7796 32.3285 32.121L31.0445 34.1603C30.762 34.6087 30.762 35.3113 31.0445 35.7596L31.5751 36.6023H3.70532V4.86243ZM43.4004 42.8374C39.0499 42.8374 35.523 39.3107 35.523 34.96C35.523 30.6093 39.0499 27.0826 43.4004 27.0826C47.7511 27.0826 51.2781 30.6093 51.2781 34.96C51.2782 39.3107 47.7511 42.8374 43.4004 42.8374Z" fill="#333333" />
                </svg>
            )
        case "password-icon":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" /></svg>
            )
        case "user-icon":
            return (
                <svg fill="#000000" width="2em" height="2em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        <path d="M71.7,20H28.17c-4.58,0-8.3,3.56-8.16,7.81V72.19a7,7,0,0,0,.26,2.23A41.24,41.24,0,0,1,28,70.51c4.38-1.8,4.89-3.38,4.89-5.14S31.6,62,30.19,60.61a12.17,12.17,0,0,1-3.86-9c0-6.81,4.37-12.6,12-12.6s12,5.91,12,12.6a11.29,11.29,0,0,1-3.86,9c-1.41,1.29-2.7,3-2.7,4.76s.65,3.34,4.89,5.14c5.68,2.32,11,4.95,12.14,9.49h11A8.08,8.08,0,0,0,80,72.19V27.81A8.12,8.12,0,0,0,71.7,20ZM71,45.85a2,2,0,0,1-2,2H54a2,2,0,0,1-2-2v-3a2,2,0,0,1,2-2H69a2,2,0,0,1,2,2Zm5-13a2,2,0,0,1-2,2H54a2,2,0,0,1-2-2v-3a2,2,0,0,1,2-2H74a2,2,0,0,1,2,2Z" fill-rule="evenodd" />
                    </g>
                </svg>
            )
        case "position-icon":
            return (
                <svg fill="#000000" width="2em" height="2em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M56.3,34h9.1a1.16,1.16,0,0,0,1.2-1.2,1.09,1.09,0,0,0-.4-.9L55,20.6a1.27,1.27,0,0,0-.9-.4,1.16,1.16,0,0,0-1.2,1.2v9.1A3.6,3.6,0,0,0,56.3,34Z" /><path d="M63.9,55.2A12.3,12.3,0,1,0,76.2,67.5,12.29,12.29,0,0,0,63.9,55.2ZM66,68.6c-.4,0-.7-.1-1-.1l-4.7,4.6a1.22,1.22,0,0,1-1,.5,1.28,1.28,0,0,1-1-.4,1.66,1.66,0,0,1,0-2.1L63,66.4a2.79,2.79,0,0,1-.1-1,3.85,3.85,0,0,1,3.7-4.1c.4,0,.7.1,1,.1.1,0,.1.1.1.4l-2.1,2.1a.45.45,0,0,0,0,.5l1.5,1.5a.63.63,0,0,0,.6,0l2.1-2.1c.1-.1.4-.1.4.1a3.75,3.75,0,0,1,.1,1A4,4,0,0,1,66,68.6Z" /><path d="M51.6,56.6c4.3-5,11.3-5.3,12.3-5.3s2.7-.1,2.6-1.5,0-8.9,0-8.9a1.63,1.63,0,0,0-1.7-1.7h-12a5.12,5.12,0,0,1-5.1-5.1v-12A1.63,1.63,0,0,0,46,20.4H29a5.26,5.26,0,0,0-5.1,5.1V66.6A5.12,5.12,0,0,0,29,71.7H46.4s1.7-1,1.6-2.4S47.4,61.5,51.6,56.6ZM36,24.9a3.7,3.7,0,1,1-3.7,3.7A3.69,3.69,0,0,1,36,24.9ZM30.3,37.8A5.62,5.62,0,0,1,35.9,33h.2a5.62,5.62,0,0,1,5.6,4.8.9.9,0,0,1-1,.9H31.1C30.3,38.7,30.3,38.2,30.3,37.8Zm15,21.9a1.63,1.63,0,0,1-1.7,1.7H32.4a1.63,1.63,0,0,1-1.7-1.7V58a1.63,1.63,0,0,1,1.7-1.7H43.6A1.63,1.63,0,0,1,45.3,58ZM32.4,51.1a1.63,1.63,0,0,1-1.7-1.7V47.7A1.63,1.63,0,0,1,32.4,46H53a1.63,1.63,0,0,1,1.7,1.7v1.7A1.63,1.63,0,0,1,53,51.1Z" /></svg>
            )
        case "arrow-bottom-icon":
            return (
                <svg width="2em" height="2em" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3042 17.059L17.0589 22.6163L22.6162 16.8616" stroke="#4E8BB8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        case "exit-profile-icon":
            return (
                <svg width="2em" height="2em" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 2.83333H17.4167C17.9029 2.83333 18.3692 2.98259 18.713 3.24826C19.0568 3.51394 19.25 3.87427 19.25 4.25V4.95833M14.6667 14.1667H17.4167C17.9029 14.1667 18.3692 14.0174 18.713 13.7517C19.0568 13.4861 19.25 13.1257 19.25 12.75V12.0417M14.6676 8.5H19.2509M19.2509 8.5L17.4176 7.08333M19.2509 8.5L17.4176 9.91666M4.05625 13.7615L9.55625 15.0365C9.83004 15.1 10.1193 15.1132 10.4008 15.0749C10.6823 15.0367 10.9484 14.9481 11.1778 14.8162C11.4071 14.6843 11.5933 14.5129 11.7216 14.3155C11.8499 14.1181 11.9167 13.9002 11.9167 13.6793V3.32066C11.9167 3.09977 11.8499 2.88193 11.7216 2.68453C11.5933 2.48714 11.4071 2.31566 11.1778 2.1838C10.9484 2.05193 10.6823 1.96334 10.4008 1.92509C10.1193 1.88684 9.83004 1.89999 9.55625 1.9635L4.05625 3.2385C3.6786 3.32609 3.34756 3.50544 3.11226 3.74992C2.87695 3.9944 2.74991 4.29098 2.75 4.59566V12.4043C2.74991 12.709 2.87695 13.0056 3.11226 13.2501C3.34756 13.4946 3.6786 13.6739 4.05625 13.7615Z" stroke="#CC0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        case "profile-icon":
            return (
                <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0C6.79565 0 7.55871 0.31607 8.12132 0.87868C8.68393 1.44129 9 2.20435 9 3C9 3.79565 8.68393 4.55871 8.12132 5.12132C7.55871 5.68393 6.79565 6 6 6C5.20435 6 4.44129 5.68393 3.87868 5.12132C3.31607 4.55871 3 3.79565 3 3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.31607 5.20435 0 6 0ZM6 7.5C9.315 7.5 12 8.8425 12 10.5V12H0V10.5C0 8.8425 2.685 7.5 6 7.5Z" fill="#4E8BB8" />
                </svg>
            )
        default:
            return <p>Иконка не найдена</p>
    }
}