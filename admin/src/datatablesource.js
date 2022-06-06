export const userColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img
            className="cellImg"
            src={
              params.row.img ||
              "https://nbr.gov.bd/uploads/officers-image/no-image-available27.png"
            }
            alt="avatar"
          /> */}
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "country",
    headerName: "Country",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 300,
  },
];
