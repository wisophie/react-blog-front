import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Link } from "react-router-dom";

import { getCategories } from '../../services';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-gray-700 text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} to={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} text-gray-700 pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}
