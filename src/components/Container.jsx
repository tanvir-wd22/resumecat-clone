const Container = ({ children }) => {
  return (
    <section className={`pb-12 sm:pb-16 lg:pb-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default Container;
