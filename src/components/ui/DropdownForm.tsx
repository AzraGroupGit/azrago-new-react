interface DropdownFormProps {
  label: string;
  options: string[];
  placeholder?: string;
}

function DropdownForm({ label, options, placeholder }: DropdownFormProps) {
  const id = label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-sm font-medium text-white mb-2">
        {label}
      </label>

      <div className="relative group">
        <select
          id={id}
          defaultValue=""
          className="
            bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg
            block w-full p-2.5 pr-9
            appearance-none
            transition-all duration-300
            focus:ring-2 focus:ring-blue-500/40
            focus:border-blue-500
          "
        >
          <option value="" disabled className="text-gray-400">
            {placeholder || `Select ${label.toLowerCase()}`}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 right-2
            flex items-center
            transition-transform duration-300
            group-focus-within:rotate-180
          "
        >
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DropdownForm;
