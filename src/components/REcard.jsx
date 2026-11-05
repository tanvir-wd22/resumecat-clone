const REcard = ({ card }) => {
  return (
    <div className="bg-slate-100 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-900 mb-5">
        {card.title}
      </h3>

      <img
        src={card.image}
        alt={`${card.title} resume example`}
        loading="lazy"
        className="w-full rounded-md shadow-md bg-white"
      />
    </div>
  );
};

export default REcard;
