import React from "react";
import ThemeToogle from "./ThemeToogle";

const UserTable = (data) => {
  return (
    <div className="w-full justify-center items-center">
      <table className="w-full justify-center items-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Mode</th>
          </tr>
        </thead>
        {data?.data?.map((item, index) => {
          return (
            <tbody className="">
              <tr className="">
                <td className="">{index + 1}</td>
                <td className="">{item.name}</td>
                <td className="">{item.email}</td>
                <td className="">{item.company.name}</td>
                <td>
                  <ThemeToogle tableIndex={index}/>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default UserTable;
