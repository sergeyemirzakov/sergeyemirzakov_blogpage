import { Link } from 'gatsby';
import React from 'react';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="mb-8">
      <Link to="/" className="logo">
        _sergeyemirzakov
      </Link>
    </div>
  );
};
