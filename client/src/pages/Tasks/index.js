import React, { useState, useCallback } from "react";
import ManageTask from "./ManageTask";
import ListTasks from "./ListTasks";
import * as icons from "react-icons/fa";
import { Post } from "../../library/api";

function Index() {
  const [Tasks, setTasks] = useState([]);
  const getTasks = useCallback(() => {
    const data = Post("/tasks/", null);
    if (data) setTasks(data);
  }, []);

  return (
    <>
      <div className="page-header">
        <h4>Manage Tasks</h4>
      </div>
      <section className="card">
        <div className="card-header">
          <div className="row"></div>
          <button className="btn" onClick={getTasks}>
            Find
            <icons.FaSearch />
          </button>
          <button className="btn" data-toggle="modal" data-target="#taskModal">
            Add
            <icons.FaPlus />
          </button>
        </div>
        <div className="card-body">
          <ListTasks Tasks={Tasks} />
        </div>
        <ManageTask />
      </section>
    </>
  );
}

export default Index;
