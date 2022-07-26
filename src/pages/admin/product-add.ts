import Header from "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import { add } from "../../api/product";
import { upload } from "../../api/images";
import Products from "../../model/products";

const ProductAdd = {
    render: async () => {
        return /*html*/`
            ${Header.render()}
            <div id="new" class="flex bg-[#E5E5E5] h-screen">
                ${Sidebar.render()}
                <div id="main" class="ml-[30px] h-screen">
                    <div class="pt-[30px] text-black text-xl font-medium mr-[955px]">
                        <h3>Thêm mới sản phẩm</h3>
                    </div>
                    <div class="flex">
                        <div class="mt-[50px] ml-[15px]">
                            <div class="bg-white w-[390px] h-[300px] rounded-t-xl">
                                <form action="" class="text-green-600">
                                    <img src="" hidden id="edit-image" alt="" class="w-full h-[250px]">
                                    <input type="file" id="edit-file" class="ml-7 mt-3">
                                </form>
                            </div>
                            <hr>
                            <div class="bg-white rounded-b-xl">
                                <span>Mô tả ngắn:</span>
                                <form action="">
                                    <textarea name="" id="shortDescription" class="w-full"></textarea>
                                    <p id="thongbaomtn"  class="thongbaoloi"></p>
                                </form>
                            </div>
                        </div>
                    <div class="ml-[20px] w-[730px]">
                        <div class="bg-[#ffffff] h-full">
                        <h4 class="pt-[10px] pl-4 pb-4">Thông tin sản phẩm</h4>
                        <hr>
                        <form action="">
                            <div class="m-5">
                                <label for="">Tên sản phẩm:</label>
                                <input type="text" id="name" class="w-[690px] h-[36px]" style="border:1px solid #E1E5EB;" required>
                                <p id="thongbao1"  class="thongbaoloi"></p>
                                </div>
                            <div class="flex">
                                <div class="ml-5">
                                    <label for="">Giá gốc:</label>
                                    <input type="text" id="originalPrice" class="w-[335px] h-[36px]" style="border:1px solid #E1E5EB;" required>
                                    <p id="thongbaogia"  class="thongbaoloi"></p>
                                    </div>
                                <div class="ml-5">
                                    <label for="">Giá khuyến mãi:</label>
                                    <input type="text" id="saleOffPrice" class="w-[335px] h-[36px]" style="border:1px solid #E1E5EB;" required>
                                    <p id="thongbaokm"  class="thongbaoloi"></p>
                                </div>
                            </div>
                            <div class="m-5">
                                <p>Danh mục:</p>
                                <select name="" id="category" class="w-[335px] h-[36px]" style="border:1px solid #E1E5EB;">
                                    <option value="Điện thoại">Điện thoại</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Máy tính bảng">Máy tính bảng</option>
                                    <option value="Âm thanh">Âm thanh</option>
                                </select>
                            </div>
                            <div class="m-5">
                                <label for="">Đặc điểm nổi bật:</label>
                                <input type="text" id="feature" class="w-[690px] h-[100px]" style="border:1px solid #E1E5EB;" required>
                                <p id="thongbaonb"  class="thongbaoloi"></p>
                            </div>
                            <div class="m-5">
                                <label for="">Mô tả dài:</label>
                                <textarea name="" id="description" class="w-[690px] h-[80px]" style="border:1px solid #E1E5EB;"></textarea>
                                <p id="thongbaomt"  class="thongbaoloi"></p>
                                </div>
                            <button id="add-products" class="p-3 bg-green-500 text-white rounded-xl mb-4 ml-5">Thêm mới</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `
    },
    afterRender: async () => {
        const addProduct = document.getElementById('add-products');
        const inputFile = document.getElementById('edit-file');
        const previewImage = document.getElementById('edit-image');

        addProduct?.addEventListener('click', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name')?.value;
            const originalPrice = Number(document.getElementById('originalPrice')?.value);
            const image = previewImage?.src;
            const saleOffPrice = Number(document.getElementById('saleOffPrice')?.value);
            const category = document.getElementById('category')?.value;
            const feature = document.getElementById('feature')?.value;
            const description = document.getElementById('description')?.value;
            const shortDescription = document.getElementById('shortDescription')?.value;
            const product = new Products(name, originalPrice, image, saleOffPrice, category, feature, description, shortDescription);
            //validate
            const thongbao1 = document.getElementById("thongbao1")
            const thongbaogia = document.getElementById("thongbaogia")
            const thongbaonb = document.getElementById("thongbaonb")
            const thongbaomt = document.getElementById("thongbaomt")
            const thongbaomtn = document.getElementById("thongbaomtn")
            const thongbaokm = document.getElementById("thongbaokm")


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


            try {
                const data = await add(product)
                alert('Thêm mới thành công')
                location.href = "/"
            } catch (error) {
                alert("Lỗi" + error)
            }

        })

        inputFile?.addEventListener('change', async (e) => {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = async () => {
                try {
                    const res = await upload(reader.result)
                    const data = res.data
                    previewImage.src = data.url
                } catch (err) {
                    console.log(err)
                }
            }

        })
    }
}

export default ProductAdd;