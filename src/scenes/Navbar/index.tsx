import { useState } from "react"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import Hamburger from "./Hamburger"
import ActionButton from "@/shared/ActionButton"

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage:(value: SelectedPage)=> void;
    isTopOfPage: boolean;
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {

    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    let open = ""
    let navbarBackground = isTopOfPage ? "bg-gray-20": "bg-primary-100 drop-shadow"

    const handleMenuButton = ()=>{ 
        setIsMenuToggled(!isMenuToggled);
        open= isMenuToggled ? "open" : "";
    }

  return (
    <nav>
        <div className={`${flexBetween} ${navbarBackground} fixed top-0 py-6 z-30 w-full`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16 `}>
                    {/**Left Side */}
                    <img src={Logo} alt="logo" />

                    {/**Right Side */}
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link 
                                    page="Home" 
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <a>Sign In</a>
                                <ActionButton 
                                    setSelectedPage={setSelectedPage}
                                >
                                    Become a Member
                                </ActionButton>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="rounded-full hamburger bg-secondary-500 p-4"
                            onClick={handleMenuButton}
                        >
                            <Hamburger />
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/**Mobile Menu Modal */}
        {!isAboveMediumScreens && isMenuToggled &&(
            <div className=" fixed right-0 bottom-(-10) z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/**Close Icon */} 

                <div className="absolute top-4 right-12 open p-4">
                    <button className="" onClick={handleMenuButton}><Hamburger /></button>
                </div>

                {/**Mobile Menu Item  */}
                <div className="ml-[33%] mt-20 flex flex-col gap-10 text-2xl ">
                    <Link 
                        page="Home" 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar;

