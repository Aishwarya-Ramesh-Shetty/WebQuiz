function Button({ children, onClick }) {
  return (
    <button className="option bg-purple text-white hover:opacity-40" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
