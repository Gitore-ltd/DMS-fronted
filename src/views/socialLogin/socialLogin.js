import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { Redirect } from 'react-router-dom';

const SocialLogin = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  let token = null;

  useEffect(() => {
    const x = qs.parse(props.location.search.replace('?', ''));
    token = x.token;
    localStorage.setItem('user-token', token);
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) return <h1>redicting......</h1>;
  if (!isLoading) return <Redirect to="/home" />;
};

export default SocialLogin;
