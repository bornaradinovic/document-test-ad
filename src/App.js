import "./App.css";
import { DropzoneNative } from "./DropzoneNative";
import { MyDropzone } from "./MyDropzone";

function App() {
  return (
    <div>
      <MyDropzone />
      <br />
      <br />
      <DropzoneNative />
    </div>
  );
}

export default App;
