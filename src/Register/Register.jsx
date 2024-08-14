import { Button, Input } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Register() {
  const [clanName, setClanName] = useState("");
  const [member1ID, setMember1ID] = useState("");
  const [member2ID, setMember2ID] = useState("");
  const [member3ID, setMember3ID] = useState("");
  const [member4ID, setMember4ID] = useState("");
  // const [member5ID, setMember5ID] = useState("");

  const [disableSubmit, setDisableSubmit] = useState(false);

  const [errors, setErrors] = useState({});

  const handleRefresh = () => {
    window.location.href = "/register";
  };

  const handleSubmit = async () => {
    const formBody = {
      clanName,
      member1: member1ID,
      member2: member2ID,
      member3: member3ID,
      member4: member4ID,
      // member5: member5ID,
    };

    axios
      .post("http://pmec2024.onrender.com/register", formBody)
      .then((res) => {
        toast.success("Registered successfully");

        setDisableSubmit(false);
      })
      .catch((error) => {
        if (!error.response) return toast.error("Check your connection");

        toast.error("Unable to register players");
        setErrors({ ...error.response.data.errors });
      });
  };

  const handleBlur = async (memberToValidate, event) => {
    try {
      const res = await axios.post("http://pmec2024.onrender.com/validate", {
        memberId: event.target.value,
      });

      if (res.data.clanMemberExists) {
        setErrors({
          ...errors,
          [memberToValidate]: "Member Already registered",
        });
      } else {
        setErrors({
          ...errors,
          [memberToValidate]: "",
        });
      }
    } catch (error) {
      console.log("Error submitting ");
    }
  };

  return (
    <div className="w-full min-h-screen text-white font-custom bg-light-dark flex lg:justify-center px-10 pt-10 items-center flex-col ">
      <div>
        <i class="las la-pen text-2xl"></i>
        <h1 className="font-bold text-3xl underline">PMEC 2024 Registration</h1>
        <div className="w-96 mt-7">
          <Input
            placeholder="Clan Name"
            onChange={(event) => setClanName(event.currentTarget.value)}
          />
        </div>

        <Input.Wrapper error={errors.member1} className="mt-3">
          <Input
            placeholder="Member 1 ID"
            onChange={(event) => setMember1ID(event.currentTarget.value)}
            onBlur={(event) => {
              handleBlur("member1", event);
            }}
          />
        </Input.Wrapper>

        <Input.Wrapper className="mt-3" error={errors.member2}>
          <Input
            placeholder="Member 2 ID"
            onChange={(event) => setMember2ID(event.currentTarget.value)}
            onBlur={(event) => {
              handleBlur("member2", event);
            }}
          />
        </Input.Wrapper>

        <Input.Wrapper className="mt-3" error={errors.member3}>
          <Input
            placeholder="Member 3 ID"
            onBlur={(event) => {
              handleBlur("member3", event);
            }}
            onChange={(event) => setMember3ID(event.currentTarget.value)}
          />
        </Input.Wrapper>

        <Input.Wrapper className="mt-3" error={errors.member4}>
          <Input
            placeholder="Member 4 ID"
            onBlur={(event) => {
              handleBlur("member4", event);
            }}
            onChange={(event) => setMember4ID(event.currentTarget.value)}
          />
        </Input.Wrapper>
        {/* 
        <Input.Wrapper className="mt-3" error={errors.member5}>
          <Input
            placeholder="Member 5 ID"
            onBlur={(event) => {
              handleBlur("member5", event);
            }}
            onChange={(event) => setMember5ID(event.currentTarget.value)}
          />
        </Input.Wrapper> */}

        <div className="mt-5">
          <Button
            variant="filled"
            onClick={handleSubmit}
            disabled={disableSubmit}
            size="md"
          >
            Register
          </Button>
          <Button
            variant="filled"
            className="ml-5"
            onClick={handleRefresh}
            size="md"
          >
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
