import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface FieldBase {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
}

const inputClasses = (hasError?: boolean) =>
  clsx(
    "w-full rounded-sm border bg-surface-container-lowest px-4 py-3 font-sans text-body-md text-on-surface outline-none transition-colors",
    "placeholder:text-outline focus:border-[1.5px] focus:border-brand-navy",
    hasError ? "border-error" : "border-divider",
  );

type InputField = FieldBase & {
  type: "text" | "email" | "tel";
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};
type TextareaField = FieldBase & {
  type: "textarea";
  inputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
};
type SelectField = FieldBase & {
  type: "select";
  options: { value: string; label: string }[];
  inputProps?: SelectHTMLAttributes<HTMLSelectElement>;
};

export type FieldProps = InputField | TextareaField | SelectField;

export function Field(props: FieldProps) {
  const { label, name, error, required } = props;
  const id = `field-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-md text-on-surface normal-case tracking-normal">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      {props.type === "textarea" && (
        <textarea id={id} name={name} required={required} rows={4} className={inputClasses(!!error)} {...props.inputProps} />
      )}

      {props.type === "select" && (
        <select id={id} name={name} required={required} className={inputClasses(!!error)} {...props.inputProps}>
          <option value="">—</option>
          {props.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {(props.type === "text" || props.type === "email" || props.type === "tel") && (
        <input
          id={id}
          name={name}
          type={props.type}
          required={required}
          className={inputClasses(!!error)}
          {...props.inputProps}
        />
      )}

      {error && <span className="text-caption text-error">{error}</span>}
    </div>
  );
}
