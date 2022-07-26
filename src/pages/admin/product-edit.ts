import Header from "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import { get, update } from "../../api/product";
import { upload } from "../../api/images";
import Products from "../../model/products";

const ProductEdit = {
    render: async (id) => {
        const { data } = await get(id);
        const product: Products[] = id;
        return /*html*/`
            ${Header.render()}
            <div id="new" class="flex bg-[#E5E5E5] h-screen">
                ${Sidebar.render()}
                <div id="main" class="ml-[30px] h-screen">
                    <div class="pt-[30px] text-black text-xl font-medium mr-[955px]">
                        <h3>Cập nhật sản phẩm</h3>
                    </div>
                    <div class="flex">
                        <div class="mt-[50px] ml-[15px]">
                            <div class="bg-white w-[390px] h-[300px] rounded-t-xl">
                                <form action="" class="text-green-600">
                                    <img src="${data.image}" id="edit-image" alt="" class="w-full h-[250px]">
                                    <input type="file" id="edit-file" class="ml-7 mt-3">
                                </form>
                            </div>
                            <hr>
                            <div class="bg-white rounded-b-xl">
                                <span>Mô tả ngắn:</span>
                                <textarea name="" id="shortDescription" class="w-full">${data.shortDescription}</textarea>
                                <p id="thongbaomtn"  class="thongbaoloi"></p>
                                </div>
                        </div>
                        <div class="ml-[20px] w-[730px]">
                            <div class="bg-[#ffffff] h-full">
                                <h4 class="pt-[10px] pl-4 pb-4">Thông tin sản phẩm</h4>
                                <hr>
                                <form action="" id="formEdit">
                                    <div class="m-5">
                                    <label for="">Tên sản phẩm:</label>
                                    <input type="text" id="name" class="w-[690px] h-[36px]" style="border:1px solid #E1E5EB;" value="${data.name}">
                                    <p id="thongbao1"  class="thongbaoloi"></p>
                                    </div>
                                    <div class="flex">
                                        <div class="ml-5">
                                            <label for="">Giá gốc:</label>
                                            <input type="text" id="originalPrice" class="w-[335px] h-[36px]" style="border:1px solid #E1E5EB;" value="${data.originalPrice}">
                                            <p id="thongbaogia"  class="thongbaoloi"></p>
                                            </div>
                                        <div class="ml-5">
                                            <label for="">Giá khuyến mãi:</label>
                                            <input type="text" id="saleOffPrice" class="w-[335px] h-[36px]" style="border:1px solid #E1E5EB;" value="${data.saleOffPrice}">
                                            <p id="thongbaokm"  class="thongbaoloi"></p>
                                            </div>
                                    </div>
                                    <div class="m-5">
                                        <p>Danh mục:</p>
                                        <select name="" id="category" value="" class="w-[335px] h-[36px]" style="border:1px solid #E1E5EB;" >
                                            <option value="${data.category}" hidden>${data.category}</option>
                                            <option value="Điện thoại">Điện thoại</option>
                                            <option value="Laptop">Laptop</option>
                                            <option value="Máy tính bảng">Máy tính bảng</option>
                                            <option value="Âm thanh">Âm thanh</option>
                                        </select>
                                    </div>
                                    <div class="m-5">
                                        <label for="">Đặc điểm nổi bật:</label>
                                        <input type="text" id="feature" value="${data.feature}" class="w-[690px] h-[100px]" style="border:1px solid #E1E5EB;">
                                        <p id="thongbaonb"  class="thongbaoloi"></p>
                                        </div>
                                    <div class="m-5">
                                        <label for="">Mô tả dài:</label>
                                        <textarea name="" id="description" class="w-[690px] h-[80px]" style="border:1px solid #E1E5EB;">${data.description}</textarea>
                                        <p id="thongbaomt"  class="thongbaoloi"></p>
                                    </div>
                                    <button id="btn-update" class="p-3 bg-green-500 text-white rounded-xl mb-4 ml-5">Cập nhật</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    afterRender: async (id) => {
        console.log(id);
        const btnUpdate = document.getElementById('btn-update');
        console.log(btnUpdate);

        const editFile = document.querySelector('#edit-file');
        const editImage = document.querySelector('#edit-image');

        btnUpdate?.addEventListener('click', function (e) {
            e.preventDefault();
            const product = {
                id: id,
                name: document.getElementById('name')?.value,
                originalPrice: Number(document.getElementById('originalPrice')?.value),
                image: editImage?.src,
                saleOffPrice: Number(document.getElementById("saleOffPrice")?.value),
                category: document.getElementById('category')?.value,
                feature: document.getElementById('feature')?.value,
                description: document.getElementById('description')?.value,
                shortDescription: document.getElementById('shortDescription')?.value,
            };
            console.log(product);

            //validate
            const thongbao1 = document.getElementById("thongbao1")
            const thongbaogia = document.getElementById("thongbaogia")
            const thongbaonb = document.getElementById("thongbaonb")
            const thongbaomt = document.getElementById("thongbaomt")
            const thongbaomtn = document.getElementById("thongbaomtn")
            const thongbaokm = document.getElementById("thongbaokm")

            const name = document.getElementById('name')?.value;
            const originalPrice = Number(document.getElementById('originalPrice')?.value);
            const image = editImage?.src;
            const saleOffPrice = Number(document.getElementById('saleOffPrice')?.value);
            const category = document.getElementById('category')?.value;
            const feature = document.getElementById('feature')?.value;
            const description = document.getElementById('description')?.value;
            const shortDescription = document.getElementById('shortDescription')?.value;

            if (name.length < 5) {
                document.getElementById("name").style.border = "1px solid red"
                thongbao1.innerHTML = "Tên sản phẩm phải tối thiểu 5 kí tự";
                return false
            } else {
                document.getElementById("name").style.border = ""
                thongbao1.innerHTML = "";
            }

            if (originalPrice == "") {
                document.getElementById("originalPrice").style.border = "1px solid red"
                thongbaogia.innerHTML = "Bạn không được để trống giá";
                return false
            } else {
                document.getElementById("originalPrice").style.border = ""
                thongbaogia.innerHTML = "";
            }

            if (saleOffPrice == "") {
                document.getElementById("saleOffPrice").style.border = "1px solid red"
                thongbaokm.innerHTML = "Bạn không được để trống giá";
                return false
            } else {
                document.getElementById("saleOffPrice").style.border = ""
                thongbaokm.innerHTML = "";
            }

            if (feature.length < 5) {
                document.getElementById("feature").style.border = "1px solid red"
                thongbaonb.innerHTML = "Phần nổi bật phải tối thiểu 5 kí tự";
                return false
            } else {
                document.getElementById("feature").style.border = ""
                thongbaonb.innerHTML = "";
            }

            if (description.length < 5) {
                document.getElementById("description").style.border = "1px solid red"
                thongbaomt.innerHTML = "Phần mô tả phải tối thiểu 5 kí tự";
                return false
            } else {
                document.getElementById("description").style.border = ""
                thongbaomt.innerHTML = "";
            }


            if (shortDescription.length < 5) {
                document.getElementById("shortDescription").style.border = "1px solid red"
                thongbaomtn.innerHTML = "Phần mô tả ngắn phải tối thiểu 5 kí tự";
                return false
            } else {
                document.getElementById("shortDescription").style.border = ""
                thongbaomtn.innerHTML = "";
            }




            update(product);
            alert("Cập nhật dữ liệu thành công");
            location.href = "/"
        })
        editFile?.addEventListener('change', (event) => {
            const file = event.target.files[0];
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = async () => {
                const res = await upload(reader.result);
                console.log(res)
                const data = res.data
                editImage.src = data.url

            }
        })
    }
}

export default ProductEdit;