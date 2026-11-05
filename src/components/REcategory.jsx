import REcard from "./REcard";

const REcategory = ({ category }) => {
  return (
    <section className="py-10">
      {/* শিরোনাম ও বর্ণনা */}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
        {category.name}
      </h2>
      <p className="mt-3 max-w-4xl text-base sm:text-lg text-slate-600">
        {category.description}
      </p>

      {/* কার্ডের গ্রিড */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(category.cards || []).slice(0, 4).map((card) => (
          <REcard key={card.slug} card={card} />
        ))}
      </div>

      {/* View More লিংক */}
      <a
        href={category.viewMoreLink}
        className="link link-primary no-underline hover:underline mt-8 inline-block text-lg font-medium"
      >
        {category.viewMoreText} →
      </a>
    </section>
  );
};

export default REcategory;
