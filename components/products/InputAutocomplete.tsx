import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

interface IInputAutocomplete {
  data: string[];
  onSelected: any;
  onChange?: any;
  selected?: string[];
}

export function InputAutocomplete(props: IInputAutocomplete) {
  const { data, onSelected } = props;
  const autocorrect = require("autocorrect")({ words: data });
  const [suggestions, setSugesstions] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handler = (e: any) => {
    console.log("here", e.target.value);
    const array = find(e.target.value);
    setSugesstions(array);
  };

  const find = (s: string): Array<string> => {
    const result: Array<string> = [];
    const matches = data.filter((w) => w.toLowerCase().includes(s));
    matches.map((match) => result.push(match));
    if (matches.length < 3) {
      const auto = autocorrect(s);
      if (!result.includes(auto)) result.push(auto);
    }
    // result.filter(val=> !selected.includes(val.toLowerCase()));
    if (result.length < 2) result.push(`Add ${s}...`);
    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(input);
  };

  const selectAutocomplete = (value: string) => {
    if (value === "") return;
    onSelected(value);
    setValue("");
    const array = find("");
    setSugesstions(array);
  };

  return (
    <div className="w-full flex h-44 flex-col items-center md:w-3/4 md:mx-auto md:text-2xl">
      <div className="flex ">
        <input
          className="rounded-lg py-1 px-2"
          type="search"
          value={value}
          placeholder="Search.."
          onChange={handleChange}
          onKeyUp={handler}
        />
        <button onClick={() => selectAutocomplete(value)} className="px-2">
          <FiArrowRightCircle />
        </button>
      </div>

      <div
        className={`w-full grid gap-1 p-4 ${
          suggestions.length > 2 ? "grid-cols-3" : "grid-rows-2"
        }`}
      >
        {suggestions.slice(0, 6).map((item, index) => (
          <div
            className={`border-2 rounded-lg border-double cursor-pointer flex items-center justify-center text-center h-16 text-sm`}
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
