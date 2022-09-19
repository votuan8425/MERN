import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import "./Payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../../actions/orderAction";
const Payment = ({ history }) => {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const dispatch = useDispatch();
    const alert = useAlert();
    const payBtn = useRef(null);
    const { error } = useSelector((state) => state.newOrder);
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);

    const order = {
        shippingInfo,
        orderItems: cartItems,
        itemsPrice: orderInfo.subtotal,
        taxPrice: orderInfo.tax,
        shippingPrice: orderInfo.shippingCharges,
        totalPrice: orderInfo.totalPrice,
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        payBtn.current.disabled = true;
        order.paymentInfo = {
            id: Math.floor(Math.random() * 0.5),
            status: "succeeded",
          };

        dispatch(createOrder(order));

        history.push("/success");
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, alert]);

    return (
        <Fragment>
            <MetaData title="Payment" />
            <CheckoutSteps activeStep={2} />
            <div className="paymentContainer">
                <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
                    <Typography>Card Info</Typography>
                    <div>
                        <CreditCardIcon />
                        <input type="number" className="paymentInput" />
                    </div>
                    <div>
                        <EventIcon />
                        <input type="number" className="paymentInput" />
                    </div>
                    <div>
                        <VpnKeyIcon />
                        <input type="number" className="paymentInput" />
                    </div>

                    <input
                        type="submit"
                        value={`Pay - $${orderInfo && orderInfo.totalPrice}`}
                        ref={payBtn}
                        className="paymentFormBtn"
                    />
                </form>
            </div>
        </Fragment>
    );
};

export default Payment;