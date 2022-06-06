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

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
