import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../../services';
import { Formdatacontext } from '../../pages/Article';
const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const { formData2 } = useContext(Formdatacontext)
  useEffect(async () => {
    console.log(formData2)
    let last = {
      name: formData2.name + '',
      createdAt: new Date(),
      comment: formData2.comment + ''
    }

    const result = await getComments(slug)
    result.reverse()
    if (last.comment !== '' && last.comment !== 'null') {
      result.unshift(last)
    }

    setComments(result);
    // getComments(slug).then((result) => {

    //   let last = {
    //     name: formData2.name,
    //     createdAt: '',
    //     comment: formData2.comment
    //   }
    //   console.log(last)
    //   // result.push(last)
    //   setComments(result);
    //   console.log(result)
    // });
  }, [formData2]);

  // useEffect(() => {

  // }, [formData2]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length}
            {' '}
            条评论
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="transition duration-400 ease border-b border-gray-100 mb-4 pb-4">
              <p className="text-gray-700 mb-4">
                <span className=" font-semibold">{comment.name}</span>
                {' '}
                on
                {' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
