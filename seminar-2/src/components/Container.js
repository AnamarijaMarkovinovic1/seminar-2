const Container = ({ children, title, Heading, variant }) => (
  <div className="py-4">
    {Heading ? <Heading variant={variant}>{title}</Heading> : <h2>{title}</h2>}
    <div
      className="d-flex justify-content-around w-100 my-3"
      style={{ gap: "16px" }}
    >
      {children}
    </div>
  </div>
);

export default Container;
