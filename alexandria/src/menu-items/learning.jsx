// assets
import {
  BookOutlined,
  FormOutlined,
  LineChartOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';

// icons
const icons = {
  BookOutlined,
  FormOutlined,
  LineChartOutlined,
  PlayCircleOutlined
};

// ==============================|| MENU - APRENDIZAJE ||============================== //

const learning = {
  id: 'group-learning',
  title: 'Aprendizaje',
  type: 'group',
  children: [
    {
      id: 'catalog',
      title: 'Catálogo',
      type: 'item',
      url: '/app/catalogo',
      icon: icons.BookOutlined
    },
    {
      id: 'evaluations',
      title: 'Evaluaciones',
      type: 'item',
      url: '/app/evaluaciones',
      icon: icons.FormOutlined
    },
    {
      id: 'progress',
      title: 'Mi progreso',
      type: 'item',
      url: '/app/progreso',
      icon: icons.LineChartOutlined
    },
    {
      id: 'media',
      title: 'Material de estudio',
      type: 'item',
      url: '/app/material',
      icon: icons.PlayCircleOutlined
    }
  ]
};

export default learning;
