import React from "react";
import RenderData from "./RenderData";
import AddJob from "./AddJob";

export default function TodoList() {
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <form className="d-flex justify-content-center align-items-center mb-4">
                    {/* Input thêm job */}
                    <AddJob></AddJob>
                  </form>
                  {/* Tabs navs */}
                  <ul className="nav nav-tabs mb-4 pb-2">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link">Đã hoàn thành</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link">Chưa hoàn thành</a>
                    </li>
                  </ul>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <RenderData></RenderData>
                </div>
                <div className="btn-delete-jobs">
                  <button type="button" className="btn btn-danger">
                    Xóa công việc hoàn thành
                  </button>
                  <button type="button" className="btn btn-danger">
                    Xóa tất cả công việc
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal cảnh báo lỗi */}
      <div className="overlay" hidden>
        <div className="modal-custom">
          <div className="modal-header-custom">
            <h5>Cảnh báo</h5>
            <i className="fas fa-xmark" />
          </div>
          <div className="modal-body-custom">
            <p>Tên công việc không được phép để trống.</p>
          </div>
          <div className="modal-footer-footer">
            <button className="btn btn-light">Đóng</button>
          </div>
        </div>
      </div>
    </>
  );
}
