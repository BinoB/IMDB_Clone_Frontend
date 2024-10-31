import React, { useEffect, useState } from "react";
import { SpinnerImg } from "../../loader/Loader";
import "./ProducerList.css";
import { GiPencil } from "react-icons/gi";
import { VscClose } from "react-icons/vsc";
import { TiFolderOpen } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  deleteProducer,
  getProducers,
  selectIsLoading,
} from "../../../redux/features/producer/producerSlice";
import { Link } from "react-router-dom";

const ProducerList = () => {
  const dispatch = useDispatch();
  const { producers } = useSelector((state) => state.producer);  // Access producers directly
  const isLoading = useSelector(selectIsLoading);  // Check loading state

  // Fetch producers on component load
  useEffect(() => {
    dispatch(getProducers());
  }, [dispatch]);

  const shortenText = (text, n) => {
    if (text.length > n) {
      return text.substring(0, n).concat("...");
    }
    return text;
  };

  const delProducer = async (id) => {
    await dispatch(deleteProducer(id));
    await dispatch(getProducers());  // Refresh producers after deletion
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Producer",
      message: "Are you sure you want to delete this Producer?",
      buttons: [
        {
          label: "Delete",
          onClick: () => delProducer(id),
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
    if (producers && producers.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(producers.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(producers.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, producers]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % producers.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="producer-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Producer List</h3>
          </span>
        </div>

        {isLoading && <SpinnerImg />}

        <div className="table">
          {!isLoading && (!producers || producers.length === 0) ? (
            <p>No Producer found</p>
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
                {currentItems.map((producer, index) => {
                  const { _id, name, gender, dob, bio } = producer;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 16)}</td>
                      <td>{gender}</td>
                      <td>{dob}</td>
                      <td>{bio}</td>
                      <td className="icons">
                        <span>
                          <Link to={`/producer-detail/${_id}`}>
                            <TiFolderOpen size={25} color={"purple"} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-producer/${_id}`}>
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
        {producers && producers.length > 0 && (
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

export default ProducerList;
