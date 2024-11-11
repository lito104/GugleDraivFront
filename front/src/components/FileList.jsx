import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import fileService from '../services/fileService';

function FileList() {

  const [files, setFiles] = useState([]);
  const [searchText, setSearchText] = useState('');

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

  const filteredFiles = files.filter((file) =>
    file.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ height: 500, width: '100%' }}>
      <TextField
        label="Buscar archivo"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} 
      />
      <DataGrid
        rows={filteredFiles}
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
