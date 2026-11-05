import { useState } from "react";
import { Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  role: "",
  message: "",
};

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const baseInputClasses =
  "w-full px-4 py-3 rounded-xl bg-white/60 border focus:outline-none transition text-[#12332f] placeholder-[#4d6b66]/60";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView();

  // Validate a single field
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required.";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          error = "Name can only contain alphabets and spaces.";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters.";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email address is required.";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())
        ) {
          error = "Please enter a valid email address (e.g. name@domain.com).";
        }
        break;

      case "mobile":
        if (!value) {
          error = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Mobile number must be exactly 10 digits.";
        } else if (!/^[6-9]/.test(value)) {
          error = "Mobile number should start with 6, 7, 8, or 9.";
        }
        break;

      case "role":
        if (!value) {
          error = "Please select whether you are a Student or a Retailer.";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required.";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters long.";
        }
        break;

      default:
        break;
    }
    return error;
  };

  const handleNameChange = (e) => {
    // Strictly allow only alphabets and spaces, no digits or special characters
    const filtered = e.target.value.replace(/[^A-Za-z\s]/g, "");
    // Prevent multiple consecutive spaces or leading spaces
    const sanitized = filtered.replace(/^\s+/, "").replace(/\s{2,}/g, " ");

    setForm((prev) => ({ ...prev, name: sanitized }));
    if (touched.name) {
      setErrors((prev) => ({
        ...prev,
        name: validateField("name", sanitized),
      }));
    }
  };

  const handleMobileChange = (e) => {
    // Strictly allow only numeric digits (0-9) and cap at 10 digits
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);

    setForm((prev) => ({ ...prev, mobile: digitsOnly }));
    if (touched.mobile) {
      setErrors((prev) => ({
        ...prev,
        mobile: validateField("mobile", digitsOnly),
      }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, email: val }));
    if (touched.email) {
      setErrors((prev) => ({
        ...prev,
        email: validateField("email", val),
      }));
    }
  };

  const handleRoleChange = (e) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, role: val }));
    if (touched.role) {
      setErrors((prev) => ({
        ...prev,
        role: validateField("role", val),
      }));
    }
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, message: val }));
    if (touched.message) {
      setErrors((prev) => ({
        ...prev,
        message: validateField("message", val),
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all touched
    const allTouched = {
      name: true,
      email: true,
      mobile: true,
      role: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      mobile: validateField("mobile", form.mobile),
      role: validateField("role", form.role),
      message: validateField("message", form.message),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    if (hasErrors) {
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
    setTouched({});
    setErrors({});
  };

  const getInputClass = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `${baseInputClasses} ${
      hasError
        ? "border-red-400 focus:ring-2 focus:ring-red-400 bg-red-50/40"
        : "border-white/80 focus:ring-2 focus:ring-[#0f766e]"
    }`;
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto fade-up ${inView ? "visible" : ""}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#12332f] mb-3">
          Get early access
        </h2>
        <p className="text-center text-[#4d6b66] mb-10">
          Join the TechCycle community — drop us a message and we&rsquo;ll get
          you started.
        </p>

        {submitted ? (
          <div className="glass-sm p-8 text-center border border-[#0f766e]/20 space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0f766e]/10 mx-auto">
              <CheckCircle2 className="w-7 h-7 text-[#0f766e]" />
            </div>
            <h3 className="text-xl font-bold text-[#12332f]">
              Thank you! We will get back to you soon.
            </h3>
            <p className="text-sm text-[#4d6b66] max-w-md mx-auto">
              Your details have been received. We will reach out to you via
              email or phone within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="btn-glass mt-4 text-sm"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass p-6 md:p-8 space-y-5"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#12332f] mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Rahul Sharma (letters only)"
                value={form.name}
                onChange={handleNameChange}
                onBlur={() => handleBlur("name")}
                aria-invalid={Boolean(touched.name && errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={getInputClass("name")}
              />
              {touched.name && errors.name && (
                <p
                  id="name-error"
                  className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#12332f] mb-1.5"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. rahul@example.com"
                value={form.email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur("email")}
                aria-invalid={Boolean(touched.email && errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={getInputClass("email")}
              />
              {touched.email && errors.email && (
                <p
                  id="email-error"
                  className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mobile Number Field */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-xs font-semibold uppercase tracking-wider text-[#12332f] mb-1.5"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-white/80 bg-white/40 text-xs font-semibold text-[#12332f]/80 select-none">
                  +91
                </span>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  placeholder="10-digit number (digits only)"
                  value={form.mobile}
                  onChange={handleMobileChange}
                  onBlur={() => handleBlur("mobile")}
                  aria-invalid={Boolean(touched.mobile && errors.mobile)}
                  aria-describedby={errors.mobile ? "mobile-error" : undefined}
                  className={`${getInputClass("mobile")} rounded-l-none`}
                />
              </div>
              <div className="flex items-center justify-between mt-1.5">
                {touched.mobile && errors.mobile ? (
                  <p
                    id="mobile-error"
                    className="flex items-center gap-1 text-xs text-red-600 font-medium"
                  >
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.mobile}
                  </p>
                ) : (
                  <span className="text-[11px] text-[#4d6b66]/70">
                    Numbers only, 10 digits
                  </span>
                )}
                <span className="text-[11px] text-[#4d6b66]/70 ml-auto">
                  {form.mobile.length}/10
                </span>
              </div>
            </div>

            {/* Role Dropdown */}
            <div>
              <label
                htmlFor="role"
                className="block text-xs font-semibold uppercase tracking-wider text-[#12332f] mb-1.5"
              >
                I am a… <span className="text-red-500">*</span>
              </label>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleRoleChange}
                onBlur={() => handleBlur("role")}
                aria-invalid={Boolean(touched.role && errors.role)}
                aria-describedby={errors.role ? "role-error" : undefined}
                className={getInputClass("role")}
              >
                <option value="" disabled>
                  Select your role…
                </option>
                <option value="Student">Student / Hobbyist</option>
                <option value="Retailer">Electronics Retailer</option>
              </select>
              {touched.role && errors.role && (
                <p
                  id="role-error"
                  className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.role}
                </p>
              )}
            </div>

            {/* Message Area */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-[#12332f] mb-1.5"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what kit or project you are interested in..."
                rows={4}
                value={form.message}
                onChange={handleMessageChange}
                onBlur={() => handleBlur("message")}
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={getInputClass("message") + " resize-none"}
              />
              {touched.message && errors.message && (
                <p
                  id="message-error"
                  className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn-accent w-full flex items-center justify-center gap-2 py-3.5 shadow-md"
            >
              Send message
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Social / Contact links */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#4d6b66] hover:text-[#0f766e] transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-[#0f766e]" />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#4d6b66] hover:text-[#0f766e] transition-colors"
          >
            <InstagramIcon className="w-5 h-5 text-[#0f766e]" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
