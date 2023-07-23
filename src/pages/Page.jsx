import React from 'react';
import { useParams } from 'react-router-dom';

const Page = () => {
  const { name } = useParams();
  return (
    <div>
      Page {name}
      <p>this page exists, but doesn't have anything in it yet</p>
      <p>if you configure a route that matches this one, your page will appear here</p>
    </div>
  )
}

export default Page