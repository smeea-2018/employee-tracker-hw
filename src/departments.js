const departmentList = (departments) => {
  return departments.map((department) => ({
    name: department.departmentname,
    value: department.id,
  }));
};
