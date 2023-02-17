
// import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import AppLayout from 'components/Layout';
import WorkExperience from 'pages/WorkExperience/WorkExperience';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Skills = lazy(() => import('pages/Skills/Skills.jsx'));
const About = lazy(() => import('pages/About/About.jsx'));
const IT = lazy(() => import('pages/IT/IT.jsx'));
const Other = lazy(() => import('pages/Other/Other.jsx'));
const Contacts = lazy(() => import('pages/Contacts/Contacts.jsx'));


const App = () => {
  return (
    <Suspense fallback={<PropagateLoader color="#41d61f" />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path='work-experience' element={<WorkExperience />}>
            <Route path='it' element={<IT />} />
            <Route path='other' element={<Other/>} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          {/* <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          <Route path="*" element={<Navigate to='/'/>} />
        </Route>
      </Routes>
      </Suspense>
  );
};

export default App;