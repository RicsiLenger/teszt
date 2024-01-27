import React from "react";
import Header from "@/app/ui/homepage/header/header";
import Partners from "../ui/homepage/Partners/partners";
import Users from "../ui/homepage/users/users";
import UsersLog from "../ui/homepage/userslog/userslog";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex-wrap items-center justify-between m-0 p-0 md:flex ">
        <div className="flex-1">
          <Partners />
          <UsersLog />
        </div>
        <div className="flex-1">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default page;
