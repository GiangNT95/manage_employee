export const columnDefs = (deleteEmployee, history, translation) => {
  return (
    [
      {
        headerName: translation('first_name_field'),
        field: "firstName",
        maxWidth: 150
      },
      {
        headerName: translation('last_name_field'),
        field: "lastName",
        minWidth: 150
      },
      {
        headerName: translation('email_address_field'),
        field: "emailAddress",
        maxWidth: 200
      },
      {
        headerName: translation('phone_number_field'),
        field: "phoneNumber",
        minWidth: 150
      },
      {
        headerName: translation('gender_field'),
        field: "gender",
        minWidth: 150
      },
      {
        headerName: translation('action_field'),
        field: "action",
        cellRenderer: "tableActionRender",
        cellRendererParams: {
          delete: function (e) {
            deleteEmployee(e.id);
          },
          update: function (e) {
            history.push(`/employee/edit/${e.id}`);
          }
        },
        minWidth: 50
      }
    ]
  )
}