import React, { useEffect, useState } from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { DollarSignIcon, UsersIcon } from "lucide-react";
import axiosClient from "@/utils/axios";
import { Link } from "react-router-dom";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const LandingPage = () => {
  const [users, setUsers] = useState();
  const [investors, setInvestors] = useState();
  const [startups, setStartups] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await axiosClient.get("user/getAll");
      setUsers(usersData.data.length);

      const startupData = await axiosClient.get("startup/getAll");
      setStartups(startupData.data.length);

      const investorsData = await axiosClient.get("investor/getAll");
      setInvestors(investorsData.data.length);
    };
    fetchData();
  }, []);

  const logoutFunction = () => {
    localStorage.removeItem("email");
    window.location.reload();
  };
  return (
    <div className="flex flex-col ">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <Link to="/">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
            </Link>{" "}
            <DropdownMenuSeparator />
            <Link to="/users">
              <DropdownMenuItem>Users</DropdownMenuItem>
            </Link>
            <Link to="/investors">
              <DropdownMenuItem>Investors</DropdownMenuItem>
            </Link>
            <Link to="/startups">
              <DropdownMenuItem>Startups</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logoutFunction}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="w-full h-[30vh] flex flex-col justify-center items-center ">
        <h1 className=" font-semibold text-4xl">Admin Panel Hub</h1>
        <h1 className="mt-5 font-normal text-lg">
          Streamline Control, Simplify Management{" "}
        </h1>
      </div>
      <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3">
        <Link to="/users">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{users - 1}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/users">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Investors</CardTitle>
              <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{investors}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/users">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Startups</CardTitle>
              <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{startups}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export const logoutFunction = () => {
  localStorage.removeItem("email");
  window.location.reload();
};
