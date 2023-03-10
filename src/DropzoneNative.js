import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function DropzoneNative() {
  const onDrop = useCallback((ev) => {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
          console.log(file)
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }, []);

  return (
    <div id="drop_zone" onDrop={onDrop}>
      <p>
        Drag one or more files to this <i>drop zone</i>.
      </p>
    </div>
  );
}
