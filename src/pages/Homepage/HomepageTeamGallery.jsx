import React, { useState, useEffect } from "react";
import HomepageTeam from "components/HomepageTeam";

const HomepageTeamGallery = ({ teamData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(teamData.length / itemsPerPage);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentPage, totalPages]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const visibleTeamMembers = teamData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative w-full">
      <div className="flex gap-8 justify-center overflow-hidden">
        {visibleTeamMembers.map((teamMember, index) => (
          <HomepageTeam
            key={index}
            className="w-[210px] flex flex-col gap-8 items-center w-auto transition-opacity duration-4000 ease-in-out"
            username={teamMember.username}
            jobtitle={teamMember.jobtitle}
          />
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full flex items-center justify-between">
        <button
          className="text-gray-900 cursor-pointer"
          onClick={handlePrevPage}
        >
          {"<"}
        </button>
        <button
          className="text-gray-900 cursor-pointer"
          onClick={handleNextPage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default HomepageTeamGallery;

