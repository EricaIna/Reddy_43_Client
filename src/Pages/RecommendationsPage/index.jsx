import React, { useState, useEffect } from "react";
import { ListCard } from "../../Components";
import "./RecommendationPage.css";
import { motion } from "framer-motion";

const RecommendationsPage = () => {
  const [list, setList] = useState([]);

  const [newTitle, setNewTitle] = useState(""); // State for the new title

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const options = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        };

        console.log("options=", options);
        const response = await fetch(
          "http://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/recommendations_list",
          options
        );
        const data = await response.json();
        console.log("After fetching Data");
        console.log("Data=", data.data[0]);
        setList(data.data);
      } catch (error) {
        console.log("Error Fetching Data ", error);
      }
    };

    fetchLists();
  }, []);

  const handleAddToList = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ title: newTitle }), // Add other properties as needed
      };

      const response = await fetch(
        "http://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/recommendations_list",
        options
      );
      const data = await response.json();

      // Update the list with the new data
      setList([...list, data.data]);

      // Clear the input field after adding a new element
      setNewTitle("");
    } catch (error) {
      console.log("Error Adding to List", error);
    }
  };

  const handleDeleteFromList = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      };

      const response = await fetch(
        `http://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/recommendations_list/${id}`,
        options
      );

      if (response.ok) {
        // Remove the deleted item from the list
        setList((prevList) => prevList.filter((item) => item.id !== id));
        console.log(`Movie with ID ${id} deleted successfully`);
      } else {
        console.log(`Error deleting movie with ID ${id}`);
      }
    } catch (error) {
      console.log("Error Deleting from List", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="reco-body"
    >
      <h1 className="title list-h1 ">Lists of movies</h1>
      <div className="container">
        <form className="form-container" onSubmit={handleAddToList}>
          <label className="label-new-list white-font">
            Create a new list
            <input
              type="text"
              className="nameOfnewList"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="create-button-add">
            Add
          </button>
        </form>
        <div className="list-form-wrapper">
          <div className="list-and-form">
            {list.map((lis) => (
              <ListCard
                key={lis.id}
                id={lis.id}
                title={lis.title}
                onDelete={handleDeleteFromList}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecommendationsPage;
