import { Input, Flex, Text } from "@sparrowengg/twigs-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [suggestionUI, setSuggestionUI] = useState([]);
  const [cachedResponse, setCachedResponse] = useState({});

  function fetchSuggestions() {
    fetch(`http://localhost:3001/search/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setSuggestionUI(data);
        setCachedResponse((prev) => ({ ...prev, [query]: data }));
      });
  }

  useEffect(() => {
    if (query === "") return;
    if (cachedResponse[query]) {
      setSuggestionUI(cachedResponse[query]);
      return;
    }
    const delayedCall = setTimeout(() => {
      fetchSuggestions();
    }, 500);
    return () => {
      clearTimeout(delayedCall);
    };
  }, [query]);

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        css={{
          marginBlock: "$15",
          position: "relative",
        }}
      >
        <Input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          size="lg"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
          css={{
            width: "500px",

            padding: "$2",
            marginBottom: "$2",
          }}
          placeholder="search"
        />

        {isSearchFocused && query.length !== 0 && (
          <Flex
            flexDirection="column"
            gap="$10"
            css={{
              borderRadius: "10px",
              background: "white",
              width: "500px",
              maxHeight: "200px",
              overflow: "auto",
              position: "absolute",
              top: "100%",
              padding: "$5",

              zIndex: 10,
            }}
          >
            {suggestionUI?.map((ele) => (
              <Flex
                gap="$5"
                key={ele.id}
                css={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${ele.id}`)}
              >
                <img
                  src={ele.image}
                  alt="product"
                  width={"40px"}
                  height={"40px"}
                />
                <Text>{ele.title}</Text>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default SearchBar;
