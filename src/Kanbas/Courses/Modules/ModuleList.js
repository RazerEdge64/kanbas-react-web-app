import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import {
  AiFillCaretDown,
  AiOutlinePlus,
  AiFillCaretRight,
} from "react-icons/ai";
import { HiEllipsisVertical } from "react-icons/hi2";
import { TbGripVertical } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./ModulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.ModulesReducer.modules);
  const module = useSelector((state) => state.ModulesReducer.module);
  const dispatch = useDispatch();

  return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <input
                value={module.name}
                className="form-control"
                onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
                }
            />
            <textarea
                value={module.description}
                className="form-control"
                onChange={(e) =>
                    dispatch(setModule({ ...module, description: e.target.value }))
                }
            />
            <button
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                className="btn btn-success"
            >
              {" "}
              Add
            </button>
            <button
                onClick={() => dispatch(updateModule(module))}
                className="mx-2 my-2 btn btn-primary"
            >
              Update
            </button>
          </li>
          {modules
              .filter((module) => module.course === courseId)
              .map((module, index) => (
                  <Accordion key={index} module={module}>
                    {module.lessons && (
                        <ul className="list-group lesson-list">
                          {module.lessons.map((lesson, index) => (
                              <div key={index} className="module-lesson">
                                <p>{lesson.name}</p>
                                <p>{lesson.description}</p>
                              </div>
                          ))}
                        </ul>
                    )}
                    <div>
                      <TbGripVertical />
                      <AiFillCaretRight
                          size="20px"
                          style={{ paddingRight: "10px" }}
                      />
                      {module.name}
                      <HiEllipsisVertical className="float-end" />
                      <AiOutlinePlus className="float-end" />
                      <AiFillCaretDown className="float-end" />
                      <FaCheckCircle className="float-end" color="green" />
                      <button
                          className="mx-3 btn btn-danger float-end"
                          onClick={() => dispatch(deleteModule(module._id))}
                      >
                        Delete
                      </button>
                      <button
                          className="float-end btn btn-primary"
                          onClick={() => dispatch(setModule(module))}
                      >
                        Edit
                      </button>
                    </div>
                  </Accordion>
              ))}
        </ul>
      </div>
  );
}

export default ModuleList;
