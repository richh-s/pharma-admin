
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Advertisment from "layouts/Adverisement"
import Profile from "layouts/profile";
import Doctors from "layouts/Doctors";
import SignUpPharmacy from "layouts/authentication/sign-up-pharmacy";
import SignUpDeliveryPerson from "layouts/authentication/sign-up-delivery-worker";
import SignIn from "layouts/authentication/sign-in"
import VerifyAccount from "layouts/authentication/verify-account";
import NewDoctorProfile from "layouts/Doctors/new-doctor-profile";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders and appointments",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/orders-and-appointments",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Manage Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Medcines",
    key: "advertisment",
    icon: <Icon fontSize="small">ad_units</Icon>,
    route: "/advertisment",
    component: <Advertisment />,
  },

  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },

  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  // {
  //   type: "collapse",
  //   name: "Manage Pharmacies",
  //   key: "sign-up-pharmacy",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up-pharmacy",
  //   component: <SignUpPharmacy />,
  // },
  // {
  //   type: "collapse",
  //   name: "Delivery Workers",
  //   key: "sign-up-delivery-person",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up-delivery-person",
  //   component: <SignUpDeliveryPerson/>,
  // },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    name: "details",
    key: "details",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/details/:id",
    component: <NewDoctorProfile />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-in",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    name: "Sign In",
    key: "verify-account",
    route: "/authentication/verify-account",
    component: <VerifyAccount />,
  },
];

export default routes;
