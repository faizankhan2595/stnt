import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { ClaimDocManage, Claim_management, Dashboard, Travel, TravelAgency, User_management, VirtualCard } from "./icons";

const dashBoardNavTree = [
  {
    key: "d",
    // path: `${APP_PREFIX_PATH}/dashboard`,
    path: "",
    title: " ",
    icon: "",
    breadcrumb: false,
    submenu: [
      {
        key: "dashboard",
        // path: `${APP_PREFIX_PATH}/dashboard`,
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: "dashboard",
        icon: Dashboard,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "membership",
        path: `${APP_PREFIX_PATH}/`,
        title: "Traveler",
        icon: Travel,
        breadcrumb: true,
        submenu: [
          {
            key: "members",
            path: `${APP_PREFIX_PATH}/traveler/manifest_import`,
            title: "Manifest Import",
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "membership_request",
            path: `${APP_PREFIX_PATH}/traveler/travelers_list`,
            title: "Travelers List",
            // icon: DashboardOutlined,
            breadcrumb: true,
            submenu: [],
          },
          // {
          //   key: 'payments',
          //   path: `${APP_PREFIX_PATH}/membership/payments`,
          //   title: 'payments',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
          // {
          //   key: 'membership_plans',
          //   path: `${APP_PREFIX_PATH}/membership/membership_plans`,
          //   title: 'membership_plans',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
        ],
      },
      {
        key: "Travel_Agency",
        // path: `${APP_PREFIX_PATH}/dashboard`,
        path: `${APP_PREFIX_PATH}/travel_agency`,
        title: "Travel Agency",
        icon: TravelAgency,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "event_management",
        path: `${APP_PREFIX_PATH}/events/event_booking`,
        title: "Claim Management",
        icon: Claim_management,
        breadcrumb: true,
        submenu: [
          {
            key: "event_booking",
            path: `${APP_PREFIX_PATH}/claim_management/claim_request`,
            title: "Claim Request",
            // icon: DashboardOutlined,
            // breadcrumb: true,
            submenu: [],
          },
          // {
          //   key: 'event_list',
          //   path: `${APP_PREFIX_PATH}/events/event_list`,
          //   title: 'event_list',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
        ],
      },
      {
        key: "User_Management",
        // path: `${APP_PREFIX_PATH}/dashboard`,
        path: `${APP_PREFIX_PATH}/user_management`,
        title: "User Management",
        icon: User_management,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "Claim_Document_Manager",
        // path: `${APP_PREFIX_PATH}/dashboard`,
        path: `${APP_PREFIX_PATH}/claim_document_manager`,
        title: "Claim Document Manager",
        icon: ClaimDocManage,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "Virtual_Card_Management",
        // path: `${APP_PREFIX_PATH}/dashboard`,
        path: `${APP_PREFIX_PATH}/virtual_card_management`,
        title: "Virtual Card Management",
        icon: VirtualCard,
        breadcrumb: false,
        submenu: [],
      },
      // {
      //   key: 'facility_management',
      //     path: `${APP_PREFIX_PATH}/facilities/facility_booking`,
      //     title: 'facility_management',
      //     icon: DashboardOutlined,
      //     breadcrumb: true,
      //     submenu: [
      //       {
      //         key: 'facility_booking',
      //         path: `${APP_PREFIX_PATH}/facilities/facility_booking`,
      //         title: 'facility_booking',
      //         // icon: DashboardOutlined,
      //         breadcrumb: true,
      //         submenu: []
      //       },
      //       {
      //         key: 'facility_list',
      //         path: `${APP_PREFIX_PATH}/facilities/facility_list`,
      //         title: 'facility_list',
      //         // icon: DashboardOutlined,
      //         breadcrumb: true,
      //         submenu: []
      //       },
      //     ]
      // },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
