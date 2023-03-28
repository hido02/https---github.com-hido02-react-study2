// import React from 'react';
// import { Route } from 'react-router-dom';
// import { Home, About, Posts } from 'pages';
// import Menu from 'components/Menu';
// import ShowPageInfo from '../components/ShowPageInfo';
// import {
//     useLocation,
//     useNavigate,
//     useParams
//   } from "react-router-dom";

//   function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//       let location = useLocation();
//       let navigate = useNavigate();
//       let params = useParams();
//       return (
//         <Component
//           {...props}
//           router={{ location, navigate, params }}
//         />
//       );
//     }
  
//     return ComponentWithRouterProp;
//   }
  
// const withRouterApp = () => {
//     function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//       let location = useLocation();
//       let navigate = useNavigate();
//       let params = useParams();
//       return (
//         <Component
//           {...props}
//           router={{ location, navigate, params }}
//         />
//       );
//     }
  
//     return ComponentWithRouterProp;
//   }
//     console.log("withRouterApp")
//     return (
//         <div>
//             {/* <Route exact path="/" component={Home} />
//       <Route path="/about/:name?" component={About} />
//       <Route path="/posts" component={Posts}/> */}
//       <ShowPageInfo />
//         </div>
//     );
// };

// export default withRouterApp;