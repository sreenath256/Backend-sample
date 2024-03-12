import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import axiosClient from "@/utils/axios";
import { logoutFunction } from "../LandingPage/LandingPage";

const Investors = () => {
  const [investor, setInvestor] = useState([]);

  const [searchResult, setSearchResult] = useState();

  
  useEffect(() => {
    const fetchData = async () => {
      const investors = await axiosClient.get("investor/getAll");
      setInvestor(investors.data);
      console.log(investor);
    };
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredData = investor.filter(entry =>
      Object.values(entry).some(value =>
        String(value).toLowerCase().includes(lowerCaseSearchTerm)
      )
    );

    setSearchResult(filteredData);
    console.log(filteredData);
  };


  return (
    <div>
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
                  class="bi bi-list"
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
              </Link>
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
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search investors..."
                  type="search"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
          
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 overflow-x-scroll">
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">No</TableHead>
                  <TableHead>Full name</TableHead>
                  <TableHead>User id</TableHead>
                  <TableHead>Mobile no</TableHead>
                  <TableHead>Secondary no</TableHead>

                  <TableHead>Country</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Website URL</TableHead>



                  <TableHead>Profile created time</TableHead>
                  <TableHead className="w-[100px]">Restrict</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                searchResult ? 
                searchResult.map((data, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell className="font-medium">
                          {data.fullname}
                        </TableCell>
                        <TableCell className="font-medium">
                          {data._id}
                        </TableCell>
                        <TableCell className="font-medium">{data.mobileNumber}</TableCell>
                        <TableCell className="font-medium">
                          {data.alternativeMobileNumber}
                        </TableCell>
                        <TableCell className="font-medium">
                          {data.country}
                        </TableCell>
                        <TableCell className="font-medium">
                          {data.location}
                        </TableCell>
                        <TableCell className="font-medium">
                          {data.gender}
                        </TableCell>
                        <TableCell className="font-medium">
                          {data.webSiteUrl}
                        </TableCell>
                        <TableCell className="font-medium">
                          {data.createdAt}
                        </TableCell>


                        <TableCell className="font-medium">
                          <Button className="bg-red-500">Remove investor</Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                :
                investor.map((data, index) => {
                    return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell className="font-medium">
                            {data.fullname}
                          </TableCell>
                          <TableCell className="font-medium">
                            {data._id}
                          </TableCell>
                          <TableCell className="font-medium">{data.mobileNumber}</TableCell>
                          <TableCell className="font-medium">
                            {data.alternativeMobileNumber}
                          </TableCell>
                          <TableCell className="font-medium">
                            {data.country}
                          </TableCell>
                          <TableCell className="font-medium">
                            {data.location}
                          </TableCell>
                          <TableCell className="font-medium">
                            {data.gender}
                          </TableCell>
                          <TableCell className="font-medium">
                            {data.webSiteUrl}
                          </TableCell>
                          <TableCell className="font-medium">
                            {data.createdAt}
                          </TableCell>
  
  
                          <TableCell className="font-medium">
                            <Button className="bg-red-500">Remove investor</Button>
                          </TableCell>
                        </TableRow>
                      );
                })}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Investors;

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

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
