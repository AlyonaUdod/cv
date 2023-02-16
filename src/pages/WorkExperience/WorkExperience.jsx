import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';

const WorkExperience = () => {
  return (
    <div>
      WorkExperience
      <Suspense fallback={<PropagateLoader color="#41d61f" />}>
      <Outlet/>
      </Suspense>

    </div>
  );
};

export default WorkExperience;