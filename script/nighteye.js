// https://billing.nighteye.app/exc/InstanceContro
var obj = JSON.parse($response.body);

obj = {
  status: true,
  data: {
    accountEmail: "",
    paymentPlan: 1,
    id: "VSdUY-QPvJGk03_amc6qQw",
    isProVersion: "t",
    paymentType: -2147483647,
    isExtendedProCreatedAccount: "f",
    isExtendedProFillSurvey: "f",
    isExtendedProWriteReview: "f",
    isExtendedProSharePost: "f",
    expiredDate: "28 Aug 2099",
    isActive: true,
  },
};

$done({ body: JSON.stringify(obj) });
