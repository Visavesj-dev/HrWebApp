import React from "react";
import { NavLink } from "react-router-dom";

//import materials
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//import styles
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Layers as LayersIcon,
  BarChart as BarChartIcon,
  Person as PersonIcon,
} from "@material-ui/icons";
const groupDirectoryIcon = <svg id="Capa_1" enable-background="new 0 0 512 512" height="32" viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg"><g><path d="m71.35 194.672c2.636-6.094 5.556-11.991 8.702-17.66 3.997-7.257 8.391-14.145 13.124-20.693 2.41-3.345 7.115-4.082 10.46-1.672 3.345 2.437 4.082 7.115 1.673 10.459-4.479 6.18-8.532 12.558-12.189 19.163-1.898 3.401-3.685 6.888-5.357 10.403h27.326c4.167 0 7.512 3.345 7.512 7.483v35.518 30.132c0 6.945-1.502 13.55-4.195 19.531 7.881 3.288 14.6 7.483 19.73 12.331 7.37 6.916 11.594 15.222 11.594 24.236v36.595c0 4.139-3.374 7.512-7.513 7.512h-46.574c2.466 4.223 5.102 8.362 7.88 12.359 5.188 7.455 10.856 14.457 16.979 20.948 2.835 3.004 2.693 7.738-.34 10.573-3.005 2.835-7.738 2.692-10.573-.312-6.661-7.115-12.812-14.684-18.368-22.649-4.649-6.69-8.901-13.663-12.729-20.92h-70.98c-4.138 0-7.512-3.373-7.512-7.512v-36.595c0-8.957 4.167-17.178 11.424-24.094 5.159-4.904 11.962-9.156 19.899-12.473-2.693-5.981-4.195-12.586-4.195-19.531v-30.132-12.982c0-8.277 3.373-15.789 8.816-21.231 5.442-5.414 12.955-8.788 21.204-8.788h14.202zm398.527 61.824-39.572-13.408-25.881 12.699v12.019c0 8.986 3.686 17.178 9.609 23.103 5.925 5.924 14.117 9.609 23.103 9.609 9.015 0 17.178-3.685 23.131-9.609 5.925-5.924 9.61-14.117 9.61-23.103zm-65.453-17.348 21.657-10.602c1.785-1.049 3.997-1.332 6.122-.624l37.674 12.756v-15.987c0-4.139-1.674-7.88-4.423-10.602-2.722-2.749-6.463-4.422-10.602-4.422h-35.434c-4.11 0-7.852 1.672-10.602 4.422-2.721 2.721-4.394 6.463-4.394 10.602v14.457zm-362.301-8.986h65.481v-20.494h-50.457c-4.11 0-7.88 1.672-10.602 4.422-2.721 2.721-4.423 6.463-4.423 10.602v5.47zm65.481 14.995h-65.481v22.649c0 8.986 3.686 17.178 9.639 23.103 5.925 5.924 14.117 9.609 23.103 9.609 8.985 0 17.178-3.685 23.102-9.609 5.953-5.924 9.638-14.117 9.638-23.103v-22.649zm181.136 148.338c-10.715 1.559-28.177 1.389-42.661-11.395-5.074 2.948-13.097 6.236-22.819 5.443v18.17c0 8.986 3.686 17.178 9.638 23.131 5.925 5.924 14.116 9.609 23.102 9.609 9.014 0 17.178-3.685 23.131-9.609 5.924-5.953 9.609-14.145 9.609-23.131zm-65.48-20.977c10.914 1.531 18.596-5.613 18.596-5.641l.028.028.17-.17c3.118-2.693 7.823-2.353 10.545.766 11.735 13.493 28.006 12.5 36.142 10.913v-15.817c0-4.11-1.701-7.88-4.422-10.602-2.722-2.721-6.463-4.422-10.602-4.422h-35.434c-4.109 0-7.88 1.701-10.602 4.422-2.721 2.722-4.422 6.492-4.422 10.602v9.921zm-113.303-72.453c-9.043 9.836-21.713 15.477-35.093 15.477s-26.051-5.641-35.094-15.449c-7.455 2.778-13.635 6.378-18.028 10.545-4.28 4.082-6.747 8.617-6.747 13.266v29.112h119.738v-29.112c0-4.677-2.495-9.241-6.86-13.351-4.394-4.139-10.518-7.71-17.916-10.488zm374.915-32.259c0 6.945-1.502 13.55-4.195 19.531 7.938 3.316 14.712 7.568 19.871 12.444 7.285 6.917 11.452 15.137 11.452 24.123v36.595c0 4.139-3.345 7.512-7.483 7.512h-71.265c-3.855 7.001-8.192 13.861-12.926 20.523-5.641 7.909-11.82 15.449-18.482 22.536-2.835 3.005-7.569 3.147-10.573.312-3.005-2.835-3.147-7.568-.34-10.573 6.235-6.604 11.99-13.634 17.206-20.948 2.749-3.855 5.357-7.795 7.823-11.849h-46.177c-4.139 0-7.512-3.373-7.512-7.512v-36.595c0-9.014 4.223-17.263 11.564-24.207 5.131-4.848 11.878-9.071 19.787-12.359-2.722-5.981-4.224-12.586-4.224-19.531v-43.115c0-8.277 3.401-15.789 8.815-21.231 5.442-5.414 12.954-8.788 21.203-8.788h4.904c-1.616-3.458-3.373-6.86-5.244-10.205-3.714-6.69-7.88-13.21-12.444-19.446-2.438-3.345-1.728-8.022 1.616-10.459 3.316-2.438 7.993-1.73 10.46 1.615 4.875 6.69 9.383 13.72 13.436 21.033 3.146 5.641 6.01 11.48 8.59 17.461h14.116c8.276 0 15.79 3.374 21.232 8.788 5.414 5.442 8.787 12.954 8.787 21.231v43.114zm-12.643 32.287c-9.043 9.808-21.686 15.449-35.094 15.449-13.38 0-26.022-5.641-35.093-15.449-7.398 2.75-13.55 6.35-17.943 10.488-4.338 4.11-6.804 8.674-6.804 13.323v29.112h119.709v-29.112c0-4.649-2.467-9.184-6.775-13.266-4.365-4.167-10.544-7.767-18-10.545zm-168.493 105.619c0 6.945-1.502 13.578-4.195 19.531 7.937 3.345 14.712 7.568 19.871 12.472 2.806 2.665 5.159 5.528 6.974 8.561 6.009-2.551 11.849-5.414 17.546-8.589 7.88-4.394 15.478-9.411 22.733-14.939 3.289-2.523 7.966-1.899 10.488 1.389 2.495 3.288 1.871 7.994-1.417 10.488-7.767 5.925-15.959 11.339-24.548 16.129-6.604 3.685-13.408 7.002-20.353 9.865.028.396.028.822.028 1.219v36.595c0 4.139-3.346 7.483-7.483 7.483h-134.732c-4.139 0-7.512-3.345-7.512-7.483v-36.595c0-.397.028-.794.028-1.19-7.144-2.92-14.088-6.208-20.806-9.865-8.561-4.649-16.725-9.921-24.492-15.732-3.316-2.466-3.968-7.143-1.502-10.46 2.467-3.289 7.172-3.969 10.46-1.474 7.172 5.357 14.74 10.205 22.677 14.542 5.84 3.203 11.878 6.066 18.086 8.646 1.814-3.004 4.139-5.839 6.916-8.504 5.159-4.932 11.962-9.184 19.985-12.529-2.723-5.981-4.225-12.586-4.225-19.559v-43.115c0-8.249 3.373-15.76 8.816-21.203 5.443-5.442 12.955-8.815 21.203-8.815h35.434c8.277 0 15.789 3.373 21.203 8.815 5.443 5.443 8.816 12.954 8.816 21.203v43.114zm-12.643 32.287c-9.042 9.836-21.713 15.449-35.093 15.449-13.379 0-26.051-5.613-35.093-15.449-7.483 2.778-13.664 6.435-18.086 10.63-4.252 4.053-6.689 8.589-6.689 13.21v29.083h119.736v-29.083c0-4.649-2.466-9.213-6.746-13.266-4.394-4.168-10.573-7.797-18.029-10.574zm-164.411-297.525c-2.977 2.863-7.711 2.778-10.573-.199-2.863-2.976-2.778-7.71.198-10.573 5.953-5.726 12.19-11.055 18.738-15.959 5.414-4.053 11.14-7.88 17.121-11.452 1.928-25.597 13.096-48.614 30.218-65.708 18.821-18.85 44.873-30.5 73.616-30.5 28.772 0 54.795 11.65 73.646 30.5 16.978 16.979 28.119 39.827 30.16 65.197 5.867 3.6 11.537 7.512 16.979 11.65 6.549 4.989 12.842 10.403 18.795 16.214 2.977 2.863 3.033 7.597.17 10.573-2.892 2.948-7.625 3.005-10.573.142-5.528-5.358-11.368-10.375-17.463-15.024-2.607-2.013-5.271-3.912-7.937-5.754-2.324 28.488-15.052 47.849-27.27 66.388-11.055 16.809-21.656 32.91-21.826 54.539l.028 34.667c0 9.978-4.082 19.021-10.658 25.597-6.55 6.548-15.62 10.63-25.569 10.63h-36.935c-9.979 0-19.049-4.082-25.599-10.63-6.548-6.577-10.629-15.619-10.629-25.597l.027-34.667c-.198-21.628-10.771-37.73-21.826-54.539-12.189-18.482-24.86-37.729-27.241-66.047-2.806 1.871-5.556 3.827-8.249 5.839-6.179 4.594-11.962 9.526-17.348 14.713zm89.632 123.336h79.371v-15.194h-79.371zm79.059 14.995h-78.746c.766 4.393 2.891 8.334 5.924 11.367 3.855 3.855 9.156 6.236 14.996 6.236h36.935c5.811 0 11.111-2.381 14.967-6.236 3.033-3.033 5.158-6.974 5.924-11.367zm-46.602-111.373c-1.219-4.479-3.345-10.602-5.754-17.604-6.775-19.587-15.789-45.666-15.789-65.367 0-18.907 7.229-32.4 28.771-32.4s28.8 13.493 28.8 32.4c0 19.701-9.014 45.78-15.789 65.367-2.438 7.03-4.563 13.21-5.811 17.689-1.077 3.997-5.188 6.321-9.156 5.244-2.691-.738-4.619-2.835-5.272-5.329zm-6.547-82.971c0 16.384 7.568 39.203 13.776 57.26 6.236-18.057 13.805-40.876 13.805-57.26 0-10.148-3.486-17.405-13.805-17.405-10.318.001-13.776 7.258-13.776 17.405zm6.293 109.446c0-4.139 3.345-7.483 7.483-7.483s7.512 3.345 7.512 7.483v7.795c0 4.139-3.373 7.484-7.512 7.484s-7.483-3.345-7.483-7.484zm-32.571 39.714h80.107c1.985-22.422 12.757-38.806 23.982-55.843 12.273-18.652 25.114-38.183 25.114-67.549 0-24.633-9.977-46.914-26.106-63.043-16.129-16.129-38.41-26.107-63.043-26.107-24.605 0-46.886 9.978-63.015 26.107-16.13 16.129-26.107 38.41-26.107 63.043 0 29.367 12.841 48.897 25.115 67.549 11.196 17.037 21.997 33.42 23.953 55.843z"/></g></svg>
function taskIcon(){return <svg height="30" viewBox="0 0 64 64" width="30" xmlns="http://www.w3.org/2000/svg"><g id="_21-Check_list" data-name="21-Check list"><path d="m53 64h-42a5.006 5.006 0 0 1 -5-5v-54a5.006 5.006 0 0 1 5-5h42a5.006 5.006 0 0 1 5 5v6h-2v-6a3 3 0 0 0 -3-3h-42a3 3 0 0 0 -3 3v54a3 3 0 0 0 3 3h42a3 3 0 0 0 3-3v-20h2v20a5.006 5.006 0 0 1 -5 5z"/><path d="m56 35h2v2h-2z"/><path d="m53 56h-8v-2h8v-15h2v15a2 2 0 0 1 -2 2z"/><path d="m53 13h2v2h-2z"/><path d="m39 56h-28a2 2 0 0 1 -2-2v-49a2 2 0 0 1 2-2h42a2 2 0 0 1 2 2v6h-2v-6h-42v49h28z"/><path d="m44.95 52.363a1 1 0 0 1 -.416-.091l-3.648-1.672a1 1 0 0 1 -.487-1.338l17.861-37.552a3.034 3.034 0 0 1 3.993-1.434 2.965 2.965 0 0 1 1.569 1.693 2.916 2.916 0 0 1 -.108 2.268l-17.861 37.556a1 1 0 0 1 -.903.57zm-2.309-3.155 1.829.836 17.438-36.666a.939.939 0 0 0 .035-.726.979.979 0 0 0 -.521-.557 1.027 1.027 0 0 0 -1.356.474z"/><path d="m41 56a1 1 0 0 1 -1-1.057l.3-5.3 2 .113-.162 2.841 2.134-1.965 1.355 1.468-3.95 3.636a1 1 0 0 1 -.677.264z"/><path d="m32 62a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0 -1-1z"/><path d="m22 15h-6a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-5-2h4v-4h-4z"/><path d="m28 7h20v2h-20z"/><path d="m28 10h20v2h-20z"/><path d="m28 13h20v2h-20z"/><path d="m22 27h-6a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-5-2h4v-4h-4z"/><path d="m28 19h20v2h-20z"/><path d="m28 22h20v2h-20z"/><path d="m28 25h20v2h-20z"/><path d="m22 39h-6a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-5-2h4v-4h-4z"/><path d="m28 31h11v2h-11z"/><path d="m28 34h11v2h-11z"/><path d="m28 37h11v2h-11z"/><path d="m22 51h-6a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-5-2h4v-4h-4z"/><path d="m28 43h11v2h-11z"/><path d="m28 46h11v2h-11z"/><path d="m28 49h11v2h-11z"/><path d="m14.343 9h11.314v2h-11.314z" transform="matrix(.707 -.707 .707 .707 -1.213 17.071)"/><path d="m14.343 21h11.314v2h-11.314z" transform="matrix(.707 -.707 .707 .707 -9.698 20.586)"/></g></svg>}
function documentIcon(){return <svg id="Capa_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="m507.786 64.62c-.304-.286-60.445-57.641-60.445-57.641-2.299-2.206-4.677-4.486-9.117-4.486h-242.12c-7.072 0-12.826 5.753-12.826 12.825v39.383l-85.335 14.628c-6.84 1.2-11.44 7.746-10.255 14.579l4.331 25.252c-27.737 9.334-56.214 18.956-83.705 28.831-6.496 2.375-9.905 9.598-7.587 16.133l54.685 152.016c1.1 3.059 3.983 4.964 7.058 4.964.842 0 1.7-.143 2.538-.445 3.898-1.402 5.921-5.698 4.519-9.596l-53.876-149.768c25.9-9.273 52.722-18.349 78.935-27.172l25.771 150.245 29.654 173.032c1.071 6.108 6.44 10.454 12.5 10.454.686 0 1.382-.056 2.08-.171l80.316-13.783 62.76-10.758-94.391 33.927-74.435 26.763-57.808-160.789c-1.401-3.898-5.696-5.921-9.595-4.52-3.898 1.401-5.921 5.697-4.52 9.595l58.628 163.074c1.875 5.128 6.733 8.316 11.868 8.316 1.419 0 2.86-.244 4.264-.757l76.671-27.566 174.094-62.574 33.259-5.701h73.471c7.072 0 12.826-5.766 12.826-12.854v-326.985c.001-4.489-2.435-6.779-4.213-8.451zm-19.871 1.776h-37.53l-.93.004c-1.797.012-6.004.043-7.071-1.017-.246-.245-.534-1.063-.534-2.582l-.087-40.415zm9.085 331.512h-298.722v-146.167c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v148.313c0 7.087 5.754 12.854 12.826 12.854h140.812l-94.545 16.206-77.982 13.383-29.248-170.665-32.269-188.13 80.405-13.783v147.022c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-199.449h228.475l.098 45.326c0 5.494 1.671 9.938 4.966 13.21 5.063 5.027 12.22 5.377 16.663 5.377.382 0 .744-.003 1.083-.005l47.438-.003z"/><path d="m234.43 118.949c0 4.142 3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-214.436c-4.142 0-7.5 3.358-7.5 7.5z"/><path d="m456.366 164.731h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m456.366 218.013h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m456.366 271.295h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m456.366 324.578h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/></g></svg>}
const charticon = <svg id="Layer_5" enable-background="new 0 0 64 64" height="24" viewBox="0 0 64 64" width="24" xmlns="http://www.w3.org/2000/svg"><g><path d="m23 5h10v2h-10z"/><path d="m23 9h10v2h-10z"/><path d="m27 13h2v2h-2z"/><path d="m23 13h2v2h-2z"/><path d="m31 13h2v2h-2z"/><path d="m38.121 36.293 3.293-3.293h15.193c2.443 0 4.491-1.832 4.762-4.261l1.602-14.418c.019-.176.029-.354.029-.531 0-2.641-2.148-4.79-4.79-4.79h-21.537l.298-2.68c.019-.175.029-.353.029-.53 0-2.641-2.148-4.79-4.79-4.79h-26.42c-2.642 0-4.79 2.149-4.79 4.79 0 .177.01.354.029.529l1.602 14.42c.27 2.429 2.318 4.261 4.762 4.261h9.607v8h-4v-4h-12v10h12v-4h4v10h-4v-4h-12v10h12v-4h4v10h-4v-4h-12v10h12v-4h6v-12h11v3h5v4h-5v8h12v-3h8v3h12v-8h-5v-4h5v-8h-12v3h-8v-3h-5v-5.082c.42-.107.813-.316 1.121-.625zm-27.121.707h-8v-6h8zm0 12h-8v-6h8zm0 12h-8v-6h8zm36-43c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm9 13h-12v-2c0-3.309 2.691-6 6-6s6 2.691 6 6zm-19.549-20h21.759c1.538 0 2.79 1.251 2.79 2.79 0 .102-.006.205-.018.308l-1.602 14.419c-.101.912-.635 1.674-1.381 2.104v-1.621c0-3.232-1.93-6.016-4.695-7.277 1.032-.917 1.696-2.238 1.696-3.723 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.485.664 2.806 1.695 3.723-2.765 1.261-4.695 4.045-4.695 7.277v2h-1.414l-3.879 3.879c-.238.239-.707.045-.707-.293v-3.586h-2.607c-1.424 0-2.616-1.067-2.773-2.482l-.391-3.518h.379c2.443 0 4.491-1.832 4.762-4.261zm-31.832 9.518-1.601-14.421c-.012-.102-.018-.205-.018-.307 0-1.539 1.252-2.79 2.79-2.79h26.42c1.538 0 2.79 1.251 2.79 2.79 0 .102-.006.205-.018.308l-1.602 14.419c-.156 1.416-1.349 2.483-2.773 2.483h-4.607v3.586c0 .338-.47.531-.707.293l-3.293-3.293v-2.586c0-3.232-1.93-6.016-4.695-7.277 1.031-.917 1.695-2.238 1.695-3.723 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.485.664 2.806 1.695 3.723-2.765 1.261-4.695 4.045-4.695 7.277v1.622c-.746-.43-1.28-1.193-1.381-2.104zm6.381-10.518c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm9 13h-12v-2c0-3.309 2.691-6 6-6s6 2.691 6 6zm20 37h-8v-4h8zm20 0h-8v-4h8zm-8-16h8v4h-8zm-2 3v3h5v4h-5v3h-8v-3h-5v-4h5v-3zm-10 1h-8v-4h8zm-10-6v3h-11v-20h1.586l3.292 3.292c.449.45 1.071.708 1.708.708 1.331 0 2.414-1.083 2.414-2.414v-1.586h.216l.415 3.739c.27 2.429 2.318 4.261 4.762 4.261h.607v1.586c0 .802.397 1.508 1 1.947v5.467z"/><path d="m5 57h4v2h-4z"/><path d="m5 45h4v2h-4z"/><path d="m5 33h4v2h-4z"/></g></svg>
const certificateIcon = <svg id="Capa_1" enable-background="new 0 0 512 512" height="32" viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_2590_"><g id="XMLID_212_"><path id="XMLID_215_" d="m460.459 441.32-86.206-149.314c31.891-30.919 51.747-74.184 51.747-122.006 0-93.738-76.261-170-170-170s-170 76.262-170 170c0 47.822 19.856 91.087 51.748 122.007l-86.207 149.313c-2.023 3.505-1.735 7.884.731 11.093 2.465 3.208 6.622 4.614 10.531 3.563l66.454-17.904 17.722 66.503c1.042 3.911 4.338 6.808 8.351 7.339.44.058.879.087 1.315.087 3.538 0 6.855-1.88 8.657-5l90.698-157.095 90.698 157.094c1.802 3.121 5.12 5 8.657 5 .436 0 .875-.029 1.315-.087 4.012-.531 7.309-3.428 8.351-7.339l17.722-66.503 66.455 17.904c3.91 1.054 8.065-.354 10.531-3.563 2.466-3.208 2.754-7.587.73-11.092zm-354.459-271.32c0-82.71 67.29-150 150-150s150 67.29 150 150-67.29 150-150 150-150-67.29-150-150zm54.076 306.052-14.075-52.819c-.684-2.567-2.362-4.757-4.663-6.085-2.301-1.329-5.035-1.687-7.602-.996l-52.78 14.22 72.221-125.089c24.355 18.556 53.844 30.7 85.933 33.88zm218.188-59.901c-2.567-.691-5.301-.333-7.602.996s-3.979 3.518-4.663 6.085l-14.075 52.819-79.034-136.89c32.089-3.18 61.578-15.324 85.933-33.88l72.22 125.09z"/><path id="XMLID_885_" d="m193.352 149.609c-2.131 6.565-.384 13.635 4.56 18.451l15.992 15.581-3.769 22.006c-1.165 6.803 1.581 13.548 7.166 17.604 3.155 2.291 6.844 3.454 10.559 3.454 2.862 0 5.739-.691 8.397-2.089l19.759-10.395 19.765 10.384c6.11 3.21 13.374 2.684 18.956-1.375 5.583-4.058 8.325-10.805 7.156-17.607l-3.78-22.005 15.984-15.589c4.941-4.819 6.684-11.89 4.55-18.453-2.135-6.563-7.704-11.256-14.534-12.247l-22.096-3.205-9.886-20.019c-3.056-6.188-9.239-10.03-16.139-10.03-.001 0-.003 0-.005 0-6.901.002-13.085 3.848-16.139 10.038l-9.875 20.024-22.094 3.217c-6.829.996-12.396 5.691-14.527 12.255zm44.706 3.563c3.257-.474 6.072-2.521 7.528-5.472l10.408-21.104 10.42 21.099c1.458 2.951 4.274 4.996 7.531 5.468l23.289 3.378-16.846 16.43c-2.356 2.298-3.431 5.608-2.874 8.852l3.984 23.192-20.832-10.945c-2.913-1.531-6.394-1.53-9.307.002l-20.826 10.956 3.972-23.194c.556-3.244-.521-6.554-2.878-8.851l-16.855-16.421z"/><path id="XMLID_887_" d="m256 296c69.477 0 126-56.523 126-126 0-51.209-30.58-96.935-77.906-116.493-5.108-2.112-10.953.318-13.061 5.422-2.109 5.104.318 10.952 5.422 13.061 39.817 16.455 65.545 54.927 65.545 98.01 0 58.449-47.551 106-106 106s-106-47.551-106-106c0-43.186 25.812-81.692 65.759-98.098 5.109-2.098 7.55-7.941 5.452-13.049-2.099-5.109-7.94-7.549-13.049-5.452-47.482 19.501-78.162 65.268-78.162 116.599 0 69.477 56.524 126 126 126z"/><path id="XMLID_888_" d="m256.13 64c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07-4.44-2.93-7.07-2.93-5.21 1.07-7.07 2.93c-1.87 1.86-2.93 4.44-2.93 7.07s1.06 5.21 2.93 7.07c1.86 1.86 4.44 2.93 7.07 2.93z"/></g></g></svg>

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage:
      "url(" + `${process.env.PUBLIC_URL}/images/background_menu.jpg` + ")",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  isActive: {
    backgroundColor: "#e0f5fd",
    color: "#0080ff",
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerPaper]: props.open,
          [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div className={classes.toolbar}></div>
      
      <Divider />
      <List>
        {/* Directory */}
        <ListItem
          component={NavLink}
          to="/directory"
          button
          key="Directory"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Directory" />
        </ListItem>

        <ListItem
          component={NavLink}
          to="/organization_chart"
          button
          key="Chart"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {charticon}
          </ListItemIcon>
          <ListItemText primary="Organization Chart" />
        </ListItem>


        <ListItem
          component={NavLink}
          to="/documents"
          button
          key="Documents"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {documentIcon()}
          </ListItemIcon>
          <ListItemText primary="Documents" />
        </ListItem>

        <ListItem
          component={NavLink}
          to="/teamdirectory"
          button
          key="teamdirectory"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {groupDirectoryIcon}
          </ListItemIcon>
          <ListItemText primary="Assign Team Directory" />
        </ListItem>

        <ListItem
          component={NavLink}
          to="/viewteamdirectory"
          button
          key="viewteamdirectory"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {groupDirectoryIcon}
          </ListItemIcon>
          <ListItemText primary="Team Directory" />
        </ListItem>

        <ListItem
          component={NavLink}
          to="/jobtask"
          button
          key="Jobtask"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {taskIcon()}
          </ListItemIcon>
          <ListItemText primary="Job Tasks" />
          </ListItem>
          
        <ListItem
          component={NavLink}
          to="/certificate"
          button
          key="Certificate"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {certificateIcon}
          </ListItemIcon>
          <ListItemText primary="Certificate" />
        </ListItem>
        
        <ListItem
          component={NavLink}
          to="/viewCertificate"
          button
          key="viewCertificate"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {certificateIcon}
          </ListItemIcon>
          <ListItemText primary="viewCertificate" />
        </ListItem>
      </List>

    </Drawer>
  );
}
