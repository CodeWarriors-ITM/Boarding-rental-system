import React, { useState } from 'react';
import { FaUpload} from 'react-icons/fa';

interface Props {
  onFilesChange: (files: FileList) => void;
}

const ImageUpload: React.FC<Props> = ({ onFilesChange }) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const urls = Array.from(fileList).map(file => URL.createObjectURL(file));
      setPreviewUrls(urls);
      onFilesChange(fileList);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg">
      <label
        htmlFor="fileInput"
        className="relative flex flex-col items-center w-full h-32 bg-white rounded-lg border-2 border-dashed border-gray-400 cursor-pointer hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-8"
      >
        <FaUpload className="w-8 h-8 text-gray-400" />
        <span className="mt-2 text-sm font-medium text-gray-400">
          Select one or more files
        </span>
        <input
          id="fileInput"
          type="file"
          className="sr-only"
          onChange={handleFileChange}
          multiple
        />
      </label>
      {previewUrls.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {previewUrls.map(url => (
            <img key={url} src={url} className="w-32 h-32 object-cover rounded-lg" alt="Preview" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
