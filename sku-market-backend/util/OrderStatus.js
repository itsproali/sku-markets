const OrderStatus = {
  REQUESTED: "REQUESTED", // By Buyer
  REVIEWED: "REVIEWED", // From Seller
  ACCEPTED: "ACCEPTED", // By Buyer
  REJECTED_FROM_SELLER_RFQ: "REJECTED_FROM_SELLER_RFQ",
  REJECTED_FROM_BUYER_RFQ: "REJECTED_FROM_BUYER_RFQ",
  REJECTED_FROM_BUYER_PAYMENT: "REJECTED_FROM_BUYER_PAYMENT",
  COMPLETED: "COMPLETED", // From Seller
};

const PaymentStatus = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  PAID: "PAID",
  CANCELLED: "CANCELLED",
};

module.exports = {
  OrderStatus,
  PaymentStatus,
};