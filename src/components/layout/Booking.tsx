import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Users,
  CreditCard,
  User,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  Check,
} from "lucide-react";
import { destinationsData } from "../../data/dataDummy";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = destinationsData.find((d) => d.id === Number(id));

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Travel Details
    date: "",
    guests: 2,
    specialRequests: "",

    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    zipCode: "",

    // Payment
    paymentMethod: "credit_card",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",

    // Terms
    agreeTerms: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tour Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = tour.price * bookingData.guests;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setBookingData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!bookingData.date) newErrors.date = "Please select a date";
      if (bookingData.guests < 1)
        newErrors.guests = "At least 1 guest required";
    }

    if (currentStep === 2) {
      if (!bookingData.firstName)
        newErrors.firstName = "First name is required";
      if (!bookingData.lastName) newErrors.lastName = "Last name is required";
      if (!bookingData.email) newErrors.email = "Email is required";
      if (!bookingData.phone) newErrors.phone = "Phone is required";
      if (!bookingData.country) newErrors.country = "Country is required";

      // Email validation
      if (bookingData.email && !/\S+@\S+\.\S+/.test(bookingData.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }

    if (currentStep === 3) {
      if (bookingData.paymentMethod === "credit_card") {
        if (!bookingData.cardNumber)
          newErrors.cardNumber = "Card number is required";
        if (!bookingData.cardName)
          newErrors.cardName = "Cardholder name is required";
        if (!bookingData.expiryDate)
          newErrors.expiryDate = "Expiry date is required";
        if (!bookingData.cvv) newErrors.cvv = "CVV is required";

        // Card number validation (simple)
        if (
          bookingData.cardNumber &&
          bookingData.cardNumber.replace(/\s/g, "").length < 16
        ) {
          newErrors.cardNumber = "Invalid card number";
        }
      }

      if (!bookingData.agreeTerms) {
        newErrors.agreeTerms = "You must agree to terms and conditions";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      // Process booking
      console.log("Booking submitted:", bookingData);
      navigate("/booking-confirmation");
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const steps = [
    { number: 1, title: "Travel Details", icon: Calendar },
    { number: 2, title: "Personal Info", icon: User },
    { number: 3, title: "Payment", icon: CreditCard },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Complete Your Booking
            </h1>
            <p className="text-gray-600">
              {tour.name} - {tour.location}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              {steps.map((s, index) => (
                <div key={s.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                        step >= s.number
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step > s.number ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <s.icon className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-sm font-medium mt-2 hidden md:block">
                      {s.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-24 h-1 mx-4 transition-all ${
                        step > s.number ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {/* Step 1: Travel Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Travel Details</h2>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.date ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.date && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Guests *
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            setBookingData((prev) => ({
                              ...prev,
                              guests: Math.max(1, prev.guests - 1),
                            }))
                          }
                          className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:bg-gray-50 text-xl font-semibold"
                        >
                          -
                        </button>
                        <div className="flex-1">
                          <input
                            type="number"
                            name="guests"
                            value={bookingData.guests}
                            onChange={handleInputChange}
                            min="1"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center text-xl font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setBookingData((prev) => ({
                              ...prev,
                              guests: prev.guests + 1,
                            }))
                          }
                          className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:bg-gray-50 text-xl font-semibold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Any dietary requirements, accessibility needs, or special requests..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">
                      Personal Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={bookingData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={bookingData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={bookingData.country}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.country ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select Country</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="USA">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Australia">Australia</option>
                      </select>
                      {errors.country && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.country}
                        </p>
                      )}
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address (Optional)
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={bookingData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* City */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City (Optional)
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={bookingData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Zip Code */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Zip Code (Optional)
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={bookingData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

                    {/* Payment Method */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Payment Method *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            setBookingData((prev) => ({
                              ...prev,
                              paymentMethod: "credit_card",
                            }))
                          }
                          className={`p-4 border-2 rounded-xl text-center transition-all ${
                            bookingData.paymentMethod === "credit_card"
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <CreditCard className="w-8 h-8 mx-auto mb-2" />
                          <span className="font-semibold">Credit Card</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setBookingData((prev) => ({
                              ...prev,
                              paymentMethod: "bank_transfer",
                            }))
                          }
                          className={`p-4 border-2 rounded-xl text-center transition-all ${
                            bookingData.paymentMethod === "bank_transfer"
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <MapPin className="w-8 h-8 mx-auto mb-2" />
                          <span className="font-semibold">Bank Transfer</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setBookingData((prev) => ({
                              ...prev,
                              paymentMethod: "paypal",
                            }))
                          }
                          className={`p-4 border-2 rounded-xl text-center transition-all ${
                            bookingData.paymentMethod === "paypal"
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <Mail className="w-8 h-8 mx-auto mb-2" />
                          <span className="font-semibold">PayPal</span>
                        </button>
                      </div>
                    </div>

                    {/* Credit Card Details */}
                    {bookingData.paymentMethod === "credit_card" && (
                      <div className="space-y-4 pt-4">
                        {/* Card Number */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={bookingData.cardNumber}
                            onChange={(e) => {
                              const formatted = formatCardNumber(
                                e.target.value,
                              );
                              setBookingData((prev) => ({
                                ...prev,
                                cardNumber: formatted,
                              }));
                            }}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                              errors.cardNumber
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          {errors.cardNumber && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.cardNumber}
                            </p>
                          )}
                        </div>

                        {/* Cardholder Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Cardholder Name *
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={bookingData.cardName}
                            onChange={handleInputChange}
                            placeholder="JOHN DOE"
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 uppercase ${
                              errors.cardName
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          {errors.cardName && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.cardName}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {/* Expiry Date */}
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={bookingData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              maxLength={5}
                              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.expiryDate
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                            />
                            {errors.expiryDate && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors.expiryDate}
                              </p>
                            )}
                          </div>

                          {/* CVV */}
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              value={bookingData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              maxLength={4}
                              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.cvv
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                            />
                            {errors.cvv && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors.cvv}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingData.paymentMethod === "bank_transfer" && (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Bank Transfer Details
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Please transfer the total amount to the following
                          account:
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bank Name:</span>
                            <span className="font-semibold">ABC Bank</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              Account Number:
                            </span>
                            <span className="font-semibold">1234567890</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Account Name:</span>
                            <span className="font-semibold">
                              TravelHub Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingData.paymentMethod === "paypal" && (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          PayPal Payment
                        </h3>
                        <p className="text-sm text-gray-600">
                          You will be redirected to PayPal to complete your
                          payment securely.
                        </p>
                      </div>
                    )}

                    {/* Terms & Conditions */}
                    <div className="pt-4 space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={bookingData.agreeTerms}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I agree to the{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Terms & Conditions
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </a>{" "}
                          *
                        </span>
                      </label>
                      {errors.agreeTerms && (
                        <p className="text-sm text-red-600">
                          {errors.agreeTerms}
                        </p>
                      )}

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={bookingData.newsletter}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Send me newsletters and special offers
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105"
                    >
                      Complete Booking
                    </button>
                  )}
                </div>
              </form>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-28">
                <h2 className="text-2xl font-bold mb-6">Your Booking</h2>

                {/* Tour Overview */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{tour.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {tour.location}
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>
                          {bookingData.guests} Guest
                          {bookingData.guests > 1 ? "s" : ""}
                        </span>
                      </div>
                      {bookingData.date && (
                        <div className="flex text-sm items-center gap-1 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(bookingData.date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 mb-6">
                  <h3 className="font-bold text-gray-900">Price Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        ${tour.price.toFixed(2)} × {bookingData.guests} guest
                        {bookingData.guests > 1 ? "s" : ""}
                      </span>
                      <span className="font-semibold">
                        ${(tour.price * bookingData.guests).toFixed(2)}
                      </span>
                    </div>

                    {/* Optional: Add taxes or fees if needed */}
                    {/* <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee</span>
                      <span className="font-semibold">$10.00</span>
                    </div> */}
                  </div>
                </div>

                {/* Total */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        ${totalPrice.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        All taxes included
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cancellation Policy */}
                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Free Cancellation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Cancel up to 24 hours before the tour for a full refund.
                        No questions asked.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Support */}
                <div className="mt-8 pt-6 border-t">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Need Help?
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Our support team is here to assist you
                    </p>
                    <button className="w-full px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
