import Email from '@/components/Email';
import Home from '@/components/Home';
import Links from '@/components/Links';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import React from 'react';

const page = () => {
  return (
    <>
      <Links />
      <Home />
      <Stack />
      <Projects />
      <Email />
    </>
  )
}

export default page
