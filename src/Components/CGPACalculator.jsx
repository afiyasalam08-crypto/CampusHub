import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CGPACalculator() {
  const [subjects, setSubjects] = useState([
    {
      name: "",
      credits: "",
      grade: "",
    },
  ]);

  const [cgpa, setCgpa] = useState(null);

  const gradePoints = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
    U: 0,
  };

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        name: "",
        credits: "",
        grade: "",
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      const credits = Number(subject.credits);
      const points = gradePoints[subject.grade] || 0;

      totalCredits += credits;
      totalPoints += credits * points;
    });

    if (totalCredits > 0) {
      const result = (totalPoints / totalCredits).toFixed(2);
      setCgpa(result);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          🎓 CGPA Calculator
        </h2>

        <p className="text-gray-500 mt-2">
          Calculate your CGPA quickly and accurately.
        </p>
      </div>

      {/* Subject Count */}
      <div className="mb-6">
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
          Subjects Added: {subjects.length}
        </span>
      </div>

      {/* Subject Inputs */}
      {subjects.map((subject, index) => (
        <div
          key={index}
          className="grid md:grid-cols-3 gap-4 mb-5"
        >
          <input
            type="text"
            placeholder="Subject Name"
            value={subject.name}
            onChange={(e) =>
              handleChange(index, "name", e.target.value)
            }
            className="w-full border border-gray-300 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Credits"
            value={subject.credits}
            onChange={(e) =>
              handleChange(index, "credits", e.target.value)
            }
            className="w-full border border-gray-300 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={subject.grade}
            onChange={(e) =>
              handleChange(index, "grade", e.target.value)
            }
            className="w-full border border-gray-300 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Grade</option>
            <option>O</option>
            <option>A+</option>
            <option>A</option>
            <option>B+</option>
            <option>B</option>
            <option>C</option>
            <option>U</option>
          </select>
        </div>
      ))}

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={addSubject}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          + Add Subject
        </button>

        <button
          onClick={calculateCGPA}
          className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Calculate CGPA
        </button>
      </div>

      {/* Result Section */}
      {cgpa && (
        <div className="mt-10 bg-slate-50 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            📊 CGPA Report
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Circular Progress */}
            <div className="w-56 h-56">
              <CircularProgressbar
                value={Number(cgpa) * 10}
                text={cgpa}
                styles={{
                  path: {
                    stroke: "#2563eb",
                    strokeLinecap: "round",
                  },
                  trail: {
                    stroke: "#e5e7eb",
                  },
                  text: {
                    fill: "#1e40af",
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                }}
              />
            </div>

            {/* Analysis */}
            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                CGPA: {cgpa}
              </h3>

              <p className="mt-4 text-gray-600">
                Performance Analysis
              </p>

              {Number(cgpa) >= 9 && (
                <div className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-full inline-block">
                  🏆 Outstanding
                </div>
              )}

              {Number(cgpa) >= 8 &&
                Number(cgpa) < 9 && (
                  <div className="mt-4 bg-blue-100 text-blue-700 px-4 py-2 rounded-full inline-block">
                    ⭐ Excellent
                  </div>
                )}

              {Number(cgpa) >= 7 &&
                Number(cgpa) < 8 && (
                  <div className="mt-4 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full inline-block">
                    👍 Good
                  </div>
                )}

              {Number(cgpa) < 7 && (
                <div className="mt-4 bg-red-100 text-red-700 px-4 py-2 rounded-full inline-block">
                  📚 Needs Improvement
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}