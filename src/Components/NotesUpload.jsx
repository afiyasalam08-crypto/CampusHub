import { useState } from "react";
import { storage } from "../firebase";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function NotesUpload() {
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      alert("Choose a PDF");
      return;
    }

    const storageRef = ref(
      storage,
      `notes/${Date.now()}-${file.name}`
    );

    try {
      await uploadBytes(storageRef, file);

      const url = await getDownloadURL(storageRef);

      alert("Upload Successful");

      console.log({
        subject,
        fileName: file.name,
        downloadURL: url,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        Upload Notes
      </h2>

      <input
        type="text"
        placeholder="Subject Name"
        className="w-full border p-3 rounded-lg mb-4"
        value={subject}
        onChange={(e) =>
          setSubject(e.target.value)
        }
      />

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
        className="mb-4"
      />

      <button
        onClick={uploadFile}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Upload PDF
      </button>

    </div>
  );
}