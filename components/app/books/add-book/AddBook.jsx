"use client";
import React from "react";
import { useForm } from "react-hook-form";
// import { input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AddBook() {
  const [groupValue, setGroupValue] = useState({
    author: [],
    publisher: [],
    category: [],
  });
  const [groupInput, setGroupInput] = useState({
    author: "",
    publisher: "",
    category: "",
  });
  const {
    setError,
    clearErrors,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (groupValue.author.length === 0) {
      console.log("tt");
      setError("author", {
        type: "manual",
        message: "At least one author is required",
      });
      return;
    }
    console.log(data);
    reset();
  };

  const handleKeyDOwn = (e) => {
    const name = e.target.name;

    // reusable backspace function for removing input tag array item
    const backspaceFunction = (setGroupValue, name) => {
      setGroupValue((prev) => {
        let updatedAuthors = prev[name].slice(0, -1);
        setValue(name, updatedAuthors);
        return {
          ...prev,
          [name]: updatedAuthors,
        };
      });
    };

    // reusable input inserting function it will fill-up setGroupValue array
    const insertingFunction = (setGroupValue, setGroupInput, name) => {
      const trimmedValue = groupInput[name].trim();
      if (trimmedValue && !groupValue[name].includes(trimmedValue)) {
        const updatedValue = [...groupValue[name], trimmedValue];
        setGroupValue((prev) => ({
          ...prev,
          [name]: updatedValue,
        }));
        setValue(name, updatedValue);
        clearErrors(name);

        // setAuthor([...author, trimmedValue]);
        setGroupInput({ [name]: "" });
      } else {
        toast.warning(`${groupInput[name]} already exists !`);
      }
    };

    // main logic block array insert pressing by comma (",") button
    if (e.key === ",") {
      e.preventDefault();
      if (name === "author") {
        insertingFunction(setGroupValue, setGroupInput, name);
      } else if (name === "publisher") {
        insertingFunction(setGroupValue, setGroupInput, name);
      } else if (name === "category") {
        insertingFunction(setGroupValue, setGroupInput, name);
      }
      // removing input tag array item pressing by backspace button
    } else if (e.key === "Backspace") {
      if (name === "author" && !groupInput.author.length > 0) {
        backspaceFunction(setGroupValue, "author");
      } else if (name === "category" && !groupInput.category.length > 0) {
        backspaceFunction(setGroupValue, "category");
      } else if (name === "publisher" && !groupInput.publisher.length > 0) {
        backspaceFunction(setGroupValue, "publisher");
      }
    }
  };

  // clicking cross button remove input tag
  const handleRemove = (index, name, e) => {
    e.preventDefault();
    const updated = groupValue[name].filter((_, i) => i !== index);
    setGroupValue((prev) => ({
      ...prev,
      [name]: updated,
    }));
    setValue(name, updated);

    // if (updated.length === 0) {
    //   setError("authors", {
    //     type: "manual",
    //     message: "At least one author is required",
    //   });
    // }
  };

  // input onchange handler function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-lg border-0">
          <CardHeader className=" from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-brandColor">
              <span>📚</span>Add New Book
            </CardTitle>
            <CardDescription>
              Enter the book details to add it to the library
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brandColor">
                    ISBN/Barcode <span className="text-red-600">*</span>
                  </label>
                  <input
                    placeholder="Enter Barcode"
                    type="text"
                    {...register("isbn", { required: "ISBN is required" })}
                    className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-brandColor w-full"
                  />
                  {errors.isbn && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.isbn.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brandColor">
                    Title{" "}
                    <span className="text-red-600">
                      <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    placeholder="Book Title"
                    type="text"
                    {...register("title", { required: "Title is required" })}
                    className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-brandColor w-full"
                  />
                  <input type="hidden" {...register} />
                  {errors.title && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brandColor">
                    Edition
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 1"
                    {...register("edition")}
                    className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-brandColor w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brandColor">
                    Author <span className="text-red-600">*</span>
                  </label>
                  <div className="border flex items-center gap-2 border-gray-300 rounded-lg py-2 px-3 focus-within:border-transparent focus-within:ring-1 focus-within:ring-brandColor">
                    {groupValue.author.map((a, i) => (
                      <span
                        key={i}
                        className="flex gap-1 bg-amber-400 rounded-2xl py-1 px-2 justify-around items-center"
                      >
                        <p className="text-[10px]">{a}</p>
                        <button
                          onClick={(e) => handleRemove(i, "author", e)}
                          className="text-[10px]"
                        >
                          ❌
                        </button>
                      </span>
                    ))}
                    <input
                      onChange={handleChange}
                      onKeyDown={handleKeyDOwn}
                      name="author"
                      value={groupInput.author}
                      placeholder="Multiple authors separated by comma"
                      type="text"
                      className="w-full outline-none border-none pl-1"
                    />
                    <input
                      type="hidden"
                      {...register("author", {
                        required: "Author is required",
                      })}
                    />
                  </div>
                  {errors.author && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.author.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brandColor">
                    Category <span className="text-red-600">*</span>
                  </label>
                  <div className="border flex items-center gap-2 border-gray-300 rounded-lg py-2 px-3 focus-within:border-transparent focus-within:ring-1 focus-within:ring-brandColor">
                    {groupValue.category.map((a, i) => (
                      <span
                        key={i}
                        className="flex gap-1 bg-amber-400 rounded-2xl py-1 px-2 justify-around items-center"
                      >
                        <p className="text-[10px]">{a}</p>
                        <button
                          onClick={(e) => handleRemove(i, "category", e)}
                          className="text-[10px]"
                        >
                          ❌
                        </button>
                      </span>
                    ))}
                    <input
                      onKeyDown={handleKeyDOwn}
                      onChange={handleChange}
                      name="category"
                      value={groupInput.category}
                      placeholder="Multiple category separated by comma"
                      type="text"
                      className="border border-gray-300 rounded-lg w-full outline-none border-none pl-1"
                    />
                    <input
                      type="hidden"
                      {...register("category", {
                        required: "Category is required",
                      })}
                    />
                  </div>
                  {errors.category && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brandColor">
                    Publisher <span className="text-red-600">*</span>
                  </label>
                  <div className="border flex items-center gap-2 border-gray-300 rounded-lg py-2 px-3 focus-within:border-transparent focus-within:ring-1 focus-within:ring-brandColor">
                    {groupValue.publisher.map((a, i) => (
                      <span
                        key={i}
                        className="flex gap-1 bg-amber-400 rounded-2xl py-1 px-2 justify-around items-center"
                      >
                        <p>{a}</p>
                        <button
                          onClick={(e) => handleRemove(i, "publisher", e)}
                          className="text-[10px]"
                        >
                          ❌
                        </button>
                      </span>
                    ))}
                    <input
                      onKeyDown={handleKeyDOwn}
                      onChange={handleChange}
                      name="publisher"
                      value={groupInput.publisher}
                      placeholder="Multiple publisher separated by comma"
                      type="text"
                      className="flex-1 outline-none min-w-[120px] text-sm  bg-transparent"
                    />
                    <input
                      type="hidden"
                      {...register("publisher", {
                        required: "Publisher is required",
                      })}
                    />
                  </div>
                  {errors.publisher && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.publisher.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 justify-end pt-6 border-t">
                <Button type="button" variant="outline" onClick={() => reset()}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-brandColor hover:bg-blue-700"
                >
                  Add Book
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
