import { useEffect, useState } from "react";
import "./Teams.css";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://hapi-toys-server-sahariarsupto.vercel.app/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });
  }, []);

  return (
    <div>
      <p className="text-[#f74356] font-extrabold text-center text-5xl m-5">
        Meet Our Top rated Toy Designers for Your Kids
      </p>
      <div className="flex text-center justify-center m-5">
        {teams.map((team) => (
          <div
            className="teams rounded-xl p-10 text-center font-bold bg-slate-100 mx-5"
            key={team.id}
          >
            <img src={team.image} alt={team.name} />
            <p className="mt-2">Name: {team.name}</p>
            <p className="mt-2">Experience: {team.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
