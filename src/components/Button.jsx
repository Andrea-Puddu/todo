const Button = ({primary, secondary, full, children, ...rest}) => {
  return (
    <button
      {...rest}
      className={`
      ${primary && 'bg-primary hover:bg-primary-dark text-primary-tint'} 
      ${secondary && 'bg-secondary hover:bg-secondary-dark text-content-white'}
      ${full && ' w-full'}
      ${rest.className}
      rounded-lg max-[360px]:text-xs focus:outline-0 py-2 px-4 shadow-md duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
