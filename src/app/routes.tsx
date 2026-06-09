import { createBrowserRouter } from "react-router";
import { ProductComparison } from "./pages/ProductComparison";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Customization } from "./pages/Customization";
import { OrderDefault } from "./pages/OrderDefault";
import { Checkout } from "./pages/Checkout";
import { OrderConfirmation } from "./pages/OrderConfirmation";
import { Contact } from "./pages/Contact";
import { ShippingReturns } from "./pages/ShippingReturns";
import { Warranty } from "./pages/Warranty";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { FAQ } from "./pages/FAQ";
import { Blog } from "./pages/Blog";
import { ModeSelection } from "./pages/ModeSelection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ProductComparison,
  },
  {
    path: "/order-default",
    Component: OrderDefault,
  },
  {
    path: "/customize",
    Component: Customization,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/order-confirmation",
    Component: OrderConfirmation,
  },
  {
    path: "/mode-selection",
    Component: ModeSelection,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/shipping-returns",
    Component: ShippingReturns,
  },
  {
    path: "/warranty",
    Component: Warranty,
  },
  {
    path: "/privacy-policy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms-of-service",
    Component: TermsOfService,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
  {
    path: "/blog",
    Component: Blog,
  },
]);
