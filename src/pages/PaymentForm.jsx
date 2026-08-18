import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

import supabase from "@/lib/supabase";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

/* =========================================================
   STRIPE PAYMENT LINK
========================================================= */

const STRIPE_PAYMENT_LINK =
  "https://buy.stripe.com/6oU6oHdpJgDq8Ed60yfMA01";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  "Web Design",
  "Logo Design",
  "Brand Design",
  "Comic Art",
  "UI UX Design",
  "Ebook Cover Design",
  "eBook Publishing",
  "Other Design Project",
];

/* =========================================================
   SCREENSHOT SETTINGS
========================================================= */

const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

/* =========================================================
   PAYMENT FORM
========================================================= */

const PaymentForm = () => {
  const navigate = useNavigate();

  /* =======================================================
     FORM STATE
  ======================================================= */

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    amount: "",
    smsConsent: false,
  });

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    amount: "",
  });

  /* =======================================================
     VALIDATION FUNCTIONS
  ======================================================= */

  const validateName = (name) => {
    const value = name.trim();

    if (!value) {
      return "Client full name is required.";
    }

    if (value.length < 2) {
      return "Please enter a valid client name.";
    }

    return "";
  };

  const validateEmail = (email) => {
    const value = email.trim();

    if (!value) {
      return "Client email is required.";
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(value)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const validateContact = (contact) => {
    const value = contact.trim();

    if (!value) {
      return "Contact number is required.";
    }

    const allowedCharacters = /^[0-9+\-()\s]+$/;

    if (!allowedCharacters.test(value)) {
      return "Please enter a valid contact number.";
    }

    const digits = value.replace(/\D/g, "");

    if (digits.length < 7) {
      return "Contact number must contain at least 7 digits.";
    }

    if (digits.length > 15) {
      return "Contact number cannot contain more than 15 digits.";
    }

    return "";
  };

  const validateService = (service) => {
    if (!service) {
      return "Please select a service.";
    }

    return "";
  };

  const validateAmount = (amount) => {
    if (!amount) {
      return "Payment amount is required.";
    }

    const numericAmount = Number(amount);

    if (
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      return "Please enter a valid payment amount.";
    }

    return "";
  };

  /* =======================================================
     NORMAL INPUT CHANGE
  ======================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }

    if (name === "name") {
      setFieldErrors((prev) => ({
        ...prev,
        name: value ? validateName(value) : "",
      }));
    }

    if (name === "email") {
      setFieldErrors((prev) => ({
        ...prev,
        email: value ? validateEmail(value) : "",
      }));
    }

    if (name === "service") {
      setFieldErrors((prev) => ({
        ...prev,
        service: validateService(value),
      }));
    }

    if (name === "amount") {
      setFieldErrors((prev) => ({
        ...prev,
        amount: value ? validateAmount(value) : "",
      }));
    }
  };

  /* =======================================================
     CONTACT NUMBER CHANGE
  ======================================================= */

  const handleContactChange = (e) => {
    /*
      Only allow:
      Numbers
      +
      -
      Spaces
      Parentheses
    */

    const cleanedValue = e.target.value.replace(
      /[^0-9+\-()\s]/g,
      ""
    );

    setForm((prev) => ({
      ...prev,
      contact: cleanedValue,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      contact: cleanedValue
        ? validateContact(cleanedValue)
        : "",
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  /* =======================================================
     SCREENSHOT VALIDATION
  ======================================================= */

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    setErrorMessage("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
      setFile(null);

      e.target.value = "";

      setErrorMessage(
        "Please upload your payment screenshot in JPG, PNG, or WEBP format."
      );

      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setFile(null);

      e.target.value = "";

      setErrorMessage(
        "Payment screenshot must be smaller than 5 MB."
      );

      return;
    }

    setFile(selectedFile);
  };

  /* =======================================================
     UPLOAD SCREENSHOT
  ======================================================= */

  const uploadScreenshot = async () => {
    if (!file) {
      throw new Error(
        "Payment screenshot is required before submission."
      );
    }

    const extension =
      file.name.split(".").pop()?.toLowerCase() || "jpg";

    const uniqueId =
      typeof crypto !== "undefined" &&
      crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()
            .toString(36)
            .slice(2)}`;

    const filePath = `payments/${Date.now()}-${uniqueId}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("payment-screenshots")
      .upload(filePath, file, {
        cacheControl: "3600",
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from("payment-screenshots")
      .getPublicUrl(filePath);

    if (!data?.publicUrl) {
      throw new Error(
        "Unable to generate payment screenshot URL."
      );
    }

    return data.publicUrl;
  };

  /* =======================================================
     EMAIL NOTIFICATION
  ======================================================= */

  const sendPaymentNotification = async (
    screenshotUrl
  ) => {
    try {
      const response = await fetch(
        "https://wdaaadhohvixycyrnlax.supabase.co/functions/v1/send-payment-email",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            apikey:
              import.meta.env.VITE_SUPABASE_ANON_KEY,

            Authorization: `Bearer ${
              import.meta.env.VITE_SUPABASE_ANON_KEY
            }`,
          },

          body: JSON.stringify({
            name: form.name.trim(),

            email: form.email
              .trim()
              .toLowerCase(),

            contact: form.contact.trim(),

            service: form.service,

            total_payment: Number(form.amount),

            payment_method: "Stripe Payment Link",

            screenshot_url: screenshotUrl,

            sms_consent: form.smsConsent,

            sms_consent_timestamp: form.smsConsent
              ? new Date().toISOString()
              : null,

            consent_source: "/payment-form",
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        console.error(
          "Payment email notification failed:",
          errorText
        );
      }
    } catch (error) {
      console.error(
        "Payment email notification error:",
        error
      );
    }
  };

  /* =======================================================
     FORM SUBMISSION
  ======================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    /* -----------------------------------------------------
       FINAL FIELD VALIDATION
    ----------------------------------------------------- */

    const nameError = validateName(form.name);

    const emailError = validateEmail(form.email);

    const contactError = validateContact(
      form.contact
    );

    const serviceError = validateService(
      form.service
    );

    const amountError = validateAmount(
      form.amount
    );

    setFieldErrors({
      name: nameError,
      email: emailError,
      contact: contactError,
      service: serviceError,
      amount: amountError,
    });

    if (
      nameError ||
      emailError ||
      contactError ||
      serviceError ||
      amountError
    ) {
      setErrorMessage(
        "Please correct the highlighted fields before submitting your payment confirmation."
      );

      return;
    }

    /* -----------------------------------------------------
       SCREENSHOT REQUIRED
    ----------------------------------------------------- */

    if (!file) {
      setErrorMessage(
        "Payment screenshot is required. Please upload your payment screenshot before submitting."
      );

      return;
    }

    const numericAmount = Number(form.amount);

    setLoading(true);

    try {
      /* ---------------------------------------------------
         UPLOAD SCREENSHOT
      --------------------------------------------------- */

      const screenshotUrl =
        await uploadScreenshot();

      /* ---------------------------------------------------
         PAYMENT RECORD
      --------------------------------------------------- */

      const paymentRecord = {
        name: form.name.trim(),

        email: form.email
          .trim()
          .toLowerCase(),

        contact: form.contact.trim(),

        service: form.service,

        total_payment: numericAmount,

        payment_method: "Stripe Payment Link",

        screenshot_url: screenshotUrl,

        sms_consent: form.smsConsent,

        sms_consent_timestamp: form.smsConsent
          ? new Date().toISOString()
          : null,

        consent_source: "/payment-form",
      };

      const consentFields = [
        "sms_consent",
        "sms_consent_timestamp",
        "consent_source",
      ];

      /* ---------------------------------------------------
         SAVE TO SUPABASE
      --------------------------------------------------- */

      const { error: insertError } =
        await supabase
          .from("payment_forms")
          .insert([paymentRecord]);

      if (insertError) {
        // The payment_forms table may not have the SMS consent columns
        // yet   retry without them so a real, already-paid submission
        // is never blocked by a missing column.
        if (/sms_consent|consent_source/i.test(insertError.message || "")) {
          const fallbackRecord = { ...paymentRecord };
          consentFields.forEach((field) => delete fallbackRecord[field]);

          const { error: fallbackError } = await supabase
            .from("payment_forms")
            .insert([fallbackRecord]);

          if (fallbackError) {
            throw fallbackError;
          }
        } else {
          throw insertError;
        }
      }

      /* ---------------------------------------------------
         EMAIL NOTIFICATION
      --------------------------------------------------- */

      await sendPaymentNotification(
        screenshotUrl
      );

      /* ---------------------------------------------------
         SUCCESS PAGE
      --------------------------------------------------- */

      navigate("/payment-successful");
    } catch (error) {
      console.error(
        "Payment Confirmation Error:",
        error
      );

      setErrorMessage(
        error?.message ||
          "Something went wrong while submitting your payment confirmation. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     INPUT CLASSES
  ======================================================= */

  const normalInputClass =
    "w-full rounded-xl border border-white/10 bg-[#020817]/60 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#1BBCEF]/70 focus:ring-4 focus:ring-[#1BBCEF]/10";

  const getInputClass = (hasError) =>
    `w-full rounded-xl border bg-[#020817]/60 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 ${
      hasError
        ? "border-red-400/70 focus:border-red-400 focus:ring-4 focus:ring-red-400/10"
        : "border-white/10 focus:border-[#1BBCEF]/70 focus:ring-4 focus:ring-[#1BBCEF]/10"
    }`;

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <>
      {/* ===================================================
          PAGE METADATA
      =================================================== */}

      <Helmet>
        <title>
          Secure Payment Confirmation | Optivax Global
        </title>

        <meta
          name="description"
          content="Complete your Optivax Global payment securely through Stripe and submit your payment confirmation."
        />
      </Helmet>

      {/* ===================================================
          PAGE WRAPPER
      =================================================== */}

      <main className="relative min-h-screen overflow-hidden bg-[#020817] px-4 py-24 text-white sm:px-6">

        {/* =================================================
            ANIMATED WEBSITE BACKGROUND
        ================================================= */}

        <AnimatedHeroBackground />

        {/* =================================================
            DARK OVERLAY
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#020817]/70" />

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div className="pointer-events-none absolute left-[-180px] top-[-180px] z-[1] h-[450px] w-[450px] rounded-full bg-[#1BBCEF]/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] z-[1] h-[450px] w-[450px] rounded-full bg-[#004495]/20 blur-[130px]" />

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10 mx-auto w-full max-w-3xl">

          {/* ===============================================
              PAGE HEADING
          =============================================== */}

          <div className="mb-9 text-center">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1BBCEF]/25 bg-[#1BBCEF]/10 backdrop-blur-md">

              <ShieldCheck className="h-7 w-7 text-[#1BBCEF]" />

            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1BBCEF]">
              Secure Payment
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Payment Confirmation
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Enter your details, complete your payment
              securely through Stripe, and upload your
              payment screenshot for verification.
            </p>

          </div>

          {/* ===============================================
              PAYMENT FORM
          =============================================== */}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="overflow-hidden rounded-[28px] border border-white/10 bg-[#06111f]/85 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >

            {/* TOP LINE */}

            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#1BBCEF] to-transparent opacity-70" />

            <div className="space-y-7 p-5 sm:p-8 md:p-10">

              {/* ===========================================
                  CLIENT DETAILS
              =========================================== */}

              <section>

                <div className="mb-5">

                  <h2 className="text-lg font-bold text-white">
                    Client Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Please provide the details associated
                    with your project.
                  </p>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* =======================================
                      CLIENT FULL NAME
                  ======================================= */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Client Full Name

                      <span className="ml-1 text-[#1BBCEF]">
                        *
                      </span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={() =>
                        setFieldErrors(
                          (prev) => ({
                            ...prev,

                            name: validateName(
                              form.name
                            ),
                          })
                        )
                      }
                      placeholder="Enter your full name"
                      maxLength={100}
                      required
                      aria-invalid={Boolean(
                        fieldErrors.name
                      )}
                      className={getInputClass(
                        fieldErrors.name
                      )}
                    />

                    {fieldErrors.name && (
                      <div className="mt-2 flex items-start gap-2 text-xs font-medium text-red-300">

                        <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" />

                        <span>
                          {fieldErrors.name}
                        </span>

                      </div>
                    )}

                  </div>

                  {/* =======================================
                      CLIENT EMAIL
                  ======================================= */}

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Client Email

                      <span className="ml-1 text-[#1BBCEF]">
                        *
                      </span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={() =>
                        setFieldErrors(
                          (prev) => ({
                            ...prev,

                            email:
                              validateEmail(
                                form.email
                              ),
                          })
                        )
                      }
                      placeholder="client@example.com"
                      maxLength={254}
                      required
                      aria-invalid={Boolean(
                        fieldErrors.email
                      )}
                      className={getInputClass(
                        fieldErrors.email
                      )}
                    />

                    {fieldErrors.email && (
                      <div className="mt-2 flex items-start gap-2 text-xs font-medium text-red-300">

                        <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" />

                        <span>
                          {fieldErrors.email}
                        </span>

                      </div>
                    )}

                  </div>

                  {/* =======================================
                      CONTACT NUMBER
                  ======================================= */}

                  <div>

                    <label
                      htmlFor="contact"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Contact Number

                      <span className="ml-1 text-[#1BBCEF]">
                        *
                      </span>
                    </label>

                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.contact}
                      onChange={
                        handleContactChange
                      }
                      onBlur={() =>
                        setFieldErrors(
                          (prev) => ({
                            ...prev,

                            contact:
                              validateContact(
                                form.contact
                              ),
                          })
                        )
                      }
                      placeholder="+1 234 567 8900"
                      maxLength={25}
                      required
                      aria-invalid={Boolean(
                        fieldErrors.contact
                      )}
                      className={getInputClass(
                        fieldErrors.contact
                      )}
                    />

                    {fieldErrors.contact && (
                      <div className="mt-2 flex items-start gap-2 text-xs font-medium text-red-300">

                        <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" />

                        <span>
                          {fieldErrors.contact}
                        </span>

                      </div>
                    )}

                  </div>

                  {/* =======================================
                      SERVICE
                  ======================================= */}

                  <div>

                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Select Service

                      <span className="ml-1 text-[#1BBCEF]">
                        *
                      </span>
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onBlur={() =>
                        setFieldErrors(
                          (prev) => ({
                            ...prev,

                            service:
                              validateService(
                                form.service
                              ),
                          })
                        )
                      }
                      required
                      aria-invalid={Boolean(
                        fieldErrors.service
                      )}
                      className={`${getInputClass(
                        fieldErrors.service
                      )} cursor-pointer`}
                    >

                      <option value="">
                        Select Service
                      </option>

                      {services.map(
                        (service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        )
                      )}

                    </select>

                    {fieldErrors.service && (
                      <div className="mt-2 flex items-start gap-2 text-xs font-medium text-red-300">

                        <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" />

                        <span>
                          {fieldErrors.service}
                        </span>

                      </div>
                    )}

                  </div>

                </div>

                {/* =======================================
                    SMS CONSENT
                ======================================= */}

                <label
                  htmlFor="payment-sms-consent"
                  className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-[#020817]/40 p-4 cursor-pointer hover:border-[#1BBCEF]/40 transition-all duration-300"
                >

                  <input
                    id="payment-sms-consent"
                    type="checkbox"
                    name="smsConsent"
                    checked={form.smsConsent}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        smsConsent: e.target.checked,
                      }))
                    }
                    aria-describedby="payment-sms-consent-text"
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-white/20 bg-[#020817] text-[#1BBCEF] accent-[#1BBCEF] focus:ring-2 focus:ring-[#1BBCEF]/50 cursor-pointer"
                  />

                  <span
                    id="payment-sms-consent-text"
                    className="text-xs leading-5 text-slate-400"
                  >
                    I agree to receive service-related and inquiry
                    follow-up text messages from Optivax Global at the
                    phone number provided. Message frequency may vary.
                    Message &amp; data rates may apply. Reply STOP to
                    unsubscribe or HELP for help.{" "}
                    <Link
                      to="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1BBCEF] hover:text-white underline underline-offset-2 transition-colors"
                    >
                      Privacy Policy
                    </Link>{" "}
                    &amp;{" "}
                    <Link
                      to="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1BBCEF] hover:text-white underline underline-offset-2 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </span>

                </label>

              </section>

              {/* ===========================================
                  AMOUNT
              =========================================== */}

              <section>

                <label
                  htmlFor="amount"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Amount (USD)

                  <span className="ml-1 text-[#1BBCEF]">
                    *
                  </span>
                </label>

                <div className="relative">

                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[#1BBCEF]">
                    $
                  </span>

                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    inputMode="decimal"
                    min="0.01"
                    step="0.01"
                    value={form.amount}
                    onChange={handleChange}
                    onBlur={() =>
                      setFieldErrors(
                        (prev) => ({
                          ...prev,

                          amount:
                            validateAmount(
                              form.amount
                            ),
                        })
                      )
                    }
                    placeholder="0.00"
                    required
                    aria-invalid={Boolean(
                      fieldErrors.amount
                    )}
                    className={`${getInputClass(
                      fieldErrors.amount
                    )} pl-10 text-lg font-semibold`}
                  />

                </div>

                {fieldErrors.amount ? (
                  <div className="mt-2 flex items-start gap-2 text-xs font-medium text-red-300">

                    <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" />

                    <span>
                      {fieldErrors.amount}
                    </span>

                  </div>
                ) : (
                  <p className="mt-2 text-xs text-slate-500">
                    Enter the payment amount
                    agreed with your project
                    manager.
                  </p>
                )}

              </section>

              {/* ===========================================
                  STRIPE PAYMENT
              =========================================== */}

              <section className="rounded-2xl border border-[#1BBCEF]/25 bg-[#1BBCEF]/[0.06] p-5 sm:p-6">

                <div className="mb-5 flex items-start gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1BBCEF]/20 bg-[#1BBCEF]/10">

                    <CreditCard className="h-5 w-5 text-[#1BBCEF]" />

                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-white">
                      Stripe Payment Methods
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Complete your payment
                      securely using our Stripe
                      checkout.
                    </p>

                  </div>

                </div>

                {/* =========================================
                    STRIPE BUTTON
                ========================================= */}

                <a
                  href={STRIPE_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1BBCEF] to-[#168ac7] px-5 py-4 text-base font-bold text-white shadow-lg shadow-[#1BBCEF]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#1BBCEF]/30 focus:outline-none focus:ring-4 focus:ring-[#1BBCEF]/20"
                >

                  <CreditCard className="h-5 w-5" />

                  Proceed To Checkout

                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />

                </a>

                {/* STRIPE NOTICE */}

                <div className="mt-4 rounded-xl border border-white/[0.07] bg-[#020817]/40 px-4 py-3">

                  <p className="text-center text-xs leading-5 text-slate-400">
                    Please enter the same payment
                    amount on Stripe that was agreed
                    upon with your project manager.
                  </p>

                </div>

              </section>

              {/* ===========================================
                  SCREENSHOT
              =========================================== */}

              <section className="relative overflow-hidden rounded-2xl border-2 border-amber-400/60 bg-amber-400/[0.07] p-5 shadow-lg shadow-amber-400/5 sm:p-6">

                {/* REQUIRED BADGE */}

                <div className="absolute right-0 top-0 rounded-bl-xl bg-amber-400 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#181100]">
                  Required
                </div>

                {/* TITLE */}

                <div className="mb-5 pr-20">

                  <div className="mb-2 flex items-center gap-2">

                    <Upload className="h-5 w-5 shrink-0 text-amber-300" />

                    <h2 className="text-lg font-extrabold text-amber-100">
                      Upload Payment Screenshot
                    </h2>

                  </div>

                  <p className="text-sm font-medium leading-6 text-amber-100/75">
                    After completing your Stripe
                    payment, upload your payment
                    screenshot below.
                  </p>

                </div>

                {/* IMPORTANT */}

                <div className="mb-4 flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3">

                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />

                  <p className="text-sm font-semibold leading-5 text-amber-100">
                    Payment screenshot is
                    mandatory. You cannot submit
                    this form without uploading
                    your payment proof.
                  </p>

                </div>

                {/* =========================================
                    UPLOAD BOX
                ========================================= */}

                <label
                  htmlFor="payment-screenshot"
                  className="group flex min-h-[155px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-amber-300/40 bg-[#020817]/25 px-5 py-6 text-center transition-all duration-300 hover:border-amber-300 hover:bg-amber-300/[0.04]"
                >

                  {file ? (
                    <>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10">

                        <CheckCircle2 className="h-7 w-7 text-emerald-400" />

                      </div>

                      <span className="max-w-full break-all text-sm font-bold text-white">
                        {file.name}
                      </span>

                      <span className="mt-1 text-xs font-medium text-emerald-300">
                        Screenshot selected
                        successfully
                      </span>

                      <span className="mt-3 text-xs text-slate-500">
                        Click here to replace the
                        screenshot
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-300/10 transition-transform group-hover:scale-105">

                        <Upload className="h-6 w-6 text-amber-300" />

                      </div>

                      <span className="text-sm font-bold text-amber-100">
                        Click To Upload Payment
                        Screenshot
                      </span>

                      <span className="mt-2 text-xs text-amber-100/55">
                        JPG, PNG or WEBP • Maximum
                        5 MB
                      </span>
                    </>
                  )}

                  <input
                    id="payment-screenshot"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleFileChange}
                    required
                    className="sr-only"
                  />

                </label>

              </section>

              {/* ===========================================
                  MAIN ERROR
              =========================================== */}

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                >

                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                  <span className="leading-5">
                    {errorMessage}
                  </span>

                </div>
              )}

              {/* ===========================================
                  SUBMIT BUTTON
              =========================================== */}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1BBCEF] to-[#0876c9] px-5 py-4 text-base font-bold text-white shadow-lg shadow-[#1BBCEF]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#1BBCEF]/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >

                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>

                    Submitting Confirmation...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-5 w-5" />

                    Submit Payment Confirmation
                  </>
                )}

              </button>

              {/* ===========================================
                  SECURE MESSAGE
              =========================================== */}

              <div className="flex items-center justify-center gap-2 text-center">

                <ShieldCheck className="h-4 w-4 shrink-0 text-[#1BBCEF]" />

                <p className="text-xs leading-5 text-slate-500">
                  Your payment confirmation will
                  be securely submitted to the
                  Optivax Global billing team.
                </p>

              </div>

            </div>

          </form>

        </div>

      </main>
    </>
  );
};

export default PaymentForm;