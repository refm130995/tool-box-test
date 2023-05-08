import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import FileList from "../fileList";

jest.mock("axios");

describe("FileList", () => {
  it("should render 'No hay archivos disponibles' if there are no files", async () => {
    axios.get.mockResolvedValue({ data: [] });
    render(<FileList />);
    const message = await screen.findByText("No hay archivos disponibles");
    expect(message).toBeInTheDocument();
  });

  it("should render the file list table if there are files", async () => {
    const mockData = [
      {
        file: "test1.txt",
        lines: [
          { text: "Line 1", number: 1, hex: "0x01" },
          { text: "Line 2", number: 2, hex: "0x02" },
        ],
      },
      {
        file: "test2.txt",
        lines: [{ text: "Line 1", number: 1, hex: "0x01" }],
      },
    ];
    axios.get.mockResolvedValue({ data: mockData });
    render(<FileList />);
    await waitFor(() => {
      expect(screen.getByText("File Name")).toBeInTheDocument();
    });
    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByText("Number")).toBeInTheDocument();
    expect(screen.getByText("Hex")).toBeInTheDocument();
    expect(screen.getByText("test1.txt")).toBeInTheDocument();
    expect(screen.getByText("test2.txt")).toBeInTheDocument();
    expect(screen.getByText("Line 1")).toBeInTheDocument();
    expect(screen.getByText("Line 2")).toBeInTheDocument();
  });

  it("should handle errors when fetching file list", async () => {
    axios.get.mockRejectedValue(new Error("Something went wrong"));
    render(<FileList />);
    const error = await screen.findByText("Something went wrong");
    expect(error).toBeInTheDocument();
  });
});
