export default function Pagination({ limit, skip, setLimit, setSkip }) {
  const handlePrevious = () => {
    if (skip === 0) {
      setLimit(10);
      setSkip(0);
    } else {
      setLimit(limit - 10);
      setSkip(skip - 10);
    }
  };
  const handleNext = () => {
    if (skip === 90) {
      setLimit(100);
      setSkip(90);
    } else {
      setLimit(limit + 10);
      setSkip(skip + 10);
    }
  };
  return (
    <>
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900 ">{skip + 1}</span>{' '}
        to <span className="font-semibold text-gray-900 ">{limit}</span> of{' '}
        <span className="font-semibold text-gray-900 ">100</span> Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={handlePrevious}
          className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </>
  );
}
