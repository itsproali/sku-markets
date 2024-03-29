const mongoose = require("mongoose");

const billingInfoSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserId is required"],
    },

    defaultAddress: {
      type: mongoose.Schema.Types.Mixed,
    },

    addresses: [
      {
        title: { type: String, required: [true, "Title is Required"] },

        email: {
          type: String,
          required: [true, "Email is required"],
          match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please add a valid email",
          ],
        },

        isApproved: {
          type: Boolean,
          default: false
        },

        phone: { type: String, required: [true, "Phone is Required"] },

        address: { type: String, required: [true, "Address is Required"] },

        city: { type: String, required: [true, "City is Required"] },

        state: { type: String, required: [true, "State is Required"] },

        country: { type: String, required: [true, "Country is Required"] },

        zipCode: { type: Number, required: [true, "ZipCode is Required"] },

        location: { lat: String, lng: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BillingInfo", billingInfoSchema);
