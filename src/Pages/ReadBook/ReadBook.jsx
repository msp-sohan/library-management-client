import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBookById from '../../hooks/useBookById';

const ReadBook = () => {
   const { id } = useParams();
   const [numPages, setNumPages] = useState(0);
   // eslint-disable-next-line no-unused-vars
   const [pageNumber, setPageNumber] = useState(1);
   const [pdfContent, setPdfContent] = useState([]);
   const { data, refetch } = useBookById({ id });

   const text = data?.LongDescription;

   const calculatePages = (text) => {
      const pageSize = 1000;
      const totalPages = Math.ceil(text.length / pageSize);
      const pages = Array.from({ length: totalPages }, (v, i) =>
         text.slice(i * pageSize, (i + 1) * pageSize)
      );
      return { pages, totalPages };
   };

   useEffect(() => {
      if (text) {
         const { pages, totalPages } = calculatePages(text);
         setPdfContent(pages);
         setNumPages(totalPages);
      }
   }, [text]);

   useEffect(() => {
      if (window.performance) {
         refetch()
      }
   }, [refetch])

   return (
      <div className="max-w-[1000px] mx-auto mt-32 p-2">
         <h1 className="text-2xl font-bold mb-4 text-center">Read Book</h1>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-7 lg:grid-cols-12'>
            <div className='md:col-span-3 lg:col-span-4'>
               <img src={data?.BookImage} alt="w-96" />
            </div>
            <div className='md:col-span-4 lg:col-span-8'>
               {pdfContent.map((pageText, index) => (
                  <div key={index + 1} className="mb-4 p-4 bg-white text-base border text-justify ">
                     {pageText}
                  </div>
               ))}
            </div>
         </div>
         <p className="mt-4 text-center">Page {pageNumber} of {numPages}</p>
      </div>
   );
};

export default ReadBook;
