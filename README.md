# Summary
- React Router >>  https://reactrouter.com/en/main/start/tutorial 

- To create react routre use <RouterProvider>   >>>main.jsx.
- Then use createBrowserRouter() for creating component route/path(url) >>>main.jsx
- Then used <Outlet/> component with parent route element for indicating where a child route element    should be rendered. >>>Home.jsx
- we use <Link> instead of <a> because reloading issue in anchor tag.
- But we use <NavLink> instead of <Link> because navLink provide 'active' class. >>>Header.jsx
- Hook: useNavigate(); used of move one component to other one using button. >>>PostDetails.jsx
- Hook: useLoaderData(); to load data in the required component from the main.jsx file in where data was fetched(loader:) >>>Posts.jsx  Users.jsx
- Hook: useParams(); >>>PostDetails.jsx
- Hook: useNavigation(); used for showing status of loading within few moment >>>Home.jsx
- Hook: useLocation(); used for getting path name >>>Home.jsx
- Hook: useRouteError(); used for showing error message for using wrong pathName >>>ErrorPage.jsx
