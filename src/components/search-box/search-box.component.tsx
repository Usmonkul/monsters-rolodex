import "./search-box.styles.css";
import { ChangeEvent } from "react";

// import { ChangeEventHandler } from "react";

//Interface  mainly for OOP
// interface ISearchBoxProps extends IChangeHandlerProp {
//   className: string;
//   placeholder?: string;
// }

// interface IChangeHandlerProp {
//   onSearchHandler: (a: {}) => void;
// }

//Type   mainly for Functional Programming
type SearchBoxProps = {
  className: string;
  placeholder: string;
  // onSearchHandler: ChangeEventHandler<HTMLInputElement>;
  onSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onSearchHandler,
  className,
  placeholder,
}: SearchBoxProps) => {
  return (
    <>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    </>
  );
};

export default SearchBox;
