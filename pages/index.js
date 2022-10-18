import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import axios from "axios";

const IndexRoute = () => {
  const [homeLoans, setHomeLoans] = useState([]);
  const [pagination, setPagination] = useState({});

  const fetchHomeLoans = (page = undefined) => {
    axios
      .get("/api/home-loans", {
        params: {
          page: page
        }
      })
      .then((response) => {
        console.log(response.data);
        setHomeLoans(response.data.hits);
        setPagination(response.data.meta);
      });
  };

  useEffect(() => {
    fetchHomeLoans();
  }, []);

  return (
    <div>
      <Dashboard
        pagination={pagination}
        homeLoans={homeLoans}
        fetchHomeLoans={fetchHomeLoans}
      />
    </div>
  );
};

export default IndexRoute;
