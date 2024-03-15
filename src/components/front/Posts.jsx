import React, { useEffect, useMemo, useState } from "react";
import HomeUpcommingEvent from "./HomeUpcommingEvent";
import Post from "./Post";
import HomeCommunitySuggetion from "./HomeCommunitySuggetion";
import HomeFollowSuggestion from "./HomeFollowSuggestion";
import HomeCategoriesSec from "./HomeCategoriesSec";
import { useLocation } from "react-router-dom";
import { getAllPost } from "../../utils/post";
import DataLoadingCompo from "../common/DataLoadingCompo";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import useAxiosPrivate from "../../security/useAxiosPrivate";
import { CATEGORY_API_URL, POST_API_URL } from "../../security/axios";
import HomeTodayEventSuggestion from "./HomeTodayEventSuggestion";
import InfiniteScroll from "react-infinite-scroll-component";

const Posts = () => {
  const [loading, setloading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedCategory = queryParams.get("category");
  const searchCategory = encodedCategory
    ? decodeURIComponent(encodedCategory)
    : null;
  let searchCategoryData = null;

  // useEffect(() => {
  //   const postId = location.state ? location.state.postId : null;
  //   console.log("location : ", location);
  //   if (postId) {
  //     console.log("location post id: ", postId);
  //     const targetElement = document.getElementById(postId);
  //     console.log("traget element ",targetElement);
  //     if (targetElement) {
  //       targetElement.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
      
  //   }
  // }, [location]);

  const [visiblePosts, setVisiblePosts] = useState(3);
  const handleFetchMore = () => {
    setTimeout(() => {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 2);
    }, 2000);
  };

  const axiosPrivate = useAxiosPrivate();

  //posts get api
  const queryKey = useMemo(() => ["publicAndFollowingPosts"], []);
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery(
    queryKey,
    async () => {
      const response = await axiosPrivate.get(
        POST_API_URL.getPublicAndFollowingPost
      );
      return response.data.data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );
  // console.log("all posts >> ", posts);

  // category get api
  const categoriesQueryKey = useMemo(() => ["categories"], []);
  const {
    data: categories,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useQuery(
    categoriesQueryKey,
    async () => {
      const response = await axiosPrivate.get(CATEGORY_API_URL.get);
      return response.data.data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  if (categories || searchCategory) {
    searchCategoryData = categories?.find(
      (category) => searchCategory === category.category_name
    );
  }

  // console.log("searchCategoryData ",searchCategoryData)

  if (isError || categoryError) {
    return (
      <div className="w-full h-[400px] flex justify-center items-center">
        <DataLoadingCompo />
        <h2 className="text-textPrimary text-center text-26">
          Network Error !!!!
        </h2>
      </div>
    );
  }

  if (isLoading || categoryLoading) {
    return <DataLoadingCompo />;
  }

  return (
    <div className="w-full h-full pe-0 lg:pe-[270px] xl:pe-[300px]">
      {(isLoading || categoryLoading) && <DataLoadingCompo />}
      <div className="w-full container">
        <HomeCategoriesSec />
        <InfiniteScroll
          dataLength={visiblePosts}
          next={handleFetchMore}
          hasMore={
            visiblePosts <
            posts.filter((item) =>
              searchCategory
                ? searchCategoryData._id === item.category_id
                : item
            ).length
          }
          loader={
            <div className="h-[200px] w-full flex justify-center items-center ">
              <div className="h-[30px] w-[30px] border-b-2 border-l-2 border-textGray animate-spin rounded-full"></div>
            </div>
          }
          // endMessage={<p>No more Post to load</p>}
        >
          <div className="flex py-5 xxl:py-10 w-full">
            <div className="w-full flex flex-col gap-5">
              {posts
                ?.slice()
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .filter((item) =>
                  searchCategory
                    ? searchCategoryData._id === item.category_id
                    : item
                )
                ?.slice(0, visiblePosts)
                .map((post, index) => (
                  <Post key={index} postData={post} index={index} />
                ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      <div className="fixed end-0 top-0 w-[270px] xl:w-[300px] pt-[100px] h-screen !pb-10 flex-shrink-0 hidden lg:flex  flex-col gap-5  overflow-y-auto post-scroll">
        <HomeTodayEventSuggestion />
        <HomeUpcommingEvent />
        <HomeCommunitySuggetion />
        <HomeFollowSuggestion />
      </div>
    </div>
  );
};

export default Posts;

// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useQuery } from "react-query";
// import { toast } from "react-toastify";
// import useAxiosPrivate from "../../security/useAxiosPrivate";
// import { POST_API_URL, CATEGORY_API_URL } from "../../security/axios";

// // ... (other imports)

// const Posts = () => {
//   // ... (other state and variable declarations)

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const encodedCategory = queryParams.get("category");

//   // Decode the category name from the URL
//   const category = encodedCategory ? decodeURIComponent(encodedCategory) : null;

//   // ... (other code)

//   // Use the category ID when available
//   const queryKey = useMemo(() => [category ? `postsByCategoryId-${category}` : "publicAndFollowingPosts"], [category]);

//   const {
//     data: posts,
//     isLoading,
//     isError,
//     error,
//   } = useQuery(
//     queryKey,
//     async () => {
//       // Use the category ID in the API request if it exists
//       const response = await axiosPrivate.get(
//         category ? `${POST_API_URL.getAllPostsByCategoryId}/${category}` : POST_API_URL.getPublicAndFollowingPost
//       );
//       return response.data.data;
//     },
//     {
//       enabled: true,
//       refetchOnWindowFocus: false,
//     }
//   );

//   // ... (other code)

//   return (
//     <div className="w-full h-full pe-0 lg:pe-[270px] xl:pe-[300px]">
//       {/* ... (other code) */}
//       <div className="container">
//         <HomeCategoriesSec />
//         <div className="flex py-5 xxl:py-10 ">
//           <div className="w-full flex flex-col gap-5">
//             {filteredPosts?.map((post, index) => (
//               <Post key={index} postData={post} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="fixed end-0 top-0 w-[270px] xl:w-[300px] pt-[100px] h-screen !pb-10 flex-shrink-0 hidden lg:flex flex-col gap-5 overflow-y-auto post-scroll">
//         <HomeUpcomingEvent />
//         <HomeCommunitySuggestion />
//         <HomeFollowSuggestion />
//       </div>
//     </div>
//   );
// };

// export default Posts;
