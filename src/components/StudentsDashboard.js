import React from "react";

const StudentDashboard = ({ students }) => {
  console.log(students);

  const studentData = students.map(std => (
    <div className="card" key={std.id}>
      <div className="card-header" id={`heading${std.id}`}>
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {std.firstName} {std.lastName}
          </button>
        </h5>
      </div>

      <div
        id={`heading${std.id}`}
        className="collapse show"
        aria-labelledby={`heading${std.id}`}
        data-parent="#accordion"
      >
        <div className="card-body">
          <div>Contacted: {std.isContacted ? "True" : "False"}</div>
          <div>Notes: {std.notes}</div>
          <div>Created At: {std.createdDate.toString()}</div>
        </div>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <h3>Dashboard</h3>
      <div id="accordion">{studentData}</div>
    </React.Fragment>
  );
};
export default StudentDashboard;
