const Header = {
    render() {
        return /*html*/ `
            <div id="header" class="flex w-full md:w-auto h-[64px] bg-[#00B0D7]">
                <div class="pt-[3px] pb-[4px] pr-[377px] pl-[50px]">
                    <img src="../../../../public/anhhtus-logo 2.png" alt="" class="w-[65px] h-[57px]">
                </div>
                <div class="pt-[10px] mr-[300px]">
                    <form action="">
                        <input type="text" class="w-[533px] h-[40px] rounded-md" placeholder="   Tìm kiếm sản phẩm">
                        <button class="w-[120px] bg-white h-[40px] rounded-md hover:bg-[#F37878] hover:text-white">Tìm kiếm</button>
                    </form>
                </div>
                <div class="leading-[64px] mt-[2px]">
                    <a href="#">
                        <i class="fa-solid fa-user fa-2x hover:text-white"></i>
                    </a>
                </div>
            </div>
        `;
    },
};

export default Header;
