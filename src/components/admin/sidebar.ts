// import { getAll } from "../../api/product";
// import Products from "../../model/products";
const Sidebar = {
    render() {
        // const cate = await getAll();
        // // console.log(cate);
        // const product: Products[] = cate.data;
        // console.log(product);

        // let categories = product.map(i => i.category)
        // categories = categories.filter(function (item, pos) {
        //     return categories.indexOf(item) == pos;
        // })
        /*${categories.map(c => /*html*//*`
                                <li data-categories="${c}"
                                    class="categories-btn ml-[25px] mr-[99px] hover:rounded-xl h-[33px] hover:bg-[#00B0D7] hover:text-white leading-[33px] pl-[15px]">
                                    <i class="fa-solid fa-mobile-screen-button"></i><a href="" class="pl-[10px]">${c}</a>
                                </li>
                            `).join('')}8*/
        // console.log(categories);
        return /*html*/`
            <div id="sidebar" class="w-full md:w-[300px] bg-white ">
                <ul class="pt-[33px] pb-[50px]">
                    
                    <li
                            class="ml-[25px] mr-[99px] hover:rounded-xl h-[33px] hover:bg-[#00B0D7] hover:text-white leading-[33px] pl-[15px]">
                            <i class="fa-solid fa-mobile-screen-button"></i><a href="" class="pl-[10px]">Điện thoại</a>
                        </li>
                    <li
                        class="ml-[25px] mt-[10px] mr-[99px] hover:rounded-xl h-[33px] hover:bg-[#00B0D7] hover:text-white leading-[33px] pl-[15px]">
                        <i class="fa-solid fa-laptop"></i><a href="" class="pl-[10px]">Laptop</a>
                    </li>
                    <li
                        class="ml-[25px] mt-[10px] mr-[99px] hover:rounded-xl h-[33px] hover:bg-[#00B0D7] hover:text-white leading-[33px] pl-[15px]">
                        <i class="fa-solid fa-tablet-screen-button"></i><a href="" class="pl-[10px]">Máy tính bảng</a>
                    </li>
                    <li
                        class="ml-[25px] mt-[10px] mr-[99px] hover:rounded-xl h-[33px] hover:bg-[#00B0D7] hover:text-white leading-[33px] pl-[15px]">
                        <i class="fa-solid fa-headphones-simple"></i><a href="" class="pl-[10px]">Âm thanh</a>
                    </li>
                </ul>
            </div>
        `
    },
    afterRender: function () {
        const btnElements = document.querySelectorAll('.categories-btn')
    }
}

export default Sidebar;