"use client";

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { convertFileToUrl } from '@/lib/utils';

interface FileUploaderProps {
  files: File[] | undefined,
  onChange: (files: File[]) => void
}

const FileUploader = ({files, onChange}: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='file-upload'>
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="Uploaded Image"
          className="overflow-hidden max-h-[400px] object-cover"
        />
      ): (
          <>
            <Image
              src="/assets/icons/upload.svg"
              alt="Upload"
              height={40}
              width={40}
            />
            <div className='file-upload_label'>
              <p className='text-14-regular'>
                <span className="text-green-500">
                  Click to upload
                </span> or drag and drop
              </p>
              <p>
                PNG, JPG, SVG or GIF. (Max 800x400)
              </p>
            </div>
          </>
      )}
    </div>
  )
}

export default FileUploader;