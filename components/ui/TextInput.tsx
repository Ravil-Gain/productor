import * as React from "react";
import { useState } from "react";
import { FiSave, FiEdit } from "react-icons/fi";

export interface ITextInputProps {
  value: string;
  setValue: any;
}

export default function TextInput(props: ITextInputProps) {
  const { value, setValue } = props;
  const [editor, setEditor] = useState(true);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
        setEditor(false);
    }
  };

  return editor ? (
    <div className="flex items-center justify-between mb-4">
      <input
        className="w-full"
        type="text"
        placeholder="List Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <FiSave
        className="cursor-pointer ml-4 my-auto h-6 w-6"
        onClick={() => setEditor(false)}
      />
    </div>
  ) : (
    <div className="flex items-center justify-between mb-4">
      <label>List:</label>
      <h1>{value}</h1>
      <FiEdit
        className="cursor-pointer ml-4 my-auto h-6 w-6"
        onClick={() => setEditor(true)}
      />
    </div>
  );
}
