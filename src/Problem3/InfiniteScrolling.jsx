import React, { useState, useEffect, useRef } from "react";

const InfiniteScrolling= () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [data]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading && hasMore) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, index) => ({
        id: pageNumber * 10 + index,
        title: `Item ${pageNumber * 10 + index + 1}`,
      }));
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
      setHasMore(pageNumber < 100); // Stop loading after 5 pages
    }, 1000);
  };

  return (
    <div>
      <h1>Infinite Scrolling</h1>
      {data.map((item) => (
        <div key={item.id} className="item">
          {item.title}
        </div>
      ))}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !hasMore && <div>No more items to load</div>}
      <div ref={loader}></div>
    </div>
  );
};

export default InfiniteScrolling;
