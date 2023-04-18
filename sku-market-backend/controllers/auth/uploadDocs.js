const fs = require("fs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.model");
const AppError = require("../../util/appError");
const { sendEmail } = require("../../lib/nodemailer");
const BillingInfo = require("../../models/billingInfo.model");
const Subscription = require("../../models/subscription.model");
const catchAsyncErrors = require("../../lib/catchAsyncErrors");
const verifyEmailHTML = require("../../util/template/verifyEmailHTML");
const activationEmailHTML = require("../../util/template/activationEmailHTML");
const { bucket, bucketName, bucketUpload } = require("../../lib/googleBucket");
const resetPasswordEmailHTML = require("../../util/template/resetPasswordEmailHTML");

// Upload Docs
const uploadDocs = catchAsyncErrors(async (req, res, next) => {
    const field = req.params.field;
    const fileName = req.file.filename;
    const filePath = `./upload/docs/${fileName}`;

    const user = await User.findById(req.user._id);

    // Uploads a local file to the bucket
    const { url } = await bucketUpload(filePath, `docs/${fileName}`);

    // Deleting local file
    await fs.unlinkSync(filePath);

    // Update to the database
    user.docs[field].url = url;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "Document Submitted successfully",
        data: url,
    });
});

module.exports = uploadDocs;
