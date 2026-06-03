function Forum() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-4">
        Student Forum
      </h2>

      <textarea
        placeholder="Ask a question..."
        className="w-full border p-3 rounded"
      />

      <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded">
        Post
      </button>
    </div>
  );
}

export default Forum;