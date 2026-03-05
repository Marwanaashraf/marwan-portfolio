import clsx from "clsx";
import type { ContactForm } from "../Contact.types";

/**
 * Reusable Form Field Component
 * Makes the template scalable and easier to maintain.
 */

interface FormFieldProps {
  label: string;
  name: keyof ContactForm;
  type?: string;
  textarea?: boolean;
  formik: any;
  placeholder?: string;
}

export default function FormField({
  label,
  name,
  type = "text",
  textarea,
  formik,
  placeholder,
}: FormFieldProps) {
  const hasError = formik.errors[name] && formik.touched[name];

  return (
    <div className="space-y-1">
      <label
        className={clsx("capitalize", hasError ? "text-error" : "")}
        htmlFor={name}
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          aria-invalid={hasError}
          aria-describedby={`${name}-error`}
          className={clsx(
            "w-full h-24 py-3",
            hasError ? "form-input-error" : "form-input",
          )}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={name}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          aria-invalid={hasError}
          aria-describedby={`${name}-error`}
          className={clsx(
            "w-full h-10",
            hasError ? "form-input-error" : "form-input",
          )}
        />
      )}

      {hasError && (
        <p id={`${name}-error`} className="text-error">
          {formik.errors[name]}
        </p>
      )}
    </div>
  );
}
