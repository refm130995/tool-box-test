import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const FileList = () => {
  const [fileList, setFileList] = useState([]);



  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await axios.get("http://localhost:3001/files/data");
        setFileList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFileList();
  }, []);

  return (
    <>
      <h1 className="bg-danger text-white border">React Test App</h1>
      <div className="text-center">
        {fileList.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {fileList.map((file) =>
                file.lines.map((line) => (
                  <tr key={line.text}>
                    <td>{file.file}</td>
                    <td>{line.text}</td>
                    <td>{line.number}</td>
                    <td>{line.hex}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        ) : (
          <p>No hay archivos disponibles</p>
        )}
      </div>
    </>
  );
};

export default FileList;
