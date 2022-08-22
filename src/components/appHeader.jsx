import React from 'react';

const AppHeader = ({resetWordCounter}) => {
return (
  <div className="header-container container-fluid">
    <i onClick={resetWordCounter} className="fa fa-refresh btn-icon"></i>
    <h1 className="appName">word counter</h1>
  </div>
  );
}
 
export default AppHeader;