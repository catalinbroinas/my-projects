import reactIcon from "../../assets/icons/technologies/react.svg";
import javaScriptIcon from "../../assets/icons/technologies/javaScript.svg";
import sassIcon from "../../assets/icons/technologies/sass.svg";
import mdbIcon from "../../assets/icons/technologies/mdb.svg";
import viteIcon from "../../assets/icons/technologies/vite.svg";
import htmlIcon from "../../assets/icons/technologies/html.svg";
import fontAwesomeIcon from "../../assets/icons/technologies/font-awesome.svg";
import jsonIcon from "../../assets/icons/technologies/json.svg";
import cssIcon from "../../assets/icons/technologies/css.svg";
import webpackIcon from "../../assets/icons/technologies/webpack.svg";
import jestIcon from "../../assets/icons/technologies/jest.svg";
import mdiIcon from "../../assets/icons/technologies/mdi.svg";

export const TECHNOLOGIES = {
  HTML: {
    id: "html",
    label: "HTML",
    imageUrl: htmlIcon
  },
  CSS: {
    id: 'css',
    label: 'CSS',
    imageUrl: cssIcon
  },
  SCSS: {
    id: 'scss',
    label: 'SCSS',
    imageUrl: sassIcon
  },
  JAVASCRIPT: {
    id: 'javascript',
    label: 'JavaScript',
    imageUrl: javaScriptIcon
  },
  REACT: {
    id: 'react',
    label: 'React',
    imageUrl: reactIcon
  },
  MDBOOTSTRAP: {
    id: 'mdbootstrap',
    label: 'MDBootstrap',
    imageUrl: mdbIcon
  },
  VITE: {
    id: 'vite',
    label: 'Vite',
    imageUrl: viteIcon
  },
  WEBPACK: {
    id: 'webpack',
    label: 'Webpack',
    imageUrl: webpackIcon
  },
  FONTAWESOME: {
    id: 'fontawesome',
    label: 'Font Awesome',
    imageUrl: fontAwesomeIcon
  },
  MATERIALDESIGNICONS: {
    id: 'materialdesignicons',
    label: 'Material Design Icons',
    imageUrl: mdiIcon
  },
  JSON: {
    id: 'json',
    label: 'JSON',
    imageUrl: jsonIcon
  },
  PHP: {
    id: 'php',
    label: 'PHP',
  },
  SQL: {
    id: 'sql',
    label: 'SQL',
  },
  JEST: {
    id: 'jest',
    label: 'Jest',
    imageUrl: jestIcon
  },
};

export const FEATURED_TECHNOLOGIES = [
  TECHNOLOGIES.SCSS,
  TECHNOLOGIES.JAVASCRIPT,
  TECHNOLOGIES.REACT,
  TECHNOLOGIES.MDBOOTSTRAP,
  TECHNOLOGIES.VITE,
  TECHNOLOGIES.WEBPACK,
  TECHNOLOGIES.PHP,
];
