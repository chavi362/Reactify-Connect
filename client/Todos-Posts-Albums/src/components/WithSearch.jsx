import React, { useState } from 'react';

const withSearch = (WrappedComponent) => {
  return (props) => {
    const dataKey = props.dataKey;
    const [searchTerm, setSearchTerm] = useState({ id: '', title: '' });
    const handleSearchChange = (e) => {
      setSearchTerm({
        ...searchTerm,
        [e.target.name]: e.target.value,
      });
    };
    const filteredData = props[dataKey] ? props[dataKey].filter((item) => {
      return (
        item.id.toString().includes(searchTerm.id) &&
        item.title.toLowerCase().includes(searchTerm.title.toLowerCase())
      );
    }) : [];
    const combinedProps = { ...props, [dataKey]: filteredData };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by id"
                value={searchTerm.id}
                onChange={handleSearchChange}
                name="id"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTerm.title}
                onChange={handleSearchChange}
                name="title"
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="container-fluid">
              <WrappedComponent {...combinedProps} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};
export default withSearch;
