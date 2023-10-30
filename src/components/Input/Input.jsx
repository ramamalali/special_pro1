const Input = ({ placeholder, type }) => {
  return (
    <div className="w-4/5 bg-white rounded-lg font-medium py-2 px-3 outline-none">
      <input
        className="w-full outline-none"
        type={type}
        placeholder={placeholder}
      />
      
    </div>
  );
};

export default Input;
