import { useState } from "react";

export default function InternshipApplication() {
  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [customEthnicity, setCustomEthnicity] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [militaryStatus, setMilitaryStatus] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-[#1e3a5f] text-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold">Internship Application</h1>

        <form
          className="space-y-4"
          action="https://formspree.io/f/yourFormID"  // Replace this with your real Formspree link
          method="POST"
        >
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="w-full p-2 rounded border text-black"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded border text-black"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Preferred Pronouns</label>
            <input
              type="text"
              name="pronouns"
              className="w-full p-2 rounded border text-black"
              placeholder="e.g. he/him, she/her, they/them"
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1">Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 rounded border text-black"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {gender === "Other" && (
              <input
                type="text"
                name="customGender"
                className="mt-2 w-full p-2 rounded border text-black"
                placeholder="Please specify"
                value={customGender}
                onChange={(e) => setCustomGender(e.target.value)}
              />
            )}
          </div>

          <div>
            <label className="block mb-1">Ethnicity</label>
            <select
              name="ethnicity"
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
              className="w-full p-2 rounded border text-black"
              required
            >
              <option value="">Select</option>
              <option value="Asian">Asian</option>
              <option value="Latino">Latino / Hispanic</option>
              <option value="Black">Black / African American</option>
              <option value="White">White</option>
              <option value="Native">Native American / Alaska Native</option>
              <option value="Pacific Islander">Pacific Islander</option>
              <option value="Other">Other</option>
            </select>
            {ethnicity === "Other" && (
              <input
                type="text"
                name="customEthnicity"
                className="mt-2 w-full p-2 rounded border text-black"
                placeholder="Please specify"
                value={customEthnicity}
                onChange={(e) => setCustomEthnicity(e.target.value)}
              />
            )}
          </div>

          <div>
            <label className="block mb-1">Military Service</label>
            <select
              name="militaryStatus"
              value={militaryStatus}
              onChange={(e) => setMilitaryStatus(e.target.value)}
              className="w-full p-2 rounded border text-black"
              required
            >
              <option value="">Select</option>
              <option value="Veteran">Veteran</option>
              <option value="Currently Serving">Currently Serving</option>
              <option value="Not Applicable">Not Applicable</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">
              Resume Link (Google Drive / Dropbox)
            </label>
            <input
              type="url"
              name="resumeLink"
              className="w-full p-2 rounded border text-black"
              placeholder="https://drive.google.com/..."
              required
            />
          </div>

          <div>
            <label className="block mb-1">
              Cover Letter Link (Optional)
            </label>
            <input
              type="url"
              name="coverLetterLink"
              className="w-full p-2 rounded border text-black"
              placeholder="https://dropbox.com/..."
            />
          </div>

          <button
            type="submit"
            className="bg-white text-[#1e3a5f] font-bold py-2 px-4 rounded hover:bg-gray-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
