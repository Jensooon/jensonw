const projectArray = [
  {
    id: 1,
    name: "WPF Calendar",
    description: "A simple calendar application built with WPF and C#.",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description 2",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description 3",
  },
];

const ProjectList = () => {
  return (
    <div className="overflow-x-auto mt-20">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm dark:divide-gray-700">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              Project Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {projectArray.map((project) => (
            <tr key={project.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                {project.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                {project.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProjectList;
