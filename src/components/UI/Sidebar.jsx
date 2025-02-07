import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="flex flex-col shadow-lg justify-between max-xl:hidden xl:h-screen xl:overflow-y-auto xl:fixed xl:w-60 bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div>
        <h1 className="text-center my-10 text-3xl font-semibold whitespace-nowrap dark:text-white">
          CRYPTO<span className="text-primary">X</span>
        </h1>
        <div className="flex items-center justify-center flex-col gap-3">
          <img
            className="w-28 h-28 rounded-full overflow-hidden shadow-md"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"
            alt="profile"
          />
          <h1>
            {user && (
              <span>
                {user.fname} {user.lname}
              </span>
            )}
          </h1>
        </div>
        <ul className="p-7">
          <li>
            <NavLink
              className="flex items-center my-3 gap-1 cursor-pointer hover:text-white hover:bg-primary duration-200 ease-in-out p-2 rounded-lg hover:shadow-inner"
              to="/home"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5E7FA6" : "",
                  color: isActive ? "white" : "",
                };
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center my-3 gap-1 cursor-pointer hover:text-white hover:bg-primary duration-200 ease-in-out p-2 rounded-lg hover:shadow-inner"
              to="/settings"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#5E7FA6" : "",
                  color: isActive ? "white" : "",
                };
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        onClick={onLogout}
        className="flex items-center justify-center gap-1 cursor-pointer mb-4 hover:bg-primary hover:shadow-inner duration-200 ease-in-out hover:text-white mx-7 p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <span>Sign out</span>
      </div>
    </div>
  );
};

export default Sidebar;