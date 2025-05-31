import React, { useRef, useState } from "react";
import "@fontsource/ruda";

const themeBlue = "bg-gradient-to-r from-[#22e6ce] to-[#3479ff]";

const initialRows = [
  {
    creativeType: "Post",
    title: "",
    description: "",
    upload: "",
  },
];

const creativeTypes = [
  "Post",
  "Name",
  "Story",
];

const Creatives = () => {
  const [rows, setRows] = useState(initialRows);

  // One ref per row for file input
  const fileInputRefs = useRef([]);

  const handleInput = (i, field, value) => {
    const updated = [...rows];
    updated[i][field] = value;
    setRows(updated);
  };

  const handleTypeChange = (i, value) => {
    const updated = [...rows];
    updated[i].creativeType = value;
    setRows(updated);
  };

  const handleDelete = (i) => {
    const updated = rows.filter((_, idx) => idx !== i);
    setRows(updated.length ? updated : []);
  };

  const handleAdd = () => {
    setRows([
      ...rows,
      {
        creativeType: creativeTypes[0],
        title: "",
        description: "",
        upload: "",
      },
    ]);
  };

  const handleFileChange = (i, e) => {
    const fileName = e.target.files[0]?.name || "";
    handleInput(i, "upload", fileName);
  };

  // Triggers file input click for a given row
  const triggerFileInput = (i) => {
    if (fileInputRefs.current[i]) {
      fileInputRefs.current[i].click();
    }
  };

  const getPlaceholderByType = (type) => {
    switch (type) {
      case "Post":
        return "event title | date | time | venue";
      case "Name":
      case "Story":
        return "Write here...";
      default:
        return "event title | date | time | venue";
    }
  };

  const getCreativeTypeDisplayText = (type) => {
    return type === "Post" ? "Post (1:1)" : type;
  };

  return (
    <div
      className="w-full max-w-[1141px] mx-auto bg-[#1B1B1B] bg-opacity-80 rounded-xl p-4 md:p-6 flex flex-col gap-6"
      style={{ fontFamily: "Ruda, sans-serif" }}
    >
      {/* Event Creatives */}
      <div>
        <div className="font-bold text-xl mb-2 text-white">
          Event Creatives
        </div>
        <div className="text-sm text-gray-500 mb-4">
          Define all type of creatives you want
        </div>
        <div className="overflow-x-auto mb-6">
          <table
            className="border-separate min-w-[700px] w-full"
            style={{ borderSpacing: "0 8px" }}
          >
            <thead>
              <tr
                style={{
                  background: "#353535",
                  height: "36px",
                }}
              >
                <th className="rounded-tl-lg px-2 py-2 text-xs font-semibold text-white border-r border-[#9C9C9C]">
                  S. no.
                </th>
                <th className="px-2 py-2 text-xs font-semibold text-white border-r border-[#9C9C9C]">
                  Creative Type*
                </th>
                <th className="px-2 py-2 text-xs font-semibold text-white border-r border-[#9C9C9C]">
                  Title*
                </th>
                <th className="px-2 py-2 text-xs font-semibold text-white border-r border-[#9C9C9C]">
                  Description
                </th>
                <th className="px-2 py-2 text-xs font-semibold text-white">
                  Upload/Request
                </th>
                <th className="rounded-tr-lg px-2 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0
                ? null
                : rows.map((row, i) => (
                    <tr key={i} className="align-middle">
                      <td
                        className="px-2 py-1 text-center text-white font-medium align-middle"
                        style={{
                          border: "1px solid #636363",
                          borderRadius: "8px 0 0 8px",
                          borderRight: "1px solid #636363",
                        }}
                      >
                        {i + 1}.
                      </td>
                      <td
                        className="px-2 py-1 align-middle"
                        style={{
                          border: "1px solid #636363",
                          borderLeft: "none",
                          borderRight: "1px solid #636363",
                        }}
                      >
                        <select
                          className="w-full bg-transparent text-white border-none outline-none appearance-none cursor-pointer"
                          value={row.creativeType}
                          onChange={(e) =>
                            handleTypeChange(i, e.target.value)
                          }
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: "right 0.5rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.5em 1.5em",
                            paddingRight: "2.5rem",
                          }}
                        >
                          {creativeTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-[#232323] text-white"
                            >
                              {getCreativeTypeDisplayText(type)}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td
                        className="px-2 py-1 align-middle"
                        style={{
                          border: "1px solid #636363",
                          borderLeft: "none",
                          borderRight: "1px solid #636363",
                        }}
                      >
                        <input
                          placeholder={getPlaceholderByType(row.creativeType)}
                          className="w-full placeholder-[#9C9C9C] bg-transparent border-none text-white text-center outline-none"
                          value={row.title}
                          onChange={(e) =>
                            handleInput(i, "title", e.target.value)
                          }
                        />
                      </td>
                      <td
                        className="px-2 py-1 align-middle"
                        style={{
                          border: "1px solid #636363",
                          borderLeft: "none",
                          borderRight: "1px solid #636363",
                        }}
                      >
                        <input
                          placeholder="Description"
                          className="w-full placeholder-[#9C9C9C] bg-transparent border-none text-white text-center outline-none"
                          value={row.description}
                          onChange={(e) =>
                            handleInput(i, "description", e.target.value)
                          }
                        />
                      </td>
                      <td
                        className="px-2 py-1 align-middle"
                        style={{
                          border: "1px solid #636363",
                          borderLeft: "none",
                          borderRadius: "0 8px 8px 0",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-center">
                          {/* Hidden file input for this row */}
                          <input
                            type="file"
                            ref={el => (fileInputRefs.current[i] = el)}
                            className="hidden"
                            onChange={e => handleFileChange(i, e)}
                          />
                          
                          {/* Conditional rendering based on creative type */}
                          {row.creativeType === "Post" ? (
                            // Post(1:1) - Only File.png button
                            <button
                              type="button"
                              className="bg-[#3B3B3B] rounded px-3 py-2 text-white font-bold text-xs text-center min-w-[70px] hover:opacity-80"
                              style={{ fontFamily: "Ruda, sans-serif" }}
                              onClick={() => triggerFileInput(i)}
                            >
                              📁 {row.upload || "File.png"}
                            </button>
                          ) : (
                            // Name and Story - Upload and Request buttons
                            <>
                              <button
                                type="button"
                                className="bg-[#3B3B3B] rounded px-3 py-2 text-white font-bold text-xs text-center min-w-[70px] hover:opacity-80"
                                style={{ fontFamily: "Ruda, sans-serif" }}
                                onClick={() => triggerFileInput(i)}
                              >
                                📤 Upload
                              </button>
                              <button
                                type="button"
                                className="bg-[#3B3B3B] rounded px-3 py-2 text-[#3479ff] font-bold text-xs text-center min-w-[70px] hover:opacity-80"
                                style={{ fontFamily: "Ruda, sans-serif" }}
                                onClick={() => triggerFileInput(i)}
                              >
                                📋 Request
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-2 py-1 flex items-center gap-2 justify-center align-middle">
                        <button
                          onClick={() => handleDelete(i)}
                          className="w-8 h-8 rounded flex items-center justify-center bg-red-500 hover:bg-red-600"
                          tabIndex={-1}
                          aria-label="Delete"
                        >
                          🗑️
                        </button>
                        {i === rows.length - 1 && (
                          <button
                            onClick={handleAdd}
                            className="w-8 h-8 rounded flex items-center justify-center bg-[#353535] hover:bg-[#464646] text-white"
                            tabIndex={-1}
                            aria-label="Add"
                          >
                            +
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          {/* Add button when all rows deleted */}
          {rows.length === 0 && (
            <div className="flex justify-center mt-2">
              <button
                className="w-8 h-8 rounded flex items-center justify-center bg-[#353535] hover:bg-[#464646] text-white"
                onClick={handleAdd}
                aria-label="Add"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Creatives Performances */}
      <div>
        <div
          className="font-bold text-xl mb-4"
          style={{ color: "#717480" }}
        >
          Creatives Performances
        </div>
        <div className="flex flex-col xl:flex-row gap-6 justify-between items-start">
          {/* Story */}
          <div className="flex flex-col items-start bg-[#171717] rounded-lg px-4 py-4 w-full xl:w-[300px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="font-bold text-base text-white">
                Story(16:9)
              </div>
            </div>
            <input
              className="w-full h-[36px] rounded text-white px-2 mb-4 text-sm outline-none"
              style={{
                backgroundColor: "#464646",
                border: "none",
                fontFamily: "Ruda, sans-serif",
              }}
              placeholder="Event Title | post date"
            />
            <div className="flex gap-2 w-full">
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Like</div>
              </div>
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Share</div>
              </div>
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Comment</div>
              </div>
            </div>
          </div>

          {/* Teaser */}
          <div className="flex flex-col items-start bg-[#171717] rounded-lg px-4 py-4 w-full xl:w-[300px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="font-bold text-base text-white">
                Teaser(9:16)
              </div>
            </div>
            <input
              className="w-full h-[36px] rounded text-white px-2 mb-4 text-sm outline-none"
              style={{
                backgroundColor: "#464646",
                border: "none",
                fontFamily: "Ruda, sans-serif",
              }}
              placeholder="Event Title | post date"
            />
            <div className="flex gap-2 w-full">
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Like</div>
              </div>
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Share</div>
              </div>
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Comment</div>
              </div>
            </div>
          </div>

          {/* Post */}
          <div className="flex flex-col items-start bg-[#171717] rounded-lg px-4 py-4 w-full xl:w-[300px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="font-bold text-base text-white">
                Post(1:1)
              </div>
            </div>
            <input
              className="w-full h-[36px] rounded text-white px-2 mb-4 text-sm outline-none"
              style={{
                backgroundColor: "#464646",
                border: "none",
                fontFamily: "Ruda, sans-serif",
              }}
              placeholder="Event Title | post date"
            />
            <div className="flex gap-2 w-full">
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Like</div>
              </div>
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Share</div>
              </div>
              <div className="bg-[#1C2536] rounded px-3 py-2 text-center flex-1">
                <div
                  className="font-bold text-lg"
                  style={{
                    background: "linear-gradient(to right, #3479FF, #22E6CE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Ruda, sans-serif",
                  }}
                >
                  5008
                </div>
                <div className="text-white text-xs">Comment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className={`${themeBlue} w-full md:w-[120px] h-[40px] rounded-lg font-bold text-lg`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Creatives;
