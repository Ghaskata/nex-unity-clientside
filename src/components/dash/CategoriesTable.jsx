import { Button } from "../ui/Button";
import Input from "../ui/Input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { ArrowLeft, ArrowRight, Pen, Trash2 } from "lucide-react";
import React, { useState } from "react";

const data = [
  {
    id: "1",
    image: "/images/p1.png",
    category: "snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Disabled",
  },
  {
    id: "2",
    image: "/images/p1.png",
    category: "snack",
    title: "Seeds of Change Organic  & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Active",
  },

  {
    id: "3",
    image: "/images/p1.png",
    category: "fruits",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Archived",
  },

  {
    id: "4",
    image: "/images/p1.png",
    category: "fruits",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Active",
  },
  {
    id: "5",
    image: "/images/p1.png",
    category: "snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Disabled",
  },
  {
    id: "2",
    image: "/images/p1.png",
    category: "snack",
    title: "Seeds of Change Organic  & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Active",
  },

  {
    id: "3",
    image: "/images/p1.png",
    category: "fruits",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Archived",
  },

  {
    id: "4",
    image: "/images/p1.png",
    category: "fruits",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Active",
  },
  {
    id: "5",
    image: "/images/p1.png",
    category: "snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: "3.5",
    price: "699",
    oldPrice: "799",
    date: "02.11.2011",
    status: "Disabled",
  },
];

export function CategoriesTable() {
  const [category, setselectedCategory] = React.useState("All");
  const [status, setselectedstatus] = React.useState("All");
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(Math.ceil(data.length / 5));
  console.log("total page >>> ", totalPages);
  var indexOfLastItem = page * 5;
  const indexOfFirstItem = indexOfLastItem - 5;

  return (
    <div className="w-full">
      <div className="rounded-xl w-full text-black text-center text-12  shadow bg-white">
        <div className="p-5 xxl:p-8 w-full flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full">
            <Input
              className="bg-lightGray px-5 w-full text-12 lg:text-14 max-w-2xl"
              placeholder="Search"
            />
          </div>
          <div className="gap-5 hidden sm:flex">
            {/* <StatusFilter selectedcategory={status} setselectedcategory={setselectedstatus}/>
                        <CategoryFilter selectedcategory={category} setselectedcategory={setselectedCategory} /> */}
          </div>
        </div>
        <div className=" p-5 xxl:p-8 text-black text-center text-12 border-t">
          <Table className="border-none">
            <TableHeader className=" bg-lightGray text-black rounded-lg h-14 xl:h-16 overflow-hidden border-none ">
              <TableRow className="py-5 border-none rounded-lg">
                <TableHead className="text-center text-14 xl:text-16">
                  No
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Product
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Amount
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Category
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Stock Status
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  date
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter((item) =>
                  category === "All" ? item : item.category === category
                )
                .filter((item) =>
                  status === "All" ? item : item.status === status
                )
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((product) => (
                  <TableRow
                    key={product.id}
                    className="border-y first:border-t-0"
                  >
                    <TableCell>{product.id}</TableCell>
                    <TableCell>
                      <div className="w-full flex-col md:flex-row lg:flex-col xl:flex-row  flex  gap-2 xl:gap-5 items-center min-w-[150px]">
                        <div className="image_cntainer w-[70px] h-[70px] flex-shrink-0 overflow-hidden bg-textGray/50 rounded-lg">
                          <img
                            src={"/images/p1.png"}
                            width={50}
                            height={50}
                            alt="logo"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex-grow">
                          <h2 className="lowercase text-12 md:text-14 xxl:text-16 ">
                            {product.title}
                          </h2>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-center text-16 lg:text-18 font-semibold text-darkGreen">
                        $ {product.price}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-center text-sm  text-textGray">
                        {product.category}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="w-full flex items-center justify-center">
                        <div
                          className={`capitalize py-1 px-3 rounded-full
                                                    ${
                                                      product.status ===
                                                        "Active" &&
                                                      "bg-lightGreen text-darkGreen"
                                                    }
                                                    ${
                                                      product.status ===
                                                        "Disabled" &&
                                                      "bg-red-600/30 text-red-700"
                                                    }
                                                    ${
                                                      product.status ===
                                                        "Archived" &&
                                                      "bg-yellow-400/30 text-yellow-700"
                                                    }`}
                        >
                          {product.status}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-center text-sm  text-textGray">
                        {product.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-end justify-end gap-2">
                        <Button className="bg-darkGreen border text-12 lg:text-14 border-darkGreen text-white hover:bg-white hover:text-darkGreen transition-all duration-300 ease-linear px-3 flex  gap-2 h-10 rounded-lg">
                          <Pen className="h-4 w-4" />
                          <h5 className="hidden xl:block">Edit</h5>
                        </Button>
                        <Button className="bg-white border text-12 lg:text-14 border-black text-black hover:border-red-700 hover:bg-red-600/20 hover:text-red-700 transition-all duration-300 ease-linear px-3 flex  gap-2 h-10 rounded-lg">
                          <Trash2 className="h-4 w-4 " />
                          <h4 className="hidden xl:block">Delete</h4>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="pagination  flex justify-between items-center w-full py-10">
        <button onClick={() => setpage(page - 1)} disabled={page === 1}>
          <Button
            variant={"outline"}
            className={`flex gap-1 md:gap-3 ${page === 1 && "bg-transparent"}`}
          >
            <span>
              <ArrowLeft />
            </span>{" "}
            Previous
          </Button>
        </button>
        <div className="sm:flex justify-center items-center gap-2 hidden">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              onClick={() => setpage(i + 1)}
              className={`${
                page === i + 1
                  ? "bg-darkGreen text-white hover:bg-darkGreen hover:text-white"
                  : "hover:bg-lightGreen"
              } border-none w-[30px] h-[30px] rounded`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setpage(page + 1)}
          disabled={page === totalPages}
        >
          <Button
            variant={"outline"}
            className={`flex gap-1 md:gap-3 ${
              page === totalPages && "bg-transparent"
            }`}
          >
            Next{" "}
            <span>
              <ArrowRight />
            </span>
          </Button>
        </button>
      </div>
    </div>
  );
}
