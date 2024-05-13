import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// There are two approaches to search:
// 1) Hitting [Enter]: Wrap the <InputGroup> inside a <Form> (override its css width style to 100%),
//    and use the [Form.onSubmit] event to re-render the games (what's being searched).
// 2) On text change: by using [Input.onChange] to re-render the games (what's being searched).
// For both approaches, you will need a Ref Hook tied to the <Input> search.

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        ref={searchRef}
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
        onChange={() => onSearch(searchRef.current?.value!)}
      />
    </InputGroup>
  );
};

export default SearchInput;
