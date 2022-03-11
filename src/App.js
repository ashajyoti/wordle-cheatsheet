import axios from "axios";
import { useState } from "react";
import {
  H2,
  WButton,
  WBody,
  WInput,
  WordsContainer,
  WordSets,
  Header,
  WLoader,
  WLabel,
  WSearchInputWrapper
} from "./styles/WordleStyles";

export default function App() {
  const [query, setQuery] = useState("");
  const [usedLetters, setUsedLetters] = useState("");
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [includedLetters, setIncludedLetters] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
    if (!query) {
      setWords([]);
    }
  };

  const handleUsedLetters = (e) => {
    setUsedLetters(e.target.value);
    if (!usedLetters) {
      setWords([]);
    }
  };

  const handleIncludedLetters = (e) => {
    setIncludedLetters(e.target.value);
    if (!includedLetters) {
      setWords([]);
    }
  };

  const getWords = async () => {
    const baseUrl = `https://api.datamuse.com/words`;

    const getData = await axios.get(`${baseUrl}?sp=${query}`);
    const dataResponse = await getData.data;

    // console.log(dataResponse);

    // filter words
    const used = usedLetters.split("");
    const filteredData = dataResponse.filter((item) =>
      used.every((u) => {
        return !item.word.split("").includes(u);
      })
    );
    const included = includedLetters.split("");
    const includedFilterData = filteredData.filter((item) =>
      included.every((i) => {
        return item.word.split("").includes(i);
      })
    );
    setWords(includedFilterData);
    setLoading(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    getWords();
  };

  return (
    <div className="App">
      <H2>Cheat Sheet - Wordle</H2>
      <WBody>
        <WSearchInputWrapper>
          <WLabel>Search word</WLabel>
          <WInput type="text" value={query} onChange={handleQuery} />
        </WSearchInputWrapper>
        <WSearchInputWrapper>
          <WLabel>Letters excluded</WLabel>
          <WInput type="text" value={usedLetters} onChange={handleUsedLetters} />
        </WSearchInputWrapper>
        <WSearchInputWrapper>
          <WLabel>Letters included</WLabel>
          <WInput
            type="text"
            value={includedLetters}
            onChange={handleIncludedLetters}
          />
        </WSearchInputWrapper>
        <WButton type="submit" onClick={handleSubmit}>
          Check
        </WButton>

        {loading && <WLoader></WLoader>}
        {!loading && words.length && query ? (
          <WordsContainer>
            <WordSets>
              <Header>Words({`${words.length}`})</Header>
              <Header>Score</Header>
            </WordSets>
            {words.map((item, id) => {
              return (
                <WordSets key={id}>
                  <div>{item.word}</div>
                  <div>{item.score}</div>
                </WordSets>
              );
            })}
          </WordsContainer>
        ) : (
          <div></div>
        )}
      </WBody>
    </div>
  );
}
