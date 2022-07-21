import Header from "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Products from "../../model/products";
import { getAll } from "../../api/product";

const HomeAdmin = {
    render: async () => {
        const data = await getAll();
        const product: Products[] = data.data;
        return /*html*/`
            ${Header.render()}
            <div id="new" class="flex bg-[#E5E5E5] h-screen">
                ${Sidebar.render()}
                <div id="main" class="ml-[30px] h-screen">
                    <div class="flex">
                        <h2 class="pt-[33px] text-black text-xl font-medium mr-[955px]">Điện thoại</h2>
                        <a href="/admin/product-add" data-navigo class="mr-[77px] mt-[25px] rounded-sm p-[3px] h-[41px]">
                            <i class="fa-solid fa-circle-plus fa-3x text-green-600"></i>
                        </a>
                    </div>
                    <div class="flex h-[70px]">
                        <h5 class="mr-[20px] leading-[70px]">Bộ lọc</h5>
                        <div class="">
                            <p class="mb-[5px]">Danh mục sản phẩm</p>
                            <select name="" id="" class="w-[355px] h-[35px] rounded-xl">
                                <option value="">Laptop</option>
                                <option value="">Điện thoại</option>
                                <option value="">Máy tính bảng</option>
                                <option value="">Âm thanh</option>
                            </select>
                        </div>
                    </div>
                    <div id="table" class="mt-[30px] mb-[30px] mr-[20px]">
                        <table class="table-auto w-full">
                            <thead class="bg-[#FBFBFB] h-[40px]">
                                <tr>
                                    <th>#</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Giá gốc</th>
                                    <th>Ẩn/Hiện</th>
                                    <th>Hoàn tác</th>
                                </tr>
                            </thead>
                            <tbody class="h-[40px] bg-white">
                                ${product.map((item, index) => /*html*/`
                                    <tr class="text-center">
                                        <td class="w-10 text-center">${index + 1}</td>
                                        <td class="w-[500px]">${item.name}</td>
                                        <td>
                                            <img src="${item.image}" class="w-[100px] h-[100px]" alt="">   
                                        </td>
                                        <td>${item.originalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                        <td>
                                            <a href="">
                                                <i class="fa-solid fa-toggle-on fa-xl text-green-600 fa-2x"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="/admin/product-edit/${item.id}" data-navigo>
                                                <i class="fa-solid fa-pen-to-square fa-xl text-blue-600 hover:text-green-600"></i>
                                            </a>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `
    }
}

export default HomeAdmin;