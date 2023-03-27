import React, { useState } from "react";

interface IInputAutocomplete {
  data: string[];
  onSelected: any;
  onChange?: any;
}

export function InputAutocomplete(props: IInputAutocomplete) {
  const { data, onSelected } = props;

  const autocorrect = require("autocorrect")({ words: data });

  const [suggestions, setSugesstions] = useState<string[]>([]);
  // const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");

  const handler = (e: any) => {
    console.log("here", e.target.value);
    const array = find(e.target.value);
    setSugesstions(array);
  };

  const find = (s: string) => {
    const result: Array<string> = [];
    const matches = data.filter((w) => w.toLowerCase().includes(s));
    matches.map((match) => result.push(match));
    if (matches.length < 3) {
      const auto = autocorrect(s);
      if (!result.includes(auto)) result.push(auto);
    }
    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSelectedVal(input);
  };

  const selectAutocomplete = (value: string) => {
    onSelected(value);
    setSugesstions([]);
  };

  return (
    <div className="w-full flex h-44 flex-col items-center md:w-3/4 md:mx-auto md:text-2xl">
      <div>
        <input
          type="search"
          value={selectedVal}
          onChange={handleChange}
          onKeyUp={handler}
        />
        {/* <input type="button">add</input> */}
      </div>

      <div
        className={`w-full grid gap-1 p-4 ${
          suggestions.length > 2 ? "grid-cols-3" : "grid-rows-2"
        }`}
      >
        {suggestions.slice(0, 6).map((item, index) => (
          <div
            className={`border-2 rounded-lg border-double cursor-pointer flex items-center justify-center text-center h-16 text-lg`}
            key={index}
            onClick={() => {
              selectAutocomplete(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
