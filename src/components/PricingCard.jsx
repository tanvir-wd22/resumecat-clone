import { Check, ArrowUpRight } from "lucide-react";

const PricingCard = ({ plan }) => {
  const {
    name,
    description,
    price,
    duration,
    buttonText,
    features,
    note,
  } = plan;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 lg:p-8">

      {/* Plan name */}
      <h3 className="text-xl font-semibold text-slate-950">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-1 text-sm sm:text-base text-slate-500">
        {description}
      </p>

      {/* Price */}
      <div className="mt-7 flex items-end gap-1">
        <span className="text-5xl font-medium tracking-tight text-slate-950">
          ${price}
        </span>

        <span className="mb-1 text-sm text-slate-500">
          / {duration}
        </span>
      </div>

      {/* Button */}
      <button className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700">
        {buttonText}

        <ArrowUpRight size={18} strokeWidth={2} />
      </button>

      {/* Features */}
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-slate-700"
          >
            <Check
              size={18}
              strokeWidth={2.5}
              className="mt-0.5 shrink-0 text-emerald-500"
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Push note to bottom */}
      {note && (
        <p className="mt-auto pt-8 text-xs text-slate-400">
          {note}{" "}
          <button className="cursor-pointer text-blue-600 hover:underline">
            Learn More
          </button>
        </p>
      )}

    </div>
  );
};

export default PricingCard;