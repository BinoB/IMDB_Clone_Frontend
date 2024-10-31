import React, { useEffect, useState } from "react";
import { SpinnerImg } from "../../loader/Loader";
import "./ActorList.css";
import { GiPencil } from "react-icons/gi";
import { VscClose } from "react-icons/vsc";
import { TiFolderOpen } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  deleteActor,
  getActors,
  selectIsLoading,
} from "../../../redux/features/actor/actorSlice";
import { Link } from "react-router-dom";

const ActorList = () => {
  const dispatch = useDispatch();
  const { actors } = useSelector((state) => state.actor);  // Access actors directly
  const isLoading = useSelector(selectIsLoading);  // Check loading state

  // Fetch actors on component load
  useEffect(() => {
    dispatch(getActors());
  }, [dispatch]);

  const shortenText = (text, n) => {
    if (text.length > n) {
      return text.substring(0, n).concat("...");
    }
    return text;
  };

  const delActor = async (id) => {
    await dispatch(deleteActor(id));
    await dispatch(getActors());  // Refresh actors after deletion
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Actor",
      message: "Are you sure you want to delete this Actor?",
      buttons: [
        {
          label: "Delete",
          onClick: () => delActor(id),
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  // Pagination setup
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    if (actors && actors.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(actors.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(actors.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, actors]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % actors.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="actor-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Actor List</h3>
          </span>
        </div>

        {isLoading && <SpinnerImg />}

        <div className="table">
          {!isLoading && (!actors || actors.length === 0) ? (
            <p>No Actor found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Bio</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((actor, index) => {
                  const { _id, name, gender, dob, bio } = actor;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 16)}</td>
                      <td>{gender}</td>
                      <td>{dob}</td>
                      <td>{bio}</td>
                      <td className="icons">
                        <span>
                          <Link to={`/actor-detail/${_id}`}>
                            <TiFolderOpen size={25} color={"purple"} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-actor/${_id}`}>
                            <GiPencil size={20} color={"green"} />
                          </Link>
                        </span>
                        <span>
                          <VscClose
                            size={20}
                            color={"red"}
                            onClick={() => confirmDelete(_id)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        {actors && actors.length > 0 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="activePage"
          />
        )}
      </div>
    </div>
  );
};

export default ActorList;


/* import React, { useEffect, useState } from "react";
import { SpinnerImg } from "../../loader/Loader";
import "./ActorList.css";
import { GiPencil} from "react-icons/gi";
import { VscClose } from "react-icons/vsc";
import { TiFolderOpen } from "react-icons/ti";
import Search from "../../search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_ACTORS,
  selectFilteredActors,
} from "../../../redux/features/actor/filterSlice";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  deleteActor,
  getActors,
} from "../../../redux/features/actor/actorSlice";
import { Link } from "react-router-dom";

const ActorList = ({ actors, isLoading }) => {
  const [search, setSearch] = useState("");
  const filteredActors = useSelector(selectFilteredActors);

  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const delActor = async (id) => {
    console.log(id);
    await dispatch(deleteActor(id));
    await dispatch(getActors());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Actor",
      message: "Are you sure you want to delete this Actor.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delActor(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredActors.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredActors.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredActors]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredActors.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  useEffect(() => {
    dispatch(FILTER_ACTORS({ actors, search }));
  }, [actors, search, dispatch]);

  return (
    <div className="actor-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Actor List</h3>
          </span>
          <span className="search-box">
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </div>

        {isLoading && <SpinnerImg />}

        <div className="table">
          {!isLoading && actors.length === 0 ? (
            <p>No Actor found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Bio</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((actor, index) => {
                  const { _id, name, gender, dob, bio } = actor;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 16)}</td>
                      <td>{gender}</td>
                      <td>
                        
                        {dob}
                      </td>
                      <td>{bio}</td>
                      
                      <td className="icons">
                        <span>
                          <Link to={`/actor-detail/${_id}`}>
                            <TiFolderOpen size={25} color={"purple"} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-actor/${_id}`}>
                            <GiPencil size={20} color={"green"} />
                          </Link>
                        </span>
                        <span>
                          <VscClose
                            size={20}
                            color={"red"}
                            onClick={() => confirmDelete(_id)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};

export default ActorList; */
