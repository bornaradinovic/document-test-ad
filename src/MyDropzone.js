import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles', acceptedFiles);
    acceptedFiles.forEach((file, index) => {
      console.log(`File - ${index}`,file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}
