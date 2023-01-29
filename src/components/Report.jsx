//import {useState, useEffect,useRef} from 'react'
import { DataGrid } from "@mui/x-data-grid";
import * as XLSX from "xlsx";
import LogoUFU from "./Logo";

const Report = (props) => {
  const columns = [
    { field: "nome", headerName: "Nome", width: 300 },
    {
      field: "dataEntrada",
      headerName: "Data Entrada",
      type: "date",
      width: 130
    },
    { field: "dataColacao", headerName: "Data Colação", width: 130 },
    { field: "estagios", headerName: "Estágios", width: 350 },
    { field: "expPro", headerName: "Experiência na área", width: 350 }
  ];

  const rows = [
    {
      id: 1,
      nome: "Carlos Eduardo Cardoso",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      estagios: "T10",
      expPro: "Estágio T10, Desenvolvedor Backend Algar"
    },
    {
      id: 2,
      nome: "Marcos Vinicius Moraes",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Algar, DevOps Algar",
      estagios: "Algar Telecom"
    },
    {
      id: 3,
      nome: "Davi Lucas da Mota",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Algar, Desenvolvedor Frontend Algar",
      estagios: "Algar Telecom"
    },
    {
      id: 4,
      nome: "Maria Fernanda Lima",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Fullstack Kyros, Desenvolvedor Fullstack Sankhya",
      estagios: "Kyros"
    },
    {
      id: 5,
      nome: "Adama Alvelos Miguel",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Fullstack Zup, Desenvolvedor Fullstack Zup",
      estagios: "Zup"
    },
    {
      id: 6,
      nome: "Lara Carlos Sardinha",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Algar, Desenvolvedor Frontend TQI",
      estagios: "Algar Tech"
    },
    {
      id: 7,
      nome: "Inês Sobral Tedim",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Mobile Kyros, Desenvolvedor Mobile Algar",
      estagios: "Kyros"
    },
    {
      id: 8,
      nome: "José Campos Domingues",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Frontend Algar, Desenvolvedor Frontend Pleno - Amazon",
      estagios: "Algar Tech"
    },
    {
      id: 9,
      nome: "Morgana Flávio Oleiro",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Frontend Algar, Desenvolvedor Frontend Júnior - Algar",
      estagios: "Algar Tech"
    },
    {
      id: 10,
      nome: "Carlos Domingues Alvelos",
      dataEntrada: "03/25/2015",
      dataColacao: "03/25/2019",
      expPro: "Estágio Frontend Algar, Desenvolvedor Frontend Júnior - Algar",
      estagios: "Algar Tech"
    }
  ];

  const exportData = () => {
    const filename = "relatorio-egressos.xlsx";
    const data = rows;
    var ws = XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Egressos");
    XLSX.writeFile(wb, filename);
  };

  return (
    <>
      <LogoUFU />
      <p className="animate-bounce bg-indigo-700">Relatório Egressos UFU</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ height: 655, width: 1400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
      </div>
      <div className="divExport" style={{ marginRight: "20px" }}>
        <input
          type="button"
          className="button"
          value="Exportar dados"
          onClick={() => exportData()}
        />
      </div>
    </>
  );
};

export default Report;
