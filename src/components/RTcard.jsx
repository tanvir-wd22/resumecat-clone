const RTcard = ({ template }) => {
  const { name, description, image, colorName, format } = template;

  return (
    <article className="flex flex-col gap-5">
      {/* Preview box */}
      <div className="card rounded-xl bg-[#EEF0F9] p-5 sm:p-6">
        {/* Resume image */}
        <div className="aspect-[8.5/11] w-full overflow-hidden rounded-lg border border-slate-300/50 bg-white">
          <img
            src={image}
            alt={`${name} resume template`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Color name + format */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block size-4 shrink-0 rounded-full bg-[#4A6382]"></span>
            <span className="text-sm font-medium text-[#2C3E5A]">
              {colorName}
            </span>
          </div>

          <span className="badge badge-sm rounded-md border-0 bg-[#8A9BB5] font-semibold text-white">
            {format}
          </span>
        </div>
      </div>

      {/* Name + description */}
      <div className="px-0.5">
        <h3 className="text-xl font-bold text-[#1F2A44]">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#7B8CA6]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default RTcard;
