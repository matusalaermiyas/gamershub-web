import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function RegisteredClans() {
  const [registerdClans, setRegisterdClans] = useState([]);

  useEffect(() => {
    const fetchRegisteredClans = async () => {
      try {
        const res = await axios.get(
          "http://192.168.101.27:9090/registered-users"
        );

        console.log(res);

        setRegisterdClans(res.data.data);
      } catch (ex) {
        console.log(ex);
        toast.error("Unable to fetch clans");
      }
    };

    fetchRegisteredClans();
  }, []);

  const getClanCard = (clanData) => {
    return (
      <div className="bg-gray-50 rounded-lg text-black h-64 w-96 mt-5 p-5">
        <h1 className="font-bold mb-3">
          <i className="las la-skull-crossbones mr-2"></i> Clan Name{" "}
          <i className="las la-arrow-right"></i> {clanData.name}
        </h1>
        <ol className="list-decimal list-inside pl-7">
          {...clanData.members.map((cm) => getClanMembers(cm))}
        </ol>
      </div>
    );
  };

  const getClanMembers = (clanMemberData) => {
    return <li className="mb-2">{clanMemberData.memberId}</li>;
  };

  return (
    <div className="h-screen w-full text-white font-custom bg-light-dark flex flex-col px-10 pt-5 lg:justify-center items-center  ">
      <h1 className="text-3xl font-bold mt-5 underline">
        <i className="las la-list-ol"></i> Registered Clans
      </h1>
      {...registerdClans.map((c) => getClanCard(c))}
    </div>
  );
}

export default RegisteredClans;
