import { BSPlus, BSFillLightningFill, BsGearFill, BsPlus, BsFillLightningFill } from "react-icons/bs"
import { FaFire, FaPoo } from "react-icons/fa"

const SideBar = () => {
    return (
        <div className="fixed top-0 h-screen w-16 m-0
                        flex flex-col
                        bg-primary text-white shadow-lg">

            <SideBarIcon icon={<FaFire size="28" />} text="dis iz Fire🔥" />
            <SideBarIcon icon={<BsPlus size="32" />} text="Epic Plus➕" />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Lightning⚡" />
            <SideBarIcon icon={<FaPoo size="20" />} text="Poop💩" />
        </div>
    );
};

const SideBarIcon = ({ icon, text="tooltip 💡" }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;