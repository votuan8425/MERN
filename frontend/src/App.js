import "./App.css";
import Header from "./components/layout/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect } from "react";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Product/ProductDetail";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./components/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/Route/ProtecedRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import MyOrders from "./components/Order/MyOrders";
import OrderSuccess from "./components/Cart/OrderSuccess";
import OrderDetails from "./components/Order/OrderDetails";
import Dashboard from "./components/Admin/Dashboard";
import ProductList from "./components/Admin/ProductList";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";
import UsersList from "./components/Admin/UsersList";
import UpdateUser from "./components/Admin/UpdateUser";
import ProductReviews from "./components/Admin/ProductReviews";
import Contact from "./components/layout/Contact/Contact";
import About from "./components/layout/About/About";
import NotFound from "./components/layout/NotFound/NotFound";
import NewProduct from "./components/Admin/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:keyword" component={Products} />
      <ProtectedRoute exact path="/account" component={Profile} />
      <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
      <ProtectedRoute
        exact
        path="/password/update"
        component={UpdatePassword}
      />
      <Route exact path="/password/forgot" component={ForgotPassword} />
      <Route exact path="/password/reset/:token" component={ResetPassword} />

      <Route exact path="/search" component={Search} />
      <Route exact path="/login" component={LoginSignUp} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/contact" component={Contact} />

      <Route exact path="/about" component={About} />

      <ProtectedRoute exact path="/shipping" component={Shipping} />
      <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
      <ProtectedRoute exact path="/process/payment" component={Payment} />
      <ProtectedRoute exact path="/orders" component={MyOrders} />
      <ProtectedRoute exact path="/success" component={OrderSuccess} />
      <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/dashboard"
        component={Dashboard}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/products"
        component={ProductList}
      />

      <ProtectedRoute
        exact
        path="/admin/orders"
        isAdmin={true}
        component={OrderList}
      />

      <ProtectedRoute
        exact
        path="/admin/order/:id"
        isAdmin={true}
        component={ProcessOrder}
      />
      <ProtectedRoute
        exact
        path="/admin/users"
        isAdmin={true}
        component={UsersList}
      />

      <ProtectedRoute
        exact
        path="/admin/user/:id"
        isAdmin={true}
        component={UpdateUser}
      />

      <ProtectedRoute
        exact
        path="/admin/reviews"
        isAdmin={true}
        component={ProductReviews}
      />
      <ProtectedRoute
        exact
        path="/admin/product"
        isAdmin={true}
        component={NewProduct}
      />
      <ProtectedRoute
        exact
        path="/admin/product/:id"
        isAdmin={true}
        component={UpdateProduct}
      />
      <Route path="/404" component={NotFound} />
      <Footer />
    </Router>
  );
}

export default App;
