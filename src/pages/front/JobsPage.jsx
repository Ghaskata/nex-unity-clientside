import React, { useState, useEffect } from "react";
import "./css/JobsPage.css";
import "./css/Jobs";
import Modal from "react-modal";

import Jobs from "./css/Jobs";
import { useSelector } from "react-redux";
import { selectUserData } from "../../reducers/authSlice";

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    description: "",
  });
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (jobs) => {
    console.log(jobs);
    setSelectedJob(jobs);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send application data to backend API
    console.log("Applying for job:", selectedJob); // You can use selectedJob data here for any additional processing
    console.log("Application data:", formData);
    // Reset form data after submission if needed
    setFormData({
      name: "",
      email: "",
      experience: "",
      description: "",
    });

    const applicationData = {
      jobId: selectedJob._id, // Assuming the job ID is stored in the _id field of the selectedJob object
      applicantData: formData,
    };

    fetch("http://localhost:8000/api/v1/job/applyJob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Application submitted successfully");
          closeModal(); // Close the modal after successful submission
        } else {
          throw new Error("Failed to submit application");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // Close modal after submission
    closeModal();
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/job/get")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && Array.isArray(data.data)) {
          // Check if data is defined and is an array
          setJobs(data.data);
          console.log(data.data); // Log the data fetched from the API
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full container py-10 flex justify-center items-center">
      <div class="w-full flex justify-center items-center">
        <div class="searched-jobs">
          <div class="searched-bar flex justify-between items-center">
            <div class="searched-show">
              <h1 className="text-20 font-semibold !text-primary">
                {" "}
                Showing Jobs{" "}
              </h1>
            </div>
            <div className="">
              <button className="create-job-button" onClick={openModal}>
                Create Job
              </button>
            </div>
          </div>

          <div class="job-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((jobs) => (
              <div class="job-card bg-backgroundv1 text-textPrimary w-full">
                <div class="job-card-header">
                  <svg
                    class="logo"
                    viewBox="0 -13 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#feb0a5">
                      <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                      <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                    </g>
                    <path
                      d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                      fill="#feb0a5"
                    />
                  </svg>
                  {/* <img src={jobs.jobImage} /> */}
                </div>

                <div class="job-card-title">
                  <h2> {jobs.title} </h2>
                </div>
                <div class="jobs-card-company">
                  <span>
                    Company Name : <strong> {jobs.companyName} </strong>{" "}
                  </span>
                </div>
                <div class="job-card-subtitle">{jobs.content}</div>
                <div class="job-detail-buttons">
                  <button class="search-buttons detail-button">
                    {" "}
                    {jobs.applicants} applicants{" "}
                  </button>
                </div>
                <div class="job-card-buttons">
                  <button
                    class="search-buttons card-buttons"
                    onClick={() => openModal(jobs)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          className="z-[99999999]"
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Apply for Job: {selectedJob?.title}</h2>
            <form onSubmit={handleSubmit} className="job-application-form">
              <div className="form-group">
                <label>Your Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Experience:</label>
                <input
                  type="text"
                  name="experience"
                  value={formData?.experience}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData?.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default JobsPage;
