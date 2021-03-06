/* eslint-disable quotes */
export default {
  GetToken() {
    return `/login`
  },
  Login() {
    return `/api/customers/GetPassengerProfile`
  },
  Register() {
    return `/api/customers/CreatePassenger`
  },
  DepartureTerminals() {
    return `/api/terminals/terminalbycountrycode/NG`
  },
  ArrivalTerminals(departureTerminalId: any) {
    return `/api/routes/terminals/destinations/${departureTerminalId}`
  },
  BookingSearch() {
    return `/api/bookings/search`
  },
  PostSearch() {
    return `/api/bookings/postsearch`
  },
  HireSearch() {
    return `/api/hiredServiceBookings/hireservicebookingsearch`
  },
  HireServiceSearch() {
    return `/api/hiredServiceBookings/hireservicebookingsearchpost`
  },
  ConfirmPayStackPayment() {
    return `/api/bookings/ProcessPaystackPayment`
  },
  ConfirmFlutterPayment() {
    return `/api/bookings/ProcessFlutterWavePayment`
  },
  ConfirmHirePayStackPayment(refCode: any) {
    return `/api/hiredServiceBookings/processHireServicePaystackPayment/${refCode}`
  },
  ForgotPassword() {
    return `/api/customers/ForgotPasswordVerificationCode`
  },
  ResetPassword() {
    return `/api/customers/ForgotPassword`
  },
  verifyPhoneNumber() {
    return `/api/customers/VerifyCode`
  },
  UpdatePhoto(phoneNumber: any) {
    return `/api/customers/UpdatePassengerPhoto?phoneNumber=${phoneNumber}`
  },
  UpdatePassegerProfile() {
    return `/api/customers/UpdatePassenger`
  },
  DeletePhoto(customerId: any) {
    return `/api/customers/removeCustomerPhoto/${customerId}`
  },
  GetWalletToken() {
    return `/connect/token`
  },
  CreateWallet() {
    return `/api/WalletApi/CreateWallet`
  },
  GetWallet(phone: any, email: any) {
    return `/api/WalletApi/GetUserWallet?phone=${phone}&email=${email}`
  },
  GenerateOtp() {
    return `/api/v2/WalletApi/GenerateOtp`
  },
  CreatePin() {
    return `/api/v2/WalletApi/CreatePin`
  },
  CreatePayment() {
    return `/api/PaymentApi/CreatePayment`
  },
  VerifyPayStackRef(paystackreference: any) {
    return `/api/PaymentApi/VerifyPaystackRef/${paystackreference}`
  },
  DebitWallet() {
    return `/api/v2/WalletApi/DebitWallet`
  },
  BookingHistory(phoneNumber: any) {
    return `/api/bookings/history/${phoneNumber}`
  },
  ChangePassword() {
    return `/api/customers/ChangePassword`
  },

  ChangeWalletpin() {
    return `/api/v2/WalletApi/ChangePin`
  },
  ResetWalletpin() {
    return `/api/v2/WalletApi/ResetPin`
  },
  CustomerFeedback() {
    return `/api/CustomerFeedbacks`
  },
  BookingStatus(refCode: any) {
    return `/api/bookings/details/${refCode}`
  },
  SuggestRoute() {
    return `/api/routes/addnewsuggestedroute`
  },
  GetpopularRoute() {
    return `/api/routes/getpopularroutes?noOfDays=5&noOfRoutes=5`
  },
}
