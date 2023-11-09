import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBookById from '../../hooks/useBookById';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';

const ReadBook = () => {
   const { id } = useParams();
   const [numPages, setNumPages] = useState(0);
   const [pdfContent, setPdfContent] = useState([]);
   const { data, isLoading, refetch } = useBookById({ id });

   const text = data?.result?.[0]?.LongDescription;

   useEffect(() => {
      if (!text) return;

      const pageSize = 1000;
      const totalPages = Math.ceil(text.length / pageSize);
      const pages = Array.from({ length: totalPages }, (v, i) =>
         text.slice(i * pageSize, (i + 1) * pageSize)
      );
      setPdfContent(pages);
      setNumPages(totalPages);
   }, [text]);

   useEffect(() => {
      if (window.performance) {
         refetch();
      }
   }, [refetch]);

   if (isLoading) {
      return <LoaderSpinner></LoaderSpinner>;
   }

   return (
      <div className="max-w-[1000px] mx-auto mt-32 p-2">
         <h1 className="text-2xl font-bold mb-4 text-center">Read Book</h1>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-7 lg:grid-cols-12'>
            <div className='md:col-span-3 lg:col-span-4'>
               <img src={data?.result?.[0]?.BookImage} alt="w-96" />
            </div>
            <div className='md:col-span-4 lg:col-span-8'>
               {pdfContent.map((pageText, index) => (
                  <div key={index + 1} className="mb-4 p-4 bg-white text-base border text-justify ">
                     {pageText}
                  </div>
               ))}
            </div>
         </div>
         <p className="mt-4 text-center">Page {1} of {numPages}</p>
      </div>
   );
};

export default ReadBook;
