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
          marginBottom: "30px",
          marginTop: "30px",
          position: "relative",
        }}
      >
        <Input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
          css={{
            width: "500px",
            height: "50px",

            padding: "5px",
            marginBottom: "5px",
          }}
          placeholder="search here"
        />

        {isSearchFocused && query.length !== 0 && (
          <Flex
            flexDirection="column"
            css={{
              borderRadius: "10px",
              background: "white",
              width: "500px",
              maxHeight: "200px",
              overflow: "scroll",
              position: "absolute",
              top: "100%",
              padding: "10px",
              gap: "20px",
              zIndex: 10,
            }}
          >
            {suggestionUI?.map((ele) => (
              <Flex
                gap="10px"
                key={ele.id}
                css={{ cursor: "pointer" }}
                onMouseDown={() => navigate(`/product/${ele.id}`)}
              >
                <img src={ele.image} alt="" width={"40px"} height={"40px"} />
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
