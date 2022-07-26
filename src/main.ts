import Navigo from 'navigo'; // When using ES modules.
import './style.css';
import HomeAdmin from './pages/admin/home';
import ProductAdd from './pages/admin/product-add';
import ProductEdit from './pages/admin/product-edit';

const router = new Navigo('/', { linksSelector: 'a' });

export type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase, id) => {
  const app = document.getElementById('app');
  if (app) app.innerHTML = await component.render(id);
  if (component.afterRender) await component.afterRender(id)
}

router.on({
  '/': () => print(HomeAdmin),
  '/admin/product-add': () => print(ProductAdd),
  '/admin/product-edit/:id': (data) => {
    const id = +data.data.id;
    print(ProductEdit, id)
  }
});
router.resolve();

