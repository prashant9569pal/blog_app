// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../redux/store";
// import toast from "react-hot-toast";


// const Header = () => {
//  let isLogin = useSelector((state) => state.isLogin);
//   isLogin = isLogin || localStorage.getItem("userId");
//    const dispatch = useDispatch();
//   const navigate = useNavigate();
  
  
  
//   const [value, setValue] = useState();
//   const handleLogout = () => {
//     try {
//       dispatch(authActions.logout());
//       toast.success("Logout Successfully");
//       navigate("/login");
//       localStorage.clear();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//           <AppBar position='sticky'>
//               <Toolbar>
//                   <Typography variant='h4'>My Blog APP</Typography>
//                   {isLogin && (
//             <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
//               <Tabs
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, val) => setValue(val)}
//               >
//                 <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
//                 <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
//                 <Tab
//                   label="Create Blog"
//                   LinkComponent={Link}
//                   to="/create-blog"
//                 />
//               </Tabs>
//             </Box>
//           )}
          

//             <Box display={"flex"} marginLeft="auto">
//             {!isLogin && (
//               <>
//                 <Button
//                   sx={{ margin: 1, color: "white" }}
//                   LinkComponent={Link}
//                   to="/login"
//                 >
//                   Login
//                 </Button>
//                 <Button
//                   sx={{ margin: 1, color: "white" }}
//                   LinkComponent={Link}
//                   to="/register"
//                 >
//                   Register
//                 </Button>
//               </>
//             )}
//             {isLogin && (
//               <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
//                 Logout
//               </Button>
//             )}
//           </Box>

                  
//               </Toolbar>
           
//           </AppBar>
//     </>
//   )
// }

// export default Header

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin) || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [value, setValue] = useState(0); // Set an initial value for the Tabs component
  
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar position='sticky' sx={{ backgroundColor: "#333" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant='h4' sx={{ flexGrow: 1, color: "#fff" }}>
          My Blog App
        </Typography>
        {isLogin && (
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
            sx={{ flexGrow: 1 }}
          >
            <Tab label="Blogs" component={Link} to="/blogs" sx={{ color: "#fff" }} />
            <Tab label="My Blogs" component={Link} to="/my-blogs" sx={{ color: "#fff" }} />
            <Tab label="Create Blog" component={Link} to="/create-blog" sx={{ color: "#fff" }} />
          </Tabs>
        )}
        <div>
          {!isLogin ? (
            <>
              <Button
                sx={{ marginX: 1, color: "#fff", border: "1px solid #fff" }}
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                sx={{ marginX: 1, color: "#fff", border: "1px solid #fff" }}
                component={Link}
                to="/register"
              >
                Register
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogout}
              sx={{ marginX: 1, color: "#fff", border: "1px solid #fff" }}
            >
              Logout
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
