import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import fileService from '../services/fileService';

function FileList() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const data = await fileService.getAllFiles();

      const formattedFiles = data.map((file, index) => ({
        id: file.id,         
        nombre: file.fileName, 
        path: file.filePath,   
      }));

      console.log(data);
      setFiles(formattedFiles);
    };
    fetchFiles();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={files}
        columns={[
          { field: 'id', headerName: 'Id', width: 150 },
          { field: 'nombre', headerName: 'Nombre', width: 250 },
          { 
            field: 'path', 
            headerName: 'Path', 
            width: 250, 
            renderCell: (params) => (
              <a href={params.value} target="_blank" rel="noopener noreferrer">
                {params.value}
              </a>
            )
          }
        ]}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}

export default FileList;
