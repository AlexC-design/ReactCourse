import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  if (resource === "users") {
    return (
      <div>
        <ul>
          {resources.map(record => (
            <li key={record.id}>{record.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
