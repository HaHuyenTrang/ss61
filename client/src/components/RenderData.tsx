import axios from "axios";
import React, { useEffect, useState } from "react";

interface Jobs {
  id: number;
  name: string;
  status: boolean;
}

export default function RenderData() {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [jobId, setJobId] = useState<number>(0);

  //render dữ liệu
  useEffect(() => {
    axios
      .get("http://localhost:3000/jobs")
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  //Xóa
  const deleteJob = (id: number) => {
    axios
      .delete(`http://localhost:3000/jobs/${id}`)
      .then(() => {
        setJobs(jobs.filter((job) => job.id !== id));
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="tab-content job-list" id="ex1-content">
        <div className="tab-pane fade show active">
          {loading && (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          <ul className={`list-group ${loading ? "d-none" : ""}`}>
            {jobs.slice(0, 5).map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                style={{ backgroundColor: "#f4f6f7" }}
              >
                <div>
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={item.status}
                    onChange={() => {}}
                  />
                  {item.status ? <s>{item.name}</s> : <span>{item.name}</span>}
                </div>
                <div className="d-flex gap-3">
                  <i className="fas fa-pen-to-square text-warning" />
                  <i
                    className="far fa-trash-can text-danger"
                    onClick={() => {
                      setShowModal(true);
                      setJobId(item.id);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Model xóa */}
      {showModal && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-header-custom">
              <h5>Xác nhận</h5>
              <i
                className="fas fa-xmark"
                onClick={() => setShowModal(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="modal-body-custom">
              <p>Bạn chắc chắn muốn xóa công việc này?</p>
            </div>
            <div className="modal-footer-footer">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-light"
              >
                Hủy
              </button>
              <button
                onClick={() => deleteJob(jobId)}
                className="btn btn-danger"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
