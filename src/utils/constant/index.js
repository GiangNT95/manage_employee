import TableActionRender from "../../components/TableActionRender";
export const frameworkComponents = {
    tableActionRender: TableActionRender
}
export const message = {
    ADD_SUCCESS: 'The employee has been added successfully',
    DELETE_SUCCESS: 'The employee has been deleted.',
    UPDATE_SUCCESS: 'The employee has been updated.',
    ERROR: 'An error ocurred. Please, try it again.'
}
export const menu = [
    {
        id: 1,
        key: "menu_item_home",
        url: "/"
    },
    {
        id: 2,
        key: "menu_item_employee_list",
        url: "/employee/list"
    }
]
export const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
  ]